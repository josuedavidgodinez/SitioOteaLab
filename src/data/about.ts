/**
 * about.ts
 * Bilingual content for the Nosotros page.
 * Keep structured data here, simple strings in i18n/es.ts & en.ts.
 */

export const values = [
  {
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    title: { es: "Visión estratégica", en: "Strategic vision" },
    description: {
      es: "Entendemos tu negocio antes de escribir una línea de código. La tecnología es el medio, no el fin.",
      en: "We understand your business before writing a single line of code. Technology is the means, not the end.",
    },
  },
  {
    icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z",
    title: { es: "Calidad sin negociar", en: "Quality without compromise" },
    description: {
      es: "Código limpio, documentado y probado. Entregamos soluciones que duran, no parches que se rompen.",
      en: "Clean, documented, and tested code. We deliver solutions that last, not patches that break.",
    },
  },
  {
    icon: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z",
    title: { es: "Comunicación clara", en: "Clear communication" },
    description: {
      es: "Sin tecnicismos innecesarios. Te mantenemos informado en cada etapa con reportes y demos reales.",
      en: "No unnecessary jargon. We keep you informed at every stage with real reports and demos.",
    },
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
    title: { es: "Entregas que escalan", en: "Scalable deliveries" },
    description: {
      es: "Arquitecturas pensadas para crecer contigo. Lo que construimos hoy no te limita mañana.",
      en: "Architectures designed to grow with you. What we build today won't limit you tomorrow.",
    },
  },
];

export const journey = [
  {
    period: "2019 – 2022",
    title: { es: "Los primeros años", en: "The early years" },
    description: {
      es: "Primeros pasos en desarrollo profesional en la Universidad Rafael Landívar y Banco Agromercantil, construyendo bases sólidas en SQL, .NET y automatización de procesos.",
      en: "First steps in professional development at Rafael Landívar University and Banco Agromercantil, building solid foundations in SQL, .NET, and process automation.",
    },
  },
  {
    period: "2022 – 2023",
    title: { es: "Crecimiento en fintech", en: "Fintech growth" },
    description: {
      es: "Ingreso a Allied Global Technology Services como Software Engineer Mid-Level, construyendo soluciones fintech con Ionic, React Native, Angular y Node.js.",
      en: "Joined Allied Global Technology Services as a Mid-Level Software Engineer, building fintech solutions with Ionic, React Native, Angular, and Node.js.",
    },
  },
  {
    period: "2023 – Presente",
    title: { es: "Liderazgo e internacionalización", en: "Leadership & going global" },
    description: {
      es: "Ascenso a Engineering Tech Lead. Inicio de proyectos freelance con clientes en España y EE.UU. Maestría en Transformación Digital. Fundación de Otea Lab.",
      en: "Promoted to Engineering Tech Lead. Freelance projects with clients in Spain and the USA. Master's in Digital Transformation. Founded Otea Lab.",
    },
  },
];

export const education = [
  {
    degree: {
      es: "Maestría en Transformación Digital",
      en: "Master's in Digital Transformation",
    },
    school: "Universidad Galileo",
    period: "2023 – 2024",
    detail: "Project Management · Leadership · Agile · Digital Ecosystems",
  },
  {
    degree: {
      es: "Lic. Ingeniería en Ciencias de la Computación y Sistemas",
      en: "B.Sc. in Computer Science and Systems Engineering",
    },
    school: "Universidad Rafael Landívar",
    period: "2017 – 2022",
    detail: "",
  },
];

export const techStack = [
  { category: { es: "Frontend",        en: "Frontend"      }, items: ["React", "Angular", "TypeScript", "Ionic"] },
  { category: { es: "Mobile",          en: "Mobile"        }, items: ["React Native", "Ionic"] },
  { category: { es: "Backend",         en: "Backend"       }, items: ["Node.js", "PHP", ".NET"] },
  { category: { es: "Cloud",           en: "Cloud"         }, items: ["GCP", "Cloud Functions", "BigQuery", "Pub/Sub"] },
  { category: { es: "Bases de datos",  en: "Databases"     }, items: ["SQL Server", "MySQL", "MongoDB", "Redis"] },
  { category: { es: "Automatización",  en: "Automation"    }, items: ["Zapier", "Pabbly", "Make", "WordPress"] },
];
