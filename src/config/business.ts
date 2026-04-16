/**
 * business.ts
 * Central source of truth for all business-level constants.
 * Import from here — never hardcode these values in components.
 */

/**
 * Stats that appear in the Home and Nosotros pages.
 * Update these values here — they propagate automatically everywhere.
 */
export const STATS = {
  yearsExperience: "+3",
  projectsDelivered: "+10", // confirmar con Josué
  clientsServed: "+6",     // confirmar con Josué
  countries: "3",
} as const;

export const BUSINESS = {
  name: "Otea Lab",
  legalName: "Josué Godínez", // nombre del pequeño contribuyente en SAT
  tagline: {
    es: "Soluciones de software con visión estratégica",
    en: "Software solutions with strategic vision",
  },
  description: {
    es: "Desarrollo web, móvil y cloud para empresas que quieren crecer con tecnología sólida.",
    en: "Web, mobile, and cloud development for businesses that want to grow with solid technology.",
  },
  domain: "otealab.com", // pendiente de comprar
  url: "https://otealab.com",
  logo: "/assets/logo.svg",
  favicon: "/assets/favicon.svg",
  logoText: "/assets/logo-texto.svg", // versión solo texto para el header

  contact: {
    email: "josue@otealab.com", // configurar cuando el dominio esté activo
    emailPersonal: "godinezjosue@hotmail.com",
    phone: "+502 59238059",
    location: {
      city: "Guatemala City",
      country: "Guatemala",
      countryCode: "GT",
    },
  },

  social: {
    linkedin: "https://linkedin.com/in/josued-godinez-g", // actualizar con URL real
    github: "https://github.com/josuedavidgodinez", // actualizar con URL real
  },

  seo: {
    defaultTitle: "Otea Lab | Desarrollo de Software Guatemala",
    titleTemplate: "%s | Otea Lab",
    defaultDescription: {
      es: "Desarrollo web y móvil, cloud y consultoría técnica. Full-Stack Developer y Tech Lead con 6+ años en Guatemala e internacional.",
      en: "Web and mobile development, cloud solutions and technical consulting. Full-Stack Developer and Tech Lead with 6+ years, based in Guatemala.",
    },
    keywords: [
      "desarrollador web Guatemala",
      "freelance developer Guatemala",
      "full-stack developer Guatemala",
      "desarrollo de aplicaciones móviles",
      "React Node.js Angular Guatemala",
      "consultoría transformación digital",
      "Otea Lab",
    ],
    ogImage: "/og-image.png", // crear en Fase 4
  },
} as const;

/**
 * Color palette — mirrors tailwind.config.ts tokens.
 * Use the Tailwind classes (bg-primary, text-accent, etc.) in components.
 * These values are here for reference and for use in JS/TS logic (e.g., canvas, SVG).
 */
export const COLORS = {
  primary: "#1E40AF",   // azul profundo — brand principal
  primaryDark: "#1D4ED8", // hover states
  primaryDeep: "#1E3A8A", // fondos oscuros
  accent: "#0EA5E9",    // azul cielo — highlights, CTAs secundarios
  accentLight: "#E0F2FE", // fondos de acento suave
  dark: "#0F172A",      // texto principal
  neutral: "#64748B",   // texto secundario
  surface: "#FFFFFF",   // fondo de cards
  background: "#F0F9FF", // fondo general (tinte azul muy suave)
  border: "#E2E8F0",    // bordes y divisores
} as const;

/**
 * Typography — mirrors tailwind.config.ts font families.
 */
export const FONTS = {
  heading: "Inter",   // títulos — definir en Fase 1
  body: "Inter",      // cuerpo — cambiar si se elige otra fuente
} as const;

/**
 * Navigation links — used in Header and Footer.
 */
export const NAV_LINKS = [
  { href: "/servicios", label: { es: "Servicios", en: "Services" } },
  { href: "/portafolio", label: { es: "Portafolio", en: "Portfolio" } },
  { href: "/nosotros", label: { es: "Nosotros", en: "About" } },
  { href: "/contacto", label: { es: "Contacto", en: "Contact" } },
] as const;
