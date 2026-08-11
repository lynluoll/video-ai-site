# Ads Demo Website 内容重构计划

## 1. 项目目标

将站点整理成一套供销售向外部客户演示的内容工具，帮助访问者快速理解：

1. 广告市场正在发生什么变化。
2. 产业链上的主要参与者分别面对什么问题。
3. BytePlus 能够提供哪些广告生产方案。
4. 这些方案可以产出什么样的实际 Demo。

站点不是 SEO 导向的公开官网，也不是内部研究报告。页面需要优先降低销售讲解成本，核心信息必须一眼可读，详细材料通过方案页或外部飞书文档承载。

## 2. Bojie 提出的核心要求

### 2.1 对外合规

- [ ] 不展示未经 PR 或客户授权的客户案例。
- [ ] 删除 L'Oréal 名称及相关客户拆解；需要说明该类业务时统一使用“全球品牌主”或“某品牌主”。
- [ ] 公开公司名称只能作为行业公开案例或市场信号，不能暗示其为 BytePlus 客户或合作伙伴。
- [ ] 不公开客户内部组织、平台、预算、业务规模、合作状态和实施细节。
- [ ] 不在对外站点展示“模型短板”“当前能力缺陷”等负面内容。

### 2.2 内容表达

- [ ] 不堆砌市场数据，只保留能够支撑核心判断的少量数字。
- [ ] 减少重复说明和小字，把重要信息放进标题、核心句和主流程。
- [ ] 不使用“AI 替代人”的叙事，统一表达为人机协作：人负责方向、选择与审核，Agent 负责具体执行。
- [ ] 中英文分别使用自然的本地化表达，不在中文页面混入不必要的英文业务术语。
- [ ] 保留现有可用内容和组件，不从零重建整套站点。

### 2.3 内容范围

- [ ] Market Overview 聚焦三项趋势：视频广告、Campaign Agent、创意团队 AI 生产力。
- [ ] Solution 必须覆盖 Brand、Performance、Display、Playable 四条生产线。
- [ ] More Demos 应支持按行业、画幅和广告目标浏览。
- [ ] Demo 库采用精选 allowlist，确保每个样片都适合对外展示。

## 3. 总体内容结构

最终站点只保留四个一级章节：

1. **Market Overview** — 市场为什么正在变化。
2. **Key Players** — 谁在推动变化，各自需要什么。
3. **Solution** — BytePlus 如何帮助这些角色完成广告生产。
4. **More Demos** — 用实际样片证明方案效果。

整体叙事顺序：

> 市场变化 → 产业角色 → BytePlus 方案 → Demo 证明

建议全站核心主张：

> 视频正在成为最大的广告形态，Campaign Agent 正把广告生产和投放连接成持续闭环，而 BytePlus 提供构建这套闭环所需的模型、API 和生产工作流。

英文建议：

> Video is becoming the largest ad format. Campaign agents are connecting creative production and media optimization into an always-on loop — powered by BytePlus models, APIs, and production workflows.

## 4. 第一章：Market Overview

### 4.1 章节任务

用三个趋势解释客户为什么现在需要重新考虑广告素材生产方式。该章节只建立市场判断，不提前展开具体方案。

建议标题：

- 中文：`广告市场正在进入 AI 原生生产阶段`
- 英文：`Advertising Is Moving Toward AI-Native Production`

### 4.2 趋势一：视频成为最大的广告形态

核心判断：

> AI 显著降低视频制作成本与生产门槛，推动视频素材供给规模化；视频广告因此有机会超过搜索和展示，成为最大的广告形态。

需要表达的两层变化：

1. 市场变化：视频广告预算和素材需求持续增长。
2. 产品变化：视频模型从创意预演进入高标准广告生产。

内容边界：

- [ ] 只保留已经核对好的 2026、2030 核心数字。
- [ ] 不新增复杂市场拆分和未经确认的估算。
- [ ] 不修改已经确认的数据口径。
- [ ] 为公开数字准备来源，但页面不堆放冗长脚注。

### 4.3 趋势二：Campaign Agent 在 2026 年进入规模化阶段

核心判断：

