#!/usr/bin/env python3
"""Curate + transcode demo assets and emit assets/data/demos.js for the site.

Run:  python3 build_assets.py           (skips files already built)
      python3 build_assets.py --force   (rebuild everything)
"""
import json, os, subprocess, sys, concurrent.futures, shutil

ROOT = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.dirname(ROOT)                      # /Users/bytedance/daily task
VID_OUT = os.path.join(ROOT, "media", "video")
POS_OUT = os.path.join(ROOT, "media", "poster")
IMG_OUT = os.path.join(ROOT, "media", "img")
FORCE = "--force" in sys.argv
POSTERS = "--posters" in sys.argv   # regenerate poster frames only

SBF = "seedance_brand_film_20260807"
PBF = "playbook_fix"
MR = "ads_customer_research/eval_set/runs/20260808_multiref_v2"
B1 = "ads_customer_research/eval_set/runs/20260807_batch1"
REFS = "ads_customer_research/eval_set/refs/v2"
PD = "ads_customer_research/pitch/demo"
PDI = "ads_customer_research/pitch/demo_infillion"
PDH = "ads_customer_research/pitch/demo_home"
BFS = "brandfilm_src"                            # industry brand films
CUR = "curated_src"                              # curated cases (Lark 精选总览)


def V(id, cat, src, en, zh, den, dzh, ratio, dur, model="Seedance 2.5",
      tags=None, refs=None, prompt=None, badge=None, feature=False, poster_at=None,
      ind=None):
    return dict(id=id, cat=cat, ind=ind, src=src, type="video", title={"en": en, "zh": zh},
                desc={"en": den, "zh": dzh}, ratio=ratio, dur=dur, model=model,
                tags=tags or [], refs=refs or [], prompt=prompt, badge=badge,
                feature=feature, poster_at=poster_at)


def I(id, cat, src, en, zh, den, dzh, ratio, model="Seedream 4.5", tags=None, badge=None,
      ind=None):
    return dict(id=id, cat=cat, ind=ind, src=src, type="image", title={"en": en, "zh": zh},
                desc={"en": den, "zh": dzh}, ratio=ratio, dur=None, model=model,
                tags=tags or [], refs=[], prompt=None, badge=badge, feature=False)


