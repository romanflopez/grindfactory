"use client";

import { useEffect, useRef, useState } from "react";
import { stackChips } from "@/app/lib/grindfactory";

export function Stack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [chipsVisible, setChipsVisible] = useState<boolean[]>(
    Array(stackChips.length).fill(false)
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          stackChips.forEach((_, i) => {
            setTimeout(() => {
              setChipsVisible((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, 120 + i * 55);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="gf-stack"
      className="relative py-20 md:py-28 border-t border-white/[0.06] overflow-hidden"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col items-center text-center gap-10 md:gap-14">

        {/* Headline */}
        <div
          className="flex flex-col gap-3 transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
          }}
        >
          <span className="eyebrow">[ Stack & Capacidades ]</span>
          <h2
            id="gf-stack"
            className="font-display"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)", lineHeight: 0.92 }}
          >
            Las herramientas<br />
            <span style={{ color: "#F97316" }}>con las que fabricamos.</span>
          </h2>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
          {stackChips.map((chip, i) => (
            <span
              key={chip}
              className="tech-chip"
              style={{
                opacity: chipsVisible[i] ? 1 : 0,
                transform: chipsVisible[i] ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
