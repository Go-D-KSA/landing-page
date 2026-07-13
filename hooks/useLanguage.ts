"use client";

import { useCallback, useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import en from "@/public/locales/en/common.json";
import ar from "@/public/locales/ar/common.json";

export type Language = "en" | "ar";

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: { en: { common: en }, ar: { common: ar } },
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

function applyLanguage(language: Language) {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar" ? ar.meta.title : en.meta.title;
}

export function useLanguage() {
  const { t } = useTranslation("common");
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    const storedLanguage = window.localStorage.getItem("go-d-language");
    const browserLanguage = window.navigator.language.startsWith("ar") ? "ar" : "en";
    const initialLanguage: Language = queryLanguage === "ar" || queryLanguage === "en"
      ? queryLanguage
      : storedLanguage === "ar" || storedLanguage === "en"
        ? storedLanguage
        : browserLanguage;

    setLanguage(initialLanguage);
    applyLanguage(initialLanguage);
    void i18n.changeLanguage(initialLanguage);
  }, []);

  const changeLanguage = useCallback((nextLanguage: Language) => {
    setLanguage(nextLanguage);
    applyLanguage(nextLanguage);
    window.localStorage.setItem("go-d-language", nextLanguage);
    void i18n.changeLanguage(nextLanguage);
    window.dispatchEvent(new Event("go-d-language-change"));
  }, []);

  const toggleLanguage = useCallback(() => {
    changeLanguage(language === "en" ? "ar" : "en");
  }, [changeLanguage, language]);

  return { language, direction: language === "ar" ? "rtl" as const : "ltr" as const, t, changeLanguage, toggleLanguage };
}
