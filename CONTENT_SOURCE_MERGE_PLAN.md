# Ads Demo Website 双项目内容合并实施计划

> 上位口径：继续遵守 `CONTENT_RESTRUCTURE_PLAN.md` 中记录的 Bojie 对外合规要求。本文件负责进一步确定实际内容来源和页面拼装方式。

## 1. 本轮目标

在不重新发明全部内容的前提下，将两个项目中最成熟的部分合并成一套统一站点：

1. 第一章保留当前项目已经完成的 Market Overview 市场主图，再承接参考项目中的三个趋势。
2. 第二章保留参考项目的 Key Players 价值链，并补充当前项目已有的三类深度 Case Study。
3. 第三章直接复用当前项目已经完成的四条 Solution。
4. 第四章利用参考项目已有 Demo 资产建立滚动 Demo 墙，并通过按钮跳转到完整飞书 Demo 库。

最终一级导航固定为：

1. `Market Overview`
2. `Key Players`
3. `Solution`
4. `More Demos`

叙事链路固定为：

> 市场为什么变化 → 谁在推动变化 → BytePlus 提供什么 → 实际作品是什么

## 2. 两个项目的内容资产盘点

### 2.1 当前项目中需要保留的资产

当前项目的主要内容位于 `app/page.tsx`，可直接复用的内容包括：

#### Market Overview 主图

- 2026 海外数字广告市场基线。
- Search、Video、Display、Retail 四类广告规模。
- Video 从当前规模增长到 2030 年 `$260B` 的橙色流线图。
- Social Video、CTV、OLV 三赛道展开交互。
- 2021、2023、2026、2030 时间轴。
- 桌面端与移动端两套展示结构。
- `MarketTrackAutoReveal` 自动展开/聚焦交互。

这是用户已经画好并反复调整的核心图表，本轮不得替换成参考站的小柱状图，也不得改变其数字和主要结构。

#### 三类深度业务案例

- 品牌主：一套品牌资产、两条生产链路。
- Agency：从创意预演到正式制作、后期和多渠道交付。
- AdTech / Paid Media：从市场洞察、脚本、素材生产、测试到反馈迭代的五步闭环。

#### 四条 Solution

- Brand Advertising Production。
- Performance Advertising Production。
- Display Advertising Production。
- Playable Ads Factory。

这些页面已经包含流程、媒体资产、Demo 和一定交互，后续主要做内容归位和统一章节编号，不重新设计其业务内容。

### 2.2 参考项目中需要保留的资产

参考项目的主要内容位于 `video-ai-site/index.html`，可直接作为新架构基础的内容包括：

#### 四章导航和叙事顺序

- Market Overview。
- Key Players。
- Solution。
- More Demos。

#### Market Overview 三个趋势

1. `Video overtakes search`。
2. `Campaign agents scale in 2026`。
3. `AI becomes table stakes for creators`。

#### Key Players 价值链

1. Brand Owners。
2. Agencies。
3. AdTech / MarTech。
4. Paid Media。

每一类角色都已经有 Budget Role、Key Trend 和代表性公司三个字段，可作为第二章的主结构。

#### Demo 数据库和媒体资产

- `assets/data/demos.js` 中已有结构化 Demo 元数据。
- 已覆盖 Brand、Performance 等分类。
- 已包含行业、画幅、时长、模型、标签、视频和海报信息。
- `media/poster/`、`media/video/`、`media/img/` 等目录已有大量可用于 Demo 墙的素材。

### 2.3 不直接保留的内容

以下内容不应原样并入新站：

