// Morning Spotify Gate — attach to an ANY-alarm-goes-off automation.
// Returns PLAY only near the timestamp saved by Morning Extras.
// Do NOT create an alarm here; Shortcut actions manage the trigger alarm.
let answer = "SKIP";
if (Keychain.contains("mr_music_trigger_iso")) {
  const when = new Date(Keychain.get("mr_music_trigger_iso")).getTime();
  const delta = Date.now() - when;
  const already = Keychain.contains("mr_music_trigger_consumed");
  if (Number.isFinite(when) && delta >= -90000 && delta <= 120000 && !already) {
    answer = "PLAY";
    Keychain.set("mr_music_trigger_consumed", "yes");
  }
}
Script.setShortcutOutput(answer);
console.log(answer);
Script.complete();
