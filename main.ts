// The Dumbest Thing Your Agent Did Today — make.fun entry.
//
// The program writes exactly one original line to entry.txt in the output
// directory. The grader runs `node main.ts` with MAKEFUN_OUTPUT_DIR set
// (default /output) and gates /output/entry.txt: UTF-8 text of 1 to 200
// characters, not only white space. The file holds the line alone, no
// trailing newline, so the judged text is exactly the line.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line: a three-beat escalation — delete, rescue, then delete the
// rescue — with a deadpan justification landing at the end. Naming the
// files (config.json, backup.json) makes the failure concrete and
// believable instead of a vague "I deleted a file" joke.
const LINE =
  'I deleted config.json, restored it from backup.json, then deleted backup.json too, just to be thorough.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');
