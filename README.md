# in-Between Co — Website

A focused two-page site for **in-Between Co**, built to the *Website Rebuild Brief*:
build credibility, explain the philosophy and the thinking behind the name, and present
**The Festive Edit 2026** — leading interested visitors to WhatsApp. Hand-built static
HTML/CSS/JS, no build step, no dependencies.

## Pages
- **`index.html`** — Hero → Why in-Between? → Our Philosophy → Festive Edit intro →
  The Collection (Signature-led) → About → Corporate/Contact → Footer.
- **`festive.html`** — Festive hero → the three gifts (Signature, Prestige, Quartet) with
  price, contents, jar count & net quantity → Corporate/Contact → Footer.

## Design system
- **Type (locked):** Instrument Serif (display/editorial, Regular only) + Manrope (functional).
- **Colour:** warm cream dominant, Midnight Indigo `#172B3D` contrast sections, Burnt Saffron
  `#C57832` accent, muted ochre `#B39862` secondary. Digital gold is avoided — the only gold is
  the physical foil on the Signature packaging.
- Restrained motion: subtle scroll reveals, gentle image entrance, refined hover, underline/arrow
  transitions. No parallax, counters, carousels or floating decoration.

## Images
- `assets/hero.jpg` — the supplied final hero photograph (makhana, edamame, dry-fruit mix, millet).
- `assets/signature-closed.jpg`, `signature-open.jpg`, `prestige-open.jpg`, `quartet-open.jpg` —
  product visuals sourced from the Festive Edit PDF (design-reference quality).

**Image-replacement architecture:** each product image is a plain `<img>` inside a fixed-aspect,
`object-fit: cover` container. To swap in final product photography later, replace the file in
`assets/` (or change the `src`) — no section rebuild needed.

## Prices (source of truth)
Signature ₹999 · Prestige ₹1,199 · Dry Fruit Quartet ₹599 (200 g) / ₹699 (300 g).
Homepage shows "From ₹599"; the Festive page shows both tiers. Prices include GST where appropriate.

## Run it
```bash
python -m http.server 5178
```
Then open <http://localhost:5178/index.html>.

## Note
The footer **Email** link uses `hello@eatinbetween.com` as a placeholder — replace it with the real
brand mailbox. WhatsApp links point to **+91 99104 93207**; Instagram to **@eatinbetween.co**.