- 当前项目中的 `Mainstream ad scenarios` 三列总览和后续三张需求拆解页：其信息将被 Key Players、Case Study 和 Solution 覆盖，继续保留会造成章节重复。
- 当前项目中的 Roadmap：包含“替代 70% 制作劳动力”和模型短板叙事，与 Bojie 的对外口径冲突。
- 当前项目中的 AI Value Capture 复杂估算带：如包含“可替代劳动力盘”等表达，应在合并时移除。
- 参考项目中 Market Overview 趋势一的小柱状图：当前项目的市场主图已经更完整，不应重复展示第二张相同结论的图。
- 参考项目中 `Rebuilding this section` 的 Solution 和 More Demos 占位内容。
- 两边所有重复 CTA、重复免责声明和过多说明小字。

## 3. 最终页面结构总览

| 一级章节 | 主要内容 | 内容来源 | 处理方式 |
| --- | --- | --- | --- |
| 01 Market Overview | 市场主图 + 三个趋势 | 当前项目 + 参考项目 | 主图保留，趋势并入 |
| 02 Key Players | 四类价值链 + 三类 Case Study | 参考项目 + 当前项目 | 价值链保留，案例补齐 |
| 03 Solution | Brand / Performance / Display / Playable | 当前项目 | 整体迁移、统一表达 |
| 04 More Demos | 滚动 Demo 墙 + 飞书完整库入口 | 参考项目 Demo 资产 | 新建展示层、复用资产 |

一级章节之间不再插入额外的 `Scenarios`、`Audience`、`Roadmap` 等主章节。

## 4. 第一章：Market Overview

### 4.1 页面顺序

第一章内部按以下顺序展开：

1. 章节标题与一句总判断。
2. 当前项目的 Market Overview 市场主图。
3. 三个趋势卡片。
4. 一句过渡文案，引出 Key Players。

建议总标题：

- 中文：`AI 正在重塑广告市场的供给方式`
- 英文：`AI Is Reshaping How Advertising Supply Is Created`

建议开场句：

- 中文：`视频成为最大的广告形态，Campaign Agent 开始规模化，AI 也正在成为每个创意团队的标准生产力。`
- 英文：`Video is becoming the largest ad format, campaign agents are beginning to scale, and AI is becoming standard infrastructure for creative teams.`

### 4.2 市场主图：完整保留

保留当前项目的以下信息：

- 2026 全球数字广告和海外数字广告市场口径。
- Search `$220B`、Video `$160B`、Display `$160B`、Retail `$110B`。
- Video 在 2030 年增长至 `$260B` 并成为第一大广告类型。
- Social Video、CTV、OLV 三赛道展开。
- 视频从 2021 到 2030 的增长时间轴。
- “AI 降低制作成本，从而释放视频供给”的因果关系。

实施约束：

- [x] 不改动用户已经确认的数字。
- [x] 不替换现有主图结构。
- [x] 保留“查看三赛道”交互及当前触发逻辑。
- [x] 保留主图桌面端与移动端适配。
- [x] 删除图下方与“替代劳动力”相关的估算内容。
- [x] 如主图已有趋势一的全部数字，趋势一卡片不再重复绘制柱状图。

### 4.3 趋势一：Video overtakes search

内容来源：参考项目趋势一，视觉证据使用当前项目主图。

建议标题：

- 中文：`视频广告将在 2030 年成为第一大广告类型`
- 英文：`Video Becomes the Largest Ad Format by 2030`

建议核心文案：

- 中文：`视频本来就在互动和转化上占优，过去限制供给的是制作成本。AI 降低生产门槛后，视频素材开始走向规模化供给。`
- 英文：`Video already performs strongly on engagement and conversion. As AI reduces production cost and complexity, creative supply can finally scale.`

呈现方式：

- 使用“结论 + 一段解释 + 指向上方主图”的轻量卡片。
- 不再增加第二张 `$220B → $260B` 柱状图。
- 将“视频模型从创意预演走向正式生产”作为这一趋势的产品含义。

### 4.4 趋势二：Campaign agents scale in 2026

内容来源：参考项目趋势二，按最新会议口径改写。

建议标题：

- 中文：`Campaign Agent 在 2026 年进入规模化阶段`
- 英文：`Campaign Agents Enter the Scaling Phase in 2026`

