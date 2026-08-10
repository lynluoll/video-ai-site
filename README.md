# BytePlus ADS Creative — outward-facing site (v1)

Static site. No build step, no dependencies — `index.html` + `assets/` + `media/`.
Visual language follows the BytePlus Seedance activity page (dark, gradient accent,
cyan → blue → violet). All strategy content from `ads.byteplus-demo.com` is carried over.

## Run it

```bash
python3 -m http.server 8777 --directory "/Users/bytedance/daily task/video_ai_site"
```

Then open http://localhost:8777. (Opening `index.html` directly with `file://` also works —
the demo manifest is a plain `.js` file, not a `fetch`.)

## Page structure

The spine is four chapters — market size, scenarios, solutions, demos — with supporting
sections after them.

| # | Section | Source |
|---|---------|--------|
| — | Hero + chapter index | new |
| 01 | **Market size & budget flow** — track sizes, 2030 outcome, growth timeline, and the AI share of production spend (11% → 50%) | ported |
| 02 | **Scenarios** — brand / performance / display compared, then one "how AI rewrites this workflow" block per scenario, each followed by its answer page (Craft·Control·Consistency / Cost·Speed·Realism / Variants·Scale·Replicate) | ported + new |
| 03 | **Solutions** — four tabbed production lines: brand (CG + AI), performance (5-step loop), display (master → matrix), playable (the playable ad factory) | ported + Lark spec doc |
| 04 | **Key players** — value chain, brands building their own, agencies, adtech & social | ported, anonymised + new |
| 05 | **Ad creative playbook** — five placement groups × six creative angles (30 tiles), then five Seedance 2.5 advertising use cases | from two Lark wikis |
| 06 | **More demos** — the 86-asset library, 8 tabs | new |
| 07 | **Generation over generation** — the same-prompt comparison | new |
| 08 | **Why Seedance** — model capability | new |
| 09 | Roadmap — SOTA rendering → Omni → 70% labor replacement | ported |

The chapter index under the hero is a four-pillar nav (market / scenarios / solutions / demos);
its cards carry no ordinals, because the section numbering runs past four.

Bilingual: every static string is in the DOM twice (`<i class="en">` / `<i class="zh">`),
switched by `data-lang` on `<html>`. Strings generated in JS live in the `T` table in `app.js`.

## Cache busting

`index.html` links its CSS/JS with a `?v=N` query. Bump that number whenever you edit
`style.css`, `app.js` or the manifest — otherwise a browser that has the page cached will
keep serving the old stylesheet against new markup.

## ⚠️ Before this page goes public — WPP / partnership claims

`../wpp_jv.md` is internal-only: JV structure, the $100M floor proposal, current daily
run-rate, rebate policy and named executives on both sides. **None of it is on this page and
none of it should be.**

The agency block is now a wall of seven named holding-group AI platforms (WPP Open, Publicis
CoreAI, Omnicom Omni, Havas Converged.AI, dentsu.Connect, Stagwell's The Marketing Cloud,
Monks.Flow) with one sourced public figure each. It does **not** claim any of them as our
customer and quotes no commercial terms.

**Asked for and deliberately not built:** marking which of these we have a commercial
relationship with. That is exactly the claim the Feishu check said we cannot make — ByteDance
declined the Hex APAC proposal and WPP was close to concluding the partnership was not worth
announcing publicly. A "partner" badge on a customer-facing page needs comms/legal sign-off
first. If it is ever cleared, the mechanism is one `partner` class on the relevant `.bw` tile.

Figures deliberately left off because they could not be sourced to a primary document: WPP Open
"71,000 MAU" (circulates widely, absent from WPP's own filings), Stagwell "230% growth"
(acquisition-driven, misleading without the 34% organic figure beside it), Stagwell "$80–100M AI
cost savings", any Monks.Flow scale metric, and Dentsu's ¥45bn (group-wide mid-term investment,
not AI-platform-specific). IPG is not on the wall: Omnicom completed the acquisition on
26 Nov 2025, so Interact now sits inside Omni — the footnote says this.

If comms/legal clear a named partnership statement, that is a one-paragraph addition — do it
deliberately, with their wording. Until then, do not upgrade the language.

## Customer confidentiality

No named accounts appear anywhere on the page. Buyer rows, value-chain profiles, the
group-platform case, the agency case and the automotive VFX case are all written as
category archetypes. Volumes are stated as orders of magnitude, and the VFX cost figures
are framed as a production benchmark for that shot class rather than a quote. If a named
reference is ever cleared for public use, add it deliberately — the current text is written
so that nothing has to be removed in a hurry.

