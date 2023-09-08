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

export function formatTime  (seconds)  {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
