import { useEffect, useRef, useState } from 'react';
import { MatrixRain, ScrambledTitle } from './components/ui/modern-animated-hero-section';
import './index.css';

/* ==================================================================
   Data
   ================================================================== */

type Product = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  url: string;
  status: 'live' | 'coming';
  device: 'desktop' | 'phone';
  accent: string;
  glow: string;
  tint: string;
  screenshot: string;
  category: string;
};

const products: Product[] = [
  {
    name: 'Grovly',
    tagline: 'El sistema operativo de tu club cannábico.',
    description:
      'Socios, inventario, dispensario, turnos, catálogo online, REPROCANN y reportes. Todo en un solo lugar.',
    features: ['Gestión de socios', 'Inventario & dispensario', 'Catálogo online', 'Reportes & REPROCANN'],
    url: 'https://grovly.grindfactory.app',
    status: 'live',
    device: 'desktop',
    accent: '#10b981',
    glow: 'rgba(16, 185, 129, 0.35)',
    tint: 'rgba(16, 185, 129, 0.08)',
    screenshot: '/screens/grovly.jpg',
    category: 'SaaS · B2B',
  },
  {
    name: 'Nowly',
    tagline: 'Tu agenda te dice qué paciente viene ahora.',
    description:
      'Turnos, pacientes, huecos libres y recordatorios por WhatsApp. Sin grillas, sin scroll infinito.',
    features: ['Agenda inteligente', 'Gestión de pacientes', 'Huecos libres', 'Recordatorios WhatsApp'],
    url: 'https://nowly.grindfactory.app',
    status: 'live',
    device: 'desktop',
    accent: '#14b8a6',
    glow: 'rgba(20, 184, 166, 0.35)',
    tint: 'rgba(20, 184, 166, 0.08)',
    screenshot: '/screens/nowly.jpg',
    category: 'SaaS · Salud',
  },
  {
    name: 'Licencia Argentina',
    tagline: 'Aprobá el examen de conducir a la primera.',
    description:
      'Simulacros reales, señales viales y práctica ilimitada. 517 preguntas actualizadas.',
    features: ['517 preguntas', 'Simulacros reales', 'Señales viales', 'Práctica ilimitada'],
    url: '#',
    status: 'live',
    device: 'phone',
    accent: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.35)',
    tint: 'rgba(59, 130, 246, 0.08)',
    screenshot: '/screens/licencia-ar.png',
    category: 'Mobile · Education',
  },
  {
    name: 'Licencia Náutica',
    tagline: 'Navegá con confianza desde el día uno.',
    description:
      'Preparación completa para el examen de timonel y patrones. Teoría, reglamentación y señales.',
    features: ['Examen de timonel', 'Teoría completa', 'Reglamentación', 'Señales náuticas'],
    url: '#',
    status: 'coming',
    device: 'phone',
    accent: '#0ea5e9',
    glow: 'rgba(14, 165, 233, 0.35)',
    tint: 'rgba(14, 165, 233, 0.08)',
    screenshot: '/screens/licencia-nautica.png',
    category: 'Mobile · Education',
  },
  {
    name: 'Tu Liquidación al Día',
    tagline: 'Calculá tu indemnización en minutos.',
    description:
      'Calculadora gratuita actualizada con la Ley 27.802 (Reforma Laboral 2026). Sabé exactamente cuánto te corresponde.',
    features: ['Cálculo gratuito', '7 rubros indemnizatorios', 'Carta documento con IA', 'Ley 20.744 & 27.802'],
    url: 'https://liquidacion-al-dia.grindfactory.app',
    status: 'live',
    device: 'desktop',
    accent: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.35)',
    tint: 'rgba(245, 158, 11, 0.08)',
    screenshot: '/screens/liquidacion-al-dia.png',
    category: 'Web · Legal',
  },
  {
    name: 'Regatea Tu Multa',
    tagline: 'Generá tu escrito de descargo en segundos.',
    description:
      'Subí la foto de tu multa. La IA analiza tu caso, detecta argumentos legales y genera el escrito de descargo en 30 segundos.',
    features: ['Análisis con IA', 'Basado en Ley 24.449', 'Descargo en PDF', 'Análisis 100% gratis'],
    url: 'https://regatea-tu-multa.grindfactory.app',
    status: 'live',
    device: 'desktop',
    accent: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.35)',
    tint: 'rgba(139, 92, 246, 0.08)',
    screenshot: '/screens/pelea-tu-multa.png',
    category: 'Web · AI · Legal',
  },
];

