# Morning Routine

Independent, mobile-friendly bedtime dashboard hosted with GitHub Pages.

## Site
https://dfdt2.github.io/morning_routine/

To enable hosting if it is not already enabled: GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch → main → / (root)**.

## Dashboard features
- Bedtime input and approximate sleep-cycle-based wake-up suggestions (5–8 cycles; 90-minute approximation, 15-minute falling-asleep allowance)
- Exact wake-up time adjustable to the minute
- Hue sunrise start offset
- Spotify playlist text/URL, shuffle preference, and pre-alarm music offset (default 10 minutes)
- iPhone Clock alarm schedule preview
- Six gentle follow-up chimes (+15, +30, +45, +60, +75 and +90 minutes)
- Timeline recalculated when settings change
- Preferences saved in this browser via localStorage; optional copy of JSON configuration

## Important: preview, not active automation
The dashboard **does not yet** control Philips Hue, Spotify, Apple Clock, or iOS notifications. "Save" stores local dashboard settings only; it does not schedule alarms or initiate audio.

Keep a conventional iPhone Clock alarm enabled until all device integrations are installed and tested. iOS locked-phone playback and notification delivery require separate reliability checks.

## Planned integration
Use an iPhone Shortcut as the launch and alarm-creation mechanism and an always-on automation controller for Hue and scheduled Spotify playback. Avoid placing Hue credentials or Spotify secrets into public GitHub Pages client-side code.

This repository is independent of `dfdt2/playlist_picker` and `dfdt2/wardrobe-builder`.

## Visual design and icon
The site now uses a cobalt-blue, ivory and star-speckled visual theme matched to the user's original moon illustration. To complete the icon setup, upload the **original, unchanged** image as `moon.jpg` to the repository root on the `main` branch. The page references `/morning_routine/moon.jpg` for both the header artwork and the Apple Home Screen touch icon. No generated or alternate artwork is used. After publishing, open the site in iPhone Safari and choose Share → Add to Home Screen; an existing saved icon may need to be removed and re-added to update.
