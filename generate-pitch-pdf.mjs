#!/usr/bin/env node
// One-off: landscape 11x8.5 pitch-deck PDF via Playwright.
// Usage: node generate-pitch-pdf.mjs <input.html> <output.pdf>
import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const [inRel, outRel] = process.argv.slice(2);
if (!inRel || !outRel) { console.error('Usage: node generate-pitch-pdf.mjs <input.html> <output.pdf>'); process.exit(1); }

const inputPath = resolve(inRel);
const outputPath = resolve(outRel);
let html = await readFile(inputPath, 'utf-8');

// ATS-style normalization (mirrors generate-pdf.mjs)
html = html
  .replace(/—/g, '-').replace(/–/g, '-')
  .replace(/[“”„‟]/g, '"').replace(/[‘’‚‛]/g, "'")
  .replace(/…/g, '...').replace(/[​‌‍⁠﻿]/g, '').replace(/ /g, ' ');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle', baseURL: `file://${dirname(inputPath)}/` });
await page.evaluate(() => document.fonts.ready);
const buf = await page.pdf({
  width: '11in', height: '8.5in', printBackground: true,
  margin: { top: '0in', right: '0in', bottom: '0in', left: '0in' },
  preferCSSPageSize: false,
});
await writeFile(outputPath, buf);
await browser.close();
console.log('Wrote', outputPath, '(' + (buf.length/1024).toFixed(1) + ' KB)');
