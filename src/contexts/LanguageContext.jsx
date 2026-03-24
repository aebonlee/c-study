import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import ko from '../locales/ko'
import en from '../locales/en'

const LanguageContext = createContext()

const locales = { ko, en }

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('cmaster-lang')
    return saved === 'en' ? 'en' : 'ko'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('cmaster-lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko')
  }, [])

  const t = useCallback((key) => {
    const keys = key.split('.')
    let val = locales[lang]
    for (const k of keys) {
      val = val?.[k]
    }
    if (val !== undefined) return val
    // fallback to Korean
    let fallback = locales.ko
    for (const k of keys) {
      fallback = fallback?.[k]
    }
    return fallback ?? key
  }, [lang])

  const localizedField = useCallback((item, field) => {
    if (lang === 'en') {
      const enField = field + 'En'
      if (item[enField]) return item[enField]
    }
    return item[field]
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, localizedField }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
