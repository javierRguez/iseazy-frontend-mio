import { t } from 'i18next'
export function getAllLocales() {
  return [
    {
      id: 'es',
      value: t('languages.es'),
    },
    {
      id: 'en',
      value: t('languages.en'),
    },
  ]
}
