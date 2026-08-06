"use client";

import { useEffect, useRef } from "react";
import { ownProducts } from "@/app/lib/grindfactory";

const WORK_ITEMS = [
  {
    num: "01",
    title: "Grovly",
    tags: ["SaaS", "B2B"],
    year: "2024",
    url: "https://grovly.grindfactory.app",
    img: "/assets/portfolio-grovly.png",
  },
  {
    num: "02",
    title: "Vera",
    tags: ["Bot IA", "WhatsApp"],
    year: "2025",
    url: "https://turnia-mocha.vercel.app",
    img: "/assets/portfolio-vera.png",
  },
  {
    num: "03",
    title: "regateaTuMulta",
    tags: ["LegalTech", "IA"],
    year: "2025",
    url: "https://regatea-tu-multa.grindfactory.app",
    img: "/assets/portfolio-regatea.png",
  },
];

export function Portfolio() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cursorEl = cursorRef.current;
    const cursorImg = cursorImgRef.current;
    if (!cursorEl || !cursorImg) return;

    const items = document.querySelectorAll<HTMLAnchorElement>(".work-item[data-img]");

    const onMove = (e: MouseEvent) => {
      const x = e.clientX + 24;
      const y = e.clientY - 120;
      const clampedX = Math.min(x, window.innerWidth - 340);
      const clampedY = Math.max(Math.min(y, window.innerHeight - 230), 10);
      cursorEl.style.left = clampedX + "px";
      cursorEl.style.top = clampedY + "px";
    };

    const handlers: Array<{ el: Element; enter: () => void; leave: () => void }> = [];

    items.forEach((item) => {
      const enter = () => {
        const src = item.dataset.img ?? "";
        cursorImg.src = src;
        cursorEl.classList.add("visible");
        document.addEventListener("mousemove", onMove);
      };
      const leave = () => {
        cursorEl.classList.remove("visible");
        document.removeEventListener("mousemove", onMove);
      };
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      handlers.push({ el: item, enter, leave });
    });

    return () => {
      handlers.forEach(({ el, enter, leave }) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      {/* Cursor floating image */}
      <div ref={cursorRef} id="cursor-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={cursorImgRef} src="" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>

      <section id="portfolio" style={{ padding: "120px 48px" }}>
        <div className="section-header rv" style={{ marginBottom: 64 }}>
          <p className="section-label">[02] Portfolio / 2024 — 2026</p>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.1,
              marginTop: 12,
            }}
          >
            Lo que{" "}
            <span className="serif-italic">fabricamos.</span>
          </h2>
        </div>

        <div className="work-list">
          {WORK_ITEMS.map((item) => (
            <a
              key={item.num}
              className="work-item rv"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-img={item.img}
            >
              <span className="work-num">{item.num}</span>
              <span className="work-title">{item.title}</span>
              <span className="work-tags">
                {item.tags.map((t) => (
                  <span key={t} className="work-tag">{t}</span>
                ))}
              </span>
              <span className="work-year">{item.year}</span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
