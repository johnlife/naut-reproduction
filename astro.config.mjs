import {i18n} from "astro-i18n-aut/integration";
import {defineConfig} from 'astro/config';

const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale` value must present in `locales` keys
  es: "es-ES",
  fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
  ],
});
