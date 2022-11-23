import { createI18n } from "vue-i18n";
import es from "../locales/es-ES.json";
import en from "../locales/en-GB.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "es",
    messages: {
      en,
      es,
    },
  });

  vueApp.use(i18n);
});
