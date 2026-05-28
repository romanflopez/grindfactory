import { services } from "@/app/lib/author";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="gf-services"
      className="snap-section relative overflow-hidden flex flex-col"
    >
      <div className="aurora-mono" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 md:px-12 py-16 md:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
          <header className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
                01 / 04
              </span>
              <span className="h-px w-10 md:w-16 bg-white/15" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
                Servicios
              </span>
            </div>
            <h2
              id="gf-services"
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-balance"
            >
              ¿En qué te puedo ayudar?
            </h2>
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl">
              Tres formas de trabajar juntos. Tarifa por proyecto o retainer mensual. USD para clientes fuera de Argentina.
            </p>
          </header>

          <ul className="grid md:grid-cols-3 gap-4 md:gap-5">
            {services.map((s, i) => (
              <li
                key={s.id}
                className="relative flex flex-col gap-4 p-6 md:p-7 rounded-2xl glass-card hover:bg-white/[0.03] transition-colors group"
                style={{ ["--accent" as never]: s.accent }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold"
                    style={{ color: s.accent }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: s.accent, boxShadow: `0 0 10px ${s.accent}` }}
                  />
                </div>

                <h3 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] leading-[1.05]">
                  {s.title}
                </h3>

                <p className="text-white/65 text-sm leading-relaxed">{s.pitch}</p>

                <ul className="flex flex-col gap-1.5 mt-1">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-white/55">
                      <span
                        className="h-1 w-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: s.accent }}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-white/8">
                  <p className="text-[11px] text-white/45 font-mono">
                    <span className="text-white/30 uppercase tracking-[0.2em]">Para </span>
                    {s.idealFor}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
            >
              ¿Tu caso no está acá? Hablemos
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
