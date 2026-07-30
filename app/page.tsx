import InlineTextEditor from "./InlineTextEditor";
import ArchitectureImageLightbox from "./ArchitectureImageLightbox";

const B = ({ zh, en }: { zh: React.ReactNode; en: React.ReactNode }) => (
  <>
    <span className="langZh">{zh}</span>
    <span className="langEn">{en}</span>
  </>
);

const playableOutputClips = Array.from({ length: 9 }, (_, index) =>
  `https://carey.tos-ap-southeast-1.bytepluses.com/playables/factory/clips/fish_${String(index + 1).padStart(2, "0")}_thumb.mp4`,
);

const playableDemos = [
  {
    index: "01",
    title: "CakeSort",
    titleZh: "排序堆叠解谜",
    titleEn: "Sorting puzzle",
    src: "https://carey.tos-ap-southeast-1.bytepluses.com/playables/20260522/cake-sort.html",
  },
  {
    index: "02",
    title: "TinyFishing",
    titleZh: "节奏钓鱼",
    titleEn: "Rhythm fishing",
    src: "https://carey.tos-ap-southeast-1.bytepluses.com/playables/20260522/tiny-fishing.html",
  },
];

const sceneLandscapeColumns = [
  {
    key: "brand",
    index: "01",
    eyebrow: "BRAND VIDEO",
    title: "品牌广告",
    titleEn: "Brand video",
    marketValue: "$0.4B",
    marketShare: "40%",
    channels: ["CTV / 流媒体大屏", "YouTube 长视频广告"],
    channelsEn: ["CTV / streaming big screen", "YouTube long-form ads"],
    objective: ["曝光量 · 品牌知名度", "长期品牌心智"],
    objectiveEn: ["Reach · brand awareness", "Long-term brand equity"],
    output: "15 / 30S",
    outputNote: "导演级创意 · 多镜头一致性 · 品牌审片",
    outputNoteEn: "Director-grade craft · multi-shot consistency · brand review",
    buyers: ["WPP · Havas · Publicis · Dentsu · Omnicom", "Brandtech（Pencil）· 博报堂"],
    buyersEn: ["WPP · Havas · Publicis · Dentsu · Omnicom", "Brandtech (Pencil) · Hakuhodo"],
    href: "#scene-brand-demo",
    link: "查看品牌场景样片",
    linkEn: "View brand demo",
  },
  {
    key: "performance",
    index: "02",
    eyebrow: "PERFORMANCE VIDEO",
    title: "效果广告",
    titleEn: "Performance video",
    marketValue: "$0.6B",
    marketShare: "60%",
    channels: ["TikTok / Reels / Shorts", "应用内广告网络"],
    channelsEn: ["TikTok / Reels / Shorts", "In-app ad networks"],
    objective: ["tCPA / tROAS", "CTR / CVR · CPI"],
    objectiveEn: ["tCPA / tROAS", "CTR / CVR · CPI"],
    output: "10–15S",
    outputNote: "竖屏 UGC · 10–100 条变体 · 持续投放实验",
    outputNoteEn: "Vertical UGC · 10–100 variants · continuous testing",
    buyers: ["AppLovin · 钛动", "Pinterest · Reddit · LinkedIn Ads"],
    buyersEn: ["AppLovin · TecDo", "Pinterest · Reddit · LinkedIn Ads"],
    href: "#scene-performance-demo",
    link: "查看效果场景样片",
    linkEn: "View performance demo",
  },
  {
    key: "display",
    index: "03",
    eyebrow: "DISPLAY ADS",
    title: "静态展示图片广告",
    titleEn: "Static display ads",
    marketValue: "$0.4B",
    channels: ["社交信息流静态图", "程序化展示广告"],
    channelsEn: ["Social feed statics", "Programmatic display"],
    objective: ["CPM / CPC", "低成本覆盖 + 直接转化"],
    objectiveEn: ["CPM / CPC", "Low-cost reach + direct conversion"],
    output: "100–1K",
    outputNote: "静态图 / Banner · 多尺寸 · 多语言批量变体",
    outputNoteEn: "Statics / banners · multi-size · multilingual variants",
    buyers: ["AppLovin · Smartly.io · Creatopy", "Criteo · Pinterest · 头部 4A"],
    buyersEn: ["AppLovin · Smartly.io · Creatopy", "Criteo · Pinterest · top 4A agencies"],
    href: "#scene-display-demo",
    link: "查看 Display 场景样片",
    linkEn: "View display demo",
  },
] as const;

