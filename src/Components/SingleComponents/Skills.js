import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TranslationContext } from "../Contexts/TranslationContext";

const Skills = () => {
  const { translate } = useContext(TranslationContext);

  const skillsData = [
    {
      src: "assets/img/skill/react.png",
      percent: 90,
      label: "React",
    },
    {
      src: "assets/img/skill/csharp.png",
      percent: 90,
      label: "C#",
    },
    {
      src: "assets/img/skill/net.png",
      percent: 90,
      label: ".NET",
    },
    {
      src: "assets/img/skill/sonsql.png",
      percent: 90,
      label: "SQL",
    },
    {
      src: "assets/img/skill/docker.png",
      percent: 75,
      label: "Docker",
    },
    {
      src: "assets/img/skill/html.svg",
      percent: 95,
      label: "HTML",
    },
    {
      src: "assets/img/skill/css.svg",
      percent: 95,
      label: "CSS",
    },
    {
      src: "assets/img/skill/js.svg",
      percent: 75,
      label: "JavaScript",
    },
  ];

  return (
    <div data-scroll-index="3" id="skill" className="skills-section">
      <div className="service-section relative px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-graduation-cap text-theme"></i>
          {translate("skillsskills")}
        </div>
        <div className="mb-8 mt-7 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {translate("my")}{" "}
            <span className="font-semibold text-theme">
              {translate("advantages")}
            </span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {translate("skills_description")}
          </p>
        </div>

        <div className="mt-12 skills-slider xl:mt-16">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
          >
            {skillsData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="text-center icon mb-4">
                  <img
                    src={skill.src}
                    className="dark:grayscale skills-icons"
                    alt={skill.label}
                  />
                </div>
                <div className="progressCircle">
                  <div
                    className="relative w-32 h-32 mx-auto circle md:w-40 md:h-40"
                    data-percent={skill.percent}
                    data-circlefill="#00BC91"
                    data-circleempty="#777777"
                  >
                    <div className="absolute inset-0 text-2xl font-semibold text-black dark:text-white label flex-center">
                      {skill.percent}%
                    </div>
                  </div>
                </div>
                <div className="text-black dark:text-white name">
                  {skill.label}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Controls Start */}
        <div className="skills-slider-navigation flex justify-center items-center gap-2.5 mt-12 md:absolute md:top-16 lg:top-20 md:right-8 lg:right-13">
          <button
            className="transition border rounded-full button-prev w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
            aria-label="Previous"
          >
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 5.08006C18 4.77812 17.7121 4.5334 17.3571 4.5334L2.19486 4.5334L6.07553 0.933214C6.32659 0.719715 6.32659 0.373628 6.07553 0.160126C5.82448 -0.0533767 5.41745 -0.0533766 5.1664 0.160126L0.188289 4.69352C-0.0627618 4.90702 -0.0627618 5.2531 0.188289 5.4666L5.33115 9.83986C5.5822 10.0534 5.98923 10.0534 6.24028 9.83986C6.49134 9.62637 6.49134 9.28028 6.24028 9.06678L2.19486 5.62672L17.3571 5.62671C17.7121 5.62671 18 5.38199 18 5.08006Z"
                className="fill-[#A0A0A0] group-hover:fill-white"
              />
            </svg>
          </button>
          <button
            className="transition border rounded-full button-next w-11 h-11 group border-platinum dark:border-greyBlack flex-center hover:bg-theme hover:border-theme"
            aria-label="Next"
          >
            <svg
              width="18"
              height="10"
              viewBox="0 0 18 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.44113e-07 4.91994C4.17717e-07 5.22187 0.287871 5.4666 0.642857 5.4666L15.8051 5.4666L11.9245 9.06678C11.6734 9.28028 11.6734 9.62637 11.9245 9.83987C12.1755 10.0534 12.5826 10.0534 12.8336 9.83987L17.8117 5.30648C18.0628 5.09298 18.0628 4.7469 17.8117 4.5334L12.6688 0.160134C12.4178 -0.0533766 12.0108 -0.0533766 11.7597 0.160134C11.5087 0.373633 11.5087 0.719718 11.7597 0.933218L15.8051 4.37328L0.642857 4.37328C0.287872 4.37328 4.70509e-07 4.61801 4.44113e-07 4.91994Z"
                className="fill-[#A0A0A0] group-hover:fill-white"
              />
            </svg>
          </button>
        </div>
        {/* Slider Controls End */}
      </div>
    </div>
  );
};

export default Skills;
