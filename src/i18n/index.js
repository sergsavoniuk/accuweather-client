import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { EN, RU } from 'constants/languages';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: false,
    lng: EN,
    preload: [EN, RU],
    load: 'languageOnly',
    keySeparator: false,
    // debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
