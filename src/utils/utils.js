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

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export const formatDateTime = (date) => {
  const optionsDate = { day: '2-digit', month: '2-digit', year: '2-digit' };
  const optionsTime = { hour: '2-digit', minute: '2-digit' };

  const formattedDate = date.toLocaleDateString('es-ES', optionsDate);
  const formattedTime = date.toLocaleTimeString('es-ES', optionsTime);

  return `${formattedDate} ${formattedTime}`;
};

