import React, { useState, useEffect, useContext, useRef } from "react";
import { TranslationContext } from "../Contexts/TranslationContext";

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
};

const StyleSwitcher = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const { language, setLanguage } = useContext(TranslationContext);
  const switcherRef = useRef(null);

  useEffect(() => {
    applyTheme(theme);

    const urlParams = new URLSearchParams(window.location.search);
    const version = urlParams.get("version");
    const lang = urlParams.get("lang");

    if (version) {
      setTheme(version);
      applyTheme(version);
    }

    if (lang) {
      setLanguage(lang);
    }
  }, [theme, setLanguage]);

  const handleClickOutside = (event) => {
    if (switcherRef.current && !switcherRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSwitcher = () => {
    setIsActive(!isActive);
  };

  const switchTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    applyTheme(selectedTheme);
  };

  return (
    <div
      ref={switcherRef}
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
            onClick={() => setLanguage("tr")}
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
            onClick={() => setLanguage("en")}
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
