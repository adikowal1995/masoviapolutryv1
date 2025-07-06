import React, { createContext, useContext, useState, ReactNode } from 'react';
import { pl } from './translations/pl';
import { en } from './translations/en';
import { fr } from './translations/fr';
import { it } from './translations/it';
import { ar } from './translations/ar';

type Language = 'pl' | 'en' | 'fr' | 'it' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pl,
  en,
  fr,
  it,
  ar
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const getInitialLanguage = (): Language => {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pl') return 'pl';
    if (browserLang === 'fr') return 'fr';
    if (browserLang === 'it') return 'it';
    if (browserLang === 'ar') return 'ar';
    // Default to English
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    return currentTranslations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
