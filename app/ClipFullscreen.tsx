"use client";

import { useEffect } from "react";

/* The AppLovin reels are 9:16 thumbnails a few hundred pixels tall, where the
   native control bar is too cramped to hit. The strip instead gives each clip
   one corner button for fullscreen — where the native controls are usable —
   and lets a click on the clip itself play or pause it in place. */
export default function ClipFullscreen() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".appLovinCaseBody");
    if (!root) return;

    const handleClick = (event: Event) => {
      const target = event.target as Element | null;
      if (!target) return;

      const button = target.closest<HTMLButtonElement>(".appLovinClipFs");
      if (button) {
        const video = button.parentElement?.querySelector("video");
        if (!video) return;
        event.preventDefault();
        if (document.fullscreenElement) {
          document.exitFullscreen();
          return;
        }
        video.controls = true;
        const enter = video.requestFullscreen?.bind(video)
          ?? (video as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen?.bind(video);
        enter?.();
        return;
      }

      const video = target.closest<HTMLVideoElement>(".appLovinClip video");
      if (!video || !root.contains(video)) return;
      if (video.paused) video.play().catch(() => {}); else video.pause();
    };

    const handleFullscreenChange = () => {
      if (document.fullscreenElement) return;
      root.querySelectorAll<HTMLVideoElement>(".appLovinClip video").forEach((video) => {
        video.controls = false;
      });
    };

    root.addEventListener("click", handleClick);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      root.removeEventListener("click", handleClick);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return null;
}
