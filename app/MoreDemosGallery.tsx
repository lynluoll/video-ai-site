"use client";

import { useEffect, useState } from "react";

type Demo = {
  title: string;
  titleZh: string;
  type: string;
  typeZh: string;
  src: string;
  poster?: string;
};

type DemoTrack = {
  label: string;
  labelZh: string;
  direction: "forward" | "reverse";
  speed: string;
  demos: Demo[];
};

const demoTracks: DemoTrack[] = [
  {
    label: "Brand & Product Film",
    labelZh: "品牌与产品片",
    direction: "forward",
    speed: "54s",
    demos: [
      { title: "Packshot to brand film", titleZh: "从产品图到品牌成片", type: "Brand / Furniture", typeZh: "品牌广告 / 家居", src: "/media/sofa/final-film.mp4", poster: "/media/sofa/final-film-poster.jpg" },
      { title: "Portrait detail & texture", titleZh: "人物特写与质感", type: "Brand / Beauty", typeZh: "品牌广告 / 美妆", src: "/media/brand-beauty-demo.mp4", poster: "/media/brand-beauty-demo.jpg" },
      { title: "Product fidelity & lifestyle", titleZh: "产品保真与生活化叙事", type: "Brand / Beverage", typeZh: "品牌广告 / 饮品", src: "/media/brand-beverage-demo.mp4", poster: "/media/brand-beverage-demo.jpg" },
      { title: "Night lighting & motion", titleZh: "夜景光影与运动表现", type: "Brand / Lifestyle", typeZh: "品牌广告 / 生活方式", src: "/media/brand-auto-demo.mp4", poster: "/media/brand-auto-demo.jpg" },
      { title: "CMF materials & product macro", titleZh: "CMF 材质与产品微距", type: "Brand / Electronics", typeZh: "品牌广告 / 电子产品", src: "/media/brand-tech-demo.mp4", poster: "/media/brand-tech-demo.jpg" },
      { title: "Live-action motion reference", titleZh: "实拍运动参考", type: "Agency / Automotive", typeZh: "代理商 / 汽车", src: "/media/wpp-auto-input.mp4" },
      { title: "Generative automotive final", titleZh: "生成式汽车成片", type: "Agency / Automotive", typeZh: "代理商 / 汽车", src: "/media/wpp-auto-final.mp4" },
    ],
  },
  {
    label: "Performance & Commerce",
    labelZh: "效果广告与电商",
    direction: "reverse",
    speed: "38s",
    demos: [
      { title: "Demo + Card-to-Buy", titleZh: "演示 + 商品卡即购", type: "Performance / Fashion", typeZh: "效果广告 / 服饰", src: "/media/performance-2026/shoppable.mp4", poster: "/media/performance-2026/shoppable.jpg" },
      { title: "1s Hook + Direct Selling", titleZh: "1 秒钩子 + 直给卖点", type: "Performance / Skincare", typeZh: "效果广告 / 护肤", src: "/media/performance-2026/hook-direct.mp4", poster: "/media/performance-2026/hook-direct.jpg" },
      { title: "Feature Demo Selling", titleZh: "功能演示导购", type: "Performance / Sports", typeZh: "效果广告 / 运动", src: "/media/performance-2026/feature-demo.mp4", poster: "/media/performance-2026/feature-demo.jpg" },
      { title: "Single-Point Flash", titleZh: "单卖点闪记", type: "Performance / QSR", typeZh: "效果广告 / 快餐", src: "/media/performance-2026/single-point.mp4", poster: "/media/performance-2026/single-point.jpg" },
    ],
  },
  {
    label: "In-stream & Display",
    labelZh: "贴片视频与展示广告",
    direction: "forward",
    speed: "48s",
    demos: [
      { title: "30s Brand Story", titleZh: "30 秒品牌叙事", type: "In-stream / Brand", typeZh: "贴片视频 / 品牌", src: "/videos/more-demos/video_HCkjbBGSFo2HaUxO51ql3BZQggd_720p.mp4", poster: "/videos/more-demos/video_HCkjbBGSFo2HaUxO51ql3BZQggd_720p.jpg" },
      { title: "Product Aesthetics Film", titleZh: "产品美学影片", type: "In-stream / Product", typeZh: "贴片视频 / 产品", src: "/videos/more-demos/video_KyjybVSehopOsmxJAzgl1YgBgqe_720p.mp4", poster: "/videos/more-demos/video_KyjybVSehopOsmxJAzgl1YgBgqe_720p.jpg" },
      { title: "Selling Point + CTA Motion", titleZh: "卖点 + 行动按钮动效", type: "Display / Motion", typeZh: "展示广告 / 动效", src: "/videos/more-demos/video_RpwnbiHYxoFhpexoMxCl3HKLguc_480p.mp4", poster: "/videos/more-demos/video_RpwnbiHYxoFhpexoMxCl3HKLguc_480p.jpg" },
      { title: "Dynamic Remarketing", titleZh: "动态再营销", type: "Display / Commerce", typeZh: "展示广告 / 电商", src: "/videos/more-demos/video_Mk92bQyc8oowBfxo9oul2C26gQc_480p.mp4", poster: "/videos/more-demos/video_Mk92bQyc8oowBfxo9oul2C26gQc_480p.jpg" },
      { title: "970 × 250 Brand Billboard", titleZh: "970 × 250 品牌横幅", type: "Display / Billboard", typeZh: "展示广告 / 横幅", src: "/videos/more-demos/video_LaHZb46NYojY4AxjOT2lxqQfgoi_480p.mp4", poster: "/videos/more-demos/video_LaHZb46NYojY4AxjOT2lxqQfgoi_480p.jpg" },
      { title: "Product Mood Frame", titleZh: "产品氛围微动效", type: "Display / Micro-motion", typeZh: "展示广告 / 微动效", src: "/videos/more-demos/video_WxhzbZY4tocQDxxMKdKly0bTgqh_480p.mp4", poster: "/videos/more-demos/video_WxhzbZY4tocQDxxMKdKly0bTgqh_480p.jpg" },
    ],
  },
];