ITEMS = [
    # ───────────────────────────── Brand film ─────────────────────────────
    V("brand_15", "brand", f"{SBF}/seedance25_brand_film_15s.mp4",
      "See the World Dance — 15s brand film", "See the World Dance — 15秒品牌片",
      "Three-act macro-to-human montage, cut on the beat, single whispered VO. Native audio generated with the picture.",
      "微距到人像的三幕蒙太奇，全片卡鼓点，唯一人声是一句气声耳语。声音与画面同生成。",
      "16:9", "15s", tags=["Native audio", "Multi-shot", "Beat cut"], feature=True,
      badge="Hero"),
    V("brand_30", "brand", f"{SBF}/seedance25_brand_film_30s.mp4",
      "See the World Dance — 30s director's cut", "See the World Dance — 30秒导演版",
      "The full 30-second narrative in one generation: 8 shots, sustained identity, score and sound design end to end.",
      "一次生成完成 30 秒完整叙事：8 个镜头、身份稳定、配乐与音效贯穿全片。",
      "16:9", "30s", tags=["30s single pass", "8 shots", "Native audio"], feature=True,
      badge="30s"),
    V("room_alive", "brand", f"{SBF}/room_alive.mp4",
      "Room Alive — still to living scene", "Room Alive — 静图到活场景",
      "One interior still becomes a breathing room: light drift, fabric motion, dust in the beam. Image-to-video.",
      "一张室内静图变成会呼吸的空间：光线游移、织物微动、光束里的浮尘。图生视频。",
      "4:3", "5s", tags=["Image-to-video", "Ambient"]),
    V("ui_reel_en", "brand", f"{SBF}/ui_ads_showcase_reel_en.mp4",
      "UI-native ad reel (EN)", "UI 原生广告合集（英文）",
      "Five UI-native vertical ads stitched into one reel — chat, comments, notes, AirDrop and AI-assistant formats.",
      "五条 UI 原生竖版广告合成一条 reel —— 聊天、评论、备忘录、隔空投送与 AI 助手format。",
      "9:16", "75s", tags=["Reel", "5 formats"], badge="Reel"),

    # ── industry brand films (automotive / F&B / home & baby care) ──
    V("bf_auto", "branding", f"{BFS}/bf_auto.mp4",
      "Automotive — SUV in night rain", "汽车 — SUV 雨夜",
      "Wet asphalt, spray off the tread, sodium street light on wet paint. The three surfaces that expose a weak renderer.",
      "湿沥青、胎面溅起的水雾、钠灯打在湿漆面上。这三种表面最能照出渲染力不足。",
      "16:9", "30s", tags=["Automotive", "Night", "Wet surface"], badge="30s", ind="auto"),
    V("bf_tyre", "branding", f"{BFS}/bf_tyre.mp4",
      "Automotive — tyre tread macro", "汽车 — 轮胎胎面微距",
      "Black rubber against black background with water beading on the tread — the hardest lighting problem in the category.",
      "黑底黑胶，水珠挂在花纹上——这个品类里最难打的光。",
      "16:9", "14s", tags=["Automotive", "Macro", "Product"], ind="auto"),
    V("bf_burger", "branding", f"{BFS}/bf_burger.mp4",
      "QSR — cheese melt", "餐饮 — 芝士融化",
      "Appetite appeal is a physics problem: the flow rate of the melt and the sear on the patty underneath.",
      "食欲感其实是物理问题：芝士流动的速度，和底下肉饼的焦痕。",
      "16:9", "30s", tags=["Food", "Macro", "Appetite appeal"], badge="30s", ind="fnb"),
    V("bf_beer", "branding", f"{BFS}/bf_beer.mp4",
      "Beverage — chilled pour", "酒饮 — 冰镇倒杯",
      "Condensation on glass, head retention, backlit amber. Beer is judged on the bubbles before anything else.",
      "杯壁凝水、泡沫挂杯、逆光琥珀色。啤酒片先看气泡，再看别的。",
      "16:9", "14s", tags=["Beverage", "Condensation", "Backlit"], ind="fnb"),
    V("bf_homecare", "branding", f"{BFS}/bf_homecare.mp4",
      "Home care — stain demo", "家清 — 去渍演示",
      "A demo-led category: the liquid has to hit the fabric and visibly do something. White-on-white with no blown highlights.",
      "靠演示说话的品类：液体落到布面上必须看得见效果。白上加白，还不能过曝。",
      "16:9", "14s", tags=["Home care", "Demo", "White balance"], ind="home"),
    V("bf_baby", "branding", f"{BFS}/bf_baby.mp4",
      "Baby care — absorbency demo", "母婴 — 吸收演示",
      "Vertical-native product demo. The absorption has to read as continuous, and the fabric texture has to survive the wetting.",
      "竖版原生的产品演示。吸收过程要连贯，浸湿之后的织物纹理还得在。",
      "9:16", "14s", tags=["Baby care", "Demo", "Vertical"], poster_at=6.0, ind="baby"),

    # ── curated cases · Lark 精选总览 ──
    V("yq_auto", "branding", f"{CUR}/yq_auto.mp4",
      "Automotive brand film — five references, five jobs", "汽车品牌片 —— 五参考角色分离",
      "Three product views lock the car, one location reference sets the coast road, one palette reference does colour only. Five references, none of them bleeding into each other.",
      "三视图锁车型（换角度不换车），场景图给海岸晨雾公路，色板图只负责调色——五个参考各司其职，互不污染。",
      "21:9", "14s", tags=["5 references", "Brand film", "VO"], ind="auto", badge="21:9"),
    V("yq_fizzo", "branding", f"{CUR}/yq_fizzo.mp4",
      "FMCG CGI — end card typed out in sync with the VO", "快消 CGI —— 尾板逐字与 VO 同步",
      "Macro juice burst into a can flying through the splash with no label distortion, then a hard cut to an end card reproduced word for word — and the voice-over lands on it.",
      "果肉爆汁微距 → 罐体穿越果汁云（标签无形变）→ 硬切尾板。尾板按参考版式逐字复现，口播与尾板出现同步落点。",
      "16:9", "12s", tags=["Text rendering", "CGI", "Native audio"], ind="fnb"),
    V("yq_app", "performance", f"{CUR}/yq_app.mp4",
      "App demo — UI reproduced pixel for pixel", "App 演示 —— UI 逐像素保真",
      "Three UI reference frames come back pixel-accurate: tap transitions stay legible, the bar chart animates inside the layout, and the running total holds steady the whole way.",
      "三帧 UI 参考在视频中逐像素复现，点按转场文字不糊，图表动画在版式内完成，总额数字全程稳定。",
      "9:16", "13s", tags=["UI fidelity", "App install", "Vertical"], ind="tech"),
    V("yq_sneaker", "branding", f"{CUR}/yq_sneaker.mp4",
      "Sneaker hero film — structure locked element by element", "球鞋英雄片 —— 逐要素锁定商品结构",
      "Exploded-build narrative, 360° turntable, bleach-bypass grade. The silhouette holds because every element is pinned in text as well as by reference — the only way non-standard product structure survives.",
      "零件组装叙事 + 360° 转台 + bleach-bypass 质感。鞋型靠「参考图 + 逐要素文字锁定」保持一致——非标结构商品的必备打法。",
      "9:16", "13s", tags=["Product structure", "Turntable", "Vertical"], ind="fashion"),
    V("yq_smb", "performance", f"{CUR}/yq_smb.mp4",
      "Local business — a usable spot on the first pass", "本地商家 —— 低成本快出片",
      "Storefront and dish both stay true, and the accented shop sign is correct frame by frame. One generation, usable — no re-rolling, which is the whole SMB proposition.",
      "门头与餐品两参考同时保真，店招含重音符逐帧正确。一次生成即可用、不抽卡——SMB / 本地服务的卖点场景。",
      "16:9", "10s", tags=["SMB", "Text rendering", "One pass"], ind="retail"),
    V("yq_swap_src", "performance", f"{CUR}/yq_swap_src.mp4",
      "Source clip — before the product swap", "源片 —— 换品前",
      "The generated source: a hand lifting a blue can out of an ice bucket. Everything after this is an edit, not a re-roll.",
      "生成的源片：手从冰桶取出蓝罐。后面那一条是编辑出来的，不是重抽的。",
      "16:9", "8s", tags=["Source", "V2V"], ind="fnb"),
    V("yq_swap_out", "performance", f"{CUR}/yq_swap_out.mp4",
      "Product swapped — hand, ice and camera all survive", "局部换商品 —— 手、冰与机位全部保留",
      "A V2V instruction replaces only the can. Hand, ice, water beads, background and camera move are all preserved, and the label tracks the hand correctly — SSIM 0.935 against the source.",
      "V2V 指令只替换罐体。手、冰、水珠、背景、机位全部保留，标签随手部运动保持正确取向，与源片全帧 SSIM 0.935。",
      "16:9", "8s", tags=["V2V editing", "Localisation", "SSIM 0.935"], ind="fnb", badge="V2V"),
    V("yq_ptbr", "performance", f"{CUR}/yq_ptbr.mp4",
      "Brazilian Portuguese VO — localisation with no face", "葡语旁白 —— 出海本地化",
      "Word order, phrasing and duration all correct, pronunciation natural. A voice-over route touches no face, so there is no likeness clearance and no talent booking — the cheapest localisation path there is.",
      "词序、断句、时长全对，发音自然。画外音路线不涉及人脸，零合规成本，是多语言本地化最低成本的交付路径。",
      "9:16", "9s", tags=["Multilingual", "VO", "No face"], ind="fnb"),
    V("yq_music", "branding", f"{CUR}/yq_music.mp4",
      "Native score — cuts land on the beat", "原生配乐卡点 —— 节拍驱动剪辑",
      "Three product tableaux under one continuous generated electronic score. Both hard cuts land on downbeats, and the track resolves with a proper decay instead of stopping.",
      "三个产品 tableau，原生电子配乐全片连贯。两次硬切均落在音频重拍上，结尾 cadence 收束后自然衰减。",
      "1:1", "12s", tags=["Native audio", "Beat cut", "Square"], ind="tech"),
    V("yq_nido", "branding", f"{CUR}/yq_nido.mp4",
      "Furniture — sofa and floor lamp", "家居家具 —— 沙发与落地灯",
      "Upholstery weave, seam shadow and the falloff of a warm lamp — the three things a furniture brand team zooms in on before anything else.",
      "织物纹理、缝线阴影、暖光衰减——家具品牌团队会先放大看的三样东西。",
      "16:9", "14s", tags=["Furniture", "Material", "Lighting"], ind="home"),
    V("yq_hotel", "branding", f"{CUR}/yq_hotel.mp4",
      "Hotel — island resort brand film", "酒店 —— 海岛酒店品牌片",
      "Aerial across a white-sand bay and boardwalk, into an infinity pool meeting the horizon, then a rise into sunset with the wordmark surfacing in the gold. The tourism-board and OTA format.",
      "航拍掠过白沙湾与水上栈道，切入无边泳池与海平线相接，最后升镜入落日，字标浮现于金色天空。旅游局、OTA 与度假酒店的品牌形象片形态。",
      "16:9", "14s", tags=["Travel", "Aerial", "Brand film"], ind="travel"),
    V("yq_pet", "branding", f"{CUR}/yq_pet.mp4",
      "Pet food — waiting, pour, first bite", "宠物犬粮 —— 等待、倾泻、开吃",
      "The dog waits, kibble pours in slow motion, the bowl empties. On the packaging hero frame the wordmark and running-dog logo match the reference exactly.",
      "犬只等待、狗粮慢镜倾泻入碗、进食收尾。包装 hero 定格时字标与奔跑犬 logo 与参考完全一致。",
      "16:9", "12s", tags=["Pet", "Packaging", "Slow motion"], ind="pet"),
    V("yq_aeris", "branding", f"{CUR}/yq_aeris.mp4",
      "Appliance — the before/after is the selling point", "家电 —— 前后对比即卖点",
      "Debris in raking morning light, the vacuum sweeps a clean track through it, then the product sets in a cleared room. Trim ring and body logo hold to the reference. Vertical, straight to feed.",
      "晨光条纹下的碎屑特写 → 吸尘器掠过留下一道干净轨迹 → 洁净空间中产品定妆。装饰环与机身 logo 与参考一致。竖版 9:16 直出，适配信息流。",
      "9:16", "12s", tags=["Appliance", "Before/after", "Vertical"], ind="home"),

    V("kh_brief_04", "branding", f"{CUR}/kh_brief_04.mp4",
      "Brief in, ads out — showreel", "Brief 进，成片出 —— 综合片",
      "The opening showreel: a brief goes in one end and finished advertising comes out the other.",
      "开篇综合片：一端进 brief，另一端出成片。",
      "4:3", "26s", tags=['Showreel'], ind="tech", badge="Reel"),
    V("kh_brief_07", "performance", f"{CUR}/kh_brief_07.mp4",
      "Brief in, ads out — long-form vertical", "Brief 进，成片出 —— 竖版长片",
      "A 36-second vertical piece generated from a single brief.",
      "由一份 brief 生成的 36 秒竖版长片。",
      "9:16", "36s", tags=['Vertical', 'Long-form'], ind="beauty"),
    V("kh_brief_08", "performance", f"{CUR}/kh_brief_08.mp4",
      "Brief in, ads out — vertical spot", "Brief 进，成片出 —— 竖版短片",
      "Straight from brief to a runnable vertical spot, no intermediate step.",
      "从 brief 直接到可投的竖版短片，中间没有别的环节。",
      "9:16", "15s", tags=['Vertical'], ind="fnb"),
    V("kh_creative_01", "branding", f"{CUR}/kh_creative_01.mp4",
      "Creative showcase · cookie garden I", "创意商品片 · 饼干花园 I",
      "A miniature fantasy garden built entirely from the product. Warm gold and cream, golden-hour light, cinematic shallow focus.",
      "用商品本身搭出一座微缩幻想花园。暖金与奶白，黄金时刻光线，电影感浅景深。",
      "9:16", "15s", tags=['Creative', 'Vertical', 'Macro'], ind="fnb"),
    V("kh_creative_02", "branding", f"{CUR}/kh_creative_02.mp4",
      "Creative showcase · cookie garden II", "创意商品片 · 饼干花园 II",
      "Second interpretation of the same brief — same product, same palette, a different world.",
      "同一份 brief 的第二种解法——同样的商品与配色，另一个世界。",
      "9:16", "15s", tags=['Creative', 'Vertical'], ind="fnb"),
    V("kh_hook_01", "performance", f"{CUR}/kh_hook_01.mp4",
      "Hook · felt-animation opener", "钩子 · 羊毛毡动画开场",
      "A craft-material world builds itself around the product in the first second — the scroll stops because the texture is unfamiliar.",
      "第一秒用一个手作材质的世界把商品包起来——停下来是因为这个质感没见过。",
      "9:16", "10s", tags=['Hook', 'Animation'], ind="beauty"),
    V("kh_hook_02", "performance", f"{CUR}/kh_hook_02.mp4",
      "Hook · brick-animation opener", "钩子 · 积木动画开场",
      "Toy-brick construction as the opening beat. Same product, a completely different visual grammar from the category norm.",
      "用积木搭建作为开场节拍。同一个商品，视觉语法和品类惯例完全不同。",
      "9:16", "4s", tags=['Hook', 'Animation'], ind="beauty"),
    V("kh_hook_03", "performance", f"{CUR}/kh_hook_03.mp4",
      "Hook · tilt-shift miniature", "钩子 · 移轴微缩",
      "Tilt-shift turns the set into a miniature. The product reads as a giant object, which is the whole trick.",
      "移轴把场景变成微缩模型，商品因此显得巨大——诀窍就在这里。",
      "9:16", "6s", tags=['Hook', 'Tilt-shift'], ind="beauty"),
    V("kh_hook_04", "performance", f"{CUR}/kh_hook_04.mp4",
      "Hook · face cream on still water", "钩子 · 面霜与静水",
      "The jar sits at the centre of calm water, petals drifting with the ripples, camera pushing in. Warm, even light and a slow reveal.",
      "面霜置于静水中央，花瓣随涟漪轻摆，镜头缓推。暖调均匀布光，慢速显影。",
      "9:16", "5s", tags=['Hook', 'Beauty'], ind="beauty"),
    V("kh_hook_05", "performance", f"{CUR}/kh_hook_05.mp4",
      "Hook · headphones", "钩子 · 耳机",
      "Product-first opener for consumer electronics — hard surfaces, controlled highlights, no wasted frames.",
      "消费电子的商品优先开场——硬表面、可控高光，没有一帧浪费。",
      "9:16", "5s", tags=['Hook', 'Product'], ind="tech"),
    V("kh_hook_06", "performance", f"{CUR}/kh_hook_06.mp4",
      "Hook · milk", "钩子 · 牛奶",
      "Square-format hook built on liquid motion. Pour, splash, settle — appetite appeal is a physics problem.",
      "方版钩子，靠液体运动撑起。倾倒、飞溅、落定——食欲感是物理问题。",
      "1:1", "5s", tags=['Hook', 'Square', 'Liquid'], ind="fnb"),
    V("kh_hook_07", "performance", f"{CUR}/kh_hook_07.mp4",
      "Hook · chocolate", "钩子 · 巧克力",
      "Square-format hook: the snap, the melt and the gloss, in that order.",
      "方版钩子：脆响、融化、光泽，按这个顺序。",
      "1:1", "5s", tags=['Hook', 'Square', 'Macro'], ind="fnb"),
    V("kh_hook_08", "performance", f"{CUR}/kh_hook_08.mp4",
      "Hook · cat food", "钩子 · 猫粮",
      "Pet category hook — the animal reacting is the proof, and it has to happen inside three seconds.",
      "宠物品类的钩子——动物的反应就是证据，而且必须在三秒内发生。",
      "16:9", "12s", tags=['Hook', 'Pet'], ind="pet"),
    V("kh_ip_01", "branding", f"{CUR}/kh_ip_01.mp4",
      "Brand IP · snack mascot", "品牌 IP · 零食吉祥物",
      "The mascot printed on the pack becomes a character that can carry future content — peek, run, jump, slide.",
      "包装上的吉祥物变成一个能承载后续内容的角色——探头、奔跑、跳跃、滑行。",
      "16:9", "12s", tags=['Brand IP', 'Character'], ind="fnb"),
    V("kh_ip_02", "branding", f"{CUR}/kh_ip_02.mp4",
      "Brand IP · luxury atmosphere", "品牌 IP · 奢品氛围",
      "Atmosphere as the deliverable. No demo, no claim — just the world the brand wants to own.",
      "交付的是氛围。不演示、不主张——只给出品牌想占住的那个世界。",
      "16:9", "12s", tags=['Brand IP', 'Luxury', 'Mood'], ind="fashion"),
    V("kh_ip_03", "branding", f"{CUR}/kh_ip_03.mp4",
      "Brand IP · face cream brand story", "品牌 IP · 面霜品牌故事",
      "A product story told as a narrative rather than a demo — the format brand teams sign off on.",
      "把商品故事讲成叙事而不是演示——这是品牌团队会签字的形态。",
      "16:9", "15s", tags=['Brand IP', 'Story'], ind="beauty"),
    V("kh_koc_01", "performance", f"{CUR}/kh_koc_01.mp4",
      "KOC · before/after cleaning", "KOC · 清洁前后对比",
      "Eight seconds, 9:16, one spray. Fast cutting, a hard before/after and an explicit CTA.",
      "八秒、9:16、一喷即净。快剪、强前后对比、CTA 直给。",
      "9:16", "8s", tags=['KOC', 'Before/after', 'Vertical'], ind="home"),
    V("kh_multiling_01", "performance", f"{CUR}/kh_multiling_01.mp4",
      "Multilingual · English VO, coffee", "多语言 · 英文口播 · 咖啡豆",
      "Eight seconds of English voice-over over a coffee-bean spot. Natural delivery, correct phrasing, no talent booking.",
      "八秒英文口播的咖啡豆广告。语气自然、断句正确，不用约人。",
      "9:16", "8s", tags=['Multilingual', 'VO', 'Vertical'], ind="fnb"),
    V("kh_multiling_02", "performance", f"{CUR}/kh_multiling_02.mp4",
      "Multilingual · French VO, sports drink", "多语言 · 法语口播 · 运动饮料",
      "The same asset localised into French — the market changes, the shoot does not.",
      "同一条素材本地化成法语——换的是市场，不是拍摄。",
      "9:16", "8s", tags=['Multilingual', 'VO', 'Vertical'], ind="fnb"),
    V("kh_presenter_01", "performance", f"{CUR}/kh_presenter_01.mp4",
      "Presenter · unboxing to camera", "口播 · 面向镜头开箱",
      "One person, one outfit, three products that all have to stay sharp and undistorted while being handled.",
      "一个人、一套衣服、三件商品，全程被拿在手里还要保持清晰不变形。",
      "9:16", "14s", tags=['Presenter', 'UGC', 'Vertical'], ind="retail"),
    V("kh_presenter_02", "performance", f"{CUR}/kh_presenter_02.mp4",
      "Presenter · livestream promotion", "口播 · 直播带货",
      "Livestream grammar: direct address, offer up front, product in hand the whole way.",
      "直播语法：直给、优惠前置、商品全程在手。",
      "9:16", "12s", tags=['Presenter', 'Livestream', 'Vertical'], ind="retail"),
    V("kh_recreate_01", "performance", f"{CUR}/kh_recreate_01.mp4",
      "Recreate · camera move, new packaging", "复刻 · 运镜不变，换包装",
      "Every pack in the source video is detected and replaced with a new design — foreground, midground and background, across angles, motion and occlusion.",
      "源片里每一个包装袋都被检测并替换成新设计——前中后景、不同角度、运动与遮挡全覆盖。",
      "16:9", "15s", tags=['Recreation', 'V2V', 'Packaging'], ind="pet"),
    V("kh_recreate_02", "performance", f"{CUR}/kh_recreate_02.mp4",
      "Recreate · camera move, second pass", "复刻 · 运镜不变，第二版",
      "The same recreation on a different source: position, scale, perspective, light direction and occlusion order all preserved.",
      "同一套复刻换一条源片：位置、大小、透视、光向与遮挡关系全部保留。",
      "16:9", "15s", tags=['Recreation', 'V2V'], ind="pet"),
    V("kh_recreate_03", "performance", f"{CUR}/kh_recreate_03.mp4",
      "Recreate · motion effect", "复刻 · 运动特效",
      "The winning structure of a top-performing video, rebuilt around a different product.",
      "把跑赢的那条视频的结构原样搬过来，换成另一个商品。",
      "9:16", "11s", tags=['Recreation', 'Effect', 'Vertical'], ind="beauty"),
    V("kh_recreate_04", "performance", f"{CUR}/kh_recreate_04.mp4",
      "Recreate · motion effect, second pass", "复刻 · 运动特效，第二版",
      "Same approach, different category — the effect is the asset, the product is the variable.",
      "同一打法换品类——特效是资产，商品是变量。",
      "4:3", "8s", tags=['Recreation', 'Effect'], ind="fnb"),
    V("kh_showcase_02", "performance", f"{CUR}/kh_showcase_02.mp4",
      "Showcase · camera", "商品展示 · 相机",
      "E-commerce hero video: pure background, controlled rotation, every control and marking legible.",
      "电商主图视频：纯色背景、可控旋转，每个按键与刻印都清晰可读。",
      "16:9", "11s", tags=['Showcase', 'Product', 'E-commerce'], ind="tech"),
    V("kh_showcase_03", "performance", f"{CUR}/kh_showcase_03.mp4",
      "Showcase · camping tent", "商品展示 · 露营帐篷",
      "Outdoor gear in context: the pitch, the fabric, the interior volume — the three things buyers scroll for.",
      "户外装备的场景化展示：搭建、面料、内部空间——买家就看这三样。",
      "16:9", "12s", tags=['Showcase', 'Outdoor'], ind="retail"),
    V("kh_trend_01", "performance", f"{CUR}/kh_trend_01.mp4",
      "Trend · citywalk", "趋势 · Citywalk",
      "Influencer-style everyday-carry content built around a sunscreen spray, shot as a walk-and-talk.",
      "达人风格的随身好物内容，围绕防晒喷雾，边走边说。",
      "9:16", "15s", tags=['Trend', 'Creator', 'Vertical'], ind="beauty"),
    V("kh_trend_02", "performance", f"{CUR}/kh_trend_02.mp4",
      "Trend · seasonal moment", "趋势 · 节点内容",
      "A calendar moment turned into a shoppable spot — the cheapest reliable spike in the year.",
      "把一个日历节点做成可转化的短片——一年里最便宜也最稳的一次流量高峰。",
      "9:16", "11s", tags=['Trend', 'Seasonal', 'Vertical'], ind="retail"),
    V("kh_tvc_01", "branding", f"{CUR}/kh_tvc_01.mp4",
      "TVC · vehicle showcase", "TVC · 汽车",
      "Dark opening, coastal and mountain road, then a pure white studio. The palette moves from cool low-key to daylight to cool white in one continuous piece.",
      "暗场开场 → 海岸与山路 → 纯白棚。色调从冷调低照度走到自然日光，再到冷白，一条片子里走完。",
      "1:1", "15s", tags=['TVC', 'Automotive', 'Multi-shot'], ind="auto"),
    V("kh_tvc_02", "branding", f"{CUR}/kh_tvc_02.mp4",
      "TVC · brand film", "TVC · 品牌片",
      "A full brand film beat structure: statement, world, product, sign-off.",
      "完整的品牌片节拍：主张、世界、商品、落款。",
      "16:9", "15s", tags=['TVC', 'Brand film'], ind="tech"),
    V("kh_tvc_03", "branding", f"{CUR}/kh_tvc_03.mp4",
      "TVC · stream-of-consciousness perfume film", "TVC · 意识流香水片",
      "Fragrance has nothing to show, so the film has to carry it — association, texture and light standing in for the product.",
      "香水没有可展示的实体，只能靠片子撑——用联想、质感和光替商品说话。",
      "16:9", "15s", tags=['TVC', 'Fragrance', 'Mood'], ind="beauty"),
    V("kh_tvc_04", "branding", f"{CUR}/kh_tvc_04.mp4",
      "TVC · hiking shoes", "TVC · 户外徒步鞋",
      "Outdoor sports film: terrain, effort, product detail at the moment it matters.",
      "户外运动片：地形、体感，以及商品细节该出现的那一刻。",
      "16:9", "11s", tags=['TVC', 'Outdoor', 'Footwear'], ind="fashion"),

    # ─────────────────── Social / UI-native ads ───────────────────
    V("chat_glowy", "social", f"{SBF}/en_chat_reveal_glowy.mp4",
      "Chat reveal — GLOWY serum", "聊天记录式 — GLOWY 精华",
      "Messaging-thread hook: bubbles pop in on the beat, then cut to live-action product and end card.",
      "聊天气泡式开场：气泡逐条卡点弹出，切实拍产品，落尾板。",
      "9:16", "15s", tags=["Chat UI", "Skincare", "Hook"]),
    V("comments_velva", "social", f"{SBF}/en_comments_lipstick_velva.mp4",
      "Comment-section ad — VELVA lipstick", "评论区式 — VELVA 唇釉",
      "Social comment stack scrolls as social proof, then swatch macro and shade line-up.",
      "社交评论流滚动作为口碑背书，转唇釉微距与色号排列。",
      "9:16", "15s", tags=["Comments UI", "Beauty", "Social proof"]),
    V("notes_nesta", "social", f"{SBF}/en_notes_checklist_nesta_v2.mp4",
      "Notes checklist — NESTA", "备忘录清单式 — NESTA",
      "A phone notes app ticks items off one by one; each tick cuts to the matching product shot.",
      "手机备忘录逐条打勾，每一勾切到对应的产品镜头。",
      "9:16", "15s", tags=["Notes UI", "Home", "Checklist"]),
    V("airdrop_dawn", "social", f"{SBF}/en_airdrop_popup_dawn_v3.mp4",
      "AirDrop popup — DAWN", "隔空投送弹窗式 — DAWN",
      "System-sheet pattern: a share sheet slides up, accepting reveals the campaign film.",
      "系统弹窗玩法：分享面板上滑，点击接收后展开正片。",
      "9:16", "15s", tags=["System UI", "Native feel"]),
    V("ai_chat_sunveil", "social", f"{SBF}/en_ai_chat_sunveil.mp4",
      "AI assistant thread — SUNVEIL", "AI 助手对话式 — SUNVEIL",
      "An AI-assistant conversation writes the brief, then the product answer renders in-frame.",
      "AI 助手对话现场写 brief，产品答案在画面内生成。",
      "9:16", "15s", tags=["AI chat UI", "SPF"]),
    V("chat_glowy_zh", "social", f"{SBF}/chat_reveal_glowy.mp4",
      "Chat reveal — Chinese cut", "聊天记录式 — 中文版",
      "Same storyboard, localized UI copy and typography. One prompt, market-specific renders.",
      "同一分镜，UI 文案与字体本地化。同一 prompt，按市场出不同版本。",
      "9:16", "15s", tags=["Localization", "ZH"], badge="Localized"),
    V("social_ugc", "social", f"{PBF}/social_ugc.mp4",
      "UGC testimonial", "UGC 口碑",
      "Handheld selfie-grade authenticity with sync VO — the highest-volume performance format.",
      "手持自拍质感 + 同步口播，效果广告里量最大的format。",
      "9:16", "15s", tags=["UGC", "Performance"]),
    V("social_trend", "social", f"{PBF}/social_trend.mp4",
      "Trend-jacking short", "热点借势短视频",
      "Trend format cloned to a brand SKU — the fastest route from insight to live creative.",
      "把热点format套到品牌 SKU 上——从洞察到上线最快的一条路。",
      "9:16", "20s", tags=["Trend", "Shorts"]),
    V("social_hook", "social", f"{PBF}/social_hook.mp4",
      "3-second hook test", "3 秒 hook 测试",
      "Hook-first cut built for the first-3-second retention gate.",
      "为前 3 秒留存卡点设计的 hook-first 剪法。",
      "9:16", "12s", tags=["Hook", "Retention"]),
    V("social_brand", "social", f"{PBF}/social_brand.mp4",
      "Brand short — 30s", "品牌短片 — 30s",
      "Brand-grade storytelling at social length and social aspect ratio.",
      "品牌级叙事，按社交时长与竖版比例交付。",
      "9:16", "30s", tags=["Brand", "Shorts"]),

    # ───────────────────── Commerce & product ─────────────────────
    V("looma_rug", "commerce", f"{SBF}/looma_rug_ad_9x16_18s.mp4",
      "LOOMA — rug launch", "LOOMA — 地毯上新",
      "18-second commerce spot: texture macro, room context, price end card. Product identity holds across all shots.",
      "18 秒电商片：材质微距 → 空间场景 → 价格尾板。全片商品身份保持一致。",
      "9:16", "18s", tags=["Home", "Texture", "End card"], feature=True),
    V("oakline", "commerce", f"{SBF}/oakline_furniture_9x16.mp4",
      "OAKLINE — furniture", "OAKLINE — 家具",
      "Wood grain, joinery and daylight travel — the shots a furniture shoot normally needs a studio day for.",
      "木纹、榫卯与日光位移——通常要一天棚拍才拿得到的镜头。",
      "9:16", "15s", tags=["Furniture", "Daylight"]),
    V("halo", "commerce", f"{SBF}/halo_lighting_9x16.mp4",
      "HALO — lighting", "HALO — 灯具",
      "Emissive product: bloom, falloff and colour temperature shift handled in-model.",
      "自发光商品：光晕、衰减与色温变化由模型内部完成。",
      "9:16", "15s", tags=["Lighting", "Emissive"]),
    V("nimbus", "commerce", f"{SBF}/nimbus_bedding_9x16.mp4",
      "NIMBUS — bedding", "NIMBUS — 床品",
      "Soft-goods drape and weave detail with a slow morning-light pass.",
      "软体织物的垂坠与织纹细节，配缓慢晨光位移。",
      "9:16", "15s", tags=["Soft goods", "Drape"]),
    V("emberware", "commerce", f"{SBF}/emberware_kitchen_3x4.mp4",
      "EMBERWARE — cookware", "EMBERWARE — 厨具",
      "Food-safe heat, steam and enamel highlight — 3:4 for feed placements.",
      "热气、蒸汽与搪瓷高光——3:4 适配信息流版位。",
      "3:4", "15s", tags=["Cookware", "Food"]),
    V("calla", "commerce", f"{SBF}/calla_wallart_1x1.mp4",
      "CALLA — wall art", "CALLA — 装饰画",
      "1:1 square cut for marketplace and carousel placements.",
      "1:1 方版，适配电商与轮播版位。",
      "1:1", "15s", tags=["Square", "Marketplace"]),
    V("shop_sku7", "commerce", f"{PBF}/shop_sku7.mp4",
      "7-SKU sequence in one pass", "一条片跑完 7 个 SKU",
      "Seven products, one continuous spot — catalogue coverage without seven shoots.",
      "七个商品一条连续广告——不用拍七次也能覆盖全目录。",
      "9:16", "24s", tags=["Catalogue", "Multi-SKU"], badge="7 SKU"),
    V("shop_lifestyle", "commerce", f"{PBF}/shop_lifestyle.mp4",
      "Lifestyle shoppable", "生活方式带货",
      "In-context lifestyle staging built for shoppable feeds.",
      "生活场景化陈列，为可购物信息流设计。",
      "9:16", "20s", tags=["Shoppable", "Lifestyle"]),
    V("shop_macro", "commerce", f"{PBF}/shop_macro.mp4",
      "Macro detail loop", "微距细节循环",
      "Macro craft detail — the shot that carries premium positioning.",
      "微距工艺细节——撑起高端定位的那一个镜头。",
      "9:16", "12s", tags=["Macro", "Premium"]),
    V("shop_painpoint", "commerce", f"{PBF}/shop_painpoint.mp4",
      "Problem → solution", "痛点 → 解决",
      "The highest-converting performance structure, generated end to end.",
      "转化最稳的效果结构，端到端生成。",
      "9:16", "12s", tags=["DR structure", "Conversion"]),
    V("shop_democard", "commerce", f"{PBF}/shop_democard.mp4",
      "Demo + offer card", "演示 + 优惠卡",
      "Product demo closing on a rendered offer card with legible pricing.",
      "产品演示收在渲染出的优惠卡，价格清晰可读。",
      "9:16", "12s", tags=["Offer", "Text render"]),
    V("shop_world", "commerce", f"{PBF}/shop_world.mp4",
      "World-building spot", "世界观建构",
      "Brand-world staging for products that sell on atmosphere.",
      "为靠氛围转化的商品做世界观陈列。",
      "9:16", "20s", tags=["Atmosphere", "Brand world"]),

    # ───────────────────── Placement playbook ─────────────────────
    V("bumper_cta", "playbook", f"{PBF}/bumper_cta.mp4",
      "Bumper · CTA-led", "6 秒贴片 · CTA 主导",
      "Non-skippable 6-second unit built around a single call to action.",
      "不可跳过 6 秒版位，围绕单一 CTA 构建。",
      "9:16", "5s", tags=["Bumper", "CTA"]),
    V("bumper_flash", "playbook", f"{PBF}/bumper_flash.mp4",
      "Bumper · flash sale", "6 秒贴片 · 限时促销",
      "Promo-pressure bumper: offer, deadline, brand — in five seconds.",
      "促销压迫感贴片：优惠、截止、品牌，五秒说完。",
      "9:16", "5s", tags=["Bumper", "Promo"]),
    V("bumper_hammer", "playbook", f"{PBF}/bumper_hammer.mp4",
      "Bumper · hammer (16:9)", "6 秒贴片 · 强记忆点（16:9）",
      "Single-idea repetition unit for frequency buys.",
      "单点重复型贴片，适配高频次投放。",
      "16:9", "6s", tags=["Bumper", "Frequency"]),
    V("bumper_launch", "playbook", f"{PBF}/bumper_launch.mp4",
      "Bumper · launch", "6 秒贴片 · 新品",
      "Launch reveal cut down to bumper length without losing the beat.",
      "新品揭幕压缩到贴片时长，节奏不散。",
      "9:16", "12s", tags=["Bumper", "Launch"]),
    V("bumper_promo", "playbook", f"{PBF}/bumper_promo.mp4",
      "Bumper · promo", "6 秒贴片 · 活动",
      "Seasonal promo variant from the same master.",
      "同一母版衍生的节点活动版本。",
      "9:16", "12s", tags=["Bumper", "Seasonal"]),
    V("bumper_sound", "playbook", f"{PBF}/bumper_sound.mp4",
      "Bumper · sound-on", "6 秒贴片 · 声音优先",
      "Sound-first bumper — audio mnemonic generated with the picture.",
      "声音优先贴片——听觉记忆点与画面同生成。",
      "9:16", "12s", tags=["Bumper", "Audio"]),
    V("instream_hook5s", "playbook", f"{PBF}/instream_hook5s.mp4",
      "In-stream · 5s hook", "In-stream · 5 秒 hook",
      "Skippable in-stream built to survive the 5-second skip gate.",
      "可跳过 in-stream，专为熬过 5 秒跳过点设计。",
      "16:9", "20s", tags=["In-stream", "Skip gate"]),
    V("instream_demo", "playbook", f"{PBF}/instream_demo.mp4",
      "In-stream · product demo", "In-stream · 产品演示",
      "Feature walkthrough in a 15-second skippable slot.",
      "15 秒可跳过版位里的功能演示。",
      "16:9", "15s", tags=["In-stream", "Demo"]),
    V("instream_promo", "playbook", f"{PBF}/instream_promo.mp4",
      "In-stream · promo", "In-stream · 促销",
      "Offer-led in-stream with rendered price and terms.",
      "以优惠为主线的 in-stream，价格与条款渲染清晰。",
      "16:9", "15s", tags=["In-stream", "Offer"]),
    V("native_howto", "playbook", f"{PBF}/native_howto.mp4",
      "Native · how-to (30s)", "原生 · 教程（30s）",
      "Editorial how-to that reads as content, not as an ad.",
      "看起来像内容而不是广告的教程式原生片。",
      "16:9", "30s", tags=["Native", "How-to"]),
    V("native_review", "playbook", f"{PBF}/native_review.mp4",
      "Native · review", "原生 · 评测",
      "Review-style native placement with talking-head pacing.",
      "评测风格原生版位，按口播节奏剪。",
      "16:9", "25s", tags=["Native", "Review"]),
    V("answer_search", "playbook", f"{PBF}/answer_search_neck.mp4",
      "Answer / search placement", "搜索答案版位",
      "Query-intent answer unit for search and AI-answer surfaces.",
      "面向搜索与 AI 答案场景的意图应答单元。",
      "9:16", "15s", tags=["Search", "Answer"], badge="New surface"),
    V("ctv_infillion", "playbook", f"{PDI}/14_video_ctv_16x9.mp4",
      "CTV · big-screen cut", "CTV · 大屏版",
      "Connected-TV cut from the same campaign master as the mobile vertical.",
      "与竖版同母版的 CTV 大屏版本。",
      "16:9", "6s", tags=["CTV", "Cross-screen"]),
    V("mobile_infillion", "playbook", f"{PDI}/15_video_mobile_9x16.mp4",
      "Mobile · vertical cut", "移动 · 竖版",
      "Same brief, mobile-first framing — consistency across screens is the point.",
      "同一 brief 的移动优先构图——重点是跨屏一致。",
      "9:16", "6s", tags=["Mobile", "Cross-screen"]),
    V("pin_video", "playbook", f"{PD}/06_video_pin_japandi.mp4",
      "Pin video · Japandi", "Pin 视频 · 日式北欧",
      "Discovery-feed video pin generated from a single white-background product shot.",
      "由一张白底商品图生成的发现流视频 Pin。",
      "3:4", "6s", tags=["Discovery", "Pin"]),
    V("shoppable_video", "playbook", f"{PD}/47_shoppable_video.mp4",
      "Shoppable video", "可购物视频",
      "Look-based shoppable unit with multiple tagged SKUs in one scene.",
      "以整套 look 为单位的可购物版位，一个场景挂多个 SKU。",
      "3:4", "6s", tags=["Shoppable", "Multi-SKU"]),
    V("ugc_video_pin", "playbook", f"{PD}/52_ugc_video.mp4",
      "UGC-style pin video", "UGC 风格视频 Pin",
      "Creator-grade UGC look produced without a creator shoot.",
      "不用真人拍摄也能做出的达人级 UGC 观感。",
      "3:4", "6s", tags=["UGC", "Discovery"]),

    # ───────────── Reference control & precision editing ─────────────
    V("t04_car", "control", f"{MR}/T04__seedance-2.5.mp4",
      "5 references · automotive three-view", "5 参考 · 汽车三视图",
      "Front, side and rear reference plus a palette board and a location plate. Angle changes, the car does not — LED signature, wheels and tail bar stay identical across shots. 21:9 straight out.",
      "前/侧/尾三张参考 + 色板 + 场景板。换角度不换车：LED 灯签名、轮毂、贯穿尾灯三镜一致，21:9 直出。",
      "21:9", "14s", tags=["5 refs", "Identity lock", "21:9"],
      refs=[f"{REFS}/t04_car_front.png", f"{REFS}/t04_car_side.png", f"{REFS}/t04_car_rear.png",
            f"{REFS}/t04_palette.png", f"{REFS}/t04_road.png"], badge="PASS", feature=True),
    V("t07_ui", "control", f"{MR}/T07__seedance-2.5.mp4",
      "4 references · app UI, pixel-faithful", "4 参考 · App UI 逐像素保真",
      "Three UI frames plus a scene plate. Logo, nav, chart page and every label reproduce exactly — the model reproduces the reference rather than re-inventing it. Ready for app-install campaigns.",
      "三张 UI 帧 + 一张场景板。Logo、导航、图表页与所有文案逐像素复现——是真参考复现而非语义重构。App install 投放可直接用。",
      "9:16", "10s", tags=["4 refs", "UI fidelity", "Text render"],
      refs=[f"{REFS}/t07_ui_a.png", f"{REFS}/t07_ui_b.png", f"{REFS}/t07_ui_c.png", f"{REFS}/t07_scene.png"],
      badge="PASS", feature=True),
    V("t06_cpg", "control", f"{MR}/T06__seedance-2.5.mp4",
      "3 references · CGI beverage + end card", "3 参考 · 快消 CGI + 尾板",
      "Pulp macro, can and end-card references. Label survives the juice-cloud pass and the end card renders word-perfect: brand, line and price.",
      "果肉微距、罐体与尾板三张参考。罐体穿越果汁云时标签不形变，尾板逐字正确：品牌、slogan、价格。",
      "16:9", "12s", tags=["3 refs", "CGI", "End card"],
      refs=[f"{REFS}/t06_pulp.png", f"{REFS}/t06_can.png", f"{REFS}/t06_endcard.png"], badge="PASS"),
    V("t03_smb", "control", f"{MR}/T03__seedance-2.5.mp4",
      "2 references · local business", "2 参考 · 本地商家",
      "Storefront sign and a dish plate. Signage spelling is frame-accurate including accents — first generation usable, which is what makes SMB volume viable.",
      "店招 + 餐品两张参考。店招拼写逐帧正确（含重音符），一次生成即可用——SMB 规模化成立的前提。",
      "16:9", "8s", tags=["2 refs", "Signage text", "SMB"],
      refs=[f"{REFS}/t03_storefront.png", f"{REFS}/t03_food.png"], badge="PASS"),
    V("t08_src", "control", f"{MR}/T08_SRC__seedance-2.5.mp4",
      "Precision edit · source clip", "精准编辑 · 源片",
      "Step one: an 8-second generated source — a hand lifting a blue can out of an ice bucket.",
      "第一步：8 秒生成源片——手从冰桶里拿起蓝色罐体。",
      "16:9", "8s", tags=["Edit pair", "Before"], badge="BEFORE"),
    V("t08_edit", "control", f"{MR}/T08_EDIT__seedance-2.5.mp4",
      "Precision edit · one object swapped", "精准编辑 · 只换一个物体",
      "Step two: the can turns red, label orientation tracks the hand, and hand, ice, droplets, bucket, background and camera are untouched. Whole-frame SSIM 0.935.",
      "第二步：罐体变红、标签随手部运动保持正确取向，而手、冰、水珠、桶、背景与机位全部保留。全帧 SSIM 0.935。",
      "16:9", "8s", tags=["Edit pair", "After", "SSIM 0.935"],
      refs=[f"{REFS}/t08_red_can.png"], badge="AFTER", feature=True),
    V("t02_sneaker", "control", f"{MR}/T02__seedance-2.5.mp4",
      "2 references · sneaker hero", "2 参考 · 球鞋英雄片",
      "Assembly narrative, 360° turntable and bleach-bypass grade all land. Honest note: on non-standard industrial silhouettes the model still redraws structure unless every design element is named in the prompt.",
      "组装叙事、360° 转台、bleach-bypass 质感全部到位。诚实标注：非标工业设计外形仍会被重绘，必须在 prompt 里逐要素文字锁定。",
      "9:16", "10s", tags=["2 refs", "Known limit"],
      refs=[f"{REFS}/t02_scene.png"], badge="PARTIAL"),
    V("t16_vo", "control", f"{MR}/T16__seedance-2.5.mp4",
      "Native audio · English voice-over", "原生音频 · 英文口播",
      "Ad copy delivered word-perfect by a generated voice-over, landing in sync with the end-card cut. No face, no talent clearance.",
      "生成式口播逐字念对广告词，且与尾板切点同步。不需要人脸，不涉及肖像合规。",
      "16:9", "12s", tags=["VO", "Ad copy", "No talent"], badge="PASS"),
    V("t17_ptbr", "control", f"{MR}/T17__seedance-2.5.mp4",
      "Native audio · Portuguese narration", "原生音频 · 葡语旁白",
      "The same spot narrated in Portuguese — word order, phrasing and duration all correct. Localization without a second recording session.",
      "同一条片的葡语旁白——词序、断句、时长全部正确。本地化不需要二次录音。",
      "9:16", "9s", tags=["Multilingual", "VO"], badge="PASS"),
    V("t18_music", "control", f"{MR}/T18__seedance-2.5.mp4",
      "Native audio · score cut to picture", "原生音频 · 配乐对拍",
      "Model-generated score with hard cuts landing on downbeats at 4.00s and 7.96s, and a real ending cadence rather than a hard stop.",
      "模型生成配乐，硬切落在 4.00s / 7.96s 的重拍上，结尾是真正的收束而非戛然而止。",
      "1:1", "12s", tags=["Native score", "Beat sync"], badge="PASS"),
    V("t14_timecode", "control", f"{MR}/T14__seedance-2.5.mp4",
      "Known limit · hard timecode sync", "已知短板 · 硬时间码卡点",
      "14 reference frames reproduce faithfully and the cut count is right, but cut timing drifts up to +0.88s across the clip. We do not promise frame-exact music sync — post handles it.",
      "14 张参考帧逐帧忠实、切次数正确，但切点随片程后漂最多 +0.88s。我们不承诺帧级音乐卡点——这一段交给后期。",
      "16:9", "15s", tags=["Honest limit", "Timecode"], badge="LIMIT"),
    V("clock_s1", "control", "ads_customer_research/eval_set/runs/20260807_clock_timer/S1_kitchen_countdown.mp4",
      "Stress test · on-screen countdown", "压测 · 画面内倒计时",
      "Legible, monotonic numerals rendered inside the scene — a classic failure mode for video models.",
      "场景内可读且单调递减的数字——视频模型的经典翻车点。",
      "16:9", "8s", tags=["Numerals", "Stress test"]),
    V("clock_s3", "control", "ads_customer_research/eval_set/runs/20260807_clock_timer/S3_desk_pomodoro.mp4",
      "Stress test · timer in context", "压测 · 场景内计时器",
      "Same test in a desk scene with reflections and depth of field.",
      "同一测试放到有反光与景深的桌面场景。",
      "16:9", "8s", tags=["Numerals", "Stress test"]),

    # ───────────────────── Generation comparison ─────────────────────
    V("cmp_10_endcard", "compare", f"{B1}/9.1_endcard_text__seedance-1.0-pro.mp4",
      "End-card text · 1.0 Pro", "尾板文字 · 1.0 Pro",
      "Brand mark holds, but the tagline and price line break down into unreadable characters.",
      "品牌字还在，但 slogan 与价格行糊成乱码。",
      "16:9", "4s", model="Seedance 1.0 Pro", tags=["Same prompt", "Gen 1"], badge="FAIL", poster_at=0.9),
    V("cmp_20_endcard", "compare", f"{B1}/9.1_endcard_text__seedance-2.0.mp4",
      "End-card text · 2.0", "尾板文字 · 2.0",
      "All three text lines render correctly — a clean commercial end card.",
      "三行文字全部正确——干净的商业尾板。",
      "16:9", "4s", model="Seedance 2.0", tags=["Same prompt", "Gen 2"], badge="PASS", poster_at=0.9),
    V("cmp_25_endcard", "compare", f"{B1}/9.1_endcard_text__seedance-2.5.mp4",
      "End-card text · 2.5", "尾板文字 · 2.5",
      "Correct text plus 3D gloss lettering and studio lighting — advertising grade, not just legible.",
      "文字正确之外还有 3D 光泽字与影棚光——不只是可读，是广告级。",
      "16:9", "4s", model="Seedance 2.5", tags=["Same prompt", "Gen 2.5"], badge="BEST", poster_at=0.9),
    V("cmp_10_pan", "compare", f"{B1}/1.2_fast_pan_frame_drop__seedance-1.0-pro.mp4",
      "Fast pan · 1.0 Pro", "快速横摇 · 1.0 Pro",
      "Motion is clean and drop-free — frame stability is not the differentiator any more.",
      "运动干净无跳帧——帧稳定已经不是差异点了。",
      "16:9", "5s", model="Seedance 1.0 Pro", tags=["Same prompt", "Motion"]),
    V("cmp_20_pan", "compare", f"{B1}/1.2_fast_pan_frame_drop__seedance-2.0.mp4",
      "Fast pan · 2.0", "快速横摇 · 2.0",
      "Also clean; grading and light are richer than the previous generation.",
      "同样干净，调色与光线比上一代更厚。",
      "16:9", "5s", model="Seedance 2.0", tags=["Same prompt", "Motion"]),
    V("cmp_25_pan", "compare", f"{B1}/1.2_fast_pan_frame_drop__seedance-2.5.mp4",
      "Fast pan · 2.5", "快速横摇 · 2.5",
      "Adds a dusk-to-streetlight light progression through the pan, and ships with a native audio track.",
      "在横摇中叠加黄昏到华灯初上的光线演进，并且自带原生音轨。",
      "16:9", "5s", model="Seedance 2.5", tags=["Same prompt", "Motion", "Native audio"], badge="BEST"),

    # ───────────────────── Static & display ─────────────────────
    I("st_hero", "static", "static-ads-seedream/10_lifestyle_hero.png",
      "Lifestyle hero", "生活方式主视觉",
      "Master key visual generated from a single product input.", "由单张商品输入生成的主 KV。", "1:1"),
    I("st_headline", "static", "static-ads-seedream/01_headline_statement.png",
      "Headline statement", "大标题式",
      "Statement layout for cold-audience awareness.", "面向冷启认知的大字报版式。", "1:1"),
    I("st_vs", "static", "static-ads-seedream/02_us_vs_them.png",
      "Us vs them", "对比式",
      "Comparison layout, the workhorse of performance display.", "对比版式，效果展示广告的主力。", "1:1"),
    I("st_stat", "static", "static-ads-seedream/03_stat_callout.png",
      "Stat callout", "数据卡点",
      "Single-number proof point.", "单一数字证据点。", "1:1"),
    I("st_review", "static", "static-ads-seedream/04_review_card.png",
      "Review card", "评论卡",
      "Social proof rendered as a native review card.", "以原生评论卡形态呈现的口碑证据。", "1:1"),
    I("st_testimonial", "static", "static-ads-seedream/05_testimonial_stack.png",
      "Testimonial stack", "口碑叠层",
      "Stacked quotes for consideration-stage retargeting.", "叠层引用，用于考虑期再营销。", "1:1"),
    I("st_ba", "static", "static-ads-seedream/06_before_after.png",
      "Before / after", "使用前后",
      "Before-and-after split, category-agnostic.", "前后对比分屏，跨品类通用。", "1:1"),
    I("st_ps", "static", "static-ads-seedream/07_problem_solution.png",
      "Problem / solution", "痛点 / 解决",
      "Two-panel DR structure.", "两格式效果结构。", "1:1"),
    I("st_feature", "static", "static-ads-seedream/08_feature_spotlight.png",
      "Feature spotlight", "功能聚焦",
      "Feature callouts anchored to the product.", "功能标注锚定在商品上。", "1:1"),
    I("st_list", "static", "static-ads-seedream/09_numbered_list.png",
      "Numbered list", "编号清单",
      "Listicle layout — high CTR on discovery surfaces.", "清单式版式——在发现流点击率高。", "1:1"),
    I("dk_col_lb", "static", "display_ad_kit_v2/ads/colourfield_728x90.png",
      "Leaderboard 728×90", "横幅 728×90",
      "One master, resized and re-composed per IAB slot.", "同一母版按 IAB 版位重排重构。", "wide", model="Seedream + DCO"),
    I("dk_col_mr", "static", "display_ad_kit_v2/ads/colourfield_300x250.png",
      "Medium rectangle 300×250", "中矩形 300×250",
      "Same campaign, different aspect — text re-flowed, not squashed.", "同一 campaign 不同比例——文字重排而非拉伸。", "4:3", model="Seedream + DCO"),
    I("dk_col_hp", "static", "display_ad_kit_v2/ads/colourfield_300x600.png",
      "Half page 300×600", "半页 300×600",
      "Vertical slot from the same master.", "同一母版的竖版位。", "1:2", model="Seedream + DCO"),
    I("dk_col_social", "static", "display_ad_kit_v2/ads/colourfield_1200x628.png",
      "Social landscape 1200×628", "社交横版 1200×628",
      "Paid-social variant of the same visual system.", "同一视觉系统的付费社交版本。", "wide", model="Seedream + DCO"),
    I("dk_perf_mr", "static", "display_ad_kit_v2/ads/performance_300x250.png",
      "Performance colourway", "效果向配色",
      "Offer-led colourway of the same layout family.", "同一版式家族的促销向配色。", "4:3", model="Seedream + DCO"),
    I("dk_apo_mr", "static", "display_ad_kit_v2/ads/apothecary_300x250.png",
      "Apothecary colourway", "药妆向配色",
      "Third brand world, identical production cost.", "第三套品牌世界，制作成本相同。", "4:3", model="Seedream + DCO"),
    I("bc_aura", "static", "byte_campaign/ads/byte_aura.png",
      "Campaign concept · Aura", "campaign 概念 · Aura",
      "Concept route from a six-way visual exploration.", "六路视觉探索中的一条概念线。", "1:1"),
    I("bc_bloom", "static", "byte_campaign/ads/byte_bloom.png",
      "Campaign concept · Bloom", "campaign 概念 · Bloom",
      "Alternate route, same brief and same day.", "同一 brief、同一天的另一条线。", "1:1"),
    I("bc_frame", "static", "byte_campaign/ads/byte_frame.png",
      "Campaign concept · Frame", "campaign 概念 · Frame",
      "Typographic route for the same campaign.", "同一 campaign 的字体主导路线。", "1:1"),
    I("gs_bold", "static", "goose_style_display_ads_v5/01_bold_energy.png",
      "Style study · bold energy", "风格研究 · 强能量",
      "Style transfer across a fixed message.", "固定信息下的风格迁移。", "1:1"),
    I("gs_pastel", "static", "goose_style_display_ads_v5/02_pastel_wellness.png",
      "Style study · pastel wellness", "风格研究 · 柔和健康",
      "Same message, wellness visual register.", "同一信息，健康向视觉语域。", "1:1"),
    I("gs_dark", "static", "goose_style_display_ads_v5/04_dark_tech.png",
      "Style study · dark tech", "风格研究 · 暗黑科技",
      "Same message, tech visual register.", "同一信息，科技向视觉语域。", "1:1"),
    I("hp_japandi", "static", f"{PDH}/01_japandi_lamp_2x3.png",
      "Discovery pin · Japandi", "发现流 Pin · 日式北欧",
      "White-background SKU staged into a styled interior.", "白底 SKU 放进成套室内风格场景。", "2:3"),
    I("hp_organic", "static", f"{PDH}/02_organic_modern_chair_2x3.png",
      "Discovery pin · organic modern", "发现流 Pin · 有机现代",
      "Same SKU pipeline, different style vertical.", "同一 SKU 链路，不同风格垂类。", "2:3"),
    I("hp_coastal", "static", f"{PDH}/06_coastal_linen_bed_2x3.png",
      "Discovery pin · coastal", "发现流 Pin · 海岸",
      "Ten style worlds available from one product photo.", "一张商品图可出十种风格世界。", "2:3"),
    I("hp_before_after", "static", f"{PDH}/09_entryway_before_after_2x3.png",
      "Discovery pin · before / after", "发现流 Pin · 前后对比",
      "Editorial before/after treatment.", "编辑式前后对比处理。", "2:3"),
    I("inf_three", "static", f"{PDI}/16_three_screen_consistency.png",
      "Three-screen consistency", "三屏一致性",
      "CTV, desktop and mobile cuts held to one visual system.", "CTV、桌面、移动三版守同一视觉体系。", "wide"),
    I("inf_seg_family", "static", f"{PDI}/17_seg_family_16x9.png",
      "Audience variant · family", "人群版本 · 家庭",
      "Same master re-cast for a family segment.", "同一母版按家庭人群改写。", "16:9"),
    I("inf_seg_active", "static", f"{PDI}/18_seg_active_16x9.png",
      "Audience variant · active", "人群版本 · 运动",
      "Same master, active segment.", "同一母版，运动人群。", "16:9"),
    I("pd_matrix", "static", f"{PD}/39_variant_matrix_sheet.jpg",
      "Variant matrix", "变体矩阵",
      "One product × four seasonal worlds × three colourways, produced in one run.", "一个商品 × 四个季节世界 × 三种配色，一轮跑完。", "wide", badge="Scale"),
    I("pd_lamp_matrix", "static", f"{PD}/65_lamp_variant_matrix.jpg",
      "Style matrix", "风格矩阵",
      "The scaling unit is a matrix, not a single asset.", "规模化的单位是矩阵，不是单条素材。", "wide", badge="Scale"),

    # ─────────── Brand films · MAISON VOLTA campaign (1080p masters) ───────────
    V("lumina_30", "brand", "~/sa-wiki/data/goodcases-seedream/lumina_pinterest/lumina_pinterest_16x9_30s.mp4",
      "MAISON VOLTA — 30s campaign film", "MAISON VOLTA — 30 秒 campaign 片",
      "Full 1080p brand film: interior light, hero furniture, product macro and a human close — one campaign world held across every shot.",
      "1080p 完整品牌片：室内光、主推家具、产品微距与人物特写——同一套 campaign 世界观贯穿全片。",
      "16:9", "30s", tags=["1080p", "Brand film", "Campaign"], feature=True, badge="Hero"),
    V("lumina_15", "brand", "~/sa-wiki/data/goodcases-seedream/lumina_pinterest/lumina_pinterest_16x9_15s.mp4",
      "MAISON VOLTA — 15s cutdown", "MAISON VOLTA — 15 秒剪辑版",
      "The 15-second cutdown of the same master — the length most CTV and pre-roll buys actually take.",
      "同一母版的 15 秒版本——CTV 与前贴片实际最常买的时长。",
      "16:9", "15s", tags=["1080p", "Cutdown", "CTV"]),
    V("lumina_native", "brand", "~/sa-wiki/data/goodcases-seedream/lumina_pinterest/lumina_pinterest_16x9_native.mp4",
      "MAISON VOLTA — native 10s", "MAISON VOLTA — 原生 10 秒",
      "\"Imagine your space.\" A ten-second native cut built to sit inside a discovery feed rather than interrupt it.",
      "\"Imagine your space.\" 十秒原生版，设计成融进发现流而不是打断它。",
      "16:9", "10s", tags=["Native", "Discovery"]),
    V("lumina_brandgreen", "brand", "~/sa-wiki/data/goodcases-seedream/lumina_pinterest/lumina_16x9_brandgreen.mp4",
      "MAISON VOLTA — brand-colour frame", "MAISON VOLTA — 品牌色边框版",
      "Same footage re-framed inside the brand's green field — vertical content delivered into a 16:9 slot without cropping the subject.",
      "同一素材放进品牌绿色底框——竖版内容进 16:9 版位，主体不被裁掉。",
      "16:9", "30s", tags=["Reframe", "Brand colour"]),
    V("lumina_brandstage", "brand", "~/sa-wiki/data/goodcases-seedream/lumina_pinterest/lumina_16x9_brandstage.mp4",
      "MAISON VOLTA — brand stage", "MAISON VOLTA — 品牌舞台版",
      "Third delivery of the same master: brand lockup and tagline staged beside the film instead of over it.",
      "同一母版的第三种交付：品牌字标与 slogan 放在画面旁边，而不是压在画面上。",
      "16:9", "30s", tags=["Lockup", "Delivery variant"]),
    V("sofa_demo", "brand", "~/sa-wiki/data/goodcases-seedream/sofa_demo/sofa_ai_result.mp4",
      "Sofa demo — packshot to brand film", "沙发 demo — 从 Packshot 到品牌成片",
      "The full CG + AI pipeline in one spot: delivery, unboxing, sitting and resting. Sofa outline, creases and scale stay stable while the person interacts with it — the case the brand production architecture was built for.",
      "CG + AI 全链路的一条成片：送货、开箱、坐下、休息。人物与商品发生真实交互的同时，沙发轮廓、褶皱与尺度保持稳定——品牌制作架构就是为这个 case 建的。",
      "9:16", "15s", tags=["CG + AI", "Interaction", "1080p"], feature=True, badge="Pipeline"),
]

