import { z } from 'zod';

// To add more languages, add the language code here and add the corresponding
// entry in SUPPORTED_LANGUAGES below
export const SUPPORTED_LANGUAGE_CODES = [
  'en',
  // 'de',    // German
  // 'fr',    // French
  // 'es',    // Spanish
  // 'it',    // Italian
  // 'nl',    // Dutch
  // 'pl',    // Polish
  // 'pt-BR', // Portuguese (Brazil)
  // 'ja',    // Japanese
  // 'ko',    // Korean
  // 'zh',    // Chinese
] as const;

export const ZSupportedLanguageCodeSchema = z.enum(SUPPORTED_LANGUAGE_CODES).catch('en');

export type SupportedLanguageCodes = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export type I18nLocaleData = {
  /**
   * The supported language extracted from the locale.
   */
  lang: SupportedLanguageCodes;

  /**
   * The preferred locales.
   */
  locales: string[];
};

export const APP_I18N_OPTIONS = {
  supportedLangs: SUPPORTED_LANGUAGE_CODES,
  sourceLang: 'en',
  defaultLocale: 'en-US',
} as const;

type SupportedLanguage = {
  full: string;
  short: string;
};

// To add more languages, uncomment the language code in SUPPORTED_LANGUAGE_CODES
// and add the corresponding entry here
export const SUPPORTED_LANGUAGES: Record<string, SupportedLanguage> = {
  en: {
    full: 'English',
    short: 'en',
  },
  // Uncomment to enable additional languages:
  // de: { full: 'German', short: 'de' },
  // fr: { full: 'French', short: 'fr' },
  // es: { full: 'Spanish', short: 'es' },
  // it: { full: 'Italian', short: 'it' },
  // nl: { full: 'Dutch', short: 'nl' },
  // pl: { full: 'Polish', short: 'pl' },
  // 'pt-BR': { full: 'Portuguese (Brazil)', short: 'pt-BR' },
  // ja: { full: 'Japanese', short: 'ja' },
  // ko: { full: 'Korean', short: 'ko' },
  // zh: { full: 'Chinese', short: 'zh' },
} satisfies Record<SupportedLanguageCodes, SupportedLanguage>;

export const isValidLanguageCode = (code: unknown): code is SupportedLanguageCodes =>
  SUPPORTED_LANGUAGE_CODES.includes(code as SupportedLanguageCodes);
