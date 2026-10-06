import type { Metadata } from "next";
import Link from "next/link";
import { APROBA } from "@/app/lib/aproba-legal";
import { LegalShell } from "../_components/legal-shell";

export const metadata: Metadata = {
  title: { absolute: "Políticas de uso – Aprobá" },
  description:
    "Términos de uso de Aprobá, la app para practicar el examen teórico de manejo: modelo gratuito con anuncios, compra opcional y condiciones generales.",
  alternates: { canonical: APROBA.termsPath },
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <LegalShell current="terminos" title="Términos de uso">
      <h2>1. Aceptación</h2>
      <p>
        Al instalar o usar <strong>{APROBA.name}</strong> (la &ldquo;App&rdquo;) aceptás estos
        Términos. Si no estás de acuerdo, no la uses. Son un acuerdo entre vos y{" "}
        <strong>{APROBA.owner}</strong>, desarrollador independiente (&ldquo;el
        Desarrollador&rdquo;).
      </p>

      <h2>2. Qué es la App</h2>
      <p>
        {APROBA.name} es una app educativa para practicar el examen teórico de la licencia de
        conducir con preguntas de opción múltiple, señales de tránsito y tests de distintos tipos.
        Hoy está disponible para Argentina.
      </p>
      <p className="legal-note">
        La App es una herramienta de estudio complementaria. No garantiza que apruebes el examen
        oficial. La normativa puede cambiar: verificala siempre con las autoridades de tu
        jurisdicción.
      </p>

      <h2>3. Uso gratuito con anuncios</h2>
      <p>
        Todo el contenido de la App es gratuito y se financia con publicidad (banners, anuncios
        intersticiales al terminar algunos tests y videos recompensados opcionales). En el modo
        práctica, el video recompensado te permite ver la respuesta correcta tras un error: si lo
        cerrás antes de tiempo, no se revela. Las explicaciones son siempre gratuitas.
      </p>

      <h2>4. Compra opcional &ldquo;Quitar anuncios&rdquo;</h2>
      <p>
        Podés eliminar la publicidad con un <strong>pago único</strong> (no es una suscripción)
        procesado por Google Play. No desbloquea contenido, porque todo el contenido ya es
        gratuito.
      </p>
      <ul>
        <li>
          <strong>Restaurar:</strong> si reinstalás la App o cambiás de dispositivo, podés usar
          &ldquo;Restaurar compra&rdquo; con la misma cuenta de Google Play.
        </li>
        <li>
          <strong>Reembolsos:</strong> se rigen por las políticas de Google Play. Para consultas
          sobre una compra, escribinos a{" "}
          <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>.
        </li>
      </ul>

      <h2>5. Propiedad intelectual</h2>
      <p>
        El código, el diseño, la interfaz y el contenido original de la App pertenecen al
        Desarrollador y están protegidos por las leyes aplicables. Las preguntas se basan en
        manuales y normativa oficial de tránsito, y las señales reflejan la normativa vigente en
        cada jurisdicción.
      </p>
      <p>
        Te concedemos una licencia limitada, no exclusiva e intransferible para usar la App en tu
        dispositivo personal. No podés copiarla, modificarla, distribuirla, venderla,
        sublicenciarla ni realizar ingeniería inversa.
      </p>

      <h2>6. Uso aceptable</h2>
      <ul>
        <li>No uses la App para fines ilegales o no autorizados.</li>
        <li>No interfieras con su funcionamiento ni con los servicios de terceros que integra.</li>
        <li>No reproduzcas ni publiques su contenido sin autorización expresa.</li>
        <li>No intentes eludir la publicidad ni la verificación de compras.</li>
      </ul>

      <h2>7. Exactitud del contenido</h2>
      <p>
        Hacemos nuestro mejor esfuerzo para que las preguntas y respuestas reflejen la normativa
        vigente, pero pueden existir errores, omisiones o desactualizaciones. La App no reemplaza
        el estudio del manual oficial ni las clases de manejo.
      </p>

      <h2>8. Limitación de responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, el Desarrollador no responde por daños directos,
        indirectos o consecuentes derivados del uso o de la imposibilidad de uso de la App,
        incluido no aprobar el examen, la pérdida de datos guardados en el dispositivo, las
        interrupciones del servicio o los errores del contenido. La App se ofrece &ldquo;tal como
        está&rdquo;, sin garantías expresas ni implícitas. Esto no limita los derechos que la
        legislación de defensa del consumidor te reconozca de manera irrenunciable.
      </p>

      <h2>9. Servicios de terceros</h2>
      <p>
        La App integra Google AdMob, RevenueCat, Sentry y PostHog, y las compras se procesan por
        Google Play. Cada uno se rige por sus propios términos y políticas. El detalle de qué datos
        reciben está en la{" "}
        <Link href={APROBA.privacyPath}>Política de privacidad</Link>.
      </p>

      <h2>10. Cambios</h2>
      <p>
        Podemos modificar, suspender o discontinuar la App, y actualizar estos Términos. Publicaremos
        la versión vigente en esta página con su fecha de actualización y, si el cambio es
        significativo, lo avisaremos en la App. Usarla después de un cambio implica aceptarlo.
      </p>

      <h2>11. Ley aplicable y jurisdicción</h2>
      <p>
        Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia se
        someterá a los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires, sin perjuicio
        de la competencia que te corresponda como consumidor según la ley.
      </p>

      <h2>12. Contacto</h2>
      <p>
        {APROBA.owner} ·{" "}
        <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>
      </p>
    </LegalShell>
  );
}
