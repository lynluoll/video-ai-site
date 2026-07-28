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

test("server-renders the complete advertising strategy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>广告行业 AI 素材生产方案｜BytePlus<\/title>/);
  assert.match(html, /把素材生产/);
  assert.match(html, /2026 VIDEO API TAM/);
  assert.match(html, /2026 IMAGE API TAM/);
  assert.match(html, /\$150K/);
  assert.match(html, /rev\. 8840/);
  assert.match(html, /三类场景/);
  assert.match(html, /Campaign Agent/);
  assert.match(html, /Pinterest/);
  assert.match(html, /2\.5 之后/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("covers every Bojie requirement in the page source", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /\$160B/);
  assert.match(page, /\$260B/);
  assert.match(page, /\$0\.4B/);
  assert.match(page, /\$1\.25M/);
  assert.match(page, /约 \$450M ARR/);
  assert.match(page, /\$150K/);
  assert.match(page, /5\.6%/);
  assert.match(page, /13%/);
  assert.match(page, /AI 10–20% → 70%/);
  assert.match(page, /AI 30% → 90%/);
  assert.match(page, /关键数字为方向性估算/);
  assert.match(page, /飞书方案 rev\. 8840/);
  assert.match(page, /客户钱包口径 2026\.05/);
  assert.match(page, /待孙越交叉验证/);
  assert.equal((page.match(/按样片拆解/g) ?? []).length, 3);
  assert.match(page, /制作方/);
  assert.match(page, /方案路径/);
  assert.match(page, /WPP/);
  assert.match(page, /Havas/);
  assert.match(page, /AppLovin/);
  assert.match(page, /钛动/);
  assert.match(page, /L’Oréal/);
  assert.match(page, /Coca-Cola/);
  assert.match(page, /Pinterest/);
  assert.match(page, /Reddit/);
  assert.match(page, /\$6M MRR/);
  assert.match(page, /\$1\.5M MRR/);
  assert.match(page, /约 \$16\.67M \/ 月/);
  assert.match(page, /头部组 · 单客可达 \$1M/);
  assert.doesNotMatch(page, /Coca-Cola[^\n]+约 \$1M MRR/);
  assert.doesNotMatch(page, /2027–28/);
  assert.match(page, /投放算法/);
  assert.match(page, /AI 产品/);
  assert.match(page, /Display Automation/);
  assert.match(page, /Seedream 生成/);
  assert.equal((page.match(/no: "0[1-4]"/g) ?? []).length, 4);
  assert.match(page, /物理语义/);
  assert.match(page, /品牌资产的硬约束/);
  assert.match(page, /专业音频可交付/);
  assert.match(page, /精准编辑/);
});

test("keeps responsive safeguards for desktop, tablet, phone, and narrow phone", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /@media \(min-width: 1440px\)/);
  assert.match(css, /@media \(max-width: 1100px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /@media \(max-width: 600px\)/);
  assert.match(css, /@media \(max-width: 380px\)/);
  assert.match(css, /overflow-x: clip/);
  assert.match(css, /@media \(hover: none\)/);
});
