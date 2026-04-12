import { useEffect, useRef, useState } from 'react';
import './index.css';

const products = [
  {
    name: 'Grovly',
    tagline: 'El sistema operativo de tu club cannábico.',
    description:
      'Socios, inventario, dispensario, turnos, catálogo online, REPROCANN y reportes. Todo en un solo lugar.',
    features: ['Gestión de socios', 'Inventario & dispensario', 'Catálogo online', 'Reportes & REPROCANN'],
    url: 'https://grovly.grindfactory.app',
    status: 'live' as const,
    device: 'desktop' as const,
    bg: 'bg-[#0a1f16]',
    accent: '#10b981',
    accentName: 'emerald',
    screenshot: '/screens/grovly.jpg',
  },
  {
    name: 'Nowly',
    tagline: 'Tu agenda te dice qué paciente viene ahora.',
    description:
      'Turnos, pacientes, huecos libres y recordatorios por WhatsApp. Sin grillas, sin scroll infinito.',
    features: ['Agenda inteligente', 'Gestión de pacientes', 'Huecos libres', 'Recordatorios WhatsApp'],
    url: 'https://nowly.grindfactory.app',
    status: 'live' as const,
    device: 'desktop' as const,
    bg: 'bg-[#0a1a1f]',
    accent: '#14b8a6',
    accentName: 'teal',
    screenshot: '/screens/nowly.jpg',
  },
  {
    name: 'Licencia Argentina',
    tagline: 'Aprobá el examen de conducir a la primera.',
    description:
      'Simulacros reales, señales viales y práctica ilimitada. 517 preguntas actualizadas.',
    features: ['517 preguntas', 'Simulacros reales', 'Señales viales', 'Práctica ilimitada'],
    url: '#',
    status: 'live' as const,
    device: 'phone' as const,
    bg: 'bg-[#0a0f1f]',
    accent: '#3b82f6',
    accentName: 'blue',
    screenshot: '/screens/licencia-ar.png',
  },
  {
    name: 'Licencia Náutica',
    tagline: 'Navegá con confianza desde el día uno.',
    description:
      'Preparación completa para el examen de timonel y patrones. Teoría, reglamentación y señales.',
    features: ['Examen de timonel', 'Teoría completa', 'Reglamentación', 'Señales náuticas'],
    url: '#',
    status: 'coming' as const,
    device: 'phone' as const,
    bg: 'bg-[#0a1320]',
    accent: '#0ea5e9',
    accentName: 'sky',
    screenshot: '/screens/licencia-nautica.png',
  },
  {
    name: 'Tu Liquidación al Día',
    tagline: 'Calculá tu indemnización en minutos.',
    description:
      'Calculadora gratuita actualizada con la Ley 27.802 (Reforma Laboral 2026). Sabé exactamente cuánto te corresponde.',
    features: ['Cálculo gratuito', '7 rubros indemnizatorios', 'Carta documento con IA', 'Ley 20.744 & 27.802'],
    url: 'https://liquidacion-al-dia.grindfactory.app',
    status: 'live' as const,
    device: 'desktop' as const,
    bg: 'bg-[#1a0f0a]',
    accent: '#f59e0b',
    accentName: 'amber',
    screenshot: '/screens/liquidacion-al-dia.png',
  },
  {
    name: 'Regatea Tu Multa',
    tagline: 'Generá tu escrito de descargo en segundos.',
    description:
      'Subí la foto de tu multa de tránsito. La IA analiza tu caso, detecta argumentos legales y genera el escrito de descargo en 30 segundos.',
    features: ['Análisis con IA', 'Basado en Ley 24.449', 'Descargo en PDF', 'Análisis 100% gratis'],
    url: 'https://regatea-tu-multa.grindfactory.app',
    status: 'live' as const,
    device: 'desktop' as const,
    bg: 'bg-[#150a1f]',
    accent: '#8b5cf6',
    accentName: 'violet',
    screenshot: '/screens/pelea-tu-multa.png',
  },
];

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSections = products.length + 1; // hero + products

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

  return (
    <div className="h-dvh w-screen overflow-hidden relative">
      {/* Side nav dots — hidden on mobile */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 hidden md:flex">
        {Array.from({ length: totalSections }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className="group relative flex items-center justify-end"
            aria-label={i === 0 ? 'Inicio' : products[i - 1].name}
          >
            <span className="absolute right-6 px-2 py-1 rounded bg-white/10 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
              {i === 0 ? 'Inicio' : products[i - 1].name}
            </span>
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 12 : 8,
                height: activeIndex === i ? 12 : 8,
                backgroundColor: activeIndex === i
                  ? (i === 0 ? '#14b8a6' : products[i - 1].accent)
                  : 'rgba(255,255,255,0.25)',
              }}
            />
          </button>
        ))}
      </nav>

      {/* Snap scroll container */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-container"
      >
        {/* Hero section */}
        <section className="h-dvh w-full snap-section flex flex-col items-center justify-center relative bg-zinc-950">
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl opacity-15"
            style={{ background: 'radial-gradient(circle, rgb(20, 184, 166) 0%, transparent 60%)' }}
          />

          <div className="relative z-10 text-center px-6">
            <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-10 w-10 md:h-14 md:w-14 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg className="h-5 w-5 md:h-7 md:w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
                Grind Factory
              </h1>
            </div>
            <p className="text-white/50 text-base md:text-xl max-w-lg mx-auto mb-10 md:mb-12">
              Software que mueve industrias.<br />
              Productos propios para mercados que necesitan soluciones de verdad.
            </p>

            {/* Scroll hint */}
            <button
              onClick={() => scrollTo(1)}
              className="inline-flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
            >
              <span className="text-sm">Conocé nuestros productos</span>
              <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </section>

        {/* Product sections */}
        {products.map((p, i) => (
          <section
            key={p.name}
            className={`h-dvh w-full snap-section relative overflow-hidden ${p.bg}`}
          >
            {/* Background glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-32 -right-32 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full blur-[120px] opacity-20"
              style={{ backgroundColor: p.accent }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-32 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-[100px] opacity-10"
              style={{ backgroundColor: p.accent }}
            />

            {/* Mobile: column layout, Desktop: row layout */}
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-5 md:px-16 lg:px-24 py-12 md:py-0 gap-6 md:gap-16">

              {/* Info */}
              <div className="flex-1 max-w-lg flex flex-col justify-center order-2 md:order-1">
                <div>
                  {/* Status */}
                  <div className="flex items-center gap-3 mb-2 md:mb-4">
                    <span
                      className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: p.status === 'live' ? `${p.accent}20` : 'rgba(255,255,255,0.08)',
                        color: p.status === 'live' ? p.accent : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {p.status === 'live' ? '● Live' : '○ Próximamente'}
                    </span>
                  </div>

                  {/* Name */}
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-4">
                    {p.name}
                  </h2>

                  {/* Tagline */}
                  <p className="text-base md:text-xl font-medium mb-2 md:mb-3" style={{ color: p.accent }}>
                    {p.tagline}
                  </p>

                  {/* Description — hidden on very small screens to save space */}
                  <p className="text-white/50 text-sm md:text-base mb-4 md:mb-8 leading-relaxed hidden min-[400px]:block">
                    {p.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-10">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs md:text-sm text-white/60">
                        <span
                          className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: p.accent }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {p.url !== '#' ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        backgroundColor: p.accent,
                        color: '#000',
                        boxShadow: `0 0 30px ${p.accent}30`,
                      }}
                    >
                      Visitar sitio
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-sm bg-white/5 text-white/40 border border-white/10">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>

              {/* Screenshot */}
              <div className="flex-shrink-0 flex items-center justify-center order-1 md:order-2">
                {p.device === 'phone' ? (
                  /* Phone mockup */
                  <div
                    className="relative rounded-[28px] md:rounded-[40px] border-[4px] md:border-[6px] border-white/15 bg-black/40 p-1.5 md:p-2 shadow-2xl"
                    style={{ boxShadow: `0 25px 60px ${p.accent}20` }}
                  >
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-4 md:h-6 bg-black rounded-b-xl md:rounded-b-2xl z-10" />
                    <div className="rounded-[22px] md:rounded-[32px] overflow-hidden">
                      <img
                        src={p.screenshot}
                        alt={`${p.name} screenshot`}
                        className="h-[28vh] md:h-[60vh] w-auto object-contain"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                  </div>
                ) : (
                  /* Desktop/browser mockup */
                  <div
                    className="relative rounded-lg md:rounded-xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-[280px] md:max-w-lg"
                    style={{ boxShadow: `0 25px 60px ${p.accent}15` }}
                  >
                    {/* Browser bar */}
                    <div className="bg-white/5 border-b border-white/10 px-3 md:px-4 py-1.5 md:py-2.5 flex items-center gap-2">
                      <div className="flex gap-1 md:gap-1.5">
                        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/15" />
                        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/15" />
                        <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white/15" />
                      </div>
                      <div className="flex-1 mx-2 md:mx-3 bg-white/5 rounded-md px-2 md:px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] text-white/30 truncate">
                        {p.url !== '#' ? p.url.replace('https://', '') : `${p.name.toLowerCase().replace(/\s/g, '')}.grindfactory.app`}
                      </div>
                    </div>
                    <img
                      src={p.screenshot}
                      alt={`${p.name} screenshot`}
                      className="w-full h-auto object-contain"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom — section indicator */}
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {products.map((_, j) => (
                <span
                  key={j}
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === j ? 24 : 6,
                    height: 6,
                    backgroundColor: i === j ? p.accent : 'rgba(255,255,255,0.15)',
                  }}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Footer section */}
        <footer className="h-auto min-h-[160px] md:min-h-[200px] snap-section flex items-center justify-center bg-zinc-950 text-center py-10 md:py-12 px-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Grind Factory</span>
            </div>
            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Grind Factory · Buenos Aires, Argentina
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
