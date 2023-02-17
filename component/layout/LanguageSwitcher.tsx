import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(
    (typeof window !== "undefined" && localStorage.getItem("language")) || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n.language]);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (e: any) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 w-max">
      <select
        value={language}
        onChange={handleLanguageChange}
        className="w-full bg-white dark:bg-[#001e3c] shadow-lg dark:shadow-[inset_0px_-1px_1px_#132f4c] rounded-xl px-4 py-2 border border-neutral-50 dark:border-[#183b61] dark:text-white"
      >
        <option value="en">{t("language.english")}</option>
        <option value="vi">{t("language.vietnamese")}</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
