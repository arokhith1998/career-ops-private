#!/usr/bin/env node
// Generate DOCX from an HTML resume/cover-letter.
// Usage: node generate-docx.mjs <input.html> <output.docx>

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import HTMLtoDOCX from 'html-to-docx';

const [, , inputArg, outputArg] = process.argv;

if (!inputArg || !outputArg) {
  console.error('Usage: node generate-docx.mjs <input.html> <output.docx>');
  process.exit(1);
}

const inputPath = resolve(inputArg);
const outputPath = resolve(outputArg);

const html = await readFile(inputPath, 'utf8');

const docBuffer = await HTMLtoDOCX(html, null, {
  table: { row: { cantSplit: true } },
  footer: false,
  pageNumber: false,
  font: 'Calibri',
  fontSize: 20, // half-points -> 10pt
  margins: { top: 432, right: 720, bottom: 432, left: 720 }, // twips; 0.3in top/bot, 0.5in l/r
  pageSize: { width: 12240, height: 15840 }, // US Letter in twips
});

await writeFile(outputPath, docBuffer);

console.log(`📄 Input:  ${inputPath}`);
console.log(`📁 Output: ${outputPath}`);
console.log(`✅ DOCX generated: ${outputPath}`);
console.log(`📦 Size: ${(docBuffer.length / 1024).toFixed(1)} KB`);
