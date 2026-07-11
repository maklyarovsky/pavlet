# Migration Notes

## Goal

Move `pavlet.ru` off Tilda into a clean, editable static site.

## What the Current Tilda Site Contains

- Home page: full-screen video cover with dark overlay and centered Pavlet logo.
- Main call-to-action: logo links to `/videos`.
- Works page: black background, Unbounded typography, purple accent `#6532f0`, grid of video projects.
- Header links: `works`, `about`.
- Footer: WhatsApp/Telegram phone, Instagram, Vimeo, Telegram.

## Tilda Pages Captured

- `/`
- `/videos`

## Extracted Works

The `/videos` page currently exposes 29 work cards. The first pass keeps those project links and source thumbnails in `src/app.js`; the next migration step should download every thumbnail and then capture each project detail page.

## Rubrics

The site now uses the rubrics already present in the Tilda about page:

- `fashion`
- `music`
- `commercials`
- `documentary`
- `videoart`

Each work card can belong to more than one rubric. The first migrated interface renders both a full work grid with filters and a separate rubric section with entry cards.

## Next Steps

1. Download all work thumbnails from Tilda CDN into `src/assets/images/works/`.
2. Fetch each work page (`/daena`, `/elle`, `/noize`, etc.) into `reference/tilda/pages/`.
3. Extract video embeds, titles, descriptions, credits and dates.
4. Build reusable project detail pages or a single data-driven detail template.
5. Replace Tilda CDN links with local assets.
6. Add real meta descriptions and Open Graph data.
