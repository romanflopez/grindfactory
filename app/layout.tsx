import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { products } from "@/app/lib/products";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://grindfactory.app";
const TITLE = "Grind Factory — Apps propias. Nichos raros.";
const DESCRIPTION =
  "Una fábrica de apps independientes. Cada una resuelve un problema puntual en un mercado distinto — cannabis, salud, trámites, derecho laboral y más. Desde Buenos Aires.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "grind factory",
    "grindfactory",
    "apps argentina",
    "indie apps",
    "software buenos aires",
    "freelance frontend",
    "sr frontend engineer",
    "react native argentina",
    "next.js freelance",
    "grovly",
    "nowly",
    "licencia argentina",
    "liquidacion laboral",
    "regatea tu multa",
  ],
  authors: [{ name: "Grind Factory" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Grind Factory",
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
    title: "Grind Factory",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06060a" },
    { media: "(prefers-color-scheme: light)", color: "#06060a" },
  ],
  colorScheme: "dark",
  viewportFit: "cover",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grind Factory",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.webp`,
  image: `${SITE_URL}/og-image.png`,
  description: DESCRIPTION,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  },
  email: "hola@grindfactory.app",
  slogan: "Apps propias. Nichos raros.",
  founder: {
    "@type": "Person",
    name: "Román López",
    jobTitle: "Sr Frontend Engineer",
    url: `${SITE_URL}/`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Grind Factory",
  url: `${SITE_URL}/`,
  inLanguage: "es-AR",
  publisher: {
    "@type": "Organization",
    name: "Grind Factory",
    url: `${SITE_URL}/`,
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Apps de Grind Factory",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type":
        p.device === "phone"
          ? "MobileApplication"
          : p.category.includes("SaaS")
            ? "SoftwareApplication"
            : "WebApplication",
      name: p.name,
      description: p.description,
      url: p.url !== "#" ? p.url : `${SITE_URL}/projects/${p.slug}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: p.device === "phone" ? "iOS, Android" : "Web",
    },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      </body>
    </html>
  );
}
