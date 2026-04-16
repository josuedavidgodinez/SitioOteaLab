/**
 * testimonials.ts
 * Reseñas de clientes de Otea Lab.
 * Agregar nuevas reseñas aquí cuando se consigan.
 */

export interface Testimonial {
  id: string;
  name: string;
  role: { es: string; en: string };
  company: string;
  quote: { es: string; en: string };
  avatar?: string; // path relativo desde /public/
  projectId?: string; // referencia a portfolio.ts
}

export const testimonials: Testimonial[] = [
  {
    id: "rancho-ojo-prieto",
    name: "Rancho Ojo Prieto",
    role: { es: "Negocio familiar", en: "Family business" },
    company: "Rancho Ojo Prieto",
    quote: {
      // Placeholder — reemplazar con reseña real cuando la consiga
      es: "Gracias al sitio web, nuestros clientes en toda Guatemala pueden conocer nuestros productos y contactarnos directamente por WhatsApp. Ha transformado la forma en que llegamos a nuevos clientes.",
      en: "Thanks to the website, our customers across Guatemala can learn about our products and contact us directly via WhatsApp. It has transformed the way we reach new customers.",
    },
    avatar: "/assets/testimonials/rancho-ojo-prieto.jpg",
    projectId: "rancho-ojo-prieto",
  },
  // TODO: Conseguir reseña de AriseWeb (España)
  // TODO: Conseguir reseña de Alessi Weddings Corp. (EE.UU.)
];
