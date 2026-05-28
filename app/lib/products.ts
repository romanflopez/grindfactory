export type ProductSlug =
  | "grovly"
  | "nowly"
  | "licencia-argentina"
  | "licencia-nautica"
  | "tu-liquidacion-al-dia"
  | "regatea-tu-multa";

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
  {
    slug: "nowly",
    name: "Nowly",
    tagline: "Tu agenda te dice qué paciente viene ahora.",
    description:
      "Turnos, pacientes, huecos libres y recordatorios por WhatsApp. Sin grillas, sin scroll infinito.",
    features: [
      "Agenda inteligente",
      "Gestión de pacientes",
      "Huecos libres",
      "Recordatorios WhatsApp",
    ],
    url: "https://nowly.grindfactory.app",
    status: "live",
    device: "desktop",
    accent: "#14b8a6",
    glow: "rgba(20, 184, 166, 0.35)",
    tint: "rgba(20, 184, 166, 0.08)",
    screenshot: "/screens/nowly.jpg",
    category: "SaaS · Salud",
    caseStudy: {
      problem:
        "Los consultorios médicos chicos usan Google Calendar o agendas de papel. No hay recordatorios automáticos, los pacientes faltan al turno, y el secretario gasta horas armando la agenda del día.",
      role: "Founder · Full-stack frontend · Product",
      stack: ["React", "TypeScript", "Tailwind", "Supabase", "WhatsApp Cloud API"],
      decisions: [
        "Vista 'hoy' como pantalla principal — no calendar grid",
        "Huecos libres calculados en tiempo real",
        "Recordatorios WhatsApp 24h antes vía Cloud API oficial",
        "Cero login para pacientes — confirma desde el link de WhatsApp",
      ],
      outcome:
        "Reduce no-shows ~40% en consultorios piloto. Onboarding < 5 min para un médico nuevo.",
    },
  },
  {
    slug: "licencia-argentina",
    name: "Licencia Argentina",
    tagline: "Aprobá el examen de conducir a la primera.",
    description:
      "Simulacros reales, señales viales y práctica ilimitada. 517 preguntas actualizadas.",
    features: ["517 preguntas", "Simulacros reales", "Señales viales", "Práctica ilimitada"],
    url: "#",
    status: "live",
    device: "phone",
    accent: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.35)",
    tint: "rgba(59, 130, 246, 0.08)",
    screenshot: "/screens/licencia-ar.png",
    category: "Mobile · Education",
    caseStudy: {
      problem:
        "Las preguntas oficiales del examen de conducir argentino están dispersas en PDFs viejos. No hay app moderna con feedback inmediato ni tracking de progreso.",
      role: "Founder · React Native · Product",
      stack: ["React Native", "Expo", "TypeScript", "SQLite", "Reanimated"],
      decisions: [
        "Offline-first: 517 preguntas + imágenes bundled en la app",
        "Modo simulacro idéntico al examen real",
        "Tracking de errores frecuentes por categoría",
      ],
      outcome:
        "Aprobada en iOS y Android stores. Usuarios reportan haber aprobado el examen a la primera.",
    },
  },
  {
    slug: "licencia-nautica",
    name: "Licencia Náutica",
    tagline: "Navegá con confianza desde el día uno.",
    description:
      "Preparación completa para el examen de timonel y patrones. Teoría, reglamentación y señales.",
    features: ["Examen de timonel", "Teoría completa", "Reglamentación", "Señales náuticas"],
    url: "#",
    status: "coming",
    device: "phone",
    accent: "#0ea5e9",
    glow: "rgba(14, 165, 233, 0.35)",
    tint: "rgba(14, 165, 233, 0.08)",
    screenshot: "/screens/licencia-nautica.png",
    category: "Mobile · Education",
    caseStudy: {
      problem:
        "Nicho ultra-específico sin app moderna. El examen de timonel ARG/PNA exige teoría densa de reglamentación y señales que no está bien organizada en ningún lugar.",
      role: "Founder · React Native · Product",
      stack: ["React Native", "Expo", "TypeScript", "SQLite"],
      decisions: [
        "Reutilización del motor de quizzes de Licencia Argentina",
        "Contenido específico PNA verificado",
      ],
      outcome: "Próximamente en stores. Hermana de Licencia Argentina.",
    },
  },
  {
    slug: "tu-liquidacion-al-dia",
    name: "Tu Liquidación al Día",
    tagline: "Calculá tu indemnización en minutos.",
    description:
      "Calculadora gratuita actualizada con la Ley 27.802 (Reforma Laboral 2026). Sabé exactamente cuánto te corresponde.",
    features: [
      "Cálculo gratuito",
      "7 rubros indemnizatorios",
      "Carta documento con IA",
      "Ley 20.744 & 27.802",
    ],
    url: "https://liquidacion-al-dia.grindfactory.app",
    status: "live",
    device: "desktop",
    accent: "#f59e0b",
    glow: "rgba(245, 158, 11, 0.35)",
    tint: "rgba(245, 158, 11, 0.08)",
    screenshot: "/screens/liquidacion-al-dia.png",
    category: "Web · Legal",
    caseStudy: {
      problem:
        "La Reforma Laboral 2026 (Ley 27.802) cambió fórmulas de indemnización. Trabajadores y abogados no tenían dónde calcularlo gratis y actualizado.",
      role: "Founder · Full-stack · Product",
      stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI", "Vercel"],
      decisions: [
        "100% gratis, sin login, sin paywall (estrategia SEO)",
        "Generación de carta documento con IA",
        "Lógica de cálculo basada directamente en articulado legal",
      ],
      outcome:
        "Ranking orgánico en Google ARG para queries de liquidación laboral. Tráfico recurrente sin ads.",
    },
  },
  {
    slug: "regatea-tu-multa",
    name: "Regatea Tu Multa",
    tagline: "Generá tu escrito de descargo en segundos.",
    description:
      "Subí la foto de tu multa. La IA analiza tu caso, detecta argumentos legales y genera el escrito de descargo en 30 segundos.",
    features: [
      "Análisis con IA",
      "Basado en Ley 24.449",
      "Descargo en PDF",
      "Análisis 100% gratis",
    ],
    url: "https://regatea-tu-multa.grindfactory.app",
    status: "live",
    device: "desktop",
    accent: "#8b5cf6",
    glow: "rgba(139, 92, 246, 0.35)",
    tint: "rgba(139, 92, 246, 0.08)",
    screenshot: "/screens/pelea-tu-multa.png",
    category: "Web · AI · Legal",
    caseStudy: {
      problem:
        "Apelar una multa de tránsito implica redactar un escrito legal técnico. La mayoría paga la multa porque no sabe cómo apelar o pagaría más en abogados que en la multa.",
      role: "Founder · Full-stack · AI integration · Product",
      stack: ["Next.js", "TypeScript", "OpenAI Vision", "Tailwind", "Vercel"],
      decisions: [
        "OCR + GPT Vision analiza la foto de la multa",
        "Prompt engineering con articulado real de Ley 24.449",
        "PDF generado listo para presentar en juzgado",
      ],
      outcome:
        "Análisis gratis, descargo de pago accesible. Resuelve un problema legal real con IA aplicada.",
    },
  },
];

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
