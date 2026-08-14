"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { projectVideoUrl } from "./media";

type LocalizationDemo = {
  code: string;
  city: string;
  cityZh: string;
  src: string;
  poster: string;
};

const demos: LocalizationDemo[] = [
  { code: "ZH", city: "Shanghai", cityZh: "上海", src: projectVideoUrl("media/performance-localization/videos/01-zh-cn.mp4"), poster: "/media/performance-localization/videos/01-zh-cn.jpg" },
  { code: "EN", city: "Global", cityZh: "全球", src: projectVideoUrl("media/performance-localization/videos/12-international-master.mp4"), poster: "/media/performance-localization/videos/12-international-master.jpg" },
  { code: "ES", city: "Mexico City", cityZh: "墨西哥城", src: projectVideoUrl("media/performance-localization/videos/03-es-mx.mp4"), poster: "/media/performance-localization/videos/03-es-mx.jpg" },
  { code: "ID", city: "Jakarta", cityZh: "雅加达", src: projectVideoUrl("media/performance-localization/videos/04-id-id.mp4"), poster: "/media/performance-localization/videos/04-id-id.jpg" },
  { code: "PT", city: "São Paulo", cityZh: "圣保罗", src: projectVideoUrl("media/performance-localization/videos/05-pt-br.mp4"), poster: "/media/performance-localization/videos/05-pt-br.jpg" },
  { code: "JA", city: "Tokyo", cityZh: "东京", src: projectVideoUrl("media/performance-localization/videos/06-ja-jp.mp4"), poster: "/media/performance-localization/videos/06-ja-jp.jpg" },
  { code: "MS", city: "Kuala Lumpur", cityZh: "吉隆坡", src: projectVideoUrl("media/performance-localization/videos/07-ms-my.mp4"), poster: "/media/performance-localization/videos/07-ms-my.jpg" },
  { code: "TH", city: "Bangkok", cityZh: "曼谷", src: projectVideoUrl("media/performance-localization/videos/08-th-th.mp4"), poster: "/media/performance-localization/videos/08-th-th.jpg" },
  { code: "AR", city: "Dubai", cityZh: "迪拜", src: projectVideoUrl("media/performance-localization/videos/09-ar-ae.mp4"), poster: "/media/performance-localization/videos/09-ar-ae.jpg" },
  { code: "VI", city: "Ho Chi Minh City", cityZh: "胡志明市", src: projectVideoUrl("media/performance-localization/videos/10-vi-vn.mp4"), poster: "/media/performance-localization/videos/10-vi-vn.jpg" },
  { code: "KO", city: "Seoul", cityZh: "首尔", src: projectVideoUrl("media/performance-localization/videos/11-ko-kr.mp4"), poster: "/media/performance-localization/videos/11-ko-kr.jpg" },
];

const demoRows = [demos.slice(0, 6), demos.slice(6)];

export default function PerformanceLocalizationDemo() {
  const [activeDemo, setActiveDemo] = useState<LocalizationDemo | null>(null);

  useEffect(() => {
    if (!activeDemo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDemo(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeDemo]);

  return (
    <section className="performanceLocalizationDemo" aria-label="Localization at market speed">
      <header className="performanceCapabilityCardTitle performanceLocalizationTitle">
        <span>03</span>
        <h4><span className="langZh">以市场速度完成本地化</span><span className="langEn">Localization at market speed</span></h4>
        <strong><b>1</b><small>→</small><b>11</b></strong>
      </header>

      <div className="performanceLocalizationWall">
        <figure className="performanceLocalizationMaster">
          <img src="/media/performance-localization/portable-blender-master.png" alt="Portable blender product reference" />
          <figcaption><span className="langZh">产品母版</span><span className="langEn">PRODUCT</span></figcaption>
        </figure>

        <span className="performanceLocalizationWallArrow" aria-hidden="true">→</span>

        <div className="performanceLocalizationMarquees" aria-label="Eleven localized video demos">
          {demoRows.map((row, rowIndex) => (
            <div className="performanceLocalizationMarquee" key={rowIndex}>
              <div className={`performanceLocalizationTrack performanceLocalizationTrack${rowIndex + 1}`}>
                {[...row, ...row].map((demo, index) => {
                  const duplicate = index >= row.length;
                  return (
                    <button
                      type="button"
                      className="performanceLocalizationTile"
                      key={`${rowIndex}-${demo.code}-${index}`}
                      onClick={() => setActiveDemo(demo)}
                      aria-label={`Play ${demo.city} localization demo`}
                      aria-hidden={duplicate || undefined}
                      tabIndex={duplicate ? -1 : 0}
                    >
                      <img src={demo.poster} alt="" />
                      <span><b>{demo.code}</b> {demo.city}</span>
                      <i aria-hidden="true">▶</i>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeDemo && typeof document !== "undefined" ? createPortal(
        <div
          className="performanceLocalizationPlayer"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeDemo.city} localization video`}
          onClick={() => setActiveDemo(null)}
        >
          <button type="button" className="performanceLocalizationClose" onClick={() => setActiveDemo(null)} aria-label="Close video">×</button>
          <video
            src={activeDemo.src}
            poster={activeDemo.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            onClick={(event) => event.stopPropagation()}
          />
          <span><b>{activeDemo.code}</b> <span className="langZh">{activeDemo.cityZh}</span><span className="langEn">{activeDemo.city}</span></span>
        </div>,
        document.body,
      ) : null}
    </section>
  );
}
