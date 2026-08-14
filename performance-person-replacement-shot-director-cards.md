# Performance precise editing — shot-by-shot character replacement

Status: **Director's Card review only — not submitted**

## Shared generation settings

- Model: `Seedance 2.5`
- Task type: `edit`
- Character reference: `public/media/performance-precise-editing/references/person-southeast-asian.png` as `@Image 1`
- Output: `720p`, `MOV`, adaptive ratio, source-shot duration, original audio retained
- Editing rule: replace the visible performer only; preserve product, set, camera, timing, graphics and audio

---

## Director's Card 01 — Hook, blender reveal and ingredient action

- Source: `public/media/performance-precise-editing/shots/shot-01-plus-02.mp4` as `@Video 1`
- Timecode: `00:00.000–00:08.167` (complete Shot 01 followed by complete Shot 02)
- Edit target: the on-camera presenter in Shot 01 and her visible hands / forearms in Shot 02
- Locked: both complete shots, the original cut, blender, ingredients, kitchen, framing, camera movement, hook text, dialogue and timing

### Full prompt submitted to Seedance

```text
In @Video 1, which contains two complete consecutive source shots, replace only the original presenter with the fictional Southeast Asian female creator from @Image 1. In the first shot, replace the visible on-camera presenter. In the second top-down shot, replace only the presenter's visible hands and forearms so they belong to that same fictional creator. Match @Image 1 precisely for facial identity, face shape, eyes, nose, lips, skin tone, dark hair pulled back, and silver hoop earrings wherever those features are visible. Keep the original cream sweatshirt and wardrobe styling shown in @Video 1; do not copy the reference-image background.

Transfer the original presenter's exact performance frame by frame across both shots. In Shot 01 preserve her screen position, body posture, gaze to camera, surprised hook expression, eyebrow and facial-muscle movement, mouth movement, speech timing, hand gesture, grip, and hand-to-blender contact. In Shot 02 preserve every reach, grip, release, ingredient drop, hand trajectory, finger articulation, contact point, occlusion, action timing, and motion blur; do not invent or reveal a face or body where none appears. The replacement must remain the same person across the cut with natural skin texture, anatomically correct hands, stable facial features, stable skin tone, and no identity drift.

Keep every non-character element unchanged across both complete shots: the original white-and-blue portable blender, blue strap, orange button, all strawberries, banana pieces and other ingredients, their count and order, countertop texture, kitchen, window light, background objects, top-down composition in Shot 02, camera angles, framing, lens perspective, depth of field, camera motion, lighting direction, shadows, reflections, color grade, both shot durations, and the original cut point. Keep the exact on-screen text "SMOOTHIE IN 30 SECONDS" unchanged. Preserve the original audio track exactly, including the same dialogue wording, original voice, lip-sync timing, music, ingredient sounds, sound effects, ambience, room tone, and cut timing. Do not add, remove, replace, restyle, or move any text, logo, product detail, ingredient, prop, or graphic.
```

---

## Director's Card 02 — Ingredients added to blender

- Source: `public/media/performance-precise-editing/shots/shot-02.mp4` as `@Video 1`
- Timecode: `00:03.500–00:08.167`
- Edit target: only the visible hands / forearms belonging to the presenter
- Locked: fruit, blender, countertop, top-down composition, action and timing

### Full prompt submitted to Seedance

```text
In @Video 1, replace only the visible human parts belonging to the original presenter with the corresponding hands and forearms of the fictional Southeast Asian female creator from @Image 1. This is a continuity edit for the same replacement creator established in the adjacent shots. Match @Image 1 for skin tone and natural human appearance, while preserving the original hand size, finger placement, wrist angle, sleeve shape, and cream sweatshirt wardrobe shown in @Video 1.

Transfer the original action exactly frame by frame: preserve every reach, grip, release, ingredient drop, hand trajectory, finger articulation, contact point, occlusion, action timing, and motion blur. Do not invent or reveal a face or body where none appears in the source. Maintain anatomically correct hands with five fingers, stable skin tone, clean object boundaries, and no merging between fingers, fruit, cup, or blender.

Keep every non-character element unchanged: all strawberries, banana pieces, other ingredients, their count and order, the portable blender cup, blue strap, countertop texture, top-down camera angle, framing, lens perspective, lighting, shadows, reflections, color grade, shot duration, and edit points. Preserve the original audio track exactly, including dialogue, original voice, music, ingredient sounds, sound effects, ambience, and timing. Do not add, remove, replace, or redesign any product, ingredient, text, logo, prop, or graphic.
```

---

## Director's Card 03 — Button press and blending

- Source: `public/media/performance-precise-editing/shots/shot-03.mp4` as `@Video 1`
- Timecode: `00:08.167–00:13.208`
- Edit target: only any visible hand / forearm belonging to the presenter
- Locked: blender geometry, liquid transition, product text, shot timing and sound

### Full prompt submitted to Seedance

