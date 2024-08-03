import React, { useContext } from "react";
import { TranslationContext } from "../Contexts/TranslationContext";

const workExperiences = [
  {
    companyKey: "company_dataliva",
    dateKey: "date_dataliva",
    positionKey: "position_dataliva",
    descriptionKey: "description_dataliva",
  },
  {
    companyKey: "company_architecht",
    dateKey: "date_architecht",
    positionKey: "position_architecht",
    descriptionKey: "description_architecht",
  },
];

const educationDetails = [
  {
    institutionKey: "institution_sakarya",
    dateKey: "date_sakarya",
    degreeKey: "degree_sakarya",
    descriptionKey: "description_sakarya",
  },
];

const ResumeSection = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div data-scroll-index="4" id="resume">
      <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-folder-open text-theme"></i>
          {translate("resume")}
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27 font-semibold text-theme">
            {translate("work_experience")}
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle"></p>
        </div>
        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            {workExperiences.map((exp, index) => (
              <li key={index}>
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    {translate(exp.companyKey)}
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    {translate(exp.dateKey)}
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    {translate(exp.positionKey)}
                  </h4>
                  <p>{translate(exp.descriptionKey)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27 font-semibold text-theme">
            {translate("my_education")}
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle"></p>
        </div>
        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            {educationDetails.map((edu, index) => (
              <li key={index}>
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    {translate(edu.institutionKey)}
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    {translate(edu.dateKey)}
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    {translate(edu.degreeKey)}
                  </h4>
                  <p>{translate(edu.descriptionKey)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