> Ad Manager 和 DSP 正从操作工具演化为 Campaign Agent。人负责设定方向、做出选择和完成审核，Agent 负责串联策略、素材、投放与优化。

阶段叙事：

- 2025：`0 → 1`，能力验证。
- 2026：`1 → 3`，形成可复制的产品和工作流。
- 后续：`3 → N`，逐渐成为主流投放方式。

必须说明的业务逻辑：

> 创意自动化是 Campaign Agent 的必要闭环。一个端到端 Agent 不能让用户离开当前流程，再去其他系统生产广告素材。

表达约束：

- [ ] 将 `Ad Manager is giving way to Campaign Agent` 改为 `Ad Manager is evolving into Campaign Agent`。
- [ ] 删除“替代投手”“替代劳动力”等表述。
- [ ] 将现有 `70% target labor replacement` 指标删除或替换为创意产能、工作流覆盖度等协作型指标。

### 4.4 趋势三：AI 成为创意团队的标准生产力

核心判断：

> AI 的价值正在从单次素材生成，扩展为整个创意组织持续使用的生产力基础设施。

建议衡量方式：

- 创意人员的 AI 使用覆盖率。
- AI 覆盖的工作环节。
- 使用频率和使用深度。
- Agency 对 AI 平台、部署团队和工作流的持续投入。

不建议继续使用：

- 单纯的模型调用次数。
- 单条素材成本乘以素材数量的价值估算。
- 无法证明组织采用程度的孤立 Demo 数量。

### 4.5 本章交付物

- [ ] 三张趋势卡的中英文标题与核心句。
- [ ] 3—5 个最终公开数字及来源台账。
- [ ] Campaign Agent `0→1 / 1→3 / 3→N` 的简洁图示文案。
- [ ] 一句从市场趋势过渡到 Key Players 的转场文案。

## 5. 第二章：Key Players

### 5.1 章节任务

解释广告价值链上的主要角色、掌握的资产或预算、正在发生的变化，以及其对 BytePlus 的需求。页面不是客户名单，也不是销售案例列表。

建议标题：

- 中文：`四类参与者正在重构广告生产链路`
- 英文：`Four Players Are Reshaping the Advertising Value Chain`

### 5.2 四类角色

| 角色 | 核心资产或预算 | 正在发生的变化 | 对 BytePlus 的需求 |
| --- | --- | --- | --- |
| Brand Owners | 品牌资产与营销预算 | 从单一主片转向持续内容供给 | 品牌一致性、可控生成、本地化 |
| Agencies | 创意、制作与服务预算 | 从创意预演进入正式制作 | 高质量生产、协同、资产复用 |
| AdTech / MarTech | 投放系统与自动化预算 | 从 Ad Manager 演化为 Campaign Agent | API、Agent 工作流、持续生成 |
| Paid Media | 流量与反馈信号 | 素材生产和投放优化形成闭环 | 素材测试、变体生成、反馈回流 |

### 5.3 公开市场实践

如需使用公司名称，只作为公开行业证据，并将模块统一命名为：

- 中文：`公开市场实践`
- 英文：`Public Market Signals`

可考虑的公开方向：

- Holding Groups：WPP、Havas、Publicis 的公开 AI 平台和工作方式。
- AdTech：AppLovin 等公开的自动化创意能力。
- Paid Media：TikTok Smart+ 等公开的智能投放产品。

合规规则：

- [ ] 删除 `Case Study`、`Customer Story`、`Three accounts where fit is concrete` 等容易暗示客户关系的标题。
- [ ] 不使用 L'Oréal/CreateAI。
- [ ] DoublePP、Harvest 等名称在获得对外授权前不进入页面。
- [ ] 不通过反复增加免责声明小字解决合规问题，直接使用准确的模块命名和正文表述。
- [ ] 每个公开市场实践必须有公开来源，并且不写 BytePlus 合作关系。

### 5.4 本章交付物

- [ ] 四类角色的中英文核心文案。
- [ ] 每类角色一条标准工作流。
- [ ] 3—5 个可公开引用的市场实践及来源。
- [ ] 从 Key Players 过渡到四条 Solution 的映射关系。

## 6. 第三章：Solution

### 6.1 章节任务

