import { author } from "@/app/lib/author";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="gf-about"
      className="snap-section relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="aurora-mono" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-12 flex flex-col gap-8 md:gap-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
            07 / 09
          </span>
          <span className="h-px w-10 md:w-16 bg-white/15" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
            Quién está detrás
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2
              id="gf-about"
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-balance"
            >
              {author.name}.<br />
              <span className="text-white/45">{author.role}.</span>
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl text-balance">
              {author.bio}
            </p>

            <dl className="grid grid-cols-3 gap-4 mt-2">
              {[
                { k: "Años", v: `${author.yearsExperience}+` },
                { k: "Apps en el aire", v: "06" },
                { k: "Base", v: "AR" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col gap-1 border-l border-white/10 pl-4">
                  <dd className="font-display font-bold text-2xl md:text-3xl tabular text-white">
                    {s.v}
                  </dd>
                  <dt className="font-mono uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-white/45">
                    {s.k}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-3 md:min-w-[220px]">
            <span className="font-mono uppercase tracking-[0.25em] text-[10px] text-white/40">
              Stack primario
            </span>
            <ul className="flex flex-col gap-2">
              {author.skills.primary.map((s) => (
                <li
                  key={s.name}
                  className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg glass-card text-sm"
                >
                  <span className="text-white/85">{s.name}</span>
                  <span className="font-mono text-[10px] text-white/45 tabular">{s.years}y</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-mono uppercase tracking-[0.25em] text-[10px] text-white/40">
            Más herramientas
          </span>
          <div className="flex flex-wrap gap-1.5">
            {author.skills.secondary.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs text-white/70 bg-white/5 border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
