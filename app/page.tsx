import InlineTextEditor from "./InlineTextEditor";
import ArchitectureImageLightbox from "./ArchitectureImageLightbox";
import PlayableClipLightbox from "./PlayableClipLightbox";
import ClipFullscreen from "./ClipFullscreen";
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
          <img className="brandLogo" src="/byteplus-logo.png" alt="BytePlus" width="381" height="71" />
          <span className="langZh">广告行业素材生产方案</span>
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
              <h1 className="langZh"><span>视频广告</span>成为主导形式</h1>
              <h1 className="langEn"><span>Video Ads</span> Become the Dominant</h1>
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
                  <stop offset="0" stopColor="#2149E6" stopOpacity=".96" />
                  <stop offset=".55" stopColor="#3B6FE8" stopOpacity=".72" />
                  <stop offset="1" stopColor="#63BCE8" stopOpacity=".42" />
                </linearGradient>
              </defs>
              <rect width="1200" height="430" className="flowGrid" fill="url(#market-flow-grid)" />
              <g className="flowLabels">
                <text x="18" y="24" className="flowOverline"><tspan className="langZh">2026E 数字广告支出（不含中国）</tspan><tspan className="langEn">2026E Digital Ad Spend (ex-China)</tspan></text>
                <text x="936" y="24" className="flowOverline"><tspan className="langZh">2030E 视频广告预测</tspan><tspan className="langEn">2030E Video Forecast</tspan></text>
              </g>

              <g className="flowBaseline flowSearch">
                <rect x="18" y="46" width="236" height="60" rx="10" />
                <text x="35" y="70" className="flowName"><tspan className="langZh">搜索广告</tspan><tspan className="langEn">Search ads</tspan></text><text x="35" y="88" className="flowMeta">33%</text><text x="232" y="82" textAnchor="end" className="flowValue">$220B</text>
              </g>

              <path className="flowVideoRiver" d="M254 125 C470 127 630 94 820 55 C875 44 914 42 936 42 L936 301 C877 301 825 304 756 307 C575 315 426 284 254 282Z" />
              <g className="flowBaseline flowVideo">
                <rect x="18" y="125" width="236" height="157" rx="10" />
                <rect x="18" y="125" width="4" height="157" className="flowVideoRail" />
                <text x="35" y="155" className="flowName"><tspan className="langZh">视频广告</tspan><tspan className="langEn">Video ads</tspan></text><text x="35" y="176" className="flowMeta">26%</text><text x="35" y="229" className="flowHeroValue">$160B</text>
                <text x="35" y="259" className="flowNote"><tspan className="langZh">CTR / CVR 更优，但制作成本曾限制供给</tspan><tspan className="langEn">Better CTR / CVR — production cost capped supply</tspan></text>
              </g>
              <g className="flowBaseline flowDisplay">
                <rect x="18" y="301" width="205" height="52" rx="10" />
                <text x="35" y="324" className="flowName"><tspan className="langZh">展示广告</tspan><tspan className="langEn">Display</tspan></text><text x="35" y="342" className="flowMeta">24%</text><text x="203" y="334" textAnchor="end" className="flowValue">$160B</text>
              </g>
              <g className="flowBaseline flowRmn">
                <rect x="18" y="368" width="170" height="47" rx="10" />
                <text x="35" y="389" className="flowName"><tspan className="langZh">零售媒体</tspan><tspan className="langEn">Retail</tspan></text><text x="35" y="405" className="flowMeta">17%</text><text x="169" y="399" textAnchor="end" className="flowValue">$110B</text>
              </g>


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
                  <text x="955" y="68" className="flowSegmentName"><tspan className="langZh">社交视频</tspan><tspan className="langEn">Social Video</tspan></text>
                  <text x="955" y="105" className="flowSegmentValue">62 → 115B</text>
                  <g className="flowDeltaPill"><rect x="1100" y="56" width="48" height="18" rx="9" /><text x="1124" y="69" textAnchor="middle" className="flowSegmentDelta">+85%</text></g>
                </g>
                <g className="flowSegmentTrack flowSegmentTrackCtv">
                  <rect x="936" y="155" width="236" height="88" className="flowCtv" />
                  <text x="955" y="181" className="flowSegmentName">CTV</text>
                  <text x="955" y="215" className="flowSegmentValue">45 → 90B</text>
                  <g className="flowDeltaPill"><rect x="1094" y="168" width="54" height="18" rx="9" /><text x="1121" y="181" textAnchor="middle" className="flowSegmentDelta">+100%</text></g>
                </g>
                <g className="flowSegmentTrack flowSegmentTrackOlv">
                  <rect x="936" y="243" width="236" height="58" className="flowOlv" />
                  <text x="955" y="267" className="flowSegmentName dark">OLV</text>
                  <text x="955" y="291" className="flowSegmentValue small">38 → 55B</text>
                  <g className="flowDeltaPill dark"><rect x="1100" y="254" width="48" height="18" rx="9" /><text x="1124" y="267" textAnchor="middle" className="flowSegmentDelta dark">+45%</text></g>
                </g>
              </g>
              <g className="flowOutcome">
                <rect x="936" y="312" width="236" height="80" rx="10" />
                <text x="955" y="337" className="flowOutcomeOverline"><tspan className="langZh">2030 视频广告总预算</tspan><tspan className="langEn">2030 TOTAL VIDEO BUDGET</tspan></text>
                <text x="955" y="378" className="flowOutcomeValue">$260B</text>
                <text x="1153" y="378" textAnchor="end" className="flowOutcomeRank">#1</text>
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
              <div className="marketFlowIndex"><span>01</span><b>MARKET OVERVIEW</b></div>
              <h2 id="market-trends-title"><B zh={<>Campaign Agent 规模化，靠<strong>素材供给自动化</strong></>} en={<>Campaign Agents Scale on <strong>Automated Creative Supply</strong></>} /></h2>
            </header>

            <div className="marketTrendGrid">
              <article className="marketTrendCard marketTrendAgent">
                <div className="marketTrendVisual agentPlatformBoard">
                  <p className="agentPlatformLede"><B zh="主流 Ad Manager 都在内建 Campaign Agent" en="Every major ad manager now ships a campaign agent" /></p>

                  <ol className="agentLoop" aria-label="Campaign Agent 的五步闭环">
                    <li><span>01</span><b><B zh="市场洞察" en="Market insight" /></b></li>
                    <li><span>02</span><b><B zh="广告脚本" en="Ad scripts" /></b></li>
                    <li className="agentLoopCore"><span>03</span><b><B zh="素材自动生产" en="Automated creative production" /></b></li>
                    <li><span>04</span><b><B zh="投放测试" en="Launch and test" /></b></li>
                    <li><span>05</span><b><B zh="复刻胜出素材" en="Iterate winners" /></b></li>
                  </ol>

                  <p className="agentPlatformTier"><B zh="付费媒体平台" en="PAID MEDIA PLATFORMS" /></p>
                  <ul className="agentPlatformRow">
                    <li><img src="/logos/meta-color.svg" alt="" aria-hidden="true" /><div><b>Meta</b><em>Meta Ads Manager · Advantage+</em></div></li>
                    <li><img src="/logos/google-color.svg" alt="" aria-hidden="true" /><div><b>Google</b><em>Google Ads · Performance Max · AI Max</em></div></li>
                    <li><img src="/logos/tiktok-color.svg" alt="" aria-hidden="true" /><div><b>TikTok</b><em>TikTok Ads Manager · Smart+ · Symphony</em></div></li>
                    <li><img src="/logos/amazon-color.svg" alt="" aria-hidden="true" /><div><b>Amazon</b><em>Amazon Ads · Creative Agent</em></div></li>
                    <li><img src="/logos/snapchat-color.svg" alt="" aria-hidden="true" /><div><b>Snap</b><em>Snap Ads Manager · Smart Assistant</em></div></li>
                    <li><img src="/logos/pinterest-color.svg" alt="" aria-hidden="true" /><div><b>Pinterest</b><em>Pinterest Ads · Performance+ · Canvas</em></div></li>
                    <li><img src="/logos/reddit-color.svg" alt="" aria-hidden="true" /><div><b>Reddit</b><em>Reddit Ads · Max · AI copywriter</em></div></li>
                  </ul>

                  <p className="agentPlatformTier"><B zh="广告技术" en="ADTECH" /></p>
                  <ul className="agentPlatformRow">
                    <li><img src="/logos/applovin-color.svg" alt="" aria-hidden="true" /><div><b>AppLovin</b><em>AXON · Creative Sets</em></div></li>
                    <li><img src="/logos/thetradedesk-color.png" alt="" aria-hidden="true" /><div><b>The Trade Desk</b><em>Kokai · Koa Agents</em></div></li>
                    <li><img src="/logos/criteo-color.png" alt="" aria-hidden="true" /><div><b>Criteo</b><em>Commerce Media Platform</em></div></li>
                    <li><img src="/logos/nativex-color.png" alt="" aria-hidden="true" /><div><b>Nativex</b><em>Navos</em></div></li>
                  </ul>

                  <p className="agentPlatformTier"><B zh="创意技术" en="CREATIVE TECH" /></p>
                  <ul className="agentPlatformRow">
                    <li><img src="/logos/smartly-color.svg" alt="" aria-hidden="true" /><div><b>Smartly.io</b><em>Smartly · AI Studio</em></div></li>
                    <li><img className="agentLogoWide" src="/logos/celtra-color.svg" alt="" aria-hidden="true" /><div><b>Celtra</b><em>Celtra · Creative Automation</em></div></li>
                    <li><img src="/logos/bannerflow-color.svg" alt="" aria-hidden="true" /><div><b>Bannerflow</b><em>Bannerflow · Creative Automation</em></div></li>
                    <li><img src="/logos/storyteq-color.svg" alt="" aria-hidden="true" /><div><b>Storyteq</b><em>Storyteq · Creative Automation</em></div></li>
                  </ul>

                </div>
              </article>


              <article className="marketTrendCard goodtakeCase">
                <header><div className="marketFlowIndex"><span>01</span><b>MARKET OVERVIEW</b></div></header>
                <h3><B zh={<>从创意构想开始，<span>现在已经进入真实生产。</span></>} en={<>Starts with Ideation. <span>Now to Real Production.</span></>} /></h3>

                <p className="goodtakeLede"><B zh="Goodtake 为麦当劳制作的两支 3D CGI 广告，与同期其他素材同场对比。" en="Two 3D CGI spots Goodtake produced for McDonald's, measured against the other assets running alongside them." /></p>

                <div className="goodtakeGrid">
                  <figure className="goodtakeItem">
                    <video src="/media/goodtake/mcdonaldland.mp4" autoPlay controls loop muted playsInline preload="auto" aria-label="Goodtake 为麦当劳制作的 McDonaldland 3D CGI 广告" />
                    <figcaption>
                      <b>McDonaldland</b><em>Q4&rsquo;25</em>
                      <table>
                        <thead><tr><th /><th><B zh="3D CGI" en="3D CGI" /></th><th><B zh="其他素材" en="Others" /></th></tr></thead>
                        <tbody>
                          <tr><th>CTR</th><td>0.30%</td><td>0.26%</td></tr>
                          <tr><th>ER</th><td>1.23%</td><td>0.50%</td></tr>
                          <tr><th>2s VTR</th><td>35.09%</td><td>11.06%</td></tr>
                          <tr><th>6s VTR</th><td>13.69%</td><td>2.66%</td></tr>
                        </tbody>
                      </table>
                    </figcaption>
                  </figure>

                  <figure className="goodtakeItem">
                    <video src="/media/goodtake/grimace.mp4" autoPlay controls loop muted playsInline preload="auto" aria-label="Goodtake 为麦当劳制作的 Grimace 3D CGI 广告" />
                    <figcaption>
                      <b>Grimace</b><em>Q2&rsquo;26</em>
                      <table>
                        <thead><tr><th /><th><B zh="3D CGI" en="3D CGI" /></th><th><B zh="其他素材" en="Others" /></th></tr></thead>
                        <tbody>
                          <tr><th>CTR</th><td>0.50%</td><td>0.40%</td></tr>
                          <tr><th>ER</th><td>1.05%</td><td>0.65%</td></tr>
                          <tr><th>2s VTR</th><td>26.55%</td><td>23.81%</td></tr>
                          <tr><th>6s VTR</th><td>10.61%</td><td>7.97%</td></tr>
                        </tbody>
                      </table>
                    </figcaption>
                  </figure>
                </div>

                <p className="goodtakeTakeaway"><B zh="两轮投放里 3D CGI 在四项指标上全部胜出 —— 完播类指标差距最大：McDonaldland 的 2s VTR 是其他素材的 3.2 倍，6s VTR 是 5.1 倍。" en="3D CGI won on all four metrics in both flights — the gap is widest on watch-through: McDonaldland's 2s VTR is 3.2× the other assets, and 6s VTR is 5.1×." /></p>
                <p className="goodtakeSource"><B zh="来源：Goodtake × 麦当劳投放数据 · 内部机密，请勿外传" en="Source: Goodtake × McDonald's campaign data · confidential and proprietary" /></p>
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
                  <h3 id="agency-operating-title">WPP Open</h3>
                </div>
                <div className="agencyOperatingPlatform">
                  <span><B zh="代理商自建 AI 平台" en="IN-HOUSE AGENCY AI PLATFORM" /></span>
                  <b>WPP Open</b>
                  <strong>80,000+</strong>
                  <em><B zh="覆盖的 WPP 员工" en="WPP employees covered" /></em>
                </div>
              </header>

              <section className="agencyOperatingWorkflow agencyLanes" aria-label="WPP Open 三段采用路径与 Seedance 应用">
                <header className="agencyAdoptionIntro">
                  <h4><B zh={<>从创意切入，<strong>拓展至制作与媒体。</strong></>} en={<>Start with Creative. <strong>Expand into Production and Media.</strong></>} /></h4>
                </header>

                <ol className="agencyStages">
                  <li>
                    <span>01</span>
                    <div>
                      <small>CREATIVE · <B zh="创意" en="IDEATION" /></small>
                      <h5><B zh="Ogilvy · VML · AKQA · 约 5 万人" en="Ogilvy · VML · AKQA · ~50k people" /></h5>
                      <p><B zh="brief → 洞察 → 概念 → pre-vis" en="Brief → insight → concept → pre-vis" /></p>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <small>PRODUCTION · <B zh="制作" en="MAKING" /></small>
                      <h5><B zh="Hogarth 与约 1 万制作人" en="Hogarth and ~10k makers" /></h5>
                      <p><B zh="2026 年 1 月宣布组建 · 2 月 23 日生效 — 拍摄 / CG / 后期 → 变体与本地化" en="Announced Jan 2026 · effective Feb 23 — shoot / CG / post → variants & localization" /></p>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <small>MEDIA · <B zh="投放" en="ACTIVATION" /></small>
                      <h5><B zh="WPP Media：原 GroupM" en="WPP Media: formerly GroupM" /></h5>
                      <p><B zh="投放计划 / 采买 / 优化 / 测量" en="Planning / buying / optimization / measurement" /></p>
                    </div>
                  </li>
                </ol>
                <section className="agencyProductProof" aria-label="WPP Open workspace">
                  <div className="agencyProductProofGrid">
                    <figure className="agencyWorkspaceShot">
                      <img src="/media/wpp/canvas.webp" alt="WPP Open Canvas：在 AI 生成的人群画像上验证创意概念" loading="lazy" />
                    </figure>

                    <div className="agencyProofPanel">
                      <div className="agencyProofVideos">
                        <figure>
                          <video src="/media/wpp-auto-input.mp4" autoPlay loop muted playsInline preload="auto" aria-label="实拍汽车运动参考片段" />
                          <figcaption><span>INPUT</span></figcaption>
                        </figure>
                        <i aria-hidden="true">→</i>
                        <figure>
                          <video src="/media/wpp-auto-final.mp4" autoPlay loop muted playsInline preload="auto" aria-label="生成式汽车广告成片片段" />
                          <figcaption><span>OUTPUT</span></figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </article>

            <article className="wppWorkPage wppQuotePage" aria-label="WPP 对 Seedance 的评价">
              <blockquote className="wppQuote">
                <span className="wppQuoteMark" aria-hidden="true">&ldquo;</span>
                <p>
                  Production teams are telling me they&rsquo;re using Seedance 2.0 and that they prefer it
                  over Veo. I&rsquo;ve spoken to teams in Singapore, Australia, Brazil, Mexico, the US, the
                  UK and Spain &mdash; they&rsquo;re all telling me <strong>Seedance is way better, and the
                  word is out.</strong>
                </p>
                <footer>
                  <b>Akia Mitchell</b>
                  <span>VP Global Strategic Partnerships, WPP</span>
                </footer>
              </blockquote>
            </article>

            <article className="appLovinCase wppWorkPage" id="customer-brand" aria-label="AppLovin AI 创意规模化案例研究">
              <header className="appLovinCaseHero">
                <div className="appLovinCaseIndex"><span>CASE 2</span><b><B zh="广告技术" en="ADTECH" /></b></div>
                <div className="appLovinCaseTitle">
                  <span className="appLovinWordmarkText">AppLovin</span>
                </div>
              </header>

              <div className="appLovinCaseBody">
                <section className="appLovinBlock appLovinFlywheelBlock">
                  <article className="appLovinFlywheel" aria-labelledby="appLovin-flywheel-title">
                    <div className="appLovinFlywheelCanvas">
                      <section className="appLovinFlywheelClaim appLovinFlywheelClaimInputs">
                        <div className="appLovinFlywheelClaimMeta">
                          <span>01</span>
                          <small><B zh="新增一环" en="NEW POINT" /></small>
                        </div>
                        <h4><B zh="更多创意输入" en="More creative inputs" /></h4>
                      </section>

                      <div
                        className="appLovinFlywheelCycle"
                        role="img"
                        aria-label="更多创意输入驱动 AXON 更快学习，带来更高广告效率，并循环回到下一轮创意输入"
                      >
                        <div className="appLovinFlywheelRing" aria-hidden="true">
                          <i className="appLovinFlywheelArrow appLovinFlywheelArrowInput" />
                          <i className="appLovinFlywheelArrow appLovinFlywheelArrowLearn" />
                          <i className="appLovinFlywheelArrow appLovinFlywheelArrowScale" />
                        </div>
                        <div className="appLovinFlywheelCore">
                          <img src="/media/applovin/app-lovin-logo.png" alt="AppLovin" />
                        </div>
                      </div>

                      <section className="appLovinFlywheelClaim appLovinFlywheelClaimLearning">
                        <div className="appLovinFlywheelClaimMeta"><span>02</span><small>AXON</small></div>
                        <h4><B zh="更快 AXON 学习" en="Faster AXON learning" /></h4>
                      </section>

                      <section className="appLovinFlywheelClaim appLovinFlywheelClaimEfficiency">
                        <div className="appLovinFlywheelClaimMeta"><span>03</span><small><B zh="效果回流" en="SIGNAL RETURN" /></small></div>
                        <h4><B zh="更高广告效率" en="Higher ads efficiency" /></h4>
                      </section>
                    </div>

                    <footer className="appLovinFlywheelFooter">
                      <h4 id="appLovin-flywheel-title"><B zh="AppLovin 规模飞轮" en="AppLovin Flywheel of Scale" /></h4>
                    </footer>
                  </article>
                </section>

                <section className="appLovinBlock appLovinCreativeSetProof" aria-label="AppLovin Creative Set product interface">
                  <figure>
                    <img src="/media/applovin/creative-set-dashboard.png" alt="AppLovin Ads Creative Set 素材管理界面，支持添加视频、互动广告和图片素材" />
                  </figure>
                </section>

                <ClipFullscreen />
                <section className="appLovinBlock appLovinAxonCompare">
                  <article className="appLovinAxonAfter">
                    <div className="appLovinAxonEngine">
                      <div className="appLovinOutputs">
                      <div className="appLovinOutput">
                        <div className="appLovinOutputHead">
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17l5-10 4 6 2-3 5 7H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                          <b><B zh="互动广告" en="INTERACTIVE" /></b>
                        </div>
                        <div className="appLovinOutputClips">
                          <div className="appLovinClip"><video src="/media/applovin/automating-creative-01.mp4" autoPlay loop muted playsInline preload="auto" aria-label="AppLovin 互动广告自动生成示例 1" /><button type="button" className="appLovinClipFs" aria-label="全屏播放：AppLovin 互动广告自动生成示例 1"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
                          <div className="appLovinClip"><video src="/media/applovin/automating-creative-02.mp4" autoPlay loop muted playsInline preload="auto" aria-label="AppLovin 互动广告自动生成示例 2" /><button type="button" className="appLovinClipFs" aria-label="全屏播放：AppLovin 互动广告自动生成示例 2"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
                        </div>
                      </div>

                      <div className="appLovinOutput">
                        <div className="appLovinOutputHead">
                          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M16 10.5l5-3v9l-5-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>
                          <b><B zh="视频广告" en="VIDEO" /></b>
                        </div>
                        <div className="appLovinOutputClips">
                          <div className="appLovinClip"><video src="/media/applovin/generating-video-01.mp4" autoPlay loop muted playsInline preload="auto" aria-label="AppLovin 视频广告自动生成示例 1" /><button type="button" className="appLovinClipFs" aria-label="全屏播放：AppLovin 视频广告自动生成示例 1"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
                          <div className="appLovinClip"><video src="/media/applovin/generating-video-02.mp4" autoPlay loop muted playsInline preload="auto" aria-label="AppLovin 视频广告自动生成示例 2" /><button type="button" className="appLovinClipFs" aria-label="全屏播放：AppLovin 视频广告自动生成示例 2"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M15 4h5v5M15 20h5v-5M9 20H4v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button></div>
                        </div>
                      </div>
                      </div>
                    </div>

                  </article>
                </section>

              </div>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>CASE 3</span><b><B zh="付费媒体" en="PAID MEDIA" /></b></div>
                <div className="adtechCaseTitle">
                  <h3 id="adtech-case-title">TikTok · Smart+</h3>
                  <p>CREATIVES ENABLEMENT</p>
                </div>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="tiktokCreativeEnablement" aria-labelledby="tiktok-creative-enablement-title">
                  <header className="tiktokCreativeIntro">
                    <h4 id="tiktok-creative-enablement-title">
                      <B
                        zh={<>超越自动出价与定向，<strong>更进一步赋能创意。</strong></>}
                        en={<>Beyond automated bidding &amp;targeting, <strong>more on Creatives enablement.</strong></>}
                      />
                    </h4>
                    <a className="tiktokCreativeDetails" href="https://bytedance.sg.larkoffice.com/docx/Zdpvd5J8ioXVxmxeiTzlDVfDg5E" target="_blank" rel="noreferrer">
                      More details <span aria-hidden="true">↗</span>
                    </a>
                  </header>

                  <div className="tiktokCreativeGrid">
                    <article className="tiktokCreativeCapability" tabIndex={0} aria-label="Recommended Creatives and Automatic Enhancements">
                      <header>
                        <span>01</span>
                        <div>
                          <small>SMART+ CREATIVE</small>
                          <h5><B zh="推荐创意与自动增强" en="Recommended Creatives and Automatic Enhancements" /></h5>
                        </div>
                      </header>
                      <figure>
                        <img src="/media/tiktok/creative-recommendations.png" alt="TikTok Ads Manager 推荐创意、自动生成素材，以及视频与图片自动增强界面" loading="lazy" />
                      </figure>
                      <p><B zh="基于落地页与历史效果推荐素材，并在投放过程中自动完成视频和图片增强。" en="Recommends assets from destination and performance signals, then applies video and image enhancements during delivery." /></p>
                    </article>

                    <article className="tiktokCreativeCapability" tabIndex={0} aria-label="More Ad Formats">
                      <header>
                        <span>02</span>
                        <div>
                          <small>FORMAT EXPANSION</small>
                          <h5><B zh="更多广告形式" en="More Ad Formats" /></h5>
                        </div>
                      </header>
                      <figure>
                        <img src="/media/tiktok/more-ad-formats.png" alt="TikTok Ads Manager 使用商品信息创建个性化广告变体并实时预览的界面" loading="lazy" />
                      </figure>
                      <p><B zh="用商品信息与卖点快速生成多种广告变体，并直接在版位预览中校验呈现效果。" en="Turns product information and selling points into more ad variations, with direct placement preview." /></p>
                    </article>

                    <article className="tiktokCreativeCapability" tabIndex={0} aria-label="Flexible Catalog Ads Creation">
                      <header>
                        <span>03</span>
                        <div>
                          <small>CATALOG SCALE</small>
                          <h5><B zh="灵活的商品目录广告创建" en="Flexible Catalog Ads Creation" /></h5>
                        </div>
                      </header>
                      <figure>
                        <img src="/media/tiktok/flexible-catalog-ads.png" alt="TikTok Ads Manager 从商品目录选择产品并自动生成 Catalog Carousel 广告的界面" loading="lazy" />
                      </figure>
                      <p><B zh="从商品目录灵活选择产品、关联素材，并自动生成可规模化投放的目录广告变体。" en="Selects products and linked creatives flexibly, then generates scalable catalog ad variations automatically." /></p>
                    </article>
                  </div>
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
                <video src="/media/sofa/final-film.mp4" poster="/media/sofa/final-film-poster.jpg" autoPlay controls loop muted playsInline preload="auto" aria-label="Sofa CG 与 Seedance 品牌广告成片" />
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
                      <div><video src={demo.src} poster={demo.poster} autoPlay controls loop muted playsInline preload="auto" aria-label={`${demo.title}品牌广告视频 Demo`} /><span>{demo.order}</span></div>
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
                    <div className="performanceEvidenceVideo"><video src={demo.src} poster={demo.poster} autoPlay controls loop muted playsInline preload="auto" aria-label={`${demo.title}效果广告视频 Demo`} /><span>{demo.order}</span></div>
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
        <div className="brand"><img className="brandLogo" src="/byteplus-logo.png" alt="BytePlus" width="381" height="71" /><span>ADS Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
