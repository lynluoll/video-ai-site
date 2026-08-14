"use client";

import { useEffect, useRef } from "react";

type PauseWhenHiddenVideoProps = {
  src: string;
  poster: string;
  ariaLabel: string;
  className?: string;
};

export default function PauseWhenHiddenVideo({ src, poster, ariaLabel, className }: PauseWhenHiddenVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) video.pause();
      },
      { threshold: 0.28 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
    />
  );
}
