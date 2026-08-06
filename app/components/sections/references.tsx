const REFS = [
  { name: "Next.js ↗", desc: "Framework de producción usado en cada proyecto de GrindFactory.", href: "https://nextjs.org" },
  { name: "React ↗", desc: "UI library — docs oficiales del equipo de React.", href: "https://react.dev" },
  { name: "Vercel ↗", desc: "Plataforma de deploy por defecto con Edge Network global.", href: "https://vercel.com" },
  { name: "TypeScript ↗", desc: "Codebases type-safe — documentación oficial de Microsoft.", href: "https://www.typescriptlang.org" },
  { name: "Supabase ↗", desc: "Base de datos y auth — usada en todos los proyectos SaaS.", href: "https://supabase.com" },
  { name: "Core Web Vitals ↗", desc: "El estándar de performance de Google — cómo medimos velocidad.", href: "https://web.dev/articles/vitals" },
];

export function References() {
  return (
    <section id="referencias" style={{ padding: "0 48px 120px" }}>
      <hr className="divider" style={{ margin: "0 0 80px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
        <div className="rv">
          <p className="section-label" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ width: 24, height: 1, background: "#333", display: "inline-block" }} />
            [REF] Referencias
          </p>
          <h2 style={{ fontSize: 32, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 16 }}>
            Verificá nuestros claims
          </h2>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75 }}>
            Nombramos el stack, las métricas y los estándares abiertamente.
            Usá estas referencias para verificarlos vos mismo.
          </p>
        </div>
        <div className="rv d1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #1e1e1e" }}>
          {REFS.map((ref, i) => (
            <a
              key={ref.name}
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-cell"
              style={i >= 3 ? { borderTop: "1px solid #1e1e1e" } : {}}
            >
              <span className="ref-name">{ref.name}</span>
              <span className="ref-desc">{ref.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
