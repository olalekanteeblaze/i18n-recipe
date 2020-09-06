import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en, es } from './locales';

const options = {

    debug: true,

    resources: {

        en: {
            translations: en.en
        },

        es: {
            translations: es.es
        }
        
    },

    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: '.',
    fallbackLng: "en",
    lng: ["en", "es"],

    interpolation: {
        escapeValue: false
    },

    react: {
        wait: false,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options, () => {
        console.log("Translation loaded Successfully")
    });

export default i18n;
