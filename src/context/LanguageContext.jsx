import { createContext, useMemo, useState } from 'react';
import { translations } from '../data/translations';

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = useMemo(() => {
    const fallback = translations.en;
    const selected = translations[language] || fallback;

    return {
      language,
      setLanguage,
      t: {
        ...fallback,
        ...selected,
      },
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;
