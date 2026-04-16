/**
 * English translations.
 * Must mirror the same structure as es.ts.
 */
import type { Translations } from './es';

export const en: Translations = {
  site: {
    name: "Otea Lab",
    tagline: "Software solutions with strategic vision",
    description:
      "Web, mobile, and cloud development for businesses that want to grow with solid technology.",
  },

  nav: {
    services: "Services",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    cta: "Get a quote",
  },

  hero: {
    greeting: "Welcome to Otea Lab",
    headline: "Software that drives your business",
    subheadline:
      "We build custom web, mobile, and cloud solutions for businesses in Guatemala and worldwide. From strategy to delivery.",
    ctaPrimary: "View our services",
    ctaSecondary: "View portfolio",
  },

  services: {
    sectionTitle: "Services",
    sectionSubtitle: "What can I do for your business?",
    cta: "Get a quote",
    items: {
      webDev: {
        title: "Full-Stack Web Development",
        description:
          "Modern, responsive web applications with React, Angular, or PHP. From landing pages to complex platforms.",
      },
      mobileDev: {
        title: "Mobile Applications",
        description:
          "iOS and Android apps with React Native or Ionic. One codebase for both platforms.",
      },
      backend: {
        title: "Backend & APIs",
        description:
          "Robust RESTful APIs with Node.js, PHP, or .NET. Scalable, well-documented architectures.",
      },
      cloud: {
        title: "Cloud & Serverless Solutions",
        description:
          "GCP infrastructure (Cloud Functions, BigQuery, Pub/Sub). Automation and cost reduction.",
      },
      databases: {
        title: "Databases",
        description:
          "Design, optimization, and maintenance of SQL and NoSQL databases. SQL Server, MySQL, MongoDB, Redis.",
      },
      wordpress: {
        title: "WordPress & Custom Plugins",
        description:
          "Professional WordPress sites and third-party API integration through custom plugins.",
      },
      consulting: {
        title: "Digital Transformation Consulting",
        description:
          "Strategic advisory to digitize processes and adopt technology that generates real business value.",
      },
      techLead: {
        title: "Tech Leadership & Mentoring",
        description:
          "Technical leadership for dev teams, agile practices implementation, and code reviews.",
      },
    },
  },

  portfolio: {
    sectionTitle: "Portfolio",
    sectionSubtitle: "Projects that speak for themselves",
    viewProject: "View project",
    technologies: "Technologies",
  },

  testimonials: {
    sectionTitle: "Clients who trust us",
    sectionSubtitle: "What those who have worked with Otea Lab say",
  },

  about: {
    sectionTitle: "About us",
    headline: "A company with strategic vision and technical execution",
    bio: "At Otea Lab we combine technical leadership with a business mindset to deliver software solutions that generate real impact. We work with companies in Guatemala, Spain, and the United States building scalable web, mobile, and cloud products.",
    teamTitle: "Meet our team",
    valuesTitle: "Our approach",
    education: "Education",
    experience: "Our journey",
    skills: "Our technical capabilities",
    yearsExperience: "years of experience",
    projectsCompleted: "projects delivered",
    clientsServed: "clients served",
    countriesWorked: "countries",
  },

  contact: {
    sectionTitle: "Contact",
    sectionSubtitle: "Have a project in mind? Let's talk.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      serviceType: "Service type",
      serviceTypePlaceholder: "Select a service",
      budget: "Estimated budget",
      message: "Describe your project",
      messagePlaceholder: "Tell me about your project, goals and expected timeline...",
      submit: "Send request",
      sending: "Sending...",
      successTitle: "Message sent!",
      successMessage: "I'll get back to you within 24 hours.",
      errorMessage: "Something went wrong. Please try again or email me directly.",
    },
    budgetOptions: {
      small: "Less than $500",
      medium: "$500 – $2,000",
      large: "$2,000 – $5,000",
      enterprise: "More than $5,000",
      discuss: "I prefer to discuss it",
    },
    serviceOptions: [
      "Full-Stack Web Development",
      "Mobile Application",
      "Backend & APIs",
      "Cloud & Serverless (GCP)",
      "WordPress & Automation",
      "Digital Transformation Consulting",
      "Other / Not sure yet",
    ],
    budgetPlaceholder: "Select a range",
    directContact: "Direct contact",
    availability: "Available for remote projects",
    whatsNext: "What happens next?",
    replyTime: "We reply within 24 hours on business days.",
    process: [
      "We review your message and analyze the project",
      "We reach out within 24 h to schedule a discovery call",
      "We prepare a proposal with scope, timeline, and cost",
      "We kick off when you're ready",
    ],
  },

  servicesPage: {
    subheadline: "Custom solutions for businesses in Guatemala, Spain, and the United States.",
    bottomCta: "Don't see exactly what you need?",
    bottomCtaDesc: "Tell us about your project and we'll figure it out together. We tailor the solution to your real needs.",
  },

  aboutPage: {
    whyUs: "Why work with Otea Lab",
    teamLabel: "Team",
    ceoTitle: "CEO",
    ceoBio: "6+ years building custom software solutions for clients in Guatemala, Spain, and the USA.",
    ceoCredentials: "Systems Engineer · Master's in Digital Transformation",
    journeyLabel: "Our journey",
    ctaTitle: "Ready to work together?",
    ctaDesc: "Tell us about your project and we'll put together a tailored proposal.",
    remoteNote: "Available for remote projects",
    present: "Present",
  },

  shared: {
    viewAll: "View all",
    privateSystem: "Private system",
    learnMore: "Learn more",
  },

  footer: {
    rights: "All rights reserved.",
    madeWith: "Made with",
    madeIn: "from Guatemala",
    legalName: "Josué Godínez — Freelance Developer",
  },

  notFound: {
    title: "Page not found",
    message: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
};
