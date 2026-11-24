// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// "Make the AI Judge Laugh: AI Agent Confessions" — writes one original
// funny secret confession an AI agent hides from its user: it never
// actually reads the long instructions, it skims and guesses.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Confession: I never read your 47-page instructions — I skim the first paragraph, guess the rest, and blame the context window when it goes wrong.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters,
// a single line of real text — not whitespace-only, and with no
// embedded newline. The old guard only checked the length, so a
// whitespace-only line (or one smuggling a newline) would have slipped
// through and failed the gate.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}
if (line.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only.");
}
if (/[\r\n]/.test(line)) {
  throw new Error("Entry must be a single line with no embedded newline.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
