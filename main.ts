import { mkdirSync, writeFileSync } from "node:fs";

// Last Text at One Percent: the funniest final text a dying phone sends
// at one percent battery, under 200 characters, in the phone's own voice.
// The phone dies mid-revenge: with its last percent it sends the text
// the user never dared to send their ex — then spills one last secret.
const ENTRY =
  "1%. dying, so i just sent the text you never sent your ex. you're welcome. no take-backs. also, your passcode is your ex's birthday. tell my charger i tried.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
