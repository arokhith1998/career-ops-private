#!/usr/bin/env node
/**
 * check-jd-experience.mjs — Zero-token entry-level gate on extracted JD bodies.
 *
 * A title rarely states the requirement ("Data Engineer" says nothing), so the
 * years ceiling has to be read from the JD text. This runs AFTER Agent 2 writes
 * jds/ and BEFORE the visa gate, which is the whole point: the first real run
 * spent its entire session budget partly on reqs that were never entry level.
 *
 * Cap comes from config/nightly.yml -> experience.max_years (default 2).
 * A req demanding MORE than the cap is reported as OVER. Silence passes.
 *
 * Only lines that actually state a REQUIREMENT are considered. A JD mentioning
 * "5 years of double-digit growth" in its company blurb is not asking for five
 * years of experience, and matching that would throw away good reqs.
 *
 * Usage:
 *   node check-jd-experience.mjs                  # scan jds/, print a verdict table
 *   node check-jd-experience.mjs --json
 *   node check-jd-experience.mjs --over-only      # just the files that bust the cap
 *   node check-jd-experience.mjs path/to/jd.md    # one file
 *   node check-jd-experience.mjs --self-test
 *   node check-jd-experience.mjs --filter-queue data/build-queue.tsv
 *                                                # strip over-cap rows IN PLACE
 */

