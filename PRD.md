# PRD — Sitio Web: Otea Lab

> **Versión:** 1.1 | **Fecha:** 2026-04-09 | **Autor:** Josué Godínez

---

## ✅ Decisiones de Fase 0 — RESUELTAS

| Decisión | Valor |
|---|---|
| **Nombre del negocio** | Otea Lab |
| **Dominio** | otealab.com (pendiente de comprar) |
| **Logo** | Torre de vigilancia digital — `src/assets/logo.svg` |
| **Mercado principal** | Guatemala + internacional (España, EE.UU.) |
| **Paleta base** | Azul profundo `#1E40AF` + azul cielo `#0EA5E9` |
| **Constantes** | `src/config/business.ts` ✅ creado |

---

## Visión del Producto

**Otea Lab** es el negocio propio de Josué Godínez: desarrollador Full-Stack y Tech Lead guatemalteco con 6+ años de experiencia. El nombre viene de "otear" — explorar y vigilar desde un punto estratégico — reflejo de la visión que aporta a cada proyecto. El sitio funcionará como vitrina de servicios, portafolio, generador de leads y carta de presentación ante clientes nacionales e internacionales (Guatemala, España, EE.UU.).

---

## Análisis de Servicios a Ofrecer

Basado en el perfil profesional, los servicios se agrupan así:

### Servicios Principales
| Servicio | Stack / Herramienta | Nivel de confianza |
|---|---|---|
| Desarrollo Web Full-Stack | React, Angular, Node.js, PHP | ★★★★★ |
| Desarrollo de Aplicaciones Móviles | React Native, Ionic | ★★★★★ |
| Backend & APIs | Node.js, PHP, .NET | ★★★★★ |
| Plataformas Cloud & Serverless | GCP (Cloud Functions, BigQuery, Pub/Sub) | ★★★★☆ |
| Bases de Datos | SQL Server, MySQL, MongoDB, Redis | ★★★★★ |
| WordPress & Plugins Personalizados | PHP, APIs de terceros | ★★★★☆ |
| Consultoría en Transformación Digital | Maestría + experiencia | ★★★★☆ |
| Tech Leadership & Mentoría de Equipos | Metodologías ágiles | ★★★★☆ |
| SEO Analytics / Herramientas a medida | GCP + BigQuery (PosicionaTool) | ★★★★☆ |

### Sobre Mostrar Precios
**Recomendación:** NO mostrar precios fijos. Mostrar servicios + CTA "Solicita una cotización".
- Los proyectos de software varían enormemente en alcance
- Evita que competidores te copien o te subestimen
- Permite negociar según cliente (empresa vs. persona natural, local vs. internacional)
- **Excepción posible (Fase 3):** paquetes básicos con precio "desde $X" para servicios simples (ej. landing page, WordPress básico)

---

## Stack Técnico Decidido

```
Astro 6+         → Framework principal (SSG, rendimiento, SEO)
Tailwind CSS     → Estilos utilitarios, paleta centralizada
TypeScript       → Tipado en todo el proyecto
Astro i18n       → Internacionalización nativa (ES/EN)
Content Collections → Centralización de todo el contenido
```

### Arquitectura de Contenido Centralizado
Todo el texto visible se define en archivos de contenido, nunca hardcodeado en componentes:
```
src/
├── config/
│   └── business.ts        ← Constantes del negocio (nombre, logo, contacto, colores, redes)
├── i18n/
│   ├── es.ts              ← Todas las traducciones en español
│   └── en.ts              ← Todas las traducciones en inglés
├── content/
│   ├── services/          ← Servicios (MDX o JSON)
│   ├── projects/          ← Portafolio / casos de éxito
│   └── testimonials/      ← Reseñas de clientes
```

---

## Estructura de Páginas

```
/                  → Home (Hero, Servicios resumen, Sobre mí, Testimoniales, CTA)
/servicios         → Catálogo completo de servicios
/portafolio        → Proyectos realizados (casos de éxito)
/sobre-mi          → Bio, experiencia, educación, stack
/contacto          → Formulario de contacto / cotización
/blog (Fase 3)     → Artículos técnicos (opcional, para SEO)
```

---

## Paleta de Colores Base (para definir con el cliente — tú mismo)

