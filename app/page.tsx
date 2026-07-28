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
      headline: "确定性来自流程设计",
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
      { role: "委托方", names: "L’Oréal · Coca-Cola 等头部品牌" },
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
      headline: "一次过率决定综合成本",
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
      { role: "AdTech", names: "AppLovin · 钛动" },
      { role: "品牌方", names: "欧莱雅 · 可口可乐等" },
      { role: "Paid Media", names: "Pinterest · Reddit · LinkedIn Ads" },
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
      headline: "Display Ads，是独立生产线。",
      meta: "社交静态图 · 程序化 Banner · DCO 多尺寸套版",
    },
    sampleSpec: "静态 JPG / PNG；同一套主视觉需适配十几到几十种 IAB 标准尺寸（300×250、728×90、160×600、1080×1080、9:16 等）。强调商品精确还原、图内文案可读和多语言版本，单个 Campaign 常需数百至数千张变体。",
    channels: [
      { title: "社交信息流静态图", copy: "Meta 单图与轮播 Carousel、Pinterest、LinkedIn Ads 等。" },
      { title: "程序化展示广告网络", copy: "去掉 Google Display Network、Amazon DSP 等头部竞品后，主要包括 The Trade Desk、InMobi 等 DSP，覆盖海量长尾站点和 App 的 Banner 位。" },
    ],
    objectives: ["CPM / CPC：兼顾覆盖成本与直接转化", "覆盖侧：低成本、高频次触达与 Retargeting 兜底", "转化侧 CTR / CVR：商品图、促销图引导落地页跳转与加购"],
    customers: [
      { role: "电商 / DTC", names: "Shein · Temu · Amazon 卖家 · Shopify 商家" },
      { role: "创意自动化", names: "AppLovin · Smartly.io · Creatopy" },
      { role: "零售 / Media", names: "Amazon Ads · Walmart Connect · Criteo · Pinterest" },
      { role: "代理商", names: "头部 4A，承接 Banner 套版与多尺寸适配" },
    ],
    workflowTitle: "Ad Campaign Agent 引入图片素材自动化编辑",
    steps: [
      { title: "素材和品牌资产准备", copy: "将商品白底图 / 实拍图、品牌 VI、字体和法务合规文案入库，作为参考图约束。" },
      { title: "AI 图片生成与合成", copy: "用图片模型完成场景重绘、模特换装、背景替换和商品精修，替代传统棚拍与人工修图。" },
      { title: "批量套版和尺寸适配", copy: "一套主视觉自动衍生到全部投放尺寸、语言和市场版本，并对接 DCO 按人群实时拼装。" },
      { title: "投放实验和爆款复刻", copy: "按 CTR / CVR 做 A/B，胜出创意快速换品、换区域、换语言复刻，再进入放量循环。" },
    ],
    modelRequirements: [
      { type: "图片模型（主力）", items: ["商品一致性：支持单图 / 多图参考 Image-to-image，商品外观、Logo、包装文字不变形。", "精准文字渲染：图内多语言文案、促销角标和价格数字准确不乱码。", "高分辨率和任意宽高比：覆盖 300×250 到 1080×1920，支持 Outpainting 无损扩图。", "局部编辑 Inpainting：换背景、换模特、换色号只重绘局部。", "单张成本极低、支持高并发：美分级单张成本，支撑千级批量出图。"] },
    ],
    models: [{ type: "图片", copy: "nano banana 2 为主" }, { type: "视频", copy: "少量使用 Kling / Runway 将静图转为动效" }],
  },
];