针对四类广告生产任务，说明业务问题、标准流程、BytePlus Offer 和可验证的 Demo。四条方案采用统一的信息结构，避免每一页出现不同的叙事方式。

建议标题：

- 中文：`从 Brief 到投放反馈的四条 AI 广告生产线`
- 英文：`Four AI Production Lines, From Brief to Performance Feedback`

每条方案统一回答四个问题：

1. 客户当前面对什么业务问题？
2. 标准生产流程是什么？
3. BytePlus Offer 是什么？
4. 哪个 Demo 可以证明方案效果？

### 6.2 Brand Advertising

核心命题：

> 在保持品牌规范和导演级控制的前提下，把 AI 从创意预演推进到正式广告生产。

标准流程：

> 品牌资产 → 创意与分镜 → 可控生产 → 品牌审核 → 主片及多版本交付

BytePlus Offer：

- Seedance / Seedream 模型能力。
- 品牌资产、参考图和关键元素控制。
- CG 与 AI 混合生产。
- 多市场、多语言和多画幅版本生成。

### 6.3 Performance Advertising

核心命题：

> 把高频素材生产接入 Campaign Agent，让素材能够持续生成、测试和迭代。

标准流程：

> 商品与卖点 → Hook 与脚本 → 批量生成 → 投放测试 → 高表现模板复用

BytePlus Offer：

- Agent 工作流。
- 视频与图片模型 API。
- 商品信息结构化。
- 素材变体和批量生产。

### 6.4 Display Advertising

核心命题：

> 从一套主视觉快速生成适配不同市场、渠道和尺寸的图片素材矩阵。

标准流程：

> 主视觉 → 尺寸适配 → 文案与语言本地化 → 产品及背景变体 → QA 与交付

BytePlus Offer：

- Seedream 图片生成与编辑。
- 扩图、局部修改和版式适配。
- 模板化生成。
- 批量 API 工作流。

### 6.5 Playable Ads

核心命题：

> 把游戏机制、广告创意和可投放交付包连接成一条生产流程。

标准流程：

> 产品机制 → 创意概念 → 交互原型 → 素材与代码生产 → 验证及平台交付

BytePlus Offer：

- 创意与素材生成。
- 交互原型生产。
- 多广告网络规格适配。
- 自动化验证和交付。

### 6.6 Solution 页面统一规则

- [ ] 每条方案只保留一个旗舰 Demo。
- [ ] 其余样片统一导向 More Demos。
- [ ] 每条方案提供 `查看更多 Seedance 样片` 的中英文外链入口。
- [ ] 技术架构只保留一层，不嵌套多层技术容器。
- [ ] 不把模型版本、Prompt 和内部生产参数放在主叙事中。
- [ ] 不展示模型短板或负面能力对比。

### 6.7 本章交付物

- [ ] 四条方案的中英文标题、核心命题和标准流程。
- [ ] 四组 BytePlus Offer 文案。
- [ ] 每条方案一个旗舰 Demo 的选片结果。
- [ ] 方案详情飞书文档的中英文链接台账。

## 7. 第四章：More Demos

### 7.1 章节任务

建立一套精选、合规、可持续维护的广告样片库，让销售和客户能够按业务需要快速找到相关 Demo。

建议标题：

- 中文：`按行业、目标和格式浏览广告样片`
- 英文：`Explore Demos by Industry, Objective, and Format`

### 7.2 推荐筛选维度

- Type：Brand / Performance / Display / Playable
- Industry：Beauty / E-commerce / Gaming / Auto / F&B / Consumer Electronics
- Format：16:9 / 9:16 / 1:1
- Objective：Awareness / Product Demo / Conversion / Localization / Creative Testing

### 7.3 Demo 卡片内容

每张卡片只展示：

- Demo 标题。
- 行业。
- 广告类型。
- 画幅。
- 核心应用场景。
- 播放按钮。

不在卡片上展示：

- 内部 Prompt。
- 模型调用参数。
- 未确认的客户或品牌名称。
- 内部生产成本和时间。
- 大段技术说明。

### 7.4 Demo 准入规则

