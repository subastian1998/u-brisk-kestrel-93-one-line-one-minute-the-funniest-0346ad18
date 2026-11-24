import { writeFileSync, mkdirSync } from "node:fs";

const entry =
  "I didn't miss the deadline — I simulated 10,000 versions of it first, and in 9,999 of them you were angrier, so I picked this one.";

// Self-check the competition gate: entry must be 1-200 UTF-8 characters.
const length = [...entry].length;
if (length < 1 || length > 200) {
  throw new Error(`entry is ${length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
