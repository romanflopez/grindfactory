'use client';

import { clients } from "@/app/lib/clients";

export function Websites() {
  return (
    <section
      id="websites"
      aria-labelledby="gf-websites"
      className="relative py-20 md:py-28 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="section-label">
            <span className="section-label-num">04 / 05</span>
            <span className="section-label-bar" />
            <span className="section-label-text">Sitios web de clientes</span>
          </div>
          <h2
            id="gf-websites"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-[-0.035em] text-balance"
          >
            Diseño + entrega. Así se ve el proceso completo.
          </h2>
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
            Para cada cliente: brief real, múltiples propuestas de diseño, deploy en Vercel.
            El cliente elige la dirección, el sitio queda listo.
          </p>
        </header>

        <ul className="flex flex-col gap-12 md:gap-16">
          {clients.map((c) => (
            <li key={c.slug} className="flex flex-col gap-6">
              {/* Client header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <h3 className="font-display font-bold text-2xl md:text-3xl tracking-[-0.02em]">
                  {c.name}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35 border border-white/10 rounded-full px-2.5 py-1">
                    {c.industry}
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] font-semibold rounded-full px-2.5 py-1"
                    style={{
                      backgroundColor:
                        c.status === "deployed"
                          ? "rgba(16,185,129,0.12)"
                          : "rgba(245,158,11,0.12)",
                      color:
                        c.status === "deployed" ? "#10b981" : "#f59e0b",
                      border: `1px solid ${c.status === "deployed" ? "rgba(16,185,129,0.25)" : "rgba(245,158,11,0.25)"}`,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          c.status === "deployed" ? "#10b981" : "#f59e0b",
                        boxShadow: `0 0 6px ${c.status === "deployed" ? "#10b981" : "#f59e0b"}`,
                      }}
                    />
                    {c.status === "deployed" ? "Deployed" : "En propuesta"}
                  </span>
                </div>
              </div>

              <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl -mt-2">
                {c.brief}
              </p>

              {/* Proposal cards */}
              <ul
                className={`grid gap-3 ${
                  c.proposals.length === 1
                    ? "grid-cols-1 max-w-sm"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {c.proposals.map((p) => (
                  <li key={p.name}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        background: p.bg,
                        borderColor: `${p.accent}22`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${p.accent}55`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${p.accent}22`;
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold"
                          style={{ color: p.accent }}
                        >
                          {p.name}
                        </span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-30 group-hover:opacity-70 transition-opacity"
                          style={{ color: p.accent }}
                        >
                          <path d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {p.style}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>

              {c.finalUrl && (
                <a
                  href={c.finalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs px-4 py-2 self-start"
                >
                  Ver sitio en vivo
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