const customerStrategies = [
  {
    index: "01",
    slug: "brand",
    priority: "P1 · 标杆优先",
    type: "头部品牌主",
    role: "预算源头",
    headline: "先进入企业 AI 生产池，再让品牌与市场放大消耗。",
    thesis: "品牌掌握广告预算，但集团采购、合规、数据归属地和内部推广链条长。短期价值是拿下行业标杆与模型白名单，而不是把它假设成最快的收入来源。",
    walletSignals: [
      { label: "模型 API TAM", value: "$100M / 年", note: "约 $8.3M / 月" },
      { label: "单家视频投放预算", value: "$2–5B / 年", note: "海外头部品牌" },
      { label: "成熟客户模型消耗", value: "数百万美元 / 年", note: "欧莱雅 · 可口可乐 · 索尼" },
    ],
    customers: [
      {
        name: "L’Oréal",
        tag: "CRETECH PLATFORM",
        metric: "10–20 万条视频 / 月",
        notes: ["同时生成 50–100 万张图片 / 月，约 50% 用于内部创意实验、50% 用于外部广告制作。", "覆盖 50 个品牌、150 个市场；真实需求是完整 Asset List、本地化、平台版本化与 QA。"],
      },
      {
        name: "Coca-Cola",
        tag: "BRAND BENCHMARK",
        metric: "头部客户参考 · 约 $1M MRR",
        notes: ["属于 AI 渗透率较高的品牌组，适合用品牌自建平台、代理商共创和行业 Benchmark 切入。", "Hero / TVC 仍由外部代理商交付；模型更适合 Pre-vis、补镜头、Social Cutdown 和本地化。"],
      },
    ],
    budgetTitle: "欧莱雅集团 AI 生产池",
    budgetNote: "内部实验与外部商用各占一半；外部输出占比已从一年前 36% 提升到最近一个季度 55%，但放大前必须解决版权、商用权与责任条款。",
    budgetMix: [
      { label: "内部创意实验", value: "50%", width: "50%" },
      { label: "外部发布素材", value: "50%", width: "50%" },
    ],
    productLayer: [
      { title: "CreTech AI 中台", copy: "模型白名单 · Generation Credit · Batch Capacity · 企业 SLA" },
      { title: "嵌入式 Workflow / Agent", copy: "Campaign Asset Planner · 本地化 · 多尺寸版本化 · QA" },
    ],
    businessLayer: [
      { title: "品牌 / 市场团队", copy: "定义 E-commerce、Social、Website 等真实营销 Use Case" },
      { title: "IT · Legal · Finance", copy: "完成数据、版权、赔偿条款与采购审批后再放大" },
      { title: "外部 4A / 制作公司", copy: "承接 Hero Film、TVC、导演制作与最终交付责任" },
    ],
    route: ["用真实营销 Use Case 做 Pilot", "进入模型白名单与 Credit 池", "嵌入既有 CreTech / ISV 工作流"],
    takeaway: "品牌侧优先做影响力和行业标杆；不要另起一个 SaaS 去替代客户已有平台。",
  },
  {
    index: "02",
    slug: "agency",
    priority: "P0 · 收入 Driver",
    type: "头部代理商",
    role: "生产规模入口",
    headline: "同时握住创意、制作、媒体和品牌预算，是最直接的模型消耗池。",
    thesis: "代理商会保留客户关系、创意判断和交付责任，但会用 AI 压低 Time-and-materials 成本，并向 Outcome-based Commercial Model 迁移。合作模式以模型 API 接入其自建创意平台为主。",
    walletSignals: [
      { label: "模型 API TAM", value: "$200M / 年", note: "约 $17M / 月" },
      { label: "WPP 钱包", value: "$6M MRR", note: "当前最大参照" },
      { label: "Havas 钱包", value: "$1.5M MRR", note: "以 Veo 为主" },
    ],
    customers: [
      {
        name: "WPP",
        tag: "OPEN · 80K+ EMPLOYEES",
        metric: "$6M MRR",
        notes: ["Veo 约 $5.5M MRR：自用 WPP Open 约 60%（$3.3M），ToB 转售约 40%（$2M）。", "Runway 自用约 $0.3–0.5M MRR；统一组织覆盖 WPP Creative、Production、Media 与 Enterprise Solutions。"],
      },
      {
        name: "Havas",
        tag: "AGENCY BENCHMARK",
        metric: "$1.5M MRR",
        notes: ["以 Veo 为主，是除 WPP 外最清晰的头部代理商钱包参照。", "适合先从创意原型和可审片素材切入，再验证 Production 的 AI + CG 混合制作边界。"],
      },
    ],
    budgetTitle: "WPP 的模型钱包如何流动",
    budgetNote: "WPP Open 既服务 8 万以上员工，也承担模型能力的对外转售；拿下统一平台，收入会同时来自内部生产与客户交付。",
    budgetMix: [
      { label: "WPP Open 自用", value: "60% · $3.3M", width: "60%" },
      { label: "ToB 转售", value: "40% · $2M", width: "40%" },
    ],
    productLayer: [
      { title: "WPP Open", copy: "统一 AI Marketing Operating System · 多模型路由 · 品牌资产引用" },
      { title: "Agent Hub · Canvas", copy: "Brief、Synthetic Persona、概念测试、KV、Storyboard 与短片预览" },
    ],
    businessLayer: [
      { title: "Creative · 30–60%", copy: "短期推向 70%：洞察、概念、Pre-vis 和初版视觉最先放量" },
      { title: "Production · 10–15%", copy: "中长期推向 70%：3D / Digital Twin + AI Hybrid Pipeline" },
      { title: "Media · 20–30%", copy: "围绕母版做语言、尺寸、CTA、前 3–5 秒 Hook 与人群版本" },
    ],
    route: ["竞对 Veo，切入 Creative 原型工作流", "以品牌一致性和高精度编辑打开 Media", "随 3D 白模与 4K 能力突破 Production"],
    takeaway: "代理商是 2026 规模收入的主战场：先提高 Creative 渗透，再解锁 Production 劳动力。",
  },
  {
    index: "03",
    slug: "adtech",
    priority: "P0 · 增长引擎",
    type: "AdTech / Martech",
    role: "复利型消耗入口",
    headline: "让素材自动化成为 Campaign Agent 的必要组成，而不是一个外挂工具。",
    thesis: "AdTech 不以单条广告片的导演级质量为核心，而以投放效果、素材迭代速度和可复制规模为核心。Campaign Agent 正从单点验证走向 1→3 复制，模型必须嵌入投放系统持续生产 Variant。",
    walletSignals: [
      { label: "模型 API TAM", value: "$200M / 年", note: "约 $16.67M / 月" },
      { label: "头部客户常态", value: "$1–2M MRR", note: "客户数量多、持续消耗" },
      { label: "市场阶段", value: "1 → 3", note: "从验证走向多客户复制" },
    ],
    customers: [
      {
        name: "AppLovin",
        tag: "AXON · 1B+ MOBILE DAU",
        metric: "$11B+ 年化广告 Spend",
        notes: ["从移动游戏买量扩展到电商、订阅、服务和 Web Advertiser；全屏视频与激励视频是高注意力效果广告核心。", "需要 URL→脚本 / 分镜 / 30–60 秒视频、百条级 Variant、Playable 接入，并与 AXON 投放反馈闭环。"],
      },
      {
        name: "钛动 Tec-Ad",
        tag: "MULTI-AGENT MARKETING",
        metric: "洞察 → 内容 → 投放 → 诊断 → 迭代",
        notes: ["服务游戏、App、跨境电商、短剧和新能源车；真实打法是“实拍走质和长效，AI 走量和迭代”。", "实拍生命周期约 3–4 个月，AI 素材约 1–2 个月；爆款再换人、换场景、换国家形象和换语言复刻。"],
      },
    ],
    budgetTitle: "Campaign Agent 的模型收入飞轮",
    budgetNote: "同一笔投放预算下，AI 制作占比越高、Variant 越多、胜出素材复刻越频繁，模型调用和收入就越大。",
    budgetMix: [],
    productLayer: [
      { title: "Campaign Agent / AXON", copy: "商品链接解析 · 受众洞察 · 脚本 · 素材编排 · 投放决策" },
      { title: "Creative Automation", copy: "30–60 秒视频 · Playable · 批量本地化 · 爆款复刻" },
      { title: "Experiment & Attribution", copy: "小流量测试 · ROAS / CPI 归因 · 投前预审 · 反馈回流" },
    ],
    businessLayer: [
      { title: "广告销售 / 客户增长", copy: "拿到广告主预算，并把素材自动化写进 Campaign 方案" },
      { title: "Creative Ops", copy: "维护百条到数百条素材池，持续补充新 Hook 与 Variant" },
      { title: "算法 / AI 产品团队", copy: "把生成 Workflow、资源池计费和投放优化做成同一闭环" },
    ],
    route: ["把模型 API 嵌进 Campaign Agent", "共同定义一次过率、成本和 ROAS 指标", "从 1 个客户复制到 3 个以上行业与区域"],
    takeaway: "这是最值得猛攻的增长点：素材自动化一旦成为 Agent 标配，收入会随投放规模与 AI 素材占比同步上升。",
    growthEngine: ["投放规模", "AI 素材占比", "单素材模型消耗", "模型收入"],
  },
];

