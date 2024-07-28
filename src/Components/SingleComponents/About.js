import React from "react";

const AboutSection = () => {
  return (
    <div data-scroll-index="1" id="about">
      <div className="about-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-user text-theme"></i>
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="max-w-2xl mt-4 md:mt-6 subtitle">
            Hi, my name is{" "}
            <span className="text-black dark:text-white">Fatih Sezer</span> I
            graduated from Sakarya University's Information Systems Engineering
            department in 2024. I have knowledge and experience in React JS,
            .NET, .NET Core, ASP.NET, and MSSQL. Using these technologies, I
            have developed various projects and delivered application solutions.
            Additionally, I successfully completed a course offered by the
            Sakarya University Continuous Education Center and received a B1
            level English proficiency certificate.
          </p>
        </div>
        <div className="mt-6 section-content">
          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3 *:flex *:items-center">
            <li>
              <span className="flex-[0_0_6rem]">Phone</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                <a
                  href="tel:+905376029438"
                  className="text-black dark:text-white"
                >
                  +90 537 602 9438
                </a>
              </span>
            </li>

            <li>
              <span className="flex-[0_0_6rem] flex items-center">
                Email
                <i className="fas fa-envelope icon-margin"></i>
              </span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                <a
                  href="mailto:fatihhsezzer@gmail.com"
                  className="text-black dark:text-white"
                >
                  fatihhsezzer@gmail.com
                </a>
              </span>
            </li>

            <li>
              <span className="flex-[0_0_6rem]">Language</span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                English, Turkhish
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem] flex items-center">
                Github
                <i className="fab fa-github icon-margin"></i>
              </span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                <a
                  href="https://github.com/fatihhsezzzer"
                  className="text-black dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github/fatihhsezzzer
                </a>
              </span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]"></span>
              <span className="flex-[0_0_2rem]"></span>
              <span className="text-black dark:text-white"></span>
            </li>
            <li>
              <span className="flex-[0_0_6rem]">
                Linkedin
                <i className="fab fa-linkedin icon-margin"></i>
              </span>
              <span className="flex-[0_0_2rem]">:</span>
              <span className="text-black dark:text-white">
                <a
                  href="https://www.linkedin.com/in/fatihhsezzer/"
                  className="text-black dark:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin/fatihhsezzer
                </a>
              </span>
            </li>
          </ul>
          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>2</span>+
              </div>
              <div className="text-sm">Years Of Experience</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>12</span>+
              </div>
              <div className="text-sm">Handled Projects</div>
            </li>
            <li>
              <div className="mb-1 text-2xl font-semibold md:text-3xl number text-theme 2xl:text-4xl">
                <span>05</span>+
              </div>
              <div className="text-sm">Open Source Libraries</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
