"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const check = () => {
      if (v.duration && v.currentTime >= v.duration * 0.82) {
        v.currentTime = 0;
      }
    };
    v.addEventListener("timeupdate", check);
    return () => v.removeEventListener("timeupdate", check);
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover",
        zIndex: 0,
      }}
    >
      <source src="/assets/hero_bg.mp4" type="video/mp4" />
    </video>
  );
}
