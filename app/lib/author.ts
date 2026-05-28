export type Service = {
  id: string;
  title: string;
  pitch: string;
  deliverables: string[];
  priceFrom: string;
  duration: string;
  idealFor: string;
};

export type ProcessStep = {
  n: string;
  title: string;
  description: string;
  duration: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export const author = {
  name: "Román López",
  shortName: "Román",
  initials: "RL",
  role: "Sr Frontend Engineer",
  headline:
    "Construyo MVPs en producción y rescato frontends legacy para equipos que necesitan moverse rápido sin romper.",
  yearsExperience: 10,
  location: "Buenos Aires, AR",
  timezone: "GMT-3",
  available: true,
  availabilityNote: "Tomando proyectos a partir de julio 2026",
  photo: null as string | null,
  bio: [
    "Soy Sr Frontend Engineer con 10+ años entregando software en producción. Crecí con React desde sus primeras versiones y trabajé tanto en sistemas internos grandes como en startups donde el deploy lo hacía yo mismo a las 3 AM.",
    "Hace 2 años empecé a construir mis propios productos bajo el paraguas de Grind Factory — 6 apps en producción en mercados distintos (cannabis, salud, legal, educación). Eso me dio algo que pocos freelancers tienen: pasé por todas las decisiones de un producto, no solo la capa de UI.",
    "Cuando me contratás, no contratás a alguien que solo escribe React. Contratás a alguien que ya rompió cosas, ya las arregló, y sabe qué decisiones se pagan caro después.",
  ],
  email: "roman.francisc.lopez@gmail.com",
  publicEmail: "hola@grindfactory.app",
  links: {
    github: "https://github.com/romanflopez",
    linkedin: "https://www.linkedin.com/in/romanflopez/",
    workana: "https://www.workana.com/freelancer/romanflopez",
    grindFactory: "https://grindfactory.app",
    calendly: "https://cal.com/romanflopez",
  },
  skills: {
    primary: [
      { name: "React / Next.js", years: 8 },
      { name: "React Native", years: 5 },
      { name: "TypeScript", years: 7 },
      { name: "Angular", years: 6 },
    ],
    secondary: [
      "Tailwind CSS",
      "Node.js",
      "Supabase / Postgres",
      "GraphQL",
      "Redux / Zustand",
      "Vite / Turbopack",
      "Vercel / AWS",
      "Expo / EAS",
      "PWA",
      "Storybook",
      "Playwright / Jest",
      "OpenAI integration",
    ],
  },
  highlights: [
    { value: "10+", label: "Años en producción" },
    { value: "06", label: "Productos propios en el aire" },
    { value: "100%", label: "Remote · LATAM friendly" },
  ],
};

export const services: Service[] = [
  {
    id: "mvp",
    title: "MVP en producción",
    pitch:
      "Idea a producto deployado, listo para usuarios reales. Stack Next.js + Supabase + Vercel para mantener velocidad y costos bajos al inicio.",
    deliverables: [
      "Producto deployado en Vercel",
      "Auth, DB y payments configurados",
      "Landing + dashboard cliente",
      "Documentación + handoff de 2 semanas",
    ],
    priceFrom: "USD 8.000",
    duration: "6 a 10 semanas",
    idealFor:
      "Founders no técnicos o equipos que necesitan validar una idea con producto real, no mockups.",
  },
  {
    id: "frontend-migration",
    title: "Frontend migration / refactor",
    pitch:
      "Aplicaciones legacy que crecieron sin sistema. React class components, Angular viejo, jQuery, CSS sin sistema. Migrar sin romper.",
    deliverables: [
      "Audit técnico inicial",
      "Plan de migración por fases",
      "Implementación + sistema de diseño",
      "Code review continuo con tu equipo",
    ],
    priceFrom: "USD 6.000",
    duration: "4 a 8 semanas",
    idealFor:
      "Equipos con producto en producción que necesitan modernizar el frontend sin congelar features.",
  },
  {
    id: "mobile",
    title: "App mobile (React Native)",
    pitch:
      "iOS + Android desde una sola codebase con React Native y Expo. Listas para stores con pipeline de release automatizado.",
    deliverables: [
      "App publicada en App Store y Google Play",
      "Native modules según necesidad",
      "Pipeline EAS con OTA updates",
      "Documentación + handoff de 2 semanas",
    ],
    priceFrom: "USD 12.000",
    duration: "8 a 14 semanas",
    idealFor: "Startups que necesitan presencia móvil sin armar dos equipos nativos.",
  },
];

export const process: ProcessStep[] = [
  {
    n: "01",
    title: "Discovery",
    description:
      "Call de 30 minutos sin compromiso. Me contás el problema, te digo si soy el match correcto. Si no lo soy, te recomiendo a alguien que sí.",
    duration: "30 min · gratis",
  },
  {
    n: "02",
    title: "Propuesta",
    description:
      "Te paso scope, timeline, milestones y costo cerrado en USD. Sin sorpresas a mitad de camino, sin horas escondidas.",
    duration: "3 a 5 días hábiles",
  },
  {
    n: "03",
    title: "Sprints semanales",
    description:
      "Demo cada viernes con avance real, no slides. Acceso al repo desde el día 1. Iteramos sobre lo que ves, no sobre lo que imaginás.",
    duration: "Durante todo el proyecto",
  },
  {
    n: "04",
    title: "Handoff",
    description:
      "Deploy en producción, documentación técnica, runbook básico y 2 semanas de soporte incluidas por si algo cruje después del launch.",
    duration: "Última semana + 2 de soporte",
  },
];

export const faq: FAQItem[] = [
  {
    q: "¿En qué time zone trabajás?",
    a: "Buenos Aires (GMT-3). Tengo overlap con horarios EU mañana, costa este de US tarde, y Latam todo el día. Hago calls en español o inglés.",
  },
  {
    q: "¿Cómo cobrás?",
    a: "Fixed price por proyecto en USD. Pago en 3 tramos: 30% al inicio, 40% en demo intermedia, 30% al handoff. Wire, Wise, crypto o como te convenga. Factura formal disponible.",
  },
  {
    q: "¿Trabajás solo o en equipo?",
    a: "Por default trabajo solo end-to-end. Si el proyecto necesita backend más pesado o diseño UX dedicado, traigo colaboradores con los que ya trabajé y respondo yo por todo.",
  },
  {
    q: "¿Hacés diseño UI/UX?",
    a: "Hago diseño funcional senior — interfaces que funcionan, claras y pulidas. Para producto con identidad de marca fuerte o investigación UX profunda traigo diseñador.",
  },
  {
    q: "¿Qué tipo de proyectos NO tomás?",
    a: "WordPress, Shopify customization, scraping ilegal, sitios solo de marketing sin lógica, proyectos donde el cliente necesita un equipo de 5 personas. Soy ingeniero senior, no agencia.",
  },
  {
    q: "¿Y si necesito empezar antes de julio 2026?",
    a: "Escribime igual. Tengo network de gente buena que recomiendo cuando estoy lleno. Sin comisión, sin vueltas.",
  },
];
