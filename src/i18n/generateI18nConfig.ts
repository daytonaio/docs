import { getLocaleProperties } from 'generaltranslation'

import config from '../../gt.config.json'

export function generateI18nConfig() {
  return {
    defaultLocale: config.defaultLocale,
    locales: Object.fromEntries(
      config.locales.map(locale => [
        locale,
        {
          lang: locale,
          label: getLocaleProperties(locale).nativeLanguageName,
        },
      ])
    ),
  }
}