建议核心文案：

- 中文：`Ad Manager 正在演化为 Campaign Agent。Agent 串联策略、素材、投放与优化，人负责设定方向、选择和审核。`
- 英文：`Ad managers are evolving into campaign agents that connect strategy, creative, activation, and optimization — while people direct, choose, and review.`

建议图示：

> 2025 `0→1` 验证 → 2026 `1→3` 复制 → 未来 `3→N` 普及

内容约束：

- [x] 不使用 `giving way to` 或“让位”。
- [x] 不写 Agent 替代人。
- [x] 明确创意自动化是 Campaign Agent 闭环中的必要组成部分。
- [x] 按用户确认的参考页口径采用 Meta Advantage+ `$60B → $75B（3 Qtrs）` 数字。

### 4.5 趋势三：AI becomes table stakes for creators

内容来源：参考项目趋势三，按 Bojie 的“组织生产力”口径强化。

建议标题：

- 中文：`AI 成为创意团队的标准生产力`
- 英文：`AI Becomes Standard Infrastructure for Creative Teams`

建议核心文案：

- 中文：`AI 的价值不再只是生成一条素材，而是持续覆盖创意、制作、本地化和版本延展等日常工作。`
- 英文：`AI is moving beyond one-off generation to become an everyday layer across ideation, production, localization, and versioning.`

数据呈现原则：

- 可保留参考项目的 AI 使用率方向。
- `83%`、`60%` 等数字上线前必须重新核验年份、调查对象和来源。
- 页面核心指标应表达团队采用率和工作流覆盖，而不是调用次数。

### 4.6 本章转场

建议转场文案：

- 中文：`这三项趋势不会同时作用于所有人。品牌主、代理商、AdTech 和媒体平台分别控制着不同的预算、资产和反馈信号。`
- 英文：`These shifts do not affect every player in the same way. Brands, agencies, AdTech platforms, and media owners each control a different part of the budget, asset, and feedback loop.`

## 5. 第二章：Key Players + Case Study

### 5.1 页面顺序

第二章内部按以下顺序展开：

1. Key Players 价值链总览。
2. 一张角色与 Case Study 的映射导航。
3. Case Study 01：品牌主。
4. Case Study 02：Agency。
5. Case Study 03：AdTech / Paid Media。
6. 一句过渡文案，引出四条 Solution。

> 口径说明：用户原话中的“品牌主、代理商和 agency”后两项语义相同。结合当前工作区实际存在的三套案例资产，本计划暂按“品牌主 / Agency / AdTech 与 Paid Media”三类案例执行。如第三类另有所指，实施前只需替换第三类映射，不影响整体架构。

### 5.2 Key Players 价值链：保留参考项目结构

保留四行结构：

| 角色 | Budget Role | Key Trend | Public Examples |
| --- | --- | --- | --- |
| Brand Owners | 定义预算与品牌资产 | 建立统一品牌资产与 AI 工作流 | 不展示未授权客户名 |
| Agencies | 承接创意与制作预算 | 从创意预演进入正式 Production | WPP · Havas · Publicis |
| AdTech / MarTech | 把投放预算转成持续生产 | Campaign Agent 进入 `1→3` | AppLovin · Tenmax · Smartly.io |
| Paid Media | 完成分发并返回效果信号 | 分发信号回流素材生产 | TikTok · Criteo · Pinterest |

需要修正参考项目的内容：

- [ ] `Representative customers` 改为 `Public examples` / `公开行业示例`。
- [ ] 删除 Brand Owners 行中的 `L'Oréal · CreateAI`。
- [ ] Brand Owners 不强行列出具体公司，可写 `Global consumer brands`。
- [ ] 保留“Money flows down. Value compounds in the middle.”作为章节主判断。
- [ ] 删除需要依靠长免责声明才能成立的客户关系表述。

### 5.3 Case Study 入口

