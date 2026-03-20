import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../language/en.json'
import pt from '../language/pt.json'

i18next.use(LanguageDetector).init({
  lng: 'en',
  fallbackLng: 'en',
  nonExplicitSupportedLngs: true,
  detection: {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage'],
    lookupLocalStorage: 'i18nextLng',
  },
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: en },
    pt: { translation: pt },
  },
})

i18next.on('languageChanged', (lng) => {
  const normalizedLng = lng.split('-')[0]
  document.documentElement.lang = normalizedLng
  localStorage.setItem('i18nextLng', normalizedLng)
})

i18next.on('initialized', () => {
  const storedLng = localStorage.getItem('i18nextLng')
  if (storedLng && storedLng.includes('-')) {
    const normalized = storedLng.split('-')[0]
    localStorage.setItem('i18nextLng', normalized)
    i18next.changeLanguage(normalized)
  }
})

export default i18next