# Pulled from the library on review — see the note in the README.
#   real third-party trademarks (not cleared for an outward-facing page)
#   text-rendering defects (garbled UI copy) that undercut the text-fidelity claim
#   weak or near-empty frames that do not earn a tile
EXCLUDED = {
    "bumper_launch": "third-party trademark",
    "bumper_promo": "third-party trademark",
    "social_brand": "third-party trademark + weak frame",
    "chat_glowy": "garbled chat-bubble text",
    "comments_velva": "garbled comment text",
    "instream_promo": "garbled list text",
    "ai_chat_sunveil": "near-empty frame",
    "calla": "low-information frame",
    "instream_hook5s": "low-information frame",
    "shop_democard": "weak framing (headless torso)",
    "shop_world": "weak framing",
    "bumper_cta": "generic abstract, no product read",
    "bc_frame": "source asset removed upstream",
}
ITEMS = [i for i in ITEMS if i["id"] not in EXCLUDED]

# ── the live demo library ──────────────────────────────────────────────────
# Everything above stays defined but is NOT published unless its id is listed
# here. The library was deliberately emptied for a re-curation; add ids back as
# assets are approved. KEEP = None publishes everything (the old behaviour).
KEEP = {"bf_auto", "bf_tyre", "bf_burger", "bf_beer", "bf_homecare", "bf_baby",
        "yq_auto", "yq_fizzo", "yq_app", "yq_sneaker", "yq_smb", "yq_swap_src",
        "yq_swap_out", "yq_ptbr", "yq_music", "yq_nido", "yq_hotel", "yq_pet", "yq_aeris",
        "kh_brief_04",
        "kh_brief_07",
        "kh_brief_08",
        "kh_creative_01",
        "kh_creative_02",
        "kh_hook_01",
        "kh_hook_02",
        "kh_hook_03",
        "kh_hook_04",
        "kh_hook_05",
        "kh_hook_06",
        "kh_hook_07",
        "kh_hook_08",
        "kh_ip_01",
        "kh_ip_02",
        "kh_ip_03",
        "kh_koc_01",
        "kh_multiling_01",
        "kh_multiling_02",
        "kh_presenter_01",
        "kh_presenter_02",
        "kh_recreate_01",
        "kh_recreate_02",
        "kh_recreate_03",
        "kh_recreate_04",
        "kh_showcase_02",
        "kh_showcase_03",
        "kh_trend_01",
        "kh_trend_02",
        "kh_tvc_01",
        "kh_tvc_02",
        "kh_tvc_03",
        "kh_tvc_04"}
