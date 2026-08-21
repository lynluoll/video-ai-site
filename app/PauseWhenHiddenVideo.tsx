"use client";

import { useEffect, useRef, useState, type VideoHTMLAttributes } from "react";

type PauseWhenHiddenVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "poster" | "aria-label"> & {
  src: string;
  poster?: string;
  ariaLabel: string;
  loadImmediately?: boolean;
};

export default function PauseWhenHiddenVideo({ src, poster, ariaLabel, autoPlay, loadImmediately = false, preload, ...videoProps }: PauseWhenHiddenVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(loadImmediately);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          return;
        }

        if (!video.paused) video.pause();
      },
      { rootMargin: "420px 0px", threshold: 0.01 },
    );

    // Let the browser finish restoring scroll position or resolving a hash target
    // before deciding which high-quality sources are actually near the viewport.
    const anchorSettleDelay = !loadImmediately && window.location.hash ? 1500 : 0;
    const observeTimer = window.setTimeout(() => observer.observe(video), anchorSettleDelay);
    return () => {
      window.clearTimeout(observeTimer);
      observer.disconnect();
    };
  }, [loadImmediately]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad || !autoPlay) return;
    void video.play().catch(() => undefined);
  }, [autoPlay, shouldLoad, src]);

  return (
    <video
      ref={videoRef}
      {...videoProps}
      src={shouldLoad ? src : undefined}
      data-video-src={src}
      poster={poster}
      autoPlay={autoPlay}
      preload={shouldLoad ? (preload ?? (loadImmediately ? "auto" : "metadata")) : "none"}
      onPointerEnter={() => setShouldLoad(true)}
      onFocus={() => setShouldLoad(true)}
      aria-label={ariaLabel}
    />
  );
}
