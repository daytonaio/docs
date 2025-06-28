export function localizePath(
  path: string,
  locale: string = 'en',
  currentLocale?: string
): string {
  if (currentLocale) {
    return path.replace(`docs/${currentLocale}`, `docs/${locale}`)
  }
  return path.replace('/docs', `/docs/${locale}`)
}
