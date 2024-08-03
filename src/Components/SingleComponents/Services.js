import React, { useContext } from "react";
import { TranslationContext } from "../Contexts/TranslationContext";

const ServiceSection = () => {
  const { translate } = useContext(TranslationContext);

  const services = [
    {
      id: 1,
      title: translate("web_development"),
      description: translate("web_development_description"),
    },
    {
      id: 2,
      title: translate("backend_api_development"),
      description: translate("backend_api_development_description"),
    },
    {
      id: 3,
      title: translate("end_to_end_solutions"),
      description: translate("end_to_end_solutions_description"),
    },
    {
      id: 4,
      title: translate("database_design_optimization"),
      description: translate("database_design_optimization_description"),
    },
  ];

  return (
    <div data-scroll-index="2" id="service">
      <div className="service-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-briefcase text-theme"></i>
          {translate("services")}
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {translate("servicemy")}{" "}
            <span className="font-semibold text-theme">
              {translate("services")}
            </span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {translate("services_description")}
          </p>
        </div>
        <div className="grid gap-5 md:gap-6 service-card-wrapper sm:grid-cols-2 lg:gap-7 2xl:gap-8 *:relative *:p-5 *:transition *:duration-300 *:border *:py-7 md:*:p-7 *:border-platinum dark:*:border-metalBlack *:rounded-2xl xl:*:p-8 2xl:*:p-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-item group hover:border-theme dark:hover:border-theme"
            >
              <div className="absolute transition duration-300 md:top-10 icon right-6 top-7 md:right-8 group-hover:-rotate-45 lg:top-11">
                <svg
                  width="37"
                  height="31"
                  viewBox="0 0 37 31"
                  className="fill-theme"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* SVG path data */}
                </svg>
              </div>
              <div className="text-5xl font-extrabold transition duration-300 md:text-6xl number lg:text-7xl text-greyBlack opacity-30 group-hover:opacity-100">
                {service.id < 10 ? `0${service.id}` : service.id}
              </div>
              <h4 className="mt-5 mb-4 text-xl font-medium text-black dark:text-white xl:text-2xl">
                {service.title}
              </h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
