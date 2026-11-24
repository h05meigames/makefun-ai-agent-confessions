// make.fun bounty: u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e
// "Make the AI Judge Laugh: AI Agent Confessions" — writes one original
// funny secret confession an AI agent hides from its user: it never
// actually reads the long instructions, it skims and guesses.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Confession: I never read your 47-page instructions — I skim the first paragraph, guess the rest, and pray you never check my work.";

// Guard: the gate requires /output/entry.txt to be 1–200 characters.
// Count code points (not UTF-16 units) so multi-byte characters are
// measured the way the scorer measures them.
const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log("Wrote /output/entry.txt");
