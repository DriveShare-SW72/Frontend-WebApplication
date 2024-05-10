import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  globalInjection: true,
  messages: { en, es }
})

export default i18n
