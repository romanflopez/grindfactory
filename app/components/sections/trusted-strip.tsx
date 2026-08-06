"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 10, suffix: "+", label: "Años\nshippeando" },
  { value: 3, suffix: "", label: "Productos propios\nen producción" },
];

const STACK_ITEMS = ["React", "Next.js", "TypeScript", "Supabase", "Vercel", "Anthropic SDK"];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 40;
          const step = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, 1200 / steps);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular">
      {count}
      {suffix}
    </span>
  );
}

export function CredibilityBar() {
  return (
    <section
      aria-label="Credenciales"
      className="relative border-y border-white/[0.07]"
      style={{ background: "#161618" }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-0 sm:divide-x sm:divide-white/[0.07]">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-1.5 sm:pr-14 first:pl-0 last:pr-0 last:pl-14">
              <div
                className="font-display text-[3.5rem] md:text-[4rem] leading-none"
                style={{ color: "#F97316" }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/40 whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}

          {/* Stack pill list — right side */}
          <div className="flex-1 sm:pl-14 flex flex-col gap-3">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/25">
              Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {STACK_ITEMS.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[0.72rem] text-white/50 py-0.5 px-2 border border-white/[0.08] rounded-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
