// One Word, One Username, One Reward — make.fun entry.
//
// The entry is a single word: the entrant's own make.fun username.
// The judge compares usernames two at a time, weighing first whether the
// text is a genuine make.fun handle, then whether it raises a smile on
// first read, sticks in the mind, is a single word, and sounds like a
// handle its owner would happily wear. "noble-beacon-95" is that handle:
// one word, fifteen characters, a small light with a noble name.
//
// This program writes exactly that word, and nothing else, to the file
// the grader reads: /output/entry.txt. It takes no input, makes no
// network call, and prints the same word on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "noble-beacon-95";

// The gate only accepts 1 to 30 characters of non-whitespace text, so
// refuse to write anything that would fail it instead of failing it.
if (!/^\S{1,30}$/.test(USERNAME)) {
  throw new Error("username must be one word of 1 to 30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");

console.log(USERNAME);
