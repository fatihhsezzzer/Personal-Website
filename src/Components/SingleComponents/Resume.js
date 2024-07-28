import React from "react";

const ResumeSection = () => {
  const workExperiences = [
    {
      company: "Dataliva",
      date: "July, 2024 - Current",
      position: "Software Developer",
      description:
        "I specialize in .NET and SQL technologies. I develop, maintain, and enhance applications using the .NET framework (C#, ASP.NET, .NET Core). Additionally, I write database queries, stored procedures, and functions using T-SQL, aiming to improve database performance. We leverage these technologies to meet service requirements and deliver high-performance solutions.",
    },
    {
      company: "Architecht",
      date: "August-2023 - March-2024",
      position: "Software Developer",
      description:
        "I have worked on projects involving .NET, .NET Core, ASP.NET, React, MSSQL, HTML, and CSS. Additionally, I have developed WPF screens, providing comprehensive solutions across various technologies and platforms.",
    },
  ];

  const educationDetails = [
    {
      institution: "Sakarya Universty",
      date: "2020-2024",
      degree: "Information System Engineering",
      description:
        "I graduated from my university's Information Systems Engineering department. I worked on projects involving .NET, .NET Core, ASP.NET, React, MSSQL, HTML and CSS. I have also developed extensive applications across various technologies and platforms.",
    },
  ];

  return (
    <div data-scroll-index="4" id="resume">
      <div className="resume-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-folder-open text-theme"></i>
          RESUME
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            Work <span className="font-semibold text-theme">Experience</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle"></p>
        </div>
        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            {workExperiences.map((exp, index) => (
              <li key={index}>
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    {exp.company}
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    {exp.date}
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    {exp.position}
                  </h4>
                  <p>{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            My <span className="font-semibold text-theme">Education</span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle"></p>
        </div>
        <div className="experience">
          <ul className="space-y-5 md:space-y-11 relative md:before:content-[''] md:before:absolute md:before:left-64 md:before:border-r md:before:border-platinum md:dark:before:border-metalBlack md:before:h-[calc(100%_-1.5rem)] md:before:top-1/2 md:before:-translate-y-1/2 *:p-5 *:border *:rounded-xl md:*:flex max-md:*:space-y-2 *:border-platinum dark:*:border-metalBlack md:*:border-0 md:*:p-0 md:*:rounded-none">
            {educationDetails.map((edu, index) => (
              <li key={index}>
                <div className="flex items-center justify-between mb-5 md:w-64 md:block md:mb-0">
                  <h6 className="text-sm font-medium text-black dark:text-white text-opacity-60 md:text-base md:text-opacity-100">
                    {edu.institution}
                  </h6>
                  <p className="text-[13px] md:text-sm text-theme">
                    {edu.date}
                  </p>
                </div>
                <div className="md:flex-1 md:pl-16 relative md:before:content-[''] md:before:absolute md:before:-left-1 md:before:top-3 md:before:w-2 md:before:h-2 md:before:bg-theme md:before:rounded-full md:before:shadow-dots_glow">
                  <h4 className="text-xl xl:text-2xl font-medium xl:font-medium leading-7 text-black dark:text-white mb-2.5">
                    {edu.degree}
                  </h4>
                  <p>{edu.description}</p>
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
