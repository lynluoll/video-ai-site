import InlineTextEditor from "./InlineTextEditor";
import PlayableClipLightbox from "./PlayableClipLightbox";
import ClipFullscreen from "./ClipFullscreen";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";
import MoreDemosGallery from "./MoreDemosGallery";
import DisplayDemoGallery from "./DisplayDemoGallery";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";
import BrandCapabilityImage from "./BrandCapabilityImage";
import PerformanceLocalizationDemo from "./PerformanceLocalizationDemo";
import WppPrevisCarousel from "./WppPrevisCarousel";
import { projectVideoUrl } from "./media";

const B = ({ zh, en }: { zh: React.ReactNode; en: React.ReactNode }) => (
  <>
    <span className="langZh">{zh}</span>
    <span className="langEn">{en}</span>
  </>
);

/* Head-and-shoulders glyph, repeated to show a cohort growing from one
   trainer to a team. Stroke inherits colour so each lane can tint it. */
const TalentGlyphs = ({ count }: { count: number }) => (
  <span className="talentGlyphs" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="7.2" r="4" />
        <path d="M3.6 21c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4" strokeLinecap="round" />
      </svg>
    ))}
  </span>
);

/* One line icon per organisation on the operating-model page: a slate for
   the delivery arm, buildings for the demand side. BytePlus uses its real
   logomark instead. Stroke inherits colour so the ink panel can flip them. */
const OrgIcon = ({ kind }: { kind: "hex" | "clients" }) => (
  <svg className="hexModelIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "hex" && (
      <>
        <rect x="2.6" y="4.6" width="18.8" height="14.8" rx="1.6" />
        <path d="M2.6 9.2h18.8" />
        <path d="M10.2 11.6l4.8 2.9-4.8 2.9z" fill="currentColor" stroke="none" />
      </>
    )}
    {kind === "clients" && (
      <>
        <path d="M2.4 20.6h19.2" />
        <rect x="3.6" y="10" width="7" height="10.6" />
        <rect x="13" y="4.4" width="7.4" height="16.2" />
        <path d="M15.4 8.2h2.6M15.4 11.8h2.6M15.4 15.4h2.6M5.8 13.6h2.6M5.8 17h2.6" />
      </>
    )}
  </svg>
);

