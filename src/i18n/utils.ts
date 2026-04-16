/**
 * i18n utilities for Otea Lab.
 *
 * Usage in an Astro component:
 *
 *   import { getLang, useTranslations } from '@/i18n/utils';
 *   const lang = getLang(Astro.url);
 *   const t = useTranslations(lang);
 *   // then: t('hero.headline')
 */

import { es } from './es';
import { en } from './en';

export type Lang = 'es' | 'en';

const translations = { es, en } as const;

/** Extract the active language from the current URL. */
export function getLang(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  return firstSegment === 'en' ? 'en' : 'es';
}

/** Return a typed translation getter for the given language. */
export function useTranslations(lang: Lang) {
  return translations[lang];
}

/** Return the path to the same page in the other language. */
export function getAlternatePath(url: URL): string {
  const { pathname } = url;
  if (pathname.startsWith('/en')) {
    // Currently in English → switch to Spanish (strip /en)
    return pathname.replace(/^\/en/, '') || '/';
  }
  // Currently in Spanish → switch to English (prepend /en)
  return `/en${pathname}`;
}
