import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { eng } from "./en";
import { esp } from "./es";
import { getAllLocales } from "../utils/utils";

const userLang = navigator.language || navigator.userLanguage;
const defaultLocale = userLang.substring(0, 2);
const allLocales = getAllLocales().map((locale) => locale.id);
i18next.use(initReactI18next).init({
  interpolacion: {
    escapeValue: false,
  },
  lng: allLocales.includes(defaultLocale) ? defaultLocale : "en",
  resources: {
    es: {
      translation: esp,
    },
    en: {
      translation: eng,
    },
  },
});

export default i18next;