Propuesta inicial basada en tu CV actual (azul corporativo):
```
primary:    #1E40AF   (azul profesional)
secondary:  #0EA5E9   (azul claro / acento)
neutral:    #1F2937   (gris oscuro para texto)
background: #F9FAFB   (fondo claro)
surface:    #FFFFFF
```
> Esto se define en `tailwind.config.ts` y se referencia como constante en `business.ts`.

---

---

# FASES DEL PROYECTO

---

## FASE 0 — Definición de Marca y Negocio

**Objetivo:** Tomar todas las decisiones de identidad antes de escribir una línea de código.

### Entregables
- [ ] Nombre del negocio definido
- [ ] Logo / isotipo definido (o encargado a diseñador)
- [ ] Paleta de colores final
- [ ] Tipografías elegidas (1 para títulos, 1 para cuerpo)
- [ ] Tagline / propuesta de valor en ES y EN
- [ ] Dominio comprado
- [ ] Email profesional configurado (ej. josue@tudominio.com)

### Preguntas Clave — Fase 0

1. **¿Cómo se llamará el negocio?**
   - ¿Usarás tu nombre propio (Josué Godínez Dev / JG Software)?
   - ¿Crearás una marca diferente (ej. NexaCode, PixelForge GT)?
   - ¿La marca debe funcionar igual en Guatemala e internacionalmente?

2. **¿Ya tienes logo o necesitas crearlo?**
   - ¿Tienes diseñador o lo crearás tú (Figma, Canva, etc.)?
   - ¿El logo debe incluir tus iniciales o solo el nombre de la empresa?

3. **¿Cuál es tu propuesta de valor diferenciadora?**
   - ¿Qué te hace diferente a otros freelancers? (ej. Tech Lead con visión de negocio, bilingüe, experiencia fintech)
   - ¿A quién va dirigido principalmente: empresas guatemaltecas, clientes internacionales, o ambos?

4. **¿Tienes dominio? ¿Qué extensión prefieres?**
   - `.com`, `.dev`, `.gt`, `.io`?
   - ¿Ya compraste alguno o necesitas verificar disponibilidad?

5. **¿Qué email profesional usarás?**
   - ¿Google Workspace, Zoho, o tu propio hosting de email?

6. **¿Qué tono de comunicación quieres proyectar?**
   - Formal y corporativo vs. cercano y técnico vs. innovador y moderno

---

## FASE 1 — Fundamentos Técnicos del Proyecto

**Objetivo:** Dejar la arquitectura base lista, que todas las fases siguientes construyan sobre ella sin deuda técnica.

### Entregables
- [ ] Astro + Tailwind + TypeScript configurados
- [ ] Sistema i18n (ES/EN) funcionando
- [ ] `business.ts` con todas las constantes del negocio
- [ ] Paleta de colores en `tailwind.config.ts`
- [ ] Layout base con Header y Footer
- [ ] Componentes base (Button, Card, Section, Badge)
- [ ] Tipografías integradas (Google Fonts o locales)
- [ ] Configuración de SEO base (meta tags, OG, favicon)
- [ ] README y documentación inicial del proyecto

### Estructura de `business.ts` (ejemplo)
```typescript
export const BUSINESS = {
  name: "Tu Nombre de Empresa",
  tagline: { es: "...", en: "..." },
  email: "josue@tudominio.com",
  phone: "+502 59238059",
  logo: "/assets/logo.svg",
  social: {
    linkedin: "https://linkedin.com/in/...",
    github: "https://github.com/...",
  },
  location: "Guatemala City, Guatemala",
} as const;
```

### Preguntas Clave — Fase 1

1. **¿Qué versión de Node.js y gestor de paquetes usarás?**
   - El proyecto ya indica `>=22.12.0`. ¿Usas `npm`, `pnpm` o `yarn`?

2. **¿Cómo manejarás el i18n?**
   - Astro tiene i18n nativo desde v4. ¿Prefieres eso o una librería como `astro-i18next`?
   - ¿Las URLs serán `/es/servicios` y `/en/services`, o con subdominio (`es.tudominio.com`)?
   - ¿El español será el idioma por defecto (sin prefijo en URL)?

3. **¿Dónde hostearás el sitio?**
   - Vercel, Netlify, Cloudflare Pages, o GCP (ya lo conoces bien)?
   - ¿Necesitas despliegue automático desde GitHub?

4. **¿El formulario de contacto necesita backend?**
   - ¿Usarás un servicio como Resend, Formspree, EmailJS, o desplegarás una Cloud Function propia?

