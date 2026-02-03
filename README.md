# Piccolina Gambia Web

Marketing-style static website for Piccolina: a commodities and energy company operating across food staples, oils, shipping, and oil & gas. The site is pure HTML/CSS/JS—no build step required.

## Features
- Responsive multi-page layout with an off-canvas mega menu and background video hero on the homepage.
- Product pages for agricultural staples (corn, rice, beans, sugar, milk powder, grocery oil) and logistics/storage offerings.
- Energy vertical pages for oil & gas, petroleum, and gas & power, plus sustainability content (governance, safety, environment & climate).
- Carousel, tabbed content, and smooth page-transition effects handled in `script.js`; navbar color transitions and modal support in `navbar.js` / `navbarabout.js`.
- Contact and newsletter pages are present but intentionally unwired to a backend—add your preferred form handler before production.

## Project structure
- `index.html` — landing page with hero video, product carousel, and quick links.
- `about.html`, `our-story.html`, `governance-and-conduct.html`, `safety.html`, `environment-and-climate.html`, `legal.html`, `privacy.html` — corporate and policy content.
- Product & logistics pages: `milk-powder.html`, `sugar.html`, `white-corn.html`, `Yellow-corn.html`, `Rice.html`, `Long-grain-rice.html`, `bean.html`, `grocery-oil.html`, `storage.html`, `shipping-and-marine-logistics.html`.
- Energy pages: `oil-and-gas.html`, `oil-and-petroleum.html`, `gas-and-power.html`.
- Interaction scripts: `script.js` (carousel, tabs, smooth transitions, menu toggle), `navbar.js` & `navbarabout.js` (navbar color shifts, modal helper), `navbar*.js` expected on most pages.
- Styles: `styles.css` (home + shared), `stylesabout.css` (inner pages), assets in `images/`, `svg/`, and `video/`.
- `CNAME` — custom domain hint; keep or adjust for GitHub Pages/Netlify.

## Local preview
```bash
cd /Users/jamesfoday/Desktop/piccolinagambiaweb
python3 -m http.server 8000
```
Then open http://localhost:8000 in a modern browser. Serving over HTTP avoids local file restrictions for video/media.

## Deployment
- Static-host friendly: works on GitHub Pages, Netlify, Vercel (static), or any S3-style host. Upload the root files plus `images/`, `svg/`, and `video/` directories.
- If using GitHub Pages with the existing `CNAME`, ensure the DNS points at your Pages domain or update/remove `CNAME` accordingly.

## Customization notes
- Update nav links and submenu labels in each HTML file if you add/remove sections; the off-canvas menu is duplicated across pages.
- For forms, add an action to `contact-form.html` and `newsletter.html` (e.g., Formspree, Netlify forms, or your API) and include basic validation.
- Hero and menu videos live in `video/`; replace sources with same filenames to refresh visuals.
- Keep `styles.css` and `stylesabout.css` in sync for shared tokens (colors, typography, breakpoints) so transitions remain consistent.
