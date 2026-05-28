import Image from "next/image";
import { author } from "@/app/lib/author";

export function About() {
  return (
    <section id="about" aria-labelledby="gf-about" className="relative py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">04 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Sobre mí</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-8 md:gap-14 items-start">
          <div className="flex flex-col gap-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-violet-500/20 border border-white/10">
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
                  <span className="font-display font-bold text-[8rem] md:text-[10rem] text-white/85 tracking-[-0.06em] leading-none">
                    {author.initials}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-dot" style={{ color: "#10b981" }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                  {author.location} · {author.timezone}
                </span>
              </div>
            </div>

            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]">
              {author.highlights.map((h) => (
                <div key={h.label} className="flex flex-col items-center justify-center gap-1 bg-black/30 px-2 py-4">
                  <dd className="font-display font-bold text-xl md:text-2xl tabular text-white">{h.value}</dd>
                  <dt className="font-mono uppercase tracking-[0.15em] text-[9px] text-white/45 text-center px-1">
                    {h.label}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-2">
              <a href={author.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">
                → LinkedIn
              </a>
              <a href={author.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">
                → GitHub
              </a>
              <a href={author.links.workana} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors">
                → Workana
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <h2
              id="gf-about"
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
            >
              {author.name}.<br />
              <span className="text-white/45">{author.role}.</span>
            </h2>

            <div className="flex flex-col gap-4 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
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
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/8 text-sm"
                    >
                      <span className="text-white/85">{s.name}</span>
                      <span className="font-mono text-[10px] text-white/40 tabular">{s.years}y</span>
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
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs text-white/65 bg-white/[0.03] border border-white/8"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