const unresolvedGaps = [
  {
    no: "01",
    title: "物理语义，而非视觉模仿",
    copy: "涂抹、穿戴、开箱等人货交互，需要理解动作意图与物理关系；仅提升画质或参考能力仍不够。",
    signal: "WORLD MODEL",
  },
  {
    no: "02",
    title: "品牌资产的硬约束",
    copy: "Logo、包装文字、色号、数字和几何比例必须稳定保真，并支持局部返工而不是整条重抽。",
    signal: "BRAND FIDELITY",
  },
  {
    no: "03",
    title: "专业音频可交付",
    copy: "语言、台词、音色、语速与时间戳要严格绑定，同时满足 48kHz、码率和响度等交付规格。",
    signal: "AUDIO CONTROL",
  },
  {
    no: "04",
    title: "不破坏母版的精准编辑",
    copy: "只替换前 3–5 秒 Hook、文案、人物或商品，其他镜头与音轨保持不变，才能进入规模化版本生产。",
    signal: "PRECISE EDIT",
  },
];

const roadmap = [
  {
    time: "NOW · 2026",
    title: "先拿下可复制工作流",
    points: ["3D 白模 + AI 混合制作", "Campaign Agent 素材自动化", "Display Ads 标杆客户"],
  },
  {
    time: "MID-TERM",
    title: "从渲染节点走向制作引擎",
    points: ["多镜头与品牌一致性", "高精度局部编辑", "规模化本地化与投放闭环"],
  },
  {
    time: "NORTH STAR · 2030",
    title: "替代 70% 制作劳动力",
    points: ["导演 + 3D + 编辑 + 渲染融合", "Omni 模型成为核心生产层", "$6.4B 视频模型 API TAM"],
  },
];

const videoSegments = [
  {
    name: "Social Video",
    code: "01 / SOCIAL",
    tone: "social",
    core: ["TikTok / Reels", "短视频社交电商"],
    scale: ["1,150亿", "量最大"],
    growth: ["620 → 1,150", "+85%"],
    split: ["品牌 30%", "效果 70%"],
    spend: ["25%–35%", "消耗极快 · 成本高"],
    driver: ["Reels / TikTok 驱动", "下载 / 购买 / 引流"],
  },
  {
    name: "CTV",
    code: "02 / STREAMING",
    tone: "ctv",
    core: ["Netflix / Disney+", "流媒体广告版"],
    scale: ["900亿", "增速最快"],
    growth: ["450 → 900", "+100%"],
    split: ["品牌 80%", "效果 20%"],
    spend: ["10%–15%", "追求广播级 · 迭代慢"],
    driver: ["流媒体广告版加入", "有线电视数字化归入"],
  },
  {
    name: "OLV",
    code: "03 / OPEN WEB",
    tone: "olv",
    core: ["YouTube 长视频", "开放网络视频"],
    scale: ["550亿", "稳步增长"],
    growth: ["380 → 550", "+45%"],
    split: ["品牌 50%", "效果 50%"],
    spend: ["15%–20%", "多尺寸剪辑"],
    driver: ["YouTube / Open Web", "长尾稳增 · AI 搜索分流"],
  },
];

