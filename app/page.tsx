import InlineTextEditor from "./InlineTextEditor";
import ArchitectureImageLightbox from "./ArchitectureImageLightbox";

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

const scenarioCases = [
  {
    index: "01",
    label: "BRAND FILM",
    title: "品牌广告",
    ratio: "15 / 30S",
    desc: "以 CTV、流媒体大屏和 YouTube Hero Video 为主。创意与品牌心智优先，制作主体通常是头部代理商，最终成片必须进入专业审片与交付链路。",
    media: {
      type: "video" as const,
      src: "/media/brand-reference.mp4",
      poster: "/media/brand-poster.jpg",
      aria: "品牌广告参考样片",
      meta: "多镜头一致性 · 品牌保真 · 专业交付",
    },
    sampleSpec: "15 / 30 秒标准格式，非常强调品牌规范和导演级创意，每一帧的画质和一致性都有要求。",
    channels: [
      { title: "CTV 和流媒体大屏广告", copy: "TV 电视台，以及 Roku、Netflix、Disney、Prime 等流媒体平台。" },
      { title: "YouTube · 约 50%", copy: "以片头广告 Bumper、插播 In-stream 等长视频广告位为主。" },
    ],
    objectives: ["曝光量与品牌知名度", "建立长期品牌心智"],
    customers: [
      { role: "头部 5 家", names: "WPP · Havas · Publicis · Dentsu · Omnicom" },
      { role: "次头部", names: "Brandtech（Pencil）· 博报堂" },
      { role: "广告主（品牌方）", names: "欧莱雅（L’Oréal）· 可口可乐（Coca-Cola）等" },
    ],
    workflowTitle: "AI 模型 Workflow 逐渐代替实拍和渲染",
    steps: [
      { title: "Discovery 和 Ideation", copy: "代理商派遣 Strategy 团队与客户共创创意 Idea，先明确受众、品牌主张和导演概念。" },
      { title: "导演级的创意设计", copy: "把导演脚本、分镜、场景和产品镜头先用 AI 生成可审片素材，与品牌主讨论并持续优化。", imageRole: "生成分镜故事板、概念图、关键视觉 KV 和场景 / 服化道参考图。这是图片模型渗透最深的一步——单张成本低、迭代快，直接替代人工分镜师和概念设计工时。" },
      { title: "生产拍摄", copy: "结合实拍、3D 建模和 AI 模型渲染，实现帧级高质量与强一致性成片。", imageRole: "产出视频模型的首帧和关键帧，以及产品硬照 Packshot 精修、虚拟布景和环境贴图。" },
      { title: "后期、编辑和音效", copy: "完成 VFX 特效渲染，其中约 20% 可由 AI 模型替代。", imageRole: "逐帧局部修补、去穿帮、替换不合规元素、抠像与画面延展 Outpainting，完成多比例适配。" },
      { title: "审片和交付", copy: "按品牌规范、法务声明和平台规格质检，输出可进入 CTV / DV360 的交付包。", imageRole: "衍生多尺寸 KV、海报和视频封面缩略图，随视频成片一起打包交付。" },
    ],
    modelRequirements: [
      { type: "视频模型", items: ["高一致性：30 秒多镜头中人物 / 产品不漂，音画同步，能通过大屏质检和品牌审核。", "3D 白模参考：结合物品、环境、打光等现有 3D 资产解决空间物理规律，支持视频模型精准渲染。", "4K 高码率和高比特色深：满足 DV360 常见的 H.264、24 / 30 fps、至少 20 Mbps、10–16 bit 色深等要求。"] },
      { type: "图片模型", items: ["导演级审美和可控构图：支持景别、焦段、打光等镜头语言的参数化控制，出图可直接进入提案和审片。", "品牌资产一致性：商品、包装、Logo、品牌色接近 Pantone 级还原，并支持品牌素材定制化微调。", "4K 高分辨率和专业色彩：支持广色域和高比特色深，可进入专业后期二次调色。", "可分层和局部重绘：主体 / 背景 / 文字分层输出，修改时不必整张重抽。", "版权和合规：训练数据可溯源、支持商用授权与 C2PA 水印，可通过品牌方法务审核。"] },
    ],
    models: [{ type: "视频", copy: "Veo 3.1 · Runway" }, { type: "图片", copy: "nano banana 2" }],
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "效果广告",
    ratio: "10–100 变体",
    desc: "以 tCPA、tROAS、CTR、CVR 和 CPI 定义价值。客户需要的不是单条 Demo，而是一套能持续产出 Hook、跑实验、看归因并复刻胜出结构的系统。",
    media: {
      type: "video" as const,
      src: "/media/performance-generated.mp4",
      poster: "/media/performance-poster.jpg",
      aria: "AI 生成效果广告样片",
      meta: "竖屏 UGC · 商品保真 · 爆款复刻",
    },
    sampleSpec: "10–15 秒最常见，720p、竖屏，以 UGC 口播和种草视频为主。通常需要生产 10–100 条变体进行实验和效果归因。",
    channels: [
      { title: "短视频社交广告", copy: "Meta Reels、TikTok 等短视频信息流。" },
      { title: "YouTube · 约 50%", copy: "Shorts 短视频、插播 In-stream 等。" },
      { title: "应用内广告网络和激励视频", copy: "去掉竞品 Google AdMob 后，核心包括 AppLovin AXON、Unity Ads 等；以插屏视频、激励视频和 Playable 为主，是游戏和 App 类 CPI 效果广告的核心渠道。" },
    ],
    objectives: ["tCPA：目标转化成本", "tROAS：目标广告支出回报率", "商品类 CTR / CVR：跳转购物转化", "App / 游戏 CPI：下载安装量"],
    customers: [
      { role: "AdTech 公司", names: "AppLovin · 钛动" },
      { role: "广告主（品牌方）", names: "欧莱雅（L’Oréal）· 可口可乐（Coca-Cola）等" },
      { role: "Paid Media", names: "Pinterest · Reddit · LinkedIn Ads 等" },
    ],
    workflowTitle: "Ad Campaign Agent 引入广告素材自动化制作",
    steps: [
      { title: "市场热点洞察", copy: "根据 TikTok、Instagram、X 等平台的舆情与热点追踪，设计广告 Hook、CTA 和脚本。", imageRole: "用量较小，主要生成 Mood Board 和视觉参考图，辅助脚本和创意方向评审。" },
      { title: "AI 内容生产和编辑", copy: "替代一部分或全部实拍和后期，快速生产信息流 UGC、带货解说、夸张剧情和商品演示素材。", imageRole: "核心环节——商品白底图转场景图、虚拟模特和数字人形象定型，并产出图生视频首帧；首帧质量直接决定抽卡成功率和单条成片成本。" },
      { title: "投放实验", copy: "持续制作 Variant、投放并观察 tCPA、tROAS、CTR 与 CVR。", imageRole: "批量生成视频封面和静态图 Variant，与视频同池 A/B；先用低成本静态图筛选创意方向，再放大成视频。" },
      { title: "爆款复刻", copy: "把高转化素材快速做换品、换模特、换区域、换语言和换场景，再进入小流量测试与放量循环。", imageRole: "在首帧图层用局部重绘 Inpainting 完成换品 / 换模特 / 换场景，再重新图生视频，比整条视频重抽低一个数量级。" },
    ],
    modelRequirements: [
      { type: "视频模型", items: ["高性价比：全 AI 制作达到 TikTok、Meta Reels 等投放平台的声画质量与信息量门槛。", "高抽卡成功率、成本可控：竖屏、UGC、口播和商品一致，能批量产出 10–100 条 Variant。", "本地化：支持多人种数字人和小语种。"] },
      { type: "图片模型", items: ["首帧图质量：为图生视频提供高质量首帧和关键帧，首帧构图与一致性直接决定视频抽卡成功率。", "商品一致性：支持单图 / 多图参考，白底图转场景图时商品外观、Logo、包装文字不变形。", "局部编辑 Inpainting：换品、换模特、换背景、换文案只重绘局部。", "本地化：多人种模特形象，图内多语言文案准确不乱码。", "极低成本和高并发：单张成本压到美分级、秒级出图，支撑 10–100 条 Variant 的首帧和封面批量生产。"] },
    ],
    models: [{ type: "视频", copy: "Kling 3.0（商品展示 / 口播性价比）· Veo 3.1" }, { type: "图片", copy: "nano banana 2" }],
  },
  {
    index: "03",
    label: "DISPLAY",
    title: "静态展示图片广告",
    ratio: "100–1K 图片",
    desc: "作为独立的第三类广告生产线，Display Ads 以 CPM / CPC 计价，商业目标介于品牌与效果之间，兼顾低成本覆盖与直接转化。真正门槛是让一套主视觉稳定扩成数百到数千张投放版本。",
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
    },
    sampleSpec: "静态 JPG / PNG；同一套主视觉需适配十几到几十种 IAB 标准尺寸（300×250、728×90、160×600、1080×1080、9:16 等）。强调商品精确还原、图内文案可读和多语言版本，单个 Campaign 常需数百至数千张变体。",
    channels: [
      { title: "社交信息流静态图", copy: "Meta 单图与轮播 Carousel、Pinterest、LinkedIn Ads 等。" },
      { title: "程序化展示广告网络", copy: "去掉 Google Display Network、Amazon DSP 等头部竞品后，主要包括 The Trade Desk、InMobi 等 DSP，覆盖海量长尾站点和 App 的 Banner 位。" },
    ],
    objectives: ["CPM / CPC：兼顾覆盖成本与直接转化", "覆盖侧：低成本、高频次触达与 Retargeting 兜底", "转化侧 CTR / CVR：商品图、促销图引导落地页跳转与加购"],
    customers: [
      { role: "AdTech / 创意自动化平台", names: "AppLovin · Smartly.io · Creatopy" },
      { role: "零售媒体和 Paid Media", names: "Criteo · Pinterest" },
      { role: "代理商", names: "WPP · Havas · Publicis · Dentsu · Omnicom 等头部 4A" },
    ],
    workflowTitle: "Ad Campaign Agent 引入图片素材自动化编辑",
    steps: [
      { title: "素材和品牌资产准备", copy: "将商品白底图 / 实拍图、品牌 VI、字体和法务合规文案入库，作为参考图约束。" },
      { title: "AI 图片生成与合成", copy: "用图片模型完成场景重绘、模特换装、背景替换和商品精修，替代传统棚拍与人工修图。" },
      { title: "批量套版和尺寸适配", copy: "一套主视觉自动衍生到全部投放尺寸、语言和市场版本，并对接 DCO 按人群实时拼装。" },
      { title: "投放实验和爆款复刻", copy: "按 CTR / CVR 做 A/B，胜出创意快速换品、换区域、换语言复刻，再进入放量循环。" },
    ],
    modelRequirements: [
      { type: "", items: ["商品一致性：支持单图 / 多图参考 Image-to-image，商品外观、Logo、包装文字不变形。", "精准文字渲染：图内多语言文案、促销角标和价格数字准确不乱码。", "高分辨率和任意宽高比：覆盖 300×250 到 1080×1920，支持 Outpainting 无损扩图。", "局部编辑 Inpainting：换背景、换模特、换色号只重绘局部。", "单张成本极低、支持高并发：美分级单张成本，支撑千级批量出图。"] },
    ],
    models: [{ type: "图片", copy: "nano banana 2 为主" }, { type: "视频", copy: "少量使用 Kling / Runway 将静图转为动效" }],
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
      meta: "服饰 · 商品展示",
      src: "/media/performance-fashion-demo.mp4",
      poster: "/media/performance-fashion-demo.jpg",
      frames: ["/media/performance-frames/fashion-01.jpg", "/media/performance-frames/fashion-02.jpg", "/media/performance-frames/fashion-03.jpg"],
      proofTitle: "从全身到微距，服装结构仍然可读。",
      proofs: ["模特身份、发型与服装轮廓跨镜头稳定", "镂空针织纹理在近景中保留细节", "同一商品可覆盖全身、局部与回收镜头"],
    },
    {
      order: "02",
      label: "PERSONAL CARE UGC",
      title: "UGC 实拍感",
      meta: "个护 · 口播演示",
      src: "/media/performance-ugc-demo.mp4",
      poster: "/media/performance-ugc-demo.jpg",
      frames: ["/media/performance-frames/ugc-01.jpg", "/media/performance-frames/ugc-02.jpg", "/media/performance-frames/ugc-03.jpg"],
      proofTitle: "产品、人物与使用动作组成完整演示。",
      proofs: ["挤出、刷牙与结果展示形成连续使用链路", "人物、浴室环境和手持视角保持自然", "商品近景与人物口播可以在同一条素材中切换"],
    },
    {
      order: "03",
      label: "SOCIAL SEEDING",
      title: "商品开箱与人物交互",
      meta: "家具 · 种草短视频",
      src: "/media/performance-sofa-demo.mp4",
      poster: "/media/performance-sofa-demo.jpg",
      frames: ["/media/performance-frames/sofa-01.jpg", "/media/performance-frames/sofa-02.jpg", "/media/performance-frames/sofa-03.jpg"],
      proofTitle: "商品几何、材质与承重关系贯穿使用过程。",
      proofs: ["沙发轮廓、褶皱与尺度在连续镜头中稳定", "人物坐卧与商品发生清楚的空间交互", "自然光和室内布景保持同一实拍环境"],
    },
    {
      order: "04",
      label: "HIGH-PRECISION EDIT",
      title: "试穿试戴试妆带货",
      meta: "美妆 · UGC 效果演示",
      src: "/media/performance-beauty-demo.mp4",
      poster: "/media/performance-beauty-demo.jpg",
      frames: ["/media/performance-frames/beauty-01.jpg", "/media/performance-frames/beauty-02.jpg", "/media/performance-frames/beauty-03.jpg"],
      proofTitle: "只改变目标效果，不破坏人物身份。",
      proofs: ["同一人物在前后效果镜头中保持五官与造型", "产品出现、涂抹与结果特写形成闭环", "局部肤质变化不影响其余画面结构"],
    },
  ],
};

