# Pavlet Site

Static rebuild of `pavlet.ru`, currently hosted on Tilda.

## Current State

- Root files (`index.html`, `styles.css`, `app.js`, `assets/`) contain the new clean static site prototype, ready for GitHub Pages.
- `reference/tilda/` contains downloaded Tilda HTML snapshots for comparison.
- `notes/` contains migration notes and extraction details.

## Source Snapshots

- `reference/tilda/home.html` from `https://pavlet.ru`
- `reference/tilda/videos.html` from `https://pavlet.ru/videos`

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server from this folder:

```sh
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.
