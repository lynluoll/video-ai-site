"use client";

import { useState } from "react";
import { projectVideoUrl } from "./media";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";

type LocalizationDemo = {
  code: string;
  city: string;
  cityZh: string;
  src: string;
  poster: string;
};

const demos: LocalizationDemo[] = [
  { code: "ZH", city: "Shanghai", cityZh: "上海", src: projectVideoUrl("media/performance-localization/videos/01-zh-cn.mp4"), poster: "/media/performance-localization/videos/01-zh-cn.jpg" },
  { code: "EN", city: "London", cityZh: "伦敦", src: projectVideoUrl("media/performance-precise-editing/master/master.mp4"), poster: "/media/performance-precise-editing/master/master.jpg" },
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

export default function PerformanceLocalizationDemo() {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const selected = demos[selectedIndex];

  return (
    <section className="performanceLocalizationDemo performanceLocalizationStage" aria-label="Localization at market speed">
      <header className="performanceStageHeading">
        <div><span>03</span><h4><span className="langZh">以市场速度完成本地化</span><span className="langEn">Localization at market speed</span></h4></div>
        <strong><b>1</b><small>→</small><b>11</b></strong>
      </header>

      <div className="performanceLocalizationFeature">
        <div className="performanceLocalizationContext">
          <div className="performanceLocalizationMarketTitle">
            <small><span className="langZh">当前市场版本</span><span className="langEn">LOCALIZED VERSION</span></small>
            <strong>{selected.code}</strong>
            <h5><span className="langZh">{selected.cityZh}</span><span className="langEn">{selected.city}</span></h5>
          </div>

          <figure className="performanceLocalizationSource">
            <img src="/media/performance-localization/portable-blender-master.png" alt="Portable blender product reference" />
            <figcaption><span className="langZh">产品母版</span><span className="langEn">MASTER PRODUCT</span></figcaption>
          </figure>
        </div>

        <span className="performanceStageFlow" aria-hidden="true">→</span>

        <figure className="performanceLocalizationCurrent">
          <PauseWhenHiddenVideo
            key={selected.src}
            src={selected.src}
            poster={selected.poster}
            controls
            playsInline
            preload="auto"
            loadImmediately
            ariaLabel={`${selected.city} localization video`}
          />
        </figure>
      </div>

      <div className="performanceLocalizationMarketRail" aria-label="Choose a localized market version">
        {demos.map((demo, index) => (
          <button
            type="button"
            className={index === selectedIndex ? "is-active" : ""}
            key={demo.code}
            onClick={() => setSelectedIndex(index)}
            aria-pressed={index === selectedIndex}
            aria-label={`Show ${demo.city} localization demo`}
          >
            <img src={demo.poster} alt="" />
            <span><b>{demo.code}</b><em className="langZh">{demo.cityZh}</em><em className="langEn">{demo.city}</em></span>
          </button>
        ))}
      </div>
    </section>
  );
}