const customerFlowStages = [
  {
    index: "01",
    role: "预算源头",
    title: "品牌主",
    flowRole: "定义预算与品牌资产",
    flowNote: "先进入集团 AI 平台，再向市场与外部代理商分配生产任务。",
    trend: "自建 AI 中台",
    opportunity: "从零散生成工具，走向企业级品牌资产生产池。",
    examples: "L’Oréal · CreateAI",
  },
  {
    index: "02",
    role: "制作放大",
    title: "代理商",
    flowRole: "承接创意与制作预算",
    flowNote: "同时连接品牌关系、导演创意、Production 与最终交付。",
    trend: "从创意预览进入 Production",
    opportunity: "导演、创意与制作团队把 AI 纳入正式生产流程。",
    examples: "WPP · Havas",
  },
  {
    index: "03",
    role: "复利消耗",
    title: "AdTech / MarTech",
    flowRole: "把投放预算转成持续生产",
    flowNote: "模型嵌入 Campaign Agent，随客户、素材和实验次数重复调用。",
    trend: "Campaign Agent 进入 1 → 3",
    opportunity: "素材自动化成为核心场景，随客户与投放规模复制放大。",
    examples: "AppLovin · 钛动",
  },
  {
    index: "04",
    role: "媒体反馈",
    title: "Paid Media",
    flowRole: "完成分发并返回效果信号",
    flowNote: "把媒体侧数据送回创意生产，让胜出结构进入下一轮。",
    trend: "分发信号回流素材生产",
    opportunity: "用投放反馈缩短创意迭代，让胜出素材更快进入下一轮。",
    examples: "Criteo · Pinterest",
  },
];