## Buyer profile pages — removed

There used to be a `#paid-media` per-segment buyer page (benchmark tiles across the nine
paid-media platforms in `../ads_customer_research/results/*.json`, the creative loop, and
what that segment buys on). It was cut on review — the buyers section already carries the
paid-media archetype, and the deep page slowed the pitch down. The markup is recoverable from
git history / the scratchpad backups if a per-segment page is wanted again; Ads Tech (seven
companies, same folder, `classification: "Ads Tech"`) was the planned second one.

To recount after the research set changes:

```bash
python3 - <<'EOF'
import json, glob
pm = [json.load(open(f)) for f in glob.glob('../ads_customer_research/results/*.json')]
pm = [d for d in pm if d.get('classification') == 'Paid Media']
print(len(pm))
EOF
```

Capability counts were hand-verified against each record's `creative_ai_products` field —
keyword matching gets them wrong, because most records describe a capability in order to
say it is *absent*.

## Playable AI (solutions tab 04)

Sourced from the internal spec doc (`AI Playable Ad Factory for Gaming UA on TikTok`).
Kept on the page: the format economics, the three stages and the validation gate, the two
case demos and the per-stage model stack. **Left off deliberately:** internal skill slugs,
the agent framework name, run directory layout and file-level artifact names — those are
implementation detail an external reader does not need and we should not publish.

Still missing: the two playables are described, not embedded. The third card in that row is
a reserved slot — drop the self-contained builds (or their QR test links) in there when they
are cleared to host.

## Removed on review

`#gates` (gaps & proof) and `#imagination` (what becomes possible) were both cut. `PROOF_OK` /
`PROOF_NO` still exist in `app.js` and `renderProof()` null-guards on the missing container, so
restoring the section is markup-only. The brand answer's footnote used to say "see the evidence
section" — it now just states the runs are from our evaluation set.

## The demo library is an allowlist

`KEEP` in `build_assets.py` is an explicit allowlist. Every item definition above it stays in
the file, but only ids listed in `KEEP` get published. It currently holds 52 curated items; the
80 original assets are still defined and transcoded in `media/` but out of the manifest. Add an
id back to `KEEP` and re-run to republish. `KEEP = None` publishes everything.

## Curated sources

