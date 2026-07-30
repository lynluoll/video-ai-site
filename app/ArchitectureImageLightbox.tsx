"use client";

import { useEffect, useState } from "react";

type ActiveImage = {
  src: string;
  alt: string;
};

export default function ArchitectureImageLightbox() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".brandOriginalArchitecture");
    if (!root) return;

    const images = Array.from(root.querySelectorAll<HTMLImageElement>("img"));
    const openImage = (image: HTMLImageElement) => {
      setActiveImage({
        src: image.currentSrc || image.src,
        alt: image.alt || "品牌广告制作架构素材",
      });
    };
    const handleClick = (event: Event) => {
      const image = (event.target as Element | null)?.closest<HTMLImageElement>("img");
      if (image && root.contains(image)) openImage(image);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const image = (event.target as Element | null)?.closest<HTMLImageElement>("img");
      if (!image || !root.contains(image)) return;
      event.preventDefault();
      openImage(image);
    };

    images.forEach((image) => {
      image.dataset.architectureZoom = "true";
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", `放大查看：${image.alt || "品牌广告制作架构素材"}`);
    });
    root.addEventListener("click", handleClick);
    root.addEventListener("keydown", handleKeyDown);

    return () => {
      root.removeEventListener("click", handleClick);
      root.removeEventListener("keydown", handleKeyDown);
      images.forEach((image) => {
        delete image.dataset.architectureZoom;
        image.removeAttribute("tabindex");
        image.removeAttribute("role");
        image.removeAttribute("aria-label");
      });
    };
  }, []);

  useEffect(() => {
    if (!activeImage) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeImage]);

  if (!activeImage) return null;

  return (
    <div className="architectureLightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt} data-copy-editor>
      <button className="architectureLightboxBackdrop" type="button" aria-label="关闭放大图" onClick={() => setActiveImage(null)} />
      <figure>
        <button type="button" aria-label="关闭放大图" onClick={() => setActiveImage(null)}>×</button>
        <img src={activeImage.src} alt={activeImage.alt} />
        <figcaption>{activeImage.alt}</figcaption>
      </figure>
    </div>
  );
}
