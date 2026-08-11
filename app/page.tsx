import InlineTextEditor from "./InlineTextEditor";
import ArchitectureImageLightbox from "./ArchitectureImageLightbox";
import PlayableClipLightbox from "./PlayableClipLightbox";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";

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

type DemoLink = {
  onePagerUrl?: string;
  onePagerStatus?: "published" | "coming-soon" | "internal";
};

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
      label: "SHOPPABLE VIDEO",
      title: "演示 + 商品卡即购",
      titleEn: "Demo + Card-to-Buy",
      meta: "服饰 · 商品卡转化",
      metaEn: "Fashion · shoppable conversion",
      src: "/media/performance-2026/shoppable.mp4",
      poster: "/media/performance-2026/shoppable.jpg",
      frames: ["/media/performance-2026/shoppable-frames/01.jpg", "/media/performance-2026/shoppable-frames/02.jpg", "/media/performance-2026/shoppable-frames/03.jpg"],
      proofTitle: "从真人试穿演示，直接承接商品卡购买动作。",
      proofTitleEn: "A try-on demo hands off directly to the product card.",
      proofs: ["真人展示衬衫版型、袖口与上身效果", "人物和商品在远近景切换中保持一致", "结尾用明确手势引导点击商品卡"],
      proofsEn: ["A real person demonstrates fit, cuff and on-body styling", "Person and product remain consistent across framing", "A clear final gesture directs users to the product card"],
      ...({ onePagerStatus: "internal" } satisfies DemoLink),
    },
    {
      order: "02",
      label: "VERTICAL FEED · 1S HOOK",
      title: "1 秒钩子 + 直给卖点",
      titleEn: "1s Hook + Direct Selling",
      meta: "护肤 · 信息流转化",
      metaEn: "Skincare · feed conversion",
      src: "/media/performance-2026/hook-direct.mp4",
      poster: "/media/performance-2026/hook-direct.jpg",
      frames: ["/media/performance-2026/hook-direct-frames/01.jpg", "/media/performance-2026/hook-direct-frames/02.jpg", "/media/performance-2026/hook-direct-frames/03.jpg"],
      proofTitle: "第一秒抛出痛点，随后用产品演示证明卖点。",
      proofTitleEn: "The first second states the pain point, then product proof delivers the benefit.",
      proofs: ["开场问题第一时间建立观看理由", "质地、涂抹和效果镜头连续证明卖点", "包装与购买引导在结尾清晰出现"],
      proofsEn: ["The opening question creates an immediate reason to watch", "Texture, application and result shots prove the benefit", "Product pack and purchase cue land clearly at the end"],
      ...({ onePagerStatus: "internal" } satisfies DemoLink),
    },
    {
      order: "03",
      label: "IN-STREAM · FEATURE DEMO",
      title: "功能演示导购",
      titleEn: "Feature Demo Selling",
      meta: "运动装备 · 插播广告",
      metaEn: "Sports gear · in-stream video",
      src: "/media/performance-2026/feature-demo.mp4",
      poster: "/media/performance-2026/feature-demo.jpg",
      frames: ["/media/performance-2026/feature-demo-frames/01.jpg", "/media/performance-2026/feature-demo-frames/02.jpg", "/media/performance-2026/feature-demo-frames/03.jpg"],
      proofTitle: "用真实使用场景，把核心功能讲清楚并导向购买。",
      proofTitleEn: "Real use cases explain the core feature and move toward purchase.",
      proofs: ["第一视角山地骑行快速建立使用场景", "动作、路况与产品功能形成直接对应", "横版叙事留出更完整的功能讲解空间"],
      proofsEn: ["First-person trail riding establishes the use case immediately", "Action, terrain and product function connect directly", "Landscape storytelling leaves room for complete feature proof"],
      ...({ onePagerStatus: "internal" } satisfies DemoLink),
    },
    {
      order: "04",
      label: "BUMPER · SINGLE POINT",
      title: "单卖点闪记",
      titleEn: "Single-Point Flash",
      meta: "快餐 · 超短促销提醒",
      metaEn: "QSR · ultra-short reminder",
      src: "/media/performance-2026/single-point.mp4",
      poster: "/media/performance-2026/single-point.jpg",
      frames: ["/media/performance-2026/single-point-frames/01.jpg", "/media/performance-2026/single-point-frames/02.jpg", "/media/performance-2026/single-point-frames/03.jpg"],
      proofTitle: "一条片只讲一个卖点，用强产品特写完成快速记忆。",
      proofTitleEn: "One film, one benefit, delivered through memorable product close-ups.",
      proofs: ["高冲击食物特写迅速占领注意力", "单一卖点与品牌露出集中在短时长内", "节奏紧凑，适合 Bumper 与开屏提醒"],
      proofsEn: ["High-impact food close-ups capture attention immediately", "One benefit and brand cue land within a short runtime", "Tight pacing fits bumper and opening-screen reminders"],
      ...({ onePagerStatus: "internal" } satisfies DemoLink),
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
    flowRole: "制定预算、传播目标与品牌规范",
    flowRoleEn: "Set budgets, objectives and brand rules",
    flowNote: "年度传播目标与品牌资产形成 Brief，经品牌、法务与采购审核后交给内部团队或制作伙伴。",
    trend: "Brief → 资产授权 → 品牌审核 → 制作交付",
    trendEn: "Brief → asset rights → brand review → delivery",
    opportunity: "模型 API 与资产权限管理，支持符合品牌规范的规模化生成。",
    opportunityEn: "Model APIs and asset controls for brand-safe generation at scale.",
    examples: "L’Oréal · Coca-Cola",
  },
  {
    index: "02",
    role: "制作放大",
    roleEn: "PRODUCTION SCALE",
    title: "代理商",
    titleEn: "Agencies",
    flowRole: "承接策略、创意与制作预算",
    flowRoleEn: "Hold strategy, creative and production budgets",
    flowNote: "接收品牌 Brief，完成策略、脚本与分镜，再进入制作、后期、审核和多渠道交付。",
    trend: "Brief → 策略 / 分镜 → 制作 / 后期 → 交付",
    trendEn: "Brief → strategy / boards → production / post → delivery",
    opportunity: "用生成模型和工作流工具连接预演、成片制作、本地化与版本管理。",
    opportunityEn: "Connect previsualization, production, localization and versioning with generative workflows.",
    examples: "WPP · Havas",
  },
  {
    index: "03",
    role: "复利消耗",
    roleEn: "COMPOUNDING USAGE",
    title: "AdTech / MarTech",
    titleEn: "AdTech / MarTech",
    flowRole: "把投放目标转成持续素材生产",
    flowRoleEn: "Turn campaign goals into continuous creative production",
    flowNote: "连接商品、素材与投放约束，批量生成变体并依据实验结果持续迭代。",
    trend: "素材接入 → 变体生成 → A/B 测试 → 自动迭代",
    trendEn: "Asset ingest → variants → A/B tests → automated iteration",
    opportunity: "把模型 API 嵌入 Campaign Agent，随素材与实验次数形成持续调用。",
    opportunityEn: "Embed model APIs in campaign agents for recurring calls across assets and experiments.",
    examples: "AppLovin · 钛动",
    examplesEn: "AppLovin · TecDo",
  },
  {
    index: "04",
    role: "媒体反馈",
    roleEn: "MEDIA FEEDBACK",
    title: "Paid Media",
    titleEn: "Paid media",
    flowRole: "完成分发、优化并返回效果信号",
    flowRoleEn: "Distribute, optimize and return performance signals",
    flowNote: "按受众与版位完成投放优化，将聚合效果信号送回下一轮创意生产。",
    trend: "分发 → 优化 → 聚合反馈 → 下一轮素材",
    trendEn: "Delivery → optimization → aggregated feedback → next creative",
    opportunity: "连接投放反馈与生成工作流，缩短下一轮素材迭代周期。",
    opportunityEn: "Connect media feedback to generation workflows and shorten creative iteration cycles.",
    examples: "Criteo · Pinterest",
  },
];

