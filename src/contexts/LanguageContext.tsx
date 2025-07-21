import React, { createContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage, default to en
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && ['en', 'ru', 'uz'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'ru', 'uz'].includes(browserLang as Language)) {
      return browserLang as Language;
    }
    
    return 'en';
  });

  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem('language', language);
    
    // Update html lang attribute
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};