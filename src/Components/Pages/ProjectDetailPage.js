import React from "react";

const ProjectDetailsSection = () => {
  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      {/* Project Details Section Start */}
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-tasks-alt text-theme"></i>
            Project Details
          </div>

          <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
            Three wine glasses filled with candies
          </h2>
          <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
            <img
              src="assets/img/portfolio/portfolio-img1-xl.png"
              className="w-full"
              alt="Project Thumbnail Image"
            />
          </div>
          <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
            <div>
              <h6 className="text-black dark:text-white">CLIENT</h6>
              <p className="text-regular">Envato Theme</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white">SERVICES:</h6>
              <p className="text-regular">Tips & Tricks, Design</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white">DURATION</h6>
              <p className="text-regular">108 hrs</p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
              Project Description
            </h3>
            <p className="text-regular !leading-[2]">
              Patent authorities globally are grappling with the challenge of
              redefining their approach to handling inventions generated not by
              human ingenuity but by AI. It has sparked considerable debate
              within the intellectual property community. This analysis
              initiates a three-part series that delves into the influence of AI
              on intellectual property rights.
            </p>
            <ul className="text-regular !leading-[2] list-disc ml-6 my-4">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              </li>
              <li>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
              </li>
            </ul>

            <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8">
              <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                <img
                  src="assets/img/portfolio/portfolio-img1-2.png"
                  className="w-full"
                  alt="Project Inner Column Image"
                />
              </div>
              <div className="overflow-hidden rounded-xl xl:rounded-2xl">
                <img
                  src="assets/img/portfolio/portfolio-img1-1.png"
                  className="w-full"
                  alt="Project Inner Column Image"
                />
              </div>
            </div>

            <h3 className="mt-12 mb-10 text-2xl font-medium text-black dark:text-white">
              Technologies
            </h3>
            <div className="progressbar-wrap space-y-7">
              {[
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
                  alt: "javascript",
                  title: "javascript",
                  percentage: "60%",
                },
                {
                  id: 4,
                  imgSrc: "assets/img/skill/tailwind.svg",
                  alt: "TailwindCSS",
                  title: "TailwindCSS",
                  percentage: "90%",
                },
                {
                  id: 5,
                  imgSrc: "assets/img/skill/figma.svg",
                  alt: "Figma",
                  title: "Figma",
                  percentage: "80%",
                },
              ].map((tech) => (
                <div
                  className="flex flex-wrap items-center gap-5 progressbar"
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
                      <div className="progress-content bg-theme h-1.5 w-0 rounded-2xl"></div>
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
