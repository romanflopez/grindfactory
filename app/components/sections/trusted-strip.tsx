import { products } from "@/app/lib/products";

export function TrustedStrip() {
  return (
    <section
      aria-label="Productos en producción"
      className="relative border-y border-white/[0.06] bg-white/[0.015]"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 shrink-0">
          Productos en producción
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {products.map((p) => (
            <li key={p.slug} className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
              />
              <a
                href={p.url !== "#" ? p.url : `/projects/${p.slug}`}
                target={p.url !== "#" ? "_blank" : undefined}
                rel={p.url !== "#" ? "noopener noreferrer" : undefined}
                className="font-display text-base md:text-lg font-semibold text-white/80 hover:text-white transition-colors"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
