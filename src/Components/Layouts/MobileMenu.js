import React from "react";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const handleLinkClick = () => {
    toggleMenu(); // Menüyü kapatmak için toggleMenu fonksiyonunu çağır
  };

  return (
    <div
      className={`mobile-menu fixed top-0 ${
        isOpen ? "is-menu-open" : ""
      } w-full max-w-mobilemenu bg-flashWhite dark:bg-nightBlack z-999 h-full xl:hidden transition-all duration-300 py-12 px-8 overflow-y-scroll`}
    >
      <button
        className={`absolute flex items-center justify-center w-9 h-9 text-sm text-white rounded-full close-menu top-4 right-4 bg-greyBlack ${
          isOpen ? "is-menu-open" : ""
        }`}
        aria-label="Close Menu"
        onClick={toggleMenu}
      >
        <i className="fal fa-times"></i>
      </button>
      <div className="mb-6 text-lg font-medium text-black dark:text-white menu-title">
        Menu
      </div>
      <ul className="space-y-5 font-normal main-menu">
        <li data-scroll-nav="0" className="relative group active">
          <a
            to="/#home"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-home"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Home
            </span>
          </a>
        </li>
        <li data-scroll-nav="1" className="relative group">
          <a
            to="/#about"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-user"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              About
            </span>
          </a>
        </li>
        <li data-scroll-nav="2" className="relative group">
          <a
            to="/#"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-briefcase"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Service
            </span>
          </a>
        </li>
        <li data-scroll-nav="3" className="relative group">
          <a
            to="/#skill"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-graduation-cap"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Skills
            </span>
          </a>
        </li>
        <li data-scroll-nav="4" className="relative group">
          <a
            to="/#resume"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-file-alt"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Resume
            </span>
          </a>
        </li>
        <li data-scroll-nav="5" className="relative group">
          <a
            to="/#portfolio"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-tasks-alt"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Portfolio
            </span>
          </a>
        </li>
        <li data-scroll-nav="6" className="relative group">
          <a
            to="/#blog"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-blog"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Blog
            </span>
          </a>
        </li>

        <li data-scroll-nav="8" className="relative group">
          <a
            to="/#contact"
            className="flex items-center space-x-2 group"
            onClick={handleLinkClick}
          >
            <span className="w-5 text-black dark:text-white group-[&.active]:text-theme">
              <i className="fal fa-envelope"></i>
            </span>
            <span className="group-[&.active]:text-theme dark:group-[&.active]:text-white group-hover:text-theme transition-colors">
              Contact
            </span>
          </a>
        </li>
      </ul>
      <br />
      <br />
      <div className="mb-4 font-medium text-black dark:text-white menu-title text-md">
        Get in Touch
      </div>
      {/* Social Share Icon Start  */}
      <div className="flex items-center space-x-4 social-icons">
        <a
          href="https://github.com/fatihhsezzzer"
          target="_blank"
          className="hover:text-theme"
          title="Contact with Github"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/fatihhsezzer/"
          target="_blank"
          className="hover:text-theme"
          title="Contact with Linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://medium.com/@fatihhsezzer"
          target="_blank"
          className="hover:text-theme"
          title="Contact with Medium"
        >
          <i className="fa-brands fa-medium"></i>
        </a>
        <a
          href="https://www.instagram.com/fatihhsezzer/"
          target="_blank"
          className="hover:text-theme"
          title="Contact with Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://wa.me/+905376029438"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      {/* Social Share Icon End  */}
    </div>
  );
};

export default MobileMenu;
