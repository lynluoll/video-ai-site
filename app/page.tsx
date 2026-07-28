const scenarioCards = [
  {
    index: "01",
    label: "BRAND",
    title: "品牌广告",
    ratio: "40%",
    desc: "确定性优先。用 3D 白模锁定机位、运镜与物理，再让视频模型完成最终渲染。",
    facts: ["15–30s 标准成片", "4K / 10bit 交付", "AI 10–20% → 70%"],
    steps: ["创意预演", "3D 白模", "AI 渲染", "后期与交付"],
  },
  {
    index: "02",
    label: "PERFORMANCE",
    title: "效果广告",
    ratio: "60%",
    desc: "速度与 ROI 优先。让素材生产进入 Campaign Agent，持续测试、归因与复刻。",
    facts: ["10–100 条变体", "$10–数十 / 成片", "AI 30% → 90%"],
    steps: ["热点洞察", "脚本生成", "素材生产", "投放实验", "爆款复刻"],
  },
  {
    index: "03",
    label: "DISPLAY",
    title: "静态展示广告",
    ratio: "NEW",
    desc: "规模化优先。一套主视觉，自动衍生多尺寸、多语言、多市场版本。",
    facts: ["数百–数千张变体", "美分级单张成本", "WPP · Pinterest"],
    steps: ["资产入库", "图片生成", "批量套版", "A/B 测试"],
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
        <div className="heroActions">
          <a className="primaryButton" href="#thesis">查看核心判断 <span>↘</span></a>
          <p>2026 行业方案 · 关键数字为方向性估算</p>
        </div>

        <div className="sourceStamp">
          <span>SOURCE BASELINE</span>
          <p>飞书方案 rev. 8840 · 客户钱包口径 2026.05 · 大盘与目标数字待孙越交叉验证</p>
        </div>

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

        <div className="shell marketPanel" id="market">
          <div className="growthVisual">
            <div className="yearBlock start">
              <span>2026</span>
              <strong>$160B</strong>
              <small>视频广告市场</small>
            </div>
            <div className="growthLine"><span>+62.5%</span><i /></div>
            <div className="yearBlock end">
              <span>2030</span>
              <strong>$260B</strong>
              <small>视频广告市场</small>
            </div>
          </div>
          <div className="marketNotes">
            <div><b>50 / 50</b><span>海外品牌广告 / 效果广告预算</span></div>
            <div><b>80%</b><span>素材生产支出中的人力成本</span></div>
            <div><b>$6.4B</b><span>2030 视频模型 API TAM</span></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="scenarios">
        <div className="sectionIntro">
          <p className="eyebrow"><span>02</span> / THREE BATTLEGROUNDS</p>
          <h2>三类场景，<br />三种胜负手。</h2>
          <p>不做泛化工具。围绕每个场景最关键的决策指标，组织产品与交付。</p>
        </div>
        <div className="scenarioGrid">
          {scenarioCards.map((card) => (
            <article className="scenarioCard" key={card.index}>
              <div className="cardTop"><span>{card.index} / {card.label}</span><b>{card.ratio}</b></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="factRow">
                {card.facts.map((fact) => <span key={fact}>{fact}</span>)}
              </div>
              <details>
                <summary>查看生产流程 <span>＋</span></summary>
                <ol>
                  {card.steps.map((step, i) => <li key={step}><i>{String(i + 1).padStart(2, "0")}</i>{step}</li>)}
                </ol>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="samplesSection">
        <div className="shell">
          <div className="samplesHeader">
            <div>
              <p className="eyebrow dark"><span>03</span> / CREATIVE PROOF</p>
              <h2>先看样片，<br />再拆需求。</h2>
            </div>
            <p>让场景、客户、生产流程与模型需求围绕具体素材展开，而不是停留在抽象表格。</p>
          </div>
          <div className="mediaGrid">
            <div className="sampleItem brandSample">
              <article className="mediaCard mediaVideo">
                <video src="/media/brand-reference.mp4" poster="/media/brand-poster.jpg" muted loop autoPlay playsInline preload="metadata" aria-label="品牌广告参考样片" />
                <div className="mediaShade" />
                <div className="mediaMeta"><span>BRAND FILM · 30S</span><h3>导演级创意</h3><p>品牌一致性 · 多镜头 · 专业交付</p></div>
              </article>
              <details className="sampleAnalysis">
                <summary>按样片拆解 <span>＋</span></summary>
                <div className="analysisGrid">
                  <p><b>制作方</b>4A 代理商 + 专业 Production / VFX 团队</p>
                  <p><b>核心需求</b>导演级审美、产品一致性、多镜头连续与 4K 交付</p>
                  <p><b>方案路径</b>Creative pre-vis → 3D 白模 → AI 渲染 → 后期质检</p>
                </div>
              </details>
            </div>
            <div className="sampleItem performanceSample">
              <article className="mediaCard mediaVideo">
                <video src="/media/performance-generated.mp4" poster="/media/performance-poster.jpg" muted loop autoPlay playsInline preload="metadata" aria-label="AI 生成效果广告样片" />
                <div className="mediaShade" />
                <div className="mediaMeta"><span>PERFORMANCE · AI GENERATED</span><h3>高频种草</h3><p>低成本变体 · 快速测试 · 爆款复刻</p></div>
              </article>
              <details className="sampleAnalysis">
                <summary>按样片拆解 <span>＋</span></summary>
                <div className="analysisGrid">
                  <p><b>制作方</b>AdTech / Martech 的 Creative Ops 与投放团队</p>
                  <p><b>核心需求</b>高一次过率、商品保真、小语种口播和百条级变体</p>
                  <p><b>方案路径</b>商品链接 → 脚本首帧 → 视频生成 → 投放 → 爆款复刻</p>
                </div>
              </details>
            </div>
            <div className="sampleItem displaySample">
              <article className="mediaCard">
                <img src="/media/display-vacuum.jpg" alt="AI 生成的吸尘器展示广告" />
                <div className="miniVariant"><img src="/media/display-fashion.jpg" alt="AI 生成的服饰展示广告" /></div>
                <div className="mediaShade" />
                <div className="mediaMeta"><span>DISPLAY · MULTI-SKU</span><h3>一图千变</h3><p>商品保真 · 精准文字 · 多尺寸适配</p></div>
              </article>
              <details className="sampleAnalysis">
                <summary>按样片拆解 <span>＋</span></summary>
                <div className="analysisGrid">
                  <p><b>制作方</b>Pinterest 等 Paid Media、DTC 品牌与创意自动化平台</p>
                  <p><b>核心需求</b>精准文字、任意比例、局部编辑与千级并发</p>
                  <p><b>方案路径</b>品牌资产 → Seedream 生成 → 多尺寸套版 → DCO / A/B</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="agentSection shell">
        <div className="agentCopy">
          <p className="eyebrow"><span>04</span> / THE GROWTH LOOP</p>
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
            <p className="eyebrow dark"><span>05</span> / CUSTOMER STRATEGY</p>
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
          <p className="eyebrow"><span>06</span> / SOLUTION FOCUS</p>
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
            <p className="eyebrow dark"><span>07</span> / ROADMAP</p>
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
