export function localizePath(
  path: string,
  locale: string = 'en',
  currentLocale?: string
): string {
  if (!currentLocale) {
    if (locale === 'en') return path
    return path.replace(`docs`, `docs/${locale}`)
  }

  if (currentLocale === 'en') {
    if (locale === 'en') return path
    return path.replace(`docs`, `docs/${locale}`)
  } else if (locale === 'en') {
    return path.replace(`docs/${currentLocale}`, `docs`)
  }

  return path.replace(`docs/${currentLocale}`, `docs/${locale}`)
}
