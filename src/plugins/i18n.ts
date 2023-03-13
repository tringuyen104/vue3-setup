import { createI18n } from 'vue-i18n';
import en from './en.json'

function loadLocaleMessages() {
  const locales = [{ en: en }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)[0];
    messages[key] = lang[key];
  })
  return messages
}
const i18n = createI18n({
    // locale: import.meta.env.VITE_APP_I18N_LOCALE || 'en',
    // fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'en',
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages()
});

export default i18n;