/* Labelled connector that sits in the gutter between two diagram cells. */
const FlowArrow = ({ zh, en }: { zh: React.ReactNode; en: React.ReactNode }) => (
  <i className="hexModelLink">
    <b><B zh={zh} en={en} /></b>
    <svg viewBox="0 0 64 8" preserveAspectRatio="none" aria-hidden="true">
      <path className="hexModelLinkShaft" d="M0 4H55" />
      <path className="hexModelLinkHead" d="M55 1l7 3-7 3z" />
    </svg>
  </i>
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
    examples: "AppLovin · Tec-do",
  },
  {
    index: "04",
    title: "Paid Media",
    titleEn: "Paid media",
    budgetRole: "完成分发并返回效果信号",
    budgetRoleEn: "Distribute and return performance signals",
    trend: "效果信号回流至内容生产",
    trendEn: "Signals flow back into production",
    examples: "TikTok",
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
          <span className="langEn">Ads Creative Solution</span>
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
            <span>视频广告正在成为第一大广告形式，</span>
            <strong>AI 生产走向规模化。</strong>
          </h1>
          <h1 className="langEn">
            <span>Video ads are becoming the No.1 ad format.</span>
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
                    <li><img src="/logos/meta-color.svg" alt="" aria-hidden="true" /><div><b>Meta</b><em>Meta Ads Manager · Advantage+</em><small><B zh="生成背景 / 图片扩展 / 文案变体 / 视频动效" en="Generates backgrounds, image expansion, text variations, video animation" /></small></div></li>
                    <li><img src="/logos/google-color.svg" alt="" aria-hidden="true" /><div><b>Google</b><em>Google Ads · Performance Max · AI Max</em><small><B zh="Gemini 生成图片与文案素材，自动组合投放" en="Gemini-generated image and text assets, auto-assembled per placement" /></small></div></li>
                    <li><img src="/logos/tiktok-color.svg" alt="" aria-hidden="true" /><div><b>TikTok</b><em>TikTok Ads Manager · Smart+ · Symphony</em><small><B zh="脚本→视频、数字人、多语翻译，直出可投放的短视频" en="Script-to-video, digital avatars, translation — ready-to-run short video" /></small></div></li>
                    <li><img src="/logos/amazon-color.svg" alt="" aria-hidden="true" /><div><b>Amazon</b><em>Amazon Ads · Creative Agent</em><small><B zh="从商品页生成图片与视频广告" en="Image and video ads generated from the product page" /></small></div></li>
                    <li><img src="/logos/snapchat-color.svg" alt="" aria-hidden="true" /><div><b>Snap</b><em>Snap Ads Manager · Smart Assistant</em><small><B zh="生成式 Lens 与广告创意辅助" en="Generative Lenses and creative assist" /></small></div></li>
                    <li><img src="/logos/pinterest-color.svg" alt="" aria-hidden="true" /><div><b>Pinterest</b><em>Pinterest Ads · Performance+ · Canvas</em><small><B zh="生成式背景，把商品图变成生活方式场景" en="Generative backgrounds that turn product shots into lifestyle scenes" /></small></div></li>
                    <li><img src="/logos/reddit-color.svg" alt="" aria-hidden="true" /><div><b>Reddit</b><em>Reddit Ads · Max · AI copywriter</em><small><B zh="按社区语境生成广告文案" en="Ad copy generated for each community’s tone" /></small></div></li>
                  </ul>

                  <p className="agentPlatformTier"><B zh="广告技术" en="ADTECH" /></p>
                  <ul className="agentPlatformRow">
                    <li><img src="/logos/applovin-color.svg" alt="" aria-hidden="true" /><div><b>AppLovin</b><em>AXON · Creative Sets</em><small><B zh="上传素材 → 自动组合成可玩 / 视频 / 图片广告" en="Upload assets → auto-composed playable, video and image ads" /></small></div></li>
                    <li><img src="/logos/thetradedesk-color.png" alt="" aria-hidden="true" /><div><b>The Trade Desk</b><em>Kokai · Koa Agents</em><small><B zh="投放决策 agent；素材生成靠合作方" en="Buying-decision agents; creative generation via partners" /></small></div></li>
                    <li><img src="/logos/criteo-color.png" alt="" aria-hidden="true" /><div><b>Criteo</b><em>Commerce Media Platform</em></div></li>
                    <li><img src="/logos/nativex-color.png" alt="" aria-hidden="true" /><div><b>Nativex</b><em>Navos</em></div></li>
                  </ul>

                  <p className="agentPlatformTier"><B zh="创意技术" en="CREATIVE TECH" /></p>
                  <ul className="agentPlatformRow">
                    <li><img src="/logos/smartly-color.svg" alt="" aria-hidden="true" /><div><b>Smartly.io</b><em>Smartly · AI Studio</em><small><B zh="生成图片 / 视频变体并跨平台投放" en="Generates image and video variants and ships them across platforms" /></small></div></li>
                    <li><img className="agentLogoWide" src="/logos/celtra-color.svg" alt="" aria-hidden="true" /><div><b>Celtra</b><em>Celtra · Creative Automation</em></div></li>
                    <li><img src="/logos/bannerflow-color.svg" alt="" aria-hidden="true" /><div><b>Bannerflow</b><em>Bannerflow · Creative Automation</em></div></li>
                    <li><img src="/logos/storyteq-color.svg" alt="" aria-hidden="true" /><div><b>Storyteq</b><em>Storyteq · Creative Automation</em></div></li>
                  </ul>

                </div>
              </article>


              <article className="marketTrendCard goodtakeCase">
                <header><div className="marketFlowIndex"><span>01</span><b>MARKET OVERVIEW</b></div></header>
                <h3><B zh={<>从创意构想开始，<span>现在已经进入真实生产。</span></>} en={<>Starts with Ideation. <span>Now to Real Production.</span></>} /></h3>

                <p className="goodtakeLede"><B zh="真实生产，两家伙伴：Goodtake 为联合利华韩国 Snuggle 制作的品牌广告，以及 WPP 用 AI 生成的可口可乐广告片。" en="Real production, two partners: Goodtake's brand spot for Unilever Korea's Snuggle, and WPP's AI-generated Coca-Cola films." /></p>

                <div className="goodtakeGrid goodtakeGridV3">
                  <figure className="goodtakeFeature goodtakeTile16">
                    <div className="goodtakeMedia">
                      <video src="/media/goodtake/snuggle.mp4" autoPlay controls loop muted playsInline preload="metadata" aria-label="Goodtake 为联合利华韩国 Snuggle 制作的品牌广告" />
                      <span className="goodtakeModelTag">Seedance 2.5</span>
                    </div>
                    <figcaption><b>Goodtake &times; Unilever&rsquo;s Snuggle</b><em>Unilever Korea</em></figcaption>
                  </figure>
                  <figure className="goodtakeFeature goodtakeTile16">
                    <div className="goodtakeMedia">
                      <video src="/media/wpp/cocacola-16x9.mp4" autoPlay controls loop muted playsInline preload="metadata" aria-label="WPP 为可口可乐制作的 AI 生成横版广告" />
                      <span className="goodtakeModelTag">Seedance 2.0</span>
                    </div>
                    <figcaption><b>WPP &times; Coca-Cola</b><em>16:9</em></figcaption>
                  </figure>
                  <figure className="goodtakeFeature goodtakeTile9">
                    <div className="goodtakeMedia">
                      <video src="/media/wpp/cocacola-9x16.mp4" autoPlay controls loop muted playsInline preload="metadata" aria-label="WPP 为可口可乐制作的 AI 生成竖版广告" />
                      <span className="goodtakeModelTag">Seedance 2.0</span>
                    </div>
                    <figcaption><b>WPP &times; Coca-Cola</b><em>9:16</em></figcaption>
                  </figure>
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
            <h2 className="langZh" id="case-study-transition-title"><strong>头部客户</strong>怎么用 BytePlus。</h2>
            <h2 className="langEn">How <strong>leading partners</strong> use BytePlus.</h2>
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
              <header className="agencyOperatingHero agencyLockupHero">
                <div className="agencyOperatingIndex"><span>CASE 1</span><b><B zh="典型代理商" en="TYPICAL AGENCY" /></b></div>
                <div className="agencyLockup" role="img" aria-label="BytePlus × WPP">
                  <img className="agencyLockupByteplus" src="/byteplus-logo.png" alt="BytePlus" />
                  <i className="agencyLockupDivider" aria-hidden="true" />
                  <img className="agencyLockupWpp" src="/logos/wpp-halftone.svg" alt="WPP" />
                </div>
                <h3 id="agency-operating-title" className="srOnly">BytePlus × WPP</h3>
              </header>

            </article>

            <article className="wppWorkPage caseFlowPage" id="customer-agency-flow" aria-labelledby="case-flow-title">
              <header className="caseFlowHead">
                <div>
                  <h3 id="case-flow-title">WPP OPEN</h3>
                  <p><B zh="创意代理商运营流 · 从 brief 到可衡量的效果" en="Creative agency operating flow · from brief to measurable impact" /></p>
                </div>
              </header>

              <div className="caseFlowGrid">
                <div className="caseFlowLane caseFlowLaneCreative">
                  <small>01 · CREATIVE</small>
                  <b><B zh="拥有创意 + pre-vis" en="Own the idea + pre-vis" /></b>
                  <em>Ogilvy / VML / AKQA</em>
                </div>
                <div className="caseFlowLane caseFlowLaneProduction">
                  <small>02 · PRODUCTION</small>
                  <b><B zh="做出来 + 做变体" en="Make it + adapt it" /></b>
                  <em>ex-Hogarth</em>
                </div>
                <div className="caseFlowLane caseFlowLaneMedia">
                  <small>03 · MEDIA</small>
                  <b><B zh="投出去 + 优化" en="Run it + optimise" /></b>
                  <em>ex-GroupM</em>
                </div>

                <div className="caseFlowStep"><span>01</span><b><B zh={<>Brief<br />+ 策略</>} en={<>Brief<br />+ strategy</>} /></b><p><B zh="对齐诉求" en="Align the ask" /></p></div>
                <div className="caseFlowStep"><span>02</span><b><B zh={<>洞察<br />+ 人群</>} en={<>Insight<br />+ audience</>} /></b><p><B zh="找到信号" en="Find the signal" /></p></div>
                <div className="caseFlowStep"><span>03</span><b><B zh={<>概念<br />+ pre-vis</>} en={<>Concept<br />+ pre-vis</>} /></b><p><B zh="批准创意" en="Approve the idea" /></p></div>
                <div className="caseFlowStep"><span>04</span><b><B zh={<>制作 /<br />实拍 / 3D</>} en={<>Produce /<br />shoot / 3D</>} /></b><p><B zh="做成实物" en="Make it real" /></p></div>
                <div className="caseFlowStep"><span>05</span><b><B zh={<>改编<br />+ 本地化</>} en={<>Adapt<br />+ localise</>} /></b><p><B zh="生成变体" en="Build variants" /></p></div>
                <div className="caseFlowStep"><span>06</span><b><B zh={<>上线<br />+ 媒介</>} en={<>Launch<br />+ media</>} /></b><p><B zh="触达受众" en="Reach the audience" /></p></div>
                <div className="caseFlowStep"><span>07</span><b><B zh={<>衡量<br />+ 优化</>} en={<>Measure<br />+ optimise</>} /></b><p><B zh="学习并改进" en="Learn and improve" /></p></div>

                <div className="caseFlowHandoff caseFlowHandoffA"><B zh="→ 已批准的 pre-vis + 预算签字" en="→ approved pre-vis + budget sign-off" /></div>
                <div className="caseFlowHandoff caseFlowHandoffB"><B zh="→ 成片母版 + 变体" en="→ finished master + variants" /></div>
              </div>
            </article>

            <article className="wppWorkPage previsPage" id="customer-agency-previs" aria-labelledby="previs-title">
              <header className="previsPageHead">
                <span className="previsKicker">CAMPAIGN WORKFLOW</span>
                <h3 id="previs-title"><B zh={<>WPP Open：一场创意 campaign <strong>在平台上到底怎么跑。</strong></>} en={<>WPP Open: how a creative campaign <strong>actually runs on the platform.</strong></>} /></h3>
              </header>
              <WppPrevisCarousel />
            </article>

            <article className="wppWorkPage prodSidePage" id="customer-agency-production" aria-labelledby="prod-side-title">
              <header className="prodSideHead">
                <span className="prodSideKicker">BYTEPLUS X WPP · PRODUCTION SIDE</span>
                <h3 id="prod-side-title"><B zh={<>它已经不是试点了——渗透率从 <strong>15%</strong> 走到 <strong>30%</strong>。</>} en={<>Past the pilot — penetration climbing from <strong>15%</strong> to <strong>30%</strong>.</>} /></h3>
                <p className="prodSideLede"><B zh="真正在用的是制作团队，不是创新部门。下面四个数字来自他们的实际任务量。" en="It is the production teams using it, not an innovation unit. These four numbers come off their real task volume." /></p>
              </header>

              <div className="prodSideBody">
                <ul className="prodSideStats">
                  <li className="bpCard prodSideStat">
                    <p className="prodSideFigure"><b>6+</b><span><B zh="个市场" en="markets" /></span></p>
                    <p className="prodSideCopy"><B zh={<>制作团队已经在用 Seedance 2.5——用他们自己的话说，<strong>&ldquo;they love it&rdquo;</strong>。</>} en={<>Production teams already running Seedance 2.5 — in their own words, <strong>&ldquo;they love it.&rdquo;</strong></>} /></p>
                  </li>
                  <li className="bpCard prodSideStat">
                    <p className="prodSideFigure"><b>100+</b><span><B zh="名一线用户" en="end users" /></span></p>
                    <p className="prodSideCopy"><B zh="经我们的 workshop 完成培训，已能独立开工。" en="Trained hands-on in the workshops we ran, now working unaided." /></p>
                  </li>
                  <li className="bpCard prodSideStat">
                    <p className="prodSideFigure"><b>77.9%</b><span>R2V</span></p>
                    <p className="prodSideCopy"><B zh={<>4,000 个任务里走的是<strong>分镜 + 参考图转视频</strong>——导演式工作流，而不是靠提示词赌一把。</>} en={<>of 4,000 tasks run <strong>storyboard + reference-to-video</strong> — a director&rsquo;s workflow, not prompt roulette.</>} /></p>
                  </li>
                  <li className="bpCard prodSideStat">
                    <p className="prodSideFigure"><b>72.5%</b><span>16:9</span></p>
                    <p className="prodSideCopy"><B zh={<>4,000 个任务的画幅集中在横屏——投向的是<strong>品牌 TVC 与商业片</strong>，不是社交碎片素材。</>} en={<>of 4,000 tasks are landscape — aimed at <strong>brand commercials</strong>, not social offcuts.</>} /></p>
                  </li>
                </ul>

                <figure className="prodSideDemo">
                  <figcaption className="prodSideDemoHead">
                    <span className="prodSideKicker">DEMO</span>
                    <b><B zh="产线上真实跑出来的成片" en="Straight off that production line" /></b>
                  </figcaption>
                  <div className="prodSideDemoFrame" role="img" aria-label="WPP 产线 Seedance 2.5 成片演示位">
                    <span><B zh="演示视频位 · 16:9" en="Demo reel · 16:9" /></span>
                  </div>
                </figure>
              </div>
            </article>

            <article className="wppWorkPage hexModelPage" id="customer-agency-hex-model" aria-labelledby="hex-model-title">
              <header className="hexModelHead">
                <span className="hexModelKicker">Byteplus x WPP HEX</span>
                <h3 id="hex-model-title"><B zh={<>共建 FDE 人才梯队，<strong>不止于模型接入。</strong></>} en={<>Co-build an FDE cohort, <strong>beyond model integration.</strong></>} /></h3>
                <blockquote className="hexModelQuote">
                  <em>&ldquo;Powerful AI tools aren&rsquo;t enough. What matters is the human talent using them.&rdquo;</em>
                  <span>&mdash; WPP HEX</span>
                </blockquote>
              </header>

              <div className="hexModelBoard">
                <section className="hexModelLane hexModelLaneOrgs" aria-label="组织层">
                  <span className="hexModelLaneLabel"><B zh="组织" en="Organizations" /></span>

                  <article className="hexModelOrg hexModelOrgVendor">
                    <i className="hexModelNum" aria-hidden="true">01</i>
                    <div>
                      <b><img className="hexModelIcon hexModelMark" src="/logos/byteplus-mark.png" alt="" aria-hidden="true" />BytePlus</b>
                      <span><B zh="模型供给方 · 军火库" en="Model vendor · the arsenal" /></span>
                    </div>
                  </article>

                  <FlowArrow zh="模型 + 赋能" en="Models + enablement" />

                  <article className="hexModelOrg hexModelOrgHex">
                    <i className="hexModelNum" aria-hidden="true">02</i>
                    <div>
                      <b><OrgIcon kind="hex" />WPP HEX</b>
                      <span><B zh="共建的 FDE · 交付臂膀" en="Co-built FDE · delivery arm" /></span>
                    </div>
                  </article>

                  <FlowArrow zh="交付" en="Delivery" />

                  <article className="hexModelOrg hexModelOrgClients">
                    <i className="hexModelNum" aria-hidden="true">03</i>
                    <div>
                      <b><OrgIcon kind="clients" /><B zh="品牌客户" en="Brand clients" /></b>
                      <span><B zh="需求侧" en="The demand side" /></span>
                    </div>
                  </article>
                </section>


                <section className="hexModelLane hexModelLaneTalent" aria-label="人才层">
                  <span className="hexModelLaneLabel"><B zh="人才" en="Individual talent" /></span>

                  <div className="hexModelTalent hexModelTalentSeed">
                    <TalentGlyphs count={3} />
                    <b><B zh="我们的科学家 / 讲师" en="Our scientists / educators" /></b>
                  </div>

                  <FlowArrow zh="培训与认证" en="Training and certification" />

                  <div className="hexModelTalent hexModelTalentCohort">
                    <span className="hexModelDrop"><B zh="嵌入客户团队" en="Embedded into client teams" /></span>
                    <TalentGlyphs count={5} />
                    <b><B zh="伙伴出资的创意技术梯队" en="The partner-funded cohort of creative technologists" /></b>
                  </div>

                  <FlowArrow zh="并肩做真实项目" en="Collaborate on live work" />

                  <div className="hexModelTalent hexModelTalentClients">
                    <span className="hexModelDrop"><B zh="并入客户在跑的项目" en="Onto live client work" /></span>
                    <TalentGlyphs count={5} />
                    <b><B zh="客户团队" en="Client teams" /></b>
                  </div>
                </section>

                <section className="hexModelLane hexModelLaneLoop" aria-label="反馈闭环">
                  <span className="hexModelLaneLabel"><B zh="闭环" en="Workflow &amp; feedback" /></span>
                  <div className="hexModelLoop">
                    <b><span aria-hidden="true">&larr;</span><B zh="生产反馈 · AI 人才升级 · 收入增长 · 联合案例" en="Production feedback · Upskilled AI talent · Revenue growth · Joint cases" /><span aria-hidden="true">&rarr;</span></b>
                  </div>
                </section>
                <section className="hexModelLane hexModelLaneProvide" aria-label="我们提供什么">
                  <span className="hexModelLaneLabel"><B zh="我们提供" en="What we provide" /></span>
                  <ol className="hexModelProvide">
                    <li><i aria-hidden="true">01</i><b><B zh="模型使用权与新版本优先体验" en="Model access &amp; early releases" /></b></li>
                    <li><i aria-hidden="true">02</i><b><B zh="Academy：培训与认证" en="Academy: training &amp; certification" /></b></li>
                    <li><i aria-hidden="true">03</i><b><B zh="常在线的技术支持" en="Always-on technical support" /></b></li>
                    <li><i aria-hidden="true">04</i><b><B zh="平台与工作流集成" en="Platform &amp; workflow integration" /></b></li>
                  </ol>
                </section>
              </div>

            </article>

            <article className="wppWorkPage caseLockupPage" id="customer-brand-cover" aria-label="BytePlus × AppLovin">
              <div className="caseLockupIndex"><span>CASE 2</span><b><B zh="广告技术" en="ADTECH" /></b></div>
              <div className="caseLockup" role="img" aria-label="BytePlus × AppLovin">
                <img className="caseLockupByteplus" src="/byteplus-logo.png" alt="BytePlus" />
                <i className="caseLockupDivider" aria-hidden="true" />
                <span className="caseLockupAppLovin">
                  <img src="/logos/applovin-color.svg" alt="" aria-hidden="true" />
                  <b>AppLovin</b>
                </span>
              </div>
            </article>

            <article className="appLovinCase wppWorkPage" id="customer-brand" aria-label="AppLovin AI 创意规模化案例研究">
              <header className="appLovinCaseHero">
                <div className="appLovinCaseIndex"><span>CASE 2</span><b><B zh="广告技术" en="ADTECH" /></b></div>
                <div className="appLovinCaseTitle">
                  <span className="appLovinWordmarkText">AppLovin</span>
                  <p className="appLovinCaseIntro"><B zh="全球最大的移动广告平台之一 —— AXON 引擎把创意规模直接转化为 ROAS。" en="One of the world's largest mobile ad platforms — its AXON engine turns creative volume directly into ROAS." /></p>
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
            <h2 className="langZh" id="solution-transition-title">BytePlus <strong>能做什么。</strong></h2>
            <h2 className="langEn">What <strong>BytePlus</strong> brings to production.</h2>
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
        <div className="brand"><img className="brandLogo" src="/byteplus-logo.png" alt="BytePlus" width="381" height="71" /><span>Ads Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
