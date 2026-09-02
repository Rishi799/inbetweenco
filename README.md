# in-Between Co — Brand Website

A premium two-page marketing site for **in-Between Co**, a thoughtful makhana / dry-fruit
snacking & festive-gifting brand. Hand-built static HTML/CSS/JS — no build step, no dependencies.

## Pages
- **`index.html`** — homepage: hero, festive-collection banner (entry point), *Why in-Between?*,
  *What we do* (3 pillars), *The in-Between Standard*, *Our promise*, *Stay in between* (contact), footer.
- **`festive.html`** — The Festive Edit 2026: festive hero, brand standard, the three gift
  collections (Signature ₹999 · Prestige ₹1,199 · Quartet ₹599/699), corporate gifting, enquiry CTA.

The homepage links into the festive page via the header CTA (“Festive Edit 2026”), a full-width
“Explore the Festive Collection” banner under the hero, the mobile menu, and the footer.

## Structure
```
index.html          homepage
festive.html        festive collection page
css/styles.css      design system + all components
js/main.js          sticky header, mobile nav, scroll reveals, parallax, smooth scroll
assets/             web-ready images (logo, food visuals, packshots)
assets/extracted/   raw images pulled from the source PDFs (kept for reference)
```

## Brand system (locked)
- **Colours** — Midnight Indigo `#172B3D`, Burnt Saffron `#C57832`, Printed Ochre `#B39862`,
  Warm Ivory `#F1E5CE` (hexes taken from the Shopify launch brief, the newest locked spec).
- **Type** — Fraunces (editorial serif, headlines) + Inter (sans, body). Two families only.
- Copy for *Why in-Between?* and *Our promise* matches the launch brief verbatim.

## Run it
Any static server works. For example:
```bash
python -m http.server 5178
```
Then open <http://localhost:5178/index.html>.

## Notes / next steps
- Product prices and copy come from the Festive Edit 2026 brochure.
- WhatsApp CTAs deep-link to **+91 99104 93207**; Instagram links to **@eatinbetween.co**.
- Ready to port to Shopify: keep headline / philosophy / promise as live theme text (per the brief),
  and use the files in `assets/` as image assets.
