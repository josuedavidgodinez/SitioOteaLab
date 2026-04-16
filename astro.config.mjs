// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://otealab.com',
  output: 'static',

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-GT',
          en: 'en-US',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // Spanish: /servicios | English: /en/services
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});