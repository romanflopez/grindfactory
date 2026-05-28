import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products";

export function Work() {
  return (
    <section id="work" aria-labelledby="gf-work" className="relative py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">03 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Trabajos seleccionados</span>
          </div>
          <h2
            id="gf-work"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            Productos que construí end-to-end.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
            Side projects bajo Grind Factory donde fui product, frontend y deploy. Sirven como prueba de craft: si los puedo hacer para mí, los puedo hacer para vos.
          </p>
        </header>

        <ul className="flex flex-col gap-16 md:gap-24">
          {products.map((p, i) => {
            const num = String(i + 1).padStart(2, "0");
            const reverse = i % 2 === 1;
            return (
              <li key={p.slug} id={p.slug} className="scroll-mt-20">
                <div className={`grid lg:grid-cols-2 gap-8 md:gap-14 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`group block relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 ${reverse ? "lg:[direction:ltr]" : ""}`}
                    style={{ background: p.tint }}
                  >
                    <Image
                      src={p.screenshot}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(to top, ${p.glow.replace("0.35", "0.25")}, transparent 60%)`,
                      }}
                      aria-hidden="true"
                    />
                  </Link>

                  <div className={`flex flex-col gap-4 ${reverse ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 tabular">
                        {num} / {String(products.length).padStart(2, "0")}
                      </span>
                      <span className="h-px w-8 bg-white/15" />
                      <span
                        className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold"
                        style={{ color: p.accent }}
                      >
                        {p.category}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-semibold"
                        style={{ color: p.status === "live" ? p.accent : "rgba(255,255,255,0.45)" }}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${p.status === "live" ? "pulse-dot" : ""}`}
                          style={{
                            backgroundColor: p.status === "live" ? p.accent : "rgba(255,255,255,0.3)",
                            color: p.accent,
                          }}
                        />
                        {p.status === "live" ? "Live" : "Próximamente"}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-3xl md:text-5xl tracking-[-0.03em] leading-[1] text-balance">
                      {p.name}
                    </h3>
                    <p className="font-display text-lg md:text-xl text-white/70 leading-[1.3] text-balance">
                      {p.tagline}
                    </p>
                    <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-xl">
                      {p.caseStudy.problem}
                    </p>

                    <ul className="flex flex-wrap gap-1.5 mt-1">
                      {p.caseStudy.stack.map((s) => (
                        <li
                          key={s}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono text-white/65 bg-white/5 border border-white/10"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="btn-ghost text-sm px-5 py-2.5"
                      >
                        Ver caso completo
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </Link>
                      {p.url !== "#" && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono text-white/40 hover:text-white/80 transition-colors"
                        >
                          {p.url.replace("https://", "")} ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
