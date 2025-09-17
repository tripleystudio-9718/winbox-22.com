// src/i18n/index.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

const messages = {
  en,
  zh
}

// Get language from URL or localStorage
const getInitialLocale = () => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined') {
    // Get language from URL first
    const urlLang = window.location.pathname.split('/')[1]
    if (['zh'].includes(urlLang)) {
      return urlLang
    }
    
    // Fallback to localStorage
    const savedLang = localStorage.getItem('selectedLanguage')
    if (savedLang && ['en', 'zh'].includes(savedLang)) {
      return savedLang
    }
  }
  
  return 'en' // default
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
  legacy: false,
  globalInjection: true
})

export default i18n