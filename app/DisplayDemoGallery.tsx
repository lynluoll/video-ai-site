"use client";

import { useEffect, useRef, useState } from "react";

type DisplayAsset = {
  src: string;
  preview?: string;
  labelZh: string;
  labelEn: string;
  meta: string;
};

type DisplaySet = {
  id: string;
  index: string;
  titleZh: string;
  titleEn: string;
  cover: string;
  coverPosition?: string;
  assets: DisplayAsset[];
};

const displaySets: DisplaySet[] = [
  {
    id: "multi-size",
    index: "01",
    titleZh: "多尺寸适配",
    titleEn: "Multi-size adaptation",
    cover: "/media/display-v2/final/multi-size/03-landscape-1200x628.jpg",
    assets: [
      { src: "/media/display-v2/final/multi-size/01-vertical-1000x1500.jpg", labelZh: "竖版信息流", labelEn: "Vertical feed", meta: "2:3 · 1000 × 1500" },
      { src: "/media/display-v2/final/multi-size/02-square-1200x1200.png", labelZh: "方形信息流", labelEn: "Square feed", meta: "1:1 · 1200 × 1200" },
      { src: "/media/display-v2/final/multi-size/03-landscape-1200x628.jpg", labelZh: "横版信息流", labelEn: "Landscape feed", meta: "1.91:1 · 1200 × 628" },
      { src: "/media/display-v2/final/multi-size/04-medium-rectangle-300x250.jpg", preview: "/media/display-v2/final/multi-size/04-medium-rectangle-preview-1200x1000.jpg", labelZh: "中矩形广告", labelEn: "Medium rectangle", meta: "300 × 250" },
      { src: "/media/display-v2/final/multi-size/05-leaderboard-728x90.jpg", preview: "/media/display-v2/final/multi-size/05-leaderboard-preview-2048x253.jpg", labelZh: "横幅广告", labelEn: "Leaderboard banner", meta: "728 × 90" },
    ],
  },
  {
    id: "seasonal",
    index: "02",
    titleZh: "节日本地化",
    titleEn: "Seasonal localization",
    cover: "/media/display-v2/final/seasonal/02-christmas-en.png",
    assets: [
      { src: "/media/display-v2/final/seasonal/01-neutral-master.png", labelZh: "中性母版", labelEn: "Neutral master", meta: "MASTER" },
      { src: "/media/display-v2/final/seasonal/02-christmas-en.png", labelZh: "圣诞节 · 英文", labelEn: "Christmas · English", meta: "EN" },
      { src: "/media/display-v2/final/seasonal/03-mothers-day-es.png", labelZh: "母亲节 · 西班牙文", labelEn: "Mother’s Day · Spanish", meta: "ES" },
      { src: "/media/display-v2/final/seasonal/04-valentines-pt.png", labelZh: "情人节 · 葡萄牙文", labelEn: "Valentine’s Day · Portuguese", meta: "PT" },
      { src: "/media/display-v2/final/seasonal/05-lunar-new-year-zh.png", labelZh: "春节 · 中文", labelEn: "Lunar New Year · Chinese", meta: "ZH" },
    ],
  },
  {
    id: "selling-points",
    index: "03",
    titleZh: "卖点视觉化",
    titleEn: "Selling-point visualization",
    cover: "/media/display-v2/final/selling-points/01-product-master.png",
    coverPosition: "center 58%",
    assets: [
      { src: "/media/display-v2/final/selling-points/01-product-master.png", labelZh: "商品母版", labelEn: "Product master", meta: "MASTER" },
      { src: "/media/display-v2/final/selling-points/02-shell.png", labelZh: "坚固箱体", labelEn: "Durable shell", meta: "SHELL" },
      { src: "/media/display-v2/final/selling-points/03-wheels.png", labelZh: "静音万向轮", labelEn: "Quiet wheels", meta: "WHEELS" },
      { src: "/media/display-v2/final/selling-points/04-packing.png", labelZh: "分区收纳", labelEn: "Organized packing", meta: "PACKING" },
      { src: "/media/display-v2/final/selling-points/05-laptop-access.png", labelZh: "前置电脑仓", labelEn: "Laptop access", meta: "ACCESS" },
    ],
  },
];

export default function DisplayDemoGallery() {
  const [activeSetIndex, setActiveSetIndex] = useState<number | null>(null);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const activeSet = activeSetIndex === null ? null : displaySets[activeSetIndex];

  const openSet = (index: number) => {
    setActiveSetIndex(index);
    setActiveAssetIndex(0);
  };

  const close = () => setActiveSetIndex(null);

  useEffect(() => {
    if (!activeSet) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeSet]);

  return (
    <section className="displayV2Gallery" id="solution-display-demos" aria-label="Display Ads demo gallery">
      <header className="displayV2GalleryHeader">
        <span>3 × IMAGE SYSTEMS</span>
        <h4><span className="langZh">点击一张母图，查看完整变体。</span><span className="langEn">Open a master to explore its full variant set.</span></h4>
      </header>

      <div className="displayV2Cards">
        {displaySets.map((set, index) => (
          <button className={`displayV2Card displayV2Card${index + 1}`} type="button" key={set.id} onClick={() => openSet(index)} aria-haspopup="dialog">
            <img src={set.cover} alt="" style={{ objectPosition: set.coverPosition }} />
            <span className="displayV2CardShade" aria-hidden="true" />
            <span className="displayV2CardIndex">{set.index}</span>
            <span className="displayV2CardCopy">
              <b><span className="langZh">{set.titleZh}</span><span className="langEn">{set.titleEn}</span></b>
              <small><span>5 ASSETS</span><i aria-hidden="true">↗</i></small>
            </span>
          </button>
        ))}
      </div>

      {activeSet && (
        <div className="displayV2Modal" role="dialog" aria-modal="true" aria-label={`${activeSet.titleEn} demo set`}>
          <button className="displayV2Backdrop" type="button" onClick={close} aria-label="Close gallery" />
          <article className={`displayV2SetBoard displayV2SetBoard-${activeSet.id}`}>
            <button ref={closeRef} className="displayV2SetClose" type="button" onClick={close} aria-label="Close gallery">×</button>
            {activeSet.assets.map((asset, index) => (
              <figure className={`displayV2SetAsset${index === activeAssetIndex ? " isActive" : ""}`} key={asset.src}>
                <button type="button" onClick={() => setActiveAssetIndex(index)} aria-label={`${asset.labelEn} · enlarge`} aria-pressed={index === activeAssetIndex}>
                  <img src={asset.preview ?? asset.src} alt={`${activeSet.titleEn}: ${asset.labelEn}`} />
                  <span className="displayV2SetLabel">
                    <span className="langZh">{asset.labelZh}</span><span className="langEn">{asset.labelEn}</span><small>{asset.meta}</small>
                  </span>
                </button>
              </figure>
            ))}
          </article>
        </div>
      )}
    </section>
  );
}
