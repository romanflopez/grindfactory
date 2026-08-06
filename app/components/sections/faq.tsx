"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  { q: "01 · ¿Cuánto tarda un proyecto?", a: "Una landing premium sale en 1–2 semanas. Un producto a medida lo scopeamos juntos antes de arrancar — te damos un timeline con hitos concretos después del briefing." },
  { q: "02 · ¿Qué tecnologías usan?", a: "Next.js, React, TypeScript, Supabase (Postgres), Stripe y Vercel. Sin WordPress ni page builders — el mismo stack que usamos en nuestros productos propios." },
  { q: "03 · ¿Hacen mantenimiento?", a: "Sí. No entregamos y desaparecemos: quedamos para mejoras, soporte y actualizaciones. El Ship no es un punto final." },
  { q: "04 · ¿Pueden retomar un proyecto a medio hacer?", a: "Sí. Auditamos lo que hay, te decimos honestamente qué sirve y qué no, y seguimos desde ahí." },
  { q: "05 · ¿Trabajan con mi stack?", a: "Sí. React, Next, TypeScript y Supabase son nuestra casa, pero si ya tenés algo armado lo retomamos y adaptamos." },
  { q: "06 · ¿Me quedo con el código?", a: "Sí. Al cierre del proyecto el repositorio es tuyo — sin lock-in, sin licencias trampa. Acceso completo desde el día uno." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: "120px 48px" }}>
      <div className="rv" style={{ marginBottom: 64 }}>
        <p className="section-label">[07] FAQ</p>
        <h2
          style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-.02em",
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Las preguntas <span className="serif-italic">de siempre.</span>
        </h2>
      </div>

      <div style={{ maxWidth: 760 }}>
        {FAQ_ITEMS.map((item, i) => (
          <div key={item.q} className={`faq-item rv${i > 0 ? ` d${Math.min(i, 3)}` : ""}`}>
            <button
              style={{
                width: "100%", textAlign: "left", padding: "24px 0",
                fontSize: 16, fontWeight: 400, color: "#e8e6e1",
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                cursor: "pointer", background: "none", border: "none", fontFamily: "inherit",
              }}
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{item.q}</span>
              <span
                className="faq-icon"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)", color: open === i ? "#888" : "#444" }}
              >
                +
              </span>
            </button>
            <div
              style={{
                fontSize: 14, color: "#666", lineHeight: 1.75,
                maxHeight: open === i ? 400 : 0,
                overflow: "hidden",
                transition: "max-height .35s ease, padding .35s ease",
                paddingBottom: open === i ? 24 : 0,
              }}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
