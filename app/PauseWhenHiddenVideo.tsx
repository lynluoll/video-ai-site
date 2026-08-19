"use client";

import { useCallback, useEffect, useRef, useState, type VideoHTMLAttributes } from "react";
import { createPortal } from "react-dom";

type PauseWhenHiddenVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "poster" | "aria-label"> & {
  src: string;
  poster?: string;
  ariaLabel: string;
  loadImmediately?: boolean;
  /* Backgrounds and clips that already open in their own lightbox skip the
     hover stage — nothing to enlarge. */
  noHoverStage?: boolean;
};

/* Hovering a clip for a beat lifts it onto a full-viewport stage. The native
   Fullscreen API needs a real user gesture (a hover is not one), so the stage
   is an in-page overlay; it leaves on pointer-out, Esc or a click. */
const HOVER_INTENT_MS = 2000;

export default function PauseWhenHiddenVideo({
  src,
  poster,
  ariaLabel,
  autoPlay,
  loadImmediately = false,
  preload,
  noHoverStage = false,
  ...videoProps
}: PauseWhenHiddenVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLVideoElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const [shouldLoad, setShouldLoad] = useState(loadImmediately);
  const [staged, setStaged] = useState(false);

  const stageEnabled = !noHoverStage && videoProps["aria-hidden"] !== true && videoProps["aria-hidden"] !== "true";

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

  const closeStage = useCallback(() => {
    window.clearTimeout(hoverTimer.current);
    setStaged(false);
  }, []);

  useEffect(() => {
    if (!staged) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeStage();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [staged, closeStage]);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  return (
    <>
      <video
        ref={videoRef}
        {...videoProps}
        src={shouldLoad ? src : undefined}
        data-video-src={src}
        poster={poster}
        autoPlay={autoPlay}
        preload={shouldLoad ? (preload ?? (loadImmediately ? "auto" : "metadata")) : "none"}
        onPointerEnter={(e) => {
          setShouldLoad(true);
          if (!stageEnabled || e.pointerType === "touch") return;
          window.clearTimeout(hoverTimer.current);
          hoverTimer.current = window.setTimeout(() => setStaged(true), HOVER_INTENT_MS);
        }}
        onPointerLeave={() => window.clearTimeout(hoverTimer.current)}
        onFocus={() => setShouldLoad(true)}
        aria-label={ariaLabel}
      />

      {staged && typeof document !== "undefined"
        ? createPortal(
            <div className="videoHoverStage" role="dialog" aria-label={ariaLabel} onPointerLeave={closeStage} onClick={closeStage}>
              <video
                ref={stageRef}
                className="videoHoverStageFilm"
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="auto"
                aria-label={ariaLabel}
                onLoadedMetadata={(e) => {
                  const source = videoRef.current;
                  if (source && Number.isFinite(source.currentTime)) e.currentTarget.currentTime = source.currentTime;
                }}
                onClick={(e) => e.stopPropagation()}
              />
              <button type="button" className="videoHoverStageClose" onClick={closeStage} aria-label="Close">
                &times;
              </button>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