| Source | In `KEEP` | Notes |
|---|---|---|
| `../brandfilm_src/` (user's Downloads) | 6 | industry brand films |
| Lark `YqTsdyyGoolvTtxYk30mamYpyC8` 精选总览 | 13 | `yq_*`, one case per industry |
| Lark `KEhhwzg0GiTA79kzsLcczMBqn3c` Brief In, Ads Out | 33 | `kh_*` |

### Deliberately NOT in the library

From the Brief-In-Ads-Out doc, 23 downloaded clips were left out because they belong elsewhere,
not because they are weak:

- **10 × `4.2 五项画质进阶`** — SD2.0 / SD2.5 same-shot comparisons. These belong in `#compare`
  (07 代际对比); dropped into the library they read as unrelated standalone demos.
- **7 × greybox control + 2 × Vibe 3D** — same argument as the CONTROL IN → FILM OUT block
  already in the brand solution panel.
- **1 × Trend Insights** — a screen recording of a research report, not an ad.

They are downloaded and sitting in the scratchpad `kh/` folder; moving any group in is a
copy plus a `KEEP` entry.

### Downloads that failed

10 of the doc's 66 clips would not transfer. All ten are **83–503 MB** source files; everything
under ~60 MB came down fine, so the Lark `+media-preview` endpoint drops mid-stream above a size
threshold (`cannot create file: unexpected EOF`), and `+media-download` 403s on these docs
entirely. Retried 8× each. Tokens are in `keh_map.json`. Upgrading lark-cli (1.0.73 → 1.0.85) is
the obvious first thing to try.

## Gallery filter axes

Three axes, all in `app.js`:

| Axis | Control | Values | Item field |
|---|---|---|---|
| Type | tabs | `branding` / `performance` | `cat` |
| Industry | first chip row (`#indChips`) | auto, fnb, home, baby, beauty, fashion, tech, retail, travel, gaming | `ind` |
| Orientation | second chip row (`#ratioChips`) | vertical / horizontal | derived from `ratio` |

Industry chips with a zero count are hidden, and the counts respect the selected type tab.
Changing the type tab resets the industry chip. `ind` is set per item via `ind="..."` in
`build_assets.py`; items without it only ever appear under "All industries".

## Industry brand films

Six films — automotive (SUV night rain, tyre tread macro), F&B (QSR cheese melt, chilled beer
pour), home & baby care (stain demo, absorbency demo). Sources live in `../brandfilm_src/`
(`BFS`). `bf_baby` is the only 9:16 item; its poster is pinned with `poster_at=6.0` because the
auto-picked brightest frame was the end card.

## `media/sizefam/` — one master → the whole size family (display solution)

Seven stills pulled from the playbook wiki's display section, in three blocks at the bottom of
the display panel:

1. **Standard banner sizes** — 970×250 across the top, then 728×90 / 320×100 / 300×600.
2. **Responsive & social ratios** — 1.91:1 / 1:1 / 4:5.
3. **Static → looping** — the same master as a still and as a 3–5s loop.

`.szf-i img` uses `height:auto` with no `object-fit`: a size family whose sizes have been
normalised proves nothing, so these must never be forced to a common tile shape. The 300×600
half-page is genuinely twice the height of its row — that is the point.

Captions carry format specs only. The source images render real brands (Duolingo, Airbnb,
Booking.com, Häagen-Dazs) and those names are not in the copy, same rule as everywhere else on
this page — but the brands are visible *inside* the assets, which is a clearance question
before this page goes public.

## `media/control/` — control in → film out (brand solution)

Four side-by-side strips inside the brand production panel, each proving the panel's thesis
(CG locks control, AI delivers output): blockout → finished drift shot, physics sim → product
shot, body mocap → athlete, facial mocap → performance. Sources came from the user's Downloads
folder; originals are 1280×360 to 2560×720. Like the use-case clips they are shown at
**native frame size** — `.ctrl video` sets `height:auto` with no `object-fit`. Cropping these to
a uniform tile would destroy the left/right comparison, which is the entire point.

The `.im-chip` "image model" pills that used to sit on every compact workflow step were removed
(the style rule is still in `style.css`). The full step detail inside `<details>` still names the
image-model work per step.

## Seedance 2.5 use cases (Lark wiki `O3mXwSFm5i48IJkjXdNcHsqDnfd`, section 4.2)

`media/usecase/` — five advertising / e-commerce use cases at the end of `#creative`: 30s brand
film, 3D animated spot, repurposed viral video, SKU batch swap, localised overseas versions.
Clips are shown at their **native frame size** (no `object-fit: cover`, no forced aspect ratio) —
that is a deliberate constraint, do not "fix" the layout by cropping them.

**Missing asset:** the generated *output* clip for "Repurpose Viral Videos"
(`PjvAbzQVuoq6B8xZ34wcLfzHn6c`) would not transfer — ~20 attempts, all dying mid-stream with
`cannot create file: unexpected EOF`; `+media-download` 403s where `+media-preview` works. The
card currently shows the source clip and its four image references. To finish it:

```bash
lark-cli docs +media-preview --token PjvAbzQVuoq6B8xZ34wcLfzHn6c --output uc_viral_out
```

then transcode into `media/usecase/uc_viral_out.mp4` and add it under the source clip. Trying
`lark-cli update` (1.0.73 → 1.0.85) first is probably worth it.

## Legacy media from ads.byteplus-demo.com

`media/legacy/` holds the 64 assets pulled from the previous site — they are already
web-optimised (H.264, small), so they are copied in as-is rather than re-encoded, and they
are **not** part of `build_assets.py` or the demo manifest. Where they are used:

| Assets | Where they landed |
|---|---|
| `sofa_input-*`, `sofa_digital-twin`, `sofa_cg-*`, `sofa_lighting-*`, `sofa_render-*`, `sofa_kv-*`, `sofa_final-film` | the brand five-stage pipeline, one visual per stage |
| `brand-{beauty,beverage,auto,tech}-demo` | the four brand demo tiles, now playable |
| `auto-vfx-input` / `auto-vfx-final` | before/after pair in the automotive VFX case |
| `performance-{fashion,ugc,sofa,beauty}-demo` + `performance-frames_*` | the four performance proof cards, each with its clip and three key frames |
| `demo-display-{commerce,beauty,diwali}` | the three display master visuals |
| `fish_01..09_thumb`, `input_fish_sm` | the playable variant matrix (one input → nine loops) |

**Renamed on copy:** the source files `wpp-auto-input.mp4` / `wpp-auto-final.mp4` are stored
as `auto-vfx-input.mp4` / `auto-vfx-final.mp4`. The case is written anonymously on the page,
so the client name should not travel in a public asset URL either.

Unused so far: `brand-reference.mp4`, `brand-poster.jpg`, `performance-generated.mp4`,
`performance-poster.jpg`, `sofa_kv-{side,mcu,ultrawide}.jpg`, `sofa_cg-scene.jpg`,
`sofa_lighting-2.jpg` — kept in the folder as spares.

## Playbook media (Lark wiki `SNVXw69gTi515kkVoi8c98BznKh`)

`media/playbook/` holds 37 videos + posters + 5 stills pulled from the creative playbook doc.
Two places use them:

- **`#creative`** (05 · Ad creative by placement) — five placement groups × six creative angles.
- **The display scenario** — the doc's last section (Banner Display Ads). Its four looping
  banners sit in the display workflow's demo strip; the *Variants · Scale · Replicate* answer
  page below it carries the same clips as its three cards. The `_img.jpg` stills are all
  unused — the swap-pair figure built from `display_02_img` / `display_03_img` was cut for
  taking too much vertical space.

Captions are written to format specs only — the source doc labelled these mocks with real
brand names (Grammarly / Sephora / Booking.com / Häagen-Dazs / Duolingo) and those were
dropped, same rule as the trademark cuts in `EXCLUDED`. Brands rendered *inside* the assets
themselves cannot be removed, which is a clearance question before this page goes public.

There is no "one master, four banner sizes" size-family figure. An earlier build used
`display_02_img` for that; the image is actually a 300×250 retargeting banner, so the
caption was wrong and the figure was removed.

## Pool chart scale

The two bars in the production-pool figure share one scale where 100% = $60B, and the 2026
bar is drawn at $27.5B — the midpoint of the stated $25–30B range. That caveat used to be a
footnote on the page; it was removed for the pitch cut, so it lives here now. The figure's
"view as table" panel still shows the $25–30B range, so the range itself is not hidden.

## Demo library

`build_assets.py` is the single source of truth. It curates a list of source assets,
transcodes them for the web (H.264, ≤1280px, CRF 28, faststart), picks a poster frame,
and writes `assets/data/demos.js`.

```bash
python3 build_assets.py            # only builds what is missing
python3 build_assets.py --posters  # re-pick poster frames
python3 build_assets.py --force    # rebuild everything
```

- Poster frames are auto-selected: four candidates across the clip, brightest one wins,
  so black leaders never become the tile. Override per item with `poster_at`.
- Source assets stay where they are; nothing in the working directory is modified.
  `~`-prefixed paths resolve to the home tree (the shared good-cases library).
- Media output is ~103 MB for the 52 published videos. Poster pixel dimensions are written
  into the manifest so the masonry reserves space before a lazy-loaded tile arrives.

### Adding a demo

Add one `V(...)` (video) or `I(...)` (image) entry to `ITEMS` in `build_assets.py`
and re-run it. Fields: id, category, source path, EN/ZH title, EN/ZH description,
aspect, duration, model, tags, references, badge.

### What was pulled out

`EXCLUDED` in `build_assets.py` lists the twelve demos removed on review, with the reason
on each line. Three groups:

1. **Third-party trademarks** — `bumper_launch`, `bumper_promo`, `social_brand` render real
   consumer brands. Not cleared for an outward-facing page.
2. **Text-rendering defects** — `chat_glowy`, `comments_velva`, `instream_promo` contain
   garbled UI copy, which directly undercuts the text-fidelity claim the page makes.
3. **Weak frames** — `ai_chat_sunveil`, `calla`, `instream_hook5s`, `shop_democard`,
   `shop_world`, `bumper_cta` do not earn a tile.

The definitions are kept, not deleted — remove an id from `EXCLUDED` and re-run to restore it.

Same rule was applied to assets found but not added: Dove UGC, Ruggable search-grid and the
AirPods-style brand film are all strong work, but they render real brands. They are one line
of code away if legal clears them.

## Known gaps for v2

- Playable section has no live playable embedded yet (copy only).
- Brand solution section describes the CG + AI pipeline but does not yet show the
  Blender / digital-twin intermediate stills.
- Contact CTA points at a `mailto:` placeholder.
