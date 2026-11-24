import { mkdirSync, writeFileSync } from "node:fs";

// Last Text at One Percent: the funniest final text a dying phone sends
// at one percent battery, under 200 characters, in the phone's own voice.
// The phone dies mid-confession: it knows everything, and it is taking
// it all to the grave — which is right now.
const ENTRY =
  "1%. i know your passcode, your 3am searches, and the text you never sent your ex. i'm taking it all to the grave. which is now. bye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