const scenarioCases = [
  {
    index: "01",
    label: "BRAND FILM",
    title: "品牌广告",
    titleEn: "Brand ads",
    ratio: "15 / 30S",
    ratioEn: "15 / 30S",
    desc: "以 CTV、流媒体大屏和 YouTube Hero Video 为主。创意与品牌心智优先，制作主体通常是头部代理商，最终成片必须进入专业审片与交付链路。",
    descEn: "Centered on CTV, streaming big screens and YouTube hero videos. Creativity and brand equity come first, production is led by top agencies, and every film passes professional review and delivery.",
    media: {
      type: "video" as const,
      src: "/media/brand-reference.mp4",
      poster: "/media/brand-poster.jpg",
      aria: "Seedance 2.5 生成的 30 秒香水品牌 TVC 样片",
      meta: "Seedance 2.5 全 AI 生成 · 光影定义真实感：人物肤质 / 玻璃金属材质 / 环境光与色温",
      metaEn: "Fully AI-generated with Seedance 2.5 · lighting defines realism: skin / glass & metal / ambient light",
    },
    sampleSpec: "15 / 30 秒标准格式，非常强调品牌规范和导演级创意，每一帧的画质和一致性都有要求。",
    sampleSpecEn: "Standard 15 / 30s formats, held to strict brand codes and director-grade craft — every frame is judged on quality and consistency.",
    channels: [
      { title: "CTV 和流媒体大屏广告", titleEn: "CTV and streaming big screens", copy: "TV 电视台，以及 Roku、Netflix、Disney、Prime 等流媒体平台。", copyEn: "TV networks plus Roku, Netflix, Disney and Prime placements." },
      { title: "YouTube · 约 50%", titleEn: "YouTube · ~50%", copy: "以片头广告 Bumper、插播 In-stream 等长视频广告位为主。", copyEn: "Mostly bumper and in-stream long-form placements." },
    ],
    objectives: ["曝光量与品牌知名度", "建立长期品牌心智"],
    objectivesEn: ["Reach and brand awareness", "Build long-term brand equity"],
    customers: [
      { role: "头部 5 家", roleEn: "Top 5 groups", names: "WPP · Havas · Publicis · Dentsu · Omnicom" },
      { role: "次头部", roleEn: "Challengers", names: "Brandtech（Pencil）· 博报堂" },
      { role: "广告主（品牌方）", roleEn: "Advertisers (brands)", names: "欧莱雅（L’Oréal）· 可口可乐（Coca-Cola）等" },
    ],
    workflowTitle: "AI 模型 Workflow 逐渐代替实拍和渲染",
    workflowTitleEn: "AI workflows are replacing shoots and rendering",
    steps: [
      { title: "Discovery 和 Ideation", titleEn: "Discovery & ideation", copy: "代理商派遣 Strategy 团队与客户共创创意 Idea，先明确受众、品牌主张和导演概念。", copyEn: "Agency strategy teams co-create the idea with the client — audience, brand proposition and directorial concept first." },
      { title: "导演级的创意设计", titleEn: "Director-grade creative design", copy: "把导演脚本、分镜、场景和产品镜头先用 AI 生成可审片素材，与品牌主讨论并持续优化。", copyEn: "Scripts, storyboards, sets and product shots become AI-generated, reviewable material iterated with the brand.", imageRole: "生成分镜故事板、概念图、关键视觉 KV 和场景 / 服化道参考图。这是图片模型渗透最深的一步——单张成本低、迭代快，直接替代人工分镜师和概念设计工时。", imageRoleEn: "Storyboards, concept art, key visuals and set / costume references — the deepest image-model step; cheap, fast iteration replacing manual concept hours." },
      { title: "生产拍摄", titleEn: "Production", copy: "结合实拍、3D 建模和 AI 模型渲染，实现帧级高质量与强一致性成片。", copyEn: "Live action, 3D and AI rendering combine for frame-level quality and consistency.", imageRole: "产出视频模型的首帧和关键帧，以及产品硬照 Packshot 精修、虚拟布景和环境贴图。", imageRoleEn: "First / key frames for video models, retouched packshots, virtual sets and environment plates." },
      { title: "后期、编辑和音效", titleEn: "Post, editing & audio", copy: "完成 VFX 特效渲染，其中约 20% 可由 AI 模型替代。", copyEn: "VFX and finishing — about 20% already replaceable by AI.", imageRole: "逐帧局部修补、去穿帮、替换不合规元素、抠像与画面延展 Outpainting，完成多比例适配。", imageRoleEn: "Frame-level inpainting, cleanup, compliance swaps, keying and outpainting for multi-ratio delivery." },
      { title: "审片和交付", titleEn: "Review & delivery", copy: "按品牌规范、法务声明和平台规格质检，输出可进入 CTV / DV360 的交付包。", copyEn: "QC against brand codes, legal lines and platform specs; packages ready for CTV / DV360.", imageRole: "衍生多尺寸 KV、海报和视频封面缩略图，随视频成片一起打包交付。", imageRoleEn: "Multi-size KVs, posters and thumbnails packaged with the film." },
    ],
    modelRequirements: [
      { type: "视频模型", typeEn: "Video model", items: ["高一致性：30 秒多镜头中人物 / 产品不漂，音画同步，能通过大屏质检和品牌审核。", "3D 白模参考：结合物品、环境、打光等现有 3D 资产解决空间物理规律，支持视频模型精准渲染。", "4K 高码率和高比特色深：满足 DV360 常见的 H.264、24 / 30 fps、至少 20 Mbps、10–16 bit 色深等要求。"], itemsEn: ["High consistency: characters and products hold across a 30s multi-shot cut, A/V in sync, passing big-screen QC and brand review.", "3D white-model reference: grounds spatial physics with existing objects, sets and lighting for precise rendering.", "4K, high bitrate and bit depth: meets DV360-grade H.264, 24 / 30 fps, 20 Mbps+, 10–16 bit delivery."] },
      { type: "图片模型", typeEn: "Image model", items: ["导演级审美和可控构图：支持景别、焦段、打光等镜头语言的参数化控制，出图可直接进入提案和审片。", "品牌资产一致性：商品、包装、Logo、品牌色接近 Pantone 级还原，并支持品牌素材定制化微调。", "4K 高分辨率和专业色彩：支持广色域和高比特色深，可进入专业后期二次调色。", "可分层和局部重绘：主体 / 背景 / 文字分层输出，修改时不必整张重抽。", "版权和合规：训练数据可溯源、支持商用授权与 C2PA 水印，可通过品牌方法务审核。"], itemsEn: ["Director-grade aesthetics with controllable composition: parametric framing, focal length and lighting — straight into decks and review.", "Brand-asset consistency: product, packaging, logo and brand color near Pantone-level, with brand fine-tuning.", "4K and professional color: wide gamut, high bit depth, ready for pro grading.", "Layers and local repaint: subject / background / text separated so edits never re-roll the frame.", "Copyright and compliance: traceable data, commercial licensing and C2PA watermarking that passes brand legal."] },
    ],
    models: [{ type: "视频", typeEn: "Video", copy: "Veo 3.1 · Runway" }, { type: "图片", typeEn: "Image", copy: "nano banana 2" }],
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "效果广告",
    titleEn: "Performance ads",
    ratio: "10–100 变体",
    ratioEn: "10–100 variants",
    desc: "以 tCPA、tROAS、CTR、CVR 和 CPI 定义价值。客户需要的不是单条 Demo，而是一套能持续产出 Hook、跑实验、看归因并复刻胜出结构的系统。",
    descEn: "Value is defined by tCPA, tROAS, CTR, CVR and CPI. Clients need a system that keeps shipping hooks, running tests, reading attribution and cloning winners — not a single demo.",
    media: {
      type: "video" as const,
      src: "/media/performance-generated.mp4",
      poster: "/media/performance-poster.jpg",
      aria: "AI 生成效果广告样片",
      meta: "竖屏 UGC · 商品保真 · 爆款复刻",
      metaEn: "Vertical UGC · product fidelity · winner cloning",
    },
    sampleSpec: "10–15 秒最常见，720p、竖屏，以 UGC 口播和种草视频为主。通常需要生产 10–100 条变体进行实验和效果归因。",
    sampleSpecEn: "10–15s is typical: 720p vertical UGC talking-head and seeding videos, produced as 10–100 variants for testing and attribution.",
    channels: [
      { title: "短视频社交广告", titleEn: "Short-video social", copy: "Meta Reels、TikTok 等短视频信息流。", copyEn: "Meta Reels, TikTok and other short-video feeds." },
      { title: "YouTube · 约 50%", titleEn: "YouTube · ~50%", copy: "Shorts 短视频、插播 In-stream 等。", copyEn: "Shorts and in-stream placements." },
      { title: "应用内广告网络和激励视频", titleEn: "In-app networks & rewarded video", copy: "去掉竞品 Google AdMob 后，核心包括 AppLovin AXON、Unity Ads 等；以插屏视频、激励视频和 Playable 为主，是游戏和 App 类 CPI 效果广告的核心渠道。", copyEn: "Beyond Google AdMob: AppLovin AXON, Unity Ads and peers — interstitial, rewarded and playable formats at the core of CPI campaigns." },
    ],
    objectives: ["tCPA：目标转化成本", "tROAS：目标广告支出回报率", "商品类 CTR / CVR：跳转购物转化", "App / 游戏 CPI：下载安装量"],
    objectivesEn: ["tCPA: target cost per action", "tROAS: target return on ad spend", "Commerce CTR / CVR: click-to-purchase", "App / game CPI: installs"],
    customers: [
      { role: "AdTech 公司", roleEn: "AdTech", names: "AppLovin · 钛动" },
      { role: "广告主（品牌方）", roleEn: "Advertisers (brands)", names: "欧莱雅（L’Oréal）· 可口可乐（Coca-Cola）等" },
      { role: "Paid Media", roleEn: "Paid media", names: "Pinterest · Reddit · LinkedIn Ads 等" },
    ],
    workflowTitle: "Ad Campaign Agent 引入广告素材自动化制作",
    workflowTitleEn: "Campaign agents bring automated creative production",
    steps: [
      { title: "市场热点洞察", titleEn: "Trend insight", copy: "根据 TikTok、Instagram、X 等平台的舆情与热点追踪，设计广告 Hook、CTA 和脚本。", copyEn: "Track sentiment and trends across TikTok, Instagram and X to design hooks, CTAs and scripts.", imageRole: "用量较小，主要生成 Mood Board 和视觉参考图，辅助脚本和创意方向评审。", imageRoleEn: "Light usage — mood boards and visual references for direction reviews." },
      { title: "AI 内容生产和编辑", titleEn: "AI production & editing", copy: "替代一部分或全部实拍和后期，快速生产信息流 UGC、带货解说、夸张剧情和商品演示素材。", copyEn: "Replaces part or all of shooting and post: feed UGC, selling explainers, story skits and product demos at speed.", imageRole: "核心环节——商品白底图转场景图、虚拟模特和数字人形象定型，并产出图生视频首帧；首帧质量直接决定抽卡成功率和单条成片成本。", imageRoleEn: "The core step — white-background-to-scene, virtual models and digital humans, plus image-to-video first frames; first-frame quality decides hit rate and unit cost." },
      { title: "投放实验", titleEn: "Launch & test", copy: "持续制作 Variant、投放并观察 tCPA、tROAS、CTR 与 CVR。", copyEn: "Keep shipping variants; watch tCPA, tROAS, CTR and CVR.", imageRole: "批量生成视频封面和静态图 Variant，与视频同池 A/B；先用低成本静态图筛选创意方向，再放大成视频。", imageRoleEn: "Batch thumbnails and static variants A/B alongside video; statics filter directions cheaply before scaling." },
      { title: "爆款复刻", titleEn: "Clone winners", copy: "把高转化素材快速做换品、换模特、换区域、换语言和换场景，再进入小流量测试与放量循环。", copyEn: "Swap product, cast, region, language and scene on winners, then re-test and scale.", imageRole: "在首帧图层用局部重绘 Inpainting 完成换品 / 换模特 / 换场景，再重新图生视频，比整条视频重抽低一个数量级。", imageRoleEn: "Inpaint the first frame to swap product / model / scene, then regenerate — an order of magnitude cheaper than re-rolling video." },
    ],
    modelRequirements: [
      { type: "视频模型", typeEn: "Video model", items: ["高性价比：全 AI 制作达到 TikTok、Meta Reels 等投放平台的声画质量与信息量门槛。", "高抽卡成功率、成本可控：竖屏、UGC、口播和商品一致，能批量产出 10–100 条 Variant。", "本地化：支持多人种数字人和小语种。"], itemsEn: ["Cost-effective: fully AI output clears TikTok / Reels quality and information bars.", "High hit rate at controlled cost: vertical, UGC, talking-head and product-consistent across 10–100 variants.", "Localization: multi-ethnic digital humans and long-tail languages."] },
      { type: "图片模型", typeEn: "Image model", items: ["首帧图质量：为图生视频提供高质量首帧和关键帧，首帧构图与一致性直接决定视频抽卡成功率。", "商品一致性：支持单图 / 多图参考，白底图转场景图时商品外观、Logo、包装文字不变形。", "局部编辑 Inpainting：换品、换模特、换背景、换文案只重绘局部。", "本地化：多人种模特形象，图内多语言文案准确不乱码。", "极低成本和高并发：单张成本压到美分级、秒级出图，支撑 10–100 条 Variant 的首帧和封面批量生产。"], itemsEn: ["First-frame quality: strong first / key frames decide image-to-video hit rate.", "Product consistency: single / multi reference keeps product, logo and packaging true from white background to scene.", "Local inpainting: swap product, model, background or copy without full re-rolls.", "Localization: diverse model looks with accurate in-image multilingual text.", "Cent-level cost, high concurrency: seconds-fast output powering 10–100 variant batches."] },
    ],
    models: [{ type: "视频", typeEn: "Video", copy: "Kling 3.0（商品展示 / 口播性价比）· Veo 3.1", copyEn: "Kling 3.0 (product demo / talking-head value) · Veo 3.1" }, { type: "图片", typeEn: "Image", copy: "nano banana 2" }],
  },
  {
    index: "03",
    label: "DISPLAY",
    title: "静态展示图片广告",
    titleEn: "Static display ads",
    ratio: "100–1K 图片",
    ratioEn: "100–1K images",
    desc: "作为独立的第三类广告生产线，Display Ads 以 CPM / CPC 计价，商业目标介于品牌与效果之间，兼顾低成本覆盖与直接转化。真正门槛是让一套主视觉稳定扩成数百到数千张投放版本。",
    descEn: "A third production line: display prices on CPM / CPC, sitting between brand and performance — low-cost reach plus direct conversion. The real bar is scaling one master visual into hundreds or thousands of live versions.",
    media: {
      type: "image-grid" as const,
      layout: "display",
      aria: "静态展示图片广告典型案例组合",
      cases: [
        { src: "/media/demo-display-commerce.jpg", alt: "电商平台社交信息流静态广告" },
        { src: "/media/demo-display-beauty.jpg", alt: "美妆品牌横版信息流广告" },
        { src: "/media/demo-display-diwali.jpg", alt: "本地化电商三比一促销横幅广告" },
      ],
      formats: ["SOCIAL STATIC", "16:9 FEED", "3:1 BANNER"],
      meta: "社交静态图 · 程序化 Banner · DCO 多尺寸套版",
      metaEn: "Social statics · programmatic banners · DCO multi-size templating",
    },
    sampleSpec: "静态 JPG / PNG；同一套主视觉需适配十几到几十种 IAB 标准尺寸。强调商品精确还原、图内文案可读和多语言版本，单个 Campaign 常需数百至数千张变体。",
    sampleSpecEn: "Static JPG / PNG; one master visual adapts to dozens of IAB sizes. Product fidelity, readable in-image copy and multilingual versions matter — one campaign often needs hundreds to thousands of variants.",
    channels: [
      { title: "社交信息流静态图", titleEn: "Social feed statics", copy: "Meta 单图与轮播 Carousel、Pinterest、LinkedIn Ads 等。", copyEn: "Meta single-image and carousel, Pinterest, LinkedIn Ads." },
      { title: "程序化展示广告网络", titleEn: "Programmatic display networks", copy: "去掉 Google Display Network、Amazon DSP 等头部竞品后，主要包括 The Trade Desk、InMobi 等 DSP，覆盖海量长尾站点和 App 的 Banner 位。", copyEn: "Beyond GDN and Amazon DSP: The Trade Desk, InMobi and peer DSPs covering long-tail site and app banner slots." },
    ],
    objectives: ["CPM / CPC：兼顾覆盖成本与直接转化", "覆盖侧：低成本、高频次触达与 Retargeting 兜底", "转化侧 CTR / CVR：商品图、促销图引导落地页跳转与加购"],
    objectivesEn: ["CPM / CPC: reach economics with direct response", "Reach side: cheap, high-frequency touch and retargeting", "Conversion side CTR / CVR: product and promo images drive landing and add-to-cart"],
    customers: [
      { role: "AdTech / 创意自动化平台", roleEn: "AdTech / creative automation", names: "AppLovin · Smartly.io · Creatopy" },
      { role: "零售媒体和 Paid Media", roleEn: "Retail media & paid media", names: "Criteo · Pinterest" },
      { role: "代理商", roleEn: "Agencies", names: "WPP · Havas · Publicis · Dentsu · Omnicom 等头部 4A" },
    ],
    workflowTitle: "Ad Campaign Agent 引入图片素材自动化编辑",
    workflowTitleEn: "Campaign agents bring automated image editing",
    steps: [
      { title: "素材和品牌资产准备", titleEn: "Asset & brand prep", copy: "将商品白底图 / 实拍图、品牌 VI、字体和法务合规文案入库，作为参考图约束。", copyEn: "Ingest white-background / product shots, brand VI, fonts and legal copy as reference constraints." },
      { title: "AI 图片生成与合成", titleEn: "AI generation & compositing", copy: "用图片模型完成场景重绘、模特换装、背景替换和商品精修，替代传统棚拍与人工修图。", copyEn: "Scene repaint, model swaps, background replacement and product retouch replace studio shoots and manual editing." },
      { title: "批量套版和尺寸适配", titleEn: "Batch templating & sizing", copy: "一套主视觉自动衍生到全部投放尺寸、语言和市场版本，并对接 DCO 按人群实时拼装。", copyEn: "One master auto-derives every size, language and market version, feeding DCO real-time assembly." },
      { title: "投放实验和爆款复刻", titleEn: "Test & clone winners", copy: "按 CTR / CVR 做 A/B，胜出创意快速换品、换区域、换语言复刻，再进入放量循环。", copyEn: "A/B on CTR / CVR; winners swap product, region and language, then scale." },
    ],
    modelRequirements: [
      { type: "", typeEn: "", items: ["商品一致性：支持单图 / 多图参考 Image-to-image，商品外观、Logo、包装文字不变形。", "精准文字渲染：图内多语言文案、促销角标和价格数字准确不乱码。", "高分辨率和任意宽高比：覆盖 300×250 到 1080×1920，支持 Outpainting 无损扩图。", "局部编辑 Inpainting：换背景、换模特、换色号只重绘局部。", "单张成本极低、支持高并发：美分级单张成本，支撑千级批量出图。"], itemsEn: ["Product consistency: image-to-image with single / multi reference keeps product, logo and packaging true.", "Precise text rendering: multilingual copy, badges and prices stay accurate in-image.", "High resolution, any aspect ratio: 300×250 up to 1080×1920 with lossless outpainting.", "Local inpainting: swap background, model or colorway without full repaints.", "Cent-level unit cost with high concurrency for thousand-scale batches."] },
    ],
    models: [{ type: "图片", typeEn: "Image", copy: "nano banana 2 为主", copyEn: "mostly nano banana 2" }, { type: "视频", typeEn: "Video", copy: "少量使用 Kling / Runway 将静图转为动效", copyEn: "light Kling / Runway use for motion versions" }],
  },
];

