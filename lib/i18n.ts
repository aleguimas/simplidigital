import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import ptBR from '../public/locales/pt-BR/common.json';
import enUS from '../public/locales/en-US/common.json';
import esES from '../public/locales/es-ES/common.json';

const resources = {
  'pt-BR': {
    common: ptBR,
  },
  'en-US': {
    common: enUS,
  },
  'es-ES': {
    common: esES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR', // default language
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable Suspense for SSR compatibility
    },
  });

export default i18n; 