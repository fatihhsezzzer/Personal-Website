import React, { useState, useEffect } from "react";

// Tema değiştirme fonksiyonu
const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
};

// Dil değiştirme fonksiyonu
const applyLanguage = (language) => {
  localStorage.setItem("language", language);
  // Dil değişikliğine göre başka işlemler yapabilirsiniz
};

const getUrlParameter = (sParam) => {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split("&");

  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

const StyleSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "tr"
  ); // Başlangıç dili Türkçe

  useEffect(() => {
    // Uygulamanın başlangıcında kaydedilmiş temayı ve dili uygula
    applyTheme(theme);
    applyLanguage(language);

    // URL'deki 'version' ve 'lang' parametrelerini kontrol et
    const version = getUrlParameter("version");
    const lang = getUrlParameter("lang");

    if (version) {
      setTheme(version);
      applyTheme(version);
    }

    if (lang) {
      setLanguage(lang);
      applyLanguage(lang);
    }
  }, [theme, language]);

  const toggleSwitcher = () => {
    setIsActive(!isActive);
  };

  const switchTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  const switchLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    applyLanguage(selectedLanguage);
  };

  return (
    <div
      className={`style-switcher fixed right-0 top-1/2 transform -translate-y-1/2 transition-all z-[9999] ${
        isActive ? "translate-x-0" : "translate-x-[15rem]"
      }`}
      style={{ width: "15rem" }}
    >
      <div
        className="toggle-btn absolute -left-15 w-15 h-15 bg-white dark:bg-nightBlack text-black dark:text-white flex-center cursor-pointer rounded-[.5rem_0_0_.5rem] select-none shadow-sm shadow-slate-400"
        onClick={toggleSwitcher}
        style={{ width: "3.75rem", height: "3.75rem", left: "-3.75rem" }}
      >
        <span className="fal fa-cog fa-spin"></span>
      </div>

      <div className="theme-select shadow-sm shadow-slate-400 px-6 py-4 bg-white dark:bg-nightBlack rounded-[0_0_0_.5rem]">
        <h5 className="font-medium mb-2 !text-black dark:!text-white text-lg">
          Theme Mode
        </h5>

        <div className="flex items-center justify-between gap-4 mb-4">
          <div
            className={`switcher-input rounded-lg text-xl flex-1 text-center transition cursor-pointer ${
              theme === "dark" ? "active" : ""
            }`}
            data-theme="dark"
            onClick={() => switchTheme("dark")}
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center dark:text-white rounded-md"
              id="dark_theme"
              title="Active Dark Theme"
            >
              <i className="fal fa-moon"></i>
            </button>
          </div>
          <div
            className={`switcher-input rounded-lg text-lg flex-1 text-center transition cursor-pointer ${
              theme === "light" ? "active" : ""
            }`}
            data-theme="light"
            onClick={() => switchTheme("light")}
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center dark:text-white rounded-md"
              id="light_theme"
              title="Active Light Theme"
            >
              <i className="fal fa-sun"></i>
            </button>
          </div>
        </div>

        <h5 className="font-medium mb-2 !text-black dark:!text-white text-lg">
          Language
        </h5>

        <div className="flex items-center justify-between gap-4">
          <div
            className={`switcher-input rounded-lg text-xl flex-1 text-center transition cursor-pointer ${
              language === "tr" ? "active" : ""
            }`}
            data-language="tr"
            onClick={() => switchLanguage("tr")}
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center dark:text-white rounded-md"
              id="turkish_language"
              title="Active Turkish Language"
            >
              TR
            </button>
          </div>
          <div
            className={`switcher-input rounded-lg text-lg flex-1 text-center transition cursor-pointer ${
              language === "en" ? "active" : ""
            }`}
            data-language="en"
            onClick={() => switchLanguage("en")}
          >
            <button
              className="border w-full px-4 py-4 flex flex-col gap-1 justify-center items-center dark:text-white rounded-md"
              id="english_language"
              title="Active English Language"
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