function DemoCard({ demo, clone }: { demo: Demo; clone: boolean }) {
  return (
    <button
      className="moreDemoCard"
      type="button"
      data-demo-src={demo.src}
      data-demo-title={demo.title}
      tabIndex={clone ? -1 : 0}
      aria-hidden={clone || undefined}
    >
      <video src={demo.src} poster={demo.poster} muted playsInline preload={clone ? "none" : "metadata"} aria-hidden="true" />
      <span className="moreDemoCardShade" aria-hidden="true" />
      <span className="moreDemoPlay" aria-hidden="true">▶</span>
      <span className="moreDemoCardCopy">
        <small className="langZh">{demo.typeZh}</small>
        <small className="langEn">{demo.type}</small>
        <b className="langZh">{demo.titleZh}</b>
        <b className="langEn">{demo.title}</b>
      </span>
    </button>
  );
}

export default function MoreDemosGallery() {
  const [activeDemo, setActiveDemo] = useState<Demo | null>(null);

  useEffect(() => {
    const gallery = document.querySelector<HTMLElement>(".moreDemosTracks");
    if (!gallery) return;

    const handleClick = (event: Event) => {
      const card = (event.target as Element | null)?.closest<HTMLButtonElement>(".moreDemoCard");
      if (!card || !gallery.contains(card)) return;
      const demo = demoTracks.flatMap((track) => track.demos).find((item) => item.src === card.dataset.demoSrc);
      if (demo) setActiveDemo(demo);
    };

    gallery.addEventListener("click", handleClick);
    return () => gallery.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!activeDemo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDemo(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeDemo]);

  return (
    <section className="moreDemosSection" id="demos" aria-labelledby="more-demos-title">
      <header className="moreDemosHeader">
        <div className="moreDemosIndex"><span>04</span><b className="langZh">更多样片</b><b className="langEn">MORE DEMOS</b></div>
        <div className="moreDemosTitle">
          <h2 className="langZh" id="more-demos-title">更多行业、画幅与创意方向</h2>
          <h2 className="langEn">More industries, formats and creative directions</h2>
        </div>
        <div className="moreDemosActions">
          <a className="langZh" href="https://bytedance.larkoffice.com/wiki/SNVXw69gTi515kkVoi8c98BznKh" target="_blank" rel="noopener noreferrer">打开完整样片库 <span>↗</span></a>
          <a className="langEn" href="https://bytedance.sg.larkoffice.com/docx/TmsqdH9TeoPVYyxzpZ9lwH91g7c" target="_blank" rel="noopener noreferrer">Open full demo library <span>↗</span></a>
        </div>
      </header>

      <div className="moreDemosTracks">
        {demoTracks.map((track, trackIndex) => (
          <section className="moreDemosTrack" key={track.label} aria-label={track.label}>
            <header><span>{String(trackIndex + 1).padStart(2, "0")}</span><b className="langZh">{track.labelZh}</b><b className="langEn">{track.label}</b></header>
            <div className="moreDemosViewport">
              <div className={`moreDemosRail ${track.direction === "reverse" ? "isReverse" : ""}`} style={{ "--demo-speed": track.speed } as React.CSSProperties}>
                {[false, true].map((clone) => (
                  <div className="moreDemosSet" key={clone ? "clone" : "primary"} aria-hidden={clone || undefined}>
                    {track.demos.map((demo) => <DemoCard key={`${clone ? "clone" : "primary"}-${demo.src}`} demo={demo} clone={clone} />)}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {activeDemo ? (
        <div className="moreDemoLightbox" role="dialog" aria-modal="true" aria-label={activeDemo.title} data-copy-editor>
          <button className="moreDemoLightboxBackdrop" type="button" aria-label="Close video" onClick={() => setActiveDemo(null)} />
          <article>
            <header><div><small className="langZh">{activeDemo.typeZh}</small><small className="langEn">{activeDemo.type}</small><h3 className="langZh">{activeDemo.titleZh}</h3><h3 className="langEn">{activeDemo.title}</h3></div><button type="button" aria-label="Close video" onClick={() => setActiveDemo(null)}>×</button></header>
            <video key={activeDemo.src} src={activeDemo.src} poster={activeDemo.poster} autoPlay playsInline controls />
          </article>
        </div>
      ) : null}
    </section>
  );
}
