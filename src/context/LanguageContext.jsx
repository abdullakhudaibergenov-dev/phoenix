import { createContext, useMemo, useState } from 'react';
import { translations } from '../data/translations';

export const LanguageContext = createContext(null);

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export default LanguageProvider;
