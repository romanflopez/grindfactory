type Project = {
  name: string;
  category: string;
  img: string;
  url?: string;
};

const ROW_LEFT: Project[] = [
  { name: "Grovly", category: "SaaS · B2B", img: "/assets/portfolio-grovly.png", url: "https://grovly.grindfactory.app" },
  { name: "Vera", category: "Bot IA · WhatsApp", img: "/assets/portfolio-vera.png", url: "https://turnia-mocha.vercel.app" },
  { name: "regateaTuMulta", category: "LegalTech · IA", img: "/assets/portfolio-regatea.png", url: "https://regatea-tu-multa.grindfactory.app" },
  { name: "Nowly", category: "Producto · App", img: "/screens/nowly.jpg" },
  { name: "Licencia Argentina", category: "App · Educación", img: "/screens/licencia-ar.png" },
];

const ROW_RIGHT: Project[] = [
  { name: "Pelea tu multa", category: "LegalTech · Web", img: "/screens/pelea-tu-multa.png" },
  { name: "Liquidación al día", category: "Web · Legal", img: "/screens/liquidacion-al-dia.png" },
  { name: "Licencia Náutica", category: "App · Educación", img: "/screens/licencia-nautica.png" },
  { name: "Grovly", category: "Dashboard · SaaS", img: "/screens/grovly.jpg", url: "https://grovly.grindfactory.app" },
  { name: "Nowly", category: "App · Mobile", img: "/screens/nowly.jpg" },
];

function Tile({ p, duplicate = false }: { p: Project; duplicate?: boolean }) {
  const inner = (
    <>
      <figure className="project-tile-visual">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img}
          alt={duplicate ? "" : `${p.name} — proyecto GrindFactory`}
          loading="lazy"
          decoding="async"
          width={1080}
          height={608}
        />
      </figure>
      <div className="project-tile-copy">
        <span className="project-tile-category">{p.category}</span>
        <h3 className="project-tile-name">{p.name}</h3>
        <span className="project-tile-arrow" aria-hidden="true">→</span>
      </div>
    </>
  );

  if (p.url) {
    return (
      <li className="projects-marquee-item" aria-hidden={duplicate || undefined}>
        <a
          className="project-tile"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver ${p.name}`}
          tabIndex={duplicate ? -1 : undefined}
        >
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li className="projects-marquee-item" aria-hidden={duplicate || undefined}>
      <div className="project-tile">{inner}</div>
    </li>
  );
}

function Row({ items, dir }: { items: Project[]; dir: "left" | "right" }) {
  return (
    <div className={`projects-marquee-row projects-marquee-row--${dir}`}>
      <ul className="projects-marquee-track">
        {items.map((p, i) => (
          <Tile key={`${dir}-${i}`} p={p} />
        ))}
        {items.map((p, i) => (
          <Tile key={`${dir}-dup-${i}`} p={p} duplicate />
        ))}
      </ul>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="projects" aria-labelledby="projects-title">
      <div className="projects-shell">
        <header className="section-header rv" style={{ marginBottom: 56 }}>
          <p className="section-label">[02] Portfolio / 2024 — 2026</p>
          <h2
            id="projects-title"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.1,
              marginTop: 12,
            }}
          >
            Lo que <span className="serif-italic">fabricamos.</span>
          </h2>
        </header>
      </div>

      <div className="projects-marquee" aria-label="Proyectos seleccionados">
        <Row items={ROW_LEFT} dir="left" />
        <Row items={ROW_RIGHT} dir="right" />
      </div>
    </section>
  );
}
