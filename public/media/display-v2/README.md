# Display V2 asset production status

Updated: 2026-08-12

## Approved masters

| Demo | Master | Generator | QA status |
| --- | --- | --- | --- |
| Multi-size SaaS | `multi-size/master-approved/image-001.png` | Seedream 5.0 Pro | Approved: exact large headline `SPEAK ANYWHERE`; icon-only UI; no small copy or pseudo-text |
| Seasonal localization | `seasonal/gpt-master-approved/image-001.png` | Image 2 | Approved: physical glass, spray tube, box folds, textile insert and shadows; no text |
| Selling points | `selling-points/identity-sheet-v2/image-002-front-access.png` | Image 2 | Approved after cross-image audit: locked front/rear/interior/wheel identity, front-access construction and blue inlay |

## Text production rule

- A generated variant may contain one large campaign headline only.
- English / Spanish / Portuguese: 2–4 words. Simplified Chinese: 4–8 characters.
- No small body copy, price, CTA, button labels, legal copy, dense UI copy, product specifications, or extra pseudo-text.
- Each output is checked character by character; wrong spelling, accent marks, Chinese glyphs, duplicated letters, or extra generated text cause rejection and regeneration.

## Planned headlines

### Demo 01

- `SPEAK ANYWHERE`

### Demo 02

- Christmas / English: `QUIETLY GIFTED`
- Mexico Mother’s Day / Spanish: `PARA ELLA`
- Brazil Dia dos Namorados / Portuguese: `PARA NÓS`
- China Lunar New Year / Simplified Chinese: `新岁新香`

### Demo 03

- Product master: `BUILT TO MOVE`
- Shell: `SHELL STRONG`
- Wheels: `ROLL QUIET`
- Packing: `PACK SMART`
- Laptop access: `QUICK ACCESS`

## Rejected / non-deliverable attempts

- `multi-size/master/image-001.png`: rejected because the mobile UI contains garbled small text.
- `seasonal/master/image-001.png`: rejected as the visual looks like a generic AI luxury-product render.
- `selling-points/master-text-v2/image-001.png`: rejected because the transparent wheels and over-clean airport scene look synthetic.
- `selling-points/product-master-en-v2/image-001.jpeg`: rejected because a visible `AI generated` label appeared in the lower-right corner.
- `rejected/selling-points/`: the complete first suitcase set was withdrawn because the shell ribs, blue inlay, corner guards, side hardware, wheels, interior and front-access construction did not remain the same product. The shell image also contained an implausible metal sphere attached to the case.
- `seasonal/valentines-pt-v1/image-001.png`: rejected because the Portuguese headline was rendered as `PARÁ NÓS` rather than `PARA NÓS`.
- Failed Seedream API requests that produced no downloaded image are not counted as assets.

## Final deliverables

The 15 visually checked assets are collected under `final/`:

- `final/multi-size/`: five real display-ad formats, including exact `300×250` and `728×90` exports.
- The `300×250` and `728×90` assets also include high-resolution `*-preview-*` files for website display. The exact-size files are delivery samples and should not be enlarged in the UI.
- `final/seasonal/`: neutral master plus English, Spanish, Portuguese, and Simplified Chinese localized campaigns.
- `final/selling-points/`: product master plus shell, wheels, packing, and laptop-access selling points.

The fragrance and suitcase physical masters were generated with Image 2. The accepted suitcase set uses an Image 2 multi-view identity sheet: C1–C3 are deterministic crops of one closed master, while C4–C5 are state changes constrained by the same identity sheet. Seedream 5.0 Pro was used for the localization family, and the SaaS family was generated and reformatted with Seedream 5.0 Pro.
