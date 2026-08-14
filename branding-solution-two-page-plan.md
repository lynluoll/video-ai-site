# Branding Solution 两页改造计划

> 状态：待确认，尚未修改页面
> 创建日期：2026-08-14
> 工作分支：`branch-solution-displays`
> 本轮对象：Branding / Brand Advertising Production Solution

## 1. 改造目标

把当前 Branding Solution 从一张信息过载的页面拆成两个连续页面：

1. **Hero Film 页面**：只负责让用户沉浸观看最终品牌成片。
2. **Model Capabilities 页面**：解释成片背后的模型分工、可控生产方式和能力证据。

两页共同回答两个不同问题：

- 第一页：**最终能做出什么？**
- 第二页：**模型和生产系统是怎么做到的？**

本轮只重组现有内容和素材，不修改已经确认的业务结论，不重新生成素材，不改 Performance Ads、Display Ads、Playable 或 More Demos。

## 2. 当前页面问题

当前 `#solution-brand` 同时容纳：

- Sofa Hero Film；
- 4 个 Branding Ads 样片；
- 5 阶段 Production Architecture；
- 外链按钮和大量技术标签。

由此造成：

- Hero Film 不是视觉主角，用户无法先完整观看结果；
- 模型、CG 工具、编辑工具和输出节点被放在同一层级，看不出各自职责；
- 五列架构为了塞进一屏使用大量小字，阅读成本高；
- 视频、样片、架构争夺注意力，没有明确的浏览顺序；
- 后续 CSS 存在多轮覆盖，继续叠加样式会增加响应式错位风险。

## 3. 页面编排与编号

保持 Branding Solution 在 Solution 章节中的 `3.1` 位置，不引起后续章节整体重编号。

建议使用：

- `3.1A · HERO FILM`
- `3.1B · MODEL CAPABILITIES`

显示时不补前导零，不使用 `03.1`。两页 DOM 锚点建议拆为：

- `#solution-brand-film`
- `#solution-brand-capabilities`

页面顺序：

`Brand Hero Film → Brand Model Capabilities → Performance Ads Solution`

## 4. Page 01：Hero Film

### 4.1 页面任务

让用户不被流程、小字或其他 Demo 干扰，直接观看 Sofa 品牌广告成片。该页应该像一个作品放映页，而不是解决方案说明页。

### 4.2 信息结构

保留：

- 编号：`3.1A`
- 章节标签：`HERO FILM`
- 英文标题：`Brand Advertising Hero Film`
- 中文标题：`品牌广告 Hero Film`
- 当前 Hero Video：`/media/sofa/final-film.mp4`
- 当前 Poster：`/media/sofa/final-film-poster.jpg`
- 一条简短说明：`From packshot to brand film` / `从产品标准图到品牌成片`
- 现有方案详情外链，作为次级操作。

删除或移出本页：

- Production Architecture；
- 4 个 Branding Ads 小样片；
- 模型名称、流程节点、标签和技术说明；
- 与观看成片无关的装饰性标题。

### 4.3 视觉设计

- 页面采用单一大画面结构，视频占据主要视觉面积。
- 视频维持原始画幅并使用 `object-fit: contain`，不得为了铺满容器裁掉画面。
- 视频舞台可使用深色中性背景，页面其余区域仍遵循站点的白色、浅灰蓝和 BytePlus 蓝体系。
- 标题区压缩为一条清晰的顶部信息带，不与视频争夺空间。
- 不给视频额外套多层卡片、描边或复杂容器。
- 外链按钮降低视觉权重，不能比播放入口更抢眼。

### 4.4 播放交互

- 默认显示经过确认的 Poster，不自动播放声音。
- 点击视频或原生播放按钮后播放。
- 保留原生进度、音量、全屏和键盘控制。
- 视频离开可视区域时暂停，避免用户进入下一页后仍在播放声音。
- 页面重新进入视口时不强制自动续播，由用户决定。
- 加载失败时保留 Poster 和可理解的备用状态，不出现空白黑块。

### 4.5 4 个 Branding 样片的处理

当前 4 个紧凑样片不再放在 Hero Film 页，也不挤入 Model Capabilities 页。

建议处理：

