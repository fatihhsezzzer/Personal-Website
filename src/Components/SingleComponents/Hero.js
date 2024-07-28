import React from "react";

const Hero = () => {
  return (
    <div className="hero-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13 ml-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
        <i className="fal fa-home text-theme"></i>
        INTRODUCE
      </div>
      <div className="items-center gap-6 hero-content md:flex xl:gap-10">
        <div className="text-content pt-7 lg:pt-8 max-lg:max-w-[30rem]">
          <h1 className="text-[32px] lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-black dark:text-white leading-1.27 lg:leading-1.27 xl:leading-1.27 2xl:leading-1.27 mb-4 lg:mb-5">
            I Craft The <br />
            <span className="text-theme">Digital Landscape</span>
          </h1>
          <p>
            I am a{" "}
            <span className="font-medium text-black dark:text-white/90">
              Frontend Developer
            </span>{" "}
            at heart and, I create features that are best suited for the job at
            hand.
          </p>
          <ul className="flex items-center mt-4 -mx-3 lg:mt-5 *:flex *:items-center *:mx-3 *:text-regular">
            <li>
              <i className="mr-2 fal fa-check-double text-theme"></i>
              Available for work
            </li>
            <li>
              <i className="mr-2 fal fa-check-double text-theme"></i>
              Full Time Job
            </li>
          </ul>
          <ul className="mt-7 buttons">
            <li data-scroll-nav="8">
              <a
                href="#contact"
                className="btn-theme inline-flex items-center gap-2 bg-theme py-4 md:py-4.5 lg:px-9 px-7 rounded-4xl leading-none transition-all duration-300 hover:shadow-theme_shadow text-white font-medium text-[15px] md:text-base"
              >
                <i className="fal fa-paper-plane"></i>
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
        <div className="hero-image flex-[0_0_20.3rem] max-md:hidden">
          <img
            src="assets/img/hero-img-1.png"
            className="dark:hidden"
            alt="Hero Image - Light Mode"
          />
          <img
            src="assets/img/hero-img-2.png"
            className="hidden dark:block"
            alt="Hero Image - Dark Mode"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;