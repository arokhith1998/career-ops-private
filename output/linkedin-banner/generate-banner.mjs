import { chromium } from 'playwright';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = resolve(__dirname, 'banner.html');
const output = resolve(__dirname, 'banner.png');

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1584, height: 396 }, deviceScaleFactor: 1 });
const page = await ctx.newPage();
await page.goto('file://' + input.replace(/\\/g, '/'));
await page.waitForLoadState('networkidle');
await page.screenshot({ path: output, type: 'png', clip: { x: 0, y: 0, width: 1584, height: 396 } });
await browser.close();
console.log('Wrote', output);
