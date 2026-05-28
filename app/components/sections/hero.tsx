import { author } from "@/app/lib/author";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="gf-h1"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28"
    >
      <div className="absolute inset-0 bg-grid-subtle" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
            {author.available ? "Disponible para nuevos proyectos" : "Agenda completa"}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono uppercase tracking-[0.2em] text-white/55">
            {author.location} · {author.timezone}
          </span>
        </div>

        <h1
          id="gf-h1"
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.04em] max-w-4xl text-balance"
        >
          {author.name}.<br />
          <span className="text-white/45">{author.role}.</span>
        </h1>

        <p className="font-display text-lg md:text-2xl lg:text-3xl leading-[1.3] tracking-[-0.015em] text-white/75 max-w-3xl text-balance">
          {author.headline}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          <a href="#contact" className="btn-primary text-sm md:text-base px-6 py-3.5 md:py-4">
            Contratame
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#work" className="btn-ghost text-sm md:text-base px-5 py-3.5 md:py-4">
            Ver trabajos
          </a>
        </div>

        <p className="text-xs text-white/40 font-mono mt-1">
          {author.availabilityNote}
        </p>
      </div>
    </section>
  );
}