5. **¿Necesitas analytics desde el inicio?**
   - Google Analytics 4, Plausible, o algo custom (BigQuery como PosicionaTool)?

6. **¿Cómo documentarás los componentes?**
   - Solo JSDoc en el código, o quieres Storybook, o simplemente un README por carpeta?

---

## FASE 2 — Contenido Principal (MVP)

**Objetivo:** El sitio completo con todo el contenido real, listo para mostrar a clientes.

### Páginas a desarrollar
- [ ] **Home** — Hero con propuesta de valor, servicios en resumen (3-4 cards), sobre mí corto, testimoniales, CTA
- [ ] **Servicios** — Lista completa de servicios con descripción, tecnologías y CTA por servicio
- [ ] **Portafolio** — 3-5 proyectos con descripción, tecnologías, resultado, y link (AriseWeb, PosicionaTool, lácteos de cabra, etc.)
- [ ] **Sobre mí** — Experiencia, educación, stack visual, foto profesional
- [ ] **Contacto** — Formulario funcional (nombre, email, tipo de servicio, presupuesto estimado, descripción)

### Preguntas Clave — Fase 2

1. **¿Qué proyectos mostrarás en el portafolio?**
   - ¿Puedes mostrar proyectos de AriseWeb públicamente (insuguru.es, tresmares.com)?
   - ¿El sitio de los lácteos de cabra es público y tiene buen diseño para mostrarlo?
   - ¿PosicionaTool puede mostrarse como caso de estudio propio?

2. **¿Qué testimoniales tienes o puedes conseguir?**
   - ¿AriseWeb (España) podría darte una reseña escrita?
   - ¿Los suegros del negocio de lácteos?
   - ¿Alessi Weddings Corp. (USA)?
   - ¿Compañeros o clientes directos de tus proyectos freelance?

3. **¿Tienes foto profesional actualizada?**
   - ¿Con fondo neutro o en ambiente de trabajo?

4. **¿Los servicios los presentarás con iconos, ilustraciones o solo texto?**
   - ¿Usarás una librería de iconos (Lucide, Heroicons, Tabler)?

5. **¿El formulario de contacto tendrá campo de presupuesto estimado?**
   - Ayuda a pre-filtrar leads serios vs. exploratorios.
   - Rangos sugeridos: `< $500 / $500–$2,000 / $2,000–$5,000 / $5,000+`

6. **¿Quieres una sección de "stack tecnológico" visual en Sobre Mí?**
   - Logos de tecnologías con barras de nivel o solo íconos.

7. **¿Cómo manejarás el contenido de los servicios?**
   - Archivos MDX en Content Collections (más flexible y escalable) o JSON estático.

---

## FASE 3 — Funcionalidades Avanzadas

**Objetivo:** Agregar características que aumentan la conversión, el SEO y la credibilidad.

### Funcionalidades
- [ ] **Blog técnico** (opcional) — Artículos en ES/EN posicionando tu expertise
- [ ] **Calculadora de presupuesto** — Estimador básico por tipo de proyecto
- [ ] **Paquetes "desde $X"** — Para servicios estandarizables (landing page, WordPress básico)
- [ ] **Sección de proceso de trabajo** — Cómo trabajas (Discovery → Propuesta → Desarrollo → Entrega → Soporte)
- [ ] **FAQ** — Preguntas frecuentes (¿Trabajas con contratos? ¿Facturas? ¿Qué incluye el soporte?)
- [ ] **Integración de calendly o similar** — Para agendar llamadas de discovery
- [ ] **Dark mode** (opcional)

### Preguntas Clave — Fase 3

1. **¿Quieres tener un blog?**
   - El blog posiciona en SEO y demuestra expertise, pero requiere tiempo de mantenimiento.
   - ¿Tienes temas en mente (GCP, Astro, liderazgo técnico, Guatemala tech)?
   - ¿Lo escribirás en ES, EN, o ambos?

2. **¿Mostrarás precios "desde $X" para algún servicio?**
   - ¿Tienes estructura de precios definida para servicios básicos?
   - ¿Facturas en GTQ o USD para clientes internacionales?

3. **¿Quieres una calculadora de presupuesto interactiva?**
   - El cliente selecciona tipo de proyecto, funcionalidades, tiempo, y obtiene un estimado.

4. **¿Usarás Calendly u otra herramienta para agendar llamadas?**
   - ¿O prefieres que el contacto sea solo por formulario/email?

