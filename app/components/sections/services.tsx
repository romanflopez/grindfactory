const SERVICES = [
  {
    icon: "⬡",
    num: "01",
    title: "Website",
    desc: "Sitios de marketing de alto rendimiento, páginas de destino y sitios web corporativos — diseñados para la conversión y la velocidad.",
    chips: [
      { icon: "N", label: "Next.js & React" },
      { icon: "■", label: "Headless CMS" },
      { icon: "◎", label: "SEO & Performance" },
      { icon: "⊞", label: "A/B Testing" },
    ],
  },
  {
    icon: "✦",
    num: "02",
    title: "Branding",
    desc: "Identidades de marca, desde el logotipo hasta el sistema de diseño — identidades que perduran y se mantienen coherentes en todos los puntos de contacto.",
    chips: [
      { icon: "A", label: "Logo & Wordmark" },
      { icon: "◈", label: "Visual Identity" },
      { icon: "⊟", label: "Design System" },
      { icon: "≡", label: "Brand Guidelines" },
    ],
  },
  {
    icon: "{ }",
    num: "03",
    title: "Software",
    desc: "Herramientas a medida, plataformas internas y productos SaaS. Del MVP a la solución empresarial escalable.",
    chips: [
      { icon: "⊞", label: "Web apps & Dashboards" },
      { icon: "⇄", label: "API & Backend" },
      { icon: "▣", label: "SaaS platforms" },
      { icon: "⚙", label: "Internal tools" },
    ],
  },
  {
    icon: "phone",
    num: "04",
    title: "Apps Móviles",
    desc: "Aplicaciones nativas y multiplataforma con una experiencia de usuario de primera clase — iOS, Android y todo lo de en medio.",
    chips: [
      { icon: "◉", label: "iOS & Android" },
      { icon: "⚛", label: "React Native" },
      { icon: "↑", label: "App Store launch" },
      { icon: "◎", label: "Push & Analytics" },
    ],
  },
];

export function Services() {
  return (
    <section id="servicios" style={{ padding: "120px 48px" }}>
      <div className="section-header rv" style={{ marginBottom: 64 }}>
        <p className="section-label">[03] Servicios / Lo que hacemos</p>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-.02em",
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Cuatro <span className="serif-italic">disciplinas.</span> Un equipo.
        </h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div key={s.num} className={`service-card rv${i === 1 ? " d1" : i === 2 ? " d1" : i === 3 ? " d2" : ""}`}>
            <div className="service-card-top">
              <div className="service-icon-box">
                {s.icon === "phone" ? (
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="16" height="22" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="9" cy="19.5" r="1.1" fill="currentColor"/>
                    <line x1="6" y1="4.5" x2="12" y2="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ) : s.icon}
              </div>
              <span className="service-ghost-num">{s.num}</span>
            </div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <hr className="service-divider" />
            <div className="service-chips">
              {s.chips.map((c) => (
                <span key={c.label} className="service-chip">
                  <span className="service-chip-icon">{c.icon}</span>
                  {c.label}
                </span>
              ))}
            </div>
            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
