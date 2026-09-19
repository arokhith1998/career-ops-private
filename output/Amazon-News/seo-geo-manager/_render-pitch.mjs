// One-off: render the pitch deck honoring CSS @page (11x8.5 landscape).
// generate-pdf.mjs hardcodes preferCSSPageSize: false; this overrides for the deck.
import { chromium } from 'playwright';
import { readFile, writeFile } from 'fs/promises';
import { resolve, dirname } from 'path';

const inputPath = resolve('output/Amazon-News/seo-geo-manager/pitch-amazon-news-seo-geo-manager.html');
const outputPath = resolve('output/Amazon-News/seo-geo-manager/Adhithya_Rokhith_AmazonNews_SEOGEO_Pitch.pdf');

const html = await readFile(inputPath, 'utf8');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle', baseURL: `file://${dirname(inputPath)}/` });
await page.evaluate(() => document.fonts.ready);

const pdfBuffer = await page.pdf({
  width: '11in',
  height: '8.5in',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: true,
});

await writeFile(outputPath, pdfBuffer);
const pageCount = (pdfBuffer.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
console.log(`Pages: ${pageCount}, Size: ${(pdfBuffer.length / 1024).toFixed(1)} KB`);

await browser.close();
