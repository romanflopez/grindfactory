import { products } from "@/app/lib/products";
import { MatrixRain } from "@/app/components/matrix-rain";
import { ScrambledTitle } from "@/app/components/scrambled-title";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="gf-h1"
      className="snap-section relative overflow-hidden flex flex-col items-center justify-center bg-black"
    >
      <MatrixRain charCount={250} activeColor="#10b981" minSpeed={0.03} maxSpeed={0.12} />

      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-5 w-full max-w-5xl mx-auto flex flex-col items-center gap-3 md:gap-5">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
          Buenos Aires · AR
        </span>

        <ScrambledTitle
          phrases={["Hello,"]}
          className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center"
        />
        <ScrambledTitle
          phrases={["grindfactory.app"]}
          className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider text-center"
        />

        <h1 id="gf-h1" className="sr-only">
          Grind Factory — Apps propias. Nichos raros. Una fábrica de apps independientes desde Buenos Aires.
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mt-4 md:mt-6 max-w-3xl">
          {products.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="group inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium text-white/70 hover:text-white transition-colors backdrop-blur-md"
              style={{
                backgroundColor: `${p.accent}10`,
                border: `1px solid ${p.accent}30`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: p.accent, boxShadow: `0 0 6px ${p.accent}` }}
              />
              {p.name}
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full text-xs font-medium text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
        >
          ¿Buscás un Sr Frontend para tu proyecto? →
        </a>
      </div>

      <a
        href="#grovly"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Scroll"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-mono">Scroll</span>
        <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