const unresolvedGaps = [
  {
    no: "01",
    title: "3D 白模只能渲染，不能理解",
    copy: "短期内模型主要完成视觉渲染。面对动作捕捉白模，它能沿用原始动作重绘人物，却难以理解动作意图并自然融入环境，人物、场景与物体之间仍无法形成合理且连贯的交互。",
    signal: "3D SEMANTICS",
    examples: ["动作意图理解", "人物 × 场景交互", "人物 × 物体交互"],
    link: "https://bytedance.sg.larkoffice.com/docx/O3I3dWdKKof2DtxNkrolaGtIgzc#share-THzudn9RconwUkxVivBlnvQRgNg",
    linkLabel: "Performance-Driven Video Generation with Seedance ↗",
  },
  {
    no: "02",
    title: "世界知识与物理常识缺失",
    copy: "效果广告场景已经收到大量来自商品、3C 和快消客户的 Bad Cases，问题不是画面清晰度，而是模型缺少对真实世界过程与因果关系的理解。",
    signal: "WORLD KNOWLEDGE",
    examples: ["涂口红、穿衣等商品操作姿势错误", "箱子自开、双头、人物位置瞬移", "云不飘动，高速动作下人与道具解绑", "伤口愈合、光学迷彩等过程特效错误"],
    link: "",
    linkLabel: "",
  },
  {
    no: "03",
    title: "商品与品牌要素保真不足",
    copy: "品牌 Logo、商标、商品颜色、包装文字和几何比例必须作为硬约束。当前图片模型生成的小字号文案仍会模糊、断笔或不可读，只能依赖后期工具补字；产品目标必须是由模型原生生成清晰、准确的小字，而不是继续依赖后处理。",
    signal: "BRAND FIDELITY",
    examples: ["Logo 与商标细节错误", "商品颜色与包装文字漂移", "小字号文案模糊、断笔或不可读", "商品几何形变与入景比例失真"],
    link: "",
    linkLabel: "",
  },
  {
    no: "04",
    title: "音频参考与情感仍不可控",
    copy: "音色参考不够准确，音频无法 100% 复制参考视频，生成语音机械且情感不足。头部代理商的当前最佳实践，是先用 ElevenLabs 生成语音，再与 Seedance 视频对齐。",
    signal: "AUDIO CONTROL",
    examples: ["音色参考不准确", "无法完整复制参考音频", "语音机械、情感表现不足", "ElevenLabs 音频 × Seedance 视频对齐"],
    link: "",
    linkLabel: "",
  },
];

