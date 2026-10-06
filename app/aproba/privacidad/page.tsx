import type { Metadata } from "next";
import Link from "next/link";
import { APROBA } from "@/app/lib/aproba-legal";
import { LegalShell } from "../_components/legal-shell";

export const metadata: Metadata = {
  title: { absolute: "Política de privacidad – Aprobá" },
  description:
    "Política de privacidad de Aprobá, la app para practicar el examen teórico de manejo: qué datos salen del dispositivo, a quién y para qué.",
  openGraph: { title: "Política de privacidad – Aprobá", url: APROBA.privacyPath, type: "article" },
  alternates: { canonical: APROBA.privacyPath },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <LegalShell current="privacidad" title="Política de privacidad – Aprobá">
      <p>
        Esta política explica qué información trata <strong>{APROBA.name}</strong> (la
        &ldquo;App&rdquo;), una aplicación de Android para practicar el examen teórico de manejo,
        y qué hacemos con ella.
      </p>
      <p className="legal-note">
        En resumen: la App no tiene cuentas ni te pide email, nombre ni teléfono. Todo tu progreso
        queda solo en tu dispositivo. Salen del dispositivo únicamente datos técnicos y anónimos
        para mostrar anuncios, gestionar la compra opcional, detectar errores y medir el uso.
      </p>

      <h2>1. Responsable y contacto</h2>
      <p>
        El responsable del tratamiento es <strong>{APROBA.owner}</strong>, desarrollador
        independiente (GrindFactory, Buenos Aires, Argentina). Podés escribirnos a{" "}
        <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>.
      </p>

      <h2>2. Datos que quedan solo en tu dispositivo</h2>
      <p>Estos datos se guardan localmente y no los recibimos ni los enviamos a ningún servidor:</p>
      <ul>
        <li>País elegido y clase de licencia.</li>
        <li>Fecha de tu examen (si la cargás).</li>
        <li>Historial de tests, resultados y preguntas que erraste.</li>
        <li>Racha, meta diaria y recordatorios configurados.</li>
      </ul>
      <p>
        Se conservan en el dispositivo hasta que desinstales la App o borres sus datos desde los
        ajustes de Android.
      </p>

      <h2>3. Datos que se recolectan, para qué y con quién se comparten</h2>
      <p>
        Los datos que salen del dispositivo se comparten únicamente con los cuatro servicios de
        terceros que se detallan abajo: Google AdMob, RevenueCat, Sentry y PostHog. Cada uno trata
        los datos según su propia política.
      </p>

      <h3>Google AdMob — publicidad</h3>
      <ul>
        <li>
          <strong>Qué recibe:</strong> identificador de publicidad del dispositivo, dirección IP,
          modelo y versión del sistema operativo, e interacciones con los anuncios.
        </li>
        <li><strong>Para qué:</strong> mostrar publicidad, que financia la App.</li>
        <li>
          <strong>Condiciones:</strong> solo se muestran anuncios <strong>no personalizados</strong>{" "}
          y solo si no compraste &ldquo;Quitar anuncios&rdquo;. Con la compra, la App no pide
          anuncios.
        </li>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de Google
          </a>
        </li>
      </ul>

      <h3>RevenueCat — compra &ldquo;Quitar anuncios&rdquo;</h3>
      <ul>
        <li>
          <strong>Qué recibe:</strong> un identificador anónimo propio de RevenueCat, datos de la
          compra de Google Play, el país de la tienda y datos del dispositivo.
        </li>
        <li>
          <strong>Para qué:</strong> verificar y restaurar tu compra. No hay cuenta ni email.
        </li>
        <li>
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de RevenueCat
          </a>
        </li>
      </ul>

      <h3>Sentry — errores y rendimiento</h3>
      <ul>
        <li>
          <strong>Qué recibe:</strong> crashes y errores (stack trace, modelo de dispositivo,
          versión de Android y de la App, mensaje de la excepción) y trazas de rendimiento
          muestreadas.
        </li>
        <li><strong>Para qué:</strong> detectar y corregir errores y medir el rendimiento.</li>
        <li>
          <strong>Condiciones:</strong> solo en la versión de producción. No se asocia ningún
          usuario a los eventos, no se envían datos personales ni registros de consola, y está
          activada la opción para no almacenar direcciones IP.
        </li>
        <li>
          <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">
            Política de privacidad de Sentry
          </a>
        </li>
      </ul>

      <h3>PostHog — estadísticas de uso (servidores en EE. UU.)</h3>
      <ul>
        <li><strong>Para qué:</strong> entender cómo se usa la App para mejorarla.</li>
        <li>
          <strong>Identificador:</strong> un código anónimo (UUID) generado en tu dispositivo. No
          identificamos personas, no grabamos sesiones y la geolocalización por IP está
          desactivada.
        </li>
        <li>
          <strong>Eventos que se envían:</strong> apertura de la App, país elegido, clase de
          licencia elegida, cuántos días faltan para el examen (no la fecha), inicio y fin de tests
          (tipo de test, puntaje y si aprobaste o no), vistas de la pantalla Premium y del paywall
          con su origen, compra completada (precio) y eventos de anuncios recompensados e
          intersticiales (solo tipo de test o de anuncio).
        </li>
        <li>
          <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">
            Política de privacidad de PostHog
          </a>
        </li>
      </ul>

      <p>
        No vendemos tus datos ni los usamos para otro fin que no sea el funcionamiento, la
        mejora y la financiación de la App.
      </p>

      <h2>4. Publicidad</h2>
      <p>
        Mientras no compres &ldquo;Quitar anuncios&rdquo;, la App muestra banners, anuncios
        intersticiales al terminar algunos tests y, en el modo práctica, videos recompensados
        opcionales para ver la respuesta correcta. Todos se piden en modo no personalizado, es
        decir, sin armar un perfil tuyo para segmentar publicidad. Podés revisar tus preferencias
        generales de anuncios de Google en{" "}
        <a href="https://myadcenter.google.com" target="_blank" rel="noopener noreferrer">
          myadcenter.google.com
        </a>
        .
      </p>

      <h2>5. Compras</h2>
      <p>
        La compra opcional &ldquo;Quitar anuncios&rdquo; es un pago único que procesa Google Play.
        No vemos ni almacenamos datos de tu tarjeta ni de tu cuenta bancaria. RevenueCat recibe la
        información de la compra para reconocer que la hiciste.
      </p>

      <h2>6. Permisos de la App</h2>
      <ul>
        <li><strong>Internet y estado de red:</strong> para anuncios, compras y reportes.</li>
        <li>
          <strong>Notificaciones (opcional):</strong> solo se te piden desde Ajustes cuando activás
          los recordatorios. Si no las permitís, la App funciona igual. Los recordatorios se
          programan en tu dispositivo, sin servidor.
        </li>
        <li><strong>Vibración:</strong> para las notificaciones.</li>
        <li><strong>Facturación de Google Play:</strong> para la compra opcional.</li>
        <li><strong>ID de publicidad:</strong> para AdMob, como se explicó arriba.</li>
      </ul>
      <p>
        La App no usa almacenamiento, ubicación, cámara, micrófono ni contactos.
      </p>

      <h2>7. Notificaciones locales</h2>
      <p>
        Si activás los recordatorios desde Ajustes, la App programa notificaciones locales en tu
        dispositivo: un recordatorio diario a la hora que elijas y un aviso una semana antes de la
        fecha de tu examen, si la cargaste. Se generan en el dispositivo, sin servidor ni envío de
        datos, y podés desactivarlas cuando quieras desde la App o desde los ajustes de Android.
      </p>

      <h2>8. Conservación de los datos y transferencias internacionales</h2>
      <p>
        Los datos locales se conservan hasta que desinstales la App. No operamos servidores
        propios con datos de usuarios: los datos que reciben AdMob, RevenueCat, Sentry y PostHog
        los conservan esos proveedores según sus políticas, y pueden procesarse fuera de
        Argentina, incluidos servidores en Estados Unidos.
      </p>

      <h2>9. Tus derechos y cómo eliminar tus datos</h2>
      <p>
        Como no hay cuentas ni datos que te identifiquen directamente, la mayor parte de la
        información que se genera es anónima. Aun así, podés escribirnos para consultar,
        rectificar o pedir la supresión de cualquier dato personal que creas que tratamos, y lo
        atenderemos conforme a la Ley 25.326 de Protección de los Datos Personales de Argentina.
      </p>
      <ul>
        <li>
          <strong>Datos locales</strong> (progreso, país, fecha de examen, recordatorios): se
          eliminan al desinstalar la App o al borrar sus datos desde los ajustes de Android.
        </li>
        <li>
          <strong>Analítica (PostHog):</strong> usa un identificador anónimo generado en tu
          dispositivo, que no se vincula a tu nombre, tu mail ni ninguna cuenta. Al desinstalar la
          App, ese identificador se elimina del dispositivo y deja de poder asociarse a él.
        </li>
        <li>
          <strong>Compras:</strong> las gestiona Google Play y podés consultarlas desde tu cuenta
          de Google.
        </li>
      </ul>
      <p>
        Para cualquier consulta, acceso, rectificación, supresión u oposición, podés escribir a{" "}
        <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>. Respondemos en un plazo razonable.
      </p>
      <p>
        La Agencia de Acceso a la Información Pública (AAIP) es el órgano de control de la Ley
        25.326 y atiende denuncias y reclamos de quienes consideren afectados sus derechos de
        protección de datos.
      </p>

      <h2>10. Seguridad</h2>
      <p>
        Las conexiones de la App con los servicios de terceros se realizan de forma cifrada
        mediante HTTPS. Los datos de progreso quedan en tu dispositivo y no se transmiten.
        Ningún sistema es completamente seguro, por eso te recomendamos mantener tu dispositivo
        actualizado y protegido con bloqueo de pantalla.
      </p>

      <h2>11. Menores de edad</h2>
      <p>
        La App no está dirigida a menores de 13 años y no recopilamos intencionalmente información
        de ellos. Si creés que un menor nos proporcionó datos, escribinos para que los eliminemos.
      </p>

      <h2>12. Cambios en esta política y fecha de actualización</h2>
      <p>
        Si cambiamos esta política, publicaremos la versión nueva en esta misma página y
        actualizaremos la fecha de &ldquo;Última actualización&rdquo; que figura al comienzo
        (hoy: {APROBA.updated}). Si el cambio es significativo, lo avisaremos también en la App.
      </p>

      <h2>13. Contacto</h2>
      <p>
        {APROBA.owner} ·{" "}
        <a href={`mailto:${APROBA.email}`}>{APROBA.email}</a>
      </p>
      <p>
        Ver también los <Link href={APROBA.termsPath}>Términos de uso</Link>.
      </p>
    </LegalShell>
  );
}
