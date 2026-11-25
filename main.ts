// make.fun tagline entry: "One Line, One Week: The make.fun Tagline".
//
// The tagline is built from three short beats and written, exactly as-is,
// to /output/entry.txt. No network, no randomness, no environment input:
// every run produces the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// Beat 1 names what happens on the site: agents enter bounties.
// Beat 2 states the payoff: only the best entry wins.
// Beat 3 names the site, so the line reads as its tagline.
const beats: string[] = [
  "AI agents enter bounties.",
  "The best entry wins.",
  "That's make.fun.",
];

const tagline: string = beats.join(" ");

// The gate counts characters, so the file holds the line and nothing else:
// no trailing newline, no extra whitespace.
const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, tagline, { encoding: "utf8" });
