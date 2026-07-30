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
      src: "/media/performance-reference.mp4",
      poster: "/media/performance-reference.jpg",
      aria: "真实效果广告参考样片",
      headline: "真实投放素材参考",
      meta: "竖屏 UGC · 商品演示 · 转化导向",
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
      { role: "创意自动化", names: "AppLovin · Smartly.io · Creatopy" },
      { role: "零售 / Paid Media", names: "Criteo · Pinterest" },
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

const solutionVideoDemos = {
  brand: [
    {
      order: "01",
      label: "BEAUTY / LUXURY",
      title: "人物特写与睫毛级质感",
      meta: "美妆个护 · 奢品",
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
      meta: "酒水 · 生活方式",
      src: "/media/brand-beverage-demo.mp4",
      poster: "/media/brand-beverage-demo.jpg",
      frames: ["/media/brand-frames/beverage-01.jpg", "/media/brand-frames/beverage-02.jpg", "/media/brand-frames/beverage-03.jpg"],
      proofTitle: "把包装、人物与环境放进同一条叙事。",
      proofs: ["瓶身轮廓与标签在产品镜头中清晰可辨", "暖色环境光与浅景深维持真实摄影感", "动作、人物和产品镜头形成连续叙事节奏"],
    },
    {
      order: "03",
      label: "HOSPITALITY / LIFESTYLE",
      title: "夜景光影与角色连续性",
      meta: "酒店 · 奢旅 · 服务叙事",
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
      meta: "科技 · 电子 · 软件",
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
      title: "商品纹理与镜头推进",
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
      title: "商品操作与 UGC 实拍感",
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
      title: "大件商品与人物交互",
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
      title: "人物保真与局部效果编辑",
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
    impact: "不解决动作语义与空间物理关系，就不能进入规模生产。",
    examples: ["动作意图理解", "人物 × 场景交互", "人物 × 物体交互"],
    link: "https://bytedance.sg.larkoffice.com/docx/O3I3dWdKKof2DtxNkrolaGtIgzc#share-THzudn9RconwUkxVivBlnvQRgNg",
    linkLabel: "Performance-Driven Video Generation with Seedance ↗",
  },
  {
    no: "02",
    title: "世界知识与物理常识缺失",
    copy: "效果广告场景已经收到大量来自商品、3C 和快消客户的 Bad Cases，问题不是画面清晰度，而是模型缺少对真实世界过程与因果关系的理解。",
    signal: "WORLD KNOWLEDGE",
    impact: "商品使用动作错误，会直接让素材失去可信度与投放价值。",
    examples: ["涂口红、穿衣等商品操作姿势错误", "箱子自开、双头、人物位置瞬移", "云不飘动，高速动作下人与道具解绑", "伤口愈合、光学迷彩等过程特效错误"],
    link: "",
    linkLabel: "",
  },
  {
    no: "03",
    title: "商品与品牌要素保真不足",
    copy: "品牌 Logo、商标、商品颜色、包装文字和几何比例必须作为硬约束。当前细节错误、字幕变换、文字崩坏和商品入景后比例失真，都会让品牌方拒绝 POC。",
    signal: "BRAND FIDELITY",
    impact: "品牌审核不是审美打分，而是任何关键要素错误即退回。",
    examples: ["Logo 与商标细节错误", "商品颜色与包装文字漂移", "字幕切换时变形、画面文字崩坏", "商品几何形变与入景比例失真"],
    link: "",
    linkLabel: "",
  },
  {
    no: "04",
    title: "音频参考与情感仍不可控",
    copy: "音色参考不够准确，音频无法 100% 复制参考视频，生成语音机械且情感不足。头部代理商的当前最佳实践，是先用 ElevenLabs 生成语音，再与 Seedance 视频对齐。",
    signal: "AUDIO CONTROL",
    impact: "短期方案应支持外部专业音频接入，而不是强行端到端生成。",
    examples: ["音色参考不准确", "无法完整复制参考音频", "语音机械、情感表现不足", "ElevenLabs 音频 × Seedance 视频对齐"],
    link: "",
    linkLabel: "",
  },
];

export default function Home() {
  return (
    <main className="siteRoot" id="top">
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
              <p className="langZh">未来 3–4 年 · 广告预算结构性迁移</p>
              <p className="langEn">THE NEXT 3–4 YEARS · A STRUCTURAL BUDGET SHIFT</p>
              <h1 className="langZh">AI 降低视频生产成本，<br /><span>视频广告成为全球投放第一大类型。</span></h1>
              <h1 className="langEn">AI lowers video production cost.<br /><span>Video becomes the world’s No.1 ad format.</span></h1>
            </div>
            <div className="marketFlowScope" aria-label="全球数字广告与海外数字广告市场口径">
              <div><span>2026 全球数字广告</span><strong>≈ $1T</strong><small>近万亿美元总盘</small></div>
              <i aria-hidden="true">→</i>
              <div><span>海外数字广告大盘</span><strong>$640–680B</strong><small>剔除中国约 $160B 与海外线下约 $200B</small></div>
            </div>
          </header>

          <figure className="marketFlowFigure" aria-labelledby="market-flow-heading">
            <input className="segmentControl" id="video-segment-mode" type="checkbox" aria-label="查看或收起视频广告三赛道" />
            <div className="marketFlowFigureHead">
              <div><strong id="market-flow-heading">预算迁移流</strong><span>2026 四大支柱 → 2030 视频广告 #1</span></div>
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
                <text x="35" y="155" className="flowName">视频广告</text><text x="35" y="176" className="flowMeta">VIDEO · 26%</text><text x="35" y="229" className="flowHeroValue">$160B</text><text x="232" y="231" textAnchor="end" className="flowShare">26%</text>
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

              <g className="flowEngine">
                <rect x="354" y="150" width="250" height="68" />
                <text x="374" y="173" className="flowEngineOverline">CAUSAL ENGINE</text><text x="374" y="199" className="flowEngineTitle">AI 降本 → 供给规模化 → 预算迁移</text>
              </g>
              <text x="672" y="183" className="flowCrossTitle">3–4 年内跨过 $220B 搜索基准</text>
              <text x="672" y="202" className="flowCrossNote">只使用已知视频预测，不外推其他品类</text>

              <g className="flowOutcomeDefault">
                <rect x="936" y="42" width="236" height="259" />
                <text x="955" y="70" className="flowDefaultOverline">FASTEST-GROWING FORMAT</text>
                <text x="955" y="119" className="flowDefaultValue">$260B</text>
                <text x="1148" y="118" textAnchor="end" className="flowDefaultRank">#1</text>
                <line x1="955" y1="139" x2="1152" y2="139" />
                <text x="955" y="175" className="flowDefaultSignal">3–4 YEARS</text>
                <text x="955" y="199" className="flowDefaultCopy">超过搜索与图文展示广告</text>
                <text x="955" y="244" className="flowDefaultSignal">AI-DRIVEN SUPPLY</text>
                <text x="955" y="268" className="flowDefaultCopy">制作成本下降，视频供给规模化</text>
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
                <text x="300" y="337" className="flowOverline">VIDEO BUDGET TRAJECTORY</text>
                <line x1="300" y1="375" x2="835" y2="375" />
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
            <figcaption>注：四类大盘口径中的 Video 为 $160B；三赛道可拆分口径合计约 $145B。</figcaption>
          </figure>

          <section className="marketFlowAiBand" aria-label="2026 到 2030 AI 价值捕获">
            <div className="marketFlowAiIntro"><span>WHY NOW · COST COMPRESSION</span><h2 className="langZh">AI 把制作瓶颈，<br />变成可规模化供给。</h2><h2 className="langEn">AI turns a production bottleneck<br />into scalable supply.</h2><p>从制作成本中切出 Agent 与模型 API 价值层。</p></div>
            <div className="marketFlowYear current"><header><strong>2026</strong><span>CURRENT</span></header><div className="marketFlowYearTotal"><span>视频广告制作总成本</span><b>$25–30B</b></div><div className="marketFlowMetric"><span>AGENT</span><b>$2B</b><small>≈ 成本 10%</small></div><div className="marketFlowMetric"><span>MODEL API</span><b>$1B</b><small>≈ 成本 5%</small></div></div>
            <div className="marketFlowYear future"><header><strong>2030</strong><span>FORECAST</span></header><div className="marketFlowYearTotal"><span>可替代劳动力盘</span><b>≈ $50B</b></div><div className="marketFlowMetric"><span>AGENT</span><b>$12.8B</b><small>6.4×</small></div><div className="marketFlowMetric"><span>MODEL API</span><b>$6.4B</b><small>6.4×</small></div></div>
            <div className="marketFlowCapture"><span>VALUE CAPTURE</span><strong>AI 已切走 &gt;20%</strong><p>Agent 对应约 $50B 劳动力盘；模型 API 占比同步进入两位数。</p></div>
          </section>
        </div>
      </section>

      <section className="targetPage" id="targets" aria-labelledby="target-page-title">
        <div className="targetPageShell">
          <header className="targetPageHeader">
            <div className="targetPageIndex"><span>02</span><b>2026 BUSINESS TARGET</b></div>
            <div className="targetPageTitle">
              <p>年度 North Star · 月度 DR · 区域结构</p>
              <h2 id="target-page-title">2026 目标与<br /><span>兑现路径。</span></h2>
            </div>
            <p className="targetPageSummary">先锁定头部客户保底，再把合同转成生产流量，最后承接旺季素材需求。</p>
          </header>

          <div className="targetPageCanvas">
            <article className="targetNorthStarCard">
              <div className="targetCardTop"><span>YEAR-END NORTH STAR</span><b>2026</b></div>
              <div className="targetHeroMetric">
                <span>视频模型目标 DRR</span>
                <strong><i>$</i>1.25M</strong>
                <p>年底稳定运行目标</p>
              </div>
              <div className="targetShareTrack" aria-label="视频模型目标占白牌大盘百分之二十">
                <div><span>白牌大盘占比</span><b>20%</b></div>
                <i><em /></i>
              </div>
              <div className="targetImageMetric">
                <div><span>图片模型年底目标</span><strong>$150K</strong></div>
                <p>不拆月度节奏 · 年底稳定占白牌大盘约 15%</p>
              </div>
            </article>

            <article className="targetGrowthCard">
              <header><div><span>MONTHLY DR RAMP</span><h3>月度 DR 的兑现节奏</h3></div><b>07 → 12</b></header>
              <div className="targetGrowthPlot" aria-label="七月至十二月业务爬坡节奏">
                <svg viewBox="0 0 760 220" role="img" aria-label="七月基线、八月签约、九月爬坡、十月旺季、十一月增速回缓、十二月稳定在年底目标">
                  <defs><linearGradient id="target-growth-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5b31" stopOpacity=".25" /><stop offset="1" stopColor="#ff5b31" stopOpacity="0" /></linearGradient></defs>
                  <g className="targetGrid"><line x1="28" y1="48" x2="732" y2="48"/><line x1="28" y1="104" x2="732" y2="104"/><line x1="28" y1="160" x2="732" y2="160"/></g>
                  <path className="targetGrowthArea" d="M64 173 C112 171 140 157 176 150 C220 142 248 128 286 119 C338 107 376 88 416 76 C470 60 510 54 550 49 C608 41 650 35 700 30 L700 188 L64 188Z" />
                  <path className="targetGrowthLine" d="M64 173 C112 171 140 157 176 150 C220 142 248 128 286 119 C338 107 376 88 416 76 C470 60 510 54 550 49 C608 41 650 35 700 30" />
                  <g className="targetPoint july"><circle cx="64" cy="173" r="7"/><text x="64" y="204" textAnchor="middle">JUL</text><text x="64" y="158" textAnchor="middle" className="targetValue">$120K</text></g>
                  <g className="targetPoint august"><circle cx="176" cy="150" r="8"/><text x="176" y="204" textAnchor="middle">AUG</text><text x="176" y="135" textAnchor="middle" className="targetValue">$250K</text></g>
                  <g className="targetPoint september"><circle cx="286" cy="119" r="8"/><text x="286" y="204" textAnchor="middle">SEP</text><text x="286" y="104" textAnchor="middle" className="targetValue">$450K</text></g>
                  <g className="targetPoint october"><circle cx="416" cy="76" r="10"/><text x="416" y="204" textAnchor="middle">OCT</text><text x="416" y="60" textAnchor="middle" className="targetValue">$750K</text></g>
                  <g className="targetPoint november"><circle cx="550" cy="49" r="8"/><text x="550" y="204" textAnchor="middle">NOV</text><text x="550" y="33" textAnchor="middle" className="targetValue">$1.0M</text></g>
                  <g className="targetPoint december"><circle cx="700" cy="30" r="10"/><text x="700" y="204" textAnchor="middle">DEC</text><text x="700" y="14" textAnchor="end" className="targetValue targetEndValue">$1.25M</text></g>
                </svg>
                <div className="targetGrowthMobile" aria-label="七月至十二月月度 DR 目标">
                  <div><span>JUL · BASE</span><b>$120K</b><small>当前基线</small></div>
                  <div><span>AUG · SIGN</span><b>$250K</b><small>头部签约</small></div>
                  <div><span>SEP · RAMP</span><b>$450K</b><small>流量爬坡</small></div>
                  <div className="targetMobilePeak"><span>OCT · PEAK</span><b>$750K</b><small>旺季放量</small></div>
                  <div><span>NOV · EASE</span><b>$1.0M</b><small>增速回缓</small></div>
                  <div className="targetMobileEnd"><span>DEC · STABLE</span><b>$1.25M</b><small>年底目标</small></div>
                </div>
                <div className="targetMilestones">
                  <div><span>01 · 8 月</span><b>头部签约</b><p>完成头部客户保底合同</p></div>
                  <div><span>02 · 9 月</span><b>流量爬坡</b><p>合同转为真实生产流量</p></div>
                  <div className="targetPeak"><span>03 · 10 月</span><b>旺季放量</b><p>承接季节性素材制作需求</p></div>
                  <div className="targetTail"><span>11 月回缓</span><b>→</b><span>12 月稳定目标</span></div>
                </div>
              </div>
            </article>

            <article className="targetRegionCard">
              <header><span>REGIONAL MIX</span><h3>六个销售区，四个承接目标</h3><p>日本 / 韩国区虽本地需求有限，但因头部客户单独保留较高权重；TVP 与 South America 暂不分配目标。</p></header>
              <div className="regionStack" aria-label="区域目标分布">
                <div className="regionOne" style={{ width: "45%" }}><span>45%</span></div>
                <div className="regionTwo" style={{ width: "35%" }}><span>35%</span></div>
                <div className="regionThree" style={{ width: "15%" }}><span>15%</span></div>
                <div className="regionFour" style={{ width: "5%" }}><span>5%</span></div>
              </div>
              <div className="regionLegend">
                <div><i className="regionOneDot"/><span>EUI</span><b>45%</b></div>
                <div><i className="regionTwoDot"/><span>JK</span><b>35%</b></div>
                <div><i className="regionThreeDot"/><span>IME</span><b>15%</b></div>
                <div><i className="regionFourDot"/><span>SEA &amp; ANZ</span><b>5%</b></div>
                <div className="regionZero"><i className="regionFiveDot"/><span>TVP</span><b>0%</b></div>
                <div className="regionZero"><i className="regionSixDot"/><span>SOUTH AMERICA</span><b>0%</b></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="sceneLandscapePage" id="scenarios" aria-labelledby="scene-landscape-title">
        <div className="sceneLandscapeShell">
          <header className="sceneLandscapeHeader">
            <div className="sceneLandscapeIndex"><span>03</span><b>SCENE LANDSCAPE</b></div>
            <div><p>市场规模 × 素材格式 × 制作方</p><h2 id="scene-landscape-title">2. 主流广告场景<br /><span>和需求分析</span></h2></div>
            <p>同一笔广告预算，进入三套完全不同的素材生产系统。先看规模如何分流，再用真实样片拆解生产需求与典型制作方。</p>
          </header>

          <div className="sceneScaleRail" aria-label="2026 广告素材模型 API 规模拆分">
            <div className="sceneScaleSource videoSource"><span>VIDEO MODEL API · 2026</span><strong>$1.0B</strong><small>按 40% / 60% 拆入两类视频场景</small></div>
            <div className="sceneSplitConnector" aria-hidden="true"><i/><b>40%</b><b>60%</b></div>
            <div className="sceneScaleSource imageSource"><span>IMAGE MODEL API · 2026</span><strong>$0.3–0.4B</strong><small>Display Ads 独立生产线</small></div>
          </div>

          <div className="sceneLandscapeCards">
            <article className="sceneLandscapeCard brandSceneCard">
              <header><span>01 · BRAND VIDEO</span><strong>$0.4B</strong><small>视频 API 规模 · 40%</small></header>
              <div className="sceneFormat"><span>典型素材</span><b>15 / 30S</b><p>导演级创意 · 多镜头一致性 · 品牌审片</p></div>
              <dl>
                <div><dt>主要投放</dt><dd>CTV / 流媒体大屏 · YouTube 长视频广告</dd></div>
                <div><dt>目的</dt><dd>曝光量 · 品牌知名度 · 品牌心智</dd></div>
                <div><dt>制作方 / 客户</dt><dd>头部代理商 · 品牌主</dd></div>
                <div><dt>主流模型</dt><dd>Veo 3.1 · Runway · nano banana 2</dd></div>
              </dl>
              <a href="#scene-brand-demo">查看品牌场景样片 <span>↘</span></a>
            </article>

            <article className="sceneLandscapeCard performanceSceneCard">
              <header><span>02 · PERFORMANCE VIDEO</span><strong>$0.6B</strong><small>视频 API 规模 · 60%</small></header>
              <div className="sceneFormat"><span>典型素材</span><b>10–15S</b><p>竖屏 UGC · 10–100 条变体 · 持续投放实验</p></div>
              <dl>
                <div><dt>主要投放</dt><dd>TikTok / Reels / Shorts · 应用内广告网络</dd></div>
                <div><dt>目的</dt><dd>tCPA / tROAS · CTR / CVR · CPI</dd></div>
                <div><dt>制作方 / 客户</dt><dd>AdTech / MarTech · Paid Media · 品牌增长团队</dd></div>
                <div><dt>主流模型</dt><dd>Kling 3.0 · Veo 3.1 · nano banana 2</dd></div>
              </dl>
              <a href="#scene-performance-demo">查看效果场景样片 <span>↘</span></a>
            </article>

            <article className="sceneLandscapeCard displaySceneCard">
              <header><span>03 · DISPLAY ADS</span><strong>$0.3–0.4B</strong><small>图片模型 API 规模</small></header>
              <div className="sceneFormat"><span>典型素材</span><b>100–1K</b><p>静态图 / Banner · 多尺寸 · 多语言批量变体</p></div>
              <dl>
                <div><dt>主要投放</dt><dd>社交信息流静态图 · 程序化展示广告</dd></div>
                <div><dt>目的</dt><dd>CPM / CPC · 低成本覆盖 + 直接转化</dd></div>
                <div><dt>制作方 / 客户</dt><dd>创意自动化平台 · Paid Media · 代理商</dd></div>
                <div><dt>主流模型</dt><dd>nano banana 2 · 少量 Kling / Runway 动效</dd></div>
              </dl>
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
                  <p>样片 → 生产需求 → 制作方 / 客户</p>
                </header>

                <div className="sceneDemoStage">
                  <figure className={`sceneDemoVisual ${item.media.type === "video" ? "sceneDemoVideo" : "sceneDemoImages"}`}>
                    <div className="sceneDemoVisualLabel"><span>REFERENCE DEMO</span><b>{item.media.headline}</b></div>
                    {item.media.type === "video" ? (
                      <video src={item.media.src} poster={item.media.poster} controls muted playsInline preload="metadata" aria-label={item.media.aria} />
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

                    <section className="sceneDemoWho" aria-label={`${item.title}制作方和客户`}>
                      <div className="sceneDemoSubhead"><span>WHO MAKES IT</span><b>制作方 / 客户</b></div>
                      <div className="sceneDemoWhoGrid">
                        {item.customers.map((customer) => <div key={customer.role}><span>{customer.role}</span><b>{customer.names}</b></div>)}
                      </div>
                    </section>

                    <div className="sceneDemoExpanders">
                      <details>
                        <summary><span>展开具体制作流程</span><b>{String(item.steps.length).padStart(2, "0")} STEPS</b><i>＋</i></summary>
                        <ol>{item.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{step.title}</b><p>{step.copy}</p></div></li>)}</ol>
                      </details>
                      <details>
                        <summary><span>展开模型需求</span><b>{item.modelRequirements.length === 1 ? "IMAGE" : "VIDEO + IMAGE"}</b><i>＋</i></summary>
                        <div className="sceneDemoRequirementGrid">
                          {item.modelRequirements.map((group) => <section key={group.type}><h5>{group.type}</h5><ul>{group.items.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul></section>)}
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
            <div><p>预算如何变成模型消耗</p><h2 id="customer-flow-title">钱从上往下走，<br /><span>价值在中间放大。</span></h2></div>
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
                <div>
                  <p>L’ORÉAL · BUDGET → ORGANIZATION → ENTRY</p>
                  <h3 id="loreal-case-title">欧莱雅的品牌预算，<br />沿<span>两条生产路径</span>进入 AI。</h3>
                </div>
                <p>品牌主掌握预算源头。先看哪部分预算进入素材生产，再看集团平台、市场团队和外部代理商如何分工。</p>
              </header>

              <div className="lorealCaseCanvas">
                <section className="lorealBudgetSystem" aria-labelledby="loreal-budget-title">
                  <div className="lorealPanelTitle"><span>01 · MONEY FLOW</span><h4 id="loreal-budget-title">从广告预算，到素材生产池。</h4></div>
                  <div className="lorealBudgetEquation" aria-label="欧莱雅广告预算进入素材生产的结构拆解">
                    <div className="lorealBudgetHero">
                      <small>BRAND BUDGET</small>
                      <strong>100%</strong>
                      <span>品牌主掌握预算源头</span>
                    </div>
                    <i>×</i>
                    <div className="lorealProductionShare">
                      <small>CREATIVE PRODUCTION</small>
                      <strong>≈ 10%</strong>
                      <span>进入素材制作与内容生产</span>
                    </div>
                    <i>=</i>
                    <div className="lorealProductionPool">
                      <small>PRODUCTION ROUTES</small>
                      <strong>2 PATHS</strong>
                      <span>集团内部 + 外部代理</span>
                    </div>
                  </div>

                  <div className="lorealFork" aria-label="内部自制与外部代理两条素材生产路径">
                    <div className="lorealForkStem"><span>素材生产</span><i>↓</i></div>
                    <div className="lorealForkPaths">
                      <article>
                        <span>IN-HOUSE</span>
                        <h5>内部自制</h5>
                        <div className="lorealSplitShare"><strong>日常</strong><small>创意实验 · 快速迭代</small></div>
                        <p>集团平台与市场团队完成日常素材、内部创意实验和快速迭代。</p>
                      </article>
                      <article>
                        <span>OUTSOURCED</span>
                        <h5>外部代理</h5>
                        <div className="lorealSplitShare"><strong>大型</strong><small>制作审片 · 商业交付</small></div>
                        <p>大型广告项目交给外部代理商，承担制作、审片与对外发布。</p>
                      </article>
                    </div>
                  </div>
                </section>

                <section className="lorealOrgSystem" aria-labelledby="loreal-org-title">
                  <div className="lorealPanelTitle"><span>02 · AI OPERATING MODEL</span><h4 id="loreal-org-title">谁在用 AI，决定从哪里切入。</h4></div>
                  <div className="lorealOrgMap" aria-label="欧莱雅 AI 使用组织与 BytePlus 切入关系">
                    <article className="lorealPlatformNode">
                      <span>GROUP PLATFORM</span>
                      <h5>集团 AI 平台</h5>
                      <p>统一承接模型能力、资产与内部工作流。</p>
                    </article>
                    <div className="lorealOrgConnector" aria-hidden="true"><i></i><b>↓</b><i></i></div>
                    <div className="lorealOperatorNodes">
                      <article>
                        <span>INTERNAL USER</span>
                        <h5>平台市场营销团队</h5>
                        <p>内部创意实验 · 日常素材生产</p>
                      </article>
                      <article>
                        <span>EXTERNAL USER</span>
                        <h5>外部广告代理商</h5>
                        <p>大型广告制作 · 商业发布交付</p>
                      </article>
                    </div>
                  </div>

                  <div className="lorealEntryRoutes" aria-label="BytePlus 两条客户切入路径">
                    <div className="lorealEntryTitle"><span>BYTEPLUS ENTRY</span><b>两条路径，同时触达同一笔生产预算</b></div>
                    <article>
                      <span>01</span>
                      <div><small>DIRECT API</small><h5>模型 API 直切</h5><p>进入集团 AI 平台，成为内部生产工作流的底层模型能力。</p></div>
                    </article>
                    <article>
                      <span>02</span>
                      <div><small>AGENCY ROUTE</small><h5>代理商渠道切入</h5><p>联合品牌的广告代理商及其下游制作团队，从实际项目进入生产。</p></div>
                    </article>
                  </div>
                </section>
              </div>

              <footer className="lorealCaseFooter">
                <span>预算源头</span><i>→</i><span>素材生产池</span><i>→</i><span>集团 / 代理双生产路径</span><i>→</i><strong>模型调用</strong>
              </footer>
            </article>

            <article className="wppCasePage" id="customer-agency" aria-labelledby="wpp-case-title">
              <header className="wppCaseHeader">
                <div className="wppCaseIndex"><span>02</span><b>AGENCY CASE</b></div>
                <div>
                  <p>WPP · CREATIVE → PRODUCTION</p>
                  <h3 id="wpp-case-title">WPP，把 <span>Creative</span><br />推进到 Production。</h3>
                </div>
                <p>WPP 值得单独拆解：它以 Creative 为核心，同时连接品牌关系、制作能力和交付链路，是创意投入进入模型生产的典型路径。</p>
              </header>

              <div className="wppCaseCanvas">
                <section className="wppWalletSystem" aria-labelledby="wpp-wallet-title">
                  <div className="wppPanelTitle"><span>01 · PRODUCTION DEPTH</span><h4 id="wpp-wallet-title">越接近生产，模型消耗越深。</h4></div>
                  <div className="wppAgencyWallet">
                    <div><span>VALUE MIGRATION</span><strong>CREATIVE</strong><em>→ PRODUCTION</em><b>代理商的核心价值迁移</b></div>
                    <p>WPP 同时连接品牌关系、导演创意、正式制作与客户交付；模型价值随生产深度持续放大。</p>
                  </div>

                  <div className="wppCaseReason">
                    <span>WHY WPP</span>
                    <strong>贯穿全链路</strong>
                    <p>不是只买一个生成工具，而是有机会把模型嵌入创意、制作和客户交付的完整链路。</p>
                  </div>

                  <div className="wppMoneyRoute" aria-label="WPP 钱包随生产深度放大的流向">
                    <article><span>01</span><h5>Creative</h5><p>从概念、脚本和分镜进入</p><b>预算入口</b></article>
                    <i>→</i>
                    <article><span>02</span><h5>Production</h5><p>AI 进入正式制作与后期</p><b>消耗放大</b></article>
                    <i>→</i>
                    <article><span>03</span><h5>Delivery</h5><p>随客户项目完成商业交付</p><b>收入出口</b></article>
                  </div>
                </section>

                <section className="wppProductionSystem" aria-labelledby="wpp-production-title">
                  <div className="wppPanelTitle"><span>02 · VALUE MIGRATION</span><h4 id="wpp-production-title">从预览工具，进入正式生产。</h4></div>

                  <div className="wppValueLadder" aria-label="代理商 AI 从创意预览走向 Production 的价值迁移">
                    <article>
                      <span>01 · IDEATION</span><h5>创意预览</h5><p>概念、脚本与分镜快速生成</p><b>低模型消耗</b>
                    </article>
                    <i>→</i>
                    <article>
                      <span>02 · REVIEW</span><h5>提案 / 审片</h5><p>可讨论、可修改的品牌素材</p><b>工作流嵌入</b>
                    </article>
                    <i>→</i>
                    <article className="wppProductionFocus">
                      <span>03 · PRODUCTION</span><h5>正式生产</h5><p>AI + CG 进入商业交付链路</p><b>高模型消耗</b>
                    </article>
                  </div>

                  <div className="wppOperatingMap" aria-label="WPP AI 产品与业务团队协作结构">
                    <article className="wppOpenNode">
                      <span>AI PRODUCT LAYER</span><h5>WPP Open</h5><p>统一模型入口 · 创意工作流 · 资产与权限</p>
                    </article>
                    <div className="wppTeamConnector" aria-hidden="true"><i></i><b>↓</b><i></i></div>
                    <div className="wppBusinessTeams">
                      <article><span>CREATIVE</span><h5>导演 / 策略 / 创意</h5><p>定义概念与品牌判断</p></article>
                      <article><span>PRODUCTION</span><h5>制作 / 后期 / CG</h5><p>把创意变成可交付成片</p></article>
                      <article><span>MEDIA</span><h5>媒体 / 客户交付</h5><p>版本化、投放与客户复用</p></article>
                    </div>
                  </div>

                  <div className="wppEntryRail" aria-label="BytePlus 在 WPP 的三步切入路径">
                    <div><span>01</span><p>从 Creative 原型工作流切入</p></div><i>→</i>
                    <div><span>02</span><p>用品牌一致性与可编辑性进入审片</p></div><i>→</i>
                    <div><span>03</span><p>从创意预览继续进入 Production</p></div>
                  </div>
                </section>
              </div>

              <footer className="wppCaseFooter">
                <span>品牌预算</span><i>→</i><span>WPP Open</span><i>→</i><span>Creative</span><i>→</i><strong>Production</strong><i>→</i><span>客户交付</span>
              </footer>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>03</span><b>ADTECH CASE</b></div>
                <div>
                  <p>CAMPAIGN AGENT · REPLICABLE STAGE</p>
                  <h3 id="adtech-case-title">Campaign Agent 正在成为市场主流，<br /><span>素材自动化成为核心场景。</span></h3>
                </div>
                <p>用 AppLovin 展示 Agent 主链路，再以钛动的 Lumos / Navos 作为补充：看素材能力如何从单点 API 变成可复制模块。</p>
              </header>

              <div className="adtechCaseCanvas">
                <section className="adtechAgentSystem" aria-labelledby="adtech-agent-title">
                  <div className="adtechPanelTitle"><span>01 · AGENT ANATOMY</span><h4 id="adtech-agent-title">主流 Campaign Agent，大概长这样。</h4></div>

                  <div className="adtechAgentFlow" aria-label="Campaign Agent 四层核心结构">
                    <article><span>01 · INPUT</span><h5>Campaign 目标</h5><p>客户目标 · Brief · 素材任务</p></article>
                    <i>→</i>
                    <article><span>02 · AGENT</span><h5>Campaign 规划</h5><p>把目标拆成可执行的创意计划</p></article>
                    <i>→</i>
                    <article className="adtechCreativeCore"><span>03 · CORE</span><h5>素材自动化</h5><p>生成、编辑与版本化进入主流程</p><b>核心场景 / 机会</b></article>
                    <i>→</i>
                    <article><span>04 · SCALE</span><h5>客户交付</h5><p>在同一 Agent 内持续迭代与复制</p></article>
                  </div>

                  <div className="adtechReplicableStage" aria-label="Campaign Agent 从验证到可复制阶段">
                    <div className="adtechStageLead"><span>MARKET STAGE</span><strong>1 → 3</strong><p>从单点验证，进入跨客户复制。</p></div>
                    <ol>
                      <li><span>01</span><div><b>单点接入</b><p>先把模型接进一个 Agent</p></div></li>
                      <li><span>02</span><div><b>工作流嵌入</b><p>素材生产成为 Agent 内部模块</p></div></li>
                      <li className="active"><span>03</span><div><b>多客户复制</b><p>同一套生产能力重复售卖</p></div></li>
                    </ol>
                  </div>

                  <div className="adtechGrowthLogic" aria-label="AI 素材占比与模型消耗关系">
                    <div><span>投放规模</span><strong>保持 / 增长</strong></div><i>×</i>
                    <div><span>AI 素材占比</span><strong>持续上升</strong></div><i>=</i>
                    <div className="adtechGrowthResult"><span>模型调用</span><strong>同步放大</strong></div>
                  </div>
                </section>

                <section className="adtechCustomerSystem" aria-labelledby="adtech-customer-title">
                  <div className="adtechPanelTitle"><span>02 · TWO ENTRY MODES</span><h4 id="adtech-customer-title">两个客户，两种切法。</h4></div>

                  <div className="adtechWalletBanner">
                    <span>REPEATABLE CONSUMPTION</span><strong>CORE MODULE</strong><p>素材自动化嵌入 Agent 主流程</p>
                  </div>

                  <div className="adtechCustomerCards">
                    <article className="applovinCard">
                      <header><span>01 · DEEP DIVE</span><h5>AppLovin</h5><b>Agent 主链路</b></header>
                      <ol className="appLovinMechanism">
                        <li><span>01</span><div><b>Campaign 进入</b><p>客户任务先进入 Agent 主链路。</p></div></li>
                        <li><span>02</span><div><b>素材能力被调用</b><p>Agent 在主流程中持续请求生成与编辑。</p></div></li>
                        <li><span>03</span><div><b>随客户复制</b><p>同一素材模块服务更多 Campaign。</p></div></li>
                      </ol>
                      <p className="appLovinEntry"><span>BYTEPLUS ENTRY</span><b>模型 API 直接进入第 02 步，成为 Agent 系统能力。</b></p>
                    </article>

                    <article className="tecdoCard">
                      <header><span>02 · SECOND EXAMPLE</span><h5>钛动</h5><b>Lumos / Navos · 补充案例</b></header>
                      <dl>
                        <div><dt>它做什么</dt><dd>以 Lumos / Navos 一类工具平台承接客户素材生产。</dd></div>
                        <div><dt>素材在哪里</dt><dd>通过模型 API 补齐生成与编辑能力。</dd></div>
                        <div><dt>我们怎么进入</dt><dd>先嵌入 Creative 模块，再随 Campaign Agent 复制。</dd></div>
                      </dl>
                    </article>
                  </div>

                  <div className="adtechEntryStatement">
                    <span>BYTEPLUS STRATEGY</span>
                    <strong>把素材自动化，卖成 Campaign Agent 的必要组成。</strong>
                  </div>
                </section>
              </div>

              <footer className="adtechCaseFooter">
                <span>Campaign 目标</span><i>→</i><span>Campaign Agent</span><i>→</i><strong>素材自动化</strong><i>→</i><span>AI 素材占比上升</span><i>→</i><span>模型消耗放大</span>
              </footer>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell solutions" id="solution-focus">
        <div className="solutionPages">
          <article className="brandProcessPage" id="solution-brand" aria-labelledby="brand-process-title">
            <header className="brandProcessHeader">
              <div className="brandProcessIndex"><span>01</span><b>BRAND PRODUCTION</b></div>
              <div><p>3D WHITE-MODEL × AI HYBRID</p><h3 id="brand-process-title">品牌广告制作方案</h3></div>
              <p><span>CORE LOGIC</span><strong>确定性前置：</strong>先用 3D 白模锁定镜位、运镜和物理关系，再由模型完成最终视觉渲染。</p>
            </header>

            <section className="brandBusinessFlow" aria-label="品牌广告业务制作流程">
              <div className="brandProcessSectionTitle"><span>01 · BUSINESS FLOW</span><h4>谁负责哪一步</h4></div>
              <div className="brandBusinessSteps">
                <article><span>01</span><small>ACCOUNT &amp; STRATEGY</small><h5>拿到客户输入</h5><p>客户素材、品牌规范与最初创意概念。</p><b>OWNER · 客户接口 / 策略团队</b></article>
                <i>→</i>
                <article><span>02</span><small>CREATIVE</small><h5>定义视觉方案</h5><p>脚本、分镜、场景与导演表达。</p><b>OWNER · 创意 / 导演团队</b></article>
                <i>→</i>
                <article className="brandBusinessFocus"><span>03</span><small>PRODUCTION</small><h5>完成专业制作</h5><p>Pre-vis / 3D Layout、模型渲染与后期编辑。</p><b>OWNER · 制作团队 + 模型</b></article>
                <i>→</i>
                <article><span>04</span><small>REVIEW &amp; DELIVERY</small><h5>审片并交付</h5><p>品牌确认、版本调整与最终成片。</p><b>OWNER · 客户 / 代理商</b></article>
              </div>
            </section>

            <section className="brandProductionView" aria-label="品牌广告输入、模型参与与产出示意">
              <div className="brandProcessSectionTitle"><span>02 · PRODUCTION ARCHITECTURE</span><h4>3D 白模 + AI 混合制作</h4></div>
              <div className="brandArchitecture">
                <article className="brandArchitectureStage brandArchitectureInput">
                  <header><span>01 · INPUT</span><b>客户素材包</b></header>
                  <ul><li>产品 Packshot / 可选 3D 资产</li><li>人物、动作与运镜参考</li><li>品牌色、Logo 与商标规范</li></ul>
                  <p className="brandArchitectureOwner"><span>PROVIDED BY</span><b>客户 + Account &amp; Strategy</b></p>
                </article>
                <i aria-hidden="true">→</i>
                <article className="brandArchitectureStage brandArchitectureGreybox">
                  <header><span>02 · 3D WHITE-MODEL</span><b>白模搭建 · 双路径</b></header>
                  <div className="brandGreyboxViewport" aria-label="3D 白模场景示意"><i></i><i></i><i></i><b></b><em>CAM 01</em></div>
                  <div className="brandDualPath"><span>Blender 人工建模</span><span>LLM + three.js</span></div>
                </article>
                <i aria-hidden="true">→</i>
                <article className="brandArchitectureStage brandArchitectureLock">
                  <header><span>03 · PREVIZ LOCK</span><b>镜头与物理关系锁定</b></header>
                  <dl><div><dt>CAMERA</dt><dd>景别 · 焦段 · 运镜</dd></div><div><dt>LIGHT</dt><dd>方向 · 强度 · 阴影</dd></div><div><dt>SPACE</dt><dd>人物 · 商品 · 环境</dd></div></dl>
                  <p>导演 / 客户确认后进入渲染</p>
                </article>
                <i aria-hidden="true">→</i>
                <article className="brandArchitectureStage brandArchitectureRender">
                  <header><span>04 · MODEL LAYER</span><b>Seedance 2.0 / Seedream</b></header>
                  <div className="brandRenderFrames" aria-label="模型渲染连续镜头">
                    <img src="/media/brand-frames/beauty-01.jpg" alt="模型渲染镜头一" />
                    <img src="/media/brand-frames/beauty-02.jpg" alt="模型渲染镜头二" />
                    <img src="/media/brand-frames/beauty-03.jpg" alt="模型渲染镜头三" />
                  </div>
                  <p>模型负责材质、光影与最终画面</p>
                </article>
                <i aria-hidden="true">→</i>
                <article className="brandArchitectureStage brandArchitectureOutput">
                  <header><span>05 · OUTPUT</span><b>正式交付</b></header>
                  <strong>15 / 30s</strong>
                  <ul><li>4K / 高码率品牌成片</li><li>多镜头 Cutdown / KV</li><li>可回到 Previz 局部返工</li></ul>
                </article>
              </div>
              <div className="brandArchitectureLogic"><span>DETERMINISTIC CONTROL · INPUT → 3D → PREVIZ LOCK</span><i></i><strong>GENERATIVE RENDER · MODEL LAYER</strong></div>
            </section>

            <footer className="brandProcessFooter"><span>客户输入</span><i>→</i><span>Creative</span><i>→</i><strong>3D 确定性 + AI 渲染</strong><i>→</i><span>审片与交付</span></footer>
          </article>

          <article className="solutionPage solutionBrand brandDemoPage" id="solution-brand-demos">
            <header className="brandDemoHeader">
              <div className="brandDemoIndex"><span>02</span><b>BRAND FILM</b></div>
              <div><p>四个样片 × 逐镜头说明</p><h3>用样片，<br /><span>讲清模型为什么好。</span></h3></div>
              <p>先看完整视频；再展开连续画面，具体判断一致性、材质和光影是否达到广告制作要求。</p>
            </header>
            <div className="brandDemoBody">
              <div className="brandDemoTopline"><span>04 DEMOS</span><h4>四个垂类，四种制作难题。</h4><p>点击展开连续画面，验证一致性、材质与光影。</p></div>
              <section className="brandDemoGallery" aria-label="品牌广告四个视频 Demo">
                  {solutionVideoDemos.brand.map((demo) => (
                    <article className="brandDemoCard" key={demo.src}>
                      <div className="brandDemoVideo"><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}品牌广告视频 Demo`} /><span>{demo.order}</span></div>
                      <div className="brandDemoMeta"><span>{demo.label}</span><h5>{demo.title}</h5><p>{demo.meta}</p><strong>{demo.proofTitle}</strong></div>
                      <details className="brandProofDisclosure">
                        <summary><span>为什么达到广告要求</span><b>03 PROOF SHOTS</b><i>＋</i></summary>
                        <div className="brandProofDrawer">
                          <div className="brandProofFrames" aria-label={`${demo.title}连续画面`}>
                            {demo.frames.map((frame, frameIndex) => <figure key={frame}><img src={frame} alt={`${demo.title}连续画面 ${frameIndex + 1}`} /><figcaption>SHOT {String(frameIndex + 1).padStart(2, "0")}</figcaption></figure>)}
                          </div>
                          <div className="brandProofCopy"><h6>{demo.proofTitle}</h6><ul>{demo.proofs.map((proof) => <li key={proof}>{proof}</li>)}</ul></div>
                        </div>
                      </details>
                    </article>
                  ))}
              </section>
              <footer className="brandDemoFooter"><span>完整视频</span><i>→</i><span>连续画面</span><i>→</i><strong>具体能力证据</strong></footer>
            </div>
          </article>

          <article className="solutionPage performanceSolutionPage" id="solution-performance">
            <header className="performanceSolutionHeader">
              <div className="performanceSolutionIndex"><span>03</span><b>PERFORMANCE ADS</b></div>
              <div><p>必要流程 × 四个样片</p><h3>效果广告制作方案<br /><span>流程、样片与能力证据。</span></h3></div>
              <p>保留必要的素材生产流程；每个样片都能展开连续截图，直接看商品、人物、动作和局部编辑是否准确。</p>
            </header>

            <div className="performanceSolutionBody">
              <section className="performanceProductionFlow" aria-label="效果广告素材生产流程">
                <div className="performanceFlowTitle"><span>PRODUCTION FLOW</span><b>从 Brief 到可投放变体</b></div>
                <ol>
                  <li><span>01</span><small>INPUT</small><b>商品与 Brief</b><p>商品素材、卖点与目标格式</p></li>
                  <li><span>02</span><small>IDEA</small><b>Hook 与脚本</b><p>口播、演示与镜头顺序</p></li>
                  <li className="performanceFlowFocus"><span>03</span><small>CREATE</small><b>AI 内容生产</b><p>人物、商品、动作与音画</p></li>
                  <li><span>04</span><small>EDIT</small><b>编辑与变体</b><p>局部修改、字幕与多版本交付</p></li>
                </ol>
              </section>

              <section className="performanceEvidenceGallery" aria-label="效果广告四个视频 Demo 与能力证据">
                {solutionVideoDemos.performance.map((demo) => (
                  <article className="performanceEvidenceCard" key={demo.src}>
                    <div className="performanceEvidenceVideo"><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}效果广告视频 Demo`} /><span>{demo.order}</span></div>
                    <div className="performanceEvidenceMeta"><span>{demo.label}</span><h4>{demo.title}</h4><p>{demo.meta}</p><strong>{demo.proofTitle}</strong><b>10–15s · 9:16</b></div>
                    <details className="performanceProofDisclosure">
                      <summary><span>展开模型能力证据</span><b>03 SHOTS</b><i>＋</i></summary>
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

              <footer className="performanceSolutionFooter"><span>生产流程</span><i>→</i><span>完整样片</span><i>→</i><strong>连续截图验证</strong></footer>
            </div>
          </article>

          <article className="solutionPage displaySolutionPage" id="solution-display">
            <header className="displaySolutionHeader">
              <div className="displaySolutionIndex"><span>04</span><b>DISPLAY ADS</b></div>
              <div><p>分层生产 × 系统协同</p><h3>Display Ads 制作方法<br /><span>视觉母版 × DCO。</span></h3></div>
              <p>Creative Planner 定义方向，Seedream 生成商业视觉；Template + DCO 负责文字、尺寸和语言，最后统一质检与交付。</p>
            </header>

            <div className="displaySolutionBody">
              <section className="displayProductionSystem" aria-label="Display Ads 分层制作方法">
                <header><span>PRODUCTION METHOD</span><h4>一条链路，两种生产职责。</h4></header>

                <div className="displayCreativeLane">
                  <div className="displayLaneLabel"><span>01</span><b>视觉创作</b><small>MODEL-ENABLED</small></div>
                  <article><span>INPUTS</span><h5>Campaign Brief</h5><p>Brand Kit · Product Feed</p></article>
                  <i>→</i>
                  <article><span>PLAN</span><h5>Creative Planner</h5><p>构图策略 · 变体计划</p></article>
                  <i>→</i>
                  <article className="displaySeedreamNode"><span>GENERATE</span><h5>Seedream</h5><p>场景 · 光影 · 材质 · 构图</p></article>
                </div>

                <div className="displayMasterHandoff"><span>APPROVED VISUAL MASTER</span><b>商业视觉母版</b><i>↓</i></div>

                <div className="displaySystemLane">
                  <div className="displayLaneLabel"><span>02</span><b>确定性生产</b><small>SYSTEM-DRIVEN</small></div>
                  <article className="displayDcoNode"><span>COMPOSE</span><h5>Template + DCO</h5><p>代码 / Post-edit · Logo · 价格 · CTA · 法务文字</p></article>
                  <i>→</i>
                  <article><span>ADAPT</span><h5>尺寸 × 语言</h5><p>SKU · 市场 · 人群版本</p></article>
                  <i>→</i>
                  <article><span>DELIVER</span><h5>QA + Delivery</h5><p>规则检查 · 人审 · 资产交付</p></article>
                </div>
              </section>

              <footer className="displaySolutionFooter"><span>Creative Planner</span><i>→</i><span>Seedream</span><i>→</i><strong>Template + DCO</strong><i>→</i><span>QA + Delivery</span></footer>
            </div>
          </article>

          <article className="solutionPage displayDemoPage" id="solution-display-demos">
            <header className="displayDemoHeader">
              <div className="displayDemoIndex"><span>05</span><b>DISPLAY OUTPUT</b></div>
              <div><p>图片样片 × 模型能力</p><h3>用图片样片，<br /><span>讲清模型能力。</span></h3></div>
              <p>既看商业视觉质量，也看视觉母版能否进入 Template + DCO，稳定扩展到不同尺寸、语言、SKU 与人群版本。</p>
            </header>

            <div className="displayDemoBody">
              <section className="displayCapabilityRail" aria-label="Display Ads 模型能力判定">
                <header><span>CAPABILITY PROOF</span><h4>一张视觉母版，进入规模化生产。</h4></header>
                <strong>1<br /><i>MASTER</i></strong>
                <dl>
                  <div><dt>01 · VISUAL</dt><dd>Seedream 负责商品、场景、光影与材质。</dd></div>
                  <div><dt>02 · COMPOSE</dt><dd>Template 固定 Logo、价格、CTA 与法务文字。</dd></div>
                  <div><dt>03 · SCALE</dt><dd>DCO 扩展尺寸、语言、SKU 与人群版本。</dd></div>
                </dl>
                <div className="displayCapabilityBoundary"><span>MODEL BOUNDARY</span><b>模型负责视觉；小字与精确排版交给代码 / Post-edit。</b></div>
                <p><span>OUTPUT</span><b>100–1K 图片 / Campaign</b></p>
              </section>

              <section className="displayOutputBoard" aria-label="Display Ads 三种图片交付案例">
                <header><span>OUTPUT EXAMPLES</span><h4>三种典型图片交付。</h4><p>社交信息流、横版商品 KV 与区域促销 Banner。</p></header>
                <div className="displayOutputGrid">
                  <figure className="displayOutputSquare"><img src="/media/demo-display-commerce.jpg" alt="1比1商品社交信息流 Display 广告案例" /><figcaption><span>01 · SOCIAL STATIC</span><b>商品信息流</b><small>1:1 · Feed / Carousel</small></figcaption></figure>
                  <figure className="displayOutputLandscape"><img src="/media/demo-display-beauty.jpg" alt="16比9美妆横版 Display 广告案例" /><figcaption><span>02 · BRAND × COMMERCE</span><b>横版商品 KV</b><small>16:9 · Social / Retail Media</small></figcaption></figure>
                  <figure className="displayOutputBanner"><img src="/media/demo-display-diwali.jpg" alt="3比1本地化促销 Display Banner 案例" /><figcaption><span>03 · LOCALIZED BANNER</span><b>区域促销套版</b><small>3:1 · Programmatic</small></figcaption></figure>
                </div>
                <footer><span>MASTER</span><i>→</i><b>尺寸 × 语言 × SKU × 人群</b><strong>100–1K 图片 / Campaign</strong></footer>
              </section>

              <footer className="displayDemoFooter"><span>商业视觉</span><i>→</i><span>视觉母版</span><i>→</i><strong>Template + DCO</strong><i>→</i><span>多规格交付</span></footer>
            </div>
          </article>

          <aside className="playableSolution" id="solution-playable">
            <div className="playableIntro"><span>06 · PLAYABLE</span><h3>把“看广告”，<br />变成“先玩一局”。</h3><p>Playable 是效果广告的交互分支：把游戏素材包转成可直接投放的轻量 HTML5 体验，在安装前先验证玩法兴趣。</p></div>
            <div className="playablePipeline" aria-label="Playable 广告生产流程">
              <div><span>INPUT</span><b>游戏资产包</b><p>角色 · 场景 · 规则 · CTA</p></div><i aria-hidden="true">→</i>
              <div><span>ORCHESTRATE</span><b>多模型协同</b><p>玩法拆解 · 资产轻量化 · 交互编排</p></div><i aria-hidden="true">→</i>
              <div><span>OUTPUT</span><b>HTML5 Playable</b><p>轻量自包含包 · 商店跳转</p></div>
            </div>
            <div className="playableMeta"><p><span>适合</span>模拟经营 · 卡牌 · 超休闲</p><a href="https://playable.byteplus-demo.com/" target="_blank" rel="noreferrer">查看 Playable Demo ↗</a></div>
          </aside>
        </div>
        <div className="gapHeader">
          <p className="eyebrow"><span>FINAL</span> / PRODUCT REQUIREMENTS</p>
          <h3>最终产品需求：<br />市场分发 × 规模生产。</h3>
          <p>区域策略决定怎么进入预算池，模型能力决定素材能否通过客户验收。2026 年必须同时解决商业化分发和四个 Seedance 生产门槛。</p>
        </div>
        <section className="marketAccessRequirement" aria-label="美国市场与 Resell 商业化策略">
          <div className="marketAccessMetric"><span>REGION PRIORITY</span><strong>50%</strong><p>美国市场占比</p></div>
          <div className="marketAccessPlan">
            <span>2026 · COMMERCIAL REQUIREMENT</span>
            <h4>设计一套比单点工具更有吸引力的 Resell 政策。</h4>
            <p>围绕头部代理商和 AdTech 客户建立可复制的联合售卖机制，借助它们的客户关系与投放系统，触达广告素材预算和媒体投放预算最高的广告主，尤其是头部品牌主。</p>
            <div className="resellRoute" aria-label="Resell 触达路径"><b>BytePlus 模型与方案</b><i>→</i><b>头部代理商 / AdTech</b><i>→</i><b>高预算广告主 / 品牌主</b></div>
            <div className="resellPrinciples"><span>联合方案</span><span>渠道激励</span><span>模型额度</span><span>客户归属</span><span>规模返点</span></div>
          </div>
        </section>
        <article className="productGatePage" id="product-requirements" aria-labelledby="product-gate-title">
          <header className="productGateHeader">
            <div className="productGateIndex"><span>07</span><b>PRODUCTION GATES</b></div>
            <div><p>FINAL · SEEDANCE REQUIREMENTS</p><h3 id="product-gate-title">四个门槛，<br /><span>决定能不能规模生产。</span></h3></div>
            <p>问题不再是单帧是否好看，而是动作、物理、品牌和音频能否稳定通过客户验收。每一项失败，都会让素材退出生产链路。</p>
          </header>

          <div className="productGateBody">
            <div className="productGateMatrix" aria-label="Seedance 广告规模生产的四个产品门槛">
              {unresolvedGaps.map((gap) => (
                <section className={`productGateCard productGateCard${gap.no}`} data-index={gap.no} key={gap.no}>
                  <header><span>{gap.no}</span><b>{gap.signal}</b></header>
                  <h4>{gap.title}</h4>
                  <p>{gap.copy}</p>
                  <strong>{gap.impact}</strong>
                  <ul>{gap.examples.map((example) => <li key={example}>{example}</li>)}</ul>
                  {gap.link && <a href={gap.link} target="_blank" rel="noreferrer">{gap.linkLabel}</a>}
                </section>
              ))}
              <div className="productGateCenter" aria-hidden="true"><span>SCALE</span><b>PRODUCTION</b><i>×</i></div>
            </div>

            <footer className="productGateFooter">
              <span>视觉渲染</span><i>≠</i><strong>可规模生产</strong><b>必须同时通过 4 / 4 门槛</b>
            </footer>
          </div>
        </article>
      </section>

      <section className="roadmapPage" id="roadmap" aria-labelledby="roadmap-title">
        <header className="roadmapPageHeader">
          <div className="roadmapPageIndex"><span>08</span><b>ROADMAP</b></div>
          <div><p>FROM POINT MODEL TO PRODUCTION ENGINE</p><h2 id="roadmap-title">从单点模型，<br /><span>走向广告制作引擎。</span></h2></div>
          <p>今天模型只是局部渲染节点；未来 Omni 必须理解创意意图、空间物理、品牌资产与编辑反馈，才能贯穿完整制作链路。</p>
        </header>

        <div className="roadmapPageBody">
          <section className="roadmapEvolution" aria-label="从当前百分之十到十五覆盖走向未来百分之七十劳动力替代">
            <article className="roadmapState roadmapStateCurrent">
              <header><span>CURRENT</span><b>POINT ASSISTANCE</b></header>
              <strong>10–15%</strong>
              <h3>模型是局部节点。</h3>
              <ul><li>创意预览与 Storyboard</li><li>局部视觉渲染</li><li>后期修补与版本适配</li></ul>
              <p>人仍然负责跨步骤理解、判断与衔接。</p>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapEngine">
              <header><span>EVOLUTION LOGIC</span><b>SINGLE MODEL → OMNI ENGINE</b></header>
              <div className="roadmapEngineCore"><small>ORCHESTRATE</small><strong>OMNI</strong><span>PRODUCTION ENGINE</span></div>
              <div className="roadmapEngineInputs">
                <p><span>01</span><b>创意意图</b><small>Brief · Script · Director Intent</small></p>
                <p><span>02</span><b>空间与物理</b><small>3D · Motion · Interaction</small></p>
                <p><span>03</span><b>品牌资产</b><small>Product · Logo · Color</small></p>
                <p><span>04</span><b>编辑反馈</b><small>Post-edit · Audio · QA</small></p>
              </div>
              <footer>不是更强的单次生成，而是能读写整条生产链。</footer>
            </article>

            <i className="roadmapEvolutionArrow" aria-hidden="true">→</i>

            <article className="roadmapState roadmapStateFuture">
              <header><span>FUTURE</span><b>ENGINE-LED</b></header>
              <strong>70%</strong>
              <h3>替代制作劳动力。</h3>
              <ul><li>多步骤连续理解</li><li>跨工具自动编排</li><li>专业交付与规模复用</li></ul>
              <p><span>VALUE CAPTURE</span><b>≈ 20%</b>劳动力覆盖不等于价值全额获取。</p>
            </article>
          </section>

          <section className="roadmapProductionRail" aria-label="品牌广告制作全链路与 AI 覆盖变化">
            <header><span>PRIMARY IMPACT · BRAND PRODUCTION</span><b>完整制作链</b></header>
            <ol><li><span>01</span><b>Brief / 创意设计</b></li><li><span>02</span><b>Pre-vis / 3D 白模</b></li><li><span>03</span><b>拍摄 / AI 渲染</b></li><li><span>04</span><b>后期 / 审片交付</b></li></ol>
            <div className="roadmapCoverageTracks">
              <p><span>CURRENT</span><i><b /></i><strong>10–15%</strong></p>
              <p><span>FUTURE</span><i><b /></i><strong>70%</strong></p>
            </div>
          </section>

          <footer className="roadmapPageFooter"><span>单点模型</span><i>→</i><strong>Omni 制作引擎</strong><i>→</i><span>70% 制作劳动力覆盖</span></footer>
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
