import InlineTextEditor from "./InlineTextEditor";
import PlayableClipLightbox from "./PlayableClipLightbox";
import ClipFullscreen from "./ClipFullscreen";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";
import MoreDemosGallery from "./MoreDemosGallery";
import DisplayDemoGallery from "./DisplayDemoGallery";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";
import GbsCase from "./GbsCase";
import BrandCapabilityImage from "./BrandCapabilityImage";
import PerformanceLocalizationDemo from "./PerformanceLocalizationDemo";
import PerformancePreciseEditingDemo from "./PerformancePreciseEditingDemo";
import { projectVideoUrl } from "./media";

const B = ({ zh, en }: { zh: React.ReactNode; en: React.ReactNode }) => (
  <>
    <span className="langZh">{zh}</span>
    <span className="langEn">{en}</span>
  </>
);

/* Head-and-shoulders glyph, repeated to show a cohort growing from one
   trainer to a team. Stroke inherits colour so each lane can tint it. */

/* One line icon per organisation on the operating-model page: a slate for
   the delivery arm, buildings for the demand side. BytePlus uses its real
   logomark instead. Stroke inherits colour so the ink panel can flip them. */

/* Labelled connector that sits in the gutter between two diagram cells. */

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
          <a href="#client-showcases"><span className="langZh">客户案例</span><span className="langEn">Case Studies</span></a>
          <a href="#solutions"><span className="langZh">解决方案</span><span className="langEn">Solutions</span></a>
          <a href="#demos"><span className="langZh">更多样片</span><span className="langEn">More Demos</span></a>
        </div>
        <label className="languageSwitch" htmlFor="language-mode">
          <span className="langZh">中&nbsp; / &nbsp;EN</span>
          <span className="langEn">EN&nbsp; / &nbsp;中</span>
        </label>
      </nav>

      <section className="coverPage" aria-labelledby="cover-title">
        <PauseWhenHiddenVideo
          className="coverBackgroundVideo"
          src="/media/landing/brand-15.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/landing/brand-15-poster.jpg"
          aria-hidden="true"
          ariaLabel=""
          tabIndex={-1}
        />
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

          {/* ---- GBS pitch · P2 milestones & growth ------------------------
              Structure borrowed from the reference "Product Milestones &
              Revenue Penetration" slide: KPI card left, growth curve with
              milestone callouts, phase bar underneath. Volumes, dates and the
              format split are placeholders until 王文杰 pulls the numbers. */}
          <section className="gbsPage gbsGrowthPage" id="gbs-usage" aria-labelledby="gbs-usage-title">
            <header className="gbsPageHead">
              <span className="gbsKicker">PRODUCT MILESTONES · ADS WORKLOAD</span>
              <h2 id="gbs-usage-title"><B zh={<>月度广告生成量<strong>持续增长</strong></>} en={<>Growing <strong>produced Ads</strong> monthly</>} /></h2>
            </header>

            <div className="gbsGrowthBody">
              <aside className="gbsKpi">
                <span><B zh="广告客户日均生成" en="ADS CUSTOMERS · DAILY VOLUME" /></span>
                <b>100k<i>+</i></b>
                <em><B zh="条视频 / 天 · 月环比 ×2" en="videos / day · MoM ×2" /></em>
                <hr />
                <span><B zh="按画幅" en="BY FORMAT" /></span>
                <p><strong>~70%</strong> <B zh="竖屏 9:16 · TikTok / Reels" en="portrait 9:16 · TikTok / Reels" /></p>
                <p><strong>~30%</strong> <B zh="横屏 16:9 · CTV / 品牌" en="landscape 16:9 · CTV / brand" /></p>
                <hr />
                <span><B zh="部分广告客户" en="SELECTED ADS CUSTOMERS" /></span>
                <ul className="gbsKpiLogos" aria-label="Selected ads customers">
                  <li><img src="/logos/customers/wpp.svg" alt="WPP" /></li>
                  <li><img src="/logos/customers/loreal.svg" alt="L’Oréal" /></li>
                  <li><img src="/logos/customers/applovin.png" alt="AppLovin" /></li>
                  <li><img src="/logos/customers/havas.svg" alt="Havas" /></li>
                  <li><img src="/logos/customers/tecdo.svg" alt="Tec-do" /></li>
                </ul>
              </aside>

              <figure className="gbsChart" role="img" aria-label="Daily ad-video volume rising from early 2026 to 100k+ per day by August, with product milestones marked along the curve">
                <svg viewBox="0 0 900 380" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="gbsFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#0066fc" stopOpacity=".18" />
                      <stop offset="1" stopColor="#0066fc" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 340 C120 335 200 325 280 300 C360 275 420 250 500 205 C580 160 640 130 720 92 C790 60 840 42 900 30 L900 380 L0 380 Z" fill="url(#gbsFill)" />
                  <path d="M0 340 C120 335 200 325 280 300 C360 275 420 250 500 205 C580 160 640 130 720 92 C790 60 840 42 900 30" fill="none" stroke="#0066fc" strokeWidth="4" strokeLinecap="round" />
                  <g stroke="#b7bcc4" strokeDasharray="3 5" strokeWidth="1.5">
                    <line x1="280" y1="300" x2="280" y2="150" />
                    <line x1="560" y1="170" x2="560" y2="60" />
                    <line x1="720" y1="92" x2="720" y2="8" />
                  </g>
                  <circle cx="0" cy="340" r="6" fill="#0066fc" />
                  <circle cx="900" cy="30" r="7" fill="#0066fc" />
                </svg>
                <span className="gbsChartStart">~10k</span>
                <span className="gbsChartEnd">100k+</span>
                <div className="gbsMilestone" style={{ "--x": "31%", "--y": "34%" } as React.CSSProperties}><small>26/03 · MODEL</small><b>Seedance 2.0</b></div>
                <div className="gbsMilestone" style={{ "--x": "62%", "--y": "8%" } as React.CSSProperties}><small>26/06 · PLATFORM</small><b>WPP Open · API live</b></div>
                <div className="gbsMilestone gbsMilestoneTop" style={{ "--x": "80%", "--y": "-6%" } as React.CSSProperties}><small>26/08 · MODEL</small><b>Seedance 2.5</b></div>
                <div className="gbsAxis"><span>Jan 26</span><span>Apr 26</span><span>Jul 26</span><span>Aug 26</span></div>
                <div className="gbsPhases">
                  <span><B zh="API 打底" en="API foundation" /></span>
                  <span><B zh="代理商平台接入" en="Agency platforms" /></span>
                  <span><B zh="品牌规模化" en="Brand scale" /></span>
                </div>
              </figure>
            </div>
            <p className="gbsFoot"><B zh="数据：BytePlus 广告行业客户生成量；日均条数、画幅占比与里程碑日期待确认。" en="Data: BytePlus ads-industry customer volume; daily counts, format split and milestone dates to be confirmed." /></p>
          </section>

          {/* ---- GBS pitch · P3 four layers as one system ------------------
              Structure borrowed from the reference multi-agent slide: input on
              the left, three capability boxes in a row, output on the right,
              a dashed feedback loop underneath (that loop IS layer 04), and a
              powered-by strip at the bottom. */}
          <section className="gbsPage gbsSystemPage" id="gbs-offer" aria-labelledby="gbs-offer-title">
            <header className="gbsPageHead">
              <span className="gbsKicker">FOUR LAYERS · ONE SYSTEM</span>
              <h2 id="gbs-offer-title"><B zh={<>我们的差异化：<strong>模型 + agent + FDE + 归因</strong>，一套系统。</>} en={<>Our differentiation: <strong>model + agent + FDE + attribution</strong>, working as one system.</>} /></h2>
              <p className="gbsSub"><B zh="前三层给客户把广告做出来；第四层让 GBS 看得见 AI 带来了多少投放。" en="Three layers make the ads for the customer; the fourth lets GBS see how much spend AI brought in." /></p>
            </header>

            <div className="gbsSystem">
              <div className="gbsSysEnd gbsSysInput">
                <span>INPUT</span>
                <b><B zh="广告主 brief 与素材" en="Advertiser brief &amp; assets" /></b>
                <b><B zh="TikTok 投放信号" en="TikTok ad signals" /></b>
              </div>
              <i className="gbsSysArrow" aria-hidden="true">→</i>
              <article className="gbsSysBox">
                <i className="gbsSysNum">01</i>
                <b><B zh="模型家族 · API" en="Model family · API" /></b>
                <ul>
                  <li>Seedance · Seedream</li>
                  <li>Seed Audio · Seed LLM</li>
                  <li><B zh="品牌 + 效果广告都适配" en="Brand + performance ads" /></li>
                </ul>
              </article>
              <i className="gbsSysArrow" aria-hidden="true">→</i>
              <article className="gbsSysBox">
                <i className="gbsSysNum">02</i>
                <b><B zh="Campaign agent 实践" en="Campaign-agent practice" /></b>
                <ul>
                  <li>brief → personas → concept</li>
                  <li>→ assets → launch</li>
                  <li><B zh="接进客户自己的平台" en="Wired into the customer’s platform" /></li>
                </ul>
              </article>
              <i className="gbsSysArrow" aria-hidden="true">→</i>
              <article className="gbsSysBox">
                <i className="gbsSysNum">03</i>
                <b><B zh="FDE 服务" en="FDE service" /></b>
                <ul>
                  <li><B zh="提示词与一致性调优" en="Prompt &amp; consistency tuning" /></li>
                  <li><B zh="品牌规范落地" en="Brand-kit adherence" /></li>
                  <li><B zh="嵌入客户团队" en="Embedded in the team" /></li>
                </ul>
              </article>
              <i className="gbsSysArrow" aria-hidden="true">→</i>
              <div className="gbsSysEnd gbsSysOutput">
                <span>OUTPUT</span>
                <b><B zh="投到 TikTok 上的广告" en="Ads running on TikTok" /></b>
                <em><B zh="视频广告支出 ↑" en="Video ad spend ↑" /></em>
              </div>

              <div className="gbsSysLoop" aria-label="Layer 04: attribution loop">
                <i className="gbsSysNum isGbs">04</i>
                <b><B zh="AIGC 归因 · 暗水印" en="AIGC ATTRIBUTION · INVISIBLE WATERMARK" /></b>
                <p><B zh="投放侧看到有多少视频是 Seedance 生成 —— 对上 GBS “AI 内容带动 10% 广告支出” 目标。" en="Shows how much running video is Seedance-made — feeding GBS’s 10%-of-spend-from-AI target." /></p>
                <span className="gbsSysLoopTag">FOR GBS</span>
              </div>
            </div>

            <div className="gbsPowered">
              <span>POWERED BY THE SEED FAMILY</span>
              <ul>
                <li className="isHot">Seedance 2.5</li>
                <li>Seedream 5.0</li>
                <li>Seed Audio</li>
                <li>Seed LLM</li>
              </ul>
            </div>
          </section>

          <section className="gbsPage gbsClientsPage" id="client-showcases" aria-labelledby="client-showcases-title">
            <header className="gbsPageHead">
              <span className="gbsKicker">CLIENT SHOWCASES</span>
              <h2 id="client-showcases-title"><B zh={<>已经在用 BytePlus 做广告创意的<strong>客户</strong>。</>} en={<>Who is already producing ads with <strong>BytePlus</strong>.</>} /></h2>
              <p className="gbsSub"><B zh="代理商网络、品牌主、AdTech 与效果代理——每一家都有下一章的案例。" en="Agency networks, a brand owner, AdTech and a performance agency — each with a case in the next chapter." /></p>
            </header>

            <ul className="gbsClients">
              <li>
                <figure><img src="/logos/customers/wpp.svg" alt="WPP" /></figure>
                <b><B zh="全球代理商网络" en="Global agency network" /></b>
                <span><B zh="Seedance 接入 WPP Open · 6+ 市场制作" en="Seedance inside WPP Open · production in 6+ markets" /></span>
              </li>
              <li>
                <figure><img src="/logos/customers/loreal.svg" alt="L’Oréal" /></figure>
                <b><B zh="全球品牌主" en="Global brand owner" /></b>
                <span><B zh="美妆品类的 AI 创意生产" en="AI creative production for beauty" /></span>
              </li>
              <li>
                <figure><img src="/logos/customers/havas.svg" alt="Havas" /></figure>
                <b><B zh="代理商网络" en="Agency network" /></b>
                <span><B zh="从预演到成片" en="From previews into production" /></span>
              </li>
              <li>
                <figure><img src="/logos/customers/applovin.png" alt="AppLovin" /></figure>
                <b><B zh="AdTech · 游戏 / App" en="AdTech · gaming / apps" /></b>
                <span><B zh="互动创意规模化，喂给 AXON" en="Interactive creative at scale, feeding AXON" /></span>
              </li>
              <li>
                <figure><img src="/logos/customers/tecdo.svg" alt="Tec-do" /></figure>
                <b><B zh="跨境电商效果代理" en="Cross-border e-commerce agency" /></b>
                <span><B zh="商品图批量变成投放视频" en="Catalog images into ad video at scale" /></span>
              </li>
            </ul>
            <p className="gbsFoot"><B zh="Goodtake（麦当劳、联合利华）等更多客户见案例章节。" en="More partners — Goodtake for McDonald’s and Unilever among them — in the case chapter." /></p>
          </section>

        </div>
      </section>

      <section className="audienceSection customerCasesSection" id="customer-cases">
        <div className="shell">
          <div className="customerStories gbsCases">
            <GbsCase
              id="case-wpp"
              index="CASE 1"
              kicker={<B zh="代理商 · 品牌质感" en="AGENCY · BRAND QUALITY" />}
              title="BytePlus × WPP"
              titleNote={<B zh="WPP Open · 全球" en="WPP Open · Global" />}
              objectiveTitle={<B zh="把 Seedance 接进 WPP Open" en="Seedance inside WPP Open" />}
              objective={<B zh="让 WPP 的创意与制作团队在自己的平台里，用 Seedance 直接产出可交付的品牌片 —— 从 pre-vis 到成片。" en="Let WPP’s creative and production teams generate deliverable brand film — pre-vis through final — with Seedance inside their own platform." />}
              kpis={[
                { value: "6+", label: <B zh="市场的制作团队在用 2.5" en="markets running Seedance 2.5" /> },
                { value: "100+", label: <B zh="工作坊培训的一线用户" en="end users trained hands-on" /> },
                { value: "77.9%", label: <B zh="任务走 storyboard + R2V" en="of tasks storyboard + R2V" /> },
                { value: "72.5%", label: <B zh="任务为 16:9 品牌片" en="of tasks landscape brand film" /> },
              ]}
              headline={{ value: <>&ldquo;they love it&rdquo;</>, label: <B zh="WPP 制作团队对 Seedance 2.5 的原话" en="Production teams on Seedance 2.5, in their words" /> }}
              phases={[
                { tag: "CRAWL", when: "2026 Q1", copy: <B zh="Seedance 成为 WPP Open 里可选的视频模型；创意团队用它做 pre-vis 拿签字与预算。" en="Seedance wired into WPP Open as a model option; creative teams use it for pre-vis to win sign-off and budget." />,
                  media: { kind: "video", src: "/media/wpp/seedance25-case-09.mp4", label: "Seedance 2.5 sample film — live-action-grade", aspect: "wide" } },
                { tag: "WALK", when: "2026 Q2–Q3", copy: <B zh="制作团队在 6+ 市场跑真活：可口可乐等大品牌的横竖版广告片。" en="Production teams in 6+ markets on live work — landscape and portrait films for brands like Coca-Cola." />,
                  media: { kind: "video", src: "/media/wpp/cocacola-16x9.mp4", label: "WPP × Coca-Cola AI-generated film", aspect: "wide" } },
                { tag: "RUN", when: "2026 H2", copy: <B zh="WPP HEX：共建 FDE 人才梯队，嵌入客户团队，把能力留在 WPP 手里。" en="WPP HEX: co-built FDE cohort embedded in client teams — the capability stays with WPP." />,
                  media: { kind: "video", src: "/media/wpp/seedance25-case-19.mp4", label: "Seedance 2.5 sample — retail promo", aspect: "square" } },
              ]}
              footnote={<B zh="用量数据来自 BytePlus 侧 4,000 个任务统计；闭门材料。" en="Usage figures from BytePlus-side stats over 4,000 tasks; closed-door material." />}
            />

            <GbsCase
              id="case-loreal"
              index="CASE 2"
              kicker={<B zh="品牌主 · 品牌质感" en="BRAND OWNER · BRAND QUALITY" />}
              title="BytePlus × L’Oréal"
              titleNote={<B zh="CreaTech · 欧洲" en="CreaTech · Europe" />}
              objectiveTitle={<B zh="接入欧莱雅 CreaTech" en="Plugged into L’Oréal CreaTech" />}
              objective={<B zh="欧莱雅欧洲的内部创意技术平台接入 Seedance，2.5 发布后用量起量，正在谈 commitment。" en="L’Oréal Europe’s in-house creative-tech platform runs on Seedance; volume ramped after 2.5, commitment in discussion." />}
              kpis={[
                { value: "100+", label: <B zh="条 / 天 · 2.5 发布后" en="videos / day since 2.5 launch" /> },
                { value: "1,000+", label: <B zh="条 / 天 · commitment 后预估" en="videos / day est. after commitment" /> },
                { value: "2.5", label: <B zh="Seedance 版本" en="Seedance version in use" /> },
                { value: "EU", label: <B zh="欧洲 CreaTech 团队" en="CreaTech team, Europe" /> },
              ]}
              headline={{ value: <B zh="待签" en="Commitment" />, label: <B zh="预估签约后进入 1,000+/天" en="1,000+/day expected once signed" /> }}
              phases={[
                { tag: "CRAWL", when: "2026 H1", copy: <B zh="CreaTech 接入 API，内部团队试用 2.0。" en="CreaTech integrates the API; internal teams trial 2.0." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现（王文杰 · 需 account id）" en="Sample pending — 王文杰 to reproduce from prompts (needs account id)" /> } },
                { tag: "WALK", when: "2026 Aug", copy: <B zh="Seedance 2.5 发布，C 端团队周内上到 100+ 条 / 天。" en="Seedance 2.5 ships; consumer teams reach 100+ videos a day within the week." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现" en="Sample pending" /> } },
                { tag: "RUN", when: "2026 H2", copy: <B zh="签 commitment，进入 1,000+ 条 / 天的品牌内容生产。" en="Sign the commitment; move to 1,000+ videos a day of brand content." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现" en="Sample pending" /> } },
              ]}
              footnote={<B zh="用量为内部观测值，闭门材料；样片由王文杰按同 prompt 复现后替换。" en="Volumes are internal observations, closed-door; samples to be replaced once 王文杰 reproduces from the same prompts." />}
            />

            <GbsCase
              id="case-goodtake"
              index="CASE 3"
              kicker={<B zh="代理商 · 效果 + 品牌" en="AGENCY · PERFORMANCE + BRAND" />}
              title="BytePlus × Goodtake"
              titleNote={<B zh="麦当劳 · 联合利华" en="McDonald’s · Unilever" />}
              objectiveTitle={<B zh="AI 素材直接进投放" en="AI creative straight into media" />}
              objective={<B zh="Goodtake 用 Seedance 为麦当劳做 3D CGI 社交广告，与同期其他素材同场投放；再为联合利华韩国 Snuggle 做品牌片。" en="Goodtake ships Seedance 3D CGI social ads for McDonald’s against the other assets in flight, then a brand film for Unilever Korea’s Snuggle." />}
              kpis={[
                { value: "3.2×", label: <B zh="2s VTR vs 其他素材" en="2s VTR vs other assets" /> },
                { value: "5.1×", label: <B zh="6s VTR vs 其他素材" en="6s VTR vs other assets" /> },
                { value: "0.30%", label: <B zh="CTR（其他 0.26%）" en="CTR (others 0.26%)" /> },
                { value: "1.23%", label: <B zh="ER（其他 0.50%）" en="ER (others 0.50%)" /> },
              ]}
              headline={{ value: <>&uarr;410%</>, label: <B zh="6s VTR · McDonaldland Q4’25" en="6s VTR · McDonaldland Q4’25" /> }}
              phaseLayout="twoUp"
              phases={[
                { tag: "CRAWL", when: "2025 Q4", copy: <B zh="McDonaldland：第一支 3D CGI 社交视频，四项指标全胜。" en="McDonaldland: first 3D CGI social spot; wins on all four metrics." />,
                  media: { kind: "video", src: "/media/goodtake/mcdonaldland.mp4", label: "Goodtake × McDonaldland" } },
                { tag: "WALK", when: "2026 Q2", copy: <B zh="Grimace：第二轮投放，Seedance 2.0。" en="Grimace: second flight on Seedance 2.0." />,
                  media: { kind: "video", src: "/media/goodtake/grimace.mp4", label: "Goodtake × Grimace" } },
                { tag: "RUN", when: "2026 Q3", copy: <B zh="Snuggle 品牌片：Seedance 2.5，真人实拍级质感。" en="Snuggle brand film on Seedance 2.5 — live-action-grade quality." />,
                  media: { kind: "video", src: "/media/goodtake/snuggle.mp4", label: "Goodtake × Unilever Snuggle" } },
              ]}
              footnote={<B zh="来源：Goodtake × 麦当劳投放数据 · 内部机密。" en="Source: Goodtake × McDonald’s campaign data · confidential." />}
            />

            <GbsCase
              id="case-tecdo"
              index="CASE 4"
              kicker={<B zh="代理商 · 电商效果" en="AGENCY · E-COMMERCE PERFORMANCE" />}
              title="BytePlus × Tec-do"
              titleNote={<B zh="钛动 · 跨境电商" en="Tec-do · cross-border e-commerce" />}
              objectiveTitle={<B zh="商品图批量变成投放视频" en="Catalog images into ad video at scale" />}
              objective={<B zh="钛动用 Seedance + agent 把电商客户的商品图和 SKU 批量生成为可直接投放的效果视频。" en="Tec-do turns e-commerce clients’ product images and SKUs into ready-to-run performance video with Seedance + agents, at scale." />}
              kpis={[
                { value: "4×", label: <B zh="ROI" en="ROI" /> },
                { value: "+22%", label: <B zh="CTR 提升" en="CTR uplift" /> },
                { value: "2.5×", label: <B zh="AI 使每周创意素材产量提升至 2.5 倍" en="weekly creative output with AI" /> },
                { value: "90%", label: <B zh="A/B 测试以 90% 置信度选出胜出版本" en="A/B-test confidence picking the winner" /> },
              ]}
              phases={[
                { tag: "SEPHORA", when: "Beauty", copy: <B zh="Rare Beauty × Sephora 西语市场投放素材，商品图生视频。" en="Rare Beauty × Sephora, Spanish-market ad — product image to video." />,
                  media: { kind: "video", src: "/media/tecdo/sample-1.mp4", label: "Tec-do sample ad — Rare Beauty × Sephora", portrait: true } },
                { tag: "FRESH", when: "Beauty", copy: <B zh="Fresh 玫瑰面霜：同一流程跑不同品牌与语言。" en="Fresh Rose face cream — same pipeline, another brand and language." />,
                  media: { kind: "video", src: "/media/tecdo/sample-2.mp4", label: "Tec-do sample ad — Fresh Rose face cream", portrait: true } },
              ]}
              footnote={<B zh="效果数据来自钛动提供的材料。" en="Uplift figures from Tec-do’s own materials." />}
            />

            <GbsCase
              id="case-applovin"
              index="CASE 5"
              kicker={<B zh="游戏 / App · 互动广告" en="GAMING / APPS · INTERACTIVE" />}
              title="BytePlus × AppLovin"
              titleNote={<B zh="Creative Sets · AXON" en="Creative Sets · AXON" />}
              objectiveTitle={<B zh="互动创意规模化" en="Interactive creative at scale" />}
              objective={<B zh="上传素材自动组合成可玩、视频与图片广告，全品类、游戏为主。更多创意输入 → AXON 学得更快 → 效率更高。" en="Uploaded assets auto-compose into playable, video and image ads — every category, games first. More creative in → faster AXON learning → higher efficiency." />}
              kpis={[
                { value: "60K+", label: <B zh="每月广告创意" en="ad creatives / month" /> },
                { value: "1B+", label: <B zh="日活 · 10,000+ 应用" en="DAU across 10,000+ apps" /> },
                { value: "$11B+", label: <B zh="AppLovin 年度投放" en="annual ad spend on AppLovin" /> },
                { value: "35s", label: <B zh="广告中位互动时长" en="median ad engagement" /> },
              ]}
              headline={{ value: "80%", label: <B zh="网页转化在 24h 内完成" en="web conversions within 24h" /> }}
              phases={[
                { tag: "PARADISE PAWS", when: "Gaming", copy: <B zh="可玩广告：直接在广告里试玩，再进安装。" en="Playable: try the game inside the ad, then install." />,
                  media: { kind: "video", src: "/media/applovin/sample-02.mp4", label: "AppLovin playable ad — Paradise Paws", portrait: true } },
                { tag: "ILIA", when: "Beauty", copy: <B zh="互动电商广告：产品特写 + 促销，一键 Shop Now。" en="Interactive commerce: product close-up + offer, one-tap Shop Now." />,
                  media: { kind: "video", src: "/media/applovin/beauty-011.mp4", label: "AppLovin interactive ad — ILIA mascara", portrait: true } },
                { tag: "TYMO", when: "Electronics", copy: <B zh="多 SKU 陈列式互动广告：一支覆盖整条产品线。" en="Multi-SKU showcase: one interactive unit covers the whole line." />,
                  media: { kind: "video", src: "/media/applovin/electronics-008.mp4", label: "AppLovin interactive ad — TYMO hair tools", portrait: true } },
              ]}
              footnote={<B zh="平台数据来自 applovin.com（consumer-brands / gaming-apps 页，2026-08 读取）；60K+ 为 BytePlus 侧创意生成量。AppLovin 未公开单案例效果数字。" en="Platform figures from applovin.com (consumer-brands / gaming-apps pages, read Aug 2026); 60K+ is BytePlus-side creative volume. AppLovin has not disclosed per-campaign uplift." />}
            />
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
            <h2 className="langZh" id="solution-transition-title"><strong>BytePlus AI 原生广告创意生产解决方案。</strong></h2>
            <h2 className="langEn"><strong>BytePlus Solutions for AI-Native Creative Production.</strong></h2>
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
                controls
                playsInline
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
                  <PauseWhenHiddenVideo src="/media/performance-2026/multi-sku.mp4" poster="/media/performance-2026/multi-sku.jpg" controls playsInline ariaLabel="Multi-SKU Sweep performance ad demo" />
                </div>
              </section>
            </div>
          </article>

          <article className="solutionPage performanceCapabilityPage performanceCapabilityFoundationPage" id="solution-performance-capabilities">
            <header className="performanceCapabilityHeader">
              <div className="performanceV2Index"><span>3.2</span><b>PERFORMANCE ADS</b></div>
              <div className="performanceV2Title">
                <h3><B zh="Seedance 2.5 如何规模化生产效果广告素材" en="Why Seedance 2.5 Scales Performance Creative" /></h3>
              </div>
            </header>

            <div className="performanceCapabilityBody performanceCapabilityV3 performanceCapabilityFoundationBody">
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
            </div>
          </article>

          <article className="solutionPage performanceCapabilityPage performanceCapabilityExecutionPage" id="solution-performance-localization">
            <header className="performanceCapabilityHeader">
              <div className="performanceV2Index"><span>3.2</span><b>PERFORMANCE ADS</b></div>
              <div className="performanceV2Title">
                <h3><B zh="Seedance 2.5 如何规模化生产效果广告素材" en="Why Seedance 2.5 Scales Performance Creative" /></h3>
              </div>
            </header>

            <div className="performanceCapabilityBody performanceCapabilityV3 performanceCapabilityExecutionBody">
              <PerformanceLocalizationDemo />
              <PerformancePreciseEditingDemo />
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
                      {playableOutputClips.map((src, index) => <PauseWhenHiddenVideo key={src} src={src} autoPlay loop muted playsInline ariaLabel={`Playable 广告视觉变体 ${index + 1}，点击放大`} />)}
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
