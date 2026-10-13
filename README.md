# Slides (Slidev)

Slidev template based on the `tp_sli` deck, with a blue palette.

## Run

- `npm install`
- `npm run dev` → <http://localhost:3030>
- `npm run export:pdf` → PDF export
- `npm run build` → static site in `dist/`

## Where to edit

- `slides.md` — headmatter (title, footer texts, logos, sections), cover and agenda.
- `pages/*.md` — slide content. Add a file and include it in `slides.md` with `src: ./pages/xx.md`.
  Tag each slide with `deckSection: <id>` (an id from `sections:`) so the top nav highlights it.
- `uno.config.ts` — palette (`brand-blue`, `brand-navy`, `brand-gray`) and shortcuts
  (`slide-deck-shell`, `slide-title`, `slide-title-bar`, `deck-card`, `deck-card-label`).
- `public/logos/`, `public/images/` — static assets, referenced as `/logos/x.png`, `/images/x.png`.
- `layouts/` — `default`, `center`, `two-cols`, `image-right` (all include section nav + footer).

## Deploy

`.github/workflows/pages.yml` publishes to GitHub Pages on push to `main` (base path = repo name).