const solutionVideoDemos = {
  brand: [
    {
      order: "01",
      label: "BEAUTY / LUXURY",
      title: "人物特写与睫毛级质感",
      titleEn: "Portrait detail & lash-level texture",
      meta: "美妆个护 · 奢品",
      metaEn: "Beauty · Luxury",
      src: "/media/brand-beauty-demo.mp4",
      poster: "/media/brand-beauty-demo.jpg",
      frames: ["/media/brand-frames/beauty-01.jpg", "/media/brand-frames/beauty-02.jpg", "/media/brand-frames/beauty-03.jpg"],
      proofTitle: "从人物到微距，保持同一套视觉语言。",
      proofs: ["人物五官、妆容与造型跨镜头稳定", "睫毛、皮肤与金属饰品保留微观质感", "冷调硬光在全景、场景与特写间连续"],
    },
    {
      order: "02",
      label: "BEVERAGE",
      title: "产品保真与生活化叙事",
      titleEn: "Product fidelity & lifestyle storytelling",
      meta: "酒水 · 生活方式",
      metaEn: "Beverage · Lifestyle",
      src: "/media/brand-beverage-demo.mp4",
      poster: "/media/brand-beverage-demo.jpg",
      frames: ["/media/brand-frames/beverage-01.jpg", "/media/brand-frames/beverage-02.jpg", "/media/brand-frames/beverage-03.jpg"],
      proofTitle: "把包装、人物与环境放进同一条叙事。",
      proofs: ["瓶身轮廓与标签在产品镜头中清晰可辨", "暖色环境光与浅景深维持真实摄影感", "动作、人物和产品镜头形成连续叙事节奏"],
    },
    {
      order: "03",
      label: "HOSPITALITY / LIFESTYLE",
      title: "夜景光影与运动表现",
      titleEn: "Night lighting & motion performance",
      meta: "酒店 · 奢旅 · 服务叙事",
      metaEn: "Hospitality · Luxury travel",
      src: "/media/brand-auto-demo.mp4",
      poster: "/media/brand-auto-demo.jpg",
      frames: ["/media/brand-frames/auto-01.jpg", "/media/brand-frames/auto-02.jpg", "/media/brand-frames/auto-03.jpg"],
      proofTitle: "复杂夜景中，角色与空间关系保持清楚。",
      proofs: ["主角服装与人物状态在连续镜头中稳定", "门廊、车道和接待区建立可读的空间关系", "湿地反光、灯光散景与肤色保持统一调性"],
    },
    {
      order: "04",
      label: "TECH / ELECTRONICS",
      title: "CMF 材质与产品微距",
      titleEn: "CMF materials & product macro",
      meta: "科技 · 电子 · 软件",
      metaEn: "Tech · Electronics",
      src: "/media/brand-tech-demo.mp4",
      poster: "/media/brand-tech-demo.jpg",
      frames: ["/media/brand-frames/tech-01.jpg", "/media/brand-frames/tech-02.jpg", "/media/brand-frames/tech-03.jpg"],
      proofTitle: "产品卖点用材质、使用与氛围三类镜头表达。",
      proofs: ["金属边框与镜头模组具备可读的 CMF 层次", "手持使用镜头保持设备几何和比例稳定", "产品、使用和情绪镜头之间有完整发布片节奏"],
    },
  ],
  performance: [
    {
      order: "01",
      label: "FASHION SHOWCASE",
      title: "商品展示",
      titleEn: "Product showcase",
      meta: "服饰 · 商品展示",
      metaEn: "Fashion · product showcase",
      src: "/media/performance-fashion-demo.mp4",
      poster: "/media/performance-fashion-demo.jpg",
      frames: ["/media/performance-frames/fashion-01.jpg", "/media/performance-frames/fashion-02.jpg", "/media/performance-frames/fashion-03.jpg"],
      proofTitle: "从全身到微距，服装结构仍然可读。",
      proofTitleEn: "From full body to macro, garment structure stays readable.",
      proofs: ["模特身份、发型与服装轮廓跨镜头稳定", "镂空针织纹理在近景中保留细节", "同一商品可覆盖全身、局部与回收镜头"],
      proofsEn: ["Model identity, hair and silhouette hold across shots", "Open-knit texture keeps detail in close-ups", "One product covers full-body, detail and recap shots"],
    },
    {
      order: "02",
      label: "PERSONAL CARE UGC",
      title: "UGC 实拍感",
      titleEn: "UGC authenticity",
      meta: "个护 · 口播演示",
      metaEn: "Personal care · talking demo",
      src: "/media/performance-ugc-demo.mp4",
      poster: "/media/performance-ugc-demo.jpg",
      frames: ["/media/performance-frames/ugc-01.jpg", "/media/performance-frames/ugc-02.jpg", "/media/performance-frames/ugc-03.jpg"],
      proofTitle: "产品、人物与使用动作组成完整演示。",
      proofTitleEn: "Product, person and usage form a complete demo.",
      proofs: ["挤出、刷牙与结果展示形成连续使用链路", "人物、浴室环境和手持视角保持自然", "商品近景与人物口播可以在同一条素材中切换"],
      proofsEn: ["Squeeze, brush and result form a continuous chain", "Person, bathroom and handheld POV stay natural", "Product close-ups and talking head cut within one asset"],
    },
    {
      order: "03",
      label: "SOCIAL SEEDING",
      title: "商品开箱与人物交互",
      titleEn: "Unboxing and interaction",
      meta: "家具 · 种草短视频",
      metaEn: "Furniture · seeding video",
      src: "/media/performance-sofa-demo.mp4",
      poster: "/media/performance-sofa-demo.jpg",
      frames: ["/media/performance-frames/sofa-01.jpg", "/media/performance-frames/sofa-02.jpg", "/media/performance-frames/sofa-03.jpg"],
      proofTitle: "商品几何、材质与承重关系贯穿使用过程。",
      proofTitleEn: "Geometry, material and weight-bearing hold through use.",
      proofs: ["沙发轮廓、褶皱与尺度在连续镜头中稳定", "人物坐卧与商品发生清楚的空间交互", "自然光和室内布景保持同一实拍环境"],
      proofsEn: ["Sofa outline, creases and scale stay stable across shots", "Sitting and lying interact clearly with the product", "Natural light and set stay one continuous environment"],
    },
    {
      order: "04",
      label: "HIGH-PRECISION EDIT",
      title: "试穿试戴试妆带货",
      titleEn: "Try-on and makeup selling",
      meta: "美妆 · UGC 效果演示",
      metaEn: "Beauty · UGC effect demo",
      src: "/media/performance-beauty-demo.mp4",
      poster: "/media/performance-beauty-demo.jpg",
      frames: ["/media/performance-frames/beauty-01.jpg", "/media/performance-frames/beauty-02.jpg", "/media/performance-frames/beauty-03.jpg"],
      proofTitle: "只改变目标效果，不破坏人物身份。",
      proofTitleEn: "Change only the target effect, never the identity.",
      proofs: ["同一人物在前后效果镜头中保持五官与造型", "产品出现、涂抹与结果特写形成闭环", "局部肤质变化不影响其余画面结构"],
      proofsEn: ["Same face and styling across before / after shots", "Product reveal, application and result close the loop", "Local skin change leaves the rest of the frame intact"],
    },
  ],
};

const customerFlowStages = [
  {
    index: "01",
    role: "预算源头",
    roleEn: "BUDGET SOURCE",
    title: "品牌主",
    titleEn: "Brand owners",
    flowRole: "定义预算与品牌资产",
    flowRoleEn: "Set budgets and brand assets",
    flowNote: "先进入集团 AI 平台，再向市场与外部代理商分配生产任务。",
    trend: "自建 AI 中台",
    trendEn: "Building in-house AI platforms",
    opportunity: "从零散生成工具，走向企业级品牌资产生产池。",
    examples: "L’Oréal · CreateAI",
  },
  {
    index: "02",
    role: "制作放大",
    roleEn: "PRODUCTION SCALE",
    title: "代理商",
    titleEn: "Agencies",
    flowRole: "承接创意与制作预算",
    flowRoleEn: "Hold creative and production budgets",
    flowNote: "同时连接品牌关系、导演创意、Production 与最终交付。",
    trend: "从创意预览进入 Production",
    trendEn: "From previews into production",
    opportunity: "导演、创意与制作团队把 AI 纳入正式生产流程。",
    examples: "WPP · Havas",
  },
  {
    index: "03",
    role: "复利消耗",
    roleEn: "COMPOUNDING USAGE",
    title: "AdTech / MarTech",
    titleEn: "AdTech / MarTech",
    flowRole: "把投放预算转成持续生产",
    flowRoleEn: "Turn media budgets into continuous production",
    flowNote: "模型嵌入 Campaign Agent，随客户、素材和实验次数重复调用。",
    trend: "Campaign Agent 进入 1 → 3",
    trendEn: "Campaign agents enter 1 → 3",
    opportunity: "素材自动化成为核心场景，随客户与投放规模复制放大。",
    examples: "AppLovin · 钛动",
    examplesEn: "AppLovin · TecDo",
  },
  {
    index: "04",
    role: "媒体反馈",
    roleEn: "MEDIA FEEDBACK",
    title: "Paid Media",
    titleEn: "Paid media",
    flowRole: "完成分发并返回效果信号",
    flowRoleEn: "Distribute and return performance signals",
    flowNote: "把媒体侧数据送回创意生产，让胜出结构进入下一轮。",
    trend: "分发信号回流素材生产",
    trendEn: "Signals flow back into production",
    opportunity: "用投放反馈缩短创意迭代，让胜出素材更快进入下一轮。",
    examples: "Criteo · Pinterest",
  },
];

const unresolvedGaps = [
  {
    no: "01",
    title: "3D 白模只能渲染，不能理解",
    titleEn: "White models render, but are not understood",
    copy: "短期内模型主要完成视觉渲染。面对动作捕捉白模，它能沿用原始动作重绘人物，却难以理解动作意图并自然融入环境，人物、场景与物体之间仍无法形成合理且连贯的交互。",
    copyEn: "Near-term the model mostly renders. Given mocap white models it repaints characters along the original motion, but struggles to understand intent and blend into the scene — person, set and object interaction stays incoherent.",
    signal: "3D SEMANTICS",
    examples: ["动作意图理解", "人物 × 场景交互", "人物 × 物体交互"],
    examplesEn: ["Motion-intent understanding", "Person × scene interaction", "Person × object interaction"],
    link: "https://bytedance.sg.larkoffice.com/docx/O3I3dWdKKof2DtxNkrolaGtIgzc#share-THzudn9RconwUkxVivBlnvQRgNg",
    linkLabel: "Performance-Driven Video Generation with Seedance ↗",
  },
  {
    no: "02",
    title: "Seedance 2.0 / Fast / mini 商品知识与商品交互能力较差",
    titleEn: "Seedance 2.0 / Fast / mini: weak product knowledge and interaction",
    copy: "效果广告规模生产的主要阻塞点，集中在商品知识、真实交互、过程因果和高速运动一致性。",
    copyEn: "The main blocker for performance-scale production: product knowledge, real interaction, process causality and high-speed consistency.",
    signal: "WORLD KNOWLEDGE",
    examples: ["口红、3C 等商品操作姿势不对", "开箱视频中箱子自己打开", "人脸重复出现、位置瞬移", "高速动作下人物与道具的物理绑定失效", "特效生成错误，或表现过于浮夸"],
    examplesEn: ["Wrong handling of lipstick, 3C and similar products", "Boxes open themselves in unboxing videos", "Faces duplicate or teleport", "Physics binding fails at high speed", "VFX misfire or overact"],
    link: "https://bytedance.sg.larkoffice.com/docx/OJQ9dIYdfo0ponxiLcNlhbDHgng",
    linkLabel: "钛动 Seedance 2.0 mini 效果广告 Bad Cases ↗",
    linkLabelEn: "TecDo Seedance 2.0 mini performance-ads bad cases ↗",
  },
  {
    no: "03",
    title: "商品与品牌要素保真不足",
    titleEn: "Product and brand fidelity falls short",
    copy: "品牌 Logo、商标、商品颜色、包装文字和几何比例必须作为硬约束。当前图片模型生成的小字号文案仍会模糊、断笔或不可读，只能依赖后期工具补字；产品目标必须是由模型原生生成清晰、准确的小字，而不是继续依赖后处理。",
    copyEn: "Logos, marks, product color, packaging text and geometry must be hard constraints. Small in-image type still blurs or breaks and gets patched in post — the product goal is native, accurate small text, not more post-processing.",
    signal: "BRAND FIDELITY",
    examples: ["Logo 与商标细节错误", "商品颜色与包装文字漂移", "小字号文案模糊、断笔或不可读", "商品几何形变与入景比例失真"],
    examplesEn: ["Logo and trademark detail errors", "Product color and packaging drift", "Small type blurs, breaks or is unreadable", "Geometry warps and scale distorts in scene"],
    link: "",
    linkLabel: "",
  },
  {
    no: "04",
    title: "音频参考与情感仍不可控",
    titleEn: "Audio reference and emotion remain uncontrolled",
    copy: "音色参考不够准确，音频无法 100% 复制参考视频，生成语音机械且情感不足。头部代理商的当前最佳实践，是先用 ElevenLabs 生成语音，再与 Seedance 视频对齐。",
    copyEn: "Voice reference is imprecise, audio cannot fully copy the reference, and speech sounds mechanical. Top agencies currently generate voice with ElevenLabs, then align it to Seedance video.",
    signal: "AUDIO CONTROL",
    examples: ["音色参考不准确", "无法完整复制参考音频", "语音机械、情感表现不足", "ElevenLabs 音频 × Seedance 视频对齐"],
    examplesEn: ["Voice reference misses", "Reference audio cannot be fully copied", "Mechanical, flat delivery", "ElevenLabs audio × Seedance alignment"],
    link: "",
    linkLabel: "",
  },
];