Key Players 总览之后增加三张简洁入口卡：

1. `Brand Owner — One asset system, two production lanes`
2. `Agency — From creative preview to production and delivery`
3. `AdTech & Paid Media — From market insight to feedback loop`

入口卡只承担章节导航，不重复案例正文。

### 5.4 Case Study 01：品牌主

内容来源：当前项目 `customer-brand` 页面。

保留的业务逻辑：

- 总部统一管理品牌资产。
- 一套品牌资产体系支持全球和区域生产。
- 两条生产链路：高频素材和品牌主片。
- 高频素材链路：市场需求 → 模板化生成与本地化 → 品牌/法务审核 → 多渠道交付。
- 品牌主片链路：全球需求 → Agency/制作伙伴 → 主片制作与品牌审核 → 区域本地化交付。

必须修改：

- [ ] 删除组件和正文中的 L'Oréal / 欧莱雅名称。
- [ ] 标题改为 `全球品牌主业务模式：一套品牌资产，两条生产链路。`
- [ ] 英文标题改为 `Global brand-owner model: one asset system, two production lanes.`
- [ ] 不列出内部平台、品牌数量、市场数量或生产比例。
- [ ] 该页定位为匿名行业 Operating Model，不写成已完成客户项目。

页面核心结论：

> 品牌主需要的不是更多孤立素材，而是一套能够同时服务品牌主片与高频内容的可控资产体系。

### 5.5 Case Study 02：Agency

内容来源：当前项目 `customer-agency` 页面。

保留的业务逻辑：

- Creative：创意概念 → 可审阅预演。
- Production：生产资产 → 高质量母版。
- Media：审核母版 → 多渠道版本。
- 四步标准工作流：创意与预演 → 正式制作 → 后期与声音 → 审核与交付。
- 汽车广告混合制作示例：实拍锁定运动，Seedream 构建环境和目标帧，Seedance 生成最终场景与特效。

公开公司处理：

- WPP、Havas、Publicis 可以作为公开 Agency 示例。
- 不将它们描述为 BytePlus 客户。
- 参考项目中 WPP Open 使用率和 Havas 投资额如果保留，必须重新核对公开来源和时间。

页面核心结论：

> Agency 的机会不止在创意预演，而在于把 AI 接入正式制作、后期和多渠道交付。

### 5.6 Case Study 03：AdTech / Paid Media

内容来源：当前项目 `customer-adtech` 页面。

保留的五步闭环：

1. 市场洞察。
2. 广告脚本。
3. 素材自动化生产。
4. 投放与测试。
5. 胜出素材迭代。

保留的公开产品类型：

- TikTok Ads Manager / Smart+。
- Meta Ads Manager / Advantage+。
- Google Ads / Performance Max。
- AppLovin AXON。
- 其他 AdTech Campaign 产品。

内容约束：

- [ ] 平台名称只作为公开市场产品示例。
- [ ] 不写合作状态和客户收入。
- [ ] 不强调某个平台“底层模型未锁定”之类销售内部判断。
- [ ] 核心放在“素材自动化必须嵌入 Campaign Agent 主链路”。

页面核心结论：

> Campaign Agent 的效果上限，取决于它能否持续获得足够多、足够快、可测试的广告素材。

### 5.7 第二章到第三章的映射

在案例区末尾增加一张简单映射：

| 角色需求 | 对应 Solution |
| --- | --- |
| 全球品牌资产、主片和本地化 | Brand + Display |
| Agency 正式制作和版本交付 | Brand + Display |
| Campaign Agent 持续素材供给 | Performance |
| 游戏和 App 转化链路 | Performance + Playable |

转场文案：

> 不同角色控制不同环节，但最终都落到四条可复用的广告生产线。

## 6. 第三章：Solution

### 6.1 内容来源

Solution 直接使用当前工作区 `app/page.tsx` 中已经完成的四条方案：

1. `solution-brand`
2. `solution-performance`
3. `solution-display`
4. `solution-playable`

