import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://grindfactory.app";
const TITLE = "GrindFactory — Diseño y Desarrollo de Software · Buenos Aires";
const DESCRIPTION =
  "Estudio de diseño y desarrollo en Buenos Aires. Landings que convierten, SaaS a medida y automatizaciones — pensados, dibujados y codeados por el mismo equipo que ya tiene productos propios en la calle.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · GrindFactory`,
  },
  description: DESCRIPTION,
  keywords: [
    "diseño web Buenos Aires",
    "desarrollo software Argentina",
    "agencia digital Buenos Aires",
    "landing pages Argentina",
    "SaaS a medida",
    "automatización WhatsApp Telegram",
    "React Next.js TypeScript",
    "Supabase Argentina",
    "desarrollo web PyMEs",
    "grindfactory",
  ],
  authors: [{ name: "GrindFactory", url: SITE_URL }],
  creator: "GrindFactory",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "GrindFactory",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "es_AR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "GrindFactory",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0B" },
    { media: "(prefers-color-scheme: light)", color: "#0A0A0B" },
  ],
  colorScheme: "dark",
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GrindFactory",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: ["AR", "Worldwide"],
  serviceType: [
    "Diseño web",
    "Desarrollo de software",
    "SaaS a medida",
    "Automatización e IA",
    "Landing pages",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+54-9-11-3850-0960",
    contactType: "sales",
    availableLanguage: "Spanish",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-AR"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
