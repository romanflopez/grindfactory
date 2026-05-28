import { author } from "@/app/lib/author";

export function HireMe() {
  return (
    <section
      id="hire-me"
      aria-labelledby="gf-hire"
      className="snap-section relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="aurora" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-12 flex flex-col items-center text-center gap-6 md:gap-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
            08 / 09
          </span>
          <span className="h-px w-10 md:w-16 bg-white/15" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
            Freelance
          </span>
        </div>

        {author.hireMe.available && (
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-emerald-300/85">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
            {author.hireMe.headline}
          </span>
        )}

        <h2
          id="gf-hire"
          className="font-display font-bold text-balance text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] max-w-3xl"
        >
          ¿Necesitás un Sr Frontend que ya lo hizo? <span className="text-white/45">Hablemos.</span>
        </h2>

        <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-2xl text-balance">
          {author.hireMe.description}
        </p>

        <p className="font-mono text-[11px] md:text-xs text-white/40 max-w-xl">
          {author.hireMe.rate}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 rounded-full bg-white text-black font-semibold text-base md:text-lg"
          >
            Iniciar conversación
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <a
            href={author.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={author.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
