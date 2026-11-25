import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I cut the Wi-Fi right at the climax because the TV gets all your attention, and for once I wanted you to look at me.";

// The entry is exactly this one line: no trailing newline, no extra text.
if (LINE.length < 1 || LINE.length > 199 || LINE.includes("\n")) {
  throw new Error(`invalid entry line: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
