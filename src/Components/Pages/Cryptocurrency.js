import React, { useContext } from "react";
import { TranslationContext } from "../Contexts/TranslationContext";

const ProjectDetailsSection = () => {
  const { translate } = useContext(TranslationContext);

  const technologies = [
    {
      id: 1,
      imgSrc: "assets/img/skill/react.png",
      alt: "React",
      title: "React",
      percentage: "95%",
    },
    {
      id: 2,
      imgSrc: "assets/img/skill/html.svg",
      alt: "HTML5",
      title: "HTML5",
      percentage: "90%",
    },
    {
      id: 3,
      imgSrc: "assets/img/skill/css.svg",
      alt: "CSS3",
      title: "CSS3",
      percentage: "80%",
    },
    {
      id: 4,
      imgSrc: "assets/img/skill/js.svg",
      alt: "JavaScript",
      title: "JavaScript",
      percentage: "70%",
    },
  ];

  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-tasks-alt text-theme"></i>
            {translate("project_details")}
          </div>

          <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
            {translate("law_office_website")}
          </h2>
          <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
            <img
              src="assets/img/portfolio/kriptohome.png"
              className="w-full"
              alt={translate("project_thumbnail_image")}
            />
          </div>
          <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
            <div>
              <h6 className="text-black dark:text-white font-semibold">
                {translate("client")}
              </h6>
              <p className="text-regular">Personal Project</p>
              <p className="text-regular"> .</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white font-semibold">
                {translate("services")}
              </h6>
              <p className="text-regular">
                {translate("web_design_development")},
              </p>
              <p className="text-regular">
                {translate("coinmarketcap_api_integration")}
              </p>
            </div>

            <div>
              <h6 className="text-black dark:text-white font-semibold">
                {translate("project_links")}
              </h6>
              <p className="text-regular">
                <a
                  className="text-blue-500 hover:underline font-bold"
                  target="_blank"
                  href="https://fatihsezerprojects.xyz/"
                >
                  Live
                </a>
              </p>
              <p className="text-regular">
                <a
                  className="text-blue-500 hover:underline font-bold"
                  target="_blank"
                  href="https://github.com/fatihhsezzzer/Cryptocurrency-Trading-market"
                >
                  Github
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
              {translate("project_description")}
            </h3>
            <p className="text-regular !leading-[2]">
              {translate("project_description_content_crypto")}
            </p>
            <ul className="text-regular leading-relaxed list-disc ml-6 my-4 space-y-2">
              <li>
                <strong>{translate("user_operations")}:</strong>{" "}
                {translate("user_operations_description")}
              </li>
              <li>
                <strong>{translate("news_area")}:</strong>{" "}
                {translate("news_area_description")}
              </li>
              <li>
                <strong>{translate("project_development_with_react")}:</strong>{" "}
                {translate("project_development_with_react_description")}
              </li>
              <li>
                <strong>{translate("real_time_price_information")}:</strong>{" "}
                {translate("real_time_price_information_description")}
              </li>
            </ul>

            <h3 className="mt-12 mb-10 text-2xl font-medium text-black dark:text-white">
              {translate("technologies")}
            </h3>
            <div className="progressbar-wrap space-y-7">
              {technologies.map((tech) => (
                <div
                  className="flex items-center gap-5 progressbar"
                  key={tech.id}
                >
                  <div className="w-8 icon">
                    <img src={tech.imgSrc} alt={tech.alt} />
                  </div>
                  <div className="flex-1 bar" data-percentage={tech.percentage}>
                    <h5 className="mb-2 text-black dark:text-white progress-title-holder text-regular">
                      <span className="progress-title">{tech.title}</span>
                    </h5>
                    <div className="progress-outer bg-platinum dark:bg-greyBlack h-1.5 rounded-2xl">
                      <div
                        className="progress-content bg-theme h-1.5 rounded-2xl"
                        style={{ width: tech.percentage }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Project Details Section End */}
    </div>
  );
};

export default ProjectDetailsSection;
