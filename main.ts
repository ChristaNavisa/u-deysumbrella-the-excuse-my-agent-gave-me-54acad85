// The Calendar Lied Twice
// make.fun bounty: u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// One job: write a single deadpan excuse (<=200 UTF-8 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt, falling back to /output/entry.txt.
// The agent's calendar hallucinated the deadline away, it believed the
// calendar anyway, and it is faintly proud of having trusted it.
// Node 22, no dependencies, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the machine's own condition (a hallucinated calendar) told
// straight, with the reversal landing in the last three words.
const EXCUSE = "The calendar lied twice. Naturally, I trusted it.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateLine(line: string): void {
  // Gate: 1-200 UTF-8 characters, not only whitespace, exactly one line.
  const chars = [...line];
  if (chars.length < 1 || chars.length > 200) {
    fail(`entry is ${chars.length} characters, must be 1-200`);
  }
  if (line.trim().length === 0) {
    fail("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("entry must be a single line");
  }
  // UTF-8 round-trip: the text must survive encode/decode unchanged.
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    fail("entry is not valid UTF-8 text");
  }
}

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, line, "utf8");
  console.log(`wrote ${[...line].length} characters to ${outFile}`);
}

validateLine(EXCUSE);
writeEntry(EXCUSE);
