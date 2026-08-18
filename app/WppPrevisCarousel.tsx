"use client";

import { useEffect, useState } from "react";

type PrevisStep = {
  index: string;
  phase: "1" | "2";
  src: string;
  alt: string;
  toolZh: string;
  toolEn: string;
  titleZh: string;
  titleEn: string;
  pointsZh: string[];
  pointsEn: string[];
  deliverable?: boolean;
};

const PHASES = {
  "1": { zh: "阶段 1 · 洞察与受众", en: "Phase 1 · Insight & Audience" },
  "2": { zh: "阶段 2 · 概念与创意", en: "Phase 2 · Concept & Ideation" },
};

const previsSteps: PrevisStep[] = [
  {
    index: "01",
    phase: "1",
    src: "/media/wpp/toolkit.png",
    alt: "WPP Open 项目工作台：团队、Canvas 与 Strategic Market Analysis Toolkit 并列",
    toolZh: "战役看板",
    toolEn: "Campaign board",
    titleZh: "一个共享工作台",
    titleEn: "One shared workspace",
    pointsZh: ["Agent 和真人团队并排在看板上，一样被派活。"],
    pointsEn: ["Agents sit on the board beside the human team and get assigned work."],
  },
  {
    index: "02",
    phase: "1",
    src: "/media/wpp/flow/03.webp",
    alt: "WPP Open 的 Build Personas：三字段 brief 与生成的完整人设",
    toolZh: "Build Personas",
    toolEn: "Build Personas",
    titleZh: "造一批合成受众",
    titleEn: "Build a synthetic audience",
    pointsZh: ["产品 / 人群 / 市场三字段 brief，产出有名有姓、可复用的人设。"],
    pointsEn: ["A three-field brief — product / audience / market — returns named, reusable personas."],
  },
  {
    index: "03",
    phase: "1",
    src: "/media/wpp/flow/focus-result.png",
    alt: "WPP Open 的 Focus Group 结果：Panel summary 与各人设的 Summary Opinion、Framework Analysis",
    toolZh: "Focus Group",
    toolEn: "Focus Group",
    titleZh: "压测概念",
    titleEn: "Pressure-test the concept",
    pointsZh: ["人设以角色口吻作答，在要预算之前先证伪。"],
    pointsEn: ["Personas answer in character — the cheap gate before the budget ask."],
  },
  {
    index: "04",
    phase: "2",
    src: "/media/wpp/flow/asset-test.png",
    alt: "WPP Open 的 Focus Group：上传素材后选择人设进行压力测试",
    toolZh: "Focus Group · 素材",
    toolEn: "Focus Group · creative",
    titleZh: "素材压力测试",
    titleEn: "Stress-test the creative",
    pointsZh: ["把素材丢给人设小组，拿回 Actionable Insights 与 Conclusion。"],
    pointsEn: ["Put the asset in front of the persona panel and get Actionable Insights and a Conclusion back."],
  },
  {
    index: "05",
    phase: "2",
    src: "/media/wpp/flow/canvas-models.png",
    alt: "WPP Open 的 Canvas 与 Agents and Models 面板：OpenAI、Google、Seedance 模型并列，人设矩阵在画布上",
    toolZh: "节点画布",
    toolEn: "Node canvas",
    titleZh: "在画布上拼概念，拿到媒介内容策略",
    titleEn: "Assemble on the canvas and get the media content strategy",
    pointsZh: [
      "研究 → 人设 → 概念 → 媒介与预算框架，连成一张图。",
      "就地生成和修改，不用在研究、文档、设计工具之间来回导出。",
    ],
    pointsEn: [
      "Research → personas → concept → channel and budget framework, as one graph.",
      "Generate and edit inline — no exporting between research, deck and design tools.",
    ],
  },
  {
    index: "06",
    phase: "2",
    src: "/media/wpp/flow/previs-canvas.png",
    alt: "WPP Open Canvas 全景：十余个人设以写实与插画风格渲染成 pre-vis 卡片，Web Researcher 与 WPP AI agent 在图上协作",
    toolZh: "交付物",
    toolEn: "The deliverable",
    titleZh: "生成 pre-vis",
    titleEn: "Generate the pre-vis",
    pointsZh: [
      "人设渲染成写实角色，KV 与广告样稿按品牌出图。",
      "关键是能出成片感的广告视频 —— 客户看得懂、当场拍板批预算。是分镜，不是成片。",
    ],
    pointsEn: [
      "Personas rendered as photoreal characters; key visuals and mock-ups on brand.",
      "Above all, concrete ad videos the advertiser can react to and approve budget on — a storyboard, not the film.",
    ],
    deliverable: true,
  },
];