if KEEP is not None:
    ITEMS = [i for i in ITEMS if i["id"] in KEEP]


# ── real prompts pulled from the generation task files ──────────────────────
PROMPT_FILES = [f"{SBF}/task.json", f"{SBF}/task_30s.json", f"{SBF}/task_rug_ad.json",
                f"{SBF}/tasks_ui_ads_batch.json", f"{SBF}/tasks_ui_ads_en.json",
                f"{SBF}/tasks_apple_redo.json", f"{SBF}/tasks_pinterest_batch.json"]
# item id -> key inside the list files ("*" = the single-prompt dict files, by order)
PROMPT_MAP = {
    "brand_15": f"{SBF}/task.json",
    "brand_30": f"{SBF}/task_30s.json",
    "looma_rug": f"{SBF}/task_rug_ad.json",
    "chat_glowy": "en_chat_reveal_glowy",
    "comments_velva": "en_comments_lipstick_velva",
    "notes_nesta": "en_notes_checklist_nesta_v2",
    "airdrop_dawn": "en_airdrop_popup_dawn",
    "ai_chat_sunveil": "en_ai_chat_sunveil",
    "chat_glowy_zh": "chat_reveal_glowy",
    "nimbus": "nimbus_bedding_9x16",
    "oakline": "oakline_furniture_9x16",
    "halo": "halo_lighting_9x16",
    "emberware": "emberware_kitchen_3x4",
    "calla": "calla_wallart_1x1",
}


