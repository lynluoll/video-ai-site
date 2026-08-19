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

  assert.match(html, /<html lang="en" class="[^"]*styles-pending[^"]*">/);
  assert.match(html, /Loading experience\\2026/);
  assert.match(html, /classList\.add\("styles-ready"\)/);
  assert.match(html, /<title>BytePlus Advertising Creative Production Solutions<\/title>/);
  assert.match(html, /id="language-mode" type="checkbox"[^>]*checked=""/);
  assert.match(html, /<main class="siteRoot" id="top">/);
  assert.match(html, /视频广告正在成为第一大广告形式/);
  assert.match(html, /AI 生产走向规模化/);
  assert.match(html, /Video ads are becoming the No\.1 ad format/);
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

  // GBS edition: the campaign-agent board and the Goodtake/Coke trend card
  // are gone; chapter 01 is chart → usage → offer.
  assert.doesNotMatch(html, /Campaign Agents Scale on|Every major ad manager now ships a campaign agent|Starts with Ideation\./);
  assert.equal((html.match(/class="marketTrendCard /g) ?? []).length, 0);

  // The verified market chart remains, while the redundant Scene Landscape
  // overview and its three standalone demo pages are removed completely.
  assert.equal((html.match(/class="marketFlowSvg"/g) ?? []).length, 1);
  assert.match(html, /查看三赛道/);
  assert.doesNotMatch(html, /sceneLandscapePage|sceneDemoPages|sceneTrackCard|sceneDemoPage|SCENE LANDSCAPE|Mainstream ad scenarios/);
  // GBS edition: the Key Players map is gone; the nav is three chapters —
  // Market overview / What we offer / Showcases.
  assert.doesNotMatch(html, /id="players"|class="customerFlowPage"|class="customerFlowStage"/);
  assert.match(html, /href="#market"[^>]*>.*?Market overview/s);
  assert.match(html, /href="#gbs-offer"[^>]*>.*?What we offer/s);
  assert.match(html, /href="#client-showcases"[^>]*>.*?Showcases/s);
  assert.equal((html.match(/class="navChapterLinks"[\s\S]*?<\/div>/)?.[0].match(/<a /g) ?? []).length, 3);
  assert.doesNotMatch(html, /id="case-studies"|How leading partners use BytePlus/);
  // Client showcases page sits right before the case chapter.
  assert.match(html, /id="client-showcases"[\s\S]*?id="customer-cases"/);
  assert.equal((html.match(/class="gbsClients"/g) ?? []).length, 1);

  // GBS edition ends with the cases: no Solutions chapter at all.
  assert.doesNotMatch(html, /id="solutions"|class="solutionPage |class="productionChapter"|brandHeroIndex|performanceV2Index|displaySolutionIndex|playableIndex/);

  // GBS edition: five customer cases in one frame — objective + KPI tiles
  // + three crawl/walk/run phases — WPP, L'Oréal, Goodtake, Tec-do, AppLovin.
  const casesHtml = html.slice(html.indexOf('class="customerStories gbsCases"'), html.indexOf('<footer'));
  assert.equal((casesHtml.match(/class="gbsCase( isWideLeft)?"/g) ?? []).length, 5);
  for (const id of ["case-wpp", "case-loreal", "case-goodtake", "case-tecdo", "case-applovin"]) {
    assert.match(casesHtml, new RegExp(`id="${id}"`));
  }
  assert.match(casesHtml, /BytePlus × WPP[\s\S]*they love it/);
  assert.match(casesHtml, /BytePlus × L’Oréal/);
  assert.match(casesHtml, /BytePlus × Goodtake[\s\S]*410%/);
  assert.match(casesHtml, /BytePlus × Tec-do/);
  assert.match(casesHtml, /BytePlus × AppLovin/);
  assert.equal((casesHtml.match(/class="gbsCasePhase"/g) ?? []).length, 13); // WPP 2 + L’Oréal 3 + Goodtake 3 + Tec-do 2 + AppLovin 3
  assert.doesNotMatch(html, /Akia Mitchell|adtechCasePage|TikTok · Smart\+|id="customer-agency-hex-model"/);

  // GBS opening pages after the trend chart.
  assert.match(html, /id="gbs-usage"[\s\S]*growing video ads production daily[\s\S]*100k\+, MoM \+100%/);
  assert.match(html, /id="gbs-offer"[\s\S]*AIGC ATTRIBUTION/);

  assert.equal((html.match(/class="langZh"/g) ?? []).length, (html.match(/class="langEn"/g) ?? []).length);

  // The obsolete model-gap page was intentionally removed in V3.
  assert.doesNotMatch(html, /模型短期能力短板|class="productGatePage"|class="productGateCard/);
  assert.doesNotMatch(html, /class="roadmapPage"|Seedance 从 SOTA 渲染层.*走向端到端制作引擎/s);
});

test("source keeps the GBS page structure and interactions", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const reveal = await readFile(new URL("../app/MarketTrackAutoReveal.tsx", import.meta.url), "utf8");

  assert.match(page, /import MarketTrackAutoReveal/);
  assert.match(page, /<MarketTrackAutoReveal \/>/);
  assert.match(reveal, /wheel/);
  assert.match(reveal, /preventDefault/);
  assert.match(reveal, /window\.scrollTo/);
  assert.match(reveal, /segmentControl/);

  assert.match(page, /import GbsCase from "\.\/GbsCase"/);
  assert.equal((page.match(/<GbsCase\b/g) ?? []).length, 5);
  assert.doesNotMatch(page, /className="productGatePage"|模型短期能力短板/);
  // GBS edition ends with the cases: no Solutions chapter, no More Demos.
  assert.doesNotMatch(page, /<MoreDemosGallery|href="#demos"|<DisplayDemoGallery|<PerformanceLocalizationDemo|<PerformancePreciseEditingDemo|className="productionChapter"/);
  assert.doesNotMatch(page, /import (PlayableClipLightbox|ClipFullscreen|DisplayDemoGallery|BrandCapabilityImage|PerformanceLocalizationDemo|PerformancePreciseEditingDemo)/);
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
