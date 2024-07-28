import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="minfo__nav__wrapper bg-snowWhite dark:bg-power__black max-xl:hidden fixed top-1/2 -translate-y-1/2 right-4 2xl:right-14 z-999 flex items-center flex-col gap-4 border border-platinum dark:border-metalBlack rounded-4xl px-2.5 py-4">
      {/* Site Logo Start */}
      <div className="flex border rounded-full logo w-15 h-15 border-platinum dark:border-metalBlack flex-center hover:bg-white dark:hover:bg-metalBlack">
        <Link to="/">
          <img src="assets/img/site-logo.svg" alt="Minfo" />
        </Link>
      </div>
      {/* Site Logo End */}

      {/* Main Menu/Navigation Start */}
      <div className="my-4 menu">
        <ul className="space-y-2 text-center *:relative">
          <li data-scroll-nav="0" className="group active">
            <Link
              to="/#home"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Home"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-home"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="1" className="group">
            <Link
              to="/#about"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="About"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-user"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="2" className="group">
            <Link
              to="/#service"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Service"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-briefcase"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="3" className="group">
            <Link
              to="/#skill"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Skills"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-graduation-cap"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="4" className="group">
            <Link
              to="/#resume"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Resume"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-file-alt"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="5" className="group">
            <Link
              to="/#portfolio"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Portfolio"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-tasks-alt"></i>
              </span>
            </Link>
          </li>
          <li data-scroll-nav="6" className="group">
            <Link
              to="/#blog"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Blog"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-blog"></i>
              </span>
            </Link>
          </li>

          <li data-scroll-nav="8" className="group">
            <Link
              to="/#contact"
              className="w-9 h-9 rounded-full flex-center group-[&.active]:bg-white dark:group-[&.active]:bg-metalBlack group-hover:bg-white dark:group-hover:bg-metalBlack transition-all duration-300 before:content-[attr(data-title)] before:absolute before:right-10 before:bg-white dark:before:bg-metalBlack before:text-sm text-theme dark:before:text-white before:px-4 before:py-2 before:rounded-md before:font-normal dark:before:font-light before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 after:content-[''] after:absolute after:w-0 after:h-0 after:right-8 after:border-solid after:border-t-4 after:border-r-0 after:border-b-4 after:border-l-8 after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-white dark:after:border-l-metalBlack after:opacity-0 after:transition-all after:duration-200 group-hover:after:opacity-100"
              data-title="Contact"
            >
              <span className="text-black dark:text-white group-hover:text-theme group-[&.active]:text-theme">
                <i className="fal fa-envelope"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Main Menu/Navigation End */}

      {/* Share Button Wrapper Start */}
      <div className="relative share group">
        <button
          className="w-10 h-10 text-sm border rounded-full border-platinum dark:border-metalBlack flex-center group-hover:bg-white dark:group-hover:bg-metalBlack text-black dark:text-white"
          aria-label="Share"
        >
          <i className="fal fa-share-alt"></i>
        </button>

        <div className="absolute bottom-0 flex items-center invisible px-5 py-6 space-x-3 transition-all duration-300 -translate-y-1/2 opacity-0 social-icons top-1/2 bg-white dark:bg-nightBlack rounded-4xl right-6 group-hover:opacity-100 group-hover:visible group-hover:right-10 -z-1 *:flex *:transition *:duration-200">
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
      </div>
    </div>
  );
};

export default Navigation;