- 继续保留在全局 More Demos Gallery 中；
- 本页只保留一个低权重的 `View more demos` 入口（如当前全局 Gallery 已有固定入口，则本页不重复增加）。

这样 Branding 两页的叙事不会被第三组内容打断，同时原样片仍可访问。

## 5. Page 02：Model Capabilities

### 5.1 页面任务

解释 Sofa 成片背后的能力组合。重点不是罗列软件名，而是讲清楚：

1. 什么信息被模型理解和锁定；
2. 什么部分由确定性工具控制；
3. 图像模型怎样生成和编辑视觉资产；
4. 视频模型怎样把批准的画面转化为成片。

### 5.2 核心信息表达

页面主结论建议为：

- EN：`AI generates. Deterministic tools keep the brand in control.`
- 中文：`AI 负责生成，确定性工具保证品牌可控。`

主流程从当前 5 个技术阶段收敛为 4 个能力区域：

#### A. Understand & Lock Identity

- 对应现有素材：Texture、Environment、Packshot、Character、Vision Spec。
- 模型：`Seed 2.1`。
- 解释重点：理解商品、材质、颜色、尺寸和品牌约束，形成后续生产共用的身份锚点。
- 视觉证据：输入资产拼贴 + 一张简化后的视觉规范卡。

#### B. Build Deterministic Structure

- 对应现有素材：Digital Twin、CG Angle、CG Scene、Lighting。
- 模型 / 工具：`Seed3D 2.0` + `Blender / CG control`。
- 解释重点：数字孪生建立结构，CG 锁定机位、透视、比例和光照。
- 视觉证据：3D 模型、不同机位、灯光对照。
- 说明原则：Blender 是确定性控制工具，不作为 AI 模型展示。

#### C. Generate & Edit Visual Assets

- 对应现有素材：Render Detail、CG renders、KV 画面。
- 模型：`Seedream 5.0 Pro`。
- 解释重点：图像合成、环境切换、商品和材质编辑、细节增强、放大和多画面生成。
- 视觉证据：同一 Sofa 的多个受控场景和不同景别 KV。

#### D. Animate & Finish

- 对应现有素材：Final KV + Hero Film。
- 模型：`Seedance 2.0`。
- 后期层：Editing / Sound。
- 解释重点：从批准的视觉资产进入运动生成，再经过剪辑和声音形成可交付视频。
- 视觉证据：关键帧序列 + 最终成片入口。
- 说明原则：编辑软件属于交付层，不与模型并列为模型能力。

### 5.3 推荐版式

采用一张轻量、可顺序阅读的能力画布，不再使用五列等宽小卡片：

1. 顶部为一句主结论；
2. 中部为 `A → B → C → D` 的四段能力路径；
3. 每段以一张主视觉证据为核心，配一个模型名和一句结果说明；
4. 页面底部用 `Approved assets → Production-ready film` 收束结果。

桌面端建议使用四段横向路径；当单屏宽度不足时改为 `2 × 2`，而不是压缩字体或制造横向滚动。

移动端按 A、B、C、D 纵向堆叠，图片保持完整比例。

### 5.4 视觉规则

- 使用白色和浅灰蓝页面背景，BytePlus 蓝只承担路径、编号和重点模型名。
- 深色只用于视频本身或必要的媒体舞台，不再使用整块黑色架构面板。
- 能力区域通过留白、浅色面和一条连续路径建立分区，不依靠多层边框。
- 每个区域最多：一个标题、一个模型名、一句说明、1—3 张证据图。
- 正文保持正常可读字号，不再用 7—10px 的技术小字塞满页面。
- 图片可点击放大，复用现有 `ArchitectureImageLightbox`，但缩略图不裁掉关键商品结构。
- 不使用原始表格，不堆叠标签，不展示无解释价值的内部参数。

## 6. 中英文内容原则

继续以英文为标准版本，中文与其逐项对应：

- 两种语言保持同一信息结构和同一视觉层级；
- 中文不额外补充英文版不存在的结论；
- 模型、产品和专业名称使用官方英文名称；
- 中文说明用自然业务语言，不逐字硬译；
- 交付前分别检查两种语言的换行、标题高度和按钮宽度。

## 7. 组件与代码改造范围

实施时预计调整：