const segmentDimensions = [
  { key: "core", label: "核心阵地", note: "WHERE" },
  { key: "scale", label: "2030 规模", note: "SIZE" },
  { key: "growth", label: "2026–2030", note: "GROWTH" },
  { key: "split", label: "品效占比", note: "MIX" },
  { key: "spend", label: "素材支出", note: "PRODUCTION" },
  { key: "driver", label: "主要驱动", note: "DRIVER" },
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="主导航">
        <a className="brand" href="#top" aria-label="BytePlus Ads AI 首页">
          <span className="brandMark">B</span>
          <span>ADS × AI</span>
        </a>
        <div className="navLinks">
          <a href="#market">市场</a>
          <a href="#scenarios">场景</a>
          <a href="#audience">客群</a>
          <a href="#roadmap">路线图</a>
        </div>
        <span className="status"><i /> 2026 GTM</span>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroGlow" />
        <p className="eyebrow"><span>BYTEPLUS</span> / ADVERTISING INDUSTRY</p>
        <h1>把素材生产，<br />变成<span>增长引擎</span></h1>
        <p className="heroLead">
          AI 正在把广告竞争从“谁能做出一条片”，改写为“谁能持续生产、测试并放大有效素材”。
        </p>
        <div className="heroFlow" aria-label="素材增长路径">
          <span><i>01</i><b>生产</b><small>CREATE</small></span>
          <em>→</em>
          <span><i>02</i><b>测试</b><small>TEST</small></span>
          <em>→</em>
          <span><i>03</i><b>放大</b><small>SCALE</small></span>
        </div>

        <div className="heroStats" aria-label="核心目标">
          <article>
            <span className="statLabel">2026 VIDEO API TAM</span>
            <strong>$1.0B</strong>
            <small>视频模型</small>
          </article>
          <article>
            <span className="statLabel">2026 IMAGE API TAM</span>
            <strong>$0.4B</strong>
            <small>图片模型</small>
          </article>
          <article>
            <span className="statLabel">VIDEO TARGET DRR</span>
            <strong>$1.25M</strong>
            <small>约 $450M ARR · 大盘占比 20%</small>
          </article>
          <article>
            <span className="statLabel">IMAGE TARGET DRR</span>
            <strong>$150K</strong>
            <small>年底稳定 · 大盘占比 15%</small>
          </article>
        </div>
      </section>

      <section className="lightSection" id="thesis">
        <div className="shell thesisGrid">
          <div className="sectionIntro darkText">
            <p className="eyebrow dark"><span>01</span> / EXECUTIVE THESIS</p>
            <h2>预算增长有限，<br />素材需求正在爆发。</h2>
          </div>
          <div className="thesisCopy">
            <p className="bigCopy">海外整体广告预算未来五年增幅仅 <b>5.6%</b>，但视频广告仍以 <b>13%</b> 的年增速扩大。</p>
            <p>生成模型降低制作门槛，让过去只投静态图文与搜索广告的商家，开始大规模升级到短视频。</p>
          </div>
        </div>

        <div className="shell marketConclusions" id="market">
          <div className="marketConclusionsHead">
            <span>THREE MARKET CONCLUSIONS</span>
            <h3>海外数字视频广告市场 TAM 拆解</h3>
            <p>先看增长发生在哪里，再看品牌与效果两套生产逻辑，最后把广告预算拆到 AI 真正能够捕获的劳动力价值。</p>
          </div>

          <article className="marketConclusion">
            <div className="conclusionCopy">
              <span>CONCLUSION 01</span>
              <h4>增长不在总盘，<br />而在视频。</h4>
              <p>海外整体广告预算未来五年增幅仅 <b>5.6%</b>，但视频广告年增速约 <b>13%</b>，从 2026 年的 <b>$160B</b> 增长到 2030 年的 <b>$260B</b>。生成模型降低制作门槛，推动中小商家把静态图文与搜索预算升级为短视频。</p>
              <div className="conclusionStats">
                <div><strong>5.6%</strong><small>整体广告预算<br />未来五年增幅</small></div>
                <div><strong>13%</strong><small>视频广告<br />年增速</small></div>
                <div><strong>$160B → $260B</strong><small>2026 → 2030<br />视频广告市场</small></div>
              </div>
            </div>
            <figure className="conclusionVisual marketStructureVisual" aria-label="2026 年海外数字广告市场结构">
              <div className="visualTopline"><span>2026 MARKET STRUCTURE</span><b>USD</b></div>
              <div className="marketScope" aria-label="全球与海外数字广告市场规模">
                <div className="marketScopeCard globalScope">
                  <span>GLOBAL BUDGET · 2026</span>
                  <strong>$1.0T</strong>
                  <small>全球数字广告总预算 · 约 1 万亿美元</small>
                </div>
                <div className="marketScopeLink"><strong>64–68%</strong><span>海外占全球</span></div>
                <div className="marketScopeCard overseasScope">
                  <span>OVERSEAS DIGITAL ADS</span>
                  <strong>$640–680B</strong>
                  <small>海外数字广告大盘 · 约 $6,400–6,800 亿</small>
                </div>
              </div>
              <div className="marketScopeLogic" aria-label="海外数字广告大盘口径">
                <span>口径校准</span>
                <div><b>− $160B</b><small>剔除中国市场</small></div>
                <div><b>− $200B</b><small>剔除海外传统线下媒体</small></div>
                <p><i>✓</i><span>剩余海外数字广告大盘</span><strong>$640–680B</strong></p>
              </div>
              <div className="marketPillars">
                <div className="marketPillarTitle"><span>2026 海外数字广告四大支柱</span><b>TOTAL · $640–680B</b></div>
                <div className="marketShareBand" aria-label="搜索 33%，视频 26%，展示 24%，零售媒体网络 17%">
                  <span className="searchShare">33%</span>
                  <span className="videoShare">26%</span>
                  <span className="displayShare">24%</span>
                  <span className="rmnShare">17%</span>
                </div>
                <div className="marketPillarGrid">
                  <article className="marketPillar searchPillar">
                    <span><i />SEARCH</span><b>≈ $220B</b>
                    <h5>纯搜索广告</h5><p>Google · Bing<br />浏览器搜索</p>
                  </article>
                  <article className="marketPillar videoPillar">
                    <span><i />VIDEO</span><b>≈ $160B</b>
                    <h5>纯数字视频广告</h5><p>社交短视频 · CTV<br />网站嵌入</p>
                  </article>
                  <article className="marketPillar displayPillar">
                    <span><i />DISPLAY</span><b>≈ $160B</b>
                    <h5>静态社交与展示</h5><p>Meta · X<br />网站 Banner</p>
                  </article>
                  <article className="marketPillar rmnPillar">
                    <span><i />RMN</span><b>≈ $110B</b>
                    <h5>零售媒体静态广告</h5><p>Amazon · Walmart<br />平台内静态广告</p>
                  </article>
                </div>
              </div>
              <figcaption><span>FIG. 01</span> 从全球预算口径到海外数字广告四大支柱</figcaption>
            </figure>
          </article>

          <article className="marketConclusion reverse">
            <div className="conclusionCopy">
              <span>CONCLUSION 02</span>
              <h4>海外市场，<br />品牌与效果各占一半。</h4>
              <p>海外视频广告预算呈现约 <b>50 / 50</b> 的品牌与效果结构，因此模型进入广告生产必须同时服务两套完全不同的工作流。</p>
              <div className="conclusionSplit">
                <div><span>BRAND</span><strong>少而贵</strong><p>创意驱动、重人力。价值取决于导演、制作、后期等专业环节的 AI 渗透率与价值捕获率。</p></div>
                <div><span>PERFORMANCE</span><strong>多而快</strong><p>数据驱动、10–100 个变体。模型消耗与素材量直接相关，竞争力落在成片性价比与 ROI。</p></div>
              </div>
            </div>
            <figure className="conclusionVisual budgetStructureVisual" aria-label="海外视频广告预算结构与增长">
              <div className="visualTopline light"><span>VIDEO AD BUDGET</span><b>2026 → 2030</b></div>
              <div className="budgetColumns" aria-label="视频广告市场从 1600 亿美元增长至 2600 亿美元">
                <div className="budgetColumn budget2026"><strong>$160B</strong><i /><span>2026</span></div>
                <div className="budgetDelta"><b>+$100B</b><span>新增预算</span></div>
                <div className="budgetColumn budget2030"><strong>$260B</strong><i /><span>2030</span></div>
              </div>
              <div className="budgetSplitTrack" aria-label="品牌与效果广告预算各占约一半">
                <div><span>BRAND</span><strong>≈ 50%</strong><small>少而贵 · 专业生产</small></div>
                <div><span>PERFORMANCE</span><strong>≈ 50%</strong><small>多而快 · 高频测试</small></div>
              </div>
              <figcaption><span>FIG. 02</span> 同一增长市场，对应两套完全不同的生产逻辑</figcaption>
            </figure>
          </article>

          <div className="segmentComparison marketSegmentOverview">
            <div className="dataHeader darkText segmentHeader">
              <div><span>SEGMENT LANDSCAPE</span><h3>三大细分赛道全景对比</h3></div>
              <p>Social Video 赢在素材规模，CTV 赢在增速与品牌预算，OLV 承接长视频与开放网络。从品牌与效果的预算结构，下钻到三条赛道，再进入生产劳动力 TAM。</p>
            </div>
            <p className="matrixScrollHint" aria-hidden="true">横向滑动查看完整对比 →</p>
            <div className="segmentMatrixScroll" role="region" aria-label="Social Video、CTV 和 OLV 全景对比" tabIndex={0}>
              <div className="segmentMatrix" role="table" aria-label="三大细分赛道全景对比表">
                <div className="segmentMatrixHead" role="row">
                  <div className="dimensionHead" role="columnheader"><span>评估维度</span><small>6 DIMENSIONS</small></div>
                  {videoSegments.map((segment) => (
                    <div className={`segmentHead ${segment.tone}`} role="columnheader" key={segment.name}>
                      <span>{segment.code}</span><strong>{segment.name}</strong>
                    </div>
                  ))}
                </div>
                {segmentDimensions.map((dimension, rowIndex) => (
                  <div className={`segmentRow row-${dimension.key}`} role="row" key={dimension.key}>
                    <div className="dimensionCell" role="rowheader"><span>{String(rowIndex + 1).padStart(2, "0")}</span><b>{dimension.label}</b><small>{dimension.note}</small></div>
                    {videoSegments.map((segment) => {
                      const value = segment[dimension.key];
                      return (
                        <div className={`segmentCell ${segment.tone}`} role="cell" key={segment.name}>
                          <strong>{value[0]}</strong><span>{value[1]}</span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <article className="marketConclusion">
            <div className="conclusionCopy">
              <span>CONCLUSION 03</span>
              <h4>真正的 TAM，<br />是生产劳动力。</h4>
              <p>视频素材生产支出将从 2026 年的 <b>$25–30B</b> 增长到 2030 年约 <b>$50B</b>。其中约 <b>80%</b> 是人力成本，对应约 <b>$40B</b> 的可替代劳动力价值。</p>
              <p className="imageTamNote">图片生产支出约从 $10B 增至 $15B，2030 图片模型 API TAM 约 <b>$2B</b>。</p>
            </div>
            <figure className="conclusionVisual tamCaptureVisual" aria-label="2030 年视频素材生产价值捕获阶梯">
              <div className="visualTopline"><span>2030 VALUE CAPTURE</span><b>TAM</b></div>
              <div className="tamCascade">
                <div className="tamStage productionStage"><span>视频素材生产支出</span><strong>$50B</strong><small>BASE</small></div>
                <div className="cascadeRule"><b>× 80%</b><span>劳动力占比</span></div>
                <div className="tamStage laborStage"><span>可替代劳动力价值</span><strong>$40B</strong><small>AI ADDRESSABLE</small></div>
                <div className="cascadeRule"><b>× 32%</b><span>AI 渗透与软件价值捕获</span></div>
                <div className="tamStage agentStage"><span>Agent 软件 TAM</span><strong>$12.8B</strong><small>SOFTWARE</small></div>
                <div className="cascadeRule"><b>× 50%</b><span>模型成本占比</span></div>
                <div className="tamStage apiStage"><span>视频模型 API TAM</span><strong>$6.4B</strong><small>MODEL LAYER</small></div>
              </div>
              <figcaption><span>FIG. 03</span> 从生产支出到模型 API 的价值捕获路径</figcaption>
            </figure>
          </article>
        </div>

      </section>

      <section className="section shell" id="scenarios">
        <div className="sectionIntro">
          <p className="eyebrow"><span>02</span> / SCENE &amp; REQUIREMENT ANALYSIS</p>
          <h2>2. 主流视频广告<br />场景和需求分析</h2>
          <p>按品牌广告、效果广告和静态展示图片广告三条生产线展开：先看典型样片，再完整拆解投放渠道、商业目标、客户画像、生产模式、模型需求与主流竞品。</p>
        </div>

        <div className="sampleCases">
          {scenarioCases.map((card) => (
            <article className={`sampleCase ${card.media.type === "video" ? "videoCase" : "displayCase"}`} key={card.index}>
              <figure className="sampleVisual">
                <div className="sampleMedia" aria-label={card.media.aria}>
                  {card.media.type === "video" ? (
                    <video
                      src={card.media.src}
                      poster={card.media.poster}
                      aria-label={card.media.aria}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div className={`caseBoard ${card.media.layout}Board`}>
                      {card.media.cases.map((sample) => (
                        <div className="caseTile" key={sample.src}>
                          <img src={sample.src} alt={sample.alt} loading="lazy" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mediaShade" />
                  <div className="sampleMediaTop"><span>SAMPLE {card.index}</span><b>{card.label}</b></div>
                  {card.media.type === "image-grid" && (
                    <div className="sampleFormatTags" aria-hidden="true">
                      {card.media.formats.map((format) => <span key={format}>{format}</span>)}
                    </div>
                  )}
                  <figcaption className="sampleMediaMeta">
                    <span>{card.ratio}</span>
                    <h3>{card.media.headline}</h3>
                    <p>{card.media.meta}</p>
                  </figcaption>
                </div>
              </figure>

              <div className="caseBrief">
                <p className="caseKicker">SCENE {card.index} <span>广告类型 · 按样片拆解</span></p>
                <div className="caseTitleRow"><h3>{card.title}</h3><b>{card.ratio}</b></div>
                <p className="caseDescription">{card.desc}</p>

                <div className="caseSampleSpec">
                  <span>典型样片 · TYPICAL SAMPLE</span><p>{card.sampleSpec}</p>
                </div>

                <div className="caseFactBlock" aria-label={`${card.title}主要投放渠道`}>
                  <div className="briefLabel"><b>主要投放渠道</b><span>WHERE IT RUNS</span></div>
                  <ol className="caseChannelList">
                    {card.channels.map((channel) => (
                      <li key={channel.title}><b>{channel.title}</b><p>{channel.copy}</p></li>
                    ))}
                  </ol>
                </div>

                <div className="caseFactBlock caseObjectives" aria-label={`${card.title}广告目的`}>
                  <div className="briefLabel"><b>目的与核心指标</b><span>WHY IT RUNS</span></div>
                  <ul>{card.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
                </div>

                <div className="caseOwnership" aria-label={`${card.title}客户与制作方`}>
                  <div className="briefLabel"><b>典型客户画像</b><span>WHO BUYS / WHO MAKES</span></div>
                  <dl>
                    {card.customers.map((customer) => (
                      <div key={customer.role}><dt>{customer.role}</dt><dd>{customer.names}</dd></div>
                    ))}
                  </dl>
                </div>

                <details className="workflowDisclosure">
                  <summary>
                    <span><b>展开具体制作流程</b><small>生产模式 · {card.workflowTitle} · {card.steps.length} STEPS</small></span>
                    <i aria-hidden="true">＋</i>
                  </summary>
                  <ol>
                    {card.steps.map((step, i) => (
                      <li key={step.title}>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <div>
                          <b>{step.title}</b><p>{step.copy}</p>
                          {step.imageRole && <small className="imageModelRole"><strong>图片模型</strong>{step.imageRole}</small>}
                        </div>
                      </li>
                    ))}
                  </ol>
                </details>

                <details className="workflowDisclosure requirementDisclosure">
                  <summary>
                    <span><b>模型需求</b><small>VIDEO / IMAGE MODEL REQUIREMENTS</small></span>
                    <i aria-hidden="true">＋</i>
                  </summary>
                  <div className="requirementGroups">
                    {card.modelRequirements.map((group) => (
                      <article key={group.type}>
                        <h4>{group.type}</h4>
                        <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                      </article>
                    ))}
                  </div>
                </details>

                <div className="modelShelf" aria-label={`${card.title}市场主流模型`}>
                  <div className="briefLabel"><b>市场主流模型（竞对）</b><span>MODEL LANDSCAPE</span></div>
                  <ul>{card.models.map((model) => <li key={model.type}><span>{model.type}</span><b>{model.copy}</b></li>)}</ul>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>

      <section className="audienceSection" id="audience">
        <div className="shell">
          <div className="sectionIntro darkText audienceIntro">
            <p className="eyebrow dark"><span>03</span> / CUSTOMER STRATEGY</p>
            <h2>3. 客群策略：<br />钱从哪里来，收入在哪里放大。</h2>
            <p>品牌主提供预算源头，代理商把模型放进生产系统，AdTech / Martech 再把素材生产与投放反馈连成持续消耗。三类客户不是并列名单，而是三条不同的增长路径。</p>
          </div>

          <div className="customerRoute" aria-label="三类客户增长路径">
            {customerStrategies.map((item, i) => (
              <a href={`#customer-${item.slug}`} className={`customerRouteNode ${item.slug}`} key={item.slug}>
                <span>{item.index}</span>
                <div><small>{item.role}</small><b>{item.type}</b><p>{item.headline}</p></div>
                {i < customerStrategies.length - 1 && <i aria-hidden="true">→</i>}
              </a>
            ))}
          </div>

          <div className="customerStories">
            {customerStrategies.map((item) => (
              <article className={`customerStory ${item.slug}Story`} id={`customer-${item.slug}`} key={item.slug}>
                <header className="customerStoryHeader">
                  <div className="customerIdentity">
                    <span>{item.index}</span><small>{item.priority}</small><b>{item.role}</b>
                  </div>
                  <div>
                    <p>{item.type}</p>
                    <h3>{item.headline}</h3>
                    <div className="customerThesis">{item.thesis}</div>
                  </div>
                </header>

                <div className="walletSignalGrid" aria-label={`${item.type}钱包信号`}>
                  {item.walletSignals.map((signal) => (
                    <div key={signal.label}><span>{signal.label}</span><strong>{signal.value}</strong><small>{signal.note}</small></div>
                  ))}
                </div>

                <section className="customerExamples" aria-label={`${item.type}典型客户`}>
                  <div className="storySectionTitle"><span>TYPICAL CUSTOMERS</span><h4>用 1–2 个客户看清钱包与购买逻辑</h4></div>
                  <div className="customerExampleGrid">
                    {item.customers.map((customer) => (
                      <article key={customer.name}>
                        <div><span>{customer.tag}</span><strong>{customer.metric}</strong></div>
                        <h5>{customer.name}</h5>
                        <ul>{customer.notes.map((note) => <li key={note}>{note}</li>)}</ul>
                      </article>
                    ))}
                  </div>
                </section>

                <div className="customerArchitecture">
                  <section className="budgetArchitecture">
                    <div className="storySectionTitle"><span>BUDGET ARCHITECTURE</span><h4>{item.budgetTitle}</h4></div>
                    {item.budgetMix.length > 0 ? (
                      <div className="budgetMix">
                        {item.budgetMix.map((part) => (
                          <div style={{ width: part.width }} key={part.label}><span>{part.label}</span><strong>{part.value}</strong></div>
                        ))}
                      </div>
                    ) : (
                      <div className="agentStageRail" aria-label="Campaign Agent 复制阶段">
                        <span><i>1</i>单点接入</span><em>→</em><span><i>2</i>投放闭环</span><em>→</em><span className="active"><i>3</i>多客户复制</span>
                      </div>
                    )}
                    <p>{item.budgetNote}</p>
                  </section>

                  <section className="operatingBlueprint">
                    <div className="storySectionTitle"><span>OPERATING BLUEPRINT</span><h4>AI 产品层 × 业务执行层</h4></div>
                    <div className="operatingLayers">
                      <div className="operatingLayer productLayer">
                        <span>AI PRODUCT</span>
                        {item.productLayer.map((unit) => <div key={unit.title}><b>{unit.title}</b><p>{unit.copy}</p></div>)}
                      </div>
                      <i aria-hidden="true">⇄</i>
                      <div className="operatingLayer businessLayer">
                        <span>BUSINESS TEAM</span>
                        {item.businessLayer.map((unit) => <div key={unit.title}><b>{unit.title}</b><p>{unit.copy}</p></div>)}
                      </div>
                    </div>
                  </section>
                </div>

                {item.growthEngine && (
                  <section className="campaignRevenueEngine">
                    <div><span>CAMPAIGN AGENT · 1 → 3</span><h4>素材自动化成为 Agent 标配，模型收入随 AI 制作占比放大。</h4></div>
                    <div className="revenueEquation" aria-label="Campaign Agent 模型收入关系">
                      {item.growthEngine.map((term, i) => (
                        <div key={term}><strong>{term}</strong>{i < item.growthEngine.length - 1 && <i>{i === item.growthEngine.length - 2 ? "=" : "×"}</i>}</div>
                      ))}
                    </div>
                    <p>投放预算不需要先大幅增长；只要 Agent 里由 AI 完成的视频占比持续上升，同一客户、同一 Campaign 就会产生更多模型调用。</p>
                  </section>
                )}

                <footer className="customerEntryRoute">
                  <div><span>BYTEPLUS ENTRY</span><b>怎么切</b></div>
                  <ol>{item.route.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
                  <strong>{item.takeaway}</strong>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell solutions">
        <div className="sectionIntro">
          <p className="eyebrow"><span>04</span> / SOLUTION FOCUS</p>
          <h2>一个模型底座，<br />三条生产管线。</h2>
        </div>
        <div className="solutionPages">
          <article className="solutionPage solutionBrand">
            <header className="solutionPageHeader">
              <span>01</span>
              <div><small>BRAND ADVERTISING · 3D WHITE MODEL</small><h3>先锁死确定性，<br />再交给模型渲染。</h3></div>
              <p>品牌广告是一门确定性生意。3D 白模先确认机位、构图、运镜与物理，再让 Seedance 负责材质、环境和动态的最终渲染。</p>
            </header>

            <div className="solutionPageBody">
              <section className="solutionArchitecture" aria-label="品牌广告 3D 白模制作架构">
                <div className="architectureTopline"><span>PRODUCTION ARCHITECTURE</span><b>确定性前置 · 概率性后置</b></div>
                <div className="architectureFlow brandSolutionFlow">
                  <div className="architectureNode inputNode">
                    <span>01 · INPUT</span><h4>业务输入</h4>
                    <p>产品 Packshot · 可选 3D 资产 · 运镜参考 · 品牌规范</p>
                  </div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode buildNode">
                    <span>02 · WHITE MODEL</span><h4>白模搭建</h4>
                    <p><b>路径 A</b> Blender 数字孪生<br /><b>路径 B</b> LLM + Three.js 快速迭代</p>
                  </div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode gateNode">
                    <span>03 · CONFIRMATION GATE</span><h4>导演 / 客户确认</h4>
                    <p>静态锁定：机位 · 构图 · 灯光<br />动态锁定：节奏 · 运镜 · 碰撞</p>
                  </div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode renderNode">
                    <span>04 · RENDER</span><h4>Seedance 渲染</h4>
                    <p>12 个参考位锁资产，以 4K 高码率、10 bit 色彩完成材质与环境渲染。</p>
                  </div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode outputNode">
                    <span>05 · DELIVERY</span><h4>专业交付</h4>
                    <p>15 / 30s 品牌成片 · 多角度 KV · C2PA · 五道验收</p>
                  </div>
                </div>
                <div className="architectureRail">
                  <span>白模未通过</span><p>返回白模 / 代码层低成本修改</p><b>换 SKU、材质或市场</b><p>白模不变，只回到渲染层</p>
                </div>
              </section>

              <figure className="solutionDemo brandSolutionDemo">
                <div className="solutionDemoTop"><span>BRAND FILM DEMO</span><b>15 / 30S · 4K DELIVERY</b></div>
                <video src="/media/brand-reference.mp4" poster="/media/brand-poster.jpg" controls muted loop playsInline preload="metadata" aria-label="品牌广告 3D 白模方案视频样片" />
                <figcaption><strong>从 Pre-vis 到成片，镜头语言保持一致。</strong><span>多镜头一致性 · 产品保真 · 专业审片与交付</span></figcaption>
              </figure>
            </div>

            <footer className="solutionProofBar">
              <div><span>短期切口</span><b>Creative Pre-vis</b><p>用可审片白模把创意确认前置</p></div>
              <div><span>核心杠杆</span><b>一次确认，稳定渲染</b><p>概率只留在最后一环</p></div>
              <div><span>长期空间</span><b>Production</b><p>AI + CG 混合替代制作劳动力</p></div>
            </footer>
          </article>

          <article className="solutionPage solutionPerformance">
            <header className="solutionPageHeader">
              <span>02</span>
              <div><small>PERFORMANCE ADVERTISING · CAMPAIGN AGENT</small><h3>把一条素材，<br />变成持续供给系统。</h3></div>
              <p>效果广告的竞争本质是素材供给速度。方案不是单点生成工具，而是嵌入 Campaign Agent，把洞察、生产、投放和复刻连成闭环。</p>
            </header>

            <div className="solutionPageBody performanceSolutionBody">
              <section className="solutionArchitecture" aria-label="效果广告五步运作架构">
                <div className="architectureTopline"><span>FIVE-STEP OPERATING LOOP</span><b>客户动作 × 模型能力</b></div>
                <div className="architectureFlow performanceSolutionFlow">
                  <div className="architectureNode"><span>01</span><h4>热点洞察</h4><p>舆情、热点与竞品投放监测</p><em>社媒洞察 + 创意分析</em></div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode"><span>02</span><h4>广告 Book / 脚本</h4><p>卖点 → Hook → CTA → 分镜</p><em>逐秒脚本 → 生产 Prompt</em></div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode coreNode"><span>03 · CORE</span><h4>AI 内容生产</h4><p>批量生成可直接投放的素材</p><em>Seedream + Seedance + Audio</em></div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode"><span>04</span><h4>投放测试</h4><p>小预算快测，按阈值挑出爆款</p><em>批归因 · 本地化 · 预审</em></div>
                  <i aria-hidden="true">→</i>
                  <div className="architectureNode"><span>05</span><h4>爆款复刻</h4><p>换品、换人、换语言和市场</p><em>保留赢面 → 要素级再生成</em></div>
                </div>
                <div className="performanceReturn"><span>↺</span><p><b>投放信号回流链首：</b>跑赢素材按要素放大，对抗 7–10 天素材衰减。</p></div>
              </section>

              <figure className="solutionDemo performanceSolutionDemo">
                <div className="solutionDemoTop"><span>PERFORMANCE DEMO</span><b>9:16 · READY TO TEST</b></div>
                <video src="/media/performance-generated.mp4" poster="/media/performance-poster.jpg" controls muted loop playsInline preload="metadata" aria-label="效果广告 Campaign Agent 视频样片" />
                <figcaption><strong>用同一结构快速生成 10–100 条变体。</strong><span>UGC 口播 · 商品展示 · 本地场景 · 爆款复刻</span></figcaption>
              </figure>
            </div>

            <footer className="solutionProofBar">
              <div><span>输入</span><b>商品 URL / Brief</b><p>提取卖点、受众和平台规格</p></div>
              <div><span>生产</span><b>可投放 Variant</b><p>Hook、人物、语言、CTA 批量展开</p></div>
              <div><span>反馈</span><b>CTR · CVR · CPA</b><p>胜出结构进入下一轮复刻</p></div>
            </footer>
          </article>

          <article className="solutionPage solutionDisplay">
            <header className="solutionPageHeader">
              <span>03</span>
              <div><small>DISPLAY ADS · CREATIVE MATRIX</small><h3>一个 Brief，<br />展开成全渠道矩阵。</h3></div>
              <p>Display 的核心不是让模型包办一切，而是明确边界：模型负责商业视觉，确定性系统负责文字与版式，再由 Variant Factory 批量适配。</p>
            </header>

            <section className="solutionArchitecture displayArchitecture" aria-label="Display Ads 分层生产架构">
              <div className="architectureTopline"><span>LAYERED PRODUCTION</span><b>视觉交给模型 · 确定信息交给系统</b></div>
              <div className="architectureFlow displaySolutionFlow">
                <div className="architectureNode inputNode"><span>01 · INPUTS</span><h4>Campaign Inputs</h4><p>Brief · Brand Kit · Product Feed</p></div>
                <i aria-hidden="true">→</i>
                <div className="architectureNode plannerNode"><span>02 · PLAN</span><h4>Creative Planner</h4><p>拆解目标，输出构图策略与变体计划</p></div>
                <i aria-hidden="true">→</i>
                <div className="architectureNode visualNode"><span>03 · VISUAL</span><h4>Seedream</h4><p>场景、光影、材质、构图与局部重绘</p><em>Approved Master</em></div>
                <i aria-hidden="true">→</i>
                <div className="architectureNode factoryNode"><span>04 · FACTORY</span><h4>Template + DCO</h4><p>Logo、价格、CTA、法务文字</p><em>尺寸 × 语言 × SKU × 人群</em></div>
                <i aria-hidden="true">→</i>
                <div className="architectureNode qaNode"><span>05 · QA</span><h4>QA Gate + Delivery</h4><p>OCR · VLM · Rules · 人审升级</p><em>Asset Hub / API</em></div>
              </div>
              <div className="displayLayerLegend">
                <div><span>VISUAL LAYER</span><b>视觉层</b><p>无文字或少文字的 Approved Master</p></div>
                <div><span>COPY LAYER</span><b>文案层</b><p>准确、可审计的文字与品牌版式</p></div>
                <div><span>ADAPTATION LAYER</span><b>适配层</b><p>全渠道尺寸、语言、SKU 与人群矩阵</p></div>
              </div>
            </section>

            <section className="displaySolutionDemos" aria-label="Display Ads 图片案例">
              <div className="displaySolutionCopy"><span>IMAGE DEMOS</span><h4>同一套生产逻辑，覆盖三种典型交付。</h4><p>从社交信息流到程序化 Banner，商品、Logo 与价格文字都必须可审、可改、可追溯。</p></div>
              <figure className="displaySolutionTile displaySquare"><img src="/media/demo-display-commerce.jpg" alt="电商社交信息流 Display 广告案例" /><figcaption><span>SOCIAL STATIC</span><b>商品信息流</b><small>1:1 · Carousel / Feed</small></figcaption></figure>
              <figure className="displaySolutionTile displayLandscape"><img src="/media/demo-display-beauty.jpg" alt="美妆品牌横版 Display 广告案例" /><figcaption><span>BRAND × COMMERCE</span><b>横版商品 KV</b><small>16:9 · Social / Retail Media</small></figcaption></figure>
              <figure className="displaySolutionTile displayBanner"><img src="/media/demo-display-diwali.jpg" alt="本地化促销 Banner Display 广告案例" /><figcaption><span>LOCALIZED BANNER</span><b>区域促销套版</b><small>3:1 · Programmatic Display</small></figcaption></figure>
            </section>

            <footer className="solutionProofBar">
              <div><span>母版</span><b>Approved Master</b><p>商品与商业视觉先经人工确认</p></div>
              <div><span>矩阵</span><b>100–1K 图片</b><p>多尺寸、多语言、多 SKU 批量生产</p></div>
              <div><span>门禁</span><b>PASS / REWORK</b><p>规则修复或局部重绘后再交付</p></div>
            </footer>
          </article>

          <aside className="playableSolution">
            <div className="playableIntro"><span>04 · PLAYABLE</span><h3>把“看广告”，<br />变成“先玩一局”。</h3><p>Playable 是效果广告的交互分支：把游戏素材包转成可直接投放的轻量 HTML5 体验，在安装前先验证玩法兴趣。</p></div>
            <div className="playablePipeline" aria-label="Playable 广告生产流程">
              <div><span>INPUT</span><b>游戏资产包</b><p>角色 · 场景 · 规则 · CTA</p></div><i aria-hidden="true">→</i>
              <div><span>ORCHESTRATE</span><b>多模型协同</b><p>玩法拆解 · 资产轻量化 · 交互编排</p></div><i aria-hidden="true">→</i>
              <div><span>OUTPUT</span><b>HTML5 Playable</b><p>自包含 ZIP ≤ 5MB · 商店跳转</p></div>
            </div>
            <div className="playableMeta"><p><span>适合</span>模拟经营 · 卡牌 · 超休闲</p><p><span>当前验证</span>4 类玩法测试，2 类通过</p><a href="https://playable.byteplus-demo.com/" target="_blank" rel="noreferrer">查看 Playable Demo ↗</a></div>
          </aside>
        </div>
        <div className="gapHeader">
          <p className="eyebrow"><span>2.5+</span> / NON-NEGOTIABLE GAPS</p>
          <h3>只保留 2.5 之后<br />仍可能没解决的问题。</h3>
          <p>不重复罗列版本升级自然会改善的基础项，把产品讨论集中到真正影响规模生产的四个硬门槛。</p>
        </div>
        <div className="gapGrid">
          {unresolvedGaps.map((gap) => (
            <article key={gap.no}>
              <div><span>{gap.no}</span><b>{gap.signal}</b></div>
              <h4>{gap.title}</h4>
              <p>{gap.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmapSection" id="roadmap">
        <div className="shell">
          <div className="sectionIntro darkText">
            <p className="eyebrow dark"><span>05</span> / ROADMAP</p>
            <h2>从 SOTA 渲染层，<br />走向核心制作引擎。</h2>
          </div>
          <div className="roadmapGrid">
            {roadmap.map((item) => (
              <article key={item.time}>
                <span>{item.time}</span><h3>{item.title}</h3>
                <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="northStar"><span>NORTH STAR</span><strong>70%</strong><p>制作劳动力替代目标</p></div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">B</span><span>ADS × AI</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
