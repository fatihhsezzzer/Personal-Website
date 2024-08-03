import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { TranslationContext } from "../Contexts/TranslationContext";

const BlogDetailsSection = () => {
  const { id } = useParams();
  const { language } = useContext(TranslationContext);
  const [blogDetails, setBlogDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://fatihhsezer.xyz/api/FatihBlog/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBlogDetails(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  useEffect(() => {
    // Dil değiştiğinde içerik güncellenecek
  }, [language]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Dil tercihine göre başlık, açıklama ve kategori seçimi
  const title = language === "tr" ? blogDetails.titleTr : blogDetails.titleEn;
  const description =
    language === "tr" ? blogDetails.descriptionTr : blogDetails.descriptionEn;
  const category =
    language === "tr" ? blogDetails.categoryTr : blogDetails.categoryEn;

  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-blog text-theme"></i>
            Blog Details
          </div>
          <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
            {title}
          </h2>
          <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
            <img
              src={`https://fatihhsezer.xyz${blogDetails.imgSrc}`}
              className="w-full h-auto lg:w-[475px] lg:h-[auto] md:h-[288px]"
              alt="Blog Thumbnail Image"
            />
          </div>
          <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
            <div>
              <h6 className="text-black dark:text-white">CATEGORY:</h6>
              <p className="text-regular">{category}</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white">POSTED ON:</h6>
              <p className="text-regular">{blogDetails.date}</p>
            </div>
          </div>
          <div>
            <div
              className="text-regular leading-[2]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSection;