/* ==================================================================
   App
   ================================================================== */

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSections = 1 + products.length + 1; // hero + products + cta

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = container.clientHeight;
      const index = Math.round(scrollTop / sectionHeight);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: index * container.clientHeight, behavior: 'smooth' });
  };

  const navLabel = (i: number) => {
    if (i === 0) return 'Inicio';
    if (i <= products.length) return products[i - 1].name;
    return 'Contacto';
  };

  return (
    <div className="h-dvh w-screen overflow-hidden relative bg-[#06060a]">
{/* ========================
          Side nav dots (desktop)
          ======================== */}
      <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 hidden lg:flex">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group relative flex items-center justify-end"
            aria-label={navLabel(i)}
          >
            <span className="absolute right-6 px-2.5 py-1 rounded-md glass text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {navLabel(i)}
            </span>
            <span
              className="block rounded-full transition-all duration-500"
              style={{
                width: activeIndex === i ? 10 : 6,
                height: activeIndex === i ? 10 : 6,
                backgroundColor:
                  activeIndex === i
                    ? i === 0 || i > products.length
                      ? '#ffffff'
                      : products[i - 1].accent
                    : 'rgba(255,255,255,0.2)',
                boxShadow:
                  activeIndex === i && i > 0 && i <= products.length
                    ? `0 0 12px ${products[i - 1].accent}`
                    : undefined,
              }}
            />
          </button>
        ))}
      </nav>

      {/* ========================
          Snap container
          ======================== */}
      <main ref={containerRef} className="h-full w-full overflow-y-auto snap-container" role="main">

        {/* ================================================================
            SECTION 1 — HERO
            ================================================================ */}
        <section
          id="hero"
          aria-labelledby="gf-h1"
          className="h-dvh w-full snap-section relative overflow-hidden flex flex-col items-center justify-center bg-black"
        >
          {/* Matrix rain backdrop */}
          <MatrixRain charCount={250} activeColor="#10b981" minSpeed={0.03} maxSpeed={0.12} />

          {/* vignette over rain */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center px-5 w-full max-w-5xl mx-auto flex flex-col items-center gap-3 md:gap-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: '#10b981' }} />
              Buenos Aires · AR
            </span>

            <ScrambledTitle
              phrases={['Hello,']}
              className="text-white/90 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-center"
            />
            <ScrambledTitle
              phrases={['grindfactory.app']}
              className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-wider text-center"
            />

            <h1
              id="gf-h1"
              className="font-display font-bold text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.035em] mt-2 md:mt-4 max-w-3xl"
            >
              Apps propias. <span className="text-white/50">Nichos raros.</span>
            </h1>

            <p className="text-white/55 text-sm md:text-base max-w-md md:max-w-lg leading-relaxed text-balance">
              Fábrica de software independiente. Seis apps, seis mercados, un solo fundador.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mt-2 max-w-3xl">
              {products.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => scrollTo(i + 1)}
                  className="group inline-flex items-center gap-1.5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium text-white/70 hover:text-white transition-colors backdrop-blur-md"
                  style={{
                    backgroundColor: `${p.accent}10`,
                    border: `1px solid ${p.accent}30`,
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: p.accent, boxShadow: `0 0 6px ${p.accent}` }}
                  />
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <button
            onClick={() => scrollTo(1)}
            className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors reveal reveal-delay-4"
            aria-label="Scroll"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
            <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </section>

        {/* ================================================================
            SECTIONS 2..N — PRODUCTS
            ================================================================ */}
        {products.map((p, i) => (
          <ProductSection
            key={p.name}
            product={p}
            index={i}
            total={products.length}
          />
        ))}

        {/* ================================================================
            CTA + FOOTER
            ================================================================ */}
        <section
          id="contacto"
          aria-labelledby="gf-contacto"
          className="h-dvh w-full snap-section relative overflow-hidden flex flex-col"
        >
          <div className="aurora-mono" aria-hidden="true" />
          <div className="absolute inset-0 bg-grid opacity-25" aria-hidden="true" />
          <div className="noise" aria-hidden="true" />

          <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-12">
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-6 md:gap-8">

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 pulse-dot" style={{ color: '#10b981' }} />
                Abierto a proyectos
              </span>

              <h2
                id="gf-contacto"
                className="font-display font-bold text-balance text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] max-w-3xl"
              >
                ¿Tenés un nicho raro? <span className="text-white/45">Hablemos.</span>
              </h2>

              <p className="text-white/55 text-sm md:text-lg leading-relaxed max-w-xl text-balance">
                Construyo software para problemas puntuales que nadie más quiere resolver. Si el tuyo cae ahí, escribime.
              </p>

              <a
                href="mailto:hola@grindfactory.app"
                className="btn-glow inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 rounded-full bg-white text-black font-semibold text-base md:text-lg mt-1"
              >
                hola@grindfactory.app
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>

              {/* Stats row */}
              <dl className="grid grid-cols-3 gap-px mt-6 md:mt-10 w-full max-w-2xl rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
                {[
                  { k: 'Apps en el aire', v: '06' },
                  { k: 'Mercados distintos', v: '06' },
                  { k: 'Fundadores', v: '01' },
                ].map((s) => (
                  <div key={s.k} className="flex flex-col items-center justify-center gap-1 bg-black/30 px-4 py-5 md:py-6">
                    <dd className="font-display font-bold text-2xl md:text-4xl tracking-[-0.03em] tabular text-white">
                      {s.v}
                    </dd>
                    <dt className="font-mono uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-white/45">
                      {s.k}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative z-10 border-t border-white/5 bg-black/30 backdrop-blur-sm px-5 md:px-12 py-5 md:py-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <img src="/favicon.webp" alt="" width={24} height={24} className="rounded-md block" />
                <span className="font-display font-bold text-sm tracking-tight">Grind Factory</span>
                <span className="hidden md:inline text-white/25">·</span>
                <span className="hidden md:inline text-xs text-white/40">Buenos Aires · AR</span>
              </div>
              <div className="flex items-center gap-4 md:gap-5 text-xs text-white/40">
                <span className="tabular">© {new Date().getFullYear()}</span>
                <span className="text-white/20">·</span>
                <a href="mailto:hola@grindfactory.app" className="hover:text-white/80 transition-colors">
                  hola@grindfactory.app
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

/* ==================================================================
   <ProductSection />
   ================================================================== */

function ProductSection({
  product: p,
  index,
  total,
}: {
  product: Product;
  index: number;
  total: number;
}) {
  const num = String(index + 1).padStart(2, '0');
  const tot = String(total).padStart(2, '0');
  const slug = p.name.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const headingId = `gf-app-${slug}`;

  return (
    <section
      id={slug}
      aria-labelledby={headingId}
      className="h-dvh w-full snap-section relative overflow-hidden"
    >
      {/* Accent background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 70% 20%, ${p.glow}, transparent 60%), radial-gradient(ellipse 60% 45% at 20% 80%, ${p.glow.replace('0.35', '0.25')}, transparent 60%), ${p.tint}`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      {/* Section number — huge, ghosted */}
      <div
        aria-hidden="true"
        className="absolute top-[8vh] right-[4vw] md:top-[10vh] md:right-[4vw] font-display font-bold text-[20vw] md:text-[14vw] leading-none select-none pointer-events-none tabular"
        style={{
          color: 'transparent',
          WebkitTextStroke: `1px ${p.accent}25`,
          opacity: 0.6,
        }}
      >
        {num}
      </div>

      {/* Top meta bar */}
      <div className="absolute top-[10vh] md:top-[11vh] left-5 md:left-12 flex items-center gap-3 z-10">
        <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] text-white/40 uppercase tabular">
          {num} / {tot}
        </span>
        <span className="h-px w-10 md:w-16 bg-white/15" />
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase" style={{ color: p.accent }}>
          {p.category}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col xl:flex-row items-center justify-center px-5 md:px-12 lg:px-20 pt-24 md:pt-28 pb-20 md:pb-16 gap-6 md:gap-12">

        {/* Info */}
        <div className="flex-1 max-w-xl flex flex-col justify-center order-2 xl:order-1 w-full">
          {/* Status */}
          <div className="flex items-center gap-2 mb-3 md:mb-5">
            <span
              className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: p.status === 'live' ? `${p.accent}1a` : 'rgba(255,255,255,0.06)',
                color: p.status === 'live' ? p.accent : 'rgba(255,255,255,0.45)',
                border: `1px solid ${p.status === 'live' ? `${p.accent}40` : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${p.status === 'live' ? 'pulse-dot' : ''}`}
                style={{ backgroundColor: p.status === 'live' ? p.accent : 'rgba(255,255,255,0.3)', color: p.accent }}
              />
              {p.status === 'live' ? 'Live' : 'Próximamente'}
            </span>
          </div>

          {/* Name */}
          <h2
            id={headingId}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] mb-3 md:mb-5 text-balance"
          >
            {p.name}
          </h2>

          {/* Tagline */}
          <p
            className="font-display font-medium text-lg md:text-2xl leading-[1.25] mb-3 md:mb-4 text-balance tracking-[-0.01em]"
            style={{ color: p.accent }}
          >
            {p.tagline}
          </p>

          {/* Description */}
          <p className="text-white/55 text-sm md:text-base mb-5 md:mb-7 leading-relaxed max-w-md hidden sm:block">
            {p.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-2 md:gap-2.5 mb-5 md:mb-8 max-w-md">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-xs md:text-sm text-white/65"
              >
                <span
                  className="h-1 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: p.accent, boxShadow: `0 0 8px ${p.accent}` }}
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            {p.url !== '#' ? (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-sm transition"
                style={{
                  backgroundColor: p.accent,
                  color: '#0a0a10',
                }}
              >
                Visitar sitio
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
            ) : p.device === 'phone' ? (
              <span
                className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm border"
                style={{
                  color: p.accent,
                  backgroundColor: `${p.accent}12`,
                  borderColor: `${p.accent}40`,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17 19H7V5h10m0-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                {p.status === 'live' ? 'Disponible en iOS & Android' : 'Próximamente en tiendas'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium text-sm bg-white/5 text-white/50 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                En construcción
              </span>
            )}

          </div>
        </div>

        {/* Mockup */}
        <div className="flex-shrink-0 flex items-center justify-center order-1 xl:order-2 float">
          {p.device === 'phone' ? (
            <div
              className="relative rounded-[32px] md:rounded-[44px] border-[4px] md:border-[6px] border-white/15 bg-black/50 p-1.5 md:p-2 mockup-shadow"
              style={{ boxShadow: `0 30px 80px ${p.glow}` }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-4 md:h-6 bg-black rounded-b-xl md:rounded-b-2xl z-10" />
              <div className="rounded-[26px] md:rounded-[36px] overflow-hidden">
                <img
                  src={p.screenshot}
                  alt={`${p.name} screenshot`}
                  className="h-[32vh] md:h-[62vh] w-auto object-contain block"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <div
                className="absolute inset-0 rounded-[32px] md:rounded-[44px] pointer-events-none"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, transparent 30%)' }}
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
                  {p.url !== '#' ? p.url.replace('https://', '') : `${p.name.toLowerCase().replace(/\s/g, '')}.grindfactory.app`}
                </div>
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: p.accent, boxShadow: `0 0 10px ${p.accent}` }}
                />
              </div>
              <img
                src={p.screenshot}
                alt={`${p.name} screenshot`}
                className="w-full h-auto object-contain block bg-black"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, transparent 25%)' }}
              />
            </div>
          )}
        </div>
      </div>

    </section>
  );
}

export default App;
