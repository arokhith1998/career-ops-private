#!/usr/bin/env node
/**
 * nightly-gsheet.mjs - Google Sheet job lists -> feed rows. ZERO tokens.
 *
 * ADDED 2026-09-18 for the India track. Some curated job lists live in public
 * Google Sheets (e.g. a Growth / Founder's Office / Chief of Staff tracker for
 * India). This reads each sheet's CSV export and writes rows in the same
 * column set as scrape-job-repos.mjs, so merge-feeds.mjs and the shortlist
 * gate treat them like any other source.
 *
 * Config: config/nightly.yml -> sheets:
 *   - name: india-growth-cos
 *     url: https://docs.google.com/spreadsheets/d/<id>/edit?gid=0   (any sheet URL)
 *     region_suffix: India      # appended to locations that do not name the country
 *     max_age_days: 45          # drop date groups older than this (the sheet lags)
 *     min_ctc_lpa: 35           # drop rows whose stated CTC tops out below this
 *
 * Sheet shape it understands: a header row containing Company, Role, Location
 * and Link (other columns optional: Experience, CTC, MBA Required), then data
 * rows, with single-cell date rows ("31st August") heading each day's group.
 *
 * Usage:
 *   node nightly-gsheet.mjs                 # fetch every configured sheet
 *   node nightly-gsheet.mjs --file x.csv    # parse a local CSV (uses the first sheet's settings)
 *   node nightly-gsheet.mjs --self-test
 */