参考项目中的 Solution 当前只是占位页，不参与正文合并。

### 6.2 Solution 章节入口

在四条方案之前增加统一总览，避免直接进入复杂生产架构：

| Solution | 解决的问题 | 旗舰证明 |
| --- | --- | --- |
| Brand | 高标准、可控的品牌广告生产 | Sofa / 品牌片制作流程 |
| Performance | 持续生成、测试和复用胜出结构 | Multi-SKU / Card-to-Buy 等 |
| Display | 一套主视觉扩展成多尺寸、多语言素材 | Commerce / Beauty / Regional Promo |
| Playable | 从游戏素材生成可投放互动广告 | Live playable demos |

### 6.3 Brand Solution

保留：

- Sofa 主 Demo。
- CG + AI 五阶段生产架构。
- 四个品牌广告样片。
- 方案详情外链。

整理要求：

- [ ] 页面标题和编号统一为第三章内部 `03.1`。
- [ ] 主流程和 Demo 不重复讲同一信息。
- [ ] 技术架构保持一层，不增加新的嵌套容器。
- [ ] 删除过细、无法对外验证的模型参数。

### 6.4 Performance Solution

保留：

- 五步运作链。
- Multi-SKU Sweep 旗舰 Demo。
- Demo + Card-to-Buy。
- 1s Hook + Direct Selling。
- Feature Demo Selling。
- Single-Point Flash。

整理要求：

- [ ] 页面编号统一为 `03.2`。
- [ ] 与第二章 Campaign Agent 案例形成承接，不重复五步业务背景。
- [ ] 第二章解释“为什么需要”，Solution 只讲“BytePlus 如何实现”。

### 6.5 Display Solution

保留：

- 五步生产架构。
- Campaign Brief、Brand Kit、Product Feed 输入。
- Seedream 生成、DCO 适配和 QA。
- 三张 Display Demo。

整理要求：

- [ ] 页面编号统一为 `03.3`。
- [ ] 突出“一套母版，规模化交付”。
- [ ] 不重新引入已删除的场景总览内容。

### 6.6 Playable Solution

保留：

- 一个素材输入。
- 市场调研、创意策划、自动生产三步流水线。
- Hook × Visual × CTA 变体矩阵。
- 两个可实际试玩的 Demo。
- Playable 方案详情外链。

整理要求：

- [ ] 页面编号统一为 `03.4`。
- [ ] 保持可试玩能力，不把 Playable 降级为静态海报。
- [ ] iframe 继续使用懒加载和安全 sandbox。

### 6.7 四条 Solution 的统一规则

- [ ] 每条方案只保留一个最主要的业务命题。
- [ ] 每条方案优先展示一个旗舰 Demo，其余 Demo 作为证据带。
- [ ] 每条方案都提供前往 More Demos 或飞书完整库的入口。
- [ ] 中英文标题、流程节点、按钮和 Demo 数量保持对应。
- [ ] 不新增 Roadmap 或模型短板章节。

## 7. 第四章：More Demos

### 7.1 页面定位

More Demos 不再做一套复杂的站内 Gallery 产品，而是一面能够持续滚动、快速建立视觉冲击的 Demo 墙。

页面只完成两个任务：

1. 让用户快速感知 BytePlus 在多行业、多画幅和多广告类型上的输出丰富度。
2. 将需要详细浏览的用户引导到飞书完整 Demo 库。

### 7.2 Demo 资产来源

优先复用参考项目：

- `video-ai-site/assets/data/demos.js`
- `video-ai-site/media/poster/`
- `video-ai-site/media/video/`
- `video-ai-site/media/img/`

不直接复制全部内容。先从数据集中建立一份对外 allowlist，再进入 Demo 墙。

### 7.3 Demo 墙结构

建议使用三条横向轨道：

1. Brand & Product Film。
2. Performance & Commerce。
3. Display & Playable。

