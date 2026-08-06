import { GF_WHATSAPP } from "@/app/lib/grindfactory";
import { HeroBg } from "@/app/components/hero-bg";

export function Hero() {
  return (
    <div
      id="hero"
      className="hero-animated"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background — original CSS animation, no video */}
      <HeroBg />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(to top, rgba(10,10,11,.92) 0%, rgba(10,10,11,.45) 55%, rgba(10,10,11,.25) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 2,
          padding: "0 48px",
          maxWidth: 900,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <p className="section-label fade-up" style={{ marginBottom: 4 }}>
          [01] Estudio Digital · Buenos Aires
        </p>

        <h1
          className="fade-up-2"
          style={{
            fontSize: "clamp(48px, 6vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: "-.03em",
            margin: "16px 0 28px",
          }}
        >
          Creamos{" "}
          <em className="hero-word hero-word-1"
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--orange)",
            }}
          >
            productos
          </em>{" "}
          <em className="hero-word hero-word-2"
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--orange)",
            }}
          >
            digitales
          </em>{" "}
          para marcas{" "}
          <em className="hero-word hero-word-3"
            style={{
              fontFamily: "var(--font-serif), 'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--orange)",
            }}
          >
            ambiciosas.
          </em>
        </h1>

        <p
          className="fade-up-3"
          style={{ fontSize: 15, color: "rgba(232,230,225,.65)", maxWidth: 500, lineHeight: 1.75, marginBottom: 36 }}
        >
          Desarrollamos sitios web, identidad corporativa, software y aplicaciones móviles
          — productos digitales pensados, dibujados y codeados por el mismo equipo.
        </p>

        <div className="hero-actions fade-up-4" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <a href={GF_WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Arrancar proyecto →
          </a>
          <a href="#portfolio" className="btn-ghost">
            <span className="btn-ghost-dot" />
            Ver portfolio
          </a>
        </div>

      </div>
    </div>
  );
}
