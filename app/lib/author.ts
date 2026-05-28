export type Service = {
  id: string;
  title: string;
  pitch: string;
  deliverables: string[];
  idealFor: string;
  accent: string;
};

export const author = {
  name: "Román López",
  shortName: "Román",
  role: "Sr Frontend Engineer",
  headline: "Construyo productos web y móviles que escalan.",
  subheadline:
    "10+ años de experiencia en React, React Native, Next.js, Angular y TypeScript. Disponible para proyectos freelance.",
  yearsExperience: 10,
  location: "Buenos Aires, AR",
  timezone: "GMT-3",
  available: true,
  // Placeholder hasta subir foto real. Cuando tengas la foto: pone "/me.jpg" y subi el archivo a /public/me.jpg
  photo: null as string | null,
  bio: [
    "Soy Sr Frontend Engineer con más de 10 años en la industria. Empecé con jQuery cuando IE8 todavía importaba y crecí con React desde sus primeras versiones.",
    "Construí desde dashboards internos para fintechs hasta apps móviles en producción. También levanto productos propios bajo el paraguas de Grind Factory cuando no estoy en proyectos de clientes.",
    "Lo que me distingue: ya pasé por las decisiones difíciles. Sé cuándo refactorizar y cuándo dejarlo. Cuándo abstraer y cuándo duplicar. Cuándo decir que no.",
  ],
  email: "roman.francisc.lopez@gmail.com",
  publicEmail: "hola@grindfactory.app",
  links: {
    github: "https://github.com/romanflopez",
    linkedin: "https://www.linkedin.com/in/romanflopez/",
    workana: "https://www.workana.com/freelancer/romanflopez",
    grindFactory: "https://grindfactory.app",
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
      "Vite / Webpack / Turbopack",
      "Vercel / AWS",
      "Expo",
      "PWA",
      "Storybook",
      "Playwright / Jest",
      "OpenAI / AI integration",
    ],
  },
  highlights: [
    { years: "10+", label: "Años en producción" },
    { years: "06", label: "Productos propios en el aire" },
    { years: "20+", label: "Equipos / clientes" },
  ],
};

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    pitch:
      "Implementación de interfaces complejas en React, Next.js o Angular. Performance, accesibilidad y mantenibilidad como defaults, no afterthought.",
    deliverables: [
      "Arquitectura React/Next App Router",
      "Sistema de diseño + Storybook",
      "Migraciones legacy → moderno",
      "Code review + mentoring",
    ],
    idealFor: "Equipos que necesitan un Sr que entre y mueva el código sin romper.",
    accent: "#10b981",
  },
  {
    id: "mobile",
    title: "Mobile (React Native)",
    pitch:
      "Apps móviles cross-platform con React Native y Expo. iOS + Android desde una sola codebase, listas para stores.",
    deliverables: [
      "App nueva end-to-end",
      "Native modules + integraciones",
      "Optimización de performance",
      "Pipeline de release (EAS)",
    ],
    idealFor: "Startups que necesitan app móvil sin armar dos equipos.",
    accent: "#06b6d4",
  },
  {
    id: "mvp",
    title: "MVP Full-Stack",
    pitch:
      "De idea a producto en producción en semanas. Next.js + Supabase + Vercel. Stack pragmático, deploy continuo, costos bajos al inicio.",
    deliverables: [
      "Producto deployado y monitoreado",
      "Auth + DB + payments setup",
      "Landing + dashboard cliente",
      "Documentación para handoff",
    ],
    idealFor: "Founders no técnicos o equipos que quieren validar rápido.",
    accent: "#8b5cf6",
  },
];