- `app/page.tsx`
  - 把当前单个 `brandSolutionPage` 拆成两个独立 `article`；
  - Hero Film 节点移入第一页；
  - 现有架构素材重组为四个能力区域；
  - 4 个 Branding 样片从本章节移除，保留全局 More Demos 数据；
  - 更新锚点、`aria-labelledby` 和视频标签。
- `app/globals.css`
  - 为两个页面建立独立布局；
  - 清理与 `#solution-brand` 有关的重复覆盖规则；
  - 删除不再使用的五列暗色架构样式；
  - 增加桌面、窄屏和移动端规则。
- 现有媒体素材继续从 `public/media/sofa/` 读取，不新增或改写素材文件。
- 如页面级测试依赖旧的 `#solution-brand`，同步更新测试定位和快照。

实现时优先修改现有规则，而不是继续在 `globals.css` 尾部追加一轮覆盖。

## 8. 实施步骤

### Phase 1：结构拆分

- [ ] 创建 Hero Film 与 Model Capabilities 两个页面节点。
- [ ] 确认编号、锚点、页面顺序和双语标题。
- [ ] 从 Hero Film 页移除架构和 4 个样片。
- [ ] 确保 More Demos 仍能访问现有 4 个品牌样片。

### Phase 2：Hero Film 页面

- [ ] 建立单一大视频舞台。
- [ ] 保留 Poster、原生控制、Loop 和全屏能力。
- [ ] 增加离开视口暂停逻辑。
- [ ] 校验原始画幅、无裁切和加载失败状态。

### Phase 3：Model Capabilities 页面

- [ ] 把五阶段技术架构重组为四个能力区域。
- [ ] 明确 Seed 2.1、Seed3D 2.0、Seedream 5.0 Pro、Seedance 2.0 的职责。
- [ ] 把 Blender / CG 与 Editing / Sound 标记为控制层和交付层。
- [ ] 选择每个区域最能证明能力的现有 Sofa 素材。
- [ ] 复用图片点击放大交互。

### Phase 4：样式清理与响应式

- [ ] 移除旧页面的密集五列布局和整块暗色架构样式。
- [ ] 合并 `#solution-brand` 的多轮 CSS 覆盖。
- [ ] 适配 1920、1440、1280、1024 和移动端宽度。
- [ ] 确保每页桌面端在一个视口内完整表达，不溢出下一页。

### Phase 5：验证

- [ ] 英文默认状态逐页截图校验。
- [ ] 切换中文后逐页截图校验。
- [ ] 检查标题换行、图片裁切、视频控制和按钮位置。
- [ ] 检查键盘播放、图片放大、关闭 Lightbox 和外链。
- [ ] 检查页面无横向滚动、无旧节点残留、无重复样片。
- [ ] 运行项目现有 lint、typecheck 和测试。

## 9. 验收标准

### Hero Film 页面

- [ ] 首屏注意力明确落在 Hero Video。
- [ ] 页面没有 Production Architecture 和 4 个小样片。
- [ ] 视频不裁切、可播放、可暂停、可全屏，离开视口停止播放。
- [ ] 标题、说明和外链不会遮挡视频或抢夺主视觉。

### Model Capabilities 页面

- [ ] 用户能在 10 秒内看懂四个能力阶段及其顺序。
- [ ] 四个模型的职责清楚，CG 与后期工具没有被误称为模型。
- [ ] 每个能力都有对应的 Sofa 视觉证据，不只是文字说明。
- [ ] 不出现密集表格、整块黑底、多层边框或不可读小字。
- [ ] 所有关键图片都能完整显示并点击放大。

### 全局

- [ ] 两页均与现有站点的 BytePlus 视觉体系一致。
- [ ] 英文为标准内容，中文含义与结构对应。
- [ ] 不影响 Performance、Display、Playable 和 More Demos。
- [ ] 桌面和移动端均无布局溢出、乱码或断裂。

## 10. 本轮建议确认项

实施前建议确认以下三点：

1. 编号使用 `3.1A / 3.1B`，保持后续 Solution 编号不变。
2. 4 个 Branding 小样片从这两页移除，只保留在 More Demos Gallery。
3. Model Capabilities 从当前 5 个技术卡片收敛为 4 个能力区域，内容不删，只重新归类和提升视觉证据。