5. **¿Tienes un proceso de trabajo documentado que quieras mostrar?**
   - Fases: Discovery, Propuesta, Contrato, Desarrollo, QA, Entrega, Soporte.

6. **¿Habrá sección de FAQ?**
   - Preguntas clave: ¿Tienes contrato formal? ¿Emites factura SAT? ¿Trabajas en equipo o solo? ¿Qué incluye el soporte post-entrega?

---

## FASE 4 — SEO, Performance y Lanzamiento

**Objetivo:** Asegurarse de que el sitio sea encontrable, rápido y esté listo para producción.

### Entregables
- [ ] Meta tags completos por página (title, description, OG, Twitter Card)
- [ ] Sitemap.xml generado automáticamente por Astro
- [ ] robots.txt configurado
- [ ] Google Search Console configurado
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Imágenes optimizadas (Astro Image component)
- [ ] Schema.org markup (LocalBusiness, Person, Service)
- [ ] Canonical URLs configuradas
- [ ] Redirección www → non-www (o viceversa)
- [ ] HTTPS forzado
- [ ] Formulario de contacto probado end-to-end

### Preguntas Clave — Fase 4

1. **¿En qué keywords quieres posicionarte?**
   - "desarrollador web Guatemala", "freelance developer Guatemala", "full-stack developer"
   - ¿Apuntas a clientes locales (Guatemala) o internacionales también?

2. **¿Tendrás Google My Business?**
   - Para negocios locales en Guatemala puede ayudar al posicionamiento.

3. **¿Qué hosting elegiste y cómo será el pipeline de despliegue?**
   - GitHub Actions + Vercel/Netlify/Cloudflare, o manual?

4. **¿El sitio necesita cookie consent?**
   - Si usas GA4 o cualquier tracking, en Europa (si tienes clientes españoles) es obligatorio por GDPR.

5. **¿Tienes un dominio y certificado SSL listo?**

---

## FASE 5 — Post-lanzamiento y Mantenimiento

**Objetivo:** Mantener el sitio actualizado, medir resultados y evolucionar.

### Actividades
- [ ] Monitoreo mensual de Core Web Vitals y Search Console
- [ ] Actualización de portafolio con nuevos proyectos
- [ ] Nuevos testimoniales
- [ ] Artículos de blog (si aplica)
- [ ] A/B testing de CTAs
- [ ] Revisión de conversiones (¿cuántos formularios recibo? ¿cuántos se convierten en clientes?)

### Preguntas Clave — Fase 5

1. **¿Cómo medirás el éxito del sitio?**
   - Número de consultas recibidas por mes
   - Clientes cerrados desde el sitio
   - Tráfico orgánico vs. referido

2. **¿Con qué frecuencia actualizarás el portafolio?**

3. **¿Tendrás proceso para solicitar reseñas a clientes nuevos?**

---

## Buenas Prácticas — Resumen

### Programación
- Todo el contenido textual en archivos de i18n, nunca hardcodeado
- Constantes de negocio en `src/config/business.ts`
- Paleta y tipografías en `tailwind.config.ts` (solo tokens, no valores mágicos en clases)
- Componentes pequeños y reutilizables (un componente = una responsabilidad)
- Tipado TypeScript estricto (`strict: true` en tsconfig)
- Imágenes siempre con Astro `<Image>` component para optimización automática
- Evitar `any` en TypeScript; tipar los schemas de Content Collections

### Documentación
- `README.md` con instrucciones de setup, estructura de carpetas, y cómo agregar contenido
- JSDoc en funciones utilitarias y hooks
- Comentarios solo donde la lógica no es obvia
- `CHANGELOG.md` para versiones del sitio
- Cada Content Collection con su schema bien tipado y un ejemplo

### Git
- Commits en inglés, formato: `feat:`, `fix:`, `content:`, `style:`, `docs:`
- Ramas por feature: `feat/contact-form`, `content/portfolio-projects`
- No commitear assets pesados sin comprimir

---

## Próximos Pasos Inmediatos

1. **Responde las preguntas de Fase 0** (nombre del negocio, logo, dominio)
2. Instalar Tailwind + configurar i18n en el proyecto Astro existente
3. Crear `src/config/business.ts` con los datos que ya tenemos
4. Definir paleta de colores final en `tailwind.config.ts`
5. Comenzar Fase 1

---

*Este PRD es un documento vivo — se actualiza conforme avanza el proyecto.*
