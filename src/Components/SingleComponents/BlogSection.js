import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TranslationContext } from "../Contexts/TranslationContext";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, translate } = useContext(TranslationContext);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://fatihhsezer.xyz/api/FatihBlog?pageNumber=1&pageSize=9"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const blogs = data.fatihBlogs.$values;
        setBlogPosts(blogs.slice(0, 3)); // Son eklenen 3 blogu al
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return <div>{translate("loading")}</div>;
  }

  if (error) {
    return (
      <div>
        {translate("error")}: {error}
      </div>
    );
  }

  return (
    <div data-scroll-index="6" id="blog">
      <div className="blog-section px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <i className="fal fa-blog text-theme"></i>
          {translate("blog")}
        </div>
        <div className="mt-5 mb-8 md:my-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            {translate("latest")}{" "}
            <span className="font-semibold text-theme">
              {translate("blogs")}
            </span>
          </h2>
          <p className="max-w-xl mt-4 md:mt-6 subtitle">
            {translate("blog_description")}
          </p>
        </div>
        <div className="blog-list md:space-y-7.5 space-y-5 *:grid md:*:gap-2 *:grid-cols-12 *:overflow-hidden *:bg-flashWhite dark:*:bg-metalBlack *:items-center *:rounded-2xl *:p-3.5">
          {blogPosts.map((post, index) => {
            const title = language === "tr" ? post.titleTr : post.titleEn;
            const description =
              language === "tr" ? post.descriptionTr : post.descriptionEn;
            const category =
              language === "tr" ? post.categoryTr : post.categoryEn;

            return (
              <div key={index} className="article group">
                <div className="thumbnail overflow-hidden flex col-span-12 sm:col-span-6 md:col-span-5">
                  <Link
                    to={`/blog/${post.id}`}
                    className="block w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={`https://fatihhsezer.xyz${post.imgSrc}`}
                      className="object-cover object-center w-full h-full min-h-[288px] max-h-60 md:min-h-60 transition-all duration-300 ease-in-out group-hover:scale-105"
                      alt={title}
                    />
                  </Link>
                </div>
                <div className="post-content relative px-3 pt-6 pb-2 md:p-5 flex flex-col col-span-12 sm:col-span-6 md:col-span-7">
                  <div className="flex items-center gap-5">
                    <div className="text-sm font-medium tags">
                      {category}
                      <span className="post_date"> {post.date} </span>
                    </div>
                  </div>
                  <div className="post-title mt-3 md:mt-4.5 mb-6 md:mb-8">
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-xl font-semibold leading-normal text-black dark:text-white transition-colors line-clamp-2 2xl:text-2xl 2xl:leading-normal hover:text-theme"
                    >
                      {title}
                    </Link>
                  </div>

                  <div className="read-details">
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 border border-theme text-theme text-sm py-3.5 px-6 rounded-3xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover dark:font-medium hover:text-white"
                    >
                      {translate("read_more")}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center more-blogs md:mt-13">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[15px] font-medium border border-theme bg-theme text-white py-4.5 px-9 rounded-4xl leading-none transition-all duration-300 hover:bg-themeHover hover:border-themeHover"
          >
            {translate("more_blog")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