def load_prompts():
    by_key = {}
    for rel in PROMPT_FILES:
        p = resolve(rel)
        if not os.path.exists(p):
            continue
        d = json.load(open(p))
        if isinstance(d, dict):
            by_key[rel] = d.get("prompt")
        else:
            for e in d:
                if e.get("key") and e.get("prompt"):
                    by_key[e["key"]] = e["prompt"]
    for it in ITEMS:
        k = PROMPT_MAP.get(it["id"])
        if k and by_key.get(k):
            it["prompt"] = by_key[k]


def out_names(item):
    base = item["id"]
    if item["type"] == "video":
        return f"media/video/{base}.mp4", f"media/poster/{base}.jpg"
    return f"media/img/{base}.jpg", f"media/img/{base}.jpg"


def run(cmd):
    return subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)


def dims(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-select_streams", "v:0",
                        "-show_entries", "stream=width,height", "-of", "csv=p=0", path],
                       capture_output=True)
    try:
        w, h = r.stdout.decode().strip().split(",")[:2]
        return int(w), int(h)
    except Exception:
        return 0, 0


def duration(path):
    r = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                        "-of", "csv=p=0", path], capture_output=True)
    try:
        return float(r.stdout.decode().strip())
    except ValueError:
        return 0.0


def grab(src, t, out):
    return run(["ffmpeg", "-y", "-ss", f"{t:.2f}", "-i", src, "-frames:v", "1",
                "-vf", "scale='min(900,iw)':-2:flags=lanczos", "-q:v", "5", out]).returncode == 0