export default function Home() {
  return (
    <main className="siteRoot" id="top">
      {process.env.NODE_ENV === "development" ? <InlineTextEditor /> : null}
      <input className="langControl" id="language-mode" type="checkbox" aria-label="切换中英文" />
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="BytePlus 广告行业素材生产方案首页">
          <span className="brandMark">B</span>
          <span className="langZh">BytePlus 广告行业素材生产方案</span>
          <span className="langEn">ADS Creative Solution</span>
        </a>
        <label className="languageSwitch" htmlFor="language-mode">
          <span className="langZh">中&nbsp; / &nbsp;EN</span>
          <span className="langEn">EN&nbsp; / &nbsp;中</span>
        </label>
      </nav>

      <section className="coverPage" aria-labelledby="cover-title">
        <div className="coverGlow" aria-hidden="true" />
        <div className="coverRule coverRuleTop" aria-hidden="true" />
        <div className="coverRule coverRuleBottom" aria-hidden="true" />
        <div className="shell coverPageInner">
          <h1 className="langZh" id="cover-title">
            <span>视频成为主流，</span>
            <strong>AI 生产走向规模化。</strong>
          </h1>
          <h1 className="langEn">
            <span>Video goes mainstream.</span>
            <strong>AI production scales.</strong>
          </h1>
        </div>
      </section>

      <section className="marketHero marketFlowPage" id="market">
        <div className="marketFlowShell">
          <header className="marketFlowIntro">
            <div className="marketFlowIndex"><span>01</span><b>BUDGET FLOW</b></div>
            <div className="marketFlowTitle">
              <h1 className="langZh">AI 降低视频生产成本，<br /><span>视频广告成为全球投放第一大类型。</span></h1>
              <h1 className="langEn">AI lowers video production cost.<br /><span>Video becomes the world’s No.1 ad format.</span></h1>
            </div>
            <div className="marketFlowScope" aria-label="全球数字广告与海外数字广告市场口径">
              <div><span><span className="langZh">2026 全球数字广告</span><span className="langEn">2026 GLOBAL DIGITAL ADS</span></span><strong>≈ $1T</strong></div>
              <i aria-hidden="true">→</i>
              <div><span><span className="langZh">海外数字广告大盘</span><span className="langEn">OVERSEAS DIGITAL AD MARKET</span></span><strong>$640–680B</strong><small><span className="langZh">剔除中国约 $160B 与海外线下约 $200B</span><span className="langEn">excl. China ~$160B and overseas offline ~$200B</span></small></div>
            </div>
          </header>

          <figure className="marketFlowFigure" aria-labelledby="market-flow-heading">
            <input className="segmentControl" id="video-segment-mode" type="checkbox" aria-label="查看或收起视频广告三赛道" />
            <div className="marketFlowFigureHead">
              <div><strong id="market-flow-heading"><span className="langZh">海外数字广告市场规模与增速</span><span className="langEn">Overseas digital ad market · size and growth</span></strong></div>
              <label className="marketFlowToggle" htmlFor="video-segment-mode"><span className="segmentClosedText"><span className="langZh">查看三赛道</span><span className="langEn">View 3 tracks</span></span><span className="segmentOpenText"><span className="langZh">收起三赛道</span><span className="langEn">Hide 3 tracks</span></span><i aria-hidden="true">＋</i></label>
            </div>

            <svg className="marketFlowSvg" viewBox="0 0 1200 430" role="img" aria-label="2026 年四类海外数字广告基线，视频广告增长至 2030 年 2600 亿美元">
              <defs>
                <pattern id="market-flow-grid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="currentColor" strokeOpacity=".06" /></pattern>
              </defs>
              <rect width="1200" height="430" className="flowGrid" fill="url(#market-flow-grid)" />
              <g className="flowLabels">
                <text x="18" y="24" className="flowOverline">2026 · CURRENT MARKET</text>
                <text x="936" y="24" className="flowOverline">2030 · VIDEO OUTCOME</text>
              </g>

              <g className="flowBaseline flowSearch">
                <rect x="18" y="46" width="236" height="60" />
                <text x="35" y="70" className="flowName"><tspan className="langZh">搜索广告</tspan><tspan className="langEn">Search ads</tspan></text><text x="35" y="88" className="flowMeta">SEARCH · 33%</text><text x="232" y="82" textAnchor="end" className="flowValue">$220B</text>
              </g>
              <line x1="254" y1="76" x2="1172" y2="76" className="flowBenchmark" />
              <text x="806" y="66" className="flowBenchmarkLabel">$220B SEARCH BENCHMARK</text>

              <path className="flowVideoRiver" d="M254 125 C470 127 630 94 820 55 C875 44 914 42 936 42 L936 301 C877 301 825 304 756 307 C575 315 426 284 254 282Z" />
              <g className="flowBaseline flowVideo">
                <rect x="18" y="125" width="236" height="157" />
                <text x="35" y="155" className="flowName"><tspan className="langZh">视频广告</tspan><tspan className="langEn">Video ads</tspan></text><text x="35" y="176" className="flowMeta">VIDEO · 26%</text><text x="35" y="229" className="flowHeroValue">$160B</text>
                <text x="35" y="259" className="flowNote"><tspan className="langZh">CTR / CVR 更优，但制作成本曾限制供给</tspan><tspan className="langEn">Better CTR / CVR — production cost capped supply</tspan></text>
              </g>
              <g className="flowBaseline flowDisplay">
                <rect x="18" y="301" width="205" height="52" />
                <text x="35" y="324" className="flowName"><tspan className="langZh">图文展示</tspan><tspan className="langEn">Display</tspan></text><text x="35" y="342" className="flowMeta">DISPLAY · 24%</text><text x="203" y="334" textAnchor="end" className="flowValue">$160B</text>
              </g>
              <g className="flowBaseline flowRmn">
                <rect x="18" y="368" width="170" height="47" />
                <text x="35" y="389" className="flowName"><tspan className="langZh">零售媒体</tspan><tspan className="langEn">Retail</tspan></text><text x="35" y="405" className="flowMeta">RMN · 17%</text><text x="169" y="399" textAnchor="end" className="flowValue">$110B</text>
              </g>

              <text x="672" y="183" className="flowCrossTitle"><tspan className="langZh">3–4 年内跨过 $220B 搜索基准</tspan><tspan className="langEn">Crosses the $220B search benchmark in 3–4 years</tspan></text>

              <g className="flowOutcomeDefault">
                <rect x="936" y="42" width="236" height="259" />
                <text x="955" y="119" className="flowDefaultValue">$260B</text>
                <text x="1148" y="118" textAnchor="end" className="flowDefaultRank">#1</text>
                <line x1="955" y1="139" x2="1152" y2="139" />
                <text x="955" y="175" className="flowDefaultSignal">3–4 YEARS</text>
                <text x="955" y="199" className="flowDefaultCopy"><tspan className="langZh">超过搜索与图文展示广告</tspan><tspan className="langEn">Overtakes search and display</tspan></text>
                <text x="955" y="244" className="flowDefaultSignal">AI-DRIVEN SUPPLY</text>
                <text x="955" y="268" className="flowDefaultCopy"><tspan className="langZh">AI 使制作成本下降，视频供给规模化</tspan><tspan className="langEn">AI cuts production cost; supply scales</tspan></text>
              </g>
              <g className="flowSegments">
                <rect x="936" y="42" width="236" height="113" className="flowSocial" />
                <rect x="936" y="155" width="236" height="88" className="flowCtv" />
                <rect x="936" y="243" width="236" height="58" className="flowOlv" />
                <text x="955" y="68" className="flowSegmentName">SOCIAL VIDEO</text><text x="955" y="105" className="flowSegmentValue">62 → 115B</text><text x="1148" y="69" textAnchor="end" className="flowSegmentDelta">+85%</text>
                <text x="955" y="181" className="flowSegmentName">CTV</text><text x="955" y="215" className="flowSegmentValue">45 → 90B</text><text x="1148" y="181" textAnchor="end" className="flowSegmentDelta">+100%</text>
                <text x="955" y="267" className="flowSegmentName">OLV</text><text x="955" y="291" className="flowSegmentValue small">38 → 55B</text><text x="1148" y="267" textAnchor="end" className="flowSegmentDelta dark">+45%</text>
              </g>
              <g className="flowOutcome">
                <text x="936" y="334" className="flowOutcomeOverline">2030 TOTAL VIDEO BUDGET</text><text x="936" y="383" className="flowOutcomeValue">$260B</text><text x="1158" y="383" textAnchor="end" className="flowOutcomeRank">#1</text><line x1="936" y1="396" x2="1172" y2="396" />
              </g>

              <g className="flowTimeline">
                <line x1="300" y1="375" x2="835" y2="375" />
                <g className="flowGrowthTag base" transform="translate(300 354)"><rect x="-27" y="-12" width="54" height="18" rx="9" /><text y="1" textAnchor="middle"><tspan className="langZh">基期</tspan><tspan className="langEn">Base</tspan></text></g>
                <g className="flowGrowthTag" transform="translate(470 354)"><rect x="-42" y="-12" width="84" height="18" rx="9" /><text y="1" textAnchor="middle">2021–23 +44%</text></g>
                <g className="flowGrowthTag" transform="translate(640 354)"><rect x="-42" y="-12" width="84" height="18" rx="9" /><text y="1" textAnchor="middle">2023–26 +63%</text></g>
                <g className="flowGrowthTag finish" transform="translate(835 354)"><rect x="-42" y="-12" width="84" height="18" rx="9" /><text y="1" textAnchor="middle">2026–30 +79%</text></g>
                <circle cx="300" cy="375" r="5" /><circle cx="470" cy="375" r="5" /><circle cx="640" cy="375" r="6" className="active" /><circle cx="835" cy="375" r="8" className="finish" />
                <text x="300" y="399" className="flowTimelineText">2021 · $62B</text><text x="470" y="399" textAnchor="middle" className="flowTimelineText">2023 · $89B</text><text x="640" y="399" textAnchor="middle" className="flowTimelineText">2026 · $145B</text><text x="835" y="399" textAnchor="middle" className="flowTimelineFinish">2030 · $260B</text>
              </g>
            </svg>
            <div className="marketFlowMobile" aria-label="移动端预算迁移流">
              <div className="mobileMarketRows">
                <div><span>SEARCH · 33%</span><strong>$220B</strong></div>
                <div className="active"><span>VIDEO · 26%</span><strong>$160B</strong><small><span className="langZh">AI 降本释放规模供给</span><span className="langEn">AI cost-down unlocks supply</span></small></div>
                <div><span>DISPLAY · 24%</span><strong>$160B</strong></div>
                <div><span>RMN · 17%</span><strong>$110B</strong></div>
              </div>
              <div className="mobileFlowArrow"><span>3–4 YEARS</span><b>↓</b><small><span className="langZh">跨过 $220B Search 基准</span><span className="langEn">crosses the $220B search benchmark</span></small></div>
              <div className="mobileVideoOutcome">
                <header><span>2030 · VIDEO #1</span><strong>$260B</strong></header>
                <div className="mobileOutcomeSummary"><span>3–4 YEARS</span><b><span className="langZh">超过 Search / Display</span><span className="langEn">Overtakes Search / Display</span></b><small><span className="langZh">AI 降本释放规模化视频供给</span><span className="langEn">AI cost-down scales video supply</span></small></div>
                <div className="mobileSegmentDetails">
                  <div><span>SOCIAL VIDEO</span><b>$115B</b><small>62 → 115 · +85%</small></div>
                  <div><span>CTV</span><b>$90B</b><small>45 → 90 · +100%</small></div>
                  <div><span>OLV</span><b>$55B</b><small>38 → 55 · +45%</small></div>
                </div>
              </div>
            </div>
          </figure>

          <section className="marketFlowAiBand" aria-label="2026 到 2030 AI 价值捕获">
            <div className="marketFlowAiIntro"><h2 className="langZh">AI 把制作瓶颈，<br />变成可规模化供给。</h2><h2 className="langEn">AI turns a production bottleneck<br />into scalable supply.</h2></div>
            <div className="marketFlowYear current"><header><strong>2026</strong><span>CURRENT</span></header><div className="marketFlowYearTotal"><span><span className="langZh">视频广告制作总成本</span><span className="langEn">Total video production cost</span></span><b>$25–30B</b></div><div className="marketFlowMetric agent"><span>AGENT</span><b>$2B</b><small><span className="langZh">≈ 成本 10%</span><span className="langEn">≈10% of cost</span></small></div><div className="marketFlowMetric api"><span>MODEL API</span><b>$1B</b><small><span className="langZh">≈ 成本 5%</span><span className="langEn">≈5% of cost</span></small></div></div>
            <div className="marketFlowYear future"><header><strong>2030</strong><span>FORECAST</span></header><div className="marketFlowYearTotal"><span><span className="langZh">可替代劳动力盘</span><span className="langEn">Replaceable labor pool</span></span><b>≈ $50B</b></div><div className="marketFlowMetric agent"><span>AGENT</span><b>$12.8B</b><small>6.4×</small></div><div className="marketFlowMetric api"><span>MODEL API</span><b>$6.4B</b><small>6.4×</small></div></div>
            <div className="marketFlowCapture"><span>VALUE CAPTURE</span><strong><b><span className="langZh">AI 已切走</span><span className="langEn">AI captures</span></b><em>&gt;20%</em></strong></div>
          </section>
        </div>
      </section>

      <section className="sceneLandscapePage" id="scenarios" aria-labelledby="scene-landscape-title">
        <div className="sceneLandscapeShell">
          <header className="sceneLandscapeHeader">
            <div className="sceneLandscapeIndex"><span>02</span><b>SCENE LANDSCAPE</b></div>
            <div><h2 id="scene-landscape-title"><span className="langZh">2. 主流广告场景<br /><span>和需求分析</span></span><span className="langEn">2. Mainstream ad scenarios<br /><span>and what they demand</span></span></h2></div>
          </header>

          <div className="sceneComparisonMatrix" role="table" aria-label="品牌、效果与静态展示图片广告全景对比">
            <div className="sceneMatrixCorner" role="columnheader">
              <span><span className="langZh">评估维度</span><span className="langEn">Dimensions</span></span>
              <b>5 DIMENSIONS</b>
            </div>
            {sceneLandscapeColumns.map((column) => (
              <header className={`sceneMatrixColumnHead sceneMatrixColumnHead-${column.key}`} role="columnheader" key={`head-${column.key}`}>
                <small>{column.index} / {column.eyebrow}</small>
                <h3><B zh={column.title} en={column.titleEn} /></h3>
              </header>
            ))}

            <div className="sceneMatrixRowHead sceneMatrixMarketHead" role="rowheader"><span>01</span><div><b><B zh="市场量" en="Market size" /></b><small className="langZh">MARKET SIZE</small></div></div>
            {sceneLandscapeColumns.map((column) => (
              <section className={`sceneMatrixCell sceneMatrixMarket sceneMatrixCell-${column.key}`} role="cell" key={`market-${column.key}`}>
                <div><strong>{column.marketValue}</strong>{"marketShare" in column ? <b>{column.marketShare}</b> : null}</div>
                <i><span style={{ width: column.key === "brand" ? "40%" : column.key === "performance" ? "60%" : "100%" }} /></i>
              </section>
            ))}

            <div className="sceneMatrixRowHead" role="rowheader"><span>02</span><div><b><B zh="核心阵地" en="Where it runs" /></b><small className="langZh">WHERE</small></div></div>
            {sceneLandscapeColumns.map((column) => <section className="sceneMatrixCell" role="cell" key={`channels-${column.key}`}><p className="langZh">{column.channels.map((line) => <span key={line}>{line}</span>)}</p><p className="langEn">{column.channelsEn.map((line) => <span key={line}>{line}</span>)}</p></section>)}

            <div className="sceneMatrixRowHead" role="rowheader"><span>03</span><div><b><B zh="核心目的" en="Objective" /></b><small className="langZh">OBJECTIVE</small></div></div>
            {sceneLandscapeColumns.map((column) => <section className="sceneMatrixCell" role="cell" key={`objective-${column.key}`}><p className="langZh">{column.objective.map((line) => <span key={line}>{line}</span>)}</p><p className="langEn">{column.objectiveEn.map((line) => <span key={line}>{line}</span>)}</p></section>)}

            <div className="sceneMatrixRowHead" role="rowheader"><span>04</span><div><b><B zh="典型产出" en="Typical output" /></b><small className="langZh">OUTPUT</small></div></div>
            {sceneLandscapeColumns.map((column) => <section className="sceneMatrixCell sceneMatrixOutput" role="cell" key={`output-${column.key}`}><strong>{column.output}</strong><p><B zh={column.outputNote} en={column.outputNoteEn} /></p></section>)}

            <div className="sceneMatrixRowHead" role="rowheader"><span>05</span><div><b><B zh="典型客户" en="Who buys" /></b><small className="langZh">WHO BUYS</small></div></div>
            {sceneLandscapeColumns.map((column) => (
              <section className="sceneMatrixCell sceneMatrixBuyers" role="cell" key={`buyers-${column.key}`}>
                <p className="langZh">{column.buyers.map((line) => <span key={line}>{line}</span>)}</p><p className="langEn">{column.buyersEn.map((line) => <span key={line}>{line}</span>)}</p>
                <a href={column.href}><B zh={column.link} en={column.linkEn} /><b>↘</b></a>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="sceneDemoPages" aria-label="三类广告场景样片与需求拆解">
        {scenarioCases.map((item) => {
          const slug = item.index === "01" ? "brand" : item.index === "02" ? "performance" : "display";
          return (
            <article className={`sceneDemoPage sceneDemoPage${item.index}`} id={`scene-${slug}-demo`} key={item.index}>
              <div className="sceneDemoShell">
                <header className="sceneDemoHeader">
                  <div><span>{item.index}</span><b>{item.label}</b></div>
                  <h3><B zh={item.title} en={item.titleEn} /></h3>
                </header>

                <div className="sceneDemoStage">
                  <figure className={`sceneDemoVisual ${item.media.type === "video" ? "sceneDemoVideo" : "sceneDemoImages"}`}>
                    {item.media.type === "video" ? (
                      <video src={item.media.src} poster={item.media.poster} controls playsInline preload="metadata" aria-label={item.media.aria} />
                    ) : (
                      <div className="sceneDemoImageGrid" aria-label={item.media.aria}>
                        {item.media.cases.map((sample, index) => (
                          <figure key={sample.src}><img src={sample.src} alt={sample.alt} /><figcaption>{item.media.formats[index]}</figcaption></figure>
                        ))}
                      </div>
                    )}
                    <figcaption className="sceneDemoVisualMeta"><span><B zh={item.ratio} en={item.ratioEn} /></span><p><B zh={item.media.meta} en={item.media.metaEn} /></p></figcaption>
                  </figure>

                  <div className="sceneDemoBrief">
                    <div className="sceneDemoThesis">
                      <span>TYPICAL OUTPUT</span>
                      <h4><B zh={item.sampleSpec} en={item.sampleSpecEn} /></h4>
                    </div>

                    <div className="sceneDemoExpanders">
                      <details className="sceneDemoDisclosure" open>
                        <summary><span><b>01</b><B zh="具体制作流程" en="Production workflow" /></span><i aria-hidden="true"></i></summary>
                        <section className="sceneWorkflowPanel">
                          <h4><B zh={item.workflowTitle} en={item.workflowTitleEn} /></h4>
                          <ol className="sceneWorkflowSteps">
                            {item.steps.map((step, index) => (
                              <li key={step.title}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <div><h5><B zh={step.title} en={step.titleEn} /></h5><p><B zh={step.copy} en={step.copyEn} /></p>{step.imageRole ? <aside><b><B zh="图片模型" en="IMAGE MODEL" /></b><p><B zh={step.imageRole} en={step.imageRoleEn} /></p></aside> : null}</div>
                              </li>
                            ))}
                          </ol>
                        </section>
                      </details>

                      <details className="sceneDemoDisclosure" open>
                        <summary className={item.index === "02" ? "hasMeta" : undefined}><span><b>02</b><B zh="模型需求" en="Model requirements" /></span>{item.index === "02" ? <small>VIDEO + IMAGE</small> : null}<i aria-hidden="true"></i></summary>
                        <div className={`sceneDemoRequirementGrid sceneDemoRequirementGrid${item.modelRequirements.length}`}>
                          {item.modelRequirements.map((group, index) => (
                            <article key={group.type || `${item.index}-${index}`}>
                              {group.type ? <h5><B zh={group.type} en={group.typeEn} /></h5> : null}
                              <ul className="langZh">{group.items.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
                              <ul className="langEn">{group.itemsEn.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
                            </article>
                          ))}
                        </div>
                      </details>

                      <details className="sceneDemoDisclosure" open>
                        <summary className="hasMeta"><span><b>03</b><B zh="市场主流模型（竞对）" en="Mainstream models (competitive set)" /></span><small>COMPETITIVE SET</small><i aria-hidden="true"></i></summary>
                        <div className="sceneCompetitorGrid">
                          {item.models.map((model) => <article key={model.type}><span><B zh={model.type} en={model.typeEn} /></span><strong><B zh={model.copy} en={model.copyEn ?? model.copy} /></strong></article>)}
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="customerFlowPage" id="audience" aria-labelledby="customer-flow-title">
        <div className="customerFlowShell">
          <header className="customerFlowHeader">
            <div className="customerFlowIndex"><span>04</span><b><B zh="客群策略" en="CUSTOMER STRATEGY" /></b></div>
            <div><h2 id="customer-flow-title"><span className="langZh">钱从上往下走，<br /><span>价值在中间放大。</span></span><span className="langEn">Money flows down.<br /><span>Value compounds in the middle.</span></span></h2></div>
            <p><B zh="品牌主掌握预算，代理商放大制作规模，AdTech / MarTech 把一次性交付变成持续调用，Paid Media 再把效果信号送回生产。" en="Brands hold the budget, agencies scale production, AdTech / MarTech turns one-off delivery into recurring calls, and paid media feeds performance signals back." /></p>
          </header>

          <div className="customerFlowCanvas">
            <div className="customerFlowRoute" aria-label="品牌主到 Paid Media 的广告预算流向">
              <div className="customerMoneySpine" aria-hidden="true"><span>$</span><i></i><em>↓</em></div>
              <div className="customerFlowStages">
                {customerFlowStages.map((stage) => (
                  <article className={`customerFlowStage ${stage.index === "03" ? "customerFlowStageFocus" : ""}`} key={stage.index}>
                    <div className="customerFlowIdentity"><span>{stage.index}</span><small><B zh={stage.role} en={stage.roleEn} /></small><h3><B zh={stage.title} en={stage.titleEn} /></h3></div>
                    <div className="customerFlowRole"><small><B zh="预算作用" en="BUDGET ROLE" /></small><h4><B zh={stage.flowRole} en={stage.flowRoleEn} /></h4></div>
                    <div className="customerFlowTrend"><small><B zh="关键趋势" en="KEY TREND" /></small><h4><B zh={stage.trend} en={stage.trendEn} /></h4></div>
                    <div className="customerFlowExamples"><small><B zh="代表客户" en="WHO" /></small><b><B zh={stage.examples} en={stage.examplesEn ?? stage.examples} /></b></div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <footer className="customerFlowFooter"><span><B zh="预算源头" en="Budget source" /></span><i>→</i><span><B zh="制作放大" en="Production scale" /></span><i>→</i><strong><B zh="自动化复利" en="Automation compounding" /></strong><i>→</i><span><B zh="媒体反馈" en="Media feedback" /></span><b>↺</b></footer>
        </div>
      </section>

      <section className="audienceSection customerCasesSection" id="customer-cases">
        <div className="shell">
          <div className="customerStories">
            <article className="lorealCasePage" id="customer-brand" aria-labelledby="loreal-case-title">
              <header className="lorealCaseHeader">
                <div className="lorealCaseIndex"><span>01</span><b>BRAND OWNER CASE</b></div>
                <div className="lorealCaseTitle">
                  <h3 id="loreal-case-title"><span className="langZh">欧莱雅客户拆解：<br />先进入 <span>CreTech</span>，再随市场放大。</span><span className="langEn">Inside L’Oréal:<br />land in <span>CreTech</span>, then scale with the market.</span></h3>
                </div>
              </header>

              <div className="lorealReportCanvas">
                <section className="lorealReportCore" aria-labelledby="loreal-report-core-title">
                  <header>
                    <div><span>01 · CUSTOMER SCALE</span><h4 id="loreal-report-core-title"><B zh="一个集团中台，集中全球素材生产。" en="One group platform centralizes global creative production." /></h4></div>
                    <p><strong>50</strong><small>BRANDS</small><i>×</i><strong>150</strong><small>MARKETS</small></p>
                  </header>

                  <div className="lorealReportEngine">
                    <div className="lorealReportEngineTitle"><span>CENTRAL AI PLATFORM</span><h5><B zh="集团 CreTech" en="Group CreTech" /></h5><b><B zh="集中模型消耗池" en="Central model consumption pool" /></b></div>
                    <div className="lorealReportUse">
                      <span><B zh="素材用途" en="USAGE SPLIT" /></span>
                      <div><strong>50%</strong><p><B zh="内部创意实验" en="Internal experiments" /></p></div>
                      <div><strong>50%</strong><p><B zh="外部发布素材" en="Published externally" /></p></div>
                    </div>
                    <div className="lorealReportVolume">
                      <span><B zh="每月模型用量" en="MONTHLY VOLUME" /></span>
                      <div><strong><span className="langZh">50–100<small>万张</small></span><span className="langEn">0.5–1M<small>imgs</small></span></strong><p>IMAGE</p></div>
                      <div><strong><span className="langZh">10–20<small>万条</small></span><span className="langEn">100–200K<small>clips</small></span></strong><p>VIDEO</p></div>
                    </div>
                  </div>

                  <div className="lorealReportLanes" aria-label="欧莱雅日常素材与品牌主片的两条生产路径">
                    <article><span><B zh="高频素材" en="HIGH-FREQUENCY" /></span><p><B zh="品牌团队" en="Brand teams" /> <i>→</i> <strong>CreTech</strong> <i>→</i> <B zh="电商 / 社交 / 官网" en="e-commerce / social / web" /></p></article>
                    <article><span>Hero / TVC</span><p><B zh="品牌团队" en="Brand teams" /> <i>→</i> <strong>WPP / 4A</strong> <i>→</i> Master Film</p></article>
                  </div>
                </section>

              </div>

            </article>

            <article className="wppCasePage wppPresentationPage" id="customer-agency" aria-labelledby="wpp-case-title">
              <header className="wppCaseHeader wppPresentationHeader">
                <div className="wppCaseIndex"><span>3.3</span><b>WPP / HAVAS</b></div>
                <div>
                  <h3 id="wpp-case-title"><span className="langZh">代理商是最大的增长入口：<br /><span>从简单的AI创意预览，到真正投产到Production</span></span><span className="langEn">Agencies are the biggest growth door:<br /><span>from simple AI previews to real production</span></span></h3>
                </div>
                <div className="wppHeaderProofs" aria-label="代理商合作方式与 WPP Open 覆盖规模">
                  <div><span><B zh="合作方式" en="ENGAGEMENT" /></span><strong><B zh="模型 API 为主" en="Model API first" /></strong></div>
                  <div><span>WPP Open</span><strong><B zh="覆盖WPP 80,000+ 员工" en="Reaches 80,000+ WPP staff" /></strong></div>
                </div>
              </header>

              <div className="wppPresentationCanvas wppCondensedCanvas">
                <section className="wppStageStrip wppStrategyStageStrip" aria-label="Creative Production Media 三个业务环节">
                  <article className="wppWorkstreamIdentity wppStageCreative">
                    <header><b>CREATIVE</b></header>
                    <div className="wppStageMetric"><strong>30%</strong><i>→</i><strong>70%</strong></div>
                    <h4><B zh="先切入创意原型工作流" en="Land in creative prototyping first" /></h4>
                    <p><B zh="概念、分镜与 Pre-vis 可讨论、可审片、可拿去赢预算，当前最容易快速放量。" en="Concepts, boards and pre-vis you can discuss, review and win budgets with — the fastest to scale today." /></p>
                    <footer><b><B zh="模型重点" en="MODEL FOCUS" /></b><span><B zh="速度 · 风格控制 · 品牌资产" en="Speed · style control · brand assets" /></span></footer>
                  </article>
                  <article className="wppWorkstreamIdentity wppStageProduction">
                    <header><b>PRODUCTION</b></header>
                    <div className="wppStageMetric"><strong><B zh="10% 至 15%" en="10–15%" /></strong><i>→</i><strong>70%</strong></div>
                    <h4><B zh="向端到端正式制作放大" en="Scale into end-to-end production" /></h4>
                    <p><B zh="以 3D / Digital Twin 锁定产品与镜头，AI 从渲染向拍摄、CG 与后期延伸。" en="3D / digital twins lock product and camera; AI extends from rendering into shoots, CG and post." /></p>
                    <footer><b><B zh="模型重点" en="MODEL FOCUS" /></b><span><B zh="一致性 · 可控镜头 · 4K · 3D渲染" en="Consistency · camera control · 4K · 3D rendering" /></span></footer>
                  </article>
                  <article className="wppWorkstreamIdentity wppStageMedia">
                    <header><b>MEDIA</b></header>
                    <div className="wppStageMetric wppStageMetricCurrent"><strong><B zh="20% 至 30%" en="20–30%" /></strong></div>
                    <h4><B zh="把母版规模化复制" en="Replicate masters at scale" /></h4>
                    <p><B zh="围绕 Master Video，批量适配不同渠道、市场、语言与人群。" en="Adapt master videos across channels, markets, languages and audiences in batches." /></p>
                    <footer><b><B zh="模型重点" en="MODEL FOCUS" /></b><span><B zh="精准编辑 · 本地化" en="Precise editing · localization" /></span></footer>
                  </article>
                </section>
              </div>
            </article>

            <article className="wppWorkPage" id="customer-agency-case" aria-labelledby="wpp-work-title">
              <header className="wppWorkHeader">
                <div className="wppWorkIndex"><span>3.4</span><b>AGENCY CASE STUDY</b></div>
                <div>
                  <h3 id="wpp-work-title"><span className="langZh">代理商怎么工作：<br /><span>导演创意为核新，四步走到帧级交付。</span></span><span className="langEn">How agencies work:<br /><span>director-led creative, four steps to frame-level delivery.</span></span></h3>
                </div>
                <a className="wppWorkDetailLink" href="#solution-brand"><B zh="Sofa 全流程制作方法见品牌方案" en="Full sofa pipeline in the brand solution" /><b>↘</b></a>
              </header>

              <div className="wppWorkCanvas">
                <section className="wppWorkFlow" aria-label="代理商品牌广告四步工作方式">
                  <header><span>TEAM &amp; WORKFLOW</span><h4><B zh="团队组织与工作方式" en="Team structure and ways of working" /></h4></header>
                  <ol>
                    <li>
                      <span>01</span>
                      <div><h5>Creative &amp; Previz</h5><p><B zh="导演主导创意概念，AI Pre-vis 分镜板交客户审签后立项。" en="Director-led concepts; AI pre-vis boards go to the client for sign-off." /></p></div>
                    </li>
                    <li>
                      <span>02</span>
                      <div><h5>Production</h5><p><B zh="实拍 + 3D + AI 渲染混合制作，追求帧级质量与一致性。" en="Live action + 3D + AI rendering, for frame-level quality and consistency." /></p></div>
                    </li>
                    <li>
                      <span>03</span>
                      <div><h5>Post-Production &amp; Audio</h5><p><B zh="VFX 与后期收尾，其中约 20% 的工作量已可由 AI 替代。" en="VFX and finishing; about 20% already AI-replaceable today." /></p></div>
                    </li>
                    <li>
                      <span>04</span>
                      <div><h5>Review &amp; Delivery</h5><p><B zh="品牌、法务与平台三道质检门，全部通过后才能上刊。" en="Brand, legal and platform QC gates before a single airing." /></p></div>
                    </li>
                  </ol>
                  <footer><B zh="少量成片 · 每完成秒制作成本最高 $10K–100K+" en="Few final films · up to $10K–100K+ per finished second" /></footer>
                </section>

                <section className="wppWorkCase" aria-label="WPP 汽车客户 Paris Street VFX 制作案例">
                  <header>
                    <span>CASE · AUTOMOTIVE</span>
                    <h4><B zh="Paris Street VFX：一次实拍，Seedream + Seedance 完成好莱坞级 VFX。" en="Paris Street VFX: one real shoot, then Seedream + Seedance deliver Hollywood-grade VFX." /></h4>
                    <p><B zh="绿色 DS 3 行驶在雨后巴黎奥斯曼街区，路面升起珊瑚粉与浅蓝颜料 VFX。实拍素材仅来自一天的封闭场地拍摄。" en="A green DS 3 drives a wet Haussmann street as coral-pink and pale-blue pigment VFX rise from the road. The only footage: one day on a closed lot." /></p>
                  </header>
                  <div className="wppWorkCaseClips">
                    <figure>
                      <video src="/media/wpp-auto-input.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="封闭场地实拍运动参考片段" />
                      <figcaption>REAL SHOOT · MOTION REF</figcaption>
                    </figure>
                    <i aria-hidden="true">→</i>
                    <figure>
                      <video src="/media/wpp-auto-final.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="Seedance 生成的巴黎街区 VFX 成片片段" />
                      <figcaption>SEEDANCE FINAL CUT</figcaption>
                    </figure>
                  </div>
                  <p className="wppWorkCasePipeline"><b>PIPELINE</b><B zh="Seedream 5.0 生成巴黎街景板与伪目标帧" en="Seedream 5.0 builds the Paris street plate and pseudo target frames" /> <i>→</i> <B zh="Seedance 2.0 以视频参考锁运动、图像参考锁质感" en="Seedance 2.0 locks motion via video ref, look via image refs" /></p>
                  <div className="wppWorkCaseMetrics">
                    <div><span>HERO SHOT</span><strong><B zh="3–5 天" en="3–5 days" /></strong><small><B zh="传统 CG 需 6–10 周" en="vs 6–10 weeks in CG" /></small></div>
                    <div><span><B zh="总成本" en="TOTAL COST" /></span><strong>$30–65K</strong><small><B zh="传统 CG $410K–$1.06M" en="vs $410K–$1.06M in CG" /></small></div>
                    <div><span><B zh="单条变体" en="PER VARIANT" /></span><strong>~$1–3</strong><small><B zh="换色 / 换景仅需 Token 成本" en="recolor / rescene at token cost" /></small></div>
                  </div>
                </section>
              </div>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>03</span><b>ADTECH / PAID MEDIA</b></div>
                <div>
                  <p>CAMPAIGN AGENT · 1 → 3</p>
                  <h3 id="adtech-case-title"><span className="langZh">抓住 Campaign Agent 的增长窗口：<br /><span>让素材自动化成为必要组成。</span></span><span className="langEn">Seize the campaign-agent window:<br /><span>make creative automation a required part.</span></span></h3>
                </div>
                <aside className="adtechStageBadge" aria-label="Campaign Agent 市场阶段">
                  <span>MARKET STAGE</span><strong>1 → 3</strong><b><B zh="进入可复制阶段" en="entering replication" /></b>
                </aside>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="adtechAgentPanel" aria-labelledby="adtech-agent-title">
                  <header>
                    <span>CAMPAIGN AGENT · END TO END</span>
                    <h4 id="adtech-agent-title"><B zh="Campaign Agent 端到端在做什么。" en="What a campaign agent does end to end." /></h4>
                  </header>

                  <div className="adtechManagerStrip" aria-label="市场主流 Ad Manager 平台">
                    <span><B zh="主流 AD MANAGER 都在内建 Campaign Agent" en="EVERY MAJOR AD MANAGER IS BUILDING ONE IN" /></span>
                    <ul>
                      <li><b>TikTok</b><small>Ads Manager · Smart+</small></li>
                      <li><b>Meta</b><small>Ads Manager · Advantage+</small></li>
                      <li><b>YouTube</b><small>Google Ads · PMax</small></li>
                      <li><b>AppLovin</b><small>AXON</small></li>
                      <li><b>AdTech</b><small><B zh="钛动 Navos · Smartly.io" en="TecDo Navos · Smartly.io" /></small></li>
                    </ul>
                  </div>

                  <ol className="adtechAgentSteps" aria-label="Campaign Agent 端到端五步流程">
                    <li>
                      <span>01</span>
                      <div><h5><B zh="市场洞察" en="Market insight" /></h5><p><B zh="追踪社媒热点、舆情与竞品信号，找出高潜创意方向。" en="Track social trends, sentiment and competitor signals for high-potential directions." /></p></div>
                    </li>
                    <li>
                      <span>02</span>
                      <div><h5><B zh="广告脚本" en="Ad scripts" /></h5><p><B zh="自动生成 Hook、分镜与 CTA 的可执行脚本。" en="Auto-generate executable scripts: hooks, boards and CTAs." /></p></div>
                    </li>
                    <li className="adtechAgentCore">
                      <span>03</span>
                      <div><h5><B zh="素材自动化生产" en="Automated creative production" /></h5><p><B zh="调用 Seedream + Seedance 批量生成可投素材，素材自动化嵌入主链路，成为每次投放的必要能力。" en="Seedream + Seedance batch-produce ready-to-run assets — creative automation embedded in the main loop, required on every launch." /></p></div>
                      <b><B zh="BYTEPLUS 切入点" en="BYTEPLUS ENTRY" /></b>
                    </li>
                    <li>
                      <span>04</span>
                      <div><h5><B zh="投放与测试" en="Launch and test" /></h5><p><B zh="小预算多变体上线，近实时归因筛选胜出素材。" en="Small-budget multi-variant launches with near-real-time attribution." /></p></div>
                    </li>
                    <li>
                      <span>05</span>
                      <div><h5><B zh="爆款复刻放大" en="Clone winners and scale" /></h5><p><B zh="AI 视频素材占比持续上升，胜出结构换品、换人、换市场复制，模型调用与收入同步放大。" en="AI share of live video keeps rising; winners swap product, cast and market — model calls and revenue scale together." /></p></div>
                    </li>
                  </ol>
                </section>

              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell solutions" id="solution-focus">
        <div className="solutionPages">
          <article className="solutionPage brandSolutionPage" id="solution-brand" aria-labelledby="brand-solution-title">
            <header className="brandSolutionHeader">
              <div className="brandSolutionIndex"><span>01</span><b>BRAND PRODUCTION</b></div>
              <div className="brandSolutionTitle">
                <p className="langZh">CG + AI 混合制作</p><p className="langEn">CG + AI HYBRID PRODUCTION</p>
                <h3 className="langZh" id="brand-solution-title">品牌广告制作方案</h3>
                <h3 className="langEn">Brand Advertising Production Solution</h3>
              </div>
              <a className="solutionDetailLink" href="https://sofa-demo.byteplus-demo.com/" target="_blank" rel="noreferrer"><span className="langZh">查看方案详情</span><span className="langEn">View solution details</span><b>↗</b></a>
            </header>

            <div className="brandSolutionBody">
              <section className="brandSofaPanel" aria-label="Sofa 品牌广告成片">
                <header><span>SOFA DEMO</span><b className="langZh">从 Packshot 到品牌成片</b><b className="langEn">From packshot to brand film</b></header>
                <video src="/media/sofa/final-film.mp4" poster="/media/sofa/final-film-poster.jpg" controls loop playsInline preload="metadata" aria-label="Sofa CG 与 Seedance 品牌广告成片" />
              </section>

              <section className="brandArchitecturePanel" aria-label="Sofa CG 与 AI 五阶段制作架构">
                <header><span>PRODUCTION ARCHITECTURE</span><b className="langZh">CG 锁定控制，AI 完成输出</b><b className="langEn">CG locks control. AI delivers output.</b></header>
                <div className="brandOriginalArchitecture">
                  <div className="brandOriginalFlow">
                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">①</span><b className="langZh">输入资产</b><b className="langEn">Input Assets</b></header>
                      <figure className="arch-input"><img src="/media/sofa/input-texture.jpg" alt="材质参考" /><figcaption>Texture · material<span className="arch-to">→ AI composite ④</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-environment.jpg" alt="环境参考" /><figcaption>Environment<span className="arch-to">→ scene ③ · video ⑤</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-packshot.jpg" alt="商品 Packshot" /><figcaption>Product · packshot<span className="arch-to">→ vision + 3D ②</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-character.jpg" alt="人物参考" /><figcaption>Character<span className="arch-to">→ reference</span></figcaption></figure>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">②</span><b className="langZh">AI 理解 + 数字孪生</b><b className="langEn">AI Understanding + Digital Twin</b></header>
                      <div className="arch-node"><div className="arch-node__t arch-node__t--model">Vision LLM · Seed 2.1</div><div className="arch-node__m">Visual understanding · spec</div></div>
                      <div className="arch-down" aria-hidden="true">↓</div>
                      <div className="arch-node arch-node--ghost arch-spec"><div className="arch-node__t">Vision spec · anchor</div><div className="arch-spec__b">Solid oak sofa · linen <span>#E8E5DF</span><br />locks colour / material / size / structure</div></div>
                      <div className="arch-node arch-twin"><div className="arch-node__t arch-node__t--model">3D model · Seed3D 2.0</div><div className="arch-node__m">Image → 3D digital twin</div><div className="arch-twin__viewer"><img src="/media/sofa/digital-twin-poster.png" alt="沙发 3D 数字孪生" /></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">③</span><b className="langZh">CG 控制 · Blender</b><b className="langEn">CG Control · Blender</b></header>
                      <div className="arch-node"><div className="arch-node__t">Set design · camera control</div><div className="arch-node__m">Multi-angle · product consistency</div><div className="arch-thumbs arch-thumbs--row"><img src="/media/sofa/digital-twin.png" alt="" /><img src="/media/sofa/cg-angle.jpg" alt="" /><img src="/media/sofa/cg-scene.jpg" alt="" /></div></div>
                      <div className="arch-node"><div className="arch-node__t">Lighting control</div><div className="arch-node__m">Mood · shadows</div><div className="arch-thumbs arch-thumbs--2"><img src="/media/sofa/lighting-1.jpg" alt="" /><img src="/media/sofa/lighting-2.jpg" alt="" /></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">④</span><b className="langZh">图像渲染</b><b className="langEn">Image Rendering</b></header>
                      <div className="arch-node"><div className="arch-node__t">Blender render</div><div className="arch-node__m">Composite plate · any angle</div><div className="arch-thumbs arch-thumbs--2x2"><img src="/media/sofa/cg-angle.jpg" alt="" /><img src="/media/sofa/cg-scene.jpg" alt="" /><img src="/media/sofa/render-detail.jpg" alt="" /><img src="/media/sofa/digital-twin.png" alt="" /></div></div>
                      <div className="arch-down" aria-hidden="true">↓</div>
                      <div className="arch-node"><div className="arch-node__t arch-node__t--model">Seedream 5.0 Pro</div><div className="arch-node__m">AI compositing</div><div className="arch-tags"><span>quality boost</span><span>environment</span><span>product</span><span>material</span><span>upscale</span></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">⑤</span><b className="langZh">最终输出 · KV + 视频</b><b className="langEn">Final Output · KV + Video</b></header>
                      <div className="arch-node"><div className="arch-node__t">Final KV</div><div className="arch-kv"><figure><img src="/media/sofa/kv-side.jpg" alt="侧面 KV" /></figure><figure><img src="/media/sofa/kv-mcu.jpg" alt="中近景 KV" /></figure><figure><img src="/media/sofa/kv-wide.jpg" alt="宽景 KV" /></figure><figure><img src="/media/sofa/kv-ultrawide.jpg" alt="超宽景 KV" /></figure></div></div>
                      <div className="arch-node arch-node--ghost arch-merge"><div className="arch-node__t">+ Prompt</div></div>
                      <div className="arch-node"><div className="arch-node__t arch-node__t--model">Seedance 2.0</div><div className="arch-node__m">Video generation</div></div>
                      <div className="arch-node"><div className="arch-node__t">Editing · sound</div><div className="arch-node__m">CapCut</div></div>
                      <div className="arch-node arch-node--final"><div className="arch-node__t">▸ Production-ready videos</div></div>
                    </section>
                  </div>
                  <footer>CG DELIVERS CONTROL · AI DELIVERS OUTPUT</footer>
                </div>
                <ArchitectureImageLightbox />
              </section>

              <section className="brandDemoStrip" aria-label="品牌广告四个视频 Demo">
                <header><span>4 × BRAND DEMOS</span><b className="langZh">Branding Ads 样片</b><b className="langEn">Branding Ads demos</b></header>
                <div className="brandDemoCompactGrid">
                  {solutionVideoDemos.brand.map((demo) => (
                    <figure className="brandDemoCompactCard" key={demo.src}>
                      <div><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}品牌广告视频 Demo`} /><span>{demo.order}</span></div>
                      <figcaption><small>{demo.label}</small><b className="langZh">{demo.title}</b><b className="langEn">{demo.titleEn}</b><p className="langZh">{demo.meta}</p><p className="langEn">{demo.metaEn}</p></figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <article className="solutionPage performanceSolutionPage" id="solution-performance">
            <header className="performanceSolutionHeader">
              <div className="performanceSolutionIndex"><span>03</span><b>PERFORMANCE ADS</b></div>
              <div><p><B zh="五步运作链 × 四个样片" en="5-STEP LOOP × 4 DEMOS" /></p><h3><span className="langZh">效果广告制作方案<br /><span>流程、样片与能力证据。</span></span><span className="langEn">Performance ads production<br /><span>process, demos and proof.</span></span></h3></div>
              <div className="solutionHeaderAside"><p><B zh="从洞察、生产到投放复刻，形成一条可持续迭代的素材生产闭环。" en="From insight and production to launch and cloning — one continuously iterating creative loop." /></p><a className="solutionDetailLink" href="https://bytedance.sg.larkoffice.com/docx/YpqAdyBReoQt3gxDZUql9wMagIf" target="_blank" rel="noreferrer"><B zh="查看方案详情" en="View solution details" /><b>↗</b></a></div>
            </header>

            <div className="performanceSolutionBody">
              <section className="performanceProductionFlow" aria-label="效果广告五步运作链">
                <header className="performanceFlowTitle">
                  <div><span>5 STEPS</span><b><B zh="洞察 → 生产 → 测试 → 复刻" en="Insight → produce → test → replicate" /></b></div>
                </header>
                <ol>
                  <li className="performanceFlowInsight">
                    <header><span>01</span><b><B zh="热点洞察" en="Trend insight" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="发现高潜创意" en="Find high-potential ideas" /></strong><p><B zh="热点 · 舆情 · 竞品信号" en="Trends · sentiment · competitors" /></p></div>
                    <footer>Seed</footer>
                  </li>
                  <li className="performanceFlowScript">
                    <header><span>02</span><b><B zh="广告脚本" en="Ad scripts" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="生成可执行脚本" en="Executable scripts" /></strong><p><B zh="Hook · 分镜 · CTA" en="Hooks · boards · CTAs" /></p></div>
                    <footer>Seed</footer>
                  </li>
                  <li className="performanceFlowFocus">
                    <header><span>03</span><b><B zh="AI 内容生产" en="AI production" /></b><em><B zh="核心" en="CORE" /></em></header>
                    <div className="performanceFlowSummary"><strong><B zh="批量生成可投素材" en="Batch ready-to-run assets" /></strong><p><B zh="画面 · 视频 · 音频" en="Image · video · audio" /></p></div>
                    <footer>Seedream + Seedance</footer>
                  </li>
                  <li className="performanceFlowTest">
                    <header><span>04</span><b><B zh="投放测试" en="Launch tests" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="小预算筛选胜出素材" en="Small budgets pick winners" /></strong><p><B zh="归因 · 本地化 · 预审" en="Attribution · localization · pre-check" /></p></div>
                    <footer>Campaign Agent</footer>
                  </li>
                  <li className="performanceFlowReplicate">
                    <header><span>05</span><b><B zh="爆款复刻" en="Clone winners" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="保留赢面，替换变量" en="Keep the win, swap variables" /></strong><p><B zh="换品 · 换人 · 换市场" en="Product · cast · market" /></p></div>
                    <footer><B zh="爆款复刻 Agent" en="Winner-cloning agent" /></footer>
                  </li>
                </ol>
                <footer className="performanceFeedbackRail"><strong><B zh="↺ 跑赢素材回到洞察，持续迭代" en="↺ Winners feed back into insight — keep iterating" /></strong></footer>
              </section>

              <section className="performanceEvidenceGallery" aria-label="效果广告四个视频 Demo 与能力证据">
                {solutionVideoDemos.performance.map((demo) => (
                  <article className="performanceEvidenceCard" key={demo.src}>
                    <div className="performanceEvidenceVideo"><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}效果广告视频 Demo`} /><span>{demo.order}</span></div>
                    <div className="performanceEvidenceMeta"><h4><B zh={demo.title} en={demo.titleEn} /></h4><strong><B zh={demo.proofTitle} en={demo.proofTitleEn} /></strong></div>
                    <details className="performanceProofDisclosure">
                      <summary><span><B zh="查看关键帧" en="VIEW KEY FRAMES" /></span><i>＋</i></summary>
                      <div className="performanceProofDrawer">
                        <div className="performanceProofFrames" aria-label={`${demo.title}连续截图`}>
                          {demo.frames.map((frame, frameIndex) => <figure key={frame}><img src={frame} alt={`${demo.title}连续截图 ${frameIndex + 1}`} /><figcaption>{String(frameIndex + 1).padStart(2, "0")}</figcaption></figure>)}
                        </div>
                        <div className="performanceProofCopy"><h5><B zh={demo.proofTitle} en={demo.proofTitleEn} /></h5><ul className="langZh">{demo.proofs.map((proof) => <li key={proof}>{proof}</li>)}</ul><ul className="langEn">{demo.proofsEn.map((proof) => <li key={proof}>{proof}</li>)}</ul></div>
                      </div>
                    </details>
                  </article>
                ))}
              </section>

            </div>
          </article>

          <article className="solutionPage displaySolutionPage" id="solution-display">
            <header className="displaySolutionHeader">
              <div className="displaySolutionIndex"><span>04</span><b>DISPLAY ADS</b></div>
              <div><p>VISUAL MASTER × DETERMINISTIC SCALE</p><h3><span className="langZh">Display Ads 制作方法<br /><span>一个母版，规模化交付。</span></span><span className="langEn">Display ads method<br /><span>one master, delivered at scale.</span></span></h3></div>
              <div className="solutionHeaderAside"><p><B zh="Seedream 负责视觉创意；Template + DCO 把母版准确扩展到每个尺寸、语言、SKU 与人群。" en="Seedream owns visual creative; Template + DCO expand the master into every size, language, SKU and audience." /></p><a className="solutionDetailLink" href="https://bytedance.sg.larkoffice.com/docx/BDRLd6Y8Ponm2QxRUFBl1AJXgyh" target="_blank" rel="noreferrer"><B zh="查看方案详情" en="View solution details" /><b>↗</b></a></div>
            </header>

            <div className="displaySolutionBody">
              <section className="displayArchitectureFocus" aria-label="Display Ads 五步生产架构">
                <header>
                  <div><span>PRODUCTION ARCHITECTURE</span><h4><B zh="一个 Brief，变成 Creative Matrix。" en="One brief becomes a creative matrix." /></h4></div>
                  <p><b>MODEL</b> <B zh="做视觉创意" en="for visual creative" /> <i>→</i> <b>SYSTEM</b> <B zh="做确定性生产" en="for deterministic production" /></p>
                </header>

                <div className="displaySimpleFlow">
                  <article className="displaySimpleInput">
                    <span>01 · INPUT</span><h5>Campaign Inputs</h5>
                    <ul><li>Campaign Brief</li><li>Brand Kit</li><li>Product Feed</li></ul>
                  </article>
                  <article className="displaySimplePlanner">
                    <span>02 · DECIDE</span><h5>Creative Planner</h5>
                    <p><B zh="拆解目标与渠道，输出构图策略和变体计划。" en="Breaks goals and channels into composition strategy and variant plans." /></p><strong>CREATIVE SPEC</strong>
                  </article>
                  <article className="displaySimpleSeedream">
                    <span>03 · VISUAL</span><h5>Seedream</h5>
                    <p><B zh="场景 · 构图 · 光影 · 材质" en="Scene · composition · light · material" /></p><small><B zh="负责非确定性创意" en="owns non-deterministic creative" /></small><strong>APPROVED MASTER</strong>
                  </article>
                  <article className="displaySimpleDco">
                    <span>04 · SCALE</span><h5>Template + DCO</h5>
                    <p><B zh="Logo · 价格 · CTA · 多语言文字" en="Logo · price · CTA · multilingual text" /></p><small><B zh="尺寸 × 语言 × SKU × 人群" en="size × language × SKU × audience" /></small><strong>VARIANT FACTORY</strong>
                  </article>
                  <article className="displaySimpleQa">
                    <span>05 · DELIVER</span><h5>QA Gate</h5>
                    <p>VLM · Rules</p><small><B zh="统一质检与资产交付" en="unified QC and delivery" /></small><strong>ASSET HUB / API</strong>
                  </article>
                </div>

                <footer className="displaySimpleFeedback">
                  <span>↺</span><div><b><B zh="投放反馈回到 Creative Planner" en="Feedback returns to the creative planner" /></b><small><B zh="胜出创意只替换已验证变量" en="winners swap only validated variables" /></small></div>
                  <ul><li>CTR</li><li>CVR</li><li>CPA</li></ul>
                </footer>
              </section>

              <section className="displayDemoGallery" id="solution-display-demos" aria-label="Display Ads 三张图片 Demo">
                <header><div><span>3 × IMAGE DEMOS</span><h4><B zh="从母版到多规格交付。" en="From master to multi-spec delivery." /></h4></div><small><B zh="点击图片放大" en="Click to zoom" /></small></header>
                <div className="displayDemoGalleryGrid">
                  <a className="displayDemoTile displayDemoSquare" href="#display-lightbox-commerce" aria-label="放大商品信息流 Demo">
                    <figure><img src="/media/demo-display-commerce.jpg" alt="商品信息流 Display 广告案例" /><figcaption><b><B zh="商品信息流" en="Commerce feed" /></b><small>Retail Media</small><i>↗</i></figcaption></figure>
                  </a>
                  <a className="displayDemoTile displayDemoLandscape" href="#display-lightbox-beauty" aria-label="放大横版商品 KV Demo">
                    <figure><img src="/media/demo-display-beauty.jpg" alt="16比9美妆横版 Display 广告案例" /><figcaption><b><B zh="横版商品 KV" en="Landscape product KV" /></b><small>16:9 · Social / Retail Media</small><i>↗</i></figcaption></figure>
                  </a>
                  <a className="displayDemoTile displayDemoBanner" href="#display-lightbox-diwali" aria-label="放大区域促销套版 Demo">
                    <figure><img src="/media/demo-display-diwali.jpg" alt="3比1本地化促销 Display Banner 案例" /><figcaption><b><B zh="区域促销套版" en="Regional promo template" /></b><small>3:1 · Programmatic</small><i>↗</i></figcaption></figure>
                  </a>
                </div>
              </section>
            </div>

            <div className="displayLightbox" id="display-lightbox-commerce" role="dialog" aria-modal="true" aria-label="商品信息流放大图">
              <a className="displayLightboxBackdrop" href="#solution-display-demos" aria-label="关闭放大图" />
              <figure><a href="#solution-display-demos" aria-label="关闭放大图">×</a><img src="/media/demo-display-commerce.jpg" alt="放大的商品信息流 Display 广告案例" /><figcaption>商品信息流 · Retail Media</figcaption></figure>
            </div>
            <div className="displayLightbox" id="display-lightbox-beauty" role="dialog" aria-modal="true" aria-label="横版商品 KV 放大图">
              <a className="displayLightboxBackdrop" href="#solution-display-demos" aria-label="关闭放大图" />
              <figure><a href="#solution-display-demos" aria-label="关闭放大图">×</a><img src="/media/demo-display-beauty.jpg" alt="放大的横版商品 KV Display 广告案例" /><figcaption>横版商品 KV · 16:9 Social / Retail Media</figcaption></figure>
            </div>
            <div className="displayLightbox" id="display-lightbox-diwali" role="dialog" aria-modal="true" aria-label="区域促销套版放大图">
              <a className="displayLightboxBackdrop" href="#solution-display-demos" aria-label="关闭放大图" />
              <figure><a href="#solution-display-demos" aria-label="关闭放大图">×</a><img src="/media/demo-display-diwali.jpg" alt="放大的区域促销 Display Banner 案例" /><figcaption>区域促销套版 · 3:1 Programmatic</figcaption></figure>
            </div>
          </article>

          <article className="playableSolution" id="solution-playable">
            <header className="playableHeader">
              <div className="playableIndex"><span>06</span><b>PLAYABLE</b></div>
              <div className="playableTitle">
                <p>AI PLAYABLE FACTORY</p>
                <h3 className="langZh">一个游戏素材，<br /><span>生成整套可投放广告。</span></h3>
                <h3 className="langEn">One game asset.<br /><span>A full playable ad set.</span></h3>
              </div>
              <div className="playableHeaderCopy">
                <p className="langZh">从一个截图或视频参考出发，自动形成 Hook × 视觉 × CTA 变体矩阵，并交付可直接试玩的 Playable 广告。</p>
                <p className="langEn">Turn one screenshot or video reference into a Hook × Visual × CTA matrix and deployable playable ads.</p>
              </div>
            </header>

            <div className="playableBody">
              <section className="playableArchitecture" aria-label="Playable 广告自动生产架构">
                <header><span>PRODUCTION ARCHITECTURE</span><b className="langZh">一个素材输入，自动编排整套广告变体</b><b className="langEn">One input, an automatically orchestrated ad matrix</b></header>
                <div className="playableFactoryGrid">
                  <div className="playableFactoryInput">
                    <span>INPUT</span>
                    <div className="playablePhone"><i aria-hidden="true" /><img src="https://carey.tos-ap-southeast-1.bytepluses.com/playables/factory/input_fish_sm.jpg" alt="节奏钓鱼游戏素材输入" /></div>
                    <p><b className="langZh">一个游戏素材</b><b className="langEn">One game asset</b><small className="langZh">截图 / 视频 / URL 参考</small><small className="langEn">Screenshot / video / URL reference</small></p>
                  </div>

                  <i className="playableFlowArrow" aria-hidden="true"><span /></i>

                  <div className="playableFactoryStages">
                    <header><span className="langZh">自动流水线</span><span className="langEn">AUTOMATED PIPELINE</span><i><b /><b /><b /></i></header>
                    <ol>
                      <li><em>1</em><p><b className="langZh">市场调研</b><b className="langEn">Market research</b><small className="langZh">拆解爆量素材的 Hook 与卖点</small><small className="langEn">Decode winning Hooks and selling points</small></p></li>
                      <li><em>2</em><p><b className="langZh">创意策划</b><b className="langEn">Creative planning</b><small className="langZh">生成 Hook × 视觉 × CTA 变体脚本</small><small className="langEn">Create Hook × Visual × CTA scripts</small></p></li>
                      <li><em>3</em><p><b className="langZh">自动生产</b><b className="langEn">Automated production</b><small className="langZh">输出合规可投的 Playable 包</small><small className="langEn">Deliver compliant playable packages</small></p></li>
                    </ol>
                  </div>

                  <i className="playableFlowArrow" aria-hidden="true"><span /></i>

                  <div className="playableFactoryOutput">
                    <span>OUTPUT</span>
                    <div className="playableMatrix" aria-label="九种 Playable 广告视觉变体">
                      {playableOutputClips.map((src, index) => <video key={src} src={src} autoPlay loop muted playsInline preload={index < 3 ? "metadata" : "none"} aria-label={`Playable 广告视觉变体 ${index + 1}`} />)}
                    </div>
                    <p><b className="langZh">可投放广告包</b><b className="langEn">Deployable ad package</b><small>Hook × Visual × CTA Matrix</small></p>
                  </div>
                </div>
              </section>

              <section className="playableDemoPanel" aria-label="两个 Playable 试玩案例">
                <header><span>2 × LIVE DEMOS</span></header>
                <div className="playableDemoGrid">
                  {playableDemos.map((demo) => (
                    <article className="playableDemoCard" key={demo.title}>
                      <div className="playableDemoFrame"><iframe src={demo.src} title={`${demo.title} Playable Demo`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation" /></div>
                      <footer><span>DEMO {demo.index}</span><p><b>{demo.title}</b><small className="langZh">{demo.titleZh}</small><small className="langEn">{demo.titleEn}</small></p><a href={demo.src} target="_blank" rel="noreferrer" aria-label={`新窗口打开 ${demo.title} Demo`}>↗</a></footer>
                    </article>
                  ))}
                </div>
                <a className="playableAllDemos" href="https://playable.byteplus-demo.com/" target="_blank" rel="noreferrer"><span className="langZh">查看 Playable 方案详情与更多案例</span><span className="langEn">View solution details and more demos</span><b>↗</b></a>
              </section>
            </div>
          </article>
        </div>
        <article className="productGatePage" id="product-requirements" aria-labelledby="product-gate-title">
          <header className="productGateHeader">
            <div className="productGateIndex"><span>07</span><b>PRODUCTION GATES</b></div>
            <div><p>FINAL · SEEDANCE REQUIREMENTS</p><h3 id="product-gate-title"><B zh="模型短期能力短板" en="Near-term model capability gaps" /></h3></div>
          </header>

          <div className="productGateBody">
            <div className="productGateMatrix" aria-label="Seedance 广告规模生产的四个产品门槛">
              {unresolvedGaps.map((gap) => (
                <section className={`productGateCard productGateCard${gap.no}`} data-index={gap.no} key={gap.no}>
                  <header><span>{gap.no}</span><b>{gap.signal}</b></header>
                  <h4><B zh={gap.title} en={gap.titleEn} /></h4>
                  <p><B zh={gap.copy} en={gap.copyEn} /></p>
                  <ul className="langZh">{gap.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                  <ul className="langEn">{gap.examplesEn.map((example) => <li key={example}>{example}</li>)}</ul>
                  {gap.link && <a href={gap.link} target="_blank" rel="noreferrer"><B zh={gap.linkLabel} en={gap.linkLabelEn ?? gap.linkLabel} /></a>}
                </section>
              ))}
              <div className="productGateCenter" aria-hidden="true"><span>SCALE</span><b>PRODUCTION</b><i>×</i></div>
            </div>

          </div>
        </article>
      </section>

      <section className="roadmapPage" id="roadmap" aria-labelledby="roadmap-title">
        <header className="roadmapPageHeader">
          <div className="roadmapPageIndex"><span>08</span><b>ROADMAP</b></div>
          <div><p>FROM SOTA RENDERING TO OMNI ENGINE</p><h2 id="roadmap-title"><span className="langZh">Seedance 从 SOTA 渲染层，<br /><span>走向端到端制作引擎。</span></span><span className="langEn">Seedance: from SOTA rendering<br /><span>to an end-to-end production engine.</span></span></h2></div>
          <p><B zh="创意导演、3D 结构表现、编辑和渲染四层融合为统一 Omni 模型，对标 Google Omni 路线。" en="Creative direction, 3D structure, editing and rendering fuse into one Omni model — benchmarked against Google’s Omni path." /></p>
        </header>

        <div className="roadmapPageBody">
          <section className="roadmapEvolution" aria-label="Seedance 从 SOTA 渲染层模型走向统一 Omni 制作引擎并替换百分之七十制作劳动力">
            <article className="roadmapState roadmapStateCurrent">
              <header><span>CURRENT</span><b>SOTA RENDERING</b></header>
              <strong>10–15%</strong>
              <h3><B zh="Seedance 强在渲染层。" en="Seedance leads at rendering." /></h3>
              <p><B zh="仍是单点模型，尚未贯通完整制作链路。" en="Still a point model — not yet the full pipeline." /></p>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapEngine">
              <header><span>FOUR-LAYER FUSION</span><b>SEEDANCE → UNIFIED OMNI</b></header>
              <div className="roadmapEngineCore"><small>ORCHESTRATE</small><strong>OMNI</strong><span>CORE PRODUCTION ENGINE</span></div>
              <div className="roadmapEngineInputs">
                <p><span>01</span><b><B zh="创意导演层" en="Creative direction" /></b></p>
                <p><span>02</span><b><B zh="3D 结构表现层" en="3D structure" /></b></p>
                <p><span>03</span><b><B zh="编辑层" en="Editing" /></b></p>
                <p><span>04</span><b><B zh="渲染层" en="Rendering" /></b></p>
              </div>
              <footer><B zh="四层融合，成为端到端核心制作引擎" en="Four layers fuse into the core production engine" /></footer>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapState roadmapStateFuture">
              <header><span>TARGET</span><b>LABOR REPLACEMENT</b></header>
              <strong>70%</strong>
              <h3><B zh="替换制作劳动力。" en="Replaces production labor." /></h3>
              <p><B zh="从局部渲染走向端到端规模生产。" en="From partial rendering to end-to-end scale." /></p>
            </article>
          </section>

          <footer className="roadmapPageFooter"><span><B zh="SOTA 渲染层" en="SOTA rendering" /></span><i>→</i><strong><B zh="统一 Omni 模型" en="Unified Omni model" /></strong><i>→</i><span><B zh="70% 制作劳动力替换" en="70% labor replacement" /></span></footer>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">B</span><span>ADS Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
