import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { author, services } from "@/app/lib/author";
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
const TITLE = `${author.name} — ${author.role} · Freelance`;
const DESCRIPTION = `${author.role} con ${author.yearsExperience}+ años de experiencia. React, React Native, Next.js, Angular y TypeScript. Disponible para proyectos freelance desde Buenos Aires.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${author.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Román López",
    "Roman Lopez",
    "Sr Frontend Engineer",
    "freelance frontend",
    "React developer Argentina",
    "React Native developer",
    "Next.js freelance",
    "Angular developer",
    "TypeScript engineer",
    "Buenos Aires freelance",
    "Upwork frontend",
    "Workana frontend",
    "Toptal frontend",
    "grindfactory",
  ],
  authors: [{ name: author.name, url: SITE_URL }],
  creator: author.name,
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
    type: "profile",
    siteName: author.name,
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
    title: author.name,
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  url: `${SITE_URL}/`,
  image: author.photo ? `${SITE_URL}${author.photo}` : `${SITE_URL}/og-image.png`,
  jobTitle: author.role,
  description: DESCRIPTION,
  email: author.publicEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  worksFor: {
    "@type": "Organization",
    name: "Grind Factory",
    url: `${SITE_URL}/`,
  },
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "Angular",
    "TypeScript",
    "Frontend Architecture",
    "Mobile Development",
  ],
  sameAs: [author.links.linkedin, author.links.github, author.links.workana],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${author.name} — ${author.role}`,
  url: `${SITE_URL}/`,
  inLanguage: "es-AR",
  author: {
    "@type": "Person",
    name: author.name,
    url: `${SITE_URL}/`,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${author.name} — Freelance Frontend Engineering`,
  url: `${SITE_URL}/`,
  provider: {
    "@type": "Person",
    name: author.name,
  },
  areaServed: "Worldwide",
  serviceType: services.map((s) => s.title),
  description: DESCRIPTION,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
      </body>
    </html>
  );
}