def brightness(path):
    """Mean luma of a frame, 0-255. Used to reject black/blank poster frames."""
    r = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-vf", "scale=1:1",
                        "-pix_fmt", "gray", "-f", "rawvideo", "-"], capture_output=True)
    return r.stdout[0] if r.stdout else 0


def make_poster(src, item, pout):
    """Pick the most legible frame: an explicit mark if given, else the brightest
    of four samples across the clip (a 1s grab lands on black leaders too often)."""
    d = duration(src) or 5.0
    if item.get("poster_at") is not None:
        pa = item["poster_at"]
        t = d * pa if pa <= 1 else pa
        if grab(src, min(t, max(d - .15, 0)), pout):
            return
    best, best_b = None, -1
    tmp = pout + ".cand.jpg"
    for frac in (0.12, 0.35, 0.55, 0.78):
        t = min(d * frac, max(d - .15, 0))
        if grab(src, t, tmp):
            b = brightness(tmp)
            if b > best_b:
                best_b, best = b, t
    if os.path.exists(tmp):
        os.remove(tmp)
    grab(src, best if best is not None else 0, pout)


def resolve(rel):
    """Assets live either under the working directory or (for shared good-cases)
    in the user's home tree — a leading ~ marks the latter."""
    return os.path.expanduser(rel) if rel.startswith("~") else os.path.join(SRC, rel)


