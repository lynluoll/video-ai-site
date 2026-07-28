const scenarioCases = [
  {
    index: "01",
    label: "BRAND FILM",
    title: "导演级品牌片",
    ratio: "15 / 30S",
    desc: "这类片子的难点不是生成一段漂亮画面，而是让创意、产品、人物与品牌规范在多镜头里始终可控，并能进入专业交付链路。",
    media: {
      type: "video",
      src: "/media/brand-reference.mp4",
      poster: "/media/brand-poster.jpg",
      aria: "品牌广告参考样片",
      headline: "确定性来自流程设计",
      meta: "多镜头一致性 · 品牌保真 · 专业交付",
    },
    customers: [
      { role: "委托方", names: "L’Oréal · Coca-Cola 等头部品牌" },
      { role: "主制作方", names: "WPP · Havas · Publicis · Dentsu · Omnicom" },
      { role: "执行团队", names: "Strategy · Creative · Production / VFX" },
    ],
    needs: [
      { label: "BRAND CONTROL", value: "产品 / Logo / 品牌色保持一致" },
      { label: "MULTI-SHOT", value: "30 秒多镜头人物与产品不漂" },
      { label: "DELIVERY", value: "4K · 高码率 · 10bit 专业交付" },
      { label: "AI ROLE", value: "AI 10–20% → 70%" },
    ],
    steps: [
      { title: "策略与创意共创", copy: "代理商 Strategy 与品牌方确认受众、主张与导演概念，先锁定品牌不能妥协的边界。" },
      { title: "导演级预演", copy: "用图片模型生成分镜、KV 与场景参考，再用 3D 白模锁定机位、运镜、空间和打光。" },
      { title: "混合生产", copy: "结合实拍、3D 资产与 AI 渲染完成多镜头成片；关键帧与产品 Packshot 先行质检。" },
      { title: "后期与精准返工", copy: "完成 VFX、调色、音效和局部修补；品牌或法务反馈只改指定元素，不整条重抽。" },
      { title: "审片与多端交付", copy: "按品牌规范和平台规格输出 CTV、YouTube、DV360 交付包，并衍生海报与封面。" },
    ],
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "高频效果广告",
    ratio: "10–100 变体",
    desc: "这类片子的价值由投放结果定义。客户需要的不是单条 Demo，而是一套能持续产出 Hook、跑实验、看归因、复刻胜出结构的系统。",
    media: {
      type: "video",
      src: "/media/performance-generated.mp4",
      poster: "/media/performance-poster.jpg",
      aria: "AI 生成效果广告样片",
      headline: "一次过率决定综合成本",
      meta: "竖屏 UGC · 商品保真 · 爆款复刻",
    },
    customers: [
      { role: "核心制作方", names: "AppLovin · 钛动等 AdTech / Martech" },
      { role: "预算与投放", names: "品牌 Creative Ops · 电商 / 游戏 / App 团队" },
      { role: "渠道入口", names: "Meta Reels · TikTok · YouTube Shorts · Unity Ads" },
    ],
    needs: [
      { label: "FORMAT", value: "10–15s · 720p · 9:16 竖屏" },
      { label: "PASS RATE", value: "高一次过率，减少视频抽卡次数" },
      { label: "LOCALIZE", value: "换品、换人、换语言、换市场" },
      { label: "AI ROLE", value: "AI 30% → 90%" },
    ],
    steps: [
      { title: "热点与脚本洞察", copy: "从 TikTok、Instagram、X 等平台追踪热点，生成 Hook、CTA、口播和商品脚本。" },
      { title: "首帧与内容生产", copy: "白底图转场景图，完成商品保真、数字人定型与高质量首帧，再进入图生视频。" },
      { title: "小流量投放实验", copy: "批量生成 10–100 条变体，按 tCPA、tROAS、CTR 与 CVR 做效果归因。" },
      { title: "爆款结构复刻", copy: "对胜出素材做换 SKU、模特、区域与语言的局部编辑，再送回测试与放量循环。" },
    ],
  },
  {
    index: "03",
    label: "DISPLAY",
    title: "静态展示广告",
    ratio: "100–1K 图片",
    desc: "这类素材看似简单，真正门槛是把商品、文字、尺寸和多语言同时做对，并让一套主视觉能稳定扩成数百到数千张投放版本。",
    media: {
      type: "image",
      src: "/media/display-vacuum.jpg",
      secondary: "/media/display-fashion.jpg",
      aria: "AI 生成的吸尘器与服饰展示广告",
      headline: "一套主视觉，适配每个货架",
      meta: "商品保真 · 精准文字 · 多尺寸适配",
    },
    customers: [
      { role: "广告主", names: "Shein · Temu · Amazon 卖家 · Shopify 商家" },
      { role: "制作平台", names: "Smartly.io · Creatopy · AppLovin" },
      { role: "媒体与代理", names: "Pinterest · Criteo · 头部 4A 代理商" },
    ],
    needs: [
      { label: "SCALE", value: "单 Campaign 数百至数千张变体" },
      { label: "FORMAT", value: "IAB 尺寸 · 1:1 · 9:16 任意比例" },
      { label: "PRECISION", value: "商品、价格与多语言文字准确" },
      { label: "UNIT COST", value: "美分级单张成本与千级并发" },
    ],
    steps: [
      { title: "品牌资产入库", copy: "把商品白底图、品牌 VI、字体、价格与法务文案作为生成和套版的硬约束。" },
      { title: "AI 图片生成与合成", copy: "用 Seedream 生成场景重绘、模特换装、背景替换和商品精修，保留 Logo、包装与 SKU 细节。" },
      { title: "批量套版与尺寸适配", copy: "一套 KV 自动扩展到 IAB、社交信息流和竖屏尺寸，并生成多语言、多市场版本。" },
      { title: "DCO、A/B 与复刻", copy: "对接动态创意优化，按 CTR / CVR 筛选胜出组合，再快速换品、换区域放大。" },
    ],
  },
];

