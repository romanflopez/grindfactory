"use client";

import { useState } from "react";
import { GF_WHATSAPP } from "@/app/lib/grindfactory";

const CONTACT_LINKS = [
  { label: "WhatsApp", val: "+54 9 11 3850-0960 →", href: GF_WHATSAPP, external: true },
  { label: "Email", val: "hola@grindfactory.app →", href: "mailto:hola@grindfactory.app", external: false },
  { label: "Ubicación", val: "Buenos Aires, Argentina", href: null, external: false },
];

export function CTAFinal() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" style={{ background: "#0d0d0e", padding: "120px 48px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

        {/* Left: info */}
        <div className="rv">
          <p className="section-label">[06] Contacto</p>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 54px)",
              fontWeight: 400,
              letterSpacing: "-.02em",
              lineHeight: 1.1,
              margin: "12px 0 24px",
            }}
          >
            Arranquemos a <span className="serif-italic">hablar.</span>
          </h2>
          <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, marginBottom: 40 }}>
            Línea directa al estudio — sin account managers ni teléfono roto entre departamentos.
            Contanos tu proyecto y respondemos en menos de 24h con pasos concretos.
          </p>
          <div>
            {CONTACT_LINKS.map((l) => (
              <div key={l.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderTop: "1px solid #1e1e1e" }}>
                <span style={{ fontSize: 11, color: "#555", textTransform: "uppercase", letterSpacing: ".1em" }}>{l.label}</span>
                {l.href ? (
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 14, color: "#ccc", transition: "color .2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e6e1")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#ccc")}
                  >
                    {l.val}
                  </a>
                ) : (
                  <span style={{ fontSize: 14, color: "#ccc" }}>{l.val}</span>
                )}
              </div>
            ))}
            <div style={{ borderBottom: "1px solid #1e1e1e", marginBottom: 0 }} />
          </div>
          <div style={{ display: "inline-flex", gap: 8, alignItems: "center", fontSize: 11, color: "#555", marginTop: 32 }}>
            <span className="badge-dot" />
            Respondemos en menos de 24h · Disponibles Q3 / Q4
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="rv d2" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p className="section-label" style={{ marginBottom: 8 }}>
            Mandanos un{" "}
            <span className="serif-italic" style={{ fontSize: 14, textTransform: "none", letterSpacing: 0 }}>briefing rápido.</span>
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label className="form-label">Nombre *</label>
              <input className="form-input" type="text" name="nombre" required placeholder="Tu nombre" />
            </div>
            <div>
              <label className="form-label">Apellido *</label>
              <input className="form-input" type="text" name="apellido" required placeholder="Tu apellido" />
            </div>
            <div>
              <label className="form-label">Email *</label>
              <input className="form-input" type="email" name="email" required placeholder="hola@tuempresa.com" />
            </div>
            <div>
              <label className="form-label">WhatsApp</label>
              <input className="form-input" type="tel" name="whatsapp" placeholder="+54 9 11..." />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label className="form-label">Empresa / Proyecto</label>
              <input className="form-input" type="text" name="empresa" placeholder="Nombre de tu empresa o proyecto" />
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <label className="form-label">¿Qué necesitás?</label>
              <textarea
                className="form-input"
                name="mensaje"
                placeholder="Contanos de qué se trata, en qué etapa están y cualquier detalle relevante..."
                style={{ minHeight: 110, resize: "vertical" }}
              />
            </div>
          </div>
          <button type="submit" className="form-submit" disabled={status === "sending"} style={{ alignSelf: "flex-start" }}>
            {status === "sending" ? "Enviando..." : "Enviar briefing →"}
          </button>
          {status === "ok" && (
            <p style={{ fontSize: 12, color: "#4a9" }}>¡Gracias! Te respondemos en menos de 24h.</p>
          )}
          {status === "error" && (
            <p style={{ fontSize: 12, color: "#e55" }}>Algo salió mal. Escribinos por WhatsApp.</p>
          )}
        </form>
      </div>
    </section>
  );
}