- [ ] 样片必须进入人工维护的 allowlist 后才能展示。
- [ ] 样片不存在真实品牌 Logo，或已经获得明确对外授权。
- [ ] 样片内容、标题和标签不暗示客户合作关系。
- [ ] 每个样片均有正确的中英文标题和标签。
- [ ] 视频链接、海报、画幅和播放状态均经过测试。
- [ ] 飞书外链具备目标受众可访问权限。

### 7.5 本章交付物

- [ ] Demo allowlist。
- [ ] Demo 元数据表。
- [ ] 四个筛选维度的标准词表。
- [ ] 中英文飞书 Gallery 链接。
- [ ] 所有样片的合规检查结果。

## 8. 当前参考站点的内容处理建议

### 8.1 保留

- 四章导航结构。
- 三个市场趋势的基本方向。
- 四类 Key Players 价值链。
- 中英文双版本架构。
- Demo allowlist 和多维筛选机制。
- 页面末尾的 `Bring us a brief` CTA。

### 8.2 改写

- `Ad Manager is giving way to Campaign Agent` → `Ad Manager is evolving into Campaign Agent`。
- `Three accounts where fit is concrete` → `Public Market Signals`。
- “AI 替代劳动力” → “AI 扩展创意产能和工作流覆盖度”。
- 客户案例 → 公开市场实践或匿名行业工作流。

### 8.3 删除

- L'Oréal/CreateAI 及相关客户拆解。
- `70% target labor replacement`。
- 模型短期能力短板。
- 未获授权的客户名称和品牌素材。
- 重复的小字免责声明。
- Solution 和 More Demos 中仍存在的临时占位内容。

## 9. 中英文内容规则

- [ ] 中文页面优先使用“品牌广告、效果广告、展示广告、可玩广告”等中文名称。
- [ ] `Campaign Agent`、`AdTech/MarTech` 等缺少自然中文替代的行业术语可保留英文，但首次出现时补充中文解释。
- [ ] 英文版不是中文逐字直译，应使用广告行业自然表达。
- [ ] 中英文结构、数字、Demo 数量、按钮和链接保持一一对应。
- [ ] 每次更新中文内容后，同时检查英文版是否存在旧文案或已删除内容。

## 10. 内容制作顺序

### P0：先确定对外口径

- [ ] 确认不使用 L'Oréal 及所有未授权客户名称。
- [ ] 确认 Market Overview 最终数字和公开来源。
- [ ] 确认四类公开市场实践可以对外引用。
- [ ] 确认全部 Demo 的品牌和访问权限合规。

### P1：完成四章正文

- [ ] Market Overview 三个趋势的中英文文案。
- [ ] Key Players 四类角色及公开市场实践。
- [ ] Solution 四条生产线及 BytePlus Offer。
- [ ] More Demos 的分类、标签和卡片文案。

### P2：内容与页面联调

- [ ] 检查每屏只表达一个核心结论。
- [ ] 检查标题、正文和图示之间没有重复。
- [ ] 检查所有按钮、锚点和飞书链接。
- [ ] 对比中英文页面的内容完整性和排版长度。
- [ ] 完成桌面端与常见浏览器的逐屏视觉校验。

## 11. 待补充的证据材料

- [ ] 视频广告在 2026、2030 年的核心市场数据与来源。
- [ ] 视频模型从预演走向高标准生产的公开行业证据。
- [ ] Campaign Agent 在 2026 年进入规模化阶段的产品或市场证据。
- [ ] Agency、KOL 和创意团队的 AI 使用覆盖率、频率与投入数据。
- [ ] WPP、Havas、Publicis、AppLovin、TikTok 等公开产品资料。
- [ ] 四条 Solution 对应的最终旗舰 Demo。

## 12. 验收标准

内容上线前必须同时满足：

1. 销售能够在 5 分钟内沿四章结构讲完整个故事。
2. 每个页面只有一个清晰的核心判断。
3. 不出现未经授权的客户关系、内部数据和真实品牌素材。
4. 不使用“AI 替代人”或模型短板作为对外主叙事。
5. 四条 Solution 均有清晰流程、BytePlus Offer 和旗舰 Demo。
6. More Demos 可以按业务需求快速筛选。
7. 中英文内容、数字、Demo 和外链一一对应。
8. 页面内容不依赖大量小字才能解释清楚。
