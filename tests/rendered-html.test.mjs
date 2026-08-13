import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html", host: "localhost" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete V3 advertising strategy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const performanceSolutionHtml = html.slice(html.indexOf('class="solutionPage performanceSolutionPage"'), html.indexOf('class="solutionPage displaySolutionPage"'));
  const marketTrendHtml = html.slice(html.indexOf('class="marketTrendSection"'), html.indexOf('class="customerFlowPage"'));

  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>BytePlus Advertising Creative Production Solutions<\/title>/);
  assert.match(html, /id="language-mode" type="checkbox"[^>]*checked=""/);
  assert.match(html, /<main class="siteRoot" id="top">/);
  assert.match(html, /视频成为主流/);
  assert.match(html, /AI 生产走向规模化/);
  assert.match(html, /Video goes mainstream/);
  assert.match(html, /AI production scales/);
  assert.doesNotMatch(html, /网页文字编辑器|编辑文字/);

  // The verified market-size figures must remain unchanged.
  assert.doesNotMatch(html, /\$640–680B|OVERSEAS DIGITAL AD MARKET|海外数字广告大盘/);
  assert.match(html, /\$220B/);
  assert.match(html, /\$160B/);
  assert.match(html, /\$110B/);
  assert.match(html, /\$260B/);
  // The 2021–30 CAGR captions were dropped with the market-chart redesign;
  // the dollar figures above are the stable assertions.
  assert.doesNotMatch(html, /\$25–30B|\$29\.4B|可替代劳动力盘|Replaceable labor pool|VALUE CAPTURE|关键数字为方向性估算|参考页估算/);

  // Chapter 01: the campaign-agent thesis with two trend cards (agent loop
  // and the Goodtake production case).
  assert.match(html, /Campaign Agent 规模化/);
  assert.match(html, /Campaign Agents Scale on/);
  assert.equal((html.match(/class="marketTrendCard /g) ?? []).length, 2);
  assert.match(marketTrendHtml, /Every major ad manager now ships a campaign agent/);
  assert.match(marketTrendHtml, /Starts with Ideation\./);
  assert.doesNotMatch(marketTrendHtml, /SEARCH BENCHMARK|CORE SIGNAL|Meta Advantage\+ annual run-rate|IAB · The AI Ad Gap Widens|下一章：主要参与者|Next: Key Players/);

  // The verified market chart remains, while the redundant Scene Landscape
  // overview and its three standalone demo pages are removed completely.
  assert.equal((html.match(/class="marketFlowSvg"/g) ?? []).length, 1);
  assert.match(html, /查看三赛道/);
  assert.doesNotMatch(html, /sceneLandscapePage|sceneDemoPages|sceneTrackCard|sceneDemoPage|SCENE LANDSCAPE|Mainstream ad scenarios/);
  assert.match(html, /id="players"/);

  // Chapter 02 is a single flat player map: four rows, the budget-role
  // column removed so KEY TREND owns the centre of each row.
  const customerFlowHtml = html.slice(html.indexOf('class="customerFlowPage"'), html.indexOf('customerCasesSection'));
  assert.equal((customerFlowHtml.match(/class="customerFlowStage"/g) ?? []).length, 4);
  assert.doesNotMatch(customerFlowHtml, /BUDGET ROLE|预算角色/);
  assert.match(customerFlowHtml, /Brand owners.*Building in-house AI platforms/s);
  assert.match(customerFlowHtml, /Agencies.*From previews into production.*WPP · Havas/s);
  assert.match(customerFlowHtml, /Paid media.*Signals flow back into production/s);
  assert.match(customerFlowHtml, /class="customerFlowMoneyRail"/);
  assert.doesNotMatch(customerFlowHtml, /STANDARD WORKFLOW|BYTEPLUS OFFER|customerMoneySpine|Brands hold the budget/);

  // Customer cases run as CASE 1/2/3; solution pages keep 3.x numbering.
  assert.match(html, /agencyOperatingIndex"><span>CASE 1<\/span>/);
  assert.match(html, /appLovinCaseIndex"><span>CASE 2<\/span>/);
  assert.match(html, /adtechCaseIndex"><span>CASE 3<\/span>/);
  assert.match(html, /id="solutions"/);
  assert.match(html, /brandSolutionIndex"><span>3\.1<\/span>/);
  assert.match(html, /performanceSolutionIndex"><span>3\.2<\/span>/);
  assert.match(html, /displaySolutionIndex"><span>3\.3<\/span>/);
  assert.match(html, /playableIndex"><span>3\.4<\/span>/);

  // CASE 1 · WPP Open: three org-logic stage cards, the Canvas capture, and
  // the input→output automotive pair.
  const agencyHtml = html.slice(html.indexOf('id="customer-agency"'), html.indexOf('class="wppWorkPage wppQuotePage"'));
  assert.match(agencyHtml, /Start with Creative\./);
  assert.match(agencyHtml, /Ogilvy · VML · AKQA · ~50k people/);
  assert.match(agencyHtml, /Hogarth and ~10k makers/);
  assert.match(agencyHtml, /WPP Media: formerly GroupM/);
  assert.match(agencyHtml, /\/media\/wpp\/canvas\.webp/);

  // The WPP testimonial slide sits between the WPP and AppLovin cases.
  assert.match(html, /Akia Mitchell/);
  assert.match(html, /Seedance is way better, and the\s*word is out/);

  // CASE 2 · AppLovin: flywheel, full Creative Set capture, four demo clips.
  const appLovinHtml = html.slice(html.indexOf('id="customer-brand"'), html.indexOf('id="customer-adtech"'));
  assert.match(appLovinHtml, /AppLovin Flywheel of Scale/);
  assert.match(appLovinHtml, /More creative inputs/);
  assert.match(appLovinHtml, /creative-set-dashboard\.png/);
  assert.equal((appLovinHtml.match(/class="appLovinClip"/g) ?? []).length, 4);

  // V3 contains the three solution pages and the selected performance demos.
  assert.equal((html.match(/class="solutionPage /g) ?? []).length, 3);
  assert.match(html, /品牌广告生产解决方案/);
  assert.match(html, /效果广告生产解决方案/);
  assert.match(html, /Performance Ads Production Solution/);
  assert.match(html, /展示广告方法/);
  assert.equal((html.match(/class="performanceEvidenceCard"/g) ?? []).length, 4);
  assert.match(performanceSolutionHtml, /Demo \+ Card-to-Buy/);
  assert.match(performanceSolutionHtml, /1s Hook \+ Direct Selling/);
  assert.match(performanceSolutionHtml, /Feature Demo Selling/);
  assert.match(performanceSolutionHtml, /Single-Point Flash/);
  assert.match(performanceSolutionHtml, /performance-2026\/shoppable\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/hook-direct\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/feature-demo\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/single-point\.mp4/);

  // The performance header is intentionally reduced to a direct solution title.
  assert.doesNotMatch(performanceSolutionHtml, /查看更多 Seedance 样片|View more Seedance demos/);
  assert.equal((html.match(/class="langZh"/g) ?? []).length, (html.match(/class="langEn"/g) ?? []).length);

  // The obsolete model-gap page was intentionally removed in V3.
  assert.doesNotMatch(html, /模型短期能力短板|class="productGatePage"|class="productGateCard/);
  assert.doesNotMatch(html, /class="roadmapPage"|Seedance 从 SOTA 渲染层.*走向端到端制作引擎/s);
});

test("source contains the V3 media, interactions, and bilingual links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const reveal = await readFile(new URL("../app/MarketTrackAutoReveal.tsx", import.meta.url), "utf8");
  const moreDemos = await readFile(new URL("../app/MoreDemosGallery.tsx", import.meta.url), "utf8");
  const displayDemos = await readFile(new URL("../app/DisplayDemoGallery.tsx", import.meta.url), "utf8");

  assert.match(page, /import MarketTrackAutoReveal/);
  assert.match(page, /<MarketTrackAutoReveal \/>/);
  assert.match(reveal, /wheel/);
  assert.match(reveal, /preventDefault/);
  assert.match(reveal, /window\.scrollTo/);
  assert.match(reveal, /segmentControl/);

  for (const slug of ["shoppable", "hook-direct", "feature-demo", "single-point"]) {
    assert.match(page, new RegExp(`/media/performance-2026/${slug}\\.mp4`));
    assert.match(page, new RegExp(`/media/performance-2026/${slug}-frames/01\\.jpg`));
  }
  assert.doesNotMatch(page, /performance-generated\.mp4|performance-poster\.jpg|performance-[a-z]+-demo\.mp4/);

  assert.match(page, /name="performance-keyframes"/);
  assert.match(page, /className="productionChapter"/);
  assert.match(page, /wppWorkPage agencyOperatingPage/);
  assert.doesNotMatch(page, /className="productGatePage"|模型短期能力短板/);
  assert.match(page, /<MoreDemosGallery \/>/);
  assert.match(moreDemos, /bytedance\.sg\.larkoffice\.com\/docx\/TmsqdH9TeoPVYyxzpZ9lwH91g7c/);
  assert.match(moreDemos, /bytedance\.larkoffice\.com\/wiki\/SNVXw69gTi515kkVoi8c98BznKh/);
  assert.match(moreDemos, /setActiveDemo\(demo\)/);
  assert.match(moreDemos, /In-stream & Display/);
  assert.match(moreDemos, /Dynamic Remarketing/);
  assert.doesNotMatch(moreDemos, /Playable visual|fish_\$\{/);

  // Display V2 keeps the solution page to three masters. Each opens a minimal,
  // keyboard-dismissible board that shows all five assets at once.
  assert.match(page, /import DisplayDemoGallery/);
  assert.match(page, /<DisplayDemoGallery \/>/);
  assert.match(displayDemos, /Multi-size adaptation/);
  assert.match(displayDemos, /Seasonal localization/);
  assert.match(displayDemos, /Selling-point visualization/);
  assert.equal((displayDemos.match(/id: "(?:multi-size|seasonal|selling-points)"/g) ?? []).length, 3);
  assert.equal((displayDemos.match(/\/media\/display-v2\/final\//g) ?? []).length, 20);
  assert.match(displayDemos, /04-medium-rectangle-preview-1200x1000\.jpg/);
  assert.match(displayDemos, /05-leaderboard-preview-2048x253\.jpg/);
  assert.match(displayDemos, /event\.key === "Escape"/);
  assert.match(displayDemos, /displayV2SetBoard-/);
  assert.match(displayDemos, /displayV2SetAsset/);
  assert.match(displayDemos, /setActiveAssetIndex\(index\)/);
  assert.match(displayDemos, /aria-pressed=\{index === activeAssetIndex\}/);
  assert.doesNotMatch(displayDemos, /Previous image|Next image|Choose image|View more demos/);
  assert.doesNotMatch(page, /demo-display-commerce|demo-display-beauty|demo-display-diwali|display-lightbox-/);
});

test("keeps V3 desktop alignment, sticky media, language, and responsive safeguards", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /overflow-x: clip/);
  assert.match(css, /@media \(min-width: 1440px\)/);
  assert.match(css, /@media \(max-width: 1100px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.match(css, /@media \(max-width: 380px\)/);
  assert.match(css, /@media \(hover: none\)/);

  assert.match(css, /#language-mode:checked ~ \.productionChapter \.langZh/);
  assert.match(css, /#language-mode:checked ~ \.productionChapter \.langEn/);
  assert.match(css, /#language-mode:checked ~ \.productionChapter \.solutionDetailLink\.langEn/);
  assert.match(css, /\.performanceDemoGallery \{ grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(min-width: 1121px\) \{[\s\S]*?width: min\(1512px, calc\(100% - 64px\)\)/);
  assert.match(css, /\.brandSolutionPage,[\s\S]*?\.roadmapPage \{[\s\S]*?width: min\(1512px, calc\(100vw - 64px\)\)/);
  assert.match(css, /\.productionChapter \{[\s\S]*?background:[\s\S]*?var\(--paper\)/);
  assert.match(css, /v4 · SD2-PE visual system/);
  assert.match(css, /--blue: #0b67ff/);
  assert.match(css, /\.nav\.shell \{[\s\S]*?position: sticky;[\s\S]*?background: rgba\(255,255,255,\.94\)/);
  assert.match(css, /\.coverPageInner \{[\s\S]*?display: flex;[\s\S]*?align-items: center/);
  assert.match(css, /\.marketTrendCard \{[\s\S]*?border-top: 5px solid var\(--blue\)/);
  assert.match(css, /\.solutionPage,[\s\S]*?border-radius: 0;[\s\S]*?box-shadow: none/);
  assert.match(css, /v4\.1 · visual QA corrections/);
  assert.match(css, /\.customerFlowIndex b > \.langEn[\s\S]*?font-size: inherit/);
  assert.match(css, /\.wppMergedPage \{[\s\S]*?grid-template-rows: auto auto auto/);
  assert.match(css, /\.brandArchitecturePanel \{[\s\S]*?min-height: 450px/);
});
