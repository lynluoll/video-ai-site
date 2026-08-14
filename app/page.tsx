import InlineTextEditor from "./InlineTextEditor";
import PlayableClipLightbox from "./PlayableClipLightbox";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";
import MoreDemosGallery from "./MoreDemosGallery";
import DisplayDemoGallery from "./DisplayDemoGallery";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";
import BrandCapabilityImage from "./BrandCapabilityImage";
import PerformanceLocalizationDemo from "./PerformanceLocalizationDemo";
import { projectVideoUrl } from "./media";

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

const performanceSkuAssets = [
  { index: "01", src: "/media/performance-2026/multi-sku-skus/01-khaki-trench-coat.png", zh: "卡其风衣", en: "Trench coat" },
  { index: "02", src: "/media/performance-2026/multi-sku-skus/02-white-crew-neck-top.png", zh: "白色圆领上衣", en: "Crew-neck top" },
  { index: "03", src: "/media/performance-2026/multi-sku-skus/03-dark-blue-straight-jeans.png", zh: "深蓝直筒牛仔裤", en: "Straight jeans" },
  { index: "04", src: "/media/performance-2026/multi-sku-skus/04-light-blue-mini-dress.png", zh: "浅蓝短裙", en: "Mini dress" },
  { index: "05", src: "/media/performance-2026/multi-sku-skus/05-denim-overshirt.png", zh: "牛仔外套", en: "Denim overshirt" },
  { index: "06", src: "/media/performance-2026/multi-sku-skus/06-cream-cardigan.png", zh: "奶油色开衫", en: "Cream cardigan" },
  { index: "07", src: "/media/performance-2026/multi-sku-skus/07-cream-square-neck-top.png", zh: "方领上衣", en: "Square-neck top" },
  { index: "08", src: "/media/performance-2026/multi-sku-skus/08-cream-wide-leg-pants.png", zh: "阔腿裤", en: "Wide-leg pants" },
  { index: "09", src: "/media/performance-2026/multi-sku-skus/09-white-cropped-zip-hoodie.png", zh: "短款连帽衫", en: "Cropped hoodie" },
  { index: "10", src: "/media/performance-2026/multi-sku-skus/10-white-jogger-pants.png", zh: "白色运动裤", en: "White joggers" },
  { index: "11", src: "/media/performance-2026/multi-sku-skus/11-gray-quarter-zip-sweatshirt.png", zh: "灰色拉链卫衣", en: "Zip sweatshirt" },
  { index: "12", src: "/media/performance-2026/multi-sku-skus/12-black-maxi-dress.png", zh: "黑色长裙", en: "Maxi dress" },
  { index: "13", src: "/media/performance-2026/multi-sku-skus/13-woven-straw-tote.png", zh: "编织手提包", en: "Woven tote" },
  { index: "14", src: "/media/performance-2026/multi-sku-skus/14-gray-sweatpants.png", zh: "灰色运动裤", en: "Gray sweatpants" },
];

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

      <section className="customerFlowPage" id="players" aria-labelledby="customer-flow-title">
        <div className="customerFlowShell">
          <header className="customerFlowHeader">
            <div className="customerFlowIndex"><span>02</span><b><B zh="关键角色" en="KEY PLAYERS" /></b></div>
            <div><h2 id="customer-flow-title"><span className="langZh">资金向下流动，<br /><span>价值在中间复利增长。</span></span><span className="langEn">Money flows down.<br /><span>Value compounds in the middle.</span></span></h2></div>
          </header>

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
            <article className="lorealCasePage" id="customer-brand" aria-label="典型全球品牌主业务模式">
              <div className="lorealReportCanvas">
                <section className="brandOwnerStudy" aria-label="典型全球品牌主的三层业务逻辑">
                  <aside className="brandOwnerSpine">
                    <span className="brandOwnerStudyNumber">2.1</span>
                    <small><B zh="典型品牌主" en="TYPICAL BRAND OWNER" /></small>
                    <h3><B zh="一个治理中枢，三层生产体系。" en="One governance spine. Three production layers." /></h3>
                    <p><B zh="品牌资产、版权与合规由集团统一管理；具体生产需求在不同组织层完成决策与交付。" en="Brand assets, licensing, and compliance are governed centrally; production decisions and delivery happen across three operating layers." /></p>
                    <div className="brandOwnerGovernance">
                      <b><B zh="统一治理中枢" en="CENTRAL GOVERNANCE" /></b>
                      <ul><li><B zh="品牌规范" en="Brand rules" /></li><li><B zh="资产与版权" en="Assets & rights" /></li><li><B zh="模型与额度" en="Models & credits" /></li><li><B zh="合规要求" en="Compliance" /></li></ul>
                    </div>
                  </aside>

                  <div className="brandOwnerJourneys">
                    <article className="brandOwnerJourney brandOwnerJourneyPlatform">
                      <div className="brandOwnerJourneyIdentity"><span>01</span><div><small><B zh="集团平台" en="GROUP PLATFORM" /></small><h4><B zh="内部 AI 生产平台" en="Internal AI production platform" /></h4><p><B zh="决定哪些能力可获批并规模化使用。" en="Decides what can be approved and scaled." /></p></div></div>
                      <ol><li><B zh="真实营销场景试点" en="Marketing use-case pilot" /></li><li><B zh="模型与额度池" en="Model & credit pool" /></li><li><B zh="IT / 法务 / 财务评估" en="IT / Legal / Finance review" /></li><li><B zh="集团规模化使用" en="Scaled group adoption" /></li></ol>
                    </article>
                    <article className="brandOwnerJourney brandOwnerJourneyTeams">
                      <div className="brandOwnerJourneyIdentity"><span>02</span><div><small><B zh="业务团队" en="BUSINESS TEAMS" /></small><h4><B zh="品牌与市场团队" en="Brand and market teams" /></h4><p><B zh="将渠道目标转化为持续的内容需求。" en="Turns channel goals into recurring content demand." /></p></div></div>
                      <ol><li><B zh="电商 / 社媒 / 官网需求" en="Commerce / social / web demand" /></li><li><B zh="完整素材清单" en="Complete asset plan" /></li><li><B zh="本地化与版本化" en="Localization & versioning" /></li><li><B zh="审核与多渠道交付" en="Review & delivery" /></li></ol>
                    </article>
                    <article className="brandOwnerJourney brandOwnerJourneyPartners">
                      <div className="brandOwnerJourneyIdentity"><span>03</span><div><small><B zh="外部交付" en="EXTERNAL DELIVERY" /></small><h4><B zh="代理商与制作伙伴" en="Agency and production partners" /></h4><p><B zh="交付品牌主片与大型广告项目。" en="Delivers hero films and major campaigns." /></p></div></div>
                      <ol><li><B zh="品牌简报" en="Brand brief" /></li><li><B zh="创意与制作" en="Creative & production" /></li><li><B zh="母版与品牌审核" en="Master & brand review" /></li><li><B zh="短版剪辑与本地化" en="Cutdowns & localization" /></li></ol>
                    </article>
                  </div>
                </section>
              </div>
            </article>

            <article className="wppWorkPage agencyOperatingPage" id="customer-agency" aria-labelledby="agency-operating-title">
              <header className="agencyOperatingHero">
                <div className="agencyOperatingIndex"><span>2.2</span><b><B zh="典型代理商" en="TYPICAL AGENCY" /></b></div>
                <div className="agencyOperatingTitle">
                  <p><B zh="AI 采用路径" en="AI ADOPTION PATH" /></p>
                  <h3 id="agency-operating-title"><span className="langZh">从创意切入，<br /><strong>拓展至制作与媒体。</strong></span><span className="langEn">Start with Creative.<br /><strong>Expand into Production and Media.</strong></span></h3>
                </div>
              </header>

              <section className="agencyOperatingWorkflow agencyAdoptionMap" aria-label="典型代理商 Creative、Production 与 Media 三层 AI 渗透路径">
                <ol>
                  <li>
                    <span>01</span>
                    <div><small>CREATIVE · <B zh="高采用率" en="HIGH ADOPTION" /></small><h4><B zh="洞察、概念与创意预演" en="Insight, concepts, and previsualization" /></h4><p><B zh="快速生成关键视觉、分镜与短片预演，缩短提案和审片周期。" en="Generate key visuals, boards, and short previews to accelerate pitches and reviews." /></p></div>
                  </li>
                  <li>
                    <span>02</span>
                    <div><small>PRODUCTION · <B zh="初步应用" en="EMERGING" /></small><h4><B zh="实拍、CG 与 AI 混合制作" en="Live action, CG, and AI production" /></h4><p><B zh="先锁定产品、镜头与运动，再由模型完成环境、补充镜头和特效。" en="Lock product, camera, and motion first; use models for environments, extra shots, and VFX." /></p></div>
                  </li>
                  <li>
                    <span>03</span>
                    <div><small>MEDIA · <B zh="规模化应用" en="SCALING" /></small><h4><B zh="母版版本化与媒体变体" en="Master versioning and media variants" /></h4><p><B zh="基于已审核母版生成不同语言、格式、开场钩子、行动引导和人群版本。" en="Turn an approved master into language, format, hook, CTA, and audience variants." /></p></div>
                  </li>
                </ol>
              </section>

              <section className="agencyOperatingCase" aria-label="典型代理商汽车广告混合制作示例">
                <header>
                  <div><span><B zh="制作案例 · 汽车广告" en="PRODUCTION DEMO · AUTOMOTIVE" /></span></div>
                </header>

                <div className="agencyOperatingClips">
                  <figure>
                    <video src="/media/wpp-auto-input.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="封闭场地实拍运动参考片段" />
                    <figcaption><span>01</span><B zh="实拍参考：锁定车辆路径与镜头运动" en="Live-action reference: lock vehicle path and camera motion" /></figcaption>
                  </figure>
                  <i aria-hidden="true">→</i>
                  <figure>
                    <video src="/media/wpp-auto-final.mp4" autoPlay loop muted playsInline preload="metadata" aria-label="生成式汽车广告场景和特效成片片段" />
                    <figcaption><span>02</span><B zh="生成式成片：重建环境、材质与特效" en="Generative final: rebuild environment, material, and VFX" /></figcaption>
                  </figure>
                </div>

                <div className="agencyOperatingProof">
                  <div><span><B zh="实拍保留" en="LIVE ACTION" /></span><strong><B zh="速度 · 路径 · 镜头" en="SPEED · PATH · CAMERA" /></strong></div>
                  <div><span><B zh="AI 生成" en="AI LAYER" /></span><strong><B zh="环境 · 材质 · 特效" en="SCENE · LOOK · VFX" /></strong></div>
                  <div><span><B zh="最终交付" en="DELIVERY" /></span><strong><B zh="母版 · 多版本" en="MASTER · VARIANTS" /></strong></div>
                </div>
              </section>
            </article>

            <article className="adtechCasePage" id="customer-adtech" aria-labelledby="adtech-case-title">
              <header className="adtechCaseHeader">
                <div className="adtechCaseIndex"><span>2.3</span><b><B zh="广告技术 / 付费媒体" en="ADTECH / PAID MEDIA" /></b></div>
                <div>
                  <p><B zh="投放智能体 · 标准工作流" en="CAMPAIGN AGENT · STANDARD WORKFLOW" /></p>
                  <h3 id="adtech-case-title"><span className="langZh">广告技术与付费媒体的素材闭环：<br /><span>从市场洞察到投放反馈。</span></span><span className="langEn">The AdTech and paid-media creative loop:<br /><span>from market insight to media feedback.</span></span></h3>
                </div>
              </header>

              <div className="adtechGrowthCanvas">
                <section className="adtechAgentPanel" aria-label="Campaign Agent 端到端标准流程">
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
          <article className="solutionPage brandHeroPage" id="solution-brand" aria-labelledby="brand-hero-title">
            <header className="brandHeroHeader">
              <div className="brandHeroIndex"><span>3.1A</span><b>BRAND FILM</b></div>
              <div className="brandHeroCopy">
                <p>HERO FILM</p>
                <h3 id="brand-hero-title"><B zh="多种镜头，直出一支完整品牌片。" en="Multiple shots. One coherent brand film." /></h3>
              </div>
              <div className="brandHeroLinks">
                <a className="brandHeroLink langZh" href="https://bytedance.larkoffice.com/wiki/SNVXw69gTi515kkVoi8c98BznKh" target="_blank" rel="noopener noreferrer">查看更多样片 <b>↗</b></a>
                <a className="brandHeroLink langEn" href="https://bytedance.sg.larkoffice.com/docx/TmsqdH9TeoPVYyxzpZ9lwH91g7c" target="_blank" rel="noopener noreferrer">View more demos <b>↗</b></a>
              </div>
            </header>
            <div className="brandHeroStage">
              <PauseWhenHiddenVideo
                className="brandHeroVideo"
                src={projectVideoUrl("media/brand-fragrance/hero-film.mp4")}
                poster="/media/brand-fragrance/hero-poster.jpg"
                ariaLabel="Fragrance brand film"
              />
            </div>
          </article>

          <article className="solutionPage brandCapabilitiesPage" id="solution-brand-capabilities" aria-labelledby="brand-capabilities-title">
            <header className="brandCapabilitiesHeader">
              <div className="brandCapabilitiesIndex"><span>3.1B</span><b>MODEL CAPABILITIES</b></div>
              <div>
                <p>BRAND-FILM EVIDENCE</p>
                <h3 id="brand-capabilities-title"><B zh="一支生产可用的品牌片，背后是四项模型能力。" en="Four capabilities behind a production-ready brand film." /></h3>
              </div>
            </header>

            <div className="brandCapabilitiesBody">
              <section className="brandCapabilityRow">
                <div className="brandCapabilityCopy"><span>01</span><h4><B zh="人物真实感与自然表演" en="Photoreal Characters & Natural Performance" /></h4><p><B zh="自然肤质、眼神、表情与手部互动在不同镜头中持续可信。" en="Natural skin, eyes, expressions and hand–object interaction remain convincing across shots." /></p></div>
                <div className="brandCapabilityFrames">
                  <BrandCapabilityImage src="/media/brand-fragrance/human-side.jpg" alt="Side-lit human performance" />
                  <BrandCapabilityImage src="/media/brand-fragrance/human-front.jpg" alt="Front portrait with natural catchlights" />
                  <BrandCapabilityImage src="/media/brand-fragrance/human-hand.jpg" alt="Hand interacting with light fabric" />
                </div>
              </section>

              <section className="brandCapabilityRow">
                <div className="brandCapabilityCopy"><span>02</span><h4><B zh="商品与材质影视级写实" en="Photoreal Products & Materials" /></h4><p><B zh="玻璃、金属、液体、花瓣和织物保持真实的光学与材质表现。" en="Glass, metal, liquid, petals and fabric preserve realistic optical and material behavior." /></p></div>
                <div className="brandCapabilityFrames">
                  <BrandCapabilityImage src="/media/brand-fragrance/material-macro.jpg" alt="Perfume bottle material macro" />
                  <BrandCapabilityImage src="/media/brand-fragrance/material-bottle.jpg" alt="Perfume bottle in natural light" />
                  <BrandCapabilityImage src="/media/brand-fragrance/material-water.jpg" alt="Water and petal macro detail" />
                </div>
              </section>

              <section className="brandCapabilityRow">
                <div className="brandCapabilityCopy"><span>03</span><h4><B zh="多种镜头原生直出" en="Multiple Shot Types, Generated Natively" /></h4><p><B zh="一次直出全景、运动镜头与商品特写，并保持人物、商品和光影连续。" en="Directly outputs establishing, motion and product close-up shots while preserving character, product and lighting continuity." /></p></div>
                <div className="brandCapabilityFrames">
                  <BrandCapabilityImage src="/media/brand-fragrance/story-wide.jpg" alt="Wide establishing shot" />
                  <BrandCapabilityImage src="/media/brand-fragrance/story-motion.jpg" alt="Motion shot through lavender" />
                  <BrandCapabilityImage src="/media/brand-fragrance/story-product.jpg" alt="Product close-up in narrative context" />
                </div>
              </section>

              <section className="brandCapabilityRow brandCapabilityDelivery">
                <div className="brandCapabilityCopy"><span>04</span><h4><B zh="生产级母版交付" en="Production-Ready Mastering" /></h4><p><B zh="时长、格式、色彩、码率与原生声音均可衔接品牌制作流程。" en="Duration, format, color, bitrate and native audio align with professional brand-production workflows." /></p></div>
                <div className="brandDeliverySpecs" aria-label="Production-ready output specifications">
                  <div><strong>30s</strong><span><B zh="原生时长" en="Native duration" /></span></div>
                  <div><strong>MOV</strong><span><B zh="直接输出" en="Direct output" /></span></div>
                  <div><strong>4K</strong><span><B zh="原生分辨率" en="Native resolution" /></span></div>
                  <div><strong>10-bit</strong><span><B zh="专业色深" en="Professional color depth" /></span></div>
                  <div><strong><B zh="高码率" en="High bitrate" /></strong><span><B zh="母版级画质" en="Master-quality image" /></span></div>
                  <div><strong><B zh="原生声音" en="Native audio" /></strong><span><B zh="对白 · 音乐 · 音效" en="Dialogue · Music · SFX" /></span></div>
                </div>
              </section>
            </div>
          </article>

          <article className="solutionPage performanceSolutionPage performanceDemoPage" id="solution-performance">
            <header className="performanceV2Header">
              <div className="performanceV2Index"><span>3.2</span><b>PERFORMANCE ADS</b></div>
              <div className="performanceV2Title">
                <span>MULTI-SKU VIDEO GENERATION</span>
                <h3><span className="langZh">多件 SKU 输入，<br /><em>一支稳定一致的效果广告成片。</em></span><span className="langEn">Multiple SKUs in.<br /><em>One consistent performance video out.</em></span></h3>
              </div>
              <div className="performanceV2Ratio" aria-label="14 SKU inputs become one performance video"><strong>14</strong><span>SKU INPUTS</span><i>→</i><strong>1</strong><span>VIDEO</span></div>
              <a className="performanceV2More" href="#demos"><B zh="更多样片" en="More demos" /><i>↗</i></a>
            </header>

            <div className="performanceV2DemoBody">
              <section className="performanceV2SkuPanel" aria-label="14 个 SKU 输入素材">
                <header><span>INPUT ASSETS</span><strong>14 SKU</strong></header>
                <div className="performanceV2SkuMosaic">
                  {performanceSkuAssets.map((sku) => (
                    <figure key={sku.src}><img src={sku.src} alt={sku.en} /></figure>
                  ))}
                </div>
              </section>

              <section className="performanceV2VideoPanel" aria-label="Multi-SKU Sweep 效果广告 Demo">
                <div className="performanceV2VideoFrame">
                  <video src="/media/performance-2026/multi-sku.mp4" poster="/media/performance-2026/multi-sku.jpg" controls playsInline preload="metadata" aria-label="Multi-SKU Sweep performance ad demo" />
                </div>
              </section>
            </div>
          </article>

          <article className="solutionPage performanceCapabilityPage" id="solution-performance-capabilities">
            <header className="performanceCapabilityHeader">
              <div className="performanceV2Index"><span>3.2</span><b>MODEL CAPABILITIES</b></div>
              <div className="performanceV2Title">
                <h3><B zh="Seedance 2.5 如何规模化生产效果广告素材" en="Why Seedance 2.5 Scales Performance Creative" /></h3>
              </div>
            </header>

            <div className="performanceCapabilityBody performanceCapabilityV3">
              <section className="performanceCapabilityPrimary" aria-label="Multimodal input and consistent output">
                <header className="performanceCapabilityCardTitle">
                  <span>01</span>
                  <div><h4><B zh="多模态输入，稳定一致输出" en="Multimodal input, consistent output" /></h4></div>
                </header>

                <div className="performanceReferenceMetric">
                  <strong>50</strong>
                  <p><B zh="个多模态参考进入同一次生成任务" en="multimodal references in one generation task" /></p>
                </div>

                <div className="performanceInputTypes" aria-label="30 images, 10 videos and 10 audios">
                  <div><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="5" width="26" height="22" rx="2" /><circle cx="11" cy="12" r="2.5" /><path d="m5 24 7-7 5 5 4-4 6 6" /></svg><strong>30</strong><span>IMAGES</span></div>
                  <div><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="6" width="20" height="20" rx="2" /><path d="m23 13 6-4v14l-6-4z" /></svg><strong>10</strong><span>VIDEOS</span></div>
                  <div><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 18v-4M10 23V9M15 27V5M20 23V9M25 19v-6M30 17v-2" /></svg><strong>10</strong><span>AUDIOS</span></div>
                </div>

                <div className="performanceReferenceAssets" aria-label="Hero video reference assets">
                  {performanceSkuAssets.slice(0, 6).map((sku) => <figure key={sku.src}><img src={sku.src} alt={sku.en} /></figure>)}
                </div>

              </section>

              <section className="performanceCapabilityFormats" aria-label="Ad format coverage">
                <header className="performanceCapabilityCardTitle">
                  <span>02</span>
                  <div><h4><B zh="覆盖主流效果广告版位" en="Built for the formats performance ads use" /></h4></div>
                </header>
                <div className="performanceFormatMetrics"><strong>4–30s</strong><span>21:9 · 16:9 · 4:3 · 1:1 · 3:4 · 9:16</span></div>
                <div className="performanceFormatWall">
                  <div className="performancePlatformRow">
                    <div className="performancePlatformLogo"><img src="/media/brand-logos/meta.svg" alt="Meta" /><strong>Meta</strong></div>
                    <div className="performancePlatformProducts">
                      <span><b>Reels</b><em>6–15s</em></span>
                      <span><b>Stories</b><em>6–15s</em></span>
                      <span><b>Feed</b><em>6–15s</em></span>
                    </div>
                  </div>
                  <div className="performancePlatformRow">
                    <div className="performancePlatformLogo"><img src="/media/brand-logos/tiktok.svg" alt="TikTok" /><strong>TikTok</strong></div>
                    <div className="performancePlatformProducts">
                      <span><b>In-Feed</b><em>9–15s</em></span>
                      <span><b>Spark</b><em>9–15s</em></span>
                      <span><b>TopView</b><em>9–15s</em></span>
                    </div>
                  </div>
                  <div className="performancePlatformRow">
                    <div className="performancePlatformLogo"><img src="/media/brand-logos/youtube.svg" alt="YouTube" /><strong>YouTube</strong></div>
                    <div className="performancePlatformProducts">
                      <span><b>Shorts</b><em>10–30s</em></span>
                      <span><b>Bumper</b><em>≤6s</em></span>
                      <span><b>In-Feed</b><em>10–30s</em></span>
                    </div>
                  </div>
                </div>
              </section>

              <div className="performanceCapabilityComingRow">
                <PerformanceLocalizationDemo />

                <section className="performanceCapabilityComing performanceCapabilityEditingV3" aria-label="Precise editing demos">
                  <header className="performanceCapabilityCardTitle">
                    <span>04</span>
                    <div><h4><B zh="精确编辑" en="Precise editing" /></h4></div>
                  </header>
                  <div className="performanceEditingDemos">
                    <figure className="performanceEditingOriginal">
                      <video
                        src={projectVideoUrl("media/performance-precise-editing/master/master.mp4")}
                        poster="/media/performance-precise-editing/master/master.jpg"
                        controls
                        playsInline
                        preload="metadata"
                        aria-label="Original video before precise editing"
                      />
                      <figcaption><B zh="原片" en="Original" /></figcaption>
                    </figure>
                    <span className="performanceEditingArrow" aria-hidden="true">→</span>
                    <div className="performanceEditingOutputs">
                      <article className="performanceEditingOutputCard performanceEditingSkuCard">
                        <div className="performanceEditingSkuSpec">
                          <img
                            src="/media/performance-precise-editing/references/cobalt-blender.png"
                            alt="Cobalt-blue portable blender used as the replacement SKU"
                          />
                          <div>
                            <span><B zh="替换为" en="New SKU" /></span>
                            <strong><B zh="钴蓝色便携榨汁机" en="Cobalt-blue blender" /></strong>
                          </div>
                        </div>
                        <figure>
                          <video
                            src={projectVideoUrl("media/performance-precise-editing/variants/sku-replacement.mp4")}
                            poster="/media/performance-precise-editing/variants/sku-replacement.jpg"
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Video after SKU replacement"
                          />
                          <figcaption><B zh="商品替换结果" en="SKU replacement" /></figcaption>
                        </figure>
                      </article>
                      <article className="performanceEditingOutputCard performanceEditingTextCard">
                        <div className="performanceEditingTextSpec" aria-label="Copy changes made in the edited video">
                          <span><del>SMOOTHIE IN 30 SECONDS</del><b>BLEND ANYWHERE</b></span>
                          <span><del>SHOP NOW</del><b>GET YOURS</b></span>
                        </div>
                        <figure>
                          <video
                            src={projectVideoUrl("media/performance-precise-editing/variants/text-replacement.mp4")}
                            poster="/media/performance-precise-editing/variants/text-replacement.jpg"
                            controls
                            playsInline
                            preload="metadata"
                            aria-label="Video after text replacement"
                          />
                          <figcaption><B zh="文案替换结果" en="Text replacement" /></figcaption>
                        </figure>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
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

              <DisplayDemoGallery />
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
