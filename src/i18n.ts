import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;
