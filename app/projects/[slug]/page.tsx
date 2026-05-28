import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, productBySlug } from "@/app/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};

  const title = `${p.name} — Caso de estudio · Grind Factory`;
  return {
    title,
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title,
      description: p.description,
      images: [{ url: p.screenshot }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: p.description,
      images: [p.screenshot],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return notFound();

  return (
    <main className="min-h-dvh relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 70% 0%, ${p.glow}, transparent 60%), ${p.tint}`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <Link
          href="/#hire-me"
          className="inline-flex items-center gap-2 text-xs text-white/55 hover:text-white mb-8 font-mono uppercase tracking-[0.2em]"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          grindfactory.app
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full"
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
          <span className="font-mono uppercase tracking-[0.2em] text-[10px]" style={{ color: p.accent }}>
            {p.category}
          </span>
        </div>

        <h1 className="font-display font-bold text-5xl md:text-7xl tracking-[-0.035em] leading-[0.95] mb-3">
          {p.name}
        </h1>
        <p className="font-display text-xl md:text-2xl mb-8" style={{ color: p.accent }}>
          {p.tagline}
        </p>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-10 mockup-shadow">
          <Image
            src={p.screenshot}
            alt={`${p.name} screenshot`}
            width={1600}
            height={1000}
            priority
            className="w-full h-auto block bg-black"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          <Meta label="Rol" value={p.caseStudy.role} />
          <Meta label="Estado" value={p.status === "live" ? "En producción" : "En desarrollo"} />
          {p.url !== "#" && <Meta label="URL" value={p.url.replace("https://", "")} href={p.url} />}
        </div>

        <Block title="El problema">
          <p>{p.caseStudy.problem}</p>
        </Block>

        <Block title="Stack">
          <ul className="flex flex-wrap gap-2">
            {p.caseStudy.stack.map((s) => (
              <li
                key={s}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-white/80"
              >
                {s}
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Decisiones clave">
          <ul className="flex flex-col gap-2">
            {p.caseStudy.decisions.map((d) => (
              <li key={d} className="flex gap-3 text-white/75 leading-relaxed">
                <span
                  className="mt-2.5 h-1 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Resultado">
          <p>{p.caseStudy.outcome}</p>
        </Block>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10 mt-10">
          {p.url !== "#" && (
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm"
              style={{ backgroundColor: p.accent, color: "#0a0a10" }}
            >
              Visitar sitio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          )}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-white/85 hover:text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            ¿Querés algo así? Hablemos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

function Meta({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex flex-col gap-1 px-4 py-3 rounded-lg glass-card">
      <span className="font-mono uppercase tracking-[0.2em] text-[10px] text-white/40">{label}</span>
      <span className="text-sm text-white/85 truncate">{value}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="font-mono uppercase tracking-[0.25em] text-xs text-white/45 mb-3">{title}</h2>
      <div className="text-white/80 text-base leading-relaxed">{children}</div>
    </section>
  );
}
