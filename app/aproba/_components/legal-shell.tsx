import Link from "next/link";
import { APROBA } from "@/app/lib/aproba-legal";

type Props = {
  current: "privacidad" | "terminos";
  title: string;
  children: React.ReactNode;
};

export function LegalShell({ current, title, children }: Props) {
  return (
    <>
      <header className="legal-top">
        <Link href="/" className="legal-brand">GrindFactory</Link>
        <nav aria-label="Documentos legales de Aprobá" className="legal-nav">
          <Link href={APROBA.privacyPath} aria-current={current === "privacidad" ? "page" : undefined}>
            Privacidad
          </Link>
          <Link href={APROBA.termsPath} aria-current={current === "terminos" ? "page" : undefined}>
            Términos
          </Link>
        </nav>
      </header>

      <main className="legal">
        <p className="section-label">{APROBA.name} · App para Android</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-meta">
          Última actualización: <time dateTime={APROBA.updatedISO}>{APROBA.updated}</time>
        </p>
        {children}
      </main>

      <footer className="legal-foot">
        <p>
          Responsable: {APROBA.owner} · Buenos Aires, Argentina ·{" "}
          <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>
        </p>
        <p>
          <Link href={APROBA.privacyPath}>Política de privacidad</Link>
          {" · "}
          <Link href={APROBA.termsPath}>Términos de uso</Link>
          {" · "}
          <Link href="/">grindfactory.app</Link>
        </p>
      </footer>
    </>
  );
}
