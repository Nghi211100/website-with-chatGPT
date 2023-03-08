import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(
    (typeof window !== "undefined" && localStorage.getItem("language")) || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguageChange = (e: any) => {
    setLanguage(e.value);
    i18n.changeLanguage(e.value);
  };

  const options = [
    {
      value: "vi",
      label: (
        <span className="flex gap-2">
          🇻🇳
          <span className="short">VI</span>
          <span className="long">Tiếng Việt</span>
        </span>
      ),
    },
    {
      value: "en",
      label: (
        <span className="flex gap-2">
          🇬🇧<span className="short">EN</span>
          <span className="long">English</span>
        </span>
      ),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 w-max">
      <Select
        className="block rounded-lg mr-5 overflow-hidden text-blue-500 shadow-sm border border-gray-300 bg-white dark:border-[#183b61] dark:bg-[#001e3c] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        classNamePrefix="select"
        value={options.find((item) => item.value === language || "en")}
        menuPosition={"fixed"}
        isSearchable={false}
        onChange={handleLanguageChange}
        options={options}
        styles={{
          control: (styles) => ({
            ...styles,
            ".long": { display: "none" },
            border: "none",
            background: "transparent",
          }),
          singleValue: (styles) => ({
            ...styles,
            color: "#3B82F6",
          }),
          dropdownIndicator: (styles) => ({
            ...styles,
            color: "#3B82F6",
          }),
          option: (styles) => ({
            ...styles,
            ".short": { display: "none" },
          }),
          menu: (styles) => ({ ...styles, width: "120px" }),
        }}
      />
    </div>
  );
};

export default LanguageSwitcher;
