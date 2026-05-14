import { createContext, useState, useCallback, useContext as useReactContext } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('Si')

  const changeLanguage = useCallback((newLanguage) => {
    setLanguage(newLanguage)
  }, [])

  const value = {
    language,
    changeLanguage,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useReactContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
