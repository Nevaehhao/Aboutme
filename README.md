# About Me Portfolio

A front-end portfolio website with multiple pages (home, projects, about, contact) and custom case study layouts. Styling lives in `styles.css`, and page-specific behavior is handled by small JS files under `assets/scripts/`.

Live site: https://nevaehhao.github.io/Aboutme/

## Design notes

- Visual direction: clean, grid-based layout with rounded cards and soft shadows.
- Interaction: hover-reveal buttons, tooltip labels, and image lightbox on case pages.
- Layout system: reusable card grid for the home and projects pages, and a long-form case study template.

## Tech stack

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox)
- Vanilla JavaScript (DOM interactions)

## Run locally

Option 1: Open the file directly
- Double‑click `index.html`, or drag it into a browser.

Option 2: Use a local server (recommended)
1. From the project root, run:
   ```bash
   python -m http.server 8000
   ```
2. Open `http://localhost:8000`.

## Project structure

- `index.html` — home page
- `projects.html` — projects list
- `case/` — individual case study pages
- `styles.css` — global styles
- `assets/` — images, scripts, PDFs, and other static assets

## Deploy

Any static hosting works. Upload the HTML files, `styles.css`, and the `assets/` and `case/` folders. Then point your domain or static host to the uploaded files.