滚动方式：

- 第一、三轨从右向左。
- 第二轨从左向右。
- 速度保持稳定，不使用夸张加速。
- 鼠标悬停、键盘聚焦或触摸卡片时暂停当前轨道。
- 用户系统设置 `prefers-reduced-motion` 时停止自动滚动，改为手动横向浏览。

卡片内容：

- 默认展示海报，避免首屏同时加载大量视频。
- 标题。
- 广告类型。
- 行业。
- 画幅或时长。
- 点击后可以播放预览或打开轻量预览层。

不展示：

- Prompt。
- 内部模型参数。
- 真实客户名称。
- 复杂能力说明。
- 每张卡片单独的飞书链接。

### 7.4 Demo 选择原则

首版建议控制在 18—30 个 Demo：

- 每条轨道 6—10 个。
- 横版、竖版和方形素材都有覆盖。
- 汽车、快消、美妆、电商、科技、游戏等行业都有代表。
- Brand、Performance、Display、Playable 四类方案均有对应作品。
- 相似题材只保留质量最好的一个，避免 Demo 墙看起来只是数量堆积。

准入检查：

- [ ] 无未经授权的真实品牌 Logo。
- [ ] 无客户内部信息。
- [ ] 海报与视频内容一致。
- [ ] 中英文标题自然且对应。
- [ ] 视频或图片链接有效。
- [ ] 素材适合外部客户观看。

### 7.5 飞书外链

Demo 墙下方只保留一个主 CTA：

- 中文：`查看完整 Demo 库 ↗`
- 英文：`Explore the Full Demo Library ↗`

链接规则：

- 使用新标签页打开。
- 使用 `rel="noopener noreferrer"`。
- 飞书链接必须完成对外访问权限测试。
- 如果中文和英文使用不同飞书文档，语言切换时同步切换链接。
- 当前尚未在本任务中指定最终飞书 URL，实施时先作为待确认配置项，不写死旧链接。

辅助文案建议：

- 中文：`更多行业、画幅和创意方向持续更新在完整 Demo 库中。`
- 英文：`Explore more industries, formats, and creative directions in the continuously updated demo library.`

## 8. 最终章节编号和锚点

建议统一为：

| 编号 | 中文 | 英文 | 建议锚点 |
| --- | --- | --- | --- |
| 01 | 市场概览 | Market Overview | `#market` |
| 02 | 关键角色 | Key Players | `#players` |
| 2.1 | 品牌主案例 | Brand Owner Case | `#case-brand-owner` |
| 2.2 | 代理商案例 | Agency Case | `#case-agency` |
| 2.3 | 广告技术与付费媒体案例 | AdTech & Paid Media Case | `#case-adtech` |
| 03 | 解决方案 | Solution | `#solutions` |
| 3.1 | 品牌广告 | Brand | `#solution-brand` |
| 3.2 | 效果广告 | Performance | `#solution-performance` |
| 3.3 | 展示广告 | Display | `#solution-display` |
| 3.4 | 可玩广告 | Playable | `#solution-playable` |
| 04 | 更多 Demo | More Demos | `#demos` |

## 9. 内容迁移实施顺序

### Phase 1：建立四章骨架

- [ ] 将导航统一为四个一级章节。
- [ ] 保留当前 Market 主图。
- [ ] 移除主导航中的 Scenarios、Audience 和 Roadmap。
- [ ] 先建立新的章节锚点和编号，不立即改内部视觉。

### Phase 2：完成 Market Overview

- [x] 将参考项目三个趋势迁入当前项目。
- [x] 趋势一不重复市场主图的数据图形。
- [x] 更新 Campaign Agent 的人机协作文案。
- [x] 按用户确认的参考页口径采用趋势二 `$60B → $75B` 与趋势三 `83% vs. 60% in 2024`。
- [x] 删除替代劳动力相关估算。

### Phase 3：完成 Key Players 与 Case Study