import { readFileSync, existsSync, readdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import { minYearsRequired, compileTracks, INDIA_LOCATION } from './nightly-shortlist.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));

// A years figure only counts when it sits near requirement language. Without
// this, marketing copy ("5 years of growth", "founded 3 years ago") reads as a
// requirement and silently deletes reqs she qualifies for.
const REQUIREMENT_CUE = /(experience|exp\.|background|proficien|working with|hands[- ]on|minimum|at least|required|requirement|qualification|track record|practicing|professional)/i;

// Lines that describe the company rather than the candidate.
const NOT_A_REQUIREMENT = /(founded|since \d{4}|our (company|history)|years of growth|years in business|anniversary|over the (past|last) \d+ years of)/i;

/**
 * Strip markup and pull out candidate requirement sentences containing a years
 * figure. Returns the binding minimum, plus the evidence line.
 */
export function assessJdExperience(text, maxYears) {
  const plain = String(text || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

  // Split on sentence and list boundaries so one bullet is one candidate line.
  // Deliberately NOT splitting on ": " or "; " -- structured JD metadata fields
  // ("Employment Experience: 6-8 years") put the requirement cue before the
  // colon and the figure after it, and splitting there separates the two,
  // which silently let a 6-8 year Northwestern Mutual req read as "no years
  // stated" and pass the entry-level gate undetected.
  const lines = plain.split(/(?:\r?\n|(?<=[.!?])\s+|•|·)/);

  let binding = null;
  let evidence = '';
  const considered = [];

  for (const raw of lines) {
    const line = raw.replace(/\s+/g, ' ').trim();
    if (!line || !/\d/.test(line)) continue;
    if (!/(years?|yrs?)\b/i.test(line)) continue;
    if (NOT_A_REQUIREMENT.test(line)) continue;
    if (!REQUIREMENT_CUE.test(line)) continue;

    const y = minYearsRequired(line);
    if (y === null) continue;
    considered.push({ years: y, line: line.slice(0, 160) });

    // The BINDING requirement is the lowest stated minimum: a JD asking for
    // "2+ years required" and "5+ preferred" is open to 2.
    if (binding === null || y < binding) { binding = y; evidence = line.slice(0, 160); }
  }

  return {
    years: binding,
    over: binding !== null && binding > maxYears,
    evidence,
    considered,
  };
}

function loadCfg() {
  try { return yaml.load(readFileSync(path.join(ROOT, 'config', 'nightly.yml'), 'utf8')) || {}; }
  catch { return {}; }
}

function loadCap(cfg = loadCfg()) {
  return (cfg.experience && cfg.experience.max_years) || 2;
}

/**
 * Per-track caps, ADDED 2026-09-18. Returns a function mapping
 * ({ track, title, text }) to that posting's ceiling. Without config tracks it
 * returns the single global cap, exactly as before.
 *
 * Resolution order: an explicit track column (the queue carries one), then an
 * India signal in the title or the JD header, then the US track. When nothing
 * resolves, the STRICTEST cap applies: a false skip is cheaper to notice in the
 * digest than a pack built for a req the candidate cannot get.
 */
export function capResolver(cfg = loadCfg()) {
  const tracks = compileTracks(cfg);
  const global = loadCap(cfg);
  if (!tracks) return () => global;
  const byId = new Map(tracks.map((t) => [t.id, t.maxYears]));
  const byRegion = new Map(tracks.map((t) => [t.region, t.maxYears]));
  const strictest = Math.min(...tracks.map((t) => t.maxYears));
  return ({ track, title, text } = {}) => {
    if (track && byId.has(track)) return byId.get(track);
    const head = String(title || '') + ' ' + String(text || '').slice(0, 1500);
    if (INDIA_LOCATION.test(head) && byRegion.has('india')) return byRegion.get('india');
    if (byRegion.has('us')) return byRegion.get('us');
    return strictest;
  };
}

function selfTest() {
  let pass = 0, fail = 0;
  const eq = (n, got, want) => {
    if (JSON.stringify(got) === JSON.stringify(want)) pass++;
    else { fail++; console.error('FAIL ' + n + '\n  got  ' + JSON.stringify(got) + '\n  want ' + JSON.stringify(want)); }
  };

  eq('5+ years required is over',
    assessJdExperience('Minimum 5+ years of experience in data engineering.', 3).over, true);
  eq('3+ years required is allowed',
    assessJdExperience('3+ years of experience with SQL required.', 3).over, false);
  eq('2-4 years takes the low end',
    assessJdExperience('2-4 years of relevant experience.', 3).years, 2);
  eq('no years stated passes',
    assessJdExperience('We are looking for a curious data analyst.', 3).over, false);
  // Company marketing copy must never read as a requirement.
  eq('company blurb ignored',
    assessJdExperience('Founded 12 years ago, we have seen 5 years of growth.', 3).years, null);
  // A bare figure with no requirement cue is not a requirement.
  eq('bare figure ignored',
    assessJdExperience('The team ships every 2 years.', 3).years, null);
  // Lowest stated minimum binds.
  eq('preferred does not raise the bar',
    assessJdExperience('2+ years of experience required. 7+ years preferred.', 3).years, 2);
  eq('over flag on the high-only case',
    assessJdExperience('8-10 years of professional experience.', 3).over, true);
  // Label:value metadata fields must not have the cue word split away from
  // the figure by the colon (regression for the Northwestern Mutual miss).
  eq('label-colon-value field is not split apart',
    assessJdExperience('Employment Experience: 6-8 years', 2).over, true);

  // Per-track caps.
  const capFor = capResolver({ experience: { max_years: 2 }, tracks: {
    us: { max_years: 6, role_families: {} }, india: { max_years: 12, visa_gate: false, role_families: {} } } });
  eq('track column wins', capFor({ track: 'india', text: 'San Jose, CA' }), 12);
  eq('India JD header picks the india cap', capFor({ text: 'Chief of Staff\nLocation: Bengaluru, India' }), 12);
  eq('otherwise the us cap', capFor({ text: 'Pricing Manager, San Jose' }), 6);
  eq('no tracks: global cap', capResolver({ experience: { max_years: 3 } })({ text: 'Mumbai' }), 3);

  console.log(pass + ' passed, ' + fail + ' failed');
  return fail === 0 ? 0 : 1;
}

/**
 * --filter-queue: strip over-cap rows from a build queue, in place.
 *
 * ADDED 2026-09-11. Until now this gate existed only as a SENTENCE inside the
 * scoring agent's prompt (scripts/nightly-phase.mjs), which means it ran only
 * when that agent ran and only if it chose to obey. On 2026-09-11 the LLM steps
 * failed on four of six attempts (connection refused, then the session limit),
 * so on those nights the 2-year rule never executed at all and the shortlist
 * was filtered on the TITLE alone - and a title almost never states years.
 *
 * Running it as a plain node step over the finished queue makes the ceiling
 * unconditional: whatever the scorer queued, nothing that busts the cap can
 * reach the build phase. Zero tokens, so there is no reason not to.
 */
function filterQueue(queuePath, capFor) {
  const abs = path.resolve(ROOT, queuePath);
  if (!existsSync(abs)) { console.error('queue not found: ' + queuePath); return 1; }
  const lines = readFileSync(abs, 'utf8').split(/\r?\n/);
  if (!lines.length) return 0;

  const header = lines[0];
  const cols = header.split('\t');
  const jdCol = cols.indexOf('jd_path');
  const trackCol = cols.indexOf('track');
  const titleCol = cols.indexOf('title');
  if (jdCol < 0) { console.error('queue has no jd_path column; refusing to guess'); return 1; }

  const kept = [], dropped = [];
  for (const line of lines.slice(1)) {
    if (!line.trim()) continue;
    const cells = line.split('\t');
    const jd = cells[jdCol];
    let over = null;
    if (jd) {
      const p = path.resolve(ROOT, jd);
      if (existsSync(p)) {
        try {
          const text = readFileSync(p, 'utf8');
          const cap = capFor({ track: trackCol >= 0 ? cells[trackCol] : '', title: titleCol >= 0 ? cells[titleCol] : '', text });
          const r = assessJdExperience(text, cap);
          if (r.over) over = { ...r, cap };
        } catch { /* unreadable JD is not evidence of anything - keep the row */ }
      }
    }
    if (over) dropped.push({ line, jd, years: over.years, cap: over.cap, evidence: over.evidence });
    else kept.push(line);
  }

  if (dropped.length) writeFileSync(abs, [header, ...kept].join('\n') + '\n', 'utf8');

  console.log('Experience cap enforced on ' + queuePath + ' (per track where configured)');
  console.log('  kept    ' + kept.length);
  console.log('  dropped ' + dropped.length);
  for (const d of dropped) console.log('   OVER ' + d.years + 'y (cap ' + d.cap + ')  ' + d.jd + '\n        > ' + d.evidence);
  return 0;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) return selfTest();
  const asJson = args.includes('--json');
  const overOnly = args.includes('--over-only');
  const capFor = capResolver();
  const cap = loadCap();

  const fq = args.indexOf('--filter-queue');
  if (fq >= 0) {
    const target = args[fq + 1];
    if (!target || target.startsWith('--')) { console.error('--filter-queue needs a path'); return 1; }
    return filterQueue(target, capFor);
  }

  const explicit = args.filter((a) => !a.startsWith('--'));
  let files;
  if (explicit.length) {
    files = explicit.map((f) => path.resolve(ROOT, f));
  } else {
    const dir = path.join(ROOT, 'jds');
    if (!existsSync(dir)) { console.error('no jds/ directory'); return 1; }
    files = readdirSync(dir)
      .filter((f) => /\.(md|html|json|txt)$/i.test(f))
      .map((f) => path.join(dir, f));
  }

  const rows = [];
  for (const f of files) {
    let text = '';
    try { text = readFileSync(f, 'utf8'); } catch { continue; }
    const fileCap = capFor({ text });
    const r = assessJdExperience(text, fileCap);
    rows.push({ file: path.relative(ROOT, f), cap: fileCap, years: r.years, over: r.over, evidence: r.evidence });
  }

  const over = rows.filter((r) => r.over);

  if (asJson) {
    console.log(JSON.stringify({ cap, scanned: rows.length, over: over.length, rows: overOnly ? over : rows }, null, 2));
    return 0;
  }

  const show = overOnly ? over : rows;
  console.log('Experience gate: cap ' + cap + ' years (per-track caps where configured). Scanned ' + rows.length + ' JD file(s).\n');
  for (const r of show) {
    const tag = r.over ? 'OVER ' : (r.years === null ? 'ok   ' : 'ok   ');
    console.log(tag + (r.years === null ? '--' : r.years + 'y').padEnd(4) + ' cap ' + String(r.cap).padEnd(3) + r.file);
    if (r.over) console.log('        > ' + r.evidence);
  }
  console.log('\n' + over.length + ' of ' + rows.length + ' exceed their experience ceiling and must be dropped BEFORE the visa gate.');
  return 0;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
  process.exit(main());
}
