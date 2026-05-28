import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/lib/products";

export function Work() {
  return (
    <section
      id="work"
      aria-labelledby="gf-work"
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
                03 / 04
              </span>
              <span className="h-px w-10 md:w-16 bg-white/15" />
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase text-emerald-400">
                Featured work
              </span>
            </div>
            <h2
              id="gf-work"
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-balance"
            >
              Trabajos seleccionados.
            </h2>
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl">
              Side projects que construí end-to-end bajo{" "}
              <a
                href="https://grindfactory.app"
                className="underline decoration-white/20 hover:decoration-white/60 text-white/75"
              >
                Grind Factory
              </a>
              . Cada uno resuelve un problema real en un mercado específico. Sirve como prueba de craft Sr.
            </p>
          </header>

          <ul className="grid md:grid-cols-2 gap-4 md:gap-5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative flex flex-col gap-3 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${p.glow.replace("0.35", "0.18")}, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />

                  <div
                    className="relative aspect-[16/10] overflow-hidden bg-black"
                    style={{ background: p.tint }}
                  >
                    <Image
                      src={p.screenshot}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="relative flex flex-col gap-2.5 px-5 pb-5 pt-2">
                    <div className="flex items-center gap-3">
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

                    <h3 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em] leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed">{p.tagline}</p>

                    <div className="flex items-center justify-between mt-2 pt-3 border-t border-white/8">
                      <span className="text-xs text-white/55 group-hover:text-white transition-colors">
                        Caso de estudio →
                      </span>
                      {p.url !== "#" && (
                        <span className="font-mono text-[10px] text-white/35 tabular truncate max-w-[60%]">
                          {p.url.replace("https://", "")}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
