// Morning Extras — paste into a Scriptable script with this exact name.
// Input: HH:mm from Apple Shortcuts. No Hue/Spotify credentials required.
// Schedules six one-time notifications and stores music trigger time locally.
const INPUT = String(args.shortcutParameter ?? "").trim();
if (!/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(INPUT)) {
  throw new Error("Expected HH:mm from Morning Routine; got: " + INPUT);
}
const [hour, minute] = INPUT.split(":").map(Number);
const now = new Date();
const wake = new Date(now);
wake.setHours(hour, minute, 0, 0);
if (wake <= now) wake.setDate(wake.getDate() + 1);

const music = new Date(wake.getTime() - 10 * 60 * 1000);
if (music <= now) {
  throw new Error("Choose a wake-up time more than 10 minutes in the future.");
}

// Shared with the Morning Spotify Gate script; never stored in public GitHub.
Keychain.set("mr_music_trigger_iso", music.toISOString());
Keychain.set("mr_wake_iso", wake.toISOString());
if (Keychain.contains("mr_music_trigger_consumed")) {
  Keychain.remove("mr_music_trigger_consumed");
}

const ids = [15, 30, 45, 60, 75, 90].map(min => "mr_ding_" + min);
await Notification.removePending(ids);

for (const min of [15, 30, 45, 60, 75, 90]) {
  const n = new Notification();
  n.identifier = "mr_ding_" + min;
  n.title = "Morning Routine";
  n.body = "+" + min + " minutes since your alarm";
  n.sound = "piano_success";
  n.threadIdentifier = "morning_routine";
  n.setTriggerDate(new Date(wake.getTime() + min * 60 * 1000));
  await n.schedule();
}
const message = "Six chimes scheduled for +" +
  [15, 30, 45, 60, 75, 90].join(", +") +
  " minutes; Spotify trigger expected 10 minutes before " + INPUT;
Script.setShortcutOutput(message);
console.log(message);
Script.complete();