export default function WppPrevisCarousel() {
  const [zoomed, setZoomed] = useState<number | null>(null);
  const total = previsSteps.length;

  useEffect(() => {
    if (zoomed === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomed(null);
      if (event.key === "ArrowRight") setZoomed((z) => (z === null ? z : (z + 1) % total));
      if (event.key === "ArrowLeft") setZoomed((z) => (z === null ? z : (z - 1 + total) % total));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed, total]);

  const zoomStep = zoomed === null ? null : previsSteps[zoomed];

  return (
    <div className="previsGridWrap">
      {(["1", "2"] as const).map((phaseKey) => (
        <section className="previsPhaseBlock" key={phaseKey} aria-label={PHASES[phaseKey].en}>
          <h4 className="previsPhase">
            <span className="langZh">{PHASES[phaseKey].zh}</span>
            <span className="langEn">{PHASES[phaseKey].en}</span>
          </h4>
          <ol className="previsGrid">
            {previsSteps.filter((s) => s.phase === phaseKey).map((step) => {
              const idx = previsSteps.indexOf(step);
              return (
                <li className={`previsCell${step.deliverable ? " isDeliverable" : ""}`} key={step.index}>
                  <button type="button" className="previsCellShot" onClick={() => setZoomed(idx)} aria-label={`Enlarge step ${step.index}`}>
                    <img src={step.src} alt={step.alt} loading="lazy" />
                  </button>
                  <div className="previsCellHead">
                    <span className="previsBadge">{step.index.replace(/^0/, "")}</span>
                    <div>
                      <b>
                        <span className="langZh">{step.titleZh}</span>
                        <span className="langEn">{step.titleEn}</span>
                      </b>
                      <em>
                        <span className="langZh">{step.toolZh}</span>
                        <span className="langEn">{step.toolEn}</span>
                      </em>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}

      {zoomStep && (
        <div className="previsZoom" role="dialog" aria-modal="true" aria-label={zoomStep.alt}>
          <button className="previsZoomBackdrop" type="button" aria-label="Close" onClick={() => setZoomed(null)} />
          <figure>
            <span className="previsZoomStep">
              <b>STEP {zoomStep.index.replace(/^0/, "")}</b>
              <i aria-hidden="true">·</i>
              <span className="langZh">{zoomStep.titleZh}</span>
              <span className="langEn">{zoomStep.titleEn}</span>
            </span>
            <img src={zoomStep.src} alt={zoomStep.alt} />
            <figcaption>
              <span>STEP {zoomStep.index} <i aria-hidden="true">/</i> {String(total).padStart(2, "0")}</span>
              <b>
                <span className="langZh">{zoomStep.titleZh}</span>
                <span className="langEn">{zoomStep.titleEn}</span>
              </b>
            </figcaption>
          </figure>
          <button className="previsZoomNav previsZoomPrev" type="button" onClick={() => setZoomed((z) => (z === null ? z : (z - 1 + total) % total))} aria-label="Previous step">←</button>
          <button className="previsZoomNav previsZoomNext" type="button" onClick={() => setZoomed((z) => (z === null ? z : (z + 1) % total))} aria-label="Next step">→</button>
          <button className="previsZoomClose" type="button" onClick={() => setZoomed(null)} aria-label="Close">×</button>
        </div>
      )}
    </div>
  );
}
