export type Locale = 'en' | 'id';

/** A piece of copy that exists in both languages. */
export type LocalizedText = Record<Locale, string>;

export function pick(value: LocalizedText, locale: Locale): string {
  return value[locale];
}
