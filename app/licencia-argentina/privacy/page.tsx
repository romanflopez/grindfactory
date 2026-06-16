import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Licencia Argentina",
  description:
    "Política de privacidad de Licencia Argentina, la app para practicar el examen teórico de manejo.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/licencia-argentina/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh" style={{ background: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] mb-10"
          style={{ color: "var(--ink-faint)" }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          grindfactory.app
        </Link>

        <p
          className="font-mono uppercase tracking-[0.2em] text-xs mb-3"
          style={{ color: "var(--accent)" }}
        >
          Licencia Argentina
        </p>
        <h1
          className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-2"
          style={{ color: "var(--ink)" }}
        >
          Política de Privacidad
        </h1>
        <p className="text-sm mb-12" style={{ color: "var(--ink-faint)" }}>
          Última actualización: junio 2026
        </p>

        <div className="flex flex-col gap-10" style={{ color: "var(--ink-dim)" }}>
          <p className="text-base leading-relaxed">
            Licencia Argentina es una aplicación para practicar el examen teórico de manejo. Esta
            política explica qué datos recopilamos y cómo los usamos.
          </p>

          <Section title="Datos que recopilamos">
            <p className="mb-4">
              No recopilamos datos personales identificables. La app guarda localmente en tu
              dispositivo:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Tu país y clase de licencia seleccionados",
                "Tu fecha de examen (opcional)",
                "Tu historial de práctica y resultados de tests",
                "Límites de uso diario (usuarios gratuitos)",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Servicios de terceros">
            <p className="mb-4">
              Usamos los siguientes servicios que pueden recopilar datos según sus propias
              políticas:
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  name: "RevenueCat",
                  desc: "Gestión de compras in-app (premium)",
                  url: "https://www.revenuecat.com/privacy",
                },
                {
                  name: "Google AdMob",
                  desc: "Publicidad para usuarios gratuitos",
                  url: "https://policies.google.com/privacy",
                },
                {
                  name: "Sentry",
                  desc: "Reporte de errores técnicos anónimos",
                  url: "https://sentry.io/privacy",
                },
                {
                  name: "PostHog",
                  desc: "Análisis de uso anónimo",
                  url: "https://posthog.com/privacy",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="flex items-start justify-between gap-4 px-4 py-3 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <div>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "var(--ink)" }}>
                      {s.name}
                    </p>
                    <p className="text-sm">{s.desc}</p>
                  </div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono flex-shrink-0 mt-0.5 underline underline-offset-2"
                    style={{ color: "var(--accent)" }}
                  >
                    Política
                  </a>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Compras in-app">
            <p className="leading-relaxed">
              Las compras son procesadas por Apple App Store o Google Play. No almacenamos datos de
              pago.
            </p>
          </Section>

          <Section title="Publicidad">
            <p className="leading-relaxed">
              Los usuarios gratuitos ven anuncios de Google AdMob. AdMob puede usar el identificador
              publicitario de tu dispositivo (IDFA/GAID) según tus preferencias de privacidad del
              sistema operativo.
            </p>
          </Section>

          <Section title="Menores de edad">
            <p className="leading-relaxed">
              La app no está dirigida a menores de 16 años (Ley 25.326 de Protección de Datos Personales).
            </p>
          </Section>

          <Section title="Cambios a esta política">
            <p className="leading-relaxed">
              Cualquier cambio será publicado en esta página. El uso continuado de la app implica
              aceptación.
            </p>
          </Section>

          <Section title="Contacto">
            <a
              href="mailto:roman.francisc.lopez@gmail.com"
              className="text-sm underline underline-offset-2"
              style={{ color: "var(--accent)" }}
            >
              roman.francisc.lopez@gmail.com
            </a>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="font-mono uppercase tracking-[0.2em] text-xs mb-3"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        {title}
      </h2>
      <div className="text-base">{children}</div>
    </section>
  );
}