const audiences = [
  {
    priority: "P0",
    type: "头部代理商",
    wallet: "$200M / 年 TAM",
    monthly: "约 $17M / 月",
    copy: "切入自建创意平台，把 Creative 渗透率从 30% 推向 70%，再逐步打开 Production。",
    width: "100%",
    cases: [{ name: "WPP", metric: "$6M MRR" }, { name: "Havas", metric: "$1.5M MRR" }],
    org: ["Creative", "Production", "Media"],
  },
  {
    priority: "P0",
    type: "AdTech / Martech",
    wallet: "$200M / 年 TAM",
    monthly: "约 $16.67M / 月",
    copy: "把素材自动化嵌入 Campaign Agent，以一次过率、迭代速度和 ROAS 驱动规模收入。",
    width: "100%",
    cases: [{ name: "AppLovin", metric: "AXON · 1B+ DAU" }, { name: "钛动", metric: "AI + 实拍双引擎" }],
    org: ["投放算法", "AI 产品", "Creative Ops"],
  },
  {
    priority: "P1",
    type: "头部消费品牌",
    wallet: "$100M / 年 TAM",
    monthly: "约 $8.3M / 月",
    copy: "预算源头。优先进入企业 AI 平台白名单，用标杆案例建立行业影响力。",
    width: "50%",
    cases: [{ name: "L’Oréal", metric: "10–20 万视频 / 月" }, { name: "Coca-Cola", metric: "头部组 · 单客可达 $1M" }],
    org: ["集团 AI 中台", "品牌团队", "外部 4A"],
  },
  {
    priority: "P1",
    type: "Paid Media",
    wallet: "$75M / 年 TAM",
    monthly: "约 $6.25M / 月",
    copy: "以 Display Ads 和批量本地化为突破口，建立图片与视频的双模型消耗池。",
    width: "38%",
    cases: [{ name: "Pinterest", metric: "$2M MRR" }, { name: "Reddit", metric: "$1M MRR" }],
    org: ["广告产品", "创意工具", "客户成功"],
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

const walletDepth = [
  { customer: "WPP", type: "代理商", value: "$6.0M", width: "100%", signal: "自用平台 + 对外转售" },
  { customer: "Snap", type: "付费媒体", value: "$2.0M", width: "33%", signal: "平台创意生成能力" },
  { customer: "Pinterest", type: "付费媒体", value: "$2.0M", width: "33%", signal: "Display 图片标杆缺口" },
  { customer: "Havas", type: "代理商", value: "$1.5M", width: "25%", signal: "Creative / Production 渗透" },
  { customer: "Reddit", type: "付费媒体", value: "$1.0M", width: "17%", signal: "广告主自助创意工具" },
  { customer: "头部品牌组", type: "品牌", value: "≤ $1.0M", width: "17%", signal: "白名单与 Generation Credit" },
];

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
              <figcaption><span>FIG. 01</span> 从全球预算口径到海外数字广告四大支柱<small>网页原生重绘 · 2026</small></figcaption>
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
              <figcaption><span>FIG. 02</span> 同一增长市场，对应两套完全不同的生产逻辑<small>网页原生表达</small></figcaption>
            </figure>
          </article>

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
              <figcaption><span>FIG. 03</span> 从生产支出到模型 API 的价值捕获路径<small>网页原生表达</small></figcaption>
            </figure>
          </article>
        </div>

        <div className="shell segmentComparison">
          <div className="dataHeader darkText segmentHeader">
            <div><span>SEGMENT LANDSCAPE</span><h3>三大细分赛道全景对比</h3></div>
            <p>Social Video 赢在素材规模，CTV 赢在增速与品牌预算，OLV 承接长视频与开放网络。六个维度决定不同的产品优先级。</p>
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
          <p className="dataSource">SEGMENT COMPARISON · 内容按方案截图完整转译为网页原生矩阵；规模与增速沿用方案口径。第一章结论依据飞书方案 rev. 8881，关键数字为方向性估算，大盘与目标数字待孙越交叉验证。</p>
        </div>
      </section>

      <section className="section shell" id="scenarios">
        <div className="sectionIntro">
          <p className="eyebrow"><span>02</span> / SAMPLE-LED SCENE MAP</p>
          <h2>先看样片，<br />再拆需求。</h2>
          <p>三支样片对应三类场景：谁在买、谁在做、什么指标决定成败，以及模型应该嵌进哪一步。</p>
        </div>
        <div className="sampleCases">
          {scenarioCases.map((card) => (
            <article className={`sampleCase ${card.media.type === "image" ? "displayCase" : "videoCase"}`} key={card.index}>
              <figure className="sampleVisual">
                <div className="sampleMedia">
                  {card.media.type === "video" ? (
                    <video src={card.media.src} poster={card.media.poster} muted loop autoPlay playsInline preload="metadata" aria-label={card.media.aria} />
                  ) : (
                    <>
                      <img src={card.media.src} alt={card.media.aria} loading="lazy" />
                      <div className="sampleVariant"><img src={card.media.secondary} alt="同一场景的服饰展示广告变体" loading="lazy" /></div>
                    </>
                  )}
                  <div className="mediaShade" />
                  <div className="sampleMediaTop"><span>SAMPLE {card.index}</span><b>{card.label}</b></div>
                  <figcaption className="sampleMediaMeta">
                    <span>{card.ratio}</span>
                    <h3>{card.media.headline}</h3>
                    <p>{card.media.meta}</p>
                  </figcaption>
                </div>
              </figure>

              <div className="caseBrief">
                <p className="caseKicker">SCENE {card.index} <span>按样片拆解</span></p>
                <div className="caseTitleRow"><h3>{card.title}</h3><b>{card.ratio}</b></div>
                <p className="caseDescription">{card.desc}</p>

                <div className="caseOwnership" aria-label={`${card.title}客户与制作方`}>
                  <div className="briefLabel"><b>客户是谁</b><span>WHO BUYS / WHO MAKES</span></div>
                  <dl>
                    {card.customers.map((customer) => (
                      <div key={customer.role}><dt>{customer.role}</dt><dd>{customer.names}</dd></div>
                    ))}
                  </dl>
                </div>

                <div className="caseNeeds" aria-label={`${card.title}核心需求`}>
                  <div className="briefLabel"><b>样片需求</b><span>WHAT MUST BE TRUE</span></div>
                  <ul>
                    {card.needs.map((need) => <li key={need.label}><span>{need.label}</span><b>{need.value}</b></li>)}
                  </ul>
                </div>

                <details className="workflowDisclosure">
                  <summary>
                    <span><b>展开具体制作流程</b><small>方案路径 · {card.steps.length} STEPS</small></span>
                    <i aria-hidden="true">＋</i>
                  </summary>
                  <ol>
                    {card.steps.map((step, i) => (
                      <li key={step.title}>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        <div><b>{step.title}</b><p>{step.copy}</p></div>
                      </li>
                    ))}
                  </ol>
                </details>
              </div>
            </article>
          ))}
        </div>

        <div className="perfDataPanel" id="scene-perf">
          <div className="dataHeader">
            <div><span>PERFORMANCE DEEP DIVE</span><h3>一次过率，决定效果广告的胜负。</h3></div>
            <p>客户衡量的不是单次生成价格，而是最终得到一条可投放素材要花多少钱、多久，以及能否持续复制。</p>
          </div>

          <div className="costFormula" aria-label="效果广告综合成本公式">
            <span>每条可投放素材的综合成本</span><b>=</b><strong>单次生成价格</strong><b>×</b><strong>抽卡次数</strong>
            <small>单价已经领先；下一阶段最关键的产品杠杆是一次过率。</small>
          </div>

          <div className="perfKpis">
            <article><span>ANNUAL SUPPLY</span><strong>≈ 1B</strong><p>海外效果广告年素材量级 · 参考页估算</p></article>
            <article><span>STANDARD FORMAT</span><strong>10–15s</strong><p>竖屏 720p · UGC 口播 / 商品演示</p></article>
            <article><span>VARIANTS / SKU</span><strong>10–100</strong><p>用于 Hook、人物、语言与 CTA 实验</p></article>
            <article><span>AI PENETRATION</span><strong>30 → 90%</strong><p>2026 → 2030 · 端到端素材生产</p></article>
          </div>

          <div className="tableScroll" role="region" aria-label="效果广告生产参数表" tabIndex={0}>
            <table className="dataTable darkTable">
              <thead><tr><th>决策维度</th><th>当前生产口径</th><th>对模型的要求</th><th>商业含义</th></tr></thead>
              <tbody>
                <tr><td><b>投放渠道</b></td><td>Meta Reels · TikTok · YouTube Shorts · 应用内广告网络</td><td>9:16、多语言口播、平台规格直出</td><td>渠道越多，本地化与尺寸变体越多</td></tr>
                <tr><td><b>主要生产者</b></td><td>AdTech / Martech · 品牌自建工具 · 达人代理</td><td>API 稳定性、批量并发、可编辑工作流</td><td>进入 Campaign Agent 才能形成持续消耗</td></tr>
                <tr><td><b>素材类型</b></td><td>UGC 种草 · 商品 Showcase · 爆款复刻</td><td>商品保真、人物自然、首帧成功率</td><td>首帧质量直接影响抽卡次数</td></tr>
                <tr><td><b>竞争观察</b></td><td>Kling 3.0 · Veo 3.1 · nano banana 2</td><td>在成本优势上补齐一次过率</td><td>综合成片成本，而非单次调用价决定份额</td></tr>
              </tbody>
            </table>
          </div>

          <div className="perfWorkflow" aria-label="Campaign Agent 素材生产链路">
            {[
              ["01", "INSIGHT", "市场热点洞察", "追踪 TikTok / IG / X 热点，设计 Hook、CTA 与脚本。"],
              ["02", "PRODUCE", "AI 内容生产", "白底图转场景、数字人定型、首帧与视频生成；这是模型消耗核心。"],
              ["03", "TEST", "小流量投放实验", "先用低成本静态图筛方向，再用视频验证 CTR / CVR。"],
              ["04", "SCALE", "爆款结构复刻", "换 SKU、模特、市场与语言，把胜出结构重新送回测试。"],
            ].map((step) => <article key={step[0]}><span>{step[0]} / {step[1]}</span><h4>{step[2]}</h4><p>{step[3]}</p></article>)}
          </div>
          <p className="dataSource inverse">REFERENCE PAGE · localhost:4173/#scene-perf · 竞争信息与素材量级为参考页观察口径。</p>
        </div>
      </section>

      <section className="agentSection shell">
        <div className="agentCopy">
          <p className="eyebrow"><span>03</span> / THE GROWTH LOOP</p>
          <h2>Campaign Agent<br />进入可复制阶段。</h2>
          <p>素材自动化不再是独立功能，而是投放系统的必要组成。AI 素材占比越高，模型收入随投放规模同步增长。</p>
          <div className="agentSignals">
            <div className="agentSignal"><span>1 → 3</span><p><b>从单点验证到复制放大</b><br />当前市场阶段</p></div>
            <div className="agentSignal"><span>30 → 90%</span><p><b>AI 素材渗透率</b><br />2026 → 2030</p></div>
          </div>
        </div>
        <div className="loop" aria-label="Campaign Agent 增长循环">
          {[
            ["01", "洞察", "发现热点与高潜创意"],
            ["02", "创作", "脚本、首帧与视频批量生成"],
            ["03", "投放", "小流量测试与效果归因"],
            ["04", "复刻", "换品、换人、换市场放大"],
          ].map((item, i) => (
            <div className="loopStep" key={item[1]}>
              <i>{item[0]}</i><div><b>{item[1]}</b><span>{item[2]}</span></div>{i < 3 && <em>→</em>}
            </div>
          ))}
          <div className="loopReturn">↺ ROAS 反馈回流</div>
        </div>
      </section>

      <section className="audienceSection" id="audience">
        <div className="shell">
          <div className="sectionIntro darkText audienceIntro">
            <p className="eyebrow dark"><span>04</span> / CUSTOMER STRATEGY</p>
            <h2>预算来自品牌，<br />规模来自渠道。</h2>
            <p>品牌是预算源头；代理商与 AdTech 掌握生产和投放入口，是 2026 收入增长的核心抓手。</p>
          </div>
          <div className="audienceGrid">
            {audiences.map((item) => (
              <article className="audienceCard" key={item.type}>
                <div className="audienceTop"><span>{item.priority}</span><b>{item.wallet}<small>{item.monthly}</small></b></div>
                <h3>{item.type}</h3>
                <div className="casePair">
                  {item.cases.map((customer) => <span key={customer.name}><b>{customer.name}</b><small>{customer.metric}</small></span>)}
                </div>
                <p>{item.copy}</p>
                <div className="orgMini" aria-label={`${item.type}典型组织`}>
                  {item.org.map((unit, i) => <span key={unit}>{unit}{i < item.org.length - 1 && <i>→</i>}</span>)}
                </div>
                <div className="walletBar"><i style={{ width: item.width }} /></div>
              </article>
            ))}
          </div>

          <div className="walletDepthPanel">
            <div className="dataHeader darkText">
              <div><span>WALLET DEPTH · 2026.05</span><h3>头部客户钱包，已有明确参照。</h3></div>
              <p>用竞对模型 MRR 观察可争取的钱包深度。代理商负责规模收入，付费媒体提供平台入口，品牌组决定白名单与行业影响力。</p>
            </div>
            <div className="walletRows" role="table" aria-label="头部客户钱包深度">
              {walletDepth.map((row) => (
                <div className="walletRow" role="row" key={row.customer}>
                  <b role="cell">{row.customer}</b><span role="cell">{row.type}</span>
                  <div className="walletTrack" role="cell"><i style={{ width: row.width }} /></div>
                  <strong role="cell">{row.value}</strong><small role="cell">{row.signal}</small>
                </div>
              ))}
            </div>
            <p className="dataSource">SOURCE · 飞书客户钱包口径 2026.05；头部品牌组为“单客可达”而非 Coca-Cola 单客已确认收入。</p>
          </div>

          <div className="lorealCase">
            <div className="caseTitle"><span>CASE / L’ORÉAL</span><h3>不是卖一个工具，<br />而是进入企业 AI 生产池。</h3></div>
            <div className="orgFlow">
              <div><b>01</b><strong>集团 CreTech</strong><span>模型白名单 · Generation Credit</span><small>50–100 万张图片 / 月<br />10–20 万条视频 / 月</small></div>
              <em>→</em>
              <div><b>02</b><strong>品牌 / 市场团队</strong><span>本地化 · 版本化 · QA</span><small>150 个市场<br />50 个品牌</small></div>
              <em>→</em>
              <div><b>03</b><strong>外部代理商</strong><span>Hero Film · TVC · Campaign</span><small>Pre-vis 与后期延展切入</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell solutions">
        <div className="sectionIntro">
          <p className="eyebrow"><span>05</span> / SOLUTION FOCUS</p>
          <h2>一个模型底座，<br />三条生产管线。</h2>
        </div>
        <div className="solutionStack">
          <article>
            <span>01</span><div><h3>3D 白模 + AI</h3><p>把确定性前置。短期聚焦 Creative pre-vis，中长期突破 Production 的一致性与专业交付。</p></div><b>BRAND</b>
          </article>
          <article>
            <span>02</span><div><h3>Campaign Agent</h3><p>打通洞察、脚本、生成、投放、复刻，以综合成片成本和 ROI 衡量模型价值。</p></div><b>PERFORMANCE</b>
          </article>
          <article>
            <span>03</span><div><h3>Display Automation</h3><p>强化商品一致性、精准文字、局部编辑和任意尺寸，支撑千级图片批量生产。</p></div><b>DISPLAY</b>
          </article>
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
            <p className="eyebrow dark"><span>06</span> / ROADMAP</p>
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