def build_video(item):
    src = resolve(item["src"])
    vrel, prel = out_names(item)
    vout, pout = os.path.join(ROOT, vrel), os.path.join(ROOT, prel)
    if not os.path.exists(src):
        return f"MISSING {item['src']}"
    if FORCE or not os.path.exists(vout):
        r = run(["ffmpeg", "-y", "-i", src,
                 "-vf", "scale='min(1280,iw)':-2:flags=lanczos",
                 "-c:v", "libx264", "-preset", "slow", "-crf", "28", "-pix_fmt", "yuv420p",
                 "-profile:v", "high", "-level", "4.0",
                 "-c:a", "aac", "-b:a", "96k", "-ac", "2",
                 "-movflags", "+faststart", vout])
        if r.returncode != 0:
            return f"FAIL video {item['id']}: {r.stderr.decode()[-200:]}"
    if FORCE or POSTERS or not os.path.exists(pout):
        make_poster(src, item, pout)
    return f"ok {item['id']}"


def build_image(item):
    src = resolve(item["src"])
    rel, _ = out_names(item)
    out = os.path.join(ROOT, rel)
    if not os.path.exists(src):
        return f"MISSING {item['src']}"
    if FORCE or not os.path.exists(out):
        r = run(["ffmpeg", "-y", "-i", src,
                 "-vf", "scale='min(1400,iw)':-2:flags=lanczos", "-q:v", "5", out])
        if r.returncode != 0:
            return f"FAIL image {item['id']}"
    return f"ok {item['id']}"


