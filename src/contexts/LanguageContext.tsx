import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import ko from '../locales/ko'
import en from '../locales/en'

interface LanguageContextType {
  lang: string
  setLang: (lang: string) => void
  toggleLang: () => void
  t: (key: string) => any
  localizedField: (item: any, field: string) => any
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const locales: Record<string, any> = { ko, en }

export function LanguageProvider({ children }: { children: ReactNode }) {
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

  const t = useCallback((key: string) => {
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

  const localizedField = useCallback((item: any, field: string) => {
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
