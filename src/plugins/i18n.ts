import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import vi from '@/locales/vi'

export type MessageSchema = typeof en

const i18n = createI18n<[MessageSchema], 'en' | 'vi'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    vi,
  },
})

export default i18n