export default function Home() {
  return (
    <main className="siteRoot" id="top">
      {process.env.NODE_ENV === "development" ? <InlineTextEditor /> : null}
      <input className="langControl" id="language-mode" type="checkbox" defaultChecked aria-label="Switch between English and Chinese" />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="BytePlus Advertising Creative Production Solutions home">
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
          <div className="marketOverviewPage">
            <header className="marketFlowIntro">
            <div className="marketFlowIndex"><span>01</span><b>MARKET OVERVIEW</b></div>
            <div className="marketFlowTitle">
              <h1 className="langZh">AI 正在重塑广告市场的供给方式</h1>
              <h1 className="langEn">AI Is Reshaping How Advertising Supply Is Created</h1>
            </div>
            </header>

            <figure className="marketFlowFigure" aria-labelledby="market-flow-heading">
            <MarketTrackAutoReveal />
            <div className="marketFlowFigureHead">
              <div><strong id="market-flow-heading"><span className="langZh">海外数字广告市场规模与增速</span><span className="langEn">Overseas digital ad market · size and growth</span></strong></div>
              <label className="marketFlowToggle" htmlFor="video-segment-mode"><span className="segmentClosedText"><span className="langZh">查看三赛道</span><span className="langEn">View 3 tracks</span></span><span className="segmentOpenText"><span className="langZh">收起三赛道</span><span className="langEn">Hide 3 tracks</span></span><i aria-hidden="true">＋</i></label>
            </div>

            <svg className="marketFlowSvg" viewBox="0 0 1200 430" role="img" aria-label="2026 年四类海外数字广告基线，视频广告增长至 2030 年 2600 亿美元">
              <defs>
                <pattern id="market-flow-grid" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="currentColor" strokeOpacity=".06" /></pattern>
                <linearGradient id="market-flow-blue" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#2149E6" />
                  <stop offset=".58" stopColor="#3B6FE8" />
                  <stop offset="1" stopColor="#63BCE8" />
                </linearGradient>
              </defs>
              <rect width="1200" height="430" className="flowGrid" fill="url(#market-flow-grid)" />
              <g className="flowLabels">
                <text x="18" y="24" className="flowOverline">2026 · CURRENT MARKET</text>
                <text x="936" y="24" className="flowOverline">2030 · VIDEO OUTCOME</text>
              </g>

              <g className="flowBaseline flowSearch">
                <rect x="18" y="46" width="236" height="60" />
                <text x="35" y="70" className="flowName"><tspan className="langZh">搜索广告</tspan><tspan className="langEn">Search ads</tspan></text><text x="35" y="88" className="flowMeta">33%</text><text x="232" y="82" textAnchor="end" className="flowValue">$220B</text>
              </g>

              <path className="flowVideoRiver" d="M254 125 C470 127 630 94 820 55 C875 44 914 42 936 42 L936 301 C877 301 825 304 756 307 C575 315 426 284 254 282Z" />
              <g className="flowBaseline flowVideo">
                <rect x="18" y="125" width="236" height="157" />
                <text x="35" y="155" className="flowName"><tspan className="langZh">视频广告</tspan><tspan className="langEn">Video ads</tspan></text><text x="35" y="176" className="flowMeta">26%</text><text x="35" y="229" className="flowHeroValue">$160B</text>
                <text x="35" y="259" className="flowNote"><tspan className="langZh">CTR / CVR 更优，但制作成本曾限制供给</tspan><tspan className="langEn">Better CTR / CVR — production cost capped supply</tspan></text>
              </g>
              <g className="flowBaseline flowDisplay">
                <rect x="18" y="301" width="205" height="52" />
                <text x="35" y="324" className="flowName"><tspan className="langZh">图文展示</tspan><tspan className="langEn">Display</tspan></text><text x="35" y="342" className="flowMeta">24%</text><text x="203" y="334" textAnchor="end" className="flowValue">$160B</text>
              </g>
              <g className="flowBaseline flowRmn">
                <rect x="18" y="368" width="170" height="47" />
                <text x="35" y="389" className="flowName"><tspan className="langZh">零售媒体</tspan><tspan className="langEn">Retail</tspan></text><text x="35" y="405" className="flowMeta">17%</text><text x="169" y="399" textAnchor="end" className="flowValue">$110B</text>
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
                <g className="flowSegmentTrack flowSegmentTrackSocial">
                  <rect x="936" y="42" width="236" height="113" className="flowSocial" />
                  <text x="955" y="68" className="flowSegmentName">SOCIAL VIDEO</text><text x="955" y="105" className="flowSegmentValue">62 → 115B</text><text x="1148" y="69" textAnchor="end" className="flowSegmentDelta">+85%</text>
                </g>
                <g className="flowSegmentTrack flowSegmentTrackCtv">
                  <rect x="936" y="155" width="236" height="88" className="flowCtv" />
                  <text x="955" y="181" className="flowSegmentName">CTV</text><text x="955" y="215" className="flowSegmentValue">45 → 90B</text><text x="1148" y="181" textAnchor="end" className="flowSegmentDelta">+100%</text>
                </g>
                <g className="flowSegmentTrack flowSegmentTrackOlv">
                  <rect x="936" y="243" width="236" height="58" className="flowOlv" />
                  <text x="955" y="267" className="flowSegmentName">OLV</text><text x="955" y="291" className="flowSegmentValue small">38 → 55B</text><text x="1148" y="267" textAnchor="end" className="flowSegmentDelta dark">+45%</text>
                </g>
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
                <div><span>33%</span><strong>$220B</strong></div>
                <div className="active"><span>26%</span><strong>$160B</strong><small><span className="langZh">AI 降本释放规模供给</span><span className="langEn">AI cost-down unlocks supply</span></small></div>
                <div><span>24%</span><strong>$160B</strong></div>
                <div><span>17%</span><strong>$110B</strong></div>
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
          </div>

          <section className="marketTrendSection" aria-labelledby="market-trends-title">
            <header className="marketTrendSectionHeader">
              <span>01 · MARKET OVERVIEW</span>
              <h2 id="market-trends-title"><B zh={<>AI 在广告行业崛起：<strong>三个清晰趋势</strong></>} en="Advertising Is Moving Toward AI-Native Production" /></h2>
            </header>

            <div className="marketTrendGrid">
              <article className="marketTrendCard marketTrendVideo">
                <header><span>01</span><b>VIDEO</b></header>
                <h3><B zh="视频广告成为主流" en="Video Advertising Becomes the Dominant Format" /></h3>
                <div className="marketTrendVisual marketVideoChart" role="img" aria-label="视频广告从 2026 年 1600 亿美元增长至 2030 年 2600 亿美元，规模增长至 1.63 倍">
                  <div className="marketCompareBar current"><b>$160B</b><i /><span>2026</span></div>
                  <div className="marketCompareArrow"><b>1.63×</b><strong>→</strong><small>2026–30</small></div>
                  <div className="marketCompareBar video"><b>$260B</b><i /><span>2030</span><em>#1</em></div>
                </div>
              </article>

              <article className="marketTrendCard marketTrendAgent">
                <header><span>02</span><b>CAMPAIGN AGENT</b></header>
                <h3><B zh="Campaign Agent 在 2026 年进入规模化阶段" en="Campaign Agents Scale in 2026" /></h3>
                <div className="marketTrendVisual marketAgentAdoption" role="img" aria-label="Campaign Agent 自动化采用的年度运行规模在三个季度内从 600 亿美元增长至 750 亿美元">
                  <div className="marketAgentAdoptionTitle"><span>AD MANAGER</span><i>→</i><strong>CAMPAIGN AGENT</strong></div>
                  <div className="marketAdoptionBars">
                    <div className="before"><b>$60B</b><i /></div>
                    <div className="after"><b>$75B</b><i /></div>
                  </div>
                  <p>$60B → $75B <span>3 QTRS</span></p>
                </div>
              </article>

              <article className="marketTrendCard marketTrendCreator">
                <header><span>03</span><b>CREATIVE TEAMS</b></header>
                <h3><B zh="AI 成为创意团队的标准能力" en="AI Becomes Table Stakes for Creators" /></h3>
                <div className="marketTrendVisual marketCreatorAdoption" role="img" aria-label="创意流程中的 AI 部署率当前为 83%，高于 2024 年的 60%">
                  <div className="marketAdoptionDonut"><span>83%</span><small>CURRENT</small></div>
                  <strong>VS. 60% IN 2024</strong>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="customerFlowPage" id="audience" aria-labelledby="customer-flow-title">
        <div className="customerFlowShell">
          <header className="customerFlowHeader">
            <div className="customerFlowIndex"><span>02</span><b><B zh="客群策略" en="CUSTOMER STRATEGY" /></b></div>
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
                    <div className="customerFlowTrend"><small><B zh="标准工作流" en="STANDARD WORKFLOW" /></small><h4><B zh={stage.trend} en={stage.trendEn} /></h4><p className="customerFlowOpportunity"><strong><B zh="BYTEPLUS OFFER" en="BYTEPLUS OFFER" /></strong><B zh={stage.opportunity} en={stage.opportunityEn} /></p></div>
                    <div className="customerFlowExamples"><small><B zh="公开行业示例" en="PUBLIC EXAMPLES" /></small><b><B zh={stage.examples} en={stage.examplesEn ?? stage.examples} /></b></div>
                  </article>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="audienceSection customerCasesSection" id="customer-cases">
        <div className="shell">
          <div className="customerStories">
            <article className="lorealCasePage" id="customer-brand" aria-labelledby="loreal-case-title">
              <header className="lorealCaseHeader">
                <div className="lorealCaseIndex"><span>01</span><b><B zh="欧莱雅" en="L’ORÉAL" /></b></div>
                <div className="lorealCaseTitle">
                  <h3 id="loreal-case-title"><span className="langZh">全球品牌主业务模式：<br /><span>一套品牌资产，两条生产链路。</span></span><span className="langEn">Global brand-owner model:<br /><span>one asset system, two production lanes.</span></span></h3>
                </div>
              </header>

              <div className="lorealReportCanvas">
                <section className="lorealReportCore" aria-labelledby="loreal-report-core-title">
                  <header>
                    <div><span><B zh="01 · 业务模式" en="01 · OPERATING MODEL" /></span><h4 id="loreal-report-core-title"><B zh="以欧莱雅为代表：总部统一管理品牌资产，全球与区域需求分流生产。" en="Using L’Oréal as a representative example: centrally managed brand assets feed global and regional briefs." /></h4></div>
                    <p><strong>1</strong><small><B zh="套品牌资产体系" en="BRAND ASSET SYSTEM" /></small><i>→</i><strong>2</strong><small><B zh="条生产链路" en="PRODUCTION LANES" /></small></p>
                  </header>

                  <div className="lorealReportEngine">
                    <section className="lorealReportAsset">
                      <span><B zh="总部统一管理" en="CENTRALLY MANAGED" /></span>
                      <h5><B zh="品牌资产库" en="Brand asset library" /></h5>
                      <p><B zh="一套资产，为全球与区域生产提供统一标准。" en="One asset system sets the standard for global and regional production." /></p>
                      <ul>
                        <li><B zh="品牌规范" en="Brand rules" /></li>
                        <li><B zh="产品图" en="Product imagery" /></li>
                        <li><B zh="标识" en="Logos" /></li>
                        <li><B zh="字体" en="Typography" /></li>
                      </ul>
                    </section>

                    <i className="lorealReportConnector" aria-hidden="true">→</i>

                    <div className="lorealReportRoutes">
                      <article className="lorealReportRoute lorealReportRouteAlwaysOn">
                        <header>
                          <span>01</span>
                          <div><small><B zh="链路一" en="LANE A" /></small><h5><B zh="高频素材" en="Always-on content" /></h5></div>
                          <b><B zh="电商 · 社媒 · 官网" en="COMMERCE · SOCIAL · WEB" /></b>
                        </header>
                        <ol>
                          <li><span>01</span><strong><B zh="区域市场素材需求" en="Regional content needs" /></strong></li>
                          <li><span>02</span><strong><B zh="模板化生成与本地化" en="Templated generation and localization" /></strong></li>
                          <li><span>03</span><strong><B zh="品牌与法务审核" en="Brand and legal review" /></strong></li>
                          <li><span>04</span><strong><B zh="多渠道交付" en="Multi-channel delivery" /></strong></li>
                        </ol>
                      </article>

                      <article className="lorealReportRoute lorealReportRouteHero">
                        <header>
                          <span>02</span>
                          <div><small><B zh="链路二" en="LANE B" /></small><h5><B zh="品牌主片" en="Hero film" /></h5></div>
                          <b><B zh="品牌主片 · 电视广告片" en="HERO FILM · TVC" /></b>
                        </header>
                        <ol>
                          <li><span>01</span><strong><B zh="全球品牌主片需求" en="Global hero-film brief" /></strong></li>
                          <li><span>02</span><strong><B zh="代理商与制作伙伴" en="Agency and production partner" /></strong></li>
                          <li><span>03</span><strong><B zh="主片制作与品牌审核" en="Master production and brand review" /></strong></li>
                          <li><span>04</span><strong><B zh="区域本地化交付" en="Regional localization and delivery" /></strong></li>
                        </ol>
                      </article>
                    </div>
                  </div>
                </section>

              </div>

            </article>

            <article className="wppWorkPage wppMergedPage" id="customer-agency" aria-labelledby="wpp-work-title">
              <header className="wppWorkHeader">
                <div className="wppWorkIndex"><span>02</span><b><B zh="代表性代理商" en="AGENCY MODEL" /></b></div>
                <div>
                  <h3 id="wpp-work-title"><span className="langZh">全球代理商业务模式：<br /><span>从创意预演，到母版制作与媒体交付。</span></span><span className="langEn">Global agency operating model:<br /><span>from creative previsualization to master production and media delivery.</span></span></h3>
                </div>
                <aside className="wppMergedAgencies">
                  <span><B zh="代表性代理商" en="REPRESENTATIVE AGENCIES" /></span>
                  <strong>WPP · Havas · Publicis</strong>
                  <a href="#solution-brand"><B zh="查看完整制作方案" en="View full production solution" /><b>↘</b></a>
                </aside>
              </header>

              <section className="wppMergedStages" aria-label="代理商创意、制作与媒体三类核心交付">
                <article>
                  <span>01 · <B zh="创意" en="CREATIVE" /></span>
                  <h4><B zh="创意概念 → 可审阅预演" en="Creative concept → reviewable previz" /></h4>
                  <p><B zh="把策略转成脚本、分镜与导演预演。" en="Turn strategy into scripts, boards and director-led previsualization." /></p>
                </article>
                <i aria-hidden="true">→</i>
                <article>
                  <span>02 · <B zh="制作" en="PRODUCTION" /></span>
                  <h4><B zh="生产资产 → 高质量母版" en="Production assets → high-quality master" /></h4>
                  <p><B zh="协同实拍、三维、生成与后期完成正式制作。" en="Combine live action, 3D, generation and post-production." /></p>
                </article>
                <i aria-hidden="true">→</i>
                <article>
                  <span>03 · <B zh="媒体" en="MEDIA" /></span>
                  <h4><B zh="审核母版 → 多渠道版本" en="Approved master → channel variants" /></h4>
                  <p><B zh="适配不同渠道、市场、语言与受众。" en="Adapt across channels, markets, languages and audiences." /></p>
                </article>
              </section>

              <div className="wppWorkCanvas">
                <section className="wppWorkFlow" aria-label="代理商品牌广告四步工作方式">
                  <header><span><B zh="团队与流程" en="TEAM &amp; WORKFLOW" /></span><h4><B zh="通用制作工作流" en="Standard production workflow" /></h4></header>
                  <ol>
                    <li>
                      <span>01</span>
                      <div><h5><B zh="创意与预演" en="Creative &amp; Previz" /></h5><p><B zh="导演主导创意概念，生成式预演分镜经过品牌审阅后进入制作。" en="Director-led concepts; generative previsualization boards move into production after brand review." /></p></div>
                    </li>
                    <li>
                      <span>02</span>
                      <div><h5><B zh="正式制作" en="Production" /></h5><p><B zh="实拍、三维制作与生成式渲染协同，确保帧级质量和跨镜头一致性。" en="Live action, 3D and generative rendering work together for frame-level quality and consistency." /></p></div>
                    </li>
                    <li>
                      <span>03</span>
                      <div><h5><B zh="后期与声音" en="Post-production &amp; audio" /></h5><p><B zh="完成特效、逐帧修补、剪辑、调色和声音制作，再形成可审阅母版。" en="Complete VFX, frame-level cleanup, editing, grading and audio before producing a reviewable master." /></p></div>
                    </li>
                    <li>
                      <span>04</span>
                      <div><h5><B zh="审核与交付" en="Review &amp; delivery" /></h5><p><B zh="经过品牌、法务和平台规范审核后，输出母版及各渠道交付版本。" en="After brand, legal and platform review, deliver the master and channel-ready versions." /></p></div>
                    </li>
                  </ol>
                  <footer><B zh="高质量母版 · 多轮审核 · 多渠道版本交付" en="High-quality master · iterative review · multi-channel delivery" /></footer>
                </section>

                <section className="wppWorkCase" aria-label="汽车广告混合制作流程示例">
                  <header>
                    <span><B zh="流程示例 · 汽车广告" en="WORKFLOW EXAMPLE · AUTOMOTIVE" /></span>
                    <h4><B zh="汽车广告混合制作：实拍锁定运动，Seedream + Seedance 完成场景与特效。" en="Hybrid automotive production: live action locks motion; Seedream + Seedance build the scene and VFX." /></h4>
                    <p><B zh="先拍摄车辆运动参考，再生成环境、目标画面与特效版本，最后进入剪辑、调色和品牌审核。" en="Capture vehicle motion reference, generate environment, target frames and VFX variants, then move through edit, grade and brand review." /></p>
                  </header>
                  <div className="wppWorkCaseClips">
                    <figure>
                      <video src="/media/wpp-auto-input.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="封闭场地实拍运动参考片段" />
                      <figcaption><B zh="实拍运动参考" en="REAL SHOOT · MOTION REF" /></figcaption>
                    </figure>
                    <i aria-hidden="true">→</i>
                    <figure>
                      <video src="/media/wpp-auto-final.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="Seedance 生成的巴黎街区 VFX 成片片段" />
                      <figcaption><B zh="生成式特效成片" en="GENERATIVE VFX FINAL" /></figcaption>
                    </figure>
                  </div>
                  <p className="wppWorkCasePipeline"><b><B zh="制作链路" en="PIPELINE" /></b><B zh="Seedream 生成环境板与目标帧" en="Seedream builds environment plates and target frames" /> <i>→</i> <B zh="Seedance 以视频参考锁运动、图像参考锁质感" en="Seedance locks motion via video ref and look via image refs" /></p>
                  <div className="wppWorkCaseMetrics">
                    <div><span><B zh="运动控制" en="MOTION CONTROL" /></span><strong><B zh="实拍参考" en="VIDEO REF" /></strong><small><B zh="保留车辆速度、路径与镜头运动" en="Preserves speed, path and camera motion" /></small></div>
                    <div><span><B zh="视觉控制" en="VISUAL CONTROL" /></span><strong><B zh="目标帧" en="IMAGE REF" /></strong><small><B zh="锁定环境、材质、光线与特效风格" en="Locks environment, material, light and VFX style" /></small></div>
                    <div><span><B zh="版本延展" en="VERSIONING" /></span><strong><B zh="批量变体" en="VARIANTS" /></strong><small><B zh="换色、换景与区域版本复用同一母版" en="Reuses one master across color, scene and market variants" /></small></div>
                  </div>
                </section>
              </div>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>03</span><b><B zh="广告技术 / 付费媒体" en="ADTECH / PAID MEDIA" /></b></div>
                <div>
                  <p><B zh="投放智能体 · 标准工作流" en="CAMPAIGN AGENT · STANDARD WORKFLOW" /></p>
                  <h3 id="adtech-case-title"><span className="langZh">广告技术与付费媒体的素材闭环：<br /><span>从市场洞察到投放反馈。</span></span><span className="langEn">The AdTech and paid-media creative loop:<br /><span>from market insight to media feedback.</span></span></h3>
                </div>
                <aside className="adtechStageBadge" aria-label="投放智能体五步标准流程">
                  <span><B zh="标准流程" en="STANDARD FLOW" /></span><strong>5</strong><b><B zh="步素材闭环" en="step creative loop" /></b>
                </aside>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="adtechAgentPanel" aria-labelledby="adtech-agent-title">
                  <header>
                    <span><B zh="投放智能体 · 端到端" en="CAMPAIGN AGENT · END TO END" /></span>
                    <h4 id="adtech-agent-title"><B zh="投放智能体的端到端标准流程。" en="The standard campaign-agent workflow, end to end." /></h4>
                  </header>

                  <div className="adtechManagerStrip" aria-label="市场主流 Ad Manager 平台">
                    <span><B zh="代表性广告管理平台与智能投放产品" en="REPRESENTATIVE AD MANAGERS AND CAMPAIGN PRODUCTS" /></span>
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
                      <div><h5><B zh="广告脚本" en="Ad scripts" /></h5><p><B zh="自动生成开场创意、分镜与行动引导，形成可执行脚本。" en="Generate executable scripts with hooks, boards and calls to action." /></p></div>
                    </li>
                    <li>
                      <span>03</span>
                      <div><h5><B zh="素材自动化生产" en="Automated creative production" /></h5><p><B zh="调用 Seedream + Seedance 批量生成可投素材，素材自动化嵌入主链路，成为每次投放的必要能力。" en="Seedream + Seedance batch-produce ready-to-run assets — creative automation embedded in the main loop, required on every launch." /></p></div>
                    </li>
                    <li>
                      <span>04</span>
                      <div><h5><B zh="投放与测试" en="Launch and test" /></h5><p><B zh="小预算多变体上线，近实时归因筛选胜出素材。" en="Small-budget multi-variant launches with near-real-time attribution." /></p></div>
                    </li>
                    <li>
                      <span>05</span>
                      <div><h5><B zh="胜出素材迭代" en="Iterate winning creative" /></h5><p><B zh="将聚合效果信号回流到洞察与脚本，保留胜出结构并替换商品、人物或市场变量。" en="Feed aggregated performance signals back into insight and scripts; keep winning structures while changing product, cast or market variables." /></p></div>
                    </li>
                  </ol>
                </section>

              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="productionChapter">
      <section className="section shell solutions" id="solution-focus">
        <div className="solutionPages">
          <article className="solutionPage brandSolutionPage" id="solution-brand" aria-labelledby="brand-solution-title">
            <header className="brandSolutionHeader">
              <div className="brandSolutionIndex"><span>01</span><b>BRAND PRODUCTION</b></div>
              <div className="brandSolutionTitle">
                <p className="langZh">CG + AI 混合制作 · 四个品牌样片</p><p className="langEn">CG + AI HYBRID PRODUCTION · 4 BRAND DEMOS</p>
                <h3 className="langZh" id="brand-solution-title">品牌广告制作方案</h3>
                <h3 className="langEn">Brand Advertising Production Solution</h3>
              </div>
              <div className="solutionHeaderActions">
                <a className="solutionDetailLink" href="https://sofa-demo.byteplus-demo.com/" target="_blank" rel="noopener noreferrer"><span className="langZh">查看方案详情</span><span className="langEn">View solution details</span><b>↗</b></a>
                <a className="solutionDetailLink langZh" href="https://bytedance.larkoffice.com/wiki/E96mwlJfsiLCvKkCPC0cjLIMnRg" target="_blank" rel="noopener noreferrer">查看更多 Seedance 样片<b>↗</b></a>
                <a className="solutionDetailLink langEn" href="https://bytedance.sg.larkoffice.com/docx/SOrgdnSJ3oSr4Rx6EYMlKhBsgqc" target="_blank" rel="noopener noreferrer">View more Seedance demos<b>↗</b></a>
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

              <section className="brandDemoStrip" id="solution-brand-demos" aria-label="品牌广告四个视频 Demo">
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
              <div className="solutionHeaderAside">
                <p><B zh="从洞察、生产到投放复刻，形成一条可持续迭代的素材生产闭环。" en="From insight and production to launch and cloning — one continuously iterating creative loop." /></p>
                <div className="solutionHeaderLinks">
                  <a className="solutionDetailLink" href="#solution-performance-demos"><B zh="查看效果广告样片" en="View performance demos" /><b>↓</b></a>
                  <a className="solutionDetailLink langZh" href="https://bytedance.larkoffice.com/wiki/E96mwlJfsiLCvKkCPC0cjLIMnRg" target="_blank" rel="noopener noreferrer">查看更多 Seedance 样片<b>↗</b></a>
                  <a className="solutionDetailLink langEn" href="https://bytedance.sg.larkoffice.com/docx/SOrgdnSJ3oSr4Rx6EYMlKhBsgqc" target="_blank" rel="noopener noreferrer">View more Seedance demos<b>↗</b></a>
                </div>
              </div>
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

              <section className="performanceEvidenceGallery" id="solution-performance-demos" aria-label="效果广告四个视频 Demo 与能力证据">
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
              <div><p><B zh="视觉母版 × 确定性扩展 · 三张图片样片" en="VISUAL MASTER × DETERMINISTIC SCALE · 3 IMAGE DEMOS" /></p><h3><span className="langZh">展示广告制作方法<br /><span>一个母版，规模化交付。</span></span><span className="langEn">Display ads method<br /><span>one master, delivered at scale.</span></span></h3></div>
              <div className="solutionHeaderAside"><p><B zh="Seedream 负责视觉创意；模板与动态创意优化把母版准确扩展到每个尺寸、语言、商品与人群。" en="Seedream owns visual creative; templates and DCO expand the master into every size, language, SKU and audience." /></p><a className="solutionDetailLink" href="#solution-display-demos"><B zh="查看展示广告样片" en="View display demos" /><b>↓</b></a></div>
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
                      {playableOutputClips.map((src, index) => <video key={src} src={src} autoPlay loop muted playsInline preload={index < 3 ? "metadata" : "none"} aria-label={`Playable 广告视觉变体 ${index + 1}，点击放大`} />)}
                    </div>
                    <PlayableClipLightbox />
                    <p><b className="langZh">可投放广告包</b><b className="langEn">Deployable ad package</b><small>Hook × Visual × CTA Matrix</small></p>
                  </div>
                </div>
              </section>

              <section className="playableDemoPanel" id="solution-playable-demos" aria-label="两个 Playable 试玩案例">
                <header><span>2 × LIVE DEMOS</span></header>
                <div className="playableDemoGrid">
                  {playableDemos.map((demo) => (
                    <article className="playableDemoCard" key={demo.title}>
                      <div className="playableDemoFrame"><iframe src={demo.src} title={`${demo.title} Playable Demo`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation" /></div>
                      <footer><span>DEMO {demo.index}</span><p><b>{demo.title}</b><small className="langZh">{demo.titleZh}</small><small className="langEn">{demo.titleEn}</small></p><a href={demo.src} target="_blank" rel="noopener noreferrer" aria-label={`新窗口打开 ${demo.title} Demo`}>↗</a></footer>
                    </article>
                  ))}
                </div>
                <a className="playableAllDemos" href="https://playable.byteplus-demo.com/" target="_blank" rel="noopener noreferrer"><span className="langZh">查看 Playable 方案详情与更多案例</span><span className="langEn">View solution details and more demos</span><b>↗</b></a>
              </section>
            </div>
          </article>
        </div>
      </section>

      <section className="roadmapPage" id="roadmap" aria-labelledby="roadmap-title">
        <header className="roadmapPageHeader">
          <div className="roadmapPageIndex"><span>07</span><b>ROADMAP</b></div>
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
      </div>

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">B</span><span>ADS Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
