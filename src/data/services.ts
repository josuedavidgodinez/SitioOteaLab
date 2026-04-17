/**
 * services.ts
 * Catálogo completo de servicios de Otea Lab.
 */

export interface Service {
  id: string;
  icon: string; // SVG path data (heroicons style)
  title: { es: string; en: string };
  description: { es: string; en: string };
  bullets: { es: string[]; en: string[] };
  tags: string[];
}

export const services: Service[] = [
  {
    id: "web-fullstack",
    icon: "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3",
    title: {
      es: "Desarrollo Web Full-Stack",
      en: "Full-Stack Web Development",
    },
    description: {
      es: "Aplicaciones web modernas, rápidas y escalables, desde landing pages de alto impacto hasta plataformas empresariales complejas.",
      en: "Modern, fast, and scalable web applications — from high-impact landing pages to complex enterprise platforms.",
    },
    bullets: {
      es: [
        "SPAs y aplicaciones con React o Angular",
        "Sitios con WordPress y plugins personalizados",
        "Integración con APIs de terceros y CRMs",
        "Optimización de rendimiento y SEO técnico",
      ],
      en: [
        "SPAs and applications with React or Angular",
        "WordPress sites with custom plugins",
        "Third-party API and CRM integrations",
        "Performance optimization and technical SEO",
      ],
    },
    tags: ["React", "Angular", "TypeScript", "PHP", "WordPress"],
  },
  {
    id: "mobile",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3",
    title: {
      es: "Aplicaciones Móviles",
      en: "Mobile Applications",
    },
    description: {
      es: "Apps iOS y Android con una sola base de código. Soluciones nativas en rendimiento y experiencia de usuario.",
      en: "iOS and Android apps from a single codebase. Native-level performance and user experience.",
    },
    bullets: {
      es: [
        "Apps multiplataforma con React Native",
        "Apps híbridas con Ionic + Angular/React",
        "Integración con APIs REST y servicios en la nube",
        "Publicación en App Store y Google Play",
      ],
      en: [
        "Cross-platform apps with React Native",
        "Hybrid apps with Ionic + Angular/React",
        "REST API and cloud service integration",
        "App Store and Google Play publishing",
      ],
    },
    tags: ["React Native", "Ionic", "iOS", "Android"],
  },
  {
    id: "backend-api",
    icon: "M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 6 0m-6 0H3m16.5 0a3 3 0 0 0 3-3m-3 3a3 3 0 1 1-6 0m6 0h1.5m-7.5 0v.75m0-.75a3 3 0 0 0-3-3m3 3a3 3 0 0 1 3-3m-6 0V5.625",
    title: {
      es: "Backend & APIs",
      en: "Backend & APIs",
    },
    description: {
      es: "APIs robustas y bien documentadas que conectan tu negocio con cualquier sistema externo. Arquitecturas pensadas para escalar.",
      en: "Robust, well-documented APIs that connect your business to any external system. Architectures designed to scale.",
    },
    bullets: {
      es: [
        "APIs RESTful con Node.js, PHP o .NET",
        "Autenticación segura (JWT, OAuth2)",
        "Webhooks y procesamiento de eventos en tiempo real",
        "Documentación con Swagger / OpenAPI",
      ],
      en: [
        "RESTful APIs with Node.js, PHP, or .NET",
        "Secure authentication (JWT, OAuth2)",
        "Webhooks and real-time event processing",
        "Swagger / OpenAPI documentation",
      ],
    },
    tags: ["Node.js", "PHP", ".NET", "REST", "JWT"],
  },
  {
    id: "cloud-serverless",
    icon: "M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z",
    title: {
      es: "Soluciones Cloud & Serverless",
      en: "Cloud & Serverless Solutions",
    },
    description: {
      es: "Infraestructura en la nube que escala sola, paga solo lo que usa y elimina cuellos de botella operativos.",
      en: "Cloud infrastructure that scales automatically, charges only for what you use, and eliminates operational bottlenecks.",
    },
    bullets: {
      es: [
        "Cloud Functions y Cloud Run en GCP",
        "BigQuery para analítica y reportes a escala",
        "Pub/Sub para arquitecturas orientadas a eventos",
        "Automatización con Cloud Scheduler",
      ],
      en: [
        "Cloud Functions and Cloud Run on GCP",
        "BigQuery for analytics and large-scale reporting",
        "Pub/Sub for event-driven architectures",
        "Automation with Cloud Scheduler",
      ],
    },
    tags: ["GCP", "Cloud Functions", "BigQuery", "Pub/Sub"],
  },
  {
    id: "wordpress-automation",
    icon: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.764-.384.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    title: {
      es: "WordPress & Automatización",
      en: "WordPress & Automation",
    },
    description: {
      es: "Plugins y flujos que conectan tu WordPress con tu CRM, herramientas de marketing y plataformas de automatización.",
      en: "Plugins and flows that connect your WordPress to your CRM, marketing tools, and automation platforms.",
    },
    bullets: {
      es: [
        "Plugins personalizados con integración a APIs de CRM",
        "Seguimiento multicanal: SMS, email y notificaciones",
        "Flujos automatizados con Zapier, Pabbly y Make",
        "Programación de mensajes y nurturing de leads",
      ],
      en: [
        "Custom plugins with CRM API integration",
        "Multichannel tracking: SMS, email, and notifications",
        "Automated flows with Zapier, Pabbly, and Make",
        "Message scheduling and lead nurturing",
      ],
    },
    tags: ["WordPress", "PHP", "Zapier", "Pabbly", "CRM"],
  },
  {
    id: "ai-integrations",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
    title: {
      es: "Integraciones de IA",
      en: "AI Integrations",
    },
    description: {
      es: "Incorporamos inteligencia artificial a tus sistemas actuales para automatizar y optimizar procesos internos y externos, sin necesidad de reemplazar tu infraestructura.",
      en: "We integrate artificial intelligence into your existing systems to automate and optimize internal and external processes, without replacing your current infrastructure.",
    },
    bullets: {
      es: [
        "Agentes y asistentes con LLMs (GPT, Claude, Gemini)",
        "Automatización de flujos internos con IA generativa",
        "Clasificación, extracción y análisis de datos con ML",
        "Integración con sistemas existentes vía API",
      ],
      en: [
        "Agents and assistants powered by LLMs (GPT, Claude, Gemini)",
        "Internal workflow automation with generative AI",
        "Data classification, extraction, and analysis with ML",
        "Integration with existing systems via API",
      ],
    },
    tags: ["OpenAI", "Claude", "MCP", "Python", "API"],
  },
  {
    id: "consulting",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    title: {
      es: "Consultoría en Transformación Digital",
      en: "Digital Transformation Consulting",
    },
    description: {
      es: "Asesoría estratégica para que tu empresa adopte tecnología que genere impacto real, no solo gasto en herramientas.",
      en: "Strategic advisory to help your business adopt technology that generates real impact, not just tool spending.",
    },
    bullets: {
      es: [
        "Diagnóstico de procesos y oportunidades de automatización",
        "Selección de stack tecnológico adecuado al negocio",
        "Hoja de ruta de digitalización por fases",
        "Acompañamiento en implementación y adopción",
      ],
      en: [
        "Process diagnosis and automation opportunities",
        "Technology stack selection aligned to business needs",
        "Phased digitalization roadmap",
        "Implementation and adoption support",
      ],
    },
    tags: ["Estrategia", "Agile", "Automatización", "Roadmap"],
  },
];
