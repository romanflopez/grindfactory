export type ClientStatus = "deployed" | "en-propuesta";

export type Proposal = {
  name: string;
  style: string;
  url: string;
  accent: string;
  bg: string;
};

export type Client = {
  slug: string;
  name: string;
  industry: string;
  status: ClientStatus;
  brief: string;
  proposals: Proposal[];
  finalUrl?: string;
};

export const clients: Client[] = [
  {
    slug: "pablo-maril",
    name: "Pablo Maril",
    industry: "Consultoría · B2B",
    status: "deployed",
    brief:
      "Sitio de presentación personal para consultor senior con proyectos de alto impacto en retail y consumo masivo. Una sola propuesta, deployada.",
    proposals: [
      {
        name: "Split-hero editorial",
        style: "Dark con tipografía bold + imagen a pantalla completa.",
        url: "https://pablo-maril.vercel.app",
        accent: "#6366f1",
        bg: "rgba(99,102,241,0.07)",
      },
    ],
    finalUrl: "https://pablo-maril.vercel.app",
  },
  {
    slug: "dynamic-energy",
    name: "Dynamic Energy",
    industry: "Ingeniería Eléctrica · B2B",
    status: "en-propuesta",
    brief:
      "Empresa de servicios eléctricos industriales con 15 años de trayectoria. Tres direcciones de diseño presentadas para que el cliente elija.",
    proposals: [
      {
        name: "01 · Azul Ingeniería",
        style: "Dark navy + azul eléctrico. Look B2B industrial técnico.",
        url: "https://dynamic-energy.vercel.app/propuesta-1.html",
        accent: "#0EA5E9",
        bg: "rgba(14,165,233,0.07)",
      },
      {
        name: "02 · Verde Moderno",
        style: "Blanco + esmeralda. Limpio, sustentable, contemporáneo.",
        url: "https://dynamic-energy.vercel.app/propuesta-2.html",
        accent: "#059669",
        bg: "rgba(5,150,105,0.07)",
      },
      {
        name: "03 · Naranja Industrial",
        style: "Bebas Neue + naranja. Editorial, impactante, potente.",
        url: "https://dynamic-energy.vercel.app/propuesta-3.html",
        accent: "#EA580C",
        bg: "rgba(234,88,12,0.07)",
      },
    ],
  },
];
