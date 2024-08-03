import React, { createContext, useState, useEffect } from "react";
import translations from "../../translations.json";

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "tr"
  ); // Varsayılan dil Türkçe

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const translate = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
