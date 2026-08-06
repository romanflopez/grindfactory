const FEATURES = [
  { label: "SEO on-page", desc: "Listo para ser encontrado en Google." },
  { label: "Tracking & Analytics", desc: "Stats de usuario y cookies de marketing." },
  { label: "100% Responsive", desc: "Desktop, tablet, mobile — y todo lo de en medio." },
  { label: "ROI-first", desc: "El máximo de cada peso invertido." },
];

const LH_SCORES = ["Performance", "Accesibilidad", "Best Practices", "SEO"];

export function Results() {
  return (
    <section id="resultados" style={{ padding: "0 48px 120px" }}>
      <div className="rv" style={{ paddingBottom: 48 }}>
        <p className="section-label">[05] Resultados</p>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-.02em",
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Métricas <span className="serif-italic">reales.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

        {/* Features card */}
        <div className="rv" style={{ background: "#0f0f10", border: "1px solid #1e1e1e", borderRadius: 4, padding: 32 }}>
          <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 32, lineHeight: 1.15 }}>
            Sitios optimizados para{" "}
            <em style={{ fontFamily: "var(--font-serif),'Instrument Serif',serif", fontStyle: "italic", color: "var(--orange)", fontWeight: 400 }}>
              resultados reales.
            </em>
          </h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FEATURES.map((f) => (
              <div key={f.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #1a1a1a" }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{f.label}</span>
                <span style={{ fontSize: 14, color: "#666" }}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lighthouse card */}
        <div className="rv d1" style={{ background: "#0f0f10", border: "1px solid #1e1e1e", borderRadius: 4, padding: 32 }}>
          <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-.02em", marginBottom: 8, lineHeight: 1.15 }}>
            Cuatro scores.{" "}
            <em style={{ fontFamily: "var(--font-serif),'Instrument Serif',serif", fontStyle: "italic", color: "var(--orange)", fontWeight: 400 }}>
              Todos 100.
            </em>
          </h3>
          <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 20 }}>
            Puntajes perfectos en Performance, SEO, Accesibilidad y Best Practices — estándar en cada proyecto, no casualidad.
          </p>
          <p style={{ fontSize: 10, color: "#555", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 32, display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, background: "var(--orange)", display: "inline-block", borderRadius: 1 }} />
            Google Lighthouse · Live
          </p>
          <div style={{ display: "flex", gap: 24, justifyContent: "space-around" }}>
            {LH_SCORES.map((label) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div className="lh-circle">100</div>
                <div style={{ fontSize: 10, color: "#555", textTransform: "uppercase", letterSpacing: ".08em", textAlign: "center" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
