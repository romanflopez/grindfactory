import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/lib/products";

type Props = {
  product: Product;
  index: number;
  total: number;
};

export function ProductSection({ product: p, index, total }: Props) {
  const num = String(index + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  const headingId = `gf-app-${p.slug}`;

  return (
    <section
      id={p.slug}
      aria-labelledby={headingId}
      className="snap-section relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 70% 20%, ${p.glow}, transparent 60%), radial-gradient(ellipse 60% 45% at 20% 80%, ${p.glow.replace("0.35", "0.25")}, transparent 60%), ${p.tint}`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="absolute top-[8vh] right-[4vw] md:top-[10vh] md:right-[4vw] font-display font-bold text-[20vw] md:text-[14vw] leading-none select-none pointer-events-none tabular"
        style={{
          color: "transparent",
          WebkitTextStroke: `1px ${p.accent}25`,
          opacity: 0.6,
        }}
      >
        {num}
      </div>

      <div className="absolute top-[10vh] md:top-[11vh] left-5 md:left-12 flex items-center gap-3 z-10">
        <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
          {num} / {tot}
        </span>
        <span className="h-px w-10 md:w-16 bg-white/15" />
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase" style={{ color: p.accent }}>
          {p.category}
        </span>
      </div>

      <div className="relative z-10 h-full flex flex-col xl:flex-row items-center justify-center px-5 md:px-12 lg:px-20 pt-24 md:pt-28 pb-20 md:pb-16 gap-6 md:gap-12">
        <div className="flex-1 max-w-xl flex flex-col justify-center order-2 xl:order-1 w-full">
          <div className="flex items-center gap-2 mb-3 md:mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: p.status === "live" ? `${p.accent}1a` : "rgba(255,255,255,0.06)",
                color: p.status === "live" ? p.accent : "rgba(255,255,255,0.45)",
                border: `1px solid ${p.status === "live" ? `${p.accent}40` : "rgba(255,255,255,0.1)"}`,
              }}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${p.status === "live" ? "pulse-dot" : ""}`}
                style={{ backgroundColor: p.status === "live" ? p.accent : "rgba(255,255,255,0.3)", color: p.accent }}
              />
              {p.status === "live" ? "Live" : "Próximamente"}
            </span>
          </div>

          <h2
            id={headingId}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] mb-3 md:mb-5 text-balance"
          >
            {p.name}
          </h2>

          <p
            className="font-display font-medium text-lg md:text-2xl leading-[1.25] mb-3 md:mb-4 text-balance tracking-[-0.01em]"
            style={{ color: p.accent }}
          >
            {p.tagline}
          </p>

          <p className="text-white/55 text-sm md:text-base mb-5 md:mb-7 leading-relaxed max-w-md hidden sm:block">
            {p.description}
          </p>

          <ul className="grid grid-cols-2 gap-2 md:gap-2.5 mb-5 md:mb-8 max-w-md">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs md:text-sm text-white/65">
                <span
                  className="h-1 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${p.slug}`}
              className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/15 transition"
            >
              Caso de estudio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            {p.url !== "#" ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm transition"
                style={{ backgroundColor: p.accent, color: "#0a0a10" }}
              >
                Visitar sitio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
            ) : p.device === "phone" ? (
              <span
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm border"
                style={{
                  color: p.accent,
                  backgroundColor: `${p.accent}12`,
                  borderColor: `${p.accent}40`,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17 19H7V5h10m0-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                </svg>
                {p.status === "live" ? "Disponible en iOS & Android" : "Próximamente en tiendas"}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm bg-white/5 text-white/50 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                En construcción
              </span>
            )}
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center justify-center order-1 xl:order-2 float">
          {p.device === "phone" ? (
            <div
              className="relative rounded-[32px] md:rounded-[44px] border-[4px] md:border-[6px] border-white/15 bg-black/50 p-1.5 md:p-2 mockup-shadow"
              style={{ boxShadow: `0 30px 80px ${p.glow}` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-4 md:h-6 bg-black rounded-b-xl md:rounded-b-2xl z-10" />
              <div className="rounded-[26px] md:rounded-[36px] overflow-hidden">
                <Image
                  src={p.screenshot}
                  alt={`${p.name} screenshot`}
                  width={320}
                  height={680}
                  priority={index === 0}
                  className="h-[32vh] md:h-[62vh] w-auto object-contain block"
                />
              </div>
              <div
                className="absolute inset-0 rounded-[32px] md:rounded-[44px] pointer-events-none"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, transparent 30%)" }}
              />
            </div>
          ) : (
            <div
              className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 w-full max-w-[320px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mockup-shadow"
              style={{ boxShadow: `0 30px 80px ${p.glow}` }}
            >
              <div className="bg-white/5 backdrop-blur border-b border-white/10 px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex-1 mx-2 md:mx-3 bg-white/5 rounded-md px-3 py-1 text-[10px] md:text-[11px] text-white/35 truncate font-mono">
                  {p.url !== "#" ? p.url.replace("https://", "") : `${p.slug}.grindfactory.app`}
                </div>
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: p.accent, boxShadow: `0 0 10px ${p.accent}` }}
                />
              </div>
              <Image
                src={p.screenshot}
                alt={`${p.name} screenshot`}
                width={1200}
                height={800}
                priority={index === 0}
                className="w-full h-auto object-contain block bg-black"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, transparent 25%)" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
