# Morning Routine

Standalone GitHub Pages bedtime dashboard, entirely separate from `playlist_picker` and `wardrobe-builder`.

## Publish
1. Create a new public GitHub repository called `morning_routine` (do not initialize it with files).
2. Upload `index.html` and `README.md` to the repository root.
3. Go to Settings > Pages > Build and deployment > Deploy from a branch; select `main` and `/ (root)`.
4. Visit `https://YOUR_USERNAME.github.io/morning_routine/`.

## Current capabilities
- Adjustable bedtime and wake-up time (minute precision)
- Approximate sleep-cycle suggestions
- Hue sunrise offset, music offset, iPhone alarm and six chimes
- Playlist text/URL, shuffle toggle
- Morning schedule preview
- Local browser preference saving and JSON copy

## Not yet connected
Hue Bridge API, iOS Shortcuts, Spotify playback, and iOS scheduled chimes. The save button does **not** perform these actions. Keep a standard iPhone alarm in place.