```text
In @Video 1, replace only any visible hand and forearm belonging to the original presenter with the corresponding hand and forearm of the fictional Southeast Asian female creator from @Image 1. This must read as the same replacement creator used in the surrounding shots. Match @Image 1 for skin tone and natural human appearance, while retaining the original cream sweatshirt sleeve, hand scale, finger proportions, wrist angle, and exact screen position from @Video 1.

Transfer the source performance exactly frame by frame: preserve the button-press gesture, fingertip placement on the orange button, pressure timing, withdrawal motion, hand-product contact, occlusion, and motion blur. Keep the replacement hand anatomically correct and temporally stable, without extra fingers, fused edges, identity drift, or interference with the blender.

Keep every non-character element unchanged: the exact white-and-blue portable blender design, blue strap, orange button, transparent cup, ingredient layers, liquid-blending transformation, foam, reflections, countertop, kitchen background, camera angle, framing, lens perspective, depth of field, lighting, shadows, color grade, shot duration, edit points, and the exact on-screen text "BLEND · SIP · GO". Preserve the original audio track exactly, including dialogue, original voice, blender motor sound, music, sound effects, ambience, and timing. Do not add, remove, replace, restyle, or move any text, logo, product feature, prop, or graphic.
```

---

## Director's Card 04 — Sip, lid and tote action

- Source: `public/media/performance-precise-editing/shots/shot-04.mp4` as `@Video 1`
- Timecode: `00:13.208–00:18.208`
- Edit target: the full visible presenter
- Locked: blender, drinking action, tote interaction, kitchen, camera and audio

### Full prompt submitted to Seedance

```text
In @Video 1, replace only the original presenter with the fictional Southeast Asian female creator from @Image 1. Match @Image 1 precisely for facial identity, face shape, eyes, nose, lips, skin tone, dark hair pulled back, and silver hoop earrings. Keep the original cream sweatshirt and all wardrobe styling shown in @Video 1; do not copy the reference image background.

Transfer the original presenter's exact performance frame by frame: preserve her screen position, posture, gaze, facial expression, mouth movement, sip action, head tilt, swallowing motion, arm trajectory, hand grip, finger placement, lid interaction, blender contact, tote interaction, body timing, and performance rhythm. Preserve physically correct contact between lips and lid, hands and blender, and hands and tote. The replacement must remain one stable person throughout the shot with natural skin texture, realistic facial motion, anatomically correct hands, and no identity drift.

Keep every non-character element unchanged: the exact white-and-blue portable blender, blue strap, orange button, pink smoothie, lid, tote bag, countertop, kitchen, background objects, camera angle, framing, lens perspective, depth of field, camera motion, lighting direction, shadows, reflections, color grade, shot duration, and edit points. Preserve the original audio track exactly, including the same dialogue wording, original voice, mouth-sync timing, drinking sound, music, sound effects, ambience, and room tone. Do not add, remove, replace, restyle, or move any text, logo, product detail, prop, or graphic.
```

---

## Director's Card 05 — Final product hold and CTA

- Source: `public/media/performance-precise-editing/shots/shot-05.mp4` as `@Video 1`
- Timecode: `00:18.208–00:24.064`
- Edit target: the on-camera presenter
- Locked: final product pose, CTA graphics, pointing gesture, camera and audio

### Full prompt submitted to Seedance

```text
In @Video 1, replace only the original on-camera presenter with the fictional Southeast Asian female creator from @Image 1. Match @Image 1 precisely for facial identity, face shape, eyes, nose, lips, skin tone, dark hair pulled back, and silver hoop earrings. Keep the original cream sweatshirt and all wardrobe styling shown in @Video 1; do not copy the reference image background.

Transfer the original presenter's exact closing performance frame by frame: preserve her screen position, forward lean, gaze to camera, smile, facial-muscle movement, mouth movement, speech timing, product-hold pose, grip, finger placement, hand-to-blender contact, pointing gesture toward the CTA, arm motion, and performance rhythm. The replacement must remain one stable person throughout the shot with natural skin texture, realistic facial motion, anatomically correct hands, and no identity drift.

Keep every non-character element unchanged: the exact white-and-blue portable blender, blue strap, orange button, pink smoothie, countertop, tote bag, kitchen, background objects, camera angle, framing, lens perspective, depth of field, camera motion, lighting direction, shadows, reflections, color grade, shot duration, edit point, and every original on-screen text and CTA graphic including "SHOP NOW". Preserve the original audio track exactly, including the same dialogue wording, original voice, lip-sync timing, music, sound effects, ambience, and room tone. Do not add, remove, replace, restyle, or move any text, logo, product detail, prop, or graphic.
```

---

## QA gate before stitching

Each shot must pass all checks before the five clips are stitched back together:

1. Same replacement identity, hairstyle, skin tone and earrings across shots 01, 04 and 05.
2. Matching skin tone and sleeve continuity on hands / forearms in shots 02 and 03.
3. Original blender geometry, colors, strap, button, liquid and product placement unchanged.
4. Original camera, timing, edit boundaries, on-screen text and audio unchanged.
5. No extra fingers, hand-product intersections, facial drift, wardrobe drift or background regeneration.

## Skill references applied

- `task-types-and-constraints.md`: EDIT task with adaptive ratio and source duration.
- `video-editing.md`: one tightly scoped replacement intent per request; keep non-target content unchanged.
- `multimodal-assets.md`: every source is tagged inline as `@Video 1` / `@Image 1`.
- `performance-direction.md`: transfer the source actor's physical performance instead of inventing new acting.
- `shot-design.md`: treat each source clip as one edit shot and preserve its original timing.
- `audio.md`: retain the source audio rather than regenerate dialogue or voice.
- `safety.md`: use the fictional, model-generated character reference rather than a real-person identity.
