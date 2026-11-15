# Morning Routine — iPhone-only music and chimes

This adds optional Spotify playback and six scheduled chimes to the *existing* working iPhone Clock + Hue flow. It does **not** change the Hue script or your existing Spotify playlist picker. It is deliberately experimental: Play may not start Spotify if Spotify was force-closed or suspended overnight.

## A. Create two Scriptable scripts

In the iPhone Scriptable app, create these two scripts with **exact** names:

1. `Morning Extras` — copy the contents of [scripts/morning-extras.js](scripts/morning-extras.js).
2. `Morning Spotify Gate` — copy [scripts/morning-spotify-gate.js](scripts/morning-spotify-gate.js).

The first script receives a wake-up time in `HH:mm`, computes the **next occurrence** of that time, stores the expected music time at **−10 minutes** in the iPhone Keychain, removes any prior Morning Routine pending notifications, and schedules **six local Scriptable notifications** (+15, +30, +45, +60, +75, +90). It neither launches music nor changes your Hue settings.

The gate script outputs `PLAY` only if it is run within a short window around the stored music time; otherwise it outputs `SKIP`. It prevents alarm automations triggered by *other* alarms from automatically resuming music.

Enable **Scriptable notifications and sounds** under Settings → Notifications → Scriptable. Ordinary notifications may be silenced by Focus or Silent Mode. If you have a custom notification sound selected in Scriptable settings, choose an audible but gentle one.

## B. Extend your existing Set Morning Alarm Shortcut

**Keep your current four Clock actions, the Text action containing Shortcut Input, and Run Morning Hue unchanged.**

Immediately **after** `Run Morning Hue`, add:

1. **Run Script** (Scriptable): select `Morning Extras`, and set its Parameter to the **same Text variable** that contains Shortcut Input.
2. **Find Alarms**, filter `Label is Morning Spotify`.
3. **Delete Alarms** using the result of this second Find Alarms action. *Never use the result for Morning Routine; only delete the music trigger.*
4. **Adjust Date**: choose the **Dates** output of your first `Get Dates from Shortcut Input` action, then **Subtract 10 Minutes**.
5. **Create an Alarm**: set the time to the adjusted date and label it **Morning Spotify**.

The extra Clock alarm is just a timing trigger. **Critical limitation:** iOS Shortcuts cannot reliably specify the alarm's sound when creating it. A new `Morning Spotify` alarm may **audibly ring**, even if you previously chose None for an earlier alarm. Inspect its sound in Clock after scheduling, change Sound → None and vibration/haptics → None, and test. This is not a fully silent, no-touch solution; do not rely on it as a quiet automatic music starter.

In Shortcuts → Settings or privacy, allow necessary prompts and test with a wake-up time **more than 10 minutes in the future**. If the Shortcut has failed earlier, leave your existing independent Clock alarm intact.

## C. Create the one-time automation rule (only once)

In **Shortcuts → Automation** create an **Alarm** trigger:
- **Goes Off**
- **Any Alarm**, **Run Immediately** (or the analogous current iOS setting)
- Action 1: **Run Script** (Scriptable) → `Morning Spotify Gate` (no input).
- Action 2: **If** the *Run Script output* **is** `PLAY` → **Run Shortcut** → `Morning Spotify Test` → **End If**.

If your iOS uses triggers attached to shortcuts, add the Alarm → Any Alarm → Goes Off trigger to a dedicated `Morning Spotify Gate Automation` shortcut with the same actions. Under the shortcut's Info → Privacy, enable **Allow Running When Locked** if present.

This rule runs for any alarm, but the gate returns `SKIP` unless the time matches the music trigger. Do **not** use an Existing alarm trigger if the bedtime shortcut deletes and recreates the music trigger; the association may break.

## D. Every night

1. Open the [Morning Routine website](https://dfdt2.github.io/morning_routine/) on the iPhone.
2. Choose the wake-up time and tap **Set iPhone alarm with Shortcuts**.
3. Verify the real Morning Routine alarm and Hue sunrise are updated as before.
4. Verify six one-time notifications were scheduled; permit Scriptable notification sounds.
5. Verify the **Morning Spotify** trigger alarm is at −10 minutes and set its sound to **None** to avoid an unexpected audible alarm.
6. Start your preferred Spotify playlist, turn Shuffle on, confirm Bluetooth output to Fluance, then **pause** the music. Do not force-close Spotify. This method only resumes a previously active audio session.

**Device limitation:** Spotify selection and random first-track selection are *not* automatically set by these scripts. The website playlist field and music offset controls remain planning-only. Music can fail if Spotify was closed or suspended overnight, Bluetooth disconnected, or automation permissions blocked. A dedicated Spotify Connect endpoint and always-on scheduler are required for more robust autonomous playback.

## E. What is and is not connected

| System | Current behavior |
| --- | --- |
| Clock | Website passes HH:mm to Set Morning Alarm; creates real alarm |
| Hue | Existing Morning Hue script sets the non-repeating sunrise |
| Chimes | Morning Extras schedules 6 notifications, not full alarms |
| Spotify | Experimental alarm-time trigger resumes paused media session with Morning Spotify Test |
| Playlist picker | Not yet connected; choose playlist in Spotify before sleeping |
| Full reliability after iPhone is force-closed | Not supported |

Use your normal backup Clock alarm until you have tested the complete path over several nights.
