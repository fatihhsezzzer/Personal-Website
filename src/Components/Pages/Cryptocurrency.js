import React from "react";

const ProjectDetailsSection = () => {
  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-tasks-alt text-theme"></i>
            Project Details
          </div>

          <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
            Law Office Website
          </h2>
          <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
            <img
              src="assets/img/portfolio/kriptohome.png"
              className="w-full"
              alt="Project Thumbnail Image"
            />
          </div>
          <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
            <div>
              <h6 className="text-black dark:text-white font-semibold">
                CLIENT
              </h6>
              <p className="text-regular">Personal Project</p>
              <p className="text-regular"> .</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white font-semibold">
                SERVICES:
              </h6>
              <p className="text-regular">
                Web Design and Development,Backend Integration,
              </p>
              <p className="text-regular">Database Management</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white font-semibold">
                PROJECT LINKS:
              </h6>
              <p className="text-regular">
                <a
                  className="text-blue-500 hover:underline font-bold"
                  target="_blank"
                  href="https://fatihsezerprojects.com.tr/"
                >
                  Live
                </a>
              </p>
              <p className="text-regular">
                <a
                  className="text-blue-500 hover:underline font-bold"
                  target="_blank"
                  href="https://github.com/fatihhsezzzer/Law-Office-React-project"
                >
                  Github
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
              Project Description
            </h3>
            <p className="text-regular !leading-[2]">
              In this project, we aim to create a comprehensive platform that
              addresses these complex issues while providing valuable resources
              and tools for users. Our platform is designed to be multilingual,
              user-friendly, and highly functional, ensuring that all users can
              access the information they need in their preferred language.
            </p>
            <ul className="text-regular leading-relaxed list-disc ml-6 my-4 space-y-2">
              <li>
                <strong>Language Options:</strong> Language options are
                available for all pages and incoming data in the project. A
                translation.json file is created for static data. Separate
                columns are maintained for each language for the data from the
                database, allowing dynamic extraction and display of data
                according to the current language selection.
              </li>
              <li>
                <strong>Blog Area:</strong> The blog section on the site is
                dynamically created using data from the database. Users can read
                blog posts in their native language.
              </li>
              <li>
                <strong>Frequently Asked Questions (FAQ):</strong> The FAQ
                section is managed dynamically with data from the database.
                Answers to the most frequently asked questions are presented
                here.
              </li>
              <li>
                <strong>Admin Panel:</strong> A user-friendly admin panel was
                developed for managing blog and FAQ content, allowing for easy
                content updates.
              </li>
              <li>
                <strong>Form Integration:</strong> Form units on the page are
                integrated with SMTP, enabling users to fill out forms and
                receive responses via email. This ensures fast and secure
                communication.
              </li>
            </ul>

            <h3 className="mt-12 mb-10 text-2xl font-medium text-black dark:text-white">
              Technologies
            </h3>
            <div className="progressbar-wrap space-y-7">
              {[
                {
                  id: 1,
                  imgSrc: "assets/img/skill/react.png",
                  alt: "React",
                  title: "React",
                  percentage: "95%",
                },
                {
                  id: 1,
                  imgSrc: "assets/img/skill/net.png",
                  alt: ".Net Core",
                  title: ".Net Core",
                  percentage: "95%",
                },
                {
                  id: 1,
                  imgSrc: "assets/img/skill/html.svg",
                  alt: "HTML5",
                  title: "HTML5",
                  percentage: "90%",
                },
                {
                  id: 2,
                  imgSrc: "assets/img/skill/css.svg",
                  alt: "CSS3",
                  title: "CSS3",
                  percentage: "80%",
                },
                {
                  id: 3,
                  imgSrc: "assets/img/skill/js.svg",
                  alt: "JavaScript",
                  title: "JavaScript",
                  percentage: "70%",
                },
              ].map((tech) => (
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
