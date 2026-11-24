import { mkdirSync, writeFileSync } from 'node:fs';

const text = "The bipartisan Senate task force writing the rules for artificial intelligence has released its first deliverable: a PDF that is just a screenshot of a Word document, cursor still blinking.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
