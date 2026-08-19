import InlineTextEditor from "./InlineTextEditor";
import MarketTrackAutoReveal from "./MarketTrackAutoReveal";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";
import GbsCase from "./GbsCase";

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
          <a href="#market"><span className="langZh">市场概览</span><span className="langEn">Market overview</span></a>
          <a href="#gbs-offer"><span className="langZh">我们提供什么</span><span className="langEn">What we offer</span></a>
          <a href="#client-showcases"><span className="langZh">客户案例</span><span className="langEn">Showcases</span></a>
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
              <h2 id="gbs-usage-title"><B zh={<>BytePlus 上的视频广告日产量持续增长，<strong>已达 100k+，月环比 +100%</strong></>} en={<>BytePlus sees a growing video ads production daily, <strong>reach 100k+, MoM +100%</strong></>} /></h2>
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
                    <line x1="110" y1="336" x2="110" y2="200" />
                    <line x1="205" y1="322" x2="205" y2="250" />
                    <line x1="600" y1="150" x2="600" y2="230" />
                    <line x1="800" y1="52" x2="800" y2="130" />
                  </g>
                  <g fill="#0066fc">
                    <circle cx="110" cy="336" r="4" />
                    <circle cx="205" cy="322" r="4" />
                    <circle cx="600" cy="150" r="4" />
                    <circle cx="800" cy="52" r="4" />
                  </g>
                  <circle cx="0" cy="340" r="6" fill="#0066fc" />
                  <circle cx="900" cy="30" r="7" fill="#0066fc" />
                </svg>
                <span className="gbsChartStart">~10k</span>
                <span className="gbsChartEnd">100k+</span>
                <div className="gbsMilestone" style={{ "--x": "31%", "--y": "34%" } as React.CSSProperties}><small>26/03 · MODEL</small><b>Seedance 2.0</b></div>
                <div className="gbsMilestone" style={{ "--x": "62%", "--y": "8%" } as React.CSSProperties}><small>26/06 · PLATFORM</small><b>WPP Open · API live</b></div>
                <div className="gbsMilestone gbsMilestoneTop" style={{ "--x": "80%", "--y": "-6%" } as React.CSSProperties}><small>14/08 · MODEL API</small><b>Seedance 2.5</b></div>
                <div className="gbsMilestone gbsMilestoneLogo" style={{ "--x": "12%", "--y": "36%" } as React.CSSProperties}><small>ADTECH · GAMING</small><img src="/logos/customers/applovin.png" alt="AppLovin" /></div>
                <div className="gbsMilestone gbsMilestoneLogo" style={{ "--x": "23%", "--y": "51%" } as React.CSSProperties}><small>AGENCY · E-COMMERCE</small><img src="/logos/customers/tecdo.svg" alt="Tec-do" /></div>
                <div className="gbsMilestone gbsMilestoneLogo" style={{ "--x": "67%", "--y": "57%" } as React.CSSProperties}><small>AGENCY NETWORK</small><img src="/logos/customers/havas.svg" alt="Havas" /></div>
                <div className="gbsMilestone gbsMilestoneLogo gbsMilestoneBelow" style={{ "--x": "89%", "--y": "28%" } as React.CSSProperties}><small>BRAND OWNER</small><img src="/logos/customers/loreal.svg" alt="L’Oréal" /></div>
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
              <p className="gbsSub"><B zh="前三层把广告做出来；第四层让 AI 创意带动的投放看得见、算得清。" en="Three layers produce the ads; the fourth makes the media spend driven by AI creative visible and measurable." /></p>
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
                <p><B zh="投放侧看到有多少在跑的视频是 Seedance 生成 —— AI 创意带来的广告支出可以被计量，而不是估算。" en="Shows how much running video is Seedance-made — so ad spend driven by AI creative is measured, not guessed." /></p>
                <span className="gbsSysLoopTag">MEASUREMENT</span>
              </div>
            </div>

            <div className="gbsPowered">
              <span>POWERED BY THE SEED FAMILY</span>
              <ul>
                <li className="isHot">Seedance 2.5</li>
                <li>Seedream 5.0 Pro</li>
                <li>Seed Audio</li>
                <li>Seed LLM</li>
              </ul>
            </div>
          </section>

          <section className="gbsPage gbsClientsPage" id="client-showcases" aria-labelledby="client-showcases-title">
            <header className="gbsPageHead">
              <span className="gbsKicker">CLIENT SHOWCASES</span>
              <h2 id="client-showcases-title"><B zh={<><strong>Case study</strong></>} en={<><strong>Case study</strong></>} /></h2>
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
              headline={{ value: <span className="isQuote">&ldquo;they love it&rdquo;</span>, label: <B zh="WPP 制作团队对 Seedance 2.5 的原话" en="Production teams on Seedance 2.5, in their words" /> }}
              phaseLayout="rows"
              phases={[
                {
                  tag: "HAWKER CENTRE", when: "Seedance 2.5 sample", copy: <B zh="新加坡小贩中心的一场戏：朋友们举杯喝可乐，桌上一包“Chope liao”纸巾。多人物、嘈杂背景、真实的肤质与布料——整段由 Seedance 2.5 生成，无需实拍。" en="A Singapore hawker-centre scene: friends toast with Coke over dinner, a “Chope liao” tissue pack on the table. Multiple characters, a busy background, real skin and fabric — generated end-to-end on Seedance 2.5, no shoot." />,
                  media: { kind: "video", src: "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays/media/wpp/seedance25-case-09.mp4", ratio: "16x9", label: "Seedance 2.5 sample film — live-action-grade" }
                },
                {
                  tag: "COCA-COLA", when: "Product macro · 2026 Q2–Q3", copy: <B zh="WPP × 可口可乐片子里的产品特写：瓶身上凝结的水珠、俯拍的瓶口拉近。Seedance 逐镜头保住产品外形、标签和高光——品牌团队肯签字的一致性。" en="Product macro from a WPP × Coca-Cola film: condensation beading on the glass, a top-down pull on the bottle mouth. Seedance holds the product’s shape, label and highlights shot to shot — the consistency brand teams sign off on." />,
                  media: { kind: "video", src: "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays/media/wpp/cocacola-16x9.mp4", ratio: "16x9", label: "WPP × Coca-Cola AI-generated film" }
                },
              ]}
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
                {
                  tag: "CREATECH API", when: "2026 H1", copy: <B zh="CreaTech 接入 API，内部团队试用 2.0。" en="CreaTech integrates the API; internal teams trial 2.0." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现（王文杰 · 需 account id）" en="Sample pending — 王文杰 to reproduce from prompts (needs account id)" /> }
                },
                {
                  tag: "SEEDANCE 2.5", when: "2026 Aug", copy: <B zh="Seedance 2.5 发布，C 端团队周内上到 100+ 条 / 天。" en="Seedance 2.5 ships; consumer teams reach 100+ videos a day within the week." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现" en="Sample pending" /> }
                },
                {
                  tag: "1,000+ / DAY", when: "2026 H2", copy: <B zh="签 commitment，进入 1,000+ 条 / 天的品牌内容生产。" en="Sign the commitment; move to 1,000+ videos a day of brand content." />,
                  media: { kind: "placeholder", note: <B zh="样片待复现" en="Sample pending" /> }
                },
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
              phases={[
                { tag: "MCDONALDLAND", when: "2025 Q4", copy: <B zh="McDonaldland：第一支 3D CGI 社交视频，四项指标全胜。" en="McDonaldland: first 3D CGI social spot; wins on all four metrics." />,
                  media: { kind: "video", src: "/media/goodtake/mcdonaldland.mp4", label: "Goodtake × McDonaldland" } },
                { tag: "GRIMACE", when: "2026 Q2", copy: <B zh="Grimace：第二轮投放，Seedance 2.0。" en="Grimace: second flight on Seedance 2.0." />,
                  media: { kind: "video", src: "/media/goodtake/grimace.mp4", label: "Goodtake × Grimace" } },
                { tag: "SNUGGLE FILM", when: "2026 Q3", copy: <B zh="Snuggle 品牌片：Seedance 2.5，真人实拍级质感。" en="Snuggle brand film on Seedance 2.5 — live-action-grade quality." />,
                  media: { kind: "video", src: "/media/goodtake/snuggle.mp4", poster: "/media/goodtake/snuggle-poster.jpg", label: "Goodtake × Unilever Snuggle",
                    stills: [
                      { src: "/media/goodtake/snuggle-still-01.jpg", alt: "Snuggle bear in a meadow — fur and daylight detail" },
                      { src: "/media/goodtake/snuggle-still-02.jpg", alt: "Snuggle bear hero close-up with the fragrance capsule" },
                    ] } },
                { tag: "SNUGGLE SOCIAL", when: "9:16 cut", copy: <B zh="Snuggle 品牌片的竖版社交剪辑：毛绒熊和织物纹理在全屏 9:16 下依然经得起看。" en="Vertical social cut of the Snuggle film — the plush bear and fabric texture hold up full-screen in 9:16." />,
                  media: { kind: "video", src: "/media/goodtake/snuggle-9x16.mp4", label: "Goodtake × Unilever Snuggle — 9:16 social cut" } },
              ]}
              footnote={<B zh="来源：Goodtake × 麦当劳投放数据 · 内部机密。" en="Source: Goodtake × McDonald’s campaign data · confidential." />}
            />

            <GbsCase
              id="case-tecdo"
              leftWidth="wide"
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
              notes={[
                <B key="1" zh="输入：商品图 + SKU 表；输出：可直接投放的 9:16 视频" en="In: product images + SKU sheet. Out: ready-to-run 9:16 video." />,
                <B key="2" zh="同一条流水线跑不同品牌、市场和语言" en="One pipeline across brands, markets and languages." />,
                <B key="3" zh="在投放中 A/B 测试，胜出版本放量" en="A/B-tested in-market; winners get the budget." />,
              ]}
              phases={[
                {
                  tag: "INPUT REFERENCE", when: "Reference clip", copy: <B zh="输入的参考视频：客户提供的原始素材，作为 Navos 生成的参考。" en="Input reference clip: the client-supplied source used as the reference for Navos." />,
                  media: { kind: "video", src: "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays/media/tecdo/tecdo-input-reference.mp4", label: "Tec-do input reference clip" }
                },
                {
                  tag: "NAVOS OUTPUT", when: "AI-generated", copy: <B zh="Navos 生成的爆款输出视频：同一流程可直接投放。" en="Navos-generated hit output video — ready to run from the same pipeline." />,
                  media: { kind: "video", src: "https://carey.tos-ap-southeast-1.bytepluses.com/video-ai-site/branch-solution-displays/media/tecdo/tecdo-navos-output.mp4", label: "Tec-do Navos-generated output video" }
                },
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
                {
                  tag: "PARADISE PAWS", when: "Gaming", copy: <B zh="可玩广告：直接在广告里试玩，再进安装。" en="Playable: try the game inside the ad, then install." />,
                  media: { kind: "video", src: "/media/applovin/sample-02.mp4", label: "AppLovin playable ad — Paradise Paws" }
                },
                {
                  tag: "ILIA", when: "Beauty", copy: <B zh="互动电商广告：产品特写 + 促销，一键 Shop Now。" en="Interactive commerce: product close-up + offer, one-tap Shop Now." />,
                  media: { kind: "video", src: "/media/applovin/beauty-011.mp4", label: "AppLovin interactive ad — ILIA mascara" }
                },
                {
                  tag: "TYMO", when: "Electronics", copy: <B zh="多 SKU 陈列式互动广告：一支覆盖整条产品线。" en="Multi-SKU showcase: one interactive unit covers the whole line." />,
                  media: { kind: "video", src: "/media/applovin/electronics-008.mp4", label: "AppLovin interactive ad — TYMO hair tools" }
                },
              ]}
              footnote={<B zh="平台数据来自 applovin.com（consumer-brands / gaming-apps 页，2026-08 读取）；60K+ 为 BytePlus 侧创意生成量。AppLovin 未公开单案例效果数字。" en="Platform figures from applovin.com (consumer-brands / gaming-apps pages, read Aug 2026); 60K+ is BytePlus-side creative volume. AppLovin has not disclosed per-campaign uplift." />}
            />
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><img className="brandLogo" src="/byteplus-logo.png" alt="BytePlus" width="381" height="71" /><span>Ads Creative Solution</span></div>
        <p>Advertising Industry AI Creative Production Strategy · 2026</p>
        <a href="#top"><B zh="回到顶部 ↑" en="Back to top ↑" /></a>
      </footer>
    </main>
  );
}
