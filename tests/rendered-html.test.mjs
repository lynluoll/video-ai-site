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
  const sceneOverviewHtml = html.slice(html.indexOf('class="sceneLandscapePage"'), html.indexOf('class="sceneDemoPages"'));
  const sceneDemoHtml = html.slice(html.indexOf('class="sceneDemoPages"'), html.indexOf('class="customerFlowPage"'));
  const performanceSolutionHtml = html.slice(html.indexOf('class="solutionPage performanceSolutionPage"'), html.indexOf('class="solutionPage displaySolutionPage"'));
  const marketTrendHtml = html.slice(html.indexOf('class="marketTrendSection"'), html.indexOf('class="sceneLandscapePage"'));

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
  assert.match(html, /\$640–680B/);
  assert.match(html, /\$220B/);
  assert.match(html, /\$160B/);
  assert.match(html, /\$110B/);
  assert.match(html, /\$260B/);
  assert.match(html, /2021–23 \+44%/);
  assert.match(html, /2023–26 \+63%/);
  assert.match(html, /2026–30 \+79%/);
  assert.doesNotMatch(html, /\$25–30B|\$29\.4B|可替代劳动力盘|Replaceable labor pool|VALUE CAPTURE|关键数字为方向性估算|参考页估算/);

  // Chapter 01 follows the migration plan: one verified chart, three trends,
  // and a transition into the player chapter without unverified adoption data.
  assert.match(html, /AI 正在重塑广告市场的供给方式/);
  assert.match(html, /AI Is Reshaping How Advertising Supply Is Created/);
  assert.equal((html.match(/class="marketTrendCard /g) ?? []).length, 3);
  assert.match(html, /视频广告将在 2030 年成为第一大广告类型/);
  assert.match(html, /Campaign Agent 在 2026 年进入规模化阶段/);
  assert.match(html, /AI 成为创意团队的标准生产力/);
  assert.match(html, /0→1.*1→3.*3→N/s);
  assert.match(html, /下一章：主要参与者/);
  assert.doesNotMatch(marketTrendHtml, /83%|60%/i);

  // The three-track overview and auto-reveal chart are present once.
  assert.equal((html.match(/class="marketFlowSvg"/g) ?? []).length, 1);
  assert.match(html, /查看三赛道/);
  assert.equal((html.match(/class="sceneTrackCard sceneTrackCard-/g) ?? []).length, 3);
  assert.match(sceneOverviewHtml, /品牌广告.*效果广告.*静态展示图片广告/s);
  assert.match(sceneOverviewHtml, /Brand video.*Performance video.*Static display ads/s);
  assert.doesNotMatch(sceneOverviewHtml, /Shein|Temu|Amazon 卖家|Shopify 商家/);

  // Each scenario keeps one focused demo page and three expanded detail groups.
  assert.equal((html.match(/class="sceneDemoPage sceneDemoPage/g) ?? []).length, 3);
  assert.equal((sceneDemoHtml.match(/class="sceneDemoDisclosure" open=""/g) ?? []).length, 9);
  assert.match(sceneDemoHtml, /scene-brand-demo.*brand-reference\.mp4/s);
  assert.match(sceneDemoHtml, /scene-performance-demo.*performance-2026\/multi-sku\.mp4/s);
  assert.match(sceneDemoHtml, /scene-display-demo.*demo-display-commerce\.jpg/s);
  assert.doesNotMatch(sceneDemoHtml, /performance-generated\.mp4|performance-poster\.jpg/);

  // Public customer pages use generic operating models and omit internal specifics.
  assert.match(html, /全球品牌主业务模式.*一套品牌资产.*两条生产链路/s);
  assert.match(html, /品牌资产库.*高频素材.*品牌主片/s);
  assert.match(html, /区域市场素材需求.*模板化生成与本地化.*多渠道交付/s);
  assert.match(html, /Global brand-owner model.*one asset system, two production lanes/s);
  assert.doesNotMatch(html, /CreTech|50.*BRANDS|150.*MARKETS|50–100.*万张|10–20.*万条/);

  const agencyHtml = html.slice(html.indexOf('class="wppWorkPage wppMergedPage"'), html.indexOf('class="adtechCasePage"'));
  assert.match(agencyHtml, /全球代理商业务模式.*创意预演.*母版制作与媒体交付/s);
  assert.match(agencyHtml, /Creative &amp; Previz.*Production.*Post-production &amp; audio.*Review &amp; delivery/s);
  assert.match(agencyHtml, /汽车广告混合制作.*Seedream \+ Seedance/s);
  assert.doesNotMatch(agencyHtml, /WPP Open|80,000\+|Time-and-Materials|Outcome-based/);

  // V3 contains the three solution pages and the selected performance demos.
  assert.equal((html.match(/class="solutionPage /g) ?? []).length, 3);
  assert.match(html, /品牌广告制作方案/);
  assert.match(html, /效果广告制作方案/);
  assert.match(html, /展示广告制作方法/);
  assert.equal((html.match(/class="performanceEvidenceCard"/g) ?? []).length, 4);
  assert.match(performanceSolutionHtml, /Demo \+ Card-to-Buy/);
  assert.match(performanceSolutionHtml, /1s Hook \+ Direct Selling/);
  assert.match(performanceSolutionHtml, /Feature Demo Selling/);
  assert.match(performanceSolutionHtml, /Single-Point Flash/);
  assert.match(performanceSolutionHtml, /performance-2026\/shoppable\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/hook-direct\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/feature-demo\.mp4/);
  assert.match(performanceSolutionHtml, /performance-2026\/single-point\.mp4/);

  // Chinese and English pages link to their matching Seedance libraries.
  const zhSeedanceLinks = (html.match(/https:\/\/bytedance\.larkoffice\.com\/wiki\/E96mwlJfsiLCvKkCPC0cjLIMnRg/g) ?? []).length;
  const enSeedanceLinks = (html.match(/https:\/\/bytedance\.sg\.larkoffice\.com\/docx\/SOrgdnSJ3oSr4Rx6EYMlKhBsgqc/g) ?? []).length;
  assert.ok(zhSeedanceLinks >= 2);
  assert.equal(zhSeedanceLinks, enSeedanceLinks);
  assert.match(html, /查看更多 Seedance 样片/);
  assert.match(html, /View more Seedance demos/);
  assert.equal((html.match(/class="langZh"/g) ?? []).length, (html.match(/class="langEn"/g) ?? []).length);

  // The obsolete model-gap page was intentionally removed in V3.
  assert.doesNotMatch(html, /模型短期能力短板|class="productGatePage"|class="productGateCard/);
  assert.match(html, /class="roadmapPage"/);
  assert.match(html, /Seedance 从 SOTA 渲染层.*走向端到端制作引擎/s);
});

test("source contains the V3 media, interactions, and bilingual links", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const reveal = await readFile(new URL("../app/MarketTrackAutoReveal.tsx", import.meta.url), "utf8");

  assert.match(page, /import MarketTrackAutoReveal/);
  assert.match(page, /<MarketTrackAutoReveal \/>/);
  assert.match(reveal, /wheel/);
  assert.match(reveal, /preventDefault/);
  assert.match(reveal, /window\.scrollTo/);
  assert.match(reveal, /segmentControl/);

  assert.match(page, /\/media\/performance-2026\/multi-sku\.mp4/);
  assert.match(page, /\/media\/performance-2026\/multi-sku\.jpg/);
  for (const slug of ["shoppable", "hook-direct", "feature-demo", "single-point"]) {
    assert.match(page, new RegExp(`/media/performance-2026/${slug}\\.mp4`));
    assert.match(page, new RegExp(`/media/performance-2026/${slug}-frames/01\\.jpg`));
  }
  assert.doesNotMatch(page, /performance-generated\.mp4|performance-poster\.jpg|performance-[a-z]+-demo\.mp4/);

  assert.match(page, /href="https:\/\/bytedance\.larkoffice\.com\/wiki\/E96mwlJfsiLCvKkCPC0cjLIMnRg"/);
  assert.match(page, /href="https:\/\/bytedance\.sg\.larkoffice\.com\/docx\/SOrgdnSJ3oSr4Rx6EYMlKhBsgqc"/);
  assert.match(page, /className="productionChapter"/);
  assert.match(page, /wppWorkPage wppMergedPage/);
  assert.doesNotMatch(page, /className="productGatePage"|模型短期能力短板/);
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

  assert.match(css, /\.sceneDemoPage \.sceneDemoHeader \{[\s\S]*?position: sticky;[\s\S]*?top: 0/);
  assert.match(css, /\.sceneDemoPage \.sceneDemoVisual \{[\s\S]*?position: sticky;[\s\S]*?top: 92px/);
  assert.match(css, /@media \(max-width: 700px\) \{[\s\S]*?\.sceneDemoImages \{ height: auto; grid-template-rows: auto; \}/);

  assert.match(css, /#language-mode:checked ~ \.productionChapter \.langZh/);
  assert.match(css, /#language-mode:checked ~ \.productionChapter \.langEn/);
  assert.match(css, /#language-mode:checked ~ \.productionChapter \.solutionDetailLink\.langEn/);
  assert.match(css, /\.performanceDemoGallery \{ grid-template-columns: repeat\(4, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(min-width: 1121px\) \{[\s\S]*?width: min\(1512px, calc\(100% - 64px\)\)/);
  assert.match(css, /\.brandSolutionPage,[\s\S]*?\.roadmapPage \{[\s\S]*?width: min\(1512px, calc\(100vw - 64px\)\)/);
  assert.match(css, /\.productionChapter \{[\s\S]*?background:[\s\S]*?var\(--paper\)/);
});
