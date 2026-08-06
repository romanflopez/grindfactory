const STEPS = [
  {
    num: "01 / 04",
    title: "Foundation",
    desc: "Entendemos qué querés construir y por qué. Landing, SaaS o automatización — primero definimos el proyecto antes de tocar cualquier herramienta.",
    bullets: ["Briefing & objetivos", "Análisis de competencia", "Estrategia de producto", "Roadmap y alcance"],
    flip: false,
    img: "/assets/fundations.jpeg",
  },
  {
    num: "02 / 04",
    title: "Forge",
    desc: "Generamos los assets: identidad visual, flows, wireframes y arquitectura del sistema. La forma antes del fondo.",
    bullets: ["Identidad visual & UI", "Wireframes & UX flows", "Arquitectura del sistema", "Design system"],
    flip: true,
    img: "/assets/forge.jpeg",
  },
  {
    num: "03 / 04",
    title: "Build",
    desc: "Fabricamos. Código tipado, componentes reales, estándares de producto — no de agencia. El mismo nivel que usamos en los nuestros.",
    bullets: ["Frontend & CMS", "Backend / APIs", "Performance & SEO", "QA & Testing"],
    flip: false,
    img: "/assets/build.jpeg",
  },
  {
    num: "04 / 04",
    title: "Ship",
    desc: "Sale a la calle. Deploy, monitoreo y mejoras continuas. No firmamos entrega y desaparecemos — tu producto crece y nosotros crecemos con él.",
    bullets: ["Deploy & Go-Live", "Analytics & monitoreo", "Mantenimiento & updates", "Iteración & mejoras"],
    flip: true,
    img: "/assets/ship.jpeg",
  },
];

export function Process() {
  return (
    <section id="proceso" style={{ paddingTop: 0, padding: "0 0 0 0" }}>
      <div style={{ padding: "0 48px", marginBottom: 64 }} className="rv">
        <p className="section-label">[04] Proceso / Cómo fabricamos</p>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-.02em",
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Del <span className="serif-italic">briefing</span> al{" "}
          <span className="serif-italic">lanzamiento.</span>
        </h2>
      </div>

      <div className="process-list">
        {STEPS.map((step) => (
          <div key={step.num} className={`process-step rv${step.flip ? " flip" : ""}`}>
            <div className="process-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={step.img}
                alt={step.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="process-text">
              <span className="process-step-num">{step.num}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
              <ul className="process-bullets">
                {step.bullets.map((b) => (
                  <li key={b} className="process-bullet">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
