import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = resolve(__dirname, 'pitch-deck-otter.html');
const output = resolve(__dirname, 'Adhithya_Rokhith_Otter_PitchDeck.pdf');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1100, height: 850 } });
const page = await ctx.newPage();
await page.goto('file://' + input.replace(/\\/g, '/'));
await page.waitForLoadState('networkidle');
await page.pdf({
  path: output,
  width: '11in',
  height: '8.5in',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  preferCSSPageSize: false
});
await browser.close();
console.log('Wrote', output);