- [ ] 迁入参考项目四类 Key Players 主结构。
- [ ] 删除 L'Oréal 和 `Representative customers` 表述。
- [ ] 将当前项目三套案例移入第二章。
- [ ] 将品牌主案例匿名化。
- [ ] 消除 Key Players 和 Case Study 之间的重复说明。

### Phase 4：归位 Solution

- [ ] 将当前项目四条 Solution 调整到第三章。
- [ ] 统一 `03.1—03.4` 编号。
- [ ] 清除旧章节编号残留。
- [ ] 为每条 Solution 增加指向 More Demos 的入口。

### Phase 5：构建 More Demos

- [ ] 从参考项目 Demo 数据生成对外 allowlist。
- [ ] 选出首版 18—30 个素材。
- [ ] 构建三轨滚动 Demo 墙。
- [ ] 添加暂停、键盘和 reduced-motion 行为。
- [ ] 添加飞书完整 Demo 库 CTA。

### Phase 6：双语与验收

- [ ] 对比中英文标题、正文、数字和 Demo 数量。
- [ ] 检查中文页面没有残留旧英文句子。
- [ ] 检查英文页面没有已删除的中文内容或旧文案。
- [ ] 桌面端逐屏检查章节顺序和视觉节奏。
- [ ] 移动端检查市场主图和 Demo 墙。
- [ ] 检查所有站内锚点、视频和飞书外链。

## 10. 明确删除和收拢的旧内容

实施时需要处理以下旧页面：

- [x] `sceneLandscapePage`：已删除独立章节；有价值的信息由 Solution 总览承接。
- [x] `sceneDemoPages`：已删除独立章节；样片由 Solution 或 More Demos 承接。
- `customerFlowPage`：由参考项目 Key Players 结构替代，避免保留两套价值链。
- `roadmapPage`：整体删除。
- `marketFlowAiBand`：只保留不涉及替代劳动力且已核对的部分；如无法独立成立则整体移除。
- 参考项目的 Solution / More Demos placeholder：不迁移。
- 参考项目原有三篇极短公开 Case 文案：只作为证据素材参考，不与当前项目三套完整业务案例同时展示。

## 11. 内容边界与非目标

本轮不做：

- 不重新计算或修改用户已经确认的 Market 主图数据。
- 不新建第五个一级章节。
- 不把所有参考项目素材一次性复制进生产站。
- 不把飞书 Demo 库完整复刻成站内复杂筛选产品。
- 不增加模型短板、Roadmap 或劳动力替代叙事。
- 不使用未获得对外授权的客户案例。

## 12. 实施前待确认项

以下事项不阻塞计划成形，但实际改页面前需要确认：

1. 用户所说的第三类 Case Study 是否确实是 `AdTech / Paid Media`；本计划已按当前工作区三套案例资产作此理解。
2. More Demos 最终飞书文档 URL，以及中英文是否使用同一个文档。
3. 参考 Demo 库中哪些素材已经完成对外合规确认。
4. Market 三个趋势中需要保留的公开数字及其最终来源。

## 13. 最终验收标准

1. 页面只有四个一级章节，顺序与导航完全一致。
2. Market Overview 首先完整展示用户已经画好的市场主图，随后展示三个趋势。
3. 三个趋势来自参考项目，但文案符合最新会议口径。
4. Key Players 保留参考项目四类价值链，并紧接三类有业务深度的 Case Study。
5. 品牌主 Case 不出现 L'Oréal 或其他未授权客户名称。
6. Solution 完整保留当前工作区四条方案，不丢失媒体资产和互动 Demo。
7. More Demos 是流畅、可暂停、兼顾无动画偏好的滚动 Demo 墙。
8. Demo 墙通过单一 CTA 跳转到可访问的飞书完整库。
9. 不出现重复的场景总览、价值链、Roadmap 或占位页面。
10. 中英文内容、编号、锚点、按钮和外链全部对应。
