"use client";

import { useEffect, useState } from "react";
import PauseWhenHiddenVideo from "./PauseWhenHiddenVideo";

export default function PlayableClipLightbox() {
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".playableMatrix");
    if (!root) return;

    const videos = Array.from(root.querySelectorAll<HTMLVideoElement>("video"));
    const handleClick = (event: Event) => {
      const video = (event.target as Element | null)?.closest<HTMLVideoElement>("video");
      if (!video || !root.contains(video)) return;
      event.preventDefault();
      setActiveSrc(video.dataset.videoSrc || video.currentSrc || video.src);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const video = (event.target as Element | null)?.closest<HTMLVideoElement>("video");
      if (!video || !root.contains(video)) return;
      event.preventDefault();
      setActiveSrc(video.dataset.videoSrc || video.currentSrc || video.src);
    };

    videos.forEach((video) => {
      video.dataset.playableZoom = "true";
      video.tabIndex = 0;
      video.setAttribute("role", "button");
    });
    root.addEventListener("click", handleClick);
    root.addEventListener("keydown", handleKeyDown);

    return () => {
      root.removeEventListener("click", handleClick);
      root.removeEventListener("keydown", handleKeyDown);
      videos.forEach((video) => {
        delete video.dataset.playableZoom;
        video.removeAttribute("tabindex");
        video.removeAttribute("role");
      });
    };
  }, []);

  useEffect(() => {
    if (!activeSrc) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveSrc(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeSrc]);

  if (!activeSrc) return null;

  return (
    <div className="architectureLightbox playableClipLightbox" role="dialog" aria-modal="true" aria-label="Playable 广告视觉变体放大预览" data-copy-editor>
      <button className="architectureLightboxBackdrop" type="button" aria-label="关闭放大预览" onClick={() => setActiveSrc(null)} />
      <figure>
        <button type="button" aria-label="关闭放大预览" onClick={() => setActiveSrc(null)}>×</button>
        <PauseWhenHiddenVideo src={activeSrc} autoPlay loop muted playsInline controls loadImmediately noHoverStage ariaLabel="Playable 广告视觉变体放大预览" />
      </figure>
    </div>
  );
}
