"use client";

import { useEffect, useState } from "react";

type BrandCapabilityImageProps = {
  src: string;
  alt: string;
};

export default function BrandCapabilityImage({ src, alt }: BrandCapabilityImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button className="brandCapabilityFrame" type="button" onClick={() => setOpen(true)} aria-label={`Zoom: ${alt}`}>
        <img src={src} alt={alt} />
      </button>
      {open ? (
        <div className="brandCapabilityLightbox" role="dialog" aria-modal="true" aria-label={alt}>
          <button className="brandCapabilityLightboxBackdrop" type="button" onClick={() => setOpen(false)} aria-label="Close image" />
          <figure>
            <img src={src} alt={alt} />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close image">×</button>
          </figure>
        </div>
      ) : null}
    </>
  );
}