import { readFileSync, writeFileSync, existsSync, renameSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { NON_US_LOCATION, US_POSITIVE } from './nightly-shortlist.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
export const COLUMNS = ['source', 'sources', 'company', 'title', 'location', 'url',
  'posted_ts', 'age_days', 'sponsorship_hint', 'salary', 'category'];

/** RFC 4180 CSV parser: quoted fields, doubled quotes, newlines inside quotes. */
export function parseCsv(text) {
  const rows = [];
  let row = [], field = '', q = false;
  const s = String(text || '');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (q) {
      if (c === '"') { if (s[i + 1] === '"') { field += '"'; i++; } else q = false; }
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/** Turn any Google Sheets URL into its CSV export URL (keeps the gid). */
export function csvExportUrl(url) {
  const m = String(url).match(/\/spreadsheets\/d\/([^/]+)/);
  if (!m) return url;
  const gid = (String(url).match(/[#&?]gid=(\d+)/) || [])[1] || '0';
  return `https://docs.google.com/spreadsheets/d/${m[1]}/export?format=csv&gid=${gid}`;
}

const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july',
  'august', 'september', 'october', 'november', 'december'];

/** "31st August" -> Date in the most recent year that is not in the future. */
export function parseDayLabel(label, today = new Date()) {
  const m = String(label).trim().toLowerCase().match(/^(\d{1,2})(?:st|nd|rd|th)?\s+([a-z]+)(?:\s+(\d{4}))?$/);
  if (!m) return null;
  const mi = MONTHS.findIndex((x) => x.startsWith(m[2].slice(0, 3)));
  if (mi < 0) return null;
  let y = m[3] ? parseInt(m[3], 10) : today.getFullYear();
  let d = new Date(Date.UTC(y, mi, parseInt(m[1], 10)));
  if (!m[3] && d > today) d = new Date(Date.UTC(y - 1, mi, parseInt(m[1], 10)));
  return d;
}

/** Highest LPA figure in a CTC cell, or null. "12-15 LPA" -> 15; "15-20k/month" -> 2.4. */
export function ctcMaxLpa(cell) {
  const s = String(cell || '').toLowerCase().replace(/,/g, '');
  const nums = (s.match(/\d+(?:\.\d+)?/g) || []).map(Number);
  if (!nums.length) return null;
  const max = Math.max(...nums);
  if (/k\s*\/?\s*(month|pm|mo)/.test(s)) return (max * 1000 * 12) / 100000;
  if (/lpa|lakh|lac|\bl\b/.test(s)) return max;
  if (/cr/.test(s)) return max * 100;
  return null;   // unknown unit: never drop on a guess
}

// The India sheet also carries a few roles abroad (SF, NYC, Dubai...). Those keep
// their own location so the shortlist routes them by region; only a location
// that is blank, remote or not recognisably foreign gets the region suffix. A
// misspelt Indian city ("Bengauru") is not recognisable either way, so it gets it.
const ELSEWHERE = /\b(sf|nyc|new york|san francisco|bay area|seattle|atlanta|boston|austin|chicago|los angeles|cambridge|usa|us|united states)\b/i;
const INDIAN_CITY = /\b(bangalore|bengaluru|hyderabad|pune|gurgaon|gurugram|noida|chennai|mumbai|delhi|kolkata|ahmedabad|kochi|coimbatore)\b/i;
export function isElsewhere(loc) {
  const s = String(loc || '');
  if (/\bindia\b/i.test(s) || INDIAN_CITY.test(s)) return false;
  if (ELSEWHERE.test(s) || US_POSITIVE.test(s)) return true;
  return NON_US_LOCATION.some((r) => r.test(s));
}

const clean = (v) => String(v || '').replace(/�/g, "'").replace(/\s+/g, ' ').trim();

/**
 * Sheet CSV text -> { rows, stats }. Pure, so the self-test can drive it.
 */
export function sheetToFeed(text, opts = {}) {
  const { name = 'sheet', regionSuffix = 'India', maxAgeDays = 45, minCtcLpa = null, today = new Date() } = opts;
  const grid = parseCsv(text);
  const hi = grid.findIndex((r) => {
    const h = r.map((c) => clean(c).toLowerCase());
    return h.includes('company') && h.includes('role') && h.includes('link');
  });
  const stats = { data_rows: 0, kept: 0, too_old: 0, below_ctc: 0, no_link: 0, undated: 0 };
  if (hi < 0) return { rows: [], stats: { ...stats, error: 'header row (Company, Role, Link) not found' } };
  const head = grid[hi].map((c) => clean(c).toLowerCase());
  const col = (n) => head.indexOf(n);
  const iC = col('company'), iR = col('role'), iL = col('location'), iK = col('link'),
    iE = col('experience'), iT = col('ctc'), iM = col('mba required');

  const rows = [];
  let day = null;
  for (const r of grid.slice(hi + 1)) {
    const company = clean(r[iC]), role = clean(r[iR]);
    if (company && !role && r.slice(1).every((c) => !clean(c))) {   // a date group row
      day = parseDayLabel(company, today);
      continue;
    }
    if (!role) continue;
    stats.data_rows++;
    const url = clean(r[iK]);
    if (!/^https?:\/\//i.test(url)) { stats.no_link++; continue; }
    const age = day ? Math.floor((today - day) / 86400000) : null;
    if (age === null) stats.undated++;
    if (age !== null && maxAgeDays && age > maxAgeDays) { stats.too_old++; continue; }
    const ctc = iT >= 0 ? clean(r[iT]) : '';
    const lpa = ctcMaxLpa(ctc);
    if (minCtcLpa && lpa !== null && lpa < minCtcLpa) { stats.below_ctc++; continue; }
    let loc = iL >= 0 ? clean(r[iL]) : '';
    if (!loc || loc === '-') loc = regionSuffix;
    else if (regionSuffix && !isElsewhere(loc) && !new RegExp('\\b' + regionSuffix + '\\b', 'i').test(loc)) loc += ', ' + regionSuffix;
    const extra = [iE >= 0 && clean(r[iE]) ? 'experience ' + clean(r[iE]) : '',
      iM >= 0 && clean(r[iM]) ? 'MBA ' + clean(r[iM]) : ''].filter(Boolean).join('; ');
    rows.push({
      source: 'gsheet:' + name, sources: 'gsheet:' + name,
      company: company && company !== '-' ? company : '?', title: role, location: loc, url,
      posted_ts: day ? day.toISOString().slice(0, 10) : '', age_days: age === null ? '' : String(age),
      sponsorship_hint: '', salary: ctc, category: extra,
    });
    stats.kept++;
  }
  return { rows, stats };
}

function toTsv(rows) {
  const esc = (v) => String(v ?? '').replace(/[\t\r\n]+/g, ' ').trim();
  return [COLUMNS.join('\t'), ...rows.map((r) => COLUMNS.map((c) => esc(r[c])).join('\t'))].join('\n') + '\n';
}

function loadCfg() {
  try { return yaml.load(readFileSync(path.join(ROOT, 'config', 'nightly.yml'), 'utf8')) || {}; }
  catch { return {}; }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) return selfTest();
  const cfg = loadCfg();
  const sheets = Array.isArray(cfg.sheets) ? cfg.sheets : [];
  const outFile = path.resolve(ROOT, (cfg.sheets_out_file || 'data/sheet-feed.tsv'));
  const fi = args.indexOf('--file');
  if (!sheets.length && fi < 0) { console.error('no sheets configured in config/nightly.yml -> sheets'); return 0; }

  const all = [], report = [];
  const targets = fi >= 0 ? [{ ...(sheets[0] || { name: 'local' }), file: args[fi + 1] }] : sheets;
  for (const s of targets) {
    const opts = { name: s.name || 'sheet', regionSuffix: s.region_suffix ?? 'India',
      maxAgeDays: s.max_age_days ?? 45, minCtcLpa: s.min_ctc_lpa ?? null };
    let text = '', status = 0, error = '';
    try {
      if (s.file) { text = readFileSync(s.file, 'utf8'); status = 200; }
      else {
        const res = await fetch(csvExportUrl(s.url), { redirect: 'follow', signal: AbortSignal.timeout(s.timeout_ms || 20000) });
        status = res.status;
        text = res.ok ? await res.text() : '';
      }
    } catch (e) { error = String(e && e.message || e); }
    const { rows, stats } = text ? sheetToFeed(text, opts) : { rows: [], stats: {} };
    all.push(...rows);
    report.push({ sheet: opts.name, http: status, ...(error ? { error } : {}), ...stats,
      health: status === 200 ? (rows.length ? 'ok' : 'EMPTY after filters') : 'BLOCKED or unreachable - treat as UNKNOWN, not zero jobs' });
  }
  const tmp = outFile + '.tmp';
  writeFileSync(tmp, toTsv(all));
  renameSync(tmp, outFile);
  console.log(JSON.stringify({ out: path.relative(ROOT, outFile), rows: all.length, sheets: report }, null, 2));
  return 0;
}

function selfTest() {
  let pass = 0, fail = 0;
  const eq = (n, got, want) => {
    if (JSON.stringify(got) === JSON.stringify(want)) pass++;
    else { fail++; console.error('FAIL ' + n + '\n  got  ' + JSON.stringify(got) + '\n  want ' + JSON.stringify(want)); }
  };
  eq('csv quotes and newlines', parseCsv('a,"b ""x""\nc",d\n1,2,3\n'), [['a', 'b "x"\nc', 'd'], ['1', '2', '3']]);
  eq('export url keeps gid', csvExportUrl('https://docs.google.com/spreadsheets/d/ABC/edit?gid=7#gid=7'),
    'https://docs.google.com/spreadsheets/d/ABC/export?format=csv&gid=7');
  const today = new Date(Date.UTC(2026, 8, 19));
  eq('day label this year', parseDayLabel('31st August', today).toISOString().slice(0, 10), '2026-08-31');
  eq('future day rolls back a year', parseDayLabel('25th December', today).toISOString().slice(0, 10), '2025-12-25');
  eq('lpa range', ctcMaxLpa('12-15 LPA'), 15);
  eq('monthly k', ctcMaxLpa('15-20k/month'), 2.4);
  eq('unknown unit kept', ctcMaxLpa('competitive'), null);
  const csv = [
    'Banner text,,,,,,', ',,,,,,',
    'Company,Role,Location,Link,Experience,CTC,MBA Required',
    '18th September,,,,,,',
    'Cube,Chief of Staff,Bengauru,https://x/1,3-6,40-50 LPA,',
    'Acme,Founder�s Office,-,https://x/2,,10-15 LPA,Yes',
    'Beta,Head of Growth,Mumbai,https://x/3,5+,,',
    'Gamma,Head of Growth,Delhi,,,,',
    '1st July,,,,,,',
    'Old,Chief of Staff,Pune,https://x/4,,,',
  ].join('\n');
  const r = sheetToFeed(csv, { name: 't', minCtcLpa: 35, maxAgeDays: 45, today });
  eq('kept rows', r.rows.map((x) => x.company), ['Cube', 'Beta']);
  eq('India appended to a misspelt city', r.rows[0].location, 'Bengauru, India');
  eq('age from the date group', r.rows[0].age_days, '1');
  eq('stats', [r.stats.below_ctc, r.stats.no_link, r.stats.too_old], [1, 1, 1]);
  eq('experience carried into category', r.rows[1].category, 'experience 5+');
  eq('foreign city keeps its own location', ['SF', 'Dubai', 'NYC', 'Atlanta'].map(isElsewhere), [true, true, true, true]);
  eq('Indian and unknown cities get the suffix', ['Mumbai', 'Bengauru', 'Remote', '-'].map(isElsewhere), [false, false, false, false]);
  console.log(pass + ' passed, ' + fail + ' failed');
  return fail ? 1 : 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  main().then((c) => process.exit(c || 0));
}
