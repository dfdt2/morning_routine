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
