import InlineTextEditor from "./InlineTextEditor";
import ArchitectureImageLightbox from "./ArchitectureImageLightbox";
import PlayableClipLightbox from "./PlayableClipLightbox";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";
import MoreDemosGallery from "./MoreDemosGallery";

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
      meta: "酒店服务 · 奢华旅行",
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
      meta: "科技 · 电子产品",
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
      title: "单卖点闪现",
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
    title: "品牌主",
    titleEn: "Brand owners",
    budgetRole: "负责预算与品牌资产",
    budgetRoleEn: "Set budgets and brand assets",
    trend: "建设内部 AI 平台",
    trendEn: "Building in-house AI platforms",
    examples: "典型全球品牌主",
    examplesEn: "Global brand owners",
  },
  {
    index: "02",
    title: "代理商",
    titleEn: "Agencies",
    budgetRole: "承接创意与制作预算",
    budgetRoleEn: "Hold creative and production budgets",
    trend: "从创意预演进入正式制作",
    trendEn: "From previews into production",
    examples: "WPP · Havas",
  },
  {
    index: "03",
    title: "AdTech / MarTech",
    titleEn: "AdTech / MarTech",
    budgetRole: "将媒体预算转化为持续素材生产",
    budgetRoleEn: "Turn media budgets into continuous production",
    trend: "Campaign Agent 从 1 进入 3",
    trendEn: "Campaign agents enter 1 → 3",
    examples: "AppLovin · Tenmax",
  },
  {
    index: "04",
    title: "Paid Media",
    titleEn: "Paid media",
    budgetRole: "完成分发并返回效果信号",
    budgetRoleEn: "Distribute and return performance signals",
    trend: "效果信号回流至内容生产",
    trendEn: "Signals flow back into production",
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
        <div className="navChapterLinks" aria-label="章节导航">
          <a href="#market"><span className="langZh">市场概览</span><span className="langEn">Market Overview</span></a>
          <a href="#players"><span className="langZh">关键角色</span><span className="langEn">Key Players</span></a>
          <a href="#solutions"><span className="langZh">解决方案</span><span className="langEn">Solutions</span></a>
          <a href="#demos"><span className="langZh">更多样片</span><span className="langEn">More Demos</span></a>
        </div>
        <label className="languageSwitch" htmlFor="language-mode">
          <span className="langZh">中&nbsp; / &nbsp;EN</span>
          <span className="langEn">EN&nbsp; / &nbsp;中</span>
        </label>
      </nav>

      <section className="coverPage" aria-labelledby="cover-title">
        <video
          className="coverBackgroundVideo"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/landing/brand-15-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/media/landing/brand-15.mp4" type="video/mp4" />
        </video>
        <div className="coverBackgroundVeil" aria-hidden="true" />
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
              <h1 className="langZh">AI 正在重塑广告供给的生产方式</h1>
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
                <text x="35" y="324" className="flowName"><tspan className="langZh">展示广告</tspan><tspan className="langEn">Display</tspan></text><text x="35" y="342" className="flowMeta">24%</text><text x="203" y="334" textAnchor="end" className="flowValue">$160B</text>
              </g>
              <g className="flowBaseline flowRmn">
                <rect x="18" y="368" width="170" height="47" />
                <text x="35" y="389" className="flowName"><tspan className="langZh">零售媒体</tspan><tspan className="langEn">Retail</tspan></text><text x="35" y="405" className="flowMeta">17%</text><text x="169" y="399" textAnchor="end" className="flowValue">$110B</text>
              </g>

              <text x="672" y="183" className="flowCrossTitle"><tspan className="langZh">3–4 年内跨过 $220B 搜索广告基准</tspan><tspan className="langEn">Crosses the $220B search benchmark in 3–4 years</tspan></text>

              <g className="flowOutcomeDefault">
                <rect x="936" y="42" width="236" height="259" />
                <text x="955" y="119" className="flowDefaultValue">$260B</text>
                <text x="1148" y="118" textAnchor="end" className="flowDefaultRank">#1</text>
                <line x1="955" y1="139" x2="1152" y2="139" />
                <text x="955" y="175" className="flowDefaultSignal">3–4 YEARS</text>
                <text x="955" y="199" className="flowDefaultCopy"><tspan className="langZh">超过搜索广告与展示广告</tspan><tspan className="langEn">Overtakes search and display</tspan></text>
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
              <div className="mobileFlowArrow"><span>3–4 YEARS</span><b>↓</b><small><span className="langZh">跨过 $220B 搜索广告基准</span><span className="langEn">crosses the $220B search benchmark</span></small></div>
              <div className="mobileVideoOutcome">
                <header><span>2030 · VIDEO #1</span><strong>$260B</strong></header>
                <div className="mobileOutcomeSummary"><span>3–4 YEARS</span><b><span className="langZh">超过搜索广告 / 展示广告</span><span className="langEn">Overtakes Search / Display</span></b><small><span className="langZh">AI 降本释放规模化视频供给</span><span className="langEn">AI cost-down scales video supply</span></small></div>
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
              <h2 id="market-trends-title"><B zh={<>广告生产正在走向 <strong>AI 原生</strong></>} en="Advertising Is Moving Toward AI-Native Production" /></h2>
            </header>

            <div className="marketTrendGrid">
              <article className="marketTrendCard marketTrendVideo">
                <header><span>01</span><b>VIDEO</b></header>
                <h3><B zh="视频广告成为主导广告形式" en="Video Advertising Becomes the Dominant Format" /></h3>
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
                <h3><B zh="AI 成为创作者的基础能力" en="AI Becomes Table Stakes for Creators" /></h3>
                <div className="marketTrendVisual marketCreatorAdoption" role="img" aria-label="创意流程中的 AI 部署率当前为 83%，高于 2024 年的 60%">
                  <div className="marketAdoptionDonut"><span>83%</span><small>CURRENT</small></div>
                  <strong>VS. 60% IN 2024</strong>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="solutionChapterTransition" id="case-studies" aria-labelledby="case-study-transition-title">
        <div className="solutionTransitionShell">
          <div className="solutionTransitionIndex">
            <span>02</span>
            <b><B zh="案例研究" en="CASE STUDY" /></b>
          </div>
          <div className="solutionTransitionCopy">
            <p>BYTEPLUS PARTNER PROOF</p>
            <h2 className="langZh" id="case-study-transition-title">从关键角色格局出发，看<strong>头部客户如何验证 BytePlus。</strong></h2>
            <h2 className="langEn">From the key-player landscape to <strong>proof from BytePlus&apos;s leading partners.</strong></h2>
          </div>
        </div>
      </section>

      <section className="customerFlowPage" id="players" aria-label="广告产业四类参与者与关键趋势">
        <div className="customerFlowShell">
          <div className="customerFlowCanvas">
            <div className="customerFlowRoute" aria-label="广告产业四类参与者与关键趋势">
              <div className="customerFlowMoneyRail" aria-hidden="true"><span>$</span><i></i><em>↓</em></div>
              <div className="customerFlowStages">
                {customerFlowStages.map((stage) => (
                  <article className="customerFlowStage" key={stage.index}>
                    <div className="customerFlowIdentity"><span>{stage.index}</span><h3><B zh={stage.title} en={stage.titleEn} /></h3></div>
                    <div className="customerFlowRole"><small><B zh="预算角色" en="BUDGET ROLE" /></small><h4><B zh={stage.budgetRole} en={stage.budgetRoleEn} /></h4></div>
                    <div className="customerFlowTrend"><small><B zh="关键趋势" en="KEY TREND" /></small><h4><B zh={stage.trend} en={stage.trendEn} /></h4></div>
                    <div className="customerFlowExamples"><small><B zh="代表对象" en="REPRESENTATIVE" /></small><b><B zh={stage.examples} en={stage.examplesEn ?? stage.examples} /></b></div>
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
            <article className="wppWorkPage agencyOperatingPage" id="customer-agency" aria-labelledby="agency-operating-title">
              <header className="agencyOperatingHero">
                <div className="agencyOperatingIndex"><span>CASE 1</span><b><B zh="典型代理商" en="TYPICAL AGENCY" /></b></div>
                <div className="agencyOperatingTitle">
                  <h3 id="agency-operating-title">WPP &amp; Havas</h3>
                </div>
              </header>

              <section className="agencyOperatingWorkflow agencyAdoptionMap" aria-label="典型代理商 Creative、Production 与 Media 三层 AI 渗透路径">
                <header className="agencyAdoptionIntro">
                  <p><B zh="AI 采用路径" en="AI ADOPTION PATH" /></p>
                  <h4><span className="langZh">从创意切入，<br /><strong>拓展至制作与媒体。</strong></span><span className="langEn">Start with Creative.<br /><strong>Expand into Production and Media.</strong></span></h4>
                </header>
                <ol>
                  <li>
                    <span>01</span>
                    <div><small>CREATIVE · <B zh="高采用率" en="HIGH ADOPTION" /></small><h4><B zh="洞察、概念与创意预演" en="Insight, concepts, and previsualization" /></h4><p><B zh="快速生成关键视觉、分镜与短片预演，缩短提案和审片周期。" en="Generate key visuals, boards, and short previews to accelerate pitches and reviews." /></p></div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <small>PRODUCTION · <B zh="初步应用" en="EMERGING" /></small>
                      <h4><B zh="实拍、CG 与 AI 混合制作" en="Live action, CG, and AI production" /></h4>
                      <p><B zh="先锁定产品、镜头与运动，再由模型完成环境、补充镜头和特效。" en="Lock product, camera, and motion first; use models for environments, extra shots, and VFX." /></p>
                      <details className="agencyAdoptionDemo" aria-label="典型代理商汽车广告混合制作示例">
                        <summary>
                          <span><B zh="制作案例 · 汽车广告" en="PRODUCTION DEMO · AUTOMOTIVE" /></span>
                          <i className="agencyAdoptionDemoToggle" aria-hidden="true" />
                        </summary>
                        <div className="agencyAdoptionDemoClips">
                          <figure>
                            <video src="/media/wpp-auto-input.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="封闭场地实拍运动参考片段" />
                            <figcaption><span>01</span><B zh="实拍参考：锁定车辆路径与镜头运动" en="Live-action reference: lock vehicle path and camera motion" /></figcaption>
                          </figure>
                          <i aria-hidden="true">↓</i>
                          <figure>
                            <video src="/media/wpp-auto-final.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="生成式汽车广告场景和特效成片片段" />
                            <figcaption><span>02</span><B zh="生成式成片：重建环境、材质与特效" en="Generative final: rebuild environment, material, and VFX" /></figcaption>
                          </figure>
                        </div>
                        <div className="agencyAdoptionDemoProof">
                          <div><span><B zh="实拍保留" en="LIVE ACTION" /></span><strong><B zh="速度 · 路径 · 镜头" en="SPEED · PATH · CAMERA" /></strong></div>
                          <div><span><B zh="AI 生成" en="AI LAYER" /></span><strong><B zh="环境 · 材质 · 特效" en="SCENE · LOOK · VFX" /></strong></div>
                          <div><span><B zh="最终交付" en="DELIVERY" /></span><strong><B zh="母版 · 多版本" en="MASTER · VARIANTS" /></strong></div>
                        </div>
                      </details>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div><small>MEDIA · <B zh="规模化应用" en="SCALING" /></small><h4><B zh="母版版本化与媒体变体" en="Master versioning and media variants" /></h4><p><B zh="基于已审核母版生成不同语言、格式、开场钩子、行动引导和人群版本。" en="Turn an approved master into language, format, hook, CTA, and audience variants." /></p></div>
                  </li>
                </ol>
              </section>
            </article>

            <article className="appLovinCase wppWorkPage" id="customer-brand" aria-label="AppLovin AI 创意规模化案例研究">
              <header className="appLovinCaseHero">
                <div className="appLovinCaseIndex"><span>CASE 2</span><b><B zh="广告技术" en="ADTECH" /></b></div>
                <div className="appLovinCaseTitle">
                  <svg className="appLovinLogo" xmlns="http://www.w3.org/2000/svg" width="126.3" height="24" viewBox="0 0 126.3 24" fill="none" aria-label="AppLovin"><g transform="translate(0 1.2) scale(0.3)" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M40 0C45.5228 0 50 4.47715 50 10C50 12.6757 48.9469 15.1038 47.2354 16.8984L67.5762 52.2969C68.3523 52.1036 69.164 52 70 52C75.5228 52 80 56.4772 80 62C80 67.5228 75.5228 72 70 72C64.4772 72 60 67.5228 60 62C60 60.9168 60.1736 59.8743 60.4922 58.8975C59.6591 58.6335 58.6272 58.3339 57.3984 58.0352C53.5037 57.0882 47.6325 56.1201 39.9043 56.1201C32.1767 56.1202 26.3067 57.0882 22.4121 58.0352C21.2657 58.3139 20.2905 58.5934 19.4883 58.8438C19.8183 59.8362 20 60.8967 20 62C20 67.5228 15.5228 72 10 72C4.47715 72 0 67.5228 0 62C0 56.4772 4.47715 52 10 52C10.7711 52 11.5212 52.0897 12.2422 52.2549L32.7041 16.8359C31.0279 15.0477 30 12.6444 30 10C30 4.47715 34.4772 0 40 0ZM10 58C7.79086 58 6 59.7909 6 62C6 64.2091 7.79086 66 10 66C12.2091 66 14 64.2091 14 62C14 59.7909 12.2091 58 10 58ZM70 58C67.7909 58 66 59.7909 66 62C66 64.2091 67.7909 66 70 66C72.2091 66 74 64.2091 74 62C74 59.7909 72.2091 58 70 58ZM18.8779 52.7617C19.519 52.5791 20.2248 52.3922 20.9941 52.2051C25.3248 51.1521 31.6709 50.1202 39.9043 50.1201C48.1381 50.1201 54.4856 51.1521 58.8164 52.2051C59.5808 52.3909 60.2822 52.5773 60.9199 52.7588L41.9824 19.8027C41.3416 19.9316 40.6788 20 40 20C39.2904 20 38.5984 19.9247 37.9307 19.7842L18.8779 52.7617ZM40 6C37.7909 6 36 7.79086 36 10C36 12.2091 37.7909 14 40 14C42.2091 14 44 12.2091 44 10C44 7.79086 42.2091 6 40 6Z"></path></g><g transform="translate(33 3.67) scale(0.3)" fill="currentColor"><path d="M295.475 13.299C304.556 13.299 310.204 20.02 310.204 29.5295V52.767H302.268V31.174C302.268 24.167 299.193 20.449 293.402 20.449C287.324 20.449 283.034 25.311 283.034 32.1035V52.767H275.098V14.157H280.603L282.176 19.591C285.036 15.6585 289.827 13.299 295.475 13.299Z"></path><path d="M258.613 8.2225V0H266.764V8.2225H258.613ZM258.756 52.767V14.157H266.693V52.767H258.756Z"></path><path d="M246.734 14.157H254.885L239.012 52.767H231.79L215.488 14.157H223.854L235.437 42.8285L246.734 14.157Z"></path><path d="M195.279 53.768C183.41 53.768 174.615 45.1165 174.615 33.462C174.615 21.8075 183.41 13.2275 195.279 13.2275C207.076 13.2275 215.871 21.879 215.871 33.462C215.871 45.1165 207.076 53.768 195.279 53.768ZM195.279 46.189C202.572 46.189 207.791 40.898 207.791 33.462C207.791 26.0975 202.572 20.8065 195.279 20.8065C187.914 20.8065 182.695 26.0975 182.695 33.462C182.695 40.898 187.914 46.189 195.279 46.189Z"></path><path d="M153.521 45.1165H174.328V52.767H145.37V2.717H153.521V45.1165Z"></path><path d="M119.513 13.2275C131.024 13.2275 139.533 21.879 139.533 33.462C139.533 45.045 131.024 53.768 119.513 53.768C114.508 53.768 110.075 52.052 106.714 49.1205V66.638H98.7778V14.157H104.069L105.57 18.9475C109.074 15.3725 113.936 13.2275 119.513 13.2275ZM118.869 46.189C126.162 46.189 131.453 40.755 131.453 33.462C131.453 26.2405 126.162 20.8065 118.869 20.8065C111.576 20.8065 106.214 26.2405 106.214 33.462C106.214 40.755 111.576 46.189 118.869 46.189Z"></path><path d="M73.0769 13.2275C84.5884 13.2275 93.0969 21.879 93.0969 33.462C93.0969 45.045 84.5884 53.768 73.0769 53.768C68.0719 53.768 63.6389 52.052 60.2784 49.1205V66.638H52.3419V14.157H57.6329L59.1344 18.9475C62.6379 15.3725 67.4999 13.2275 73.0769 13.2275ZM72.4334 46.189C79.7264 46.189 85.0174 40.755 85.0174 33.462C85.0174 26.2405 79.7264 20.8065 72.4334 20.8065C65.1404 20.8065 59.7779 26.2405 59.7779 33.462C59.7779 40.755 65.1404 46.189 72.4334 46.189Z"></path><path d="M39.611 52.767L35.321 41.899H12.9415L8.723 52.767H0L20.0915 2.717H27.8135L48.5485 52.767H39.611ZM24.0955 13.442L15.8015 34.5345H32.461L24.0955 13.442Z"></path></g></svg>
                  <h3><B zh="创意规模化，释放 AXON 更多价值" en="Creative scale unlocks more value from AXON" /></h3>
                </div>
              </header>

              <div className="appLovinCaseBody">
                <section className="appLovinBlock appLovinAxonStat">
                  <small><B zh="规模化的原因" en="WHY SCALE MATTERS" /></small>
                  <div className="appLovinAxonStatRow">
                    <b>$1M<span><B zh="/月" en="/mo" /></span></b>
                    <em><B zh="客户月消耗" en="spend" /></em>
                    <i aria-hidden="true">→</i>
                    <b>~150</b>
                    <em><B zh="月新增素材" en="new assets / month" /></em>
                  </div>
                  <p><B zh="更大的广告主测试量可达" en="Larger advertisers test " /><strong><B zh="数千条。" en="thousands." /></strong></p>
                </section>

                <section className="appLovinBlock appLovinAxonCompare">
                  <article className="appLovinAxonBefore">
                    <small>01 · <B zh="原有模式" en="ORIGINAL MODEL" /></small>
                    <h4><B zh="人群与投放优化" en="Audience & delivery optimization" /></h4>
                    <div className="appLovinAxonFlow">
                      <div><span>$</span><div><b><B zh="广告主" en="Advertiser" /></b><small><B zh="预算与素材" en="Budget + assets" /></small></div><i aria-hidden="true">↓</i></div>
                      <div className="appLovinAxonFlowCore"><span>A</span><div><b>AXON</b><small><B zh="匹配与优化" en="Match + optimize" /></small></div><i aria-hidden="true">↓</i></div>
                      <div><span>↑</span><div><b><B zh="投放效果" en="Performance" /></b><small><B zh="转化与消耗" en="Conversions + spend" /></small></div><i className="appLovinAxonFlowLoop" aria-hidden="true">↺</i></div>
                    </div>
                    <p className="appLovinAxonBottleneck"><B zh="瓶颈：创意供给有限" en="BOTTLENECK: LIMITED CREATIVE SUPPLY" /></p>
                  </article>
                  <article className="appLovinAxonAfter">
                    <small>02 · <B zh="创意规模化" en="CREATIVE SCALE" /></small>
                    <h4><B zh="全天候创意供给" en="Always-on creative supply" /></h4>
                    <div className="appLovinAxonEngine">
                      <div className="appLovinAxonEngineInputs">
                        <span><B zh="产品链接" en="Product URL" /></span>
                        <span><B zh="品牌素材" en="Brand assets" /></span>
                        <span><B zh="商品 Feed" en="Product feed" /></span>
                      </div>
                      <i aria-hidden="true">→</i>
                      <div className="appLovinAxonEngineCore">
                        <span>AI</span>
                        <b><B zh="创意引擎" en="Creative Engine" /></b>
                        <small><B zh="生成 · 迭代 · 校验" en="Generate · Iterate · Validate" /></small>
                      </div>
                      <i aria-hidden="true">→</i>
                      <div className="appLovinAxonEngineOutputs">
                        <div><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17l5-10 4 6 2-3 5 7H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg><span><B zh="互动" en="INTERACTIVE" /></span></div>
                        <div><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 10.5l5-3v9l-5-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg><span><B zh="视频" en="VIDEO" /></span></div>
                        <div><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg><span><B zh="图片" en="IMAGE" /></span></div>
                      </div>
                    </div>
                    <p className="appLovinAxonOutcome"><B zh="更多变体 · 更高新鲜度 · 更快速度" en="More variants · More freshness · More speed" /></p>
                  </article>
                </section>

                <p className="appLovinAxonFlywheel">
                  <B zh="更多创意输入" en="More creative inputs" /> <i aria-hidden="true">→</i> <B zh="AXON 学习更快" en="Faster AXON learning" /> <i aria-hidden="true">→</i> <B zh="广告效率更高" en="Higher ads efficiency" />
                </p>

                <section className="appLovinBlock appLovinSolution">
                  <small><B zh="解决方案" en="SOLUTION" /></small>
                  <h4><B zh="由 Seedance 与 Seedream 提供支持的自动化创意技术栈" en="Automated Creative Stack powered by Seedance and Seedream" /></h4>
                  <div className="appLovinFormats">
                    <article className="appLovinFormatCard">
                      <div className="appLovinFormatHead">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17l5-10 4 6 2-3 5 7H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                        <h5><B zh="互动广告" en="INTERACTIVE ADS" /></h5>
                      </div>
                      <p><B zh="几分钟内自动生成高转化的互动 HTML 广告层。" en="Auto-generate high-converting interactive HTML layers in minutes." /></p>
                      <details className="appLovinFormatMedia">
                        <summary><B zh="查看示例（6 条）" en="View examples (6)" /><span className="appLovinFormatToggle" aria-hidden="true" /></summary>
                        <div className="appLovinFormatClips">
                          <video src="/media/applovin/automating-creative-01.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 1" />
                          <video src="/media/applovin/automating-creative-02.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 2" />
                          <video src="/media/applovin/automating-creative-03.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 3" />
                          <video src="/media/applovin/automating-creative-04.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 4" />
                          <video src="/media/applovin/automating-creative-05.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 5" />
                          <video src="/media/applovin/automating-creative-06.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 互动广告自动生成示例 6" />
                        </div>
                      </details>
                    </article>
                    <article className="appLovinFormatCard">
                      <div className="appLovinFormatHead">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 10.5l5-3v9l-5-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                        <h5><B zh="视频广告" en="VIDEO ADS" /></h5>
                      </div>
                      <p><B zh="多智能体流水线规模化生成视频变体，稳定保持高产量。" en="Scalable video variants via multi-agent pipelines for consistent high volume." /></p>
                      <details className="appLovinFormatMedia">
                        <summary><B zh="查看示例（4 条）" en="View examples (4)" /><span className="appLovinFormatToggle" aria-hidden="true" /></summary>
                        <div className="appLovinFormatClips">
                          <video src="/media/applovin/generating-video-01.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 视频广告自动生成示例 1" />
                          <video src="/media/applovin/generating-video-02.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 视频广告自动生成示例 2" />
                          <video src="/media/applovin/generating-video-03.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 视频广告自动生成示例 3" />
                          <video src="/media/applovin/generating-video-04.mp4" controls loop muted playsInline preload="metadata" aria-label="AppLovin 视频广告自动生成示例 4" />
                        </div>
                      </details>
                    </article>
                    <article className="appLovinFormatCard appLovinFormatCardCompact">
                      <div className="appLovinFormatHead">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="M4 17l5-5 4 4 3-3 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                        <h5><B zh="图片广告" en="IMAGE ADS" /></h5>
                      </div>
                      <p><B zh="动态生成并持续迭代图片素材，维持长期投放效果。" en="Dynamic image assets generated and iterated to maintain performance." /></p>
                    </article>
                  </div>
                </section>

                <section className="appLovinBlock appLovinResult">
                  <small><B zh="已验证结果" en="PROVEN RESULT" /></small>
                  <div className="appLovinResultStat">
                    <b>0% → ~9.5%</b>
                    <p><B zh="首批上线广告主中，AI 生成互动广告占花费的比例（2026 年 2 月 1 日至 3 月 1 日）。" en="Share of spend on AI-generated interactives, for advertisers in the initial rollout (Feb 1 – Mar 1, 2026)." /></p>
                  </div>
                  <blockquote className="appLovinResultQuote">
                    <B
                      zh="“这些质量很强……如果我们能自动化、批量拿到这样的素材，就能真正快速把创意规模在投放中放大。”"
                      en="“I think these are very strong…if we can get assets like this in high volume automatically, we could really scale the creatives in our campaigns quickly.”"
                    />
                    <cite><B zh="— AppLovin 广告主，引自官方博客" en="— AppLovin advertiser, quoted in the official blog" /></cite>
                  </blockquote>
                </section>
              </div>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>CASE 3</span><b><B zh="付费媒体" en="PAID MEDIA" /></b></div>
                <div>
                  <h3 id="adtech-case-title">TikTok</h3>
                </div>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="adtechAgentPanel" aria-label="Campaign Agent 端到端标准流程">
                  <header>
                    <span><B zh="投放智能体 · 标准工作流" en="CAMPAIGN AGENT · STANDARD WORKFLOW" /></span>
                    <h4><span className="langZh">广告技术与付费媒体的素材闭环：<br /><span>从市场洞察到投放反馈。</span></span><span className="langEn">The AdTech and paid-media creative loop:<br /><span>from market insight to media feedback.</span></span></h4>
                  </header>
                  <div className="adtechManagerStrip" aria-label="市场主流 Ad Manager 平台">
                    <span><B zh="代表性广告管理平台与 Campaign 产品" en="REPRESENTATIVE AD MANAGERS AND CAMPAIGN PRODUCTS" /></span>
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

      <section className="solutionChapterTransition" id="solutions" aria-labelledby="solution-transition-title">
        <div className="solutionTransitionShell">
          <div className="solutionTransitionIndex">
            <span>03</span>
            <b><B zh="解决方案" en="SOLUTIONS" /></b>
          </div>
          <div className="solutionTransitionCopy">
            <p>BYTEPLUS CREATIVE PRODUCTION</p>
            <h2 className="langZh" id="solution-transition-title">从行业工作流出发，进入 <strong>BytePlus 生产能力与解决方案。</strong></h2>
            <h2 className="langEn">From industry workflows to <strong>BytePlus production capabilities and solutions.</strong></h2>
          </div>
        </div>
      </section>

      <div className="productionChapter">
      <section className="section shell solutions">
        <div className="solutionPages">
          <article className="solutionPage brandSolutionPage" id="solution-brand" aria-labelledby="brand-solution-title">
            <header className="brandSolutionHeader">
              <div className="brandSolutionIndex"><span>3.1</span><b>BRAND PRODUCTION</b></div>
              <div className="brandSolutionTitle">
                <h3 className="langZh" id="brand-solution-title">品牌广告生产解决方案</h3>
                <h3 className="langEn">Brand Advertising Production Solution</h3>
              </div>
              <div className="solutionHeaderActions">
                <a className="solutionDetailLink" href="https://sofa-demo.byteplus-demo.com/" target="_blank" rel="noopener noreferrer"><span className="langZh">查看方案详情</span><span className="langEn">View solution details</span><b>↗</b></a>
              </div>
            </header>

            <div className="brandSolutionBody">
              <section className="brandSofaPanel" aria-label="Sofa 品牌广告成片">
                <header><span>SOFA DEMO</span><b className="langZh">从产品标准图到品牌成片</b><b className="langEn">From packshot to brand film</b></header>
                <video src="/media/sofa/final-film.mp4" poster="/media/sofa/final-film-poster.jpg" controls loop playsInline preload="metadata" aria-label="Sofa CG 与 Seedance 品牌广告成片" />
              </section>

              <section className="brandArchitecturePanel" aria-label="Sofa CG 与 AI 五阶段制作架构">
                <header><span>PRODUCTION ARCHITECTURE</span><b className="langZh">CG 锁定控制，AI 完成输出</b><b className="langEn">CG locks control. AI delivers output.</b></header>
                <div className="brandOriginalArchitecture">
                  <div className="brandOriginalFlow">
                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">01</span><b className="langZh">输入资产</b><b className="langEn">Input Assets</b></header>
                      <figure className="arch-input"><img src="/media/sofa/input-texture.jpg" alt="材质参考" /><figcaption>Texture · material<span className="arch-to">→ AI composite ④</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-environment.jpg" alt="环境参考" /><figcaption>Environment<span className="arch-to">→ scene ③ · video ⑤</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-packshot.jpg" alt="商品 Packshot" /><figcaption>Product · packshot<span className="arch-to">→ vision + 3D ②</span></figcaption></figure>
                      <figure className="arch-input"><img src="/media/sofa/input-character.jpg" alt="人物参考" /><figcaption>Character<span className="arch-to">→ reference</span></figcaption></figure>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">02</span><b className="langZh">AI 理解 + 数字孪生</b><b className="langEn">AI Understanding + Digital Twin</b></header>
                      <div className="arch-node"><div className="arch-node__t arch-node__t--model">Vision LLM · Seed 2.1</div><div className="arch-node__m">Visual understanding · spec</div></div>
                      <div className="arch-down" aria-hidden="true">↓</div>
                      <div className="arch-node arch-node--ghost arch-spec"><div className="arch-node__t">Vision spec · anchor</div><div className="arch-spec__b">Solid oak sofa · linen <span>#E8E5DF</span><br />locks colour / material / size / structure</div></div>
                      <div className="arch-node arch-twin"><div className="arch-node__t arch-node__t--model">3D model · Seed3D 2.0</div><div className="arch-node__m">Image → 3D digital twin</div><div className="arch-twin__viewer"><img src="/media/sofa/digital-twin-poster.png" alt="沙发 3D 数字孪生" /></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">03</span><b className="langZh">CG 控制 · Blender</b><b className="langEn">CG Control · Blender</b></header>
                      <div className="arch-node"><div className="arch-node__t">Set design · camera control</div><div className="arch-node__m">Multi-angle · product consistency</div><div className="arch-thumbs arch-thumbs--row"><img src="/media/sofa/digital-twin.png" alt="" /><img src="/media/sofa/cg-angle.jpg" alt="" /><img src="/media/sofa/cg-scene.jpg" alt="" /></div></div>
                      <div className="arch-node"><div className="arch-node__t">Lighting control</div><div className="arch-node__m">Mood · shadows</div><div className="arch-thumbs arch-thumbs--2"><img src="/media/sofa/lighting-1.jpg" alt="" /><img src="/media/sofa/lighting-2.jpg" alt="" /></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">04</span><b className="langZh">图像渲染</b><b className="langEn">Image Rendering</b></header>
                      <div className="arch-node"><div className="arch-node__t">Blender render</div><div className="arch-node__m">Composite plate · any angle</div><div className="arch-thumbs arch-thumbs--2x2"><img src="/media/sofa/cg-angle.jpg" alt="" /><img src="/media/sofa/cg-scene.jpg" alt="" /><img src="/media/sofa/render-detail.jpg" alt="" /><img src="/media/sofa/digital-twin.png" alt="" /></div></div>
                      <div className="arch-down" aria-hidden="true">↓</div>
                      <div className="arch-node"><div className="arch-node__t arch-node__t--model">Seedream 5.0 Pro</div><div className="arch-node__m">AI compositing</div><div className="arch-tags"><span>quality boost</span><span>environment</span><span>product</span><span>material</span><span>upscale</span></div></div>
                    </section>
                    <i className="arch-arrow" aria-hidden="true">→</i>

                    <section className="arch-stage">
                      <header className="arch-stage__head"><span className="arch-stage__no">05</span><b className="langZh">最终输出 · KV + 视频</b><b className="langEn">Final Output · KV + Video</b></header>
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
                <header><span>4 × BRAND DEMOS</span></header>
                <div className="brandDemoCompactGrid">
                  {solutionVideoDemos.brand.map((demo) => (
                    <figure className="brandDemoCompactCard" key={demo.src}>
                      <div><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}品牌广告视频 Demo`} /><span>{demo.order}</span></div>
                    </figure>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <article className="solutionPage performanceSolutionPage" id="solution-performance">
            <header className="performanceSolutionHeader">
              <div className="performanceSolutionIndex"><span>3.2</span><b>PERFORMANCE ADS</b></div>
              <div><h3><B zh="效果广告生产解决方案" en="Performance Ads Production Solution" /></h3></div>
            </header>

            <div className="performanceSolutionBody">
              <section className="performanceProductionFlow" aria-label="效果广告五步运作链">
                <ol>
                  <li className="performanceFlowInsight">
                    <header><span>01</span><b><B zh="趋势洞察" en="Trend insight" /></b></header>
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
                    <div className="performanceFlowSummary"><strong><B zh="批量生成可投素材" en="Batch ready-to-run assets" /></strong><p><B zh="图像 · 视频 · 音频" en="Image · video · audio" /></p></div>
                    <footer>Seedream + Seedance</footer>
                  </li>
                  <li className="performanceFlowTest">
                    <header><span>04</span><b><B zh="投放测试" en="Launch tests" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="小预算筛选胜出素材" en="Small budgets pick winners" /></strong><p><B zh="归因 · 本地化 · 预审" en="Attribution · localization · pre-check" /></p></div>
                    <footer>Campaign Agent</footer>
                  </li>
                  <li className="performanceFlowReplicate">
                    <header><span>05</span><b><B zh="复刻胜出素材" en="Clone winners" /></b></header>
                    <div className="performanceFlowSummary"><strong><B zh="保留胜出结构，替换变量" en="Keep the win, swap variables" /></strong><p><B zh="商品 · 人物 · 市场" en="Product · cast · market" /></p></div>
                    <footer><B zh="胜出素材复刻 Agent" en="Winner-cloning agent" /></footer>
                  </li>
                </ol>
                <footer className="performanceFeedbackRail"><strong><B zh="↺ 胜出素材回流至洞察，持续迭代" en="↺ Winners feed back into insight — keep iterating" /></strong></footer>
              </section>

              <section className="performanceEvidenceGallery" id="solution-performance-demos" aria-label="效果广告四个视频 Demo 与能力证据">
                {solutionVideoDemos.performance.map((demo) => (
                  <article className="performanceEvidenceCard" key={demo.src}>
                    <div className="performanceEvidenceVideo"><video src={demo.src} poster={demo.poster} controls muted playsInline preload="metadata" aria-label={`${demo.title}效果广告视频 Demo`} /><span>{demo.order}</span></div>
                    <div className="performanceEvidenceMeta"><h4><B zh={demo.title} en={demo.titleEn} /></h4></div>
                    <details className="performanceProofDisclosure" name="performance-keyframes">
                      <summary><span><B zh={`关键帧 · ${demo.title}`} en={`KEY FRAMES · ${demo.titleEn}`} /></span><i>＋</i></summary>
                      <div className="performanceProofDrawer">
                        <div className="performanceProofFrames" aria-label={`${demo.title}连续截图`}>
                          {demo.frames.map((frame, frameIndex) => <figure key={frame}><img src={frame} alt={`${demo.title}连续截图 ${frameIndex + 1}`} /><figcaption>{String(frameIndex + 1).padStart(2, "0")}</figcaption></figure>)}
                        </div>
                        <div className="performanceProofCopy"><span>{demo.order}</span><h5><B zh={demo.proofTitle} en={demo.proofTitleEn} /></h5><ul className="langZh">{demo.proofs.map((proof) => <li key={proof}>{proof}</li>)}</ul><ul className="langEn">{demo.proofsEn.map((proof) => <li key={proof}>{proof}</li>)}</ul></div>
                      </div>
                    </details>
                  </article>
                ))}
              </section>

            </div>
          </article>

          <article className="solutionPage displaySolutionPage" id="solution-display">
            <header className="displaySolutionHeader">
              <div className="displaySolutionIndex"><span>3.3</span><b>DISPLAY ADS</b></div>
              <div><h3><span className="langZh">展示广告方法<br /><span>一个母版，规模化交付。</span></span><span className="langEn">Display ads method<br /><span>one master, delivered at scale.</span></span></h3></div>
            </header>

            <div className="displaySolutionBody">
              <section className="displayArchitectureFocus" aria-label="Display Ads 五步生产架构">
                <header>
                  <span>PRODUCTION ARCHITECTURE</span>
                </header>

                <div className="displaySimpleFlow">
                  <article className="displaySimpleInput">
                    <span>01 · INPUT</span><h5>Campaign Inputs</h5>
                    <ul><li>Campaign Brief</li><li>Brand Kit</li><li>Product Feed</li></ul>
                  </article>
                  <article className="displaySimplePlanner">
                    <span>02 · DECIDE</span><h5>Creative Planner</h5>
                    <p><B zh="拆解目标与渠道，输出构图策略和变体计划。" en="Breaks goals and channels into composition strategy and variant plans." /></p>
                  </article>
                  <article className="displaySimpleSeedream">
                    <span>03 · VISUAL</span><h5>Seedream</h5>
                    <p><B zh="场景 · 构图 · 光影 · 材质" en="Scene · composition · light · material" /></p><small><B zh="负责非确定性创意" en="owns non-deterministic creative" /></small>
                  </article>
                  <article className="displaySimpleDco">
                    <span>04 · SCALE</span><h5>Template + DCO</h5>
                    <p><B zh="Logo · 价格 · CTA · 多语言文字" en="Logo · price · CTA · multilingual text" /></p><small><B zh="尺寸 × 语言 × SKU × 人群" en="size × language × SKU × audience" /></small>
                  </article>
                  <article className="displaySimpleQa">
                    <span>05 · DELIVER</span><h5>QA Gate</h5>
                    <p>VLM · Rules</p><small><B zh="统一质检与资产交付" en="unified QC and delivery" /></small>
                  </article>
                </div>
              </section>

              <section className="displayDemoGallery" id="solution-display-demos" aria-label="Display Ads 三张图片 Demo">
                <header><div><span>3 × IMAGE DEMOS</span><h4><B zh="从母版到多规格交付。" en="From master to multi-spec delivery." /></h4></div></header>
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
              <div className="playableIndex"><span>3.4</span><b>PLAYABLE</b></div>
              <div className="playableTitle">
                <h3 className="langZh">一个游戏素材，<br /><span>生成一整套可玩广告。</span></h3>
                <h3 className="langEn">One game asset.<br /><span>A full playable ad set.</span></h3>
              </div>
              <aside className="playableHeaderActions" aria-label="Playable 方案操作">
                <a className="playableHeaderButton playableHeaderButtonPrimary" href="https://playable.byteplus-demo.com/" target="_blank" rel="noopener noreferrer"><span className="langZh">查看可玩广告方案</span><span className="langEn">View Playable solution</span><b>↗</b></a>
              </aside>
            </header>

            <div className="playableBody">
              <section className="playableArchitecture" aria-label="Playable 广告自动生产架构">
                <div className="playableFactoryGrid">
                  <div className="playableFactoryInput">
                    <span>INPUT</span>
                    <div className="playablePhone"><i aria-hidden="true" /><img src="https://carey.tos-ap-southeast-1.bytepluses.com/playables/factory/input_fish_sm.jpg" alt="节奏钓鱼游戏素材输入" /></div>
                    <p><b className="langZh">一个游戏素材</b><b className="langEn">One game asset</b></p>
                  </div>

                  <i className="playableFlowArrow" aria-hidden="true"><span /></i>

                  <div className="playableFactoryStages">
                    <header><span className="langZh">自动流水线</span><span className="langEn">AUTOMATED PIPELINE</span><i><b /><b /><b /></i></header>
                    <ol>
                      <li><em>1</em><p><b className="langZh">市场调研</b><b className="langEn">Market research</b></p></li>
                      <li><em>2</em><p><b className="langZh">创意策划</b><b className="langEn">Creative planning</b></p></li>
                      <li><em>3</em><p><b className="langZh">自动生产</b><b className="langEn">Automated production</b></p></li>
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
                <div className="playableDemoGrid">
                  {playableDemos.map((demo) => (
                    <article className="playableDemoCard" key={demo.title}>
                      <div className="playableDemoFrame"><iframe src={demo.src} title={`${demo.title} Playable Demo`} loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation" /></div>
                      <footer><span>DEMO {demo.index}</span><p><b>{demo.title}</b><small className="langZh">{demo.titleZh}</small><small className="langEn">{demo.titleEn}</small></p><a href={demo.src} target="_blank" rel="noopener noreferrer" aria-label={`新窗口打开 ${demo.title} Demo`}>↗</a></footer>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </section>

      </div>

      <MoreDemosGallery />

      <footer className="footer shell">
        <div className="brand"><span className="brandMark">B</span><span>ADS Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
