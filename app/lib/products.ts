export type ProductSlug = "grovly";

export type Product = {
  slug: ProductSlug;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  url: string;
  status: "live" | "coming";
  device: "desktop" | "phone";
  accent: string;
  glow: string;
  tint: string;
  screenshot: string;
  category: string;
  caseStudy: {
    problem: string;
    role: string;
    stack: string[];
    decisions: string[];
    outcome: string;
  };
};

export const products: Product[] = [
  {
    slug: "grovly",
    name: "Grovly",
    tagline: "El sistema operativo de tu club cannábico.",
    description:
      "Socios, inventario, dispensario, turnos, catálogo online, REPROCANN y reportes. Todo en un solo lugar.",
    features: [
      "Gestión de socios",
      "Inventario & dispensario",
      "Catálogo online",
      "Reportes & REPROCANN",
    ],
    url: "https://grovly.grindfactory.app",
    status: "live",
    device: "desktop",
    accent: "#10b981",
    glow: "rgba(16, 185, 129, 0.35)",
    tint: "rgba(16, 185, 129, 0.08)",
    screenshot: "/screens/grovly.jpg",
    category: "SaaS · B2B",
    caseStudy: {
      problem:
        "Los clubes cannábicos en Argentina operan con planillas de Excel, WhatsApp y cuadernos. No hay control de stock real, no se trackean socios REPROCANN, ni se mide rotación de producto.",
      role: "Founder · Full-stack frontend · Product",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "Vite", "PWA"],
      decisions: [
        "Multi-tenant por club desde día uno",
        "Catálogo público read-only sin auth para drivers de tráfico",
        "Generación automática de planillas REPROCANN (compliance ARG)",
        "Mobile-first: el 80% del staff usa el sistema desde el teléfono",
      ],
      outcome:
        "Sistema en producción, multi-tenant, usado por clubes en Buenos Aires. Catálogo online indexado por Google con tráfico orgánico.",
    },
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