def build_ref(relpath, idx, item_id):
    src = resolve(relpath)
    name = f"ref_{item_id}_{idx}.jpg"
    out = os.path.join(IMG_OUT, name)
    if os.path.exists(src) and (FORCE or not os.path.exists(out)):
        run(["ffmpeg", "-y", "-i", src, "-vf", "scale='min(700,iw)':-2:flags=lanczos",
             "-q:v", "6", out])
    return f"media/img/{name}"


def main():
    load_prompts()
    jobs = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=os.cpu_count() or 4) as ex:
        for it in ITEMS:
            jobs.append(ex.submit(build_video if it["type"] == "video" else build_image, it))
        for f in concurrent.futures.as_completed(jobs):
            msg = f.result()
            if not msg.startswith("ok"):
                print(msg)

    data = []
    for it in ITEMS:
        rel, prel = out_names(it)
        if not os.path.exists(os.path.join(ROOT, rel)):
            print("SKIP (not built):", it["id"])
            continue
        refs = [build_ref(r, i, it["id"]) for i, r in enumerate(it["refs"])]
        d = dict(it)
        d["file"] = rel
        d["poster"] = prel if it["type"] == "video" else rel
        d["refs"] = refs
        # real thumbnail pixels: lets the masonry reserve space before the
        # poster loads, so lazy-loaded tiles never reflow the column
        d["w"], d["h"] = dims(os.path.join(ROOT, d["poster"]))
        d.pop("src")
        d.pop("poster_at", None)
        data.append(d)

    outjs = os.path.join(ROOT, "assets", "data", "demos.js")
    with open(outjs, "w") as f:
        f.write("// generated by build_assets.py — do not edit by hand\n")
        f.write("window.DEMOS = ")
        json.dump(data, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    vids = sum(1 for d in data if d["type"] == "video")
    size = sum(os.path.getsize(os.path.join(ROOT, d["file"])) for d in data)
    print(f"built {len(data)} items ({vids} video / {len(data)-vids} image), "
          f"{size/1e6:.1f} MB → {outjs}")


if __name__ == "__main__":
    main()
