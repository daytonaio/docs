export default async function loadTranslations(locale: string) {
  const t = await import(`../data/i18n/${locale}.json`)
  return t.default
}
