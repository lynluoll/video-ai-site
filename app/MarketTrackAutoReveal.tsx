"use client";

import { useEffect, useRef } from "react";

export default function MarketTrackAutoReveal() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const figure = input?.closest<HTMLElement>(".marketFlowFigure");
    const marketPage = figure?.closest<HTMLElement>(".marketFlowPage");
    if (!input || !figure || !marketPage) return;

    let hasPlayed = input.checked;
    let touchStartY = 0;
    let boundaryArmed = false;
    let armedScrollY = 0;
    let lastObservedScrollY = window.scrollY;
    let armTimer = 0;
    let lockedScrollY = 0;
    let unlockTimer = 0;
    let previousBodyStyle: {
      position: string;
      top: string;
      left: string;
      right: string;
      width: string;
    } | null = null;

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const preventScrollKeys = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
        event.preventDefault();
      }
    };

    const unlockPage = () => {
      if (!previousBodyStyle) return;

      window.clearTimeout(unlockTimer);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("keydown", preventScrollKeys);
      document.documentElement.classList.remove("marketTrackTransitionLock");
      delete figure.dataset.trackTransition;
      figure.removeAttribute("aria-busy");

      const bodyStyle = document.body.style;
      bodyStyle.position = previousBodyStyle.position;
      bodyStyle.top = previousBodyStyle.top;
      bodyStyle.left = previousBodyStyle.left;
      bodyStyle.right = previousBodyStyle.right;
      bodyStyle.width = previousBodyStyle.width;
      previousBodyStyle = null;

      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, lockedScrollY);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };

    const focusMarketPage = () => {
      const pageTop = marketPage.getBoundingClientRect().top + window.scrollY;
      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, pageTop);
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };

    const lockPageForTransition = () => {
      if (previousBodyStyle) return;

      lockedScrollY = window.scrollY;
      const bodyStyle = document.body.style;
      previousBodyStyle = {
        position: bodyStyle.position,
        top: bodyStyle.top,
        left: bodyStyle.left,
        right: bodyStyle.right,
        width: bodyStyle.width,
      };

      document.documentElement.classList.add("marketTrackTransitionLock");
      figure.dataset.trackTransition = "running";
      figure.setAttribute("aria-busy", "true");
      bodyStyle.position = "fixed";
      bodyStyle.top = `-${lockedScrollY}px`;
      bodyStyle.left = "0";
      bodyStyle.right = "0";
      bodyStyle.width = "100%";

      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("keydown", preventScrollKeys);

      const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 780;
      unlockTimer = window.setTimeout(unlockPage, duration);
    };

    const markAsPlayed = () => {
      hasPlayed = true;
      focusMarketPage();
      lockPageForTransition();
    };

    const isAtExitBoundary = () => {
      const bounds = marketPage.getBoundingClientRect();
      const pageTopHasReachedViewport = bounds.top <= 20;
      const pageBottomHasEnteredViewport = bounds.bottom <= window.innerHeight + 2;
      const pageIsStillTheFocus = bounds.bottom >= window.innerHeight - 260;
      return pageTopHasReachedViewport && pageBottomHasEnteredViewport && pageIsStillTheFocus;
    };

    const revealTracks = () => {
      if (hasPlayed) return;
      input.checked = true;
      input.dataset.autoRevealed = "true";
      input.dispatchEvent(new Event("change", { bubbles: true }));
    };

    const revealOnWheel = (event: WheelEvent) => {
      if (event.deltaY <= 0 || hasPlayed || !isAtExitBoundary()) return;
      event.preventDefault();
      revealTracks();
    };

    const rememberTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const revealOnTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY ?? touchStartY;
      const isSwipingDownThePage = touchStartY - currentY > 10;
      if (!isSwipingDownThePage || hasPlayed || !isAtExitBoundary()) return;
      event.preventDefault();
      revealTracks();
    };

    const revealOnKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowDown", "PageDown", "End", " "].includes(event.key) || hasPlayed || !isAtExitBoundary()) return;
      event.preventDefault();
      revealTracks();
    };

    const armAtSettledPageBottom = () => {
      const currentScrollY = window.scrollY;
      const isMovingDown = currentScrollY > lastObservedScrollY + 1;
      lastObservedScrollY = currentScrollY;

      if (hasPlayed || !isAtExitBoundary()) {
        boundaryArmed = false;
        window.clearTimeout(armTimer);
        return;
      }

      if (boundaryArmed && isMovingDown && currentScrollY > armedScrollY + 1) {
        revealTracks();
        return;
      }

      window.clearTimeout(armTimer);
      armTimer = window.setTimeout(() => {
        if (hasPlayed || !isAtExitBoundary()) return;
        boundaryArmed = true;
        armedScrollY = window.scrollY;
      }, 140);
    };

    input.addEventListener("change", markAsPlayed);
    window.addEventListener("wheel", revealOnWheel, { passive: false });
    window.addEventListener("touchstart", rememberTouchStart, { passive: true });
    window.addEventListener("touchmove", revealOnTouchMove, { passive: false });
    window.addEventListener("scroll", armAtSettledPageBottom, { passive: true });
    document.addEventListener("keydown", revealOnKeyDown);

    return () => {
      input.removeEventListener("change", markAsPlayed);
      window.removeEventListener("wheel", revealOnWheel);
      window.removeEventListener("touchstart", rememberTouchStart);
      window.removeEventListener("touchmove", revealOnTouchMove);
      window.removeEventListener("scroll", armAtSettledPageBottom);
      document.removeEventListener("keydown", revealOnKeyDown);
      window.clearTimeout(armTimer);
      unlockPage();
    };
  }, []);

  return <input ref={inputRef} className="segmentControl" id="video-segment-mode" type="checkbox" aria-label="查看或收起视频广告三赛道" />;
}
