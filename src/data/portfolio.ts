/**
 * portfolio.ts
 * Portafolio de proyectos de Otea Lab.
 * Agregar nuevos proyectos aquí — se renderizan automáticamente.
 */

export interface PortfolioProject {
  id: string;
  title: { es: string; en: string };
  client: string;
  description: { es: string; en: string };
  tags: string[];
  url?: string;
  image?: string; // path relativo desde /public/
  featured: boolean;
}

export const projects: PortfolioProject[] = [
  {
    id: "rancho-ojo-prieto",
    title: {
      es: "Sitio Web — Rancho Ojo Prieto",
      en: "Website — Rancho Ojo Prieto",
    },
    client: "Rancho Ojo Prieto",
    description: {
      es: "Sitio web para un negocio de lácteos de cabra artesanales con entrega en toda Guatemala. Incluye catálogo de productos (leche, yogurt, quesos, kéfir, miel, café orgánico), integración con WhatsApp para pedidos directos, y optimización SEO con Schema.org.",
      en: "Website for a artisan goat dairy business with delivery across Guatemala. Features a product catalog (milk, yogurt, cheeses, kefir, honey, organic coffee), WhatsApp integration for direct orders, and SEO optimization with Schema.org structured data.",
    },
    tags: ["Tailwind CSS", "WhatsApp API", "SEO", "Schema.org"],
    url: "https://ranchoojoprieto.com",
    image: "/assets/portfolio/rancho-ojo-prieto.png",
    featured: true,
  },
  {
    id: "insuguru",
    title: {
      es: "Sistema de Monitoreo — insuguru.es",
      en: "Monitoring System — insuguru.es",
    },
    client: "AriseWeb (España)",
    description: {
      es: "Sistema basado en React para el monitoreo de actividad de contratos de seguros. Integra visualización de datos por API y funciones de seguimiento de usuarios para gestores de seguros digitales.",
      en: "React-based system for monitoring insurance contract activity. Integrates API data visualization and user tracking features for digital insurance managers.",
    },
    tags: ["React", "Node.js", "API REST", "Data Visualization"],
    url: "https://insuguru.es",
    image: "/assets/portfolio/insuguru.png", // sistema privado — no hay pantalla pública disponible
    featured: true,
  },
  {
    id: "alessi-weddings",
    title: {
      es: "Automatización CRM & WordPress — Alessi Weddings Corp.",
      en: "CRM Automation & WordPress — Alessi Weddings Corp.",
    },
    client: "Alessi Weddings Corp. (EE.UU.)",
    description: {
      es: "Suite de plugins WordPress a medida para una empresa de bodas de lujo en EE.UU. Incluye: captura de leads con integración al CRM vía API, seguimiento multicanal (SMS y email), programación de mensajes y flujos de nurturing con Zapier y Pabbly. También desarrollé un plugin para que fotógrafos suban contenido desde un formulario WordPress y reciban automáticamente un enlace de Dropbox para la entrega de archivos.",
      en: "Custom WordPress plugin suite for a luxury wedding company in the USA. Features: lead capture with CRM API integration, multichannel tracking (SMS and email), automated message scheduling, and nurturing flows via Zapier and Pabbly. Also built a plugin allowing photographers to upload content via a WordPress form and automatically receive a Dropbox link for file delivery.",
    },
    tags: ["WordPress", "PHP", "CRM API", "Zapier", "Pabbly", "Dropbox API", "SMS & Email"],
    url: undefined,
    image: undefined,
    featured: true,
  },
  {
    id: "tresmares",
    title: {
      es: "Plugins WordPress — tresmares.com",
      en: "WordPress Plugins — tresmares.com",
    },
    client: "AriseWeb (España)",
    description: {
      es: "Desarrollo de plugins personalizados para WordPress que integran APIs de terceros para la contratación de seguros digitales y procesamiento automatizado de formularios.",
      en: "Custom WordPress plugins integrating third-party APIs for digital insurance contracting and automated form processing.",
    },
    tags: ["WordPress", "PHP", "APIs de terceros", "Automatización"],
    url: "https://tresmares.com",
    image: "/assets/portfolio/tresmares.png",
    featured: false,
  },
];