export default function Home() {
  return (
    <main className="siteRoot" id="top">
      <InlineTextEditor />
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
              <div><span>2026 全球数字广告</span><strong>≈ $1T</strong></div>
              <i aria-hidden="true">→</i>
              <div><span>海外数字广告大盘</span><strong>$640–680B</strong><small>剔除中国约 $160B 与海外线下约 $200B</small></div>
            </div>
          </header>

          <figure className="marketFlowFigure" aria-labelledby="market-flow-heading">
            <input className="segmentControl" id="video-segment-mode" type="checkbox" aria-label="查看或收起视频广告三赛道" />
            <div className="marketFlowFigureHead">
              <div><strong id="market-flow-heading">海外数字广告市场规模与增速</strong></div>
              <label className="marketFlowToggle" htmlFor="video-segment-mode"><span className="segmentClosedText">查看三赛道</span><span className="segmentOpenText">收起三赛道</span><i aria-hidden="true">＋</i></label>
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
                <text x="35" y="70" className="flowName">搜索广告</text><text x="35" y="88" className="flowMeta">SEARCH · 33%</text><text x="232" y="82" textAnchor="end" className="flowValue">$220B</text>
              </g>
              <line x1="254" y1="76" x2="1172" y2="76" className="flowBenchmark" />
              <text x="806" y="66" className="flowBenchmarkLabel">$220B SEARCH BENCHMARK</text>

              <path className="flowVideoRiver" d="M254 125 C470 127 630 94 820 55 C875 44 914 42 936 42 L936 301 C877 301 825 304 756 307 C575 315 426 284 254 282Z" />
              <g className="flowBaseline flowVideo">
                <rect x="18" y="125" width="236" height="157" />
                <text x="35" y="155" className="flowName">视频广告</text><text x="35" y="176" className="flowMeta">VIDEO · 26%</text><text x="35" y="229" className="flowHeroValue">$160B</text>
                <text x="35" y="259" className="flowNote">CTR / CVR 更优，但制作成本曾限制供给</text>
              </g>
              <g className="flowBaseline flowDisplay">
                <rect x="18" y="301" width="205" height="52" />
                <text x="35" y="324" className="flowName">图文展示</text><text x="35" y="342" className="flowMeta">DISPLAY · 24%</text><text x="203" y="334" textAnchor="end" className="flowValue">$160B</text>
              </g>
              <g className="flowBaseline flowRmn">
                <rect x="18" y="368" width="170" height="47" />
                <text x="35" y="389" className="flowName">零售媒体</text><text x="35" y="405" className="flowMeta">RMN · 17%</text><text x="169" y="399" textAnchor="end" className="flowValue">$110B</text>
              </g>

              <text x="672" y="183" className="flowCrossTitle">3–4 年内跨过 $220B 搜索基准</text>

              <g className="flowOutcomeDefault">
                <rect x="936" y="42" width="236" height="259" />
                <text x="955" y="119" className="flowDefaultValue">$260B</text>
                <text x="1148" y="118" textAnchor="end" className="flowDefaultRank">#1</text>
                <line x1="955" y1="139" x2="1152" y2="139" />
                <text x="955" y="175" className="flowDefaultSignal">3–4 YEARS</text>
                <text x="955" y="199" className="flowDefaultCopy">超过搜索与图文展示广告</text>
                <text x="955" y="244" className="flowDefaultSignal">AI-DRIVEN SUPPLY</text>
                <text x="955" y="268" className="flowDefaultCopy">AI 使制作成本下降，视频供给规模化</text>
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
                <g className="flowGrowthTag base" transform="translate(300 354)"><rect x="-27" y="-12" width="54" height="18" rx="9" /><text y="1" textAnchor="middle">基期</text></g>
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
                <div className="active"><span>VIDEO · 26%</span><strong>$160B</strong><small>AI 降本释放规模供给</small></div>
                <div><span>DISPLAY · 24%</span><strong>$160B</strong></div>
                <div><span>RMN · 17%</span><strong>$110B</strong></div>
              </div>
              <div className="mobileFlowArrow"><span>3–4 YEARS</span><b>↓</b><small>跨过 $220B Search 基准</small></div>
              <div className="mobileVideoOutcome">
                <header><span>2030 · VIDEO #1</span><strong>$260B</strong></header>
                <div className="mobileOutcomeSummary"><span>3–4 YEARS</span><b>超过 Search / Display</b><small>AI 降本释放规模化视频供给</small></div>
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
            <div className="marketFlowYear current"><header><strong>2026</strong><span>CURRENT</span></header><div className="marketFlowYearTotal"><span>视频广告制作总成本</span><b>$25–30B</b></div><div className="marketFlowMetric agent"><span>AGENT</span><b>$2B</b><small>≈ 成本 10%</small></div><div className="marketFlowMetric api"><span>MODEL API</span><b>$1B</b><small>≈ 成本 5%</small></div></div>
            <div className="marketFlowYear future"><header><strong>2030</strong><span>FORECAST</span></header><div className="marketFlowYearTotal"><span>可替代劳动力盘</span><b>≈ $50B</b></div><div className="marketFlowMetric agent"><span>AGENT</span><b>$12.8B</b><small>6.4×</small></div><div className="marketFlowMetric api"><span>MODEL API</span><b>$6.4B</b><small>6.4×</small></div></div>
            <div className="marketFlowCapture"><span>VALUE CAPTURE</span><strong><b>AI 已切走</b><em>&gt;20%</em></strong></div>
          </section>
        </div>
      </section>

      <section className="sceneLandscapePage" id="scenarios" aria-labelledby="scene-landscape-title">
        <div className="sceneLandscapeShell">
          <header className="sceneLandscapeHeader">
            <div className="sceneLandscapeIndex"><span>02</span><b>SCENE LANDSCAPE</b></div>
            <div><h2 id="scene-landscape-title">2. 主流广告场景<br /><span>和需求分析</span></h2></div>
          </header>

          <div className="sceneLandscapeCards">
            <article className="sceneLandscapeCard brandSceneCard">
              <header><span>01</span><div><small>BRAND VIDEO</small><h3>品牌广告</h3></div><em>品牌心智</em></header>
              <div className="sceneFormat"><span>TYPICAL OUTPUT</span><b>15 / 30S</b><p>导演级创意 · 多镜头一致性 · 品牌审片</p></div>
              <div className="sceneCardContent">
                <div className="sceneFacts">
                  <section><span>主要投放</span><p>CTV / 流媒体大屏<br />YouTube 长视频广告</p></section>
                  <section><span>核心目的</span><p>曝光量 · 品牌知名度<br />长期品牌心智</p></section>
                </div>
                <section className="sceneCustomerPanel">
                  <div className="sceneCustomerTitle"><span>典型客户画像</span><b>WHO BUYS</b></div>
                  <div className="sceneCustomerGroups sceneCustomerGroupsTwo">
                    <div><span>头部 5 家代理商</span><p>WPP · Havas · Publicis · Dentsu · Omnicom</p></div>
                    <div><span>次头部代理商</span><p>Brandtech（Pencil）· 博报堂</p></div>
                  </div>
                </section>
              </div>
              <a href="#scene-brand-demo">查看品牌场景样片 <span>↘</span></a>
            </article>

            <article className="sceneLandscapeCard performanceSceneCard">
              <header><span>02</span><div><small>PERFORMANCE VIDEO</small><h3>效果广告</h3></div><em>转化效率</em></header>
              <div className="sceneFormat"><span>TYPICAL OUTPUT</span><b>10–15S</b><p>竖屏 UGC · 10–100 条变体 · 持续投放实验</p></div>
              <div className="sceneCardContent">
                <div className="sceneFacts">
                  <section><span>主要投放</span><p>TikTok / Reels / Shorts<br />应用内广告网络</p></section>
                  <section><span>核心目的</span><p>tCPA / tROAS<br />CTR / CVR · CPI</p></section>
                </div>
                <section className="sceneCustomerPanel">
                  <div className="sceneCustomerTitle"><span>典型客户画像</span><b>WHO BUYS</b></div>
                  <div className="sceneCustomerGroups">
                    <div><span>AdTech 公司</span><p>AppLovin · 钛动</p></div>
                    <div><span>广告主（品牌方）</span><p>欧莱雅 · 可口可乐等</p></div>
                    <div><span>Paid Media</span><p>Pinterest · Reddit · LinkedIn Ads 等</p></div>
                  </div>
                </section>
              </div>
              <a href="#scene-performance-demo">查看效果场景样片 <span>↘</span></a>
            </article>

            <article className="sceneLandscapeCard displaySceneCard">
              <header><span>03</span><div><small>DISPLAY ADS</small><h3>静态展示图片广告</h3></div><em>覆盖 + 转化</em></header>
              <div className="sceneFormat"><span>TYPICAL OUTPUT</span><b>100–1K</b><p>静态图 / Banner · 多尺寸 · 多语言批量变体</p></div>
              <div className="sceneCardContent">
                <div className="sceneFacts">
                  <section><span>主要投放</span><p>社交信息流静态图<br />程序化展示广告</p></section>
                  <section><span>核心目的</span><p>CPM / CPC<br />低成本覆盖 + 直接转化</p></section>
                </div>
                <section className="sceneCustomerPanel">
                  <div className="sceneCustomerTitle"><span>典型客户画像</span><b>WHO BUYS</b></div>
                  <div className="sceneCustomerGroups">
                    <div><span>AdTech / 创意自动化平台</span><p>AppLovin · Smartly.io · Creatopy</p></div>
                    <div><span>零售媒体和 Paid Media</span><p>Criteo · Pinterest</p></div>
                    <div><span>代理商</span><p>WPP · Havas · Publicis · Dentsu · Omnicom</p></div>
                  </div>
                </section>
              </div>
              <a href="#scene-display-demo">查看 Display 场景样片 <span>↘</span></a>
            </article>
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
                  <h3>{item.title}</h3>
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
                    <figcaption className="sceneDemoVisualMeta"><span>{item.ratio}</span><p>{item.media.meta}</p></figcaption>
                  </figure>

                  <div className="sceneDemoBrief">
                    <div className="sceneDemoThesis">
                      <span>TYPICAL OUTPUT</span>
                      <h4>{item.sampleSpec}</h4>
                    </div>

                    <div className="sceneDemoExpanders">
                      <details className="sceneDemoDisclosure" open>
                        <summary><span><b>01</b>具体制作流程</span><i aria-hidden="true"></i></summary>
                        <section className="sceneWorkflowPanel">
                          <h4>{item.workflowTitle}</h4>
                          <ol className="sceneWorkflowSteps">
                            {item.steps.map((step, index) => (
                              <li key={step.title}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <div><h5>{step.title}</h5><p>{step.copy}</p>{step.imageRole ? <aside><b>图片模型</b><p>{step.imageRole}</p></aside> : null}</div>
                              </li>
                            ))}
                          </ol>
                        </section>
                      </details>

                      <details className="sceneDemoDisclosure" open>
                        <summary className={item.index === "02" ? "hasMeta" : undefined}><span><b>02</b>模型需求</span>{item.index === "02" ? <small>VIDEO + IMAGE</small> : null}<i aria-hidden="true"></i></summary>
                        <div className={`sceneDemoRequirementGrid sceneDemoRequirementGrid${item.modelRequirements.length}`}>
                          {item.modelRequirements.map((group, index) => (
                            <article key={group.type || `${item.index}-${index}`}>
                              {group.type ? <h5>{group.type}</h5> : null}
                              <ul>{group.items.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
                            </article>
                          ))}
                        </div>
                      </details>

                      <details className="sceneDemoDisclosure" open>
                        <summary className="hasMeta"><span><b>03</b>市场主流模型（竞对）</span><small>COMPETITIVE SET</small><i aria-hidden="true"></i></summary>
                        <div className="sceneCompetitorGrid">
                          {item.models.map((model) => <article key={model.type}><span>{model.type}</span><strong>{model.copy}</strong></article>)}
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
            <div className="customerFlowIndex"><span>04</span><b>客群策略</b></div>
            <div><h2 id="customer-flow-title">钱从上往下走，<br /><span>价值在中间放大。</span></h2></div>
            <p>品牌主掌握预算，代理商放大制作规模，AdTech / MarTech 把一次性交付变成持续调用，Paid Media 再把效果信号送回生产。</p>
          </header>

          <div className="customerFlowCanvas">
            <div className="customerFlowRoute" aria-label="品牌主到 Paid Media 的广告预算流向">
              <div className="customerMoneySpine" aria-hidden="true"><span>$</span><i></i><em>↓</em></div>
              <div className="customerFlowStages">
                {customerFlowStages.map((stage) => (
                  <article className={`customerFlowStage ${stage.index === "03" ? "customerFlowStageFocus" : ""}`} key={stage.index}>
                    <div className="customerFlowIdentity"><span>{stage.index}</span><small>{stage.role}</small><h3>{stage.title}</h3></div>
                    <div className="customerFlowRole"><small>预算作用</small><h4>{stage.flowRole}</h4></div>
                    <div className="customerFlowTrend"><small>关键趋势</small><h4>{stage.trend}</h4></div>
                    <div className="customerFlowExamples"><small>代表客户</small><b>{stage.examples}</b></div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <footer className="customerFlowFooter"><span>预算源头</span><i>→</i><span>制作放大</span><i>→</i><strong>自动化复利</strong><i>→</i><span>媒体反馈</span><b>↺</b></footer>
        </div>
      </section>

      <section className="audienceSection customerCasesSection" id="customer-cases">
        <div className="shell">
          <div className="customerStories">
            <article className="lorealCasePage" id="customer-brand" aria-labelledby="loreal-case-title">
              <header className="lorealCaseHeader">
                <div className="lorealCaseIndex"><span>01</span><b>BRAND OWNER CASE</b></div>
                <div className="lorealCaseTitle">
                  <h3 id="loreal-case-title">欧莱雅客户拆解：<br />先进入 <span>CreTech</span>，再随市场放大。</h3>
                </div>
              </header>

              <div className="lorealReportCanvas">
                <section className="lorealReportCore" aria-labelledby="loreal-report-core-title">
                  <header>
                    <div><span>01 · CUSTOMER SCALE</span><h4 id="loreal-report-core-title">一个集团中台，集中全球素材生产。</h4></div>
                    <p><strong>50</strong><small>BRANDS</small><i>×</i><strong>150</strong><small>MARKETS</small></p>
                  </header>

                  <div className="lorealReportEngine">
                    <div className="lorealReportEngineTitle"><span>CENTRAL AI PLATFORM</span><h5>集团 CreTech</h5><b>集中模型消耗池</b></div>
                    <div className="lorealReportUse">
                      <span>素材用途</span>
                      <div><strong>50%</strong><p>内部创意实验</p></div>
                      <div><strong>50%</strong><p>外部发布素材</p></div>
                    </div>
                    <div className="lorealReportVolume">
                      <span>每月模型用量</span>
                      <div><strong>50–100<small>万张</small></strong><p>IMAGE</p></div>
                      <div><strong>10–20<small>万条</small></strong><p>VIDEO</p></div>
                    </div>
                  </div>

                  <div className="lorealReportLanes" aria-label="欧莱雅日常素材与品牌主片的两条生产路径">
                    <article><span>高频素材</span><p>品牌团队 <i>→</i> <strong>CreTech</strong> <i>→</i> 电商 / 社交 / 官网</p></article>
                    <article><span>Hero / TVC</span><p>品牌团队 <i>→</i> <strong>WPP / 4A</strong> <i>→</i> Master Film</p></article>
                  </div>
                </section>

                <aside className="lorealReportStrategy" aria-labelledby="loreal-report-strategy-title">
                  <header><span>02 · BYTEPLUS PRIORITY</span><h4 id="loreal-report-strategy-title">切入优先级</h4></header>
                  <article className="lorealReportP0">
                    <span>P0 · DIRECT</span><b>优先切入</b>
                    <h5>模型 API<br />进入 CreTech 白名单</h5>
                    <div><small>质量</small><small>速度</small><small>并发</small><small>商用权</small></div>
                  </article>
                  <div className="lorealReportGrowth"><span>外部商用输出</span><p><small>一年前</small><strong>36%</strong><i>→</i><small>最近一季度</small><strong>55%</strong></p></div>
                  <article className="lorealReportP1">
                    <span>P1 · EXPAND</span>
                    <div><b>WORKFLOW / ISV</b><p>本地化 · 版本化 · 批量 QA</p></div>
                    <div><b>WPP · 从代理商切入</b><p>Previs · Cutdown · Localization</p></div>
                  </article>
                </aside>
              </div>

            </article>

            <article className="wppCasePage wppPresentationPage" id="customer-agency" aria-labelledby="wpp-case-title">
              <header className="wppCaseHeader wppPresentationHeader">
                <div className="wppCaseIndex"><span>3.3</span><b>WPP / HAVAS</b></div>
                <div>
                  <h3 id="wpp-case-title">代理商是最大的增长入口：<br /><span>从简单的AI创意预览，到真正投产到Production</span></h3>
                </div>
                <div className="wppHeaderProofs" aria-label="代理商合作方式与 WPP Open 覆盖规模">
                  <div><span>合作方式</span><strong>模型 API 为主</strong></div>
                  <div><span>WPP Open</span><strong>覆盖WPP 80,000+ 员工</strong></div>
                </div>
              </header>

              <div className="wppPresentationCanvas wppCondensedCanvas">
                <section className="wppStageStrip wppStrategyStageStrip" aria-label="Creative Production Media 三个业务环节">
                  <article className="wppWorkstreamIdentity wppStageCreative">
                    <header><b>CREATIVE</b></header>
                    <div className="wppStageMetric"><strong>30%</strong><i>→</i><strong>70%</strong></div>
                    <h4>先切入创意原型工作流</h4>
                    <p>概念、分镜与 Pre-vis 可讨论、可审片、可拿去赢预算，当前最容易快速放量。</p>
                    <footer><b>模型重点</b><span>速度 · 风格控制 · 品牌资产</span></footer>
                  </article>
                  <article className="wppWorkstreamIdentity wppStageProduction">
                    <header><b>PRODUCTION</b></header>
                    <div className="wppStageMetric"><strong>10% 至 15%</strong><i>→</i><strong>70%</strong></div>
                    <h4>向端到端正式制作放大</h4>
                    <p>以 3D / Digital Twin 锁定产品与镜头，AI 从渲染向拍摄、CG 与后期延伸。</p>
                    <footer><b>模型重点</b><span>一致性 · 可控镜头 · 4K · 3D渲染</span></footer>
                  </article>
                  <article className="wppWorkstreamIdentity wppStageMedia">
                    <header><b>MEDIA</b></header>
                    <div className="wppStageMetric wppStageMetricCurrent"><strong>20% 至 30%</strong></div>
                    <h4>把母版规模化复制</h4>
                    <p>围绕 Master Video，批量适配不同渠道、市场、语言与人群。</p>
                    <footer><b>模型重点</b><span>精准编辑 · 本地化</span></footer>
                  </article>
                </section>
              </div>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>03</span><b>ADTECH / PAID MEDIA</b></div>
                <div>
                  <p>CAMPAIGN AGENT · 1 → 3</p>
                  <h3 id="adtech-case-title">抓住 Campaign Agent 的增长窗口：<br /><span>让素材自动化成为必要组成。</span></h3>
                </div>
                <aside className="adtechStageBadge" aria-label="Campaign Agent 市场阶段">
                  <span>MARKET STAGE</span><strong>1 → 3</strong><b>进入可复制阶段</b>
                </aside>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="adtechGrowthChain" aria-labelledby="adtech-growth-chain-title">
                  <header>
                    <span>THE GROWTH CHAIN</span>
                    <h4 id="adtech-growth-chain-title">一条链路，带动持续收入放大。</h4>
                  </header>

                  <div className="adtechGrowthSteps" aria-label="从 Campaign Agent 复制到模型收入放大的增长链路">
                    <article>
                      <span>01 · MARKET</span><strong>1 → 3</strong>
                      <h5>Campaign Agent<br />进入可复制阶段</h5>
                      <p>从单点验证，走向多 Campaign、多客户复制。</p>
                    </article>
                    <article className="adtechGrowthCore">
                      <span>02 · BYTEPLUS ENTRY</span><strong>CORE</strong>
                      <h5>素材自动化<br />嵌入主链路</h5>
                      <p>生成、编辑与版本化，成为每次投放都要调用的必要能力。</p>
                    </article>
                    <article>
                      <span>03 · ADOPTION</span><strong>AI % ↑</strong>
                      <h5>AI 视频素材<br />占比持续上升</h5>
                      <p>自动化生产覆盖越来越多可投放视频。</p>
                    </article>
                    <article className="adtechGrowthOutcome">
                      <span>04 · OUTCOME</span><strong>CALLS ↑</strong>
                      <h5>模型调用与收入<br />同步放大</h5>
                      <p>投放越大、AI 占比越高，持续消耗越深。</p>
                    </article>
                  </div>

                  <div className="adtechGrowthEquation" aria-label="Campaign Agent 模型收入放大公式">
                    <div><span>投放视频规模</span><strong>持续增长</strong></div><i>×</i>
                    <div><span>AI 制作占比</span><strong>持续上升</strong></div><i>=</i>
                    <div className="isResult"><span>模型调用与收入</span><strong>同步放大</strong></div>
                  </div>
                </section>

                <aside className="adtechProofRail" aria-labelledby="adtech-proof-title">
                  <header><span>MARKET PROOF</span><h4 id="adtech-proof-title">需求已经发生。</h4></header>
                  <div className="adtechProofClients">
                    <article>
                      <span>ADTECH · APPLOVIN</span><h5>嵌入 Agent 主链路</h5>
                      <p>模型 API 成为素材生成与编辑模块，由 Campaign 持续调用。</p>
                    </article>
                    <article>
                      <span>PAID MEDIA · 钛动</span><h5>进入 Creative 模块</h5>
                      <p>Navos 承接素材生产，再随 Campaign 复制。</p>
                    </article>
                  </div>
                  <div className="adtechStrategyMove">
                    <span>BYTEPLUS MOVE</span>
                    <strong>规模化推广素材自动化，成为每个 Campaign Agent 的标配。</strong>
                    <p>不是卖孤立工具，而是占住可重复调用的核心模块。</p>
                  </div>
                </aside>
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
              <div><p>五步运作链 × 四个样片</p><h3>效果广告制作方案<br /><span>流程、样片与能力证据。</span></h3></div>
              <p>从洞察、生产到投放复刻，形成一条可持续迭代的素材生产闭环。</p>
            </header>

            <div className="performanceSolutionBody">
              <section className="performanceProductionFlow" aria-label="效果广告五步运作链">
                <header className="performanceFlowTitle">
                  <div><span>5 STEPS</span><b>洞察 → 生产 → 测试 → 复刻</b></div>
                </header>
                <ol>
                  <li className="performanceFlowInsight">
                    <header><span>01</span><b>热点洞察</b></header>
                    <div className="performanceFlowSummary"><strong>发现高潜创意</strong><p>热点 · 舆情 · 竞品信号</p></div>
                    <footer>Seed</footer>
                  </li>
                  <li className="performanceFlowScript">
                    <header><span>02</span><b>广告脚本</b></header>
                    <div className="performanceFlowSummary"><strong>生成可执行脚本</strong><p>Hook · 分镜 · CTA</p></div>
                    <footer>Seed</footer>
                  </li>
                  <li className="performanceFlowFocus">
                    <header><span>03</span><b>AI 内容生产</b><em>核心</em></header>
                    <div className="performanceFlowSummary"><strong>批量生成可投素材</strong><p>画面 · 视频 · 音频</p></div>
                    <footer>Seedream + Seedance</footer>
                  </li>
                  <li className="performanceFlowTest">
                    <header><span>04</span><b>投放测试</b></header>
                    <div className="performanceFlowSummary"><strong>小预算筛选胜出素材</strong><p>归因 · 本地化 · 预审</p></div>
                    <footer>Campaign Agent</footer>
                  </li>
                  <li className="performanceFlowReplicate">
                    <header><span>05</span><b>爆款复刻</b></header>
                    <div className="performanceFlowSummary"><strong>保留赢面，替换变量</strong><p>换品 · 换人 · 换市场</p></div>
                    <footer>爆款复刻 Agent</footer>
                  </li>
                </ol>
                <footer className="performanceFeedbackRail"><strong>↺ 跑赢素材回到洞察，持续迭代</strong></footer>
              </section>

              <section className="performanceEvidenceGallery" aria-label="效果广告四个视频 Demo 与能力证据">
                {solutionVideoDemos.performance.map((demo) => (
                  <article className="performanceEvidenceCard" key={demo.src}>
                    <div className="performanceEvidenceVideo"><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}效果广告视频 Demo`} /><span>{demo.order}</span></div>
                    <div className="performanceEvidenceMeta"><h4>{demo.title}</h4><strong>{demo.proofTitle}</strong></div>
                    <details className="performanceProofDisclosure">
                      <summary><span>查看关键帧</span><i>＋</i></summary>
                      <div className="performanceProofDrawer">
                        <div className="performanceProofFrames" aria-label={`${demo.title}连续截图`}>
                          {demo.frames.map((frame, frameIndex) => <figure key={frame}><img src={frame} alt={`${demo.title}连续截图 ${frameIndex + 1}`} /><figcaption>{String(frameIndex + 1).padStart(2, "0")}</figcaption></figure>)}
                        </div>
                        <div className="performanceProofCopy"><h5>{demo.proofTitle}</h5><ul>{demo.proofs.map((proof) => <li key={proof}>{proof}</li>)}</ul></div>
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
              <div><p>VISUAL MASTER × DETERMINISTIC SCALE</p><h3>Display Ads 制作方法<br /><span>一个母版，规模化交付。</span></h3></div>
              <p>Seedream 负责视觉创意；Template + DCO 把母版准确扩展到每个尺寸、语言、SKU 与人群。</p>
            </header>

            <div className="displaySolutionBody">
              <section className="displayArchitectureFocus" aria-label="Display Ads 五步生产架构">
                <header>
                  <div><span>PRODUCTION ARCHITECTURE</span><h4>一个 Brief，变成 Creative Matrix。</h4></div>
                  <p><b>MODEL</b> 做视觉创意 <i>→</i> <b>SYSTEM</b> 做确定性生产</p>
                </header>

                <div className="displaySimpleFlow">
                  <article className="displaySimpleInput">
                    <span>01 · INPUT</span><h5>Campaign Inputs</h5>
                    <ul><li>Campaign Brief</li><li>Brand Kit</li><li>Product Feed</li></ul>
                  </article>
                  <article className="displaySimplePlanner">
                    <span>02 · DECIDE</span><h5>Creative Planner</h5>
                    <p>拆解目标与渠道，输出构图策略和变体计划。</p><strong>CREATIVE SPEC</strong>
                  </article>
                  <article className="displaySimpleSeedream">
                    <span>03 · VISUAL</span><h5>Seedream</h5>
                    <p>场景 · 构图 · 光影 · 材质</p><small>负责非确定性创意</small><strong>APPROVED MASTER</strong>
                  </article>
                  <article className="displaySimpleDco">
                    <span>04 · SCALE</span><h5>Template + DCO</h5>
                    <p>Logo · 价格 · CTA · 多语言文字</p><small>尺寸 × 语言 × SKU × 人群</small><strong>VARIANT FACTORY</strong>
                  </article>
                  <article className="displaySimpleQa">
                    <span>05 · DELIVER</span><h5>QA Gate</h5>
                    <p>VLM · Rules</p><small>统一质检与资产交付</small><strong>ASSET HUB / API</strong>
                  </article>
                </div>

                <footer className="displaySimpleFeedback">
                  <span>↺</span><div><b>投放反馈回到 Creative Planner</b><small>胜出创意只替换已验证变量</small></div>
                  <ul><li>CTR</li><li>CVR</li><li>CPA</li></ul>
                </footer>
              </section>

              <section className="displayDemoGallery" id="solution-display-demos" aria-label="Display Ads 三张图片 Demo">
                <header><div><span>3 × IMAGE DEMOS</span><h4>从母版到多规格交付。</h4></div><small>点击图片放大</small></header>
                <div className="displayDemoGalleryGrid">
                  <a className="displayDemoTile displayDemoSquare" href="#display-lightbox-commerce" aria-label="放大商品信息流 Demo">
                    <figure><img src="/media/demo-display-commerce.jpg" alt="商品信息流 Display 广告案例" /><figcaption><b>商品信息流</b><small>Retail Media</small><i>↗</i></figcaption></figure>
                  </a>
                  <a className="displayDemoTile displayDemoLandscape" href="#display-lightbox-beauty" aria-label="放大横版商品 KV Demo">
                    <figure><img src="/media/demo-display-beauty.jpg" alt="16比9美妆横版 Display 广告案例" /><figcaption><b>横版商品 KV</b><small>16:9 · Social / Retail Media</small><i>↗</i></figcaption></figure>
                  </a>
                  <a className="displayDemoTile displayDemoBanner" href="#display-lightbox-diwali" aria-label="放大区域促销套版 Demo">
                    <figure><img src="/media/demo-display-diwali.jpg" alt="3比1本地化促销 Display Banner 案例" /><figcaption><b>区域促销套版</b><small>3:1 · Programmatic</small><i>↗</i></figcaption></figure>
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
                <a className="playableAllDemos" href="https://playable.byteplus-demo.com/" target="_blank" rel="noreferrer"><span className="langZh">查看完整 Playable 方案与更多案例</span><span className="langEn">Explore the full solution and more demos</span><b>↗</b></a>
              </section>
            </div>
          </article>
        </div>
        <article className="productGatePage" id="product-requirements" aria-labelledby="product-gate-title">
          <header className="productGateHeader">
            <div className="productGateIndex"><span>07</span><b>PRODUCTION GATES</b></div>
            <div><p>FINAL · SEEDANCE REQUIREMENTS</p><h3 id="product-gate-title">模型短期能力短板</h3></div>
          </header>

          <div className="productGateBody">
            <div className="productGateMatrix" aria-label="Seedance 广告规模生产的四个产品门槛">
              {unresolvedGaps.map((gap) => (
                <section className={`productGateCard productGateCard${gap.no}`} data-index={gap.no} key={gap.no}>
                  <header><span>{gap.no}</span><b>{gap.signal}</b></header>
                  <h4>{gap.title}</h4>
                  <p>{gap.copy}</p>
                  <ul>{gap.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                  {gap.link && <a href={gap.link} target="_blank" rel="noreferrer">{gap.linkLabel}</a>}
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
          <div><p>FROM SOTA RENDERING TO OMNI ENGINE</p><h2 id="roadmap-title">Seedance 从 SOTA 渲染层，<br /><span>走向端到端制作引擎。</span></h2></div>
          <p>创意导演、3D 结构表现、编辑和渲染四层融合为统一 Omni 模型，对标 Google Omni 路线。</p>
        </header>

        <div className="roadmapPageBody">
          <section className="roadmapEvolution" aria-label="Seedance 从 SOTA 渲染层模型走向统一 Omni 制作引擎并替换百分之七十制作劳动力">
            <article className="roadmapState roadmapStateCurrent">
              <header><span>CURRENT</span><b>SOTA RENDERING</b></header>
              <strong>10–15%</strong>
              <h3>Seedance 强在渲染层。</h3>
              <p>仍是单点模型，尚未贯通完整制作链路。</p>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapEngine">
              <header><span>FOUR-LAYER FUSION</span><b>SEEDANCE → UNIFIED OMNI</b></header>
              <div className="roadmapEngineCore"><small>ORCHESTRATE</small><strong>OMNI</strong><span>CORE PRODUCTION ENGINE</span></div>
              <div className="roadmapEngineInputs">
                <p><span>01</span><b>创意导演层</b></p>
                <p><span>02</span><b>3D 结构表现层</b></p>
                <p><span>03</span><b>编辑层</b></p>
                <p><span>04</span><b>渲染层</b></p>
              </div>
              <footer>四层融合，成为端到端核心制作引擎</footer>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapState roadmapStateFuture">
              <header><span>TARGET</span><b>LABOR REPLACEMENT</b></header>
              <strong>70%</strong>
              <h3>替换制作劳动力。</h3>
              <p>从局部渲染走向端到端规模生产。</p>
            </article>
          </section>

          <footer className="roadmapPageFooter"><span>SOTA 渲染层</span><i>→</i><strong>统一 Omni 模型</strong><i>→</i><span>70% 制作劳动力替换</span></footer>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">B</span><span>ADS Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
