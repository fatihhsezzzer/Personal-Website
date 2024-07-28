import React from "react";

const BlogSection = () => {
  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      {/* Blog Section Start */}
      <div className="py-5 xl:py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl service-section lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-blog text-theme"></i>
            BLOG
          </div>
          <div className="mt-5 mb-8 md:my-10 section-title">
            <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
              Latest <span className="font-semibold text-theme">Insights</span>
            </h2>
            <p className="max-w-xl mt-4 md:mt-6 subtitle">
              I design products that are more than pretty. I make them shippable
              and usable, tempor non mollit dolor et do aute
            </p>
          </div>

          <div className="blog-list grid grid-cols-1 md:grid-cols-2 gap-7.5 *:overflow-hidden *:bg-flashWhite dark:*:bg-metalBlack *:items-center *:rounded-2xl">
            {[
              {
                id: 1,
                imgSrc: "assets/img/blog/article1.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Elevate your mornings with perfectly brewed coffee",
                link: "article-details.html",
              },
              {
                id: 2,
                imgSrc: "assets/img/blog/article2.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Mastering the clock: A guide to time management",
                link: "article-details.html",
              },
              {
                id: 3,
                imgSrc: "assets/img/blog/article3.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Homeward bound: Crafting a productive home office",
                link: "article-details.html",
              },
              {
                id: 4,
                imgSrc: "assets/img/blog/article4.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Design Specialization brings a user design-centric.",
                link: "article-details.html",
              },
              {
                id: 5,
                imgSrc: "assets/img/blog/article5.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Design Specialization brings a user design-centric.",
                link: "article-details.html",
              },
              {
                id: 6,
                imgSrc: "assets/img/blog/article6.png",
                category: "UI Design",
                date: "03 May 2023",
                title: "Design Specialization brings a user design-centric.",
                link: "article-details.html",
              },
            ].map((article) => (
              <div className="article group" key={article.id}>
                <div className="flex col-span-12 overflow-hidden thumbnail sm:col-span-6 md:col-span-5">
                  <a
                    href={article.link}
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={article.imgSrc}
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt="Post Title"
                    />
                  </a>
                </div>

                <div className="relative flex flex-col col-span-12 p-5 post-content sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      <a
                        href="#"
                        className="transition-colors hover:text-theme"
                      >
                        {article.category}
                      </a>
                      ,<span className="post_date">{article.date}</span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <a
                      href={article.link}
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme dark:hover:text-theme"
                    >
                      {article.title}
                    </a>
                  </div>
                  <div className="read-details">
                    <a
                      href={article.link}
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
