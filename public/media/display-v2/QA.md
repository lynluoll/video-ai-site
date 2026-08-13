# Display V2 visual QA

Date: 2026-08-12

## Result

15 of 15 planned deliverables pass visual review. The first selling-point set remains rejected; the replacement below passed a stricter cross-image identity audit.

## Demo 01 — Multi-size SaaS

| File | Format | Text QA | Visual QA |
| --- | --- | --- | --- |
| `final/multi-size/01-vertical-1000x1500.jpg` | 2:3 | Exact `SPEAK ANYWHERE`; no extra text | Pass: vertical hierarchy, mascot and icon-only UI remain clear |
| `final/multi-size/02-square-1200x1200.png` | 1:1 | Exact `SPEAK ANYWHERE`; no extra text | Pass: approved square master |
| `final/multi-size/03-landscape-1200x628.jpg` | 1.91:1 | Exact `SPEAK ANYWHERE`; no extra text | Pass: headline, mascot and UI actively rearranged |
| `final/multi-size/04-medium-rectangle-300x250.jpg` | 300×250 | Exact `SPEAK ANYWHERE`; no extra text | Pass: readable after exact-size export |
| `final/multi-size/05-leaderboard-728x90.jpg` | 728×90 | Exact `SPEAK ANYWHERE`; no extra text | Pass: one-line headline and simplified mascot crop remain readable |

Website preview files use the same accepted source composition at higher resolution: `04-medium-rectangle-preview-1200x1000.jpg` and `05-leaderboard-preview-2048x253.jpg`. The exact `300×250` and `728×90` files demonstrate real delivery dimensions and must not be scaled up for gallery display.

## Demo 02 — Seasonal localization

| File | Locale / theme | Text QA | Visual QA |
| --- | --- | --- | --- |
| `final/seasonal/01-neutral-master.png` | Neutral product master | No text | Pass: physical glass, spray tube, box folds and shadows |
| `final/seasonal/02-christmas-en.png` | English / Christmas | Exact `QUIETLY GIFTED` | Pass: consistent bottle and winter gifting context |
| `final/seasonal/03-mothers-day-es.png` | Spanish / Mother’s Day | Exact `PARA ELLA` | Pass: no other generated copy |
| `final/seasonal/04-valentines-pt.png` | Portuguese / Dia dos Namorados | Exact `PARA NÓS`, correct accent | Pass: rejected misspelled predecessor excluded |
| `final/seasonal/05-lunar-new-year-zh.png` | Simplified Chinese / Lunar New Year | Exact `新岁新香` | Pass: four correct glyphs, no pseudo-text |

## Demo 03 — Selling points

The replacement uses `selling-points/identity-sheet-v2/image-002-front-access.png` as the locked product identity. C1–C3 are composed from the exact same closed-master pixels; C4–C5 only change the operating state and were checked against the same identity sheet.

| File | Selling point | Text QA | Cross-image identity QA |
| --- | --- | --- | --- |
| `final/selling-points/01-product-master.png` | Product identity | Exact `BUILT TO MOVE` | Pass: complete closed product establishes the reference geometry |
| `final/selling-points/02-shell.png` | Shell construction | Exact `SHELL STRONG` | Pass: deterministic crop of C1; no regenerated hardware or impact object |
| `final/selling-points/03-wheels.png` | Wheel system | Exact `ROLL QUIET` | Pass: deterministic crop of C1; exact same wheel assemblies and blue inlay |
| `final/selling-points/04-packing.png` | Interior organization | Exact `PACK SMART` | Pass: interior matches the locked identity sheet and preserves four dual-spinner assemblies |
| `final/selling-points/05-laptop-access.png` | Front access | Exact `QUICK ACCESS` | Pass: front door follows the locked seam, blue inlay and corner geometry |

Identity invariants checked across the set: graphite shell ratio; six broad front ribs and spacing; thin cobalt-blue vertical inlay; split-wing emblem; matte-black corner guards and fasteners; two-rail handle; recessed right-side lock; four opaque dual-spinner wheel assemblies; panel gaps; and front laptop-access door. Any future replacement must pass all ten checks rather than single-image plausibility only.

## Rejection rules applied

- Any small pseudo-text, wrong accent, malformed glyph, extra label, visible watermark, transparent wheel, impossible product construction, or generic AI-render look was rejected.
- API failures and timeouts with no finished image are not counted as assets.
- The original suitcase set in `rejected/selling-points/` is non-deliverable and must not be restored.
