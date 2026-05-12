import { createContext, useContext, useState, type ReactNode } from "react";
import { es } from "../translations/es";
import { en } from "../translations/en";

type Language = "es" | "en";
type Translations = typeof es;

interface LanguageContextType {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(
    () => (localStorage.getItem("kosture-lang") as Language) || "es"
  );

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("kosture-lang", newLang);
  };

  const toggleLang = () => {
    handleSetLang(lang === "es" ? "en" : "es");
  };

  return (
    <LanguageContext.Provider
      value={{ lang, t: translations[lang], setLang: handleSetLang, toggleLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
