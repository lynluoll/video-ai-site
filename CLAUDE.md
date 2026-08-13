# video_ai_site — 样式工作指引

BytePlus 广告 pitch 站点。Next.js（vinext）+ Tailwind + 一套自建 design token。
**动任何 CSS 之前先读完这一页。**

## 两个 CSS 文件，地位完全不同

| 文件 | 行数 | 是什么 | 怎么读 |
|---|---|---|---|
| `app/byteplus-deck.css` | 147 | **唯一的真理来源**：颜色 / 字号 / 字重 / 几何 token + 6 个 signature class | **整个读完**，每次都读 |
| `app/globals.css` | **13,900+** | Tailwind + 各页面分区样式，按 `#section-id` 分块 | **绝对不要整读**，只 grep 目标 section |

`globals.css` 第 2 行 `@import "./byteplus-deck.css"`，token 全局可用。
`app/layout.tsx` 只 import `globals.css`。

## 硬规矩（违反了就是返工）

1. **不许写新的 hex 值。** 颜色一律用 `var(--bp-*)`。要的颜色 token 里没有 → 停下来问，不要自己造。
2. **不许在 `globals.css` 末尾追加新层。** 那 12,288 行就是这么来的：v2.1 → v2.2 → v3.1 → v4 → v4.6/4.7/4.8 一层层叠，后面的靠优先级压前面的。找到你要改的 `#section-id` 块，**原地改**。
3. **不许写 inline style / style 属性。** 新样式加进对应 section 块。
4. **`theme1.xml` 是假的，忽略它。** 那是 PPT 的 stock Office 配色（#4472c4 之类），跟本站无关。token 是从真实 39 页 slide 量出来的。
5. **方角是默认，圆角是例外。** `--bp-radius: 0`。原 deck 里 639 个直角矩形 vs 45 个圆角，39 页只有 3 个投影。**Flat is the house style** —— 不要自作主张加 shadow / 大圆角 / 渐变。
6. **最大的字不是最粗的字。** section title 24px 走 regular，字重花在小号 tracked label 和 display 标题上。别按常规习惯加粗。

## Token 速查（细节看 byteplus-deck.css）

- 文字：`--bp-ink`（标题）/ `--bp-ink-2`（正文，用得最多）/ `--bp-ink-3`（脚注）
- 品牌：`--bp-blue: #0066fc` 是**唯一**高频强调色（原 deck 用了 222 次）。violet / cyan 只作低频装饰。
- 字号：`--bp-t-micro|label|body|body-l|lede|sub|card|section|h2|h1|display|figure`
- 几何：`--bp-hairline: 1px`、`--bp-accent-bar: 4px`（卡片顶部那条蓝杠，本站最标志性的装置）、`--bp-pad-card: 24px`、`--bp-margin: 48px`

## 先复用 class，别重新推导

`byteplus-deck.css` 里已有：`.bpCard`（方角 + 发丝边 + 4px 蓝顶杠 + 无投影）、`.bpKicker`（大写 tracked 蓝色小标）、`.bpFigure`（超大蓝数字）、`.bpStatement`、`.bpBody`、`.bpSource`。
先组合这些，不够用再往 section 块里加。

## 改哪里：section 定位法

样式按页面锚点分块。先定位再动手：

```bash
grep -n "#customer-agency" app/globals.css | head
```

现有 section id：`#market` `#players` `#roadmap` `#solutions` `#solution-brand` `#solution-display`
`#solution-performance` `#solution-playable` `#case-studies` `#customer-agency` `#customer-adtech` `#customer-brand`

大区块的起始行（`/* ===` 横幅）：33 / 5330 / 5466 / 6091 / 6160 / 6881 / 11600 / 12076。
**注意 12076 那块是"最后追加"的标题层**，会压掉前面几层的设置——你在早期块里改标题字号可能不生效，先查这里。

## 验证

改完必须自己跑起来看，不要让用户手验：

```bash
npx vinext dev --port 3021
```

配置已在 `.claude/launch.json`（name: `video-ai-site`，端口 3021）。
有浏览器预览工具就用 `preview_start {name: "video-ai-site"}`，然后 read_page / screenshot / read_console_messages 确认。

## 交付时报告什么

- 改了哪个 section 块、哪几行
- 用了哪些 token；如果被迫引入了新值，明确说出来并说明原因
- 截图或 read_page 证据
