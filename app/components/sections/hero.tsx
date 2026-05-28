import { author } from "@/app/lib/author";
import { ScrambledTitle } from "@/app/components/scrambled-title";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="gf-h1"
      className="snap-section relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="aurora-mono" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-12 flex flex-col items-start md:items-center gap-5 md:gap-7 text-left md:text-center">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/65">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
            {author.available ? "Disponible para proyectos" : "Agenda completa"}
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/50">
            {author.location}
          </span>
        </div>

        <ScrambledTitle
          phrases={[author.name]}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] leading-[0.9] text-white"
        />

        <h1 id="gf-h1" className="font-display text-2xl md:text-4xl lg:text-5xl tracking-[-0.03em] leading-[1.05] text-white/55 text-balance max-w-3xl">
          {author.role}.{" "}
          <span className="text-white/85">{author.headline}</span>
        </h1>

        <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl text-balance">
          {author.subheadline}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-1 md:mt-2 w-full md:justify-center">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 px-6 py-3 md:py-3.5 rounded-full bg-white text-black font-semibold text-sm md:text-base"
          >
            Contratame
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3 md:py-3.5 rounded-full text-sm md:text-base font-medium text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            Ver trabajos
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-3 md:mt-4 md:justify-center">
          {["React", "Next.js", "React Native", "TypeScript", "Angular", "Node.js"].map((s) => (
            <span
              key={s}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono text-white/60 bg-white/5 border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35 hover:text-white/80 transition-colors"
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
