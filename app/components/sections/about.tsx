import Image from "next/image";
import { author } from "@/app/lib/author";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="gf-about"
      className="snap-section relative overflow-hidden flex flex-col"
    >
      <div className="aurora-mono" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-12 py-16 md:py-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
          <header className="flex flex-col gap-3 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
                02 / 04
              </span>
              <span className="h-px w-10 md:w-16 bg-white/15" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
                Sobre mí
              </span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 md:gap-12 items-start">
            <div className="flex flex-col gap-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-violet-500/15 border border-white/10">
                {author.photo ? (
                  <Image
                    src={author.photo}
                    alt={author.name}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 1024px) 280px, 100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-8xl md:text-9xl text-white/85 tracking-[-0.05em]">
                      {author.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                    {author.location} · {author.timezone}
                  </span>
                </div>
              </div>

              <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5">
                {author.highlights.map((h) => (
                  <div key={h.label} className="flex flex-col items-center justify-center gap-1 bg-black/30 px-2 py-4">
                    <dd className="font-display font-bold text-xl tabular text-white">{h.years}</dd>
                    <dt className="font-mono uppercase tracking-[0.15em] text-[9px] text-white/45 text-center px-1">
                      {h.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex flex-col gap-6">
              <h2
                id="gf-about"
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.035em] text-balance"
              >
                {author.name}.<br />
                <span className="text-white/45">{author.role}.</span>
              </h2>

              <div className="flex flex-col gap-4 text-white/65 text-base md:text-lg leading-relaxed max-w-2xl">
                {author.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono uppercase tracking-[0.25em] text-[10px] text-white/40">
                    Stack primario
                  </span>
                  <ul className="flex flex-col gap-2">
                    {author.skills.primary.map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm"
                      >
                        <span className="text-white/85">{s.name}</span>
                        <span className="font-mono text-[10px] text-white/45 tabular">{s.years}y</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2.5">
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

              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href={author.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href={author.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href={author.links.workana}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white/75 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
                >
                  Workana →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
