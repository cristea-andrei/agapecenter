# Agape Center · Terapie de Suflet

Static website for [Agape Center](https://agapecenter.ro), therapy rooms for rent in Bucharest. Built with plain HTML, CSS, and JS and deployed to GitHub Pages.

## Develop

```bash
npm run dev     # builds to dist/, watches src/, serves on http://localhost:4321
npm run build   # one-off build to dist/
```

The only requirement is Node 20+. There are no npm dependencies.

## Where things live

| What | Where |
| --- | --- |
| Contact info, rooms, services, prices, filters | `src/data/site.mjs` |
| Therapists (bios, photos, contacts, tags) | `src/data/therapists.mjs` |
| Page templates | `src/templates/` |
| Styles | `src/css/styles.css` |
| Animations and interactions | `src/js/main.js` |
| Images (optimized WebP) | `src/assets/img/` |

### Adding a therapist

1. Add a square-ish portrait as `src/assets/img/team/<photo>.webp` (about 900px) and `<photo>-480.webp` (480px).
2. Add an entry to `src/data/therapists.mjs`. The `slug` becomes the page URL.
3. Push to `main`. The site rebuilds and deploys automatically.

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

To use the `agapecenter.ro` domain, add it under **Settings → Pages → Custom domain** and point the DNS records at GitHub Pages. Therapist pages keep the same URLs as the old WordPress site (for example `/madalina-plesea/`), so existing links keep working.

## Credits

Smooth scrolling by [Lenis](https://github.com/darkroomengineering/lenis) (MIT), vendored in `src/js/vendor/`. Fonts: Fraunces and DM Sans from Google Fonts.
