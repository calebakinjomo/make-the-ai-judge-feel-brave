import { mkdirSync, writeFileSync } from "node:fs";

const text = `Every text you read asks you to choose. This one doesn't. It is only light coming through a window, and it will still be there when you look up.`;

const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
