import { services } from "@/app/lib/author";

export function Services() {
  return (
    <section id="services" aria-labelledby="gf-services" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">01 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Servicios</span>
          </div>
          <h2
            id="gf-services"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            En qué te puedo ayudar.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
            Tres tipos de proyecto. Tarifa cerrada en USD, sin sorpresas. Si tu caso no encaja, escribime igual.
          </p>
        </header>

        <ul className="grid md:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <li key={s.id} className="card flex flex-col gap-5 p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold text-white/35 tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/45">
                  {s.duration}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-[1.75rem] tracking-[-0.02em] leading-[1.05]">
                {s.title}
              </h3>

              <p className="text-white/60 text-sm leading-relaxed">{s.pitch}</p>

              <ul className="flex flex-col gap-1.5 mt-1">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-xs text-white/55">
                    <span className="mt-1.5 h-1 w-1 rounded-full flex-shrink-0 bg-emerald-400" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 border-t border-white/8 flex items-end justify-between gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Desde
                  </span>
                  <span className="font-display font-bold text-2xl md:text-3xl tabular">
                    {s.priceFrom}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-medium text-white/65 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  Cotizar
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>

              <p className="text-[11px] text-white/40 font-mono leading-relaxed">
                <span className="text-white/30 uppercase tracking-[0.2em]">Ideal </span>
                {s.idealFor}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
