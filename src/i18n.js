import i18n from 'i18next';
import backend from 'i18next-xhr-backend';

import { initReactI18next } from 'react-i18next';

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },
  });

export default i18n;
