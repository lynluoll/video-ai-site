"use client";

import { useState } from "react";
import { projectVideoUrl } from "./media";

const edits = [
  {
    id: "original",
    labelEn: "Original",
    labelZh: "原片",
    noteEn: "Winning master",
    noteZh: "胜出母版",
    src: projectVideoUrl("media/performance-precise-editing/master/master.mp4"),
    poster: "/media/performance-precise-editing/master/master.jpg",
    reference: undefined,
    detailTitleEn: "Winning master",
    detailTitleZh: "胜出母版",
    detailEn: "Baseline creative for controlled edits",
    detailZh: "作为后续精准编辑的母版",
    beforeEn: "Pearl-white blender · SMOOTHIE IN 30 SECONDS",
    beforeZh: "珍珠白搅拌杯 · 30 秒完成奶昔",
    afterEn: undefined,
    afterZh: undefined,
  },
  {
    id: "sku",
    labelEn: "SKU",
    labelZh: "商品",
    noteEn: "Product replaced",
    noteZh: "仅替换商品",
    src: projectVideoUrl("media/performance-precise-editing/variants/sku-replacement.mp4"),
    poster: "/media/performance-precise-editing/variants/sku-replacement.jpg",
    reference: "/media/performance-precise-editing/references/cobalt-blender.png",
    detailTitleEn: "SKU replacement",
    detailTitleZh: "商品 SKU 替换",
    detailEn: "Product changed; talent, framing and timing retained",
    detailZh: "仅替换商品，人物、构图与节奏保持不变",
    beforeEn: "Pearl-white blender",
    beforeZh: "珍珠白搅拌杯",
    afterEn: "Cobalt-blue blender",
    afterZh: "钴蓝搅拌杯",
  },
  {
    id: "copy",
    labelEn: "Text",
    labelZh: "文案",
    noteEn: "Text replaced",
    noteZh: "仅替换文案",
    src: projectVideoUrl("media/performance-precise-editing/variants/text-replacement.mp4"),
    poster: "/media/performance-precise-editing/variants/text-replacement.jpg",
    reference: undefined,
    detailTitleEn: "Text replacement",
    detailTitleZh: "广告文案替换",
    detailEn: "Message changed without regenerating the scene",
    detailZh: "不重做画面，仅精准替换广告信息",
    beforeEn: "SMOOTHIE IN 30 SECONDS · SHOP NOW",
    beforeZh: "30 秒完成奶昔 · 立即购买",
    afterEn: "BLEND ANYWHERE · GET YOURS",
    afterZh: "随处搅拌 · 即刻拥有",
  },
];

export default function PerformancePreciseEditingDemo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = edits[selectedIndex];

  return (
    <section className="performancePreciseStage" aria-label="Precise editing demos">
      <header className="performanceStageHeading performancePreciseHeading">
        <div><span>04</span><h4><span className="langZh">精确编辑</span><span className="langEn">Precise editing</span></h4></div>
      </header>

      <div className="performanceEditTabs" role="tablist" aria-label="Choose editing result">
        {edits.map((edit, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={index === selectedIndex}
            className={index === selectedIndex ? "is-active" : ""}
            key={edit.id}
            onClick={() => setSelectedIndex(index)}
          >
            <span className="langZh">{edit.labelZh}</span><span className="langEn">{edit.labelEn}</span>
          </button>
        ))}
      </div>

      <div className="performanceEditShowcase">
        <figure className="performanceEditCurrent">
          <video
            key={selected.src}
            src={selected.src}
            poster={selected.poster}
            controls
            playsInline
            preload="metadata"
            aria-label={`${selected.labelEn} precise editing video`}
          />
          <figcaption><span className="langZh">{selected.noteZh}</span><span className="langEn">{selected.noteEn}</span></figcaption>
        </figure>

        <aside className="performanceEditDetail" aria-live="polite">
          <span className="performanceEditDetailKicker"><span className="langZh">本次编辑</span><span className="langEn">EDIT APPLIED</span></span>
          <h5><span className="langZh">{selected.detailTitleZh}</span><span className="langEn">{selected.detailTitleEn}</span></h5>
          <p><span className="langZh">{selected.detailZh}</span><span className="langEn">{selected.detailEn}</span></p>
          {selected.reference ? (
            <div className="performanceEditReference">
              <img src={selected.reference} alt="Cobalt-blue blender replacement SKU" />
              <span><span className="langZh">新商品素材</span><span className="langEn">NEW SKU ASSET</span></span>
            </div>
          ) : null}
          <div className="performanceEditChange">
            <div><small><span className="langZh">编辑前</span><span className="langEn">BEFORE</span></small><strong><span className="langZh">{selected.beforeZh}</span><span className="langEn">{selected.beforeEn}</span></strong></div>
            {selected.afterEn ? <i aria-hidden="true">→</i> : null}
            {selected.afterEn ? <div><small><span className="langZh">编辑后</span><span className="langEn">AFTER</span></small><strong><span className="langZh">{selected.afterZh}</span><span className="langEn">{selected.afterEn}</span></strong></div> : null}
          </div>
        </aside>
      </div>

    </section>
  );
}
