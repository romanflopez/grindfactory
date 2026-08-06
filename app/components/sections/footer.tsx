import { GF_WHATSAPP } from "@/app/lib/grindfactory";

export function Footer() {
  return (
    <footer style={{ padding: "64px 48px 48px", borderTop: "1px solid #1e1e1e" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ fontSize: 15, fontWeight: 600 }}>GrindFactory</span>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.6, margin: 0 }}>
            Estudio de diseño y desarrollo.<br />Buenos Aires, Argentina.
          </p>
        </div>

        <div className="footer-col">
          <h4>Productos propios</h4>
          <a href="https://grovly.grindfactory.app" target="_blank" rel="noopener noreferrer">Grovly ↗</a>
          <a href="https://turnia-mocha.vercel.app" target="_blank" rel="noopener noreferrer">Vera ↗</a>
          <a href="https://regatea-tu-multa.grindfactory.app" target="_blank" rel="noopener noreferrer">regateaTuMulta ↗</a>
        </div>

        <div className="footer-col">
          <h4>Estudio</h4>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={GF_WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          <a href="mailto:hola@grindfactory.app">hola@grindfactory.app</a>
        </div>
      </div>
    </footer>
  );
}
