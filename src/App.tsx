import './index.css';

const products = [
  {
    name: 'Grovly',
    tagline: 'El sistema operativo de tu club cannábico.',
    description: 'Socios, inventario, dispensario, turnos, catálogo online, REPROCANN y reportes. Todo en un solo lugar.',
    url: 'https://grovly.grindfactory.app',
    status: 'live' as const,
    accent: 'from-emerald-500 to-teal-600',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30 hover:border-emerald-500/60',
    accentGlow: 'emerald',
    screenshot: '/screens/grovly.jpg',
  },
  {
    name: 'Nowly',
    tagline: 'Tu agenda te dice qué paciente viene ahora.',
    description: 'Turnos, pacientes, huecos libres y recordatorios por WhatsApp. Sin grillas, sin scroll infinito.',
    url: '#',
    status: 'coming' as const,
    accent: 'from-teal-500 to-cyan-600',
    accentText: 'text-teal-400',
    accentBorder: 'border-teal-500/30 hover:border-teal-500/60',
    accentGlow: 'teal',
    screenshot: '/screens/nowly.jpg',
  },
  {
    name: 'Licencia Argentina',
    tagline: 'Aprobá el examen de conducir a la primera.',
    description: 'Simulacros reales, señales viales y práctica ilimitada. 517 preguntas actualizadas.',
    url: '#',
    status: 'live' as const,
    accent: 'from-blue-500 to-indigo-600',
    accentText: 'text-blue-400',
    accentBorder: 'border-blue-500/30 hover:border-blue-500/60',
    accentGlow: 'blue',
    screenshot: '/screens/licencia-ar.jpg',
  },
  {
    name: 'Licencia Náutica',
    tagline: 'Navegá con confianza desde el día uno.',
    description: 'Preparación completa para el examen de timonel y patrones. Teoría, reglamentación y señales.',
    url: '#',
    status: 'coming' as const,
    accent: 'from-sky-500 to-blue-600',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-500/30 hover:border-sky-500/60',
    accentGlow: 'sky',
    screenshot: '/screens/licencia-nautica.jpg',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col relative overflow-hidden">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Center glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, rgb(20, 184, 166) 0%, transparent 60%)' }}
      />

      {/* Main content — vertically centered */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-20">
        {/* Logo + tagline */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <svg className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Grind Factory
            </h1>
          </div>
          <p className="text-white/50 text-base md:text-lg max-w-md mx-auto">
            Software que mueve industrias.<br className="hidden sm:block" />
            Productos propios para mercados que necesitan soluciones de verdad.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-3xl">
          {products.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target={p.url !== '#' ? '_blank' : undefined}
              rel={p.url !== '#' ? 'noopener noreferrer' : undefined}
              className={`group relative rounded-2xl border bg-white/[0.02] p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.04] hover:shadow-xl ${p.accentBorder} ${p.status === 'coming' ? 'opacity-70 hover:opacity-100' : ''}`}
            >
              {/* Status badge */}
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg md:text-xl font-bold tracking-tight">{p.name}</h2>
                <span className={`text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-full ${
                  p.status === 'live'
                    ? 'bg-emerald-500/15 text-emerald-400'
                    : 'bg-white/10 text-white/40'
                }`}>
                  {p.status === 'live' ? 'Live' : 'Pronto'}
                </span>
              </div>

              <p className={`text-sm font-medium mb-1 ${p.accentText}`}>
                {p.tagline}
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                {p.description}
              </p>

              {/* Arrow hint */}
              {p.url !== '#' && (
                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="h-4 w-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 text-xs text-white/30">
        © {new Date().getFullYear()} Grind Factory · Buenos Aires, Argentina
      </footer>
    </div>
  );
}

export default App;
