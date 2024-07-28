import React from "react";

const BlogDetailsSection = () => {
  return (
    <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
      {/* Blog Details Section Start */}
      <div className="py-3.5 max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto">
        <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl lg:p-10 2xl:p-13">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
            <i className="fal fa-blog text-theme"></i>
            Blog Details
          </div>
          <h2 className="text-2xl font-semibold leading-normal text-black dark:text-white mt-7 lg:mt-10 article-title lg:text-3xl lg:leading-normal">
            Elevate your mornings with perfectly brewed coffee
          </h2>
          <div className="mb-4 overflow-hidden mt-7 xl:my-8 thumb rounded-xl xl:rounded-2xl">
            <img
              src="assets/img/blog/article1-xl.png"
              className="w-full"
              alt="Blog Thumbnail Image"
            />
          </div>
          <div className="post-meta sm:flex items-center justify-between my-8 mb-10 max-sm:space-y-3.5">
            <div>
              <h6 className="text-black dark:text-white">POSTED BY</h6>
              <p className="text-regular">Adrinao Smith</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white">CATEGORY:</h6>
              <p className="text-regular">Tips & Tricks, Design</p>
            </div>
            <div>
              <h6 className="text-black dark:text-white">POSTED ON:</h6>
              <p className="text-regular">Noveber 01, 2023</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
              Cappuccino Bliss
            </h3>
            <p className="text-regular leading-[2]">
              Patent authorities globally are grappling with the challenge of
              redefining their approach to handling inventions generated not by
              human ingenuity but by AI. It has sparked considerable debate
              within the intellectual property community.
            </p>
            <br />
            <h3 className="mb-3 text-lg font-medium text-black dark:text-white xl:text-2xl">
              Benifits of coffee
            </h3>
            <ul className="text-regular leading-[2] list-disc ml-5 my-4">
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
            <div className="grid gap-5 my-8 sm:grid-cols-2 md:gap-8 *:overflow-hidden *:rounded-xl *:xl:rounded-2xl">
              <div>
                <img
                  src="assets/img/blog/article-inner2.png"
                  className="w-full"
                  alt="Blog Inner Column Image"
                />
              </div>
              <div>
                <img
                  src="assets/img/blog/article-inner1.png"
                  className="w-full"
                  alt="Blog Inner Column Image"
                />
              </div>
            </div>
          </div>
          <div className="items-start justify-between gap-8 pt-5 my-10 border-t border-dashed blog-footer max-sm:space-y-4 sm:flex border-greyBlack">
            <div className="flex flex-1 gap-3">
              <p className="text-black dark:text-white">Share:</p>
              <ul className="flex items-center space-x-4">
                <li>
                  <a href="#" className="hover:text-theme">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.22629 0.328125C2.78415 0.328125 0.796875 2.31697 0.796875 4.76105V10.8989C0.796875 13.343 2.78415 15.3319 5.22629 15.3319H11.3593C13.8015 15.3319 15.7888 13.343 15.7888 10.8989V4.76105C15.7888 2.31697 13.8015 0.328125 11.3593 0.328125H5.22629ZM5.22629 1.01011H11.3593C13.4332 1.01011 15.1073 2.68559 15.1073 4.76105V10.8989C15.1073 12.9744 13.4332 14.6499 11.3593 14.6499H5.22629C3.15248 14.6499 1.47832 12.9744 1.47832 10.8989V4.76105C1.47832 2.68559 3.15248 1.01011 5.22629 1.01011ZM12.3815 3.05608C12.2008 3.05608 12.0274 3.12793 11.8997 3.25583C11.7719 3.38372 11.7001 3.55719 11.7001 3.73806C11.7001 3.91894 11.7719 4.09241 11.8997 4.2203C12.0274 4.3482 12.2008 4.42005 12.3815 4.42005C12.5622 4.42005 12.7356 4.3482 12.8634 4.2203C12.9912 4.09241 13.063 3.91894 13.063 3.73806C13.063 3.55719 12.9912 3.38372 12.8634 3.25583C12.7356 3.12793 12.5622 3.05608 12.3815 3.05608ZM8.29282 4.07906C6.2269 4.07906 4.54485 5.76245 4.54485 7.82999C4.54485 9.89754 6.2269 11.5809 8.29282 11.5809C10.3587 11.5809 12.0408 9.89754 12.0408 7.82999C12.0408 5.76245 10.3587 4.07906 8.29282 4.07906ZM8.29282 4.76105C9.99044 4.76105 11.3593 6.13102 11.3593 7.82999C11.3593 9.52896 9.99044 10.8989 8.29282 10.8989C6.59519 10.8989 5.22629 9.52896 5.22629 7.82999C5.22629 6.13102 6.59519 4.76105 8.29282 4.76105Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-theme">
                    <svg
                      width="19"
                      height="16"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.08208 11.5618C4.92564 11.5404 3.91317 10.9201 3.34418 9.99711C3.7008 9.98932 4.0476 9.93798 4.3782 9.84768L4.34474 8.87511C3.08249 8.62205 2.08176 7.64351 1.79397 6.39241C2.14836 6.50086 2.52227 6.56485 2.90852 6.57723L4.65535 6.63324L3.20244 5.66184C2.32052 5.07219 1.74146 4.06574 1.74146 2.92526C1.74146 2.58044 1.79418 2.24875 1.89179 1.93732C3.82474 3.99515 6.52093 5.3268 9.52964 5.4776L10.191 5.51074L10.0418 4.8656C9.98644 4.62602 9.95675 4.37407 9.95675 4.11543C9.95675 2.29983 11.4278 0.827637 13.2415 0.827637C14.1863 0.827637 15.0394 1.22652 15.6391 1.86617L15.8287 2.06844L16.1008 2.01471C16.4672 1.94234 16.8247 1.84544 17.1716 1.7258C16.9692 1.93636 16.739 2.12015 16.4869 2.27129L16.8033 3.19661C17.0104 3.17183 17.2151 3.13938 17.4172 3.09947C17.2018 3.29968 16.9741 3.48671 16.7356 3.65902L16.5172 3.81685L16.5289 4.08609C16.5357 4.24139 16.5391 4.39745 16.5391 4.55428C16.5391 9.34538 12.8991 14.8318 6.27083 14.8318C4.93298 14.8318 3.65665 14.5744 2.48567 14.1079C3.94298 13.908 5.27749 13.3214 6.38153 12.455L7.48683 11.5877L6.08208 11.5618Z"
                        stroke="currentcolor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-theme">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.06624 0.324219C3.93086 0.324219 0.566406 3.69133 0.566406 7.82998C0.566406 11.9686 3.93086 15.3358 8.06624 15.3358C12.2016 15.3358 15.5661 11.9686 15.5661 7.82998C15.5661 3.69133 12.2016 0.324219 8.06624 0.324219ZM8.06624 1.45008C9.61957 1.45008 11.0397 2.00414 12.1443 2.92412C11.1121 3.83357 9.93174 4.57366 8.65876 5.1414C7.99557 3.93434 7.27563 2.76388 6.4674 1.65972C6.97898 1.5278 7.51282 1.45008 8.06624 1.45008ZM5.36074 2.057C6.19036 3.15491 6.92238 4.32639 7.59604 5.53574C6.21021 6.01758 4.74296 6.32883 3.19135 6.32883C2.75349 6.32883 2.32187 6.29962 1.89353 6.25773C2.36521 4.39057 3.65294 2.85797 5.36074 2.057ZM12.9419 3.71941C13.8641 4.81452 14.4237 6.22442 14.4382 7.76915C13.6284 7.56586 12.7821 7.4547 11.9099 7.4547C11.2244 7.4547 10.5621 7.54325 9.91337 7.67019C9.68742 7.14635 9.43995 6.63725 9.18536 6.12946C10.5576 5.50842 11.8313 4.70617 12.9419 3.71941ZM8.13289 6.54286C8.37046 7.01247 8.61002 7.47866 8.82209 7.96266C6.54874 8.67425 4.59729 10.1188 3.28803 12.0476C2.29713 10.9236 1.69138 9.45098 1.69138 7.82998C1.69138 7.67447 1.70395 7.52236 1.71482 7.36967C2.20054 7.41951 2.69105 7.4547 3.19135 7.4547C4.93258 7.4547 6.58319 7.10315 8.13289 6.54286ZM11.9099 8.58056C12.7532 8.58056 13.5668 8.70042 14.343 8.91187C14.0487 10.6406 13.0672 12.1299 11.6829 13.0848C11.3494 11.6072 10.8827 10.1827 10.3484 8.79166C10.8637 8.70288 11.3688 8.58056 11.9099 8.58056ZM9.22564 9.00276C9.81471 10.5041 10.3185 12.0488 10.656 13.6587C9.86461 14.0104 8.98978 14.2099 8.06624 14.2099C6.57028 14.2099 5.20022 13.693 4.11418 12.8333C5.29463 11.0114 7.1028 9.64681 9.22564 9.00276Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-theme">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.83576 0.327637C3.63142 0.327637 0.222656 3.7391 0.222656 7.94675C0.222656 11.5169 2.67915 14.5043 5.99085 15.3309C5.95532 15.2281 5.93248 15.1087 5.93248 14.9608V13.6586C5.62352 13.6586 5.10582 13.6586 4.97577 13.6586C4.45491 13.6586 3.99178 13.4344 3.76719 13.0179C3.51786 12.5551 3.47472 11.8471 2.85679 11.4141C2.67344 11.27 2.81301 11.1055 3.02428 11.1277C3.41445 11.2382 3.738 11.5062 4.04253 11.9036C4.34578 12.3017 4.48853 12.3919 5.05507 12.3919C5.32978 12.3919 5.74088 12.376 6.12788 12.315C6.33598 11.7862 6.69569 11.2992 7.13535 11.0693C4.60019 10.8084 3.39034 9.54613 3.39034 7.83247C3.39034 7.09468 3.70438 6.38103 4.23793 5.77975C4.06283 5.18292 3.84269 3.96577 4.30518 3.50227C5.44588 3.50227 6.1355 4.24259 6.30108 4.4426C6.86953 4.24767 7.4938 4.1372 8.1498 4.1372C8.80706 4.1372 9.43387 4.24767 10.0036 4.44387C10.1673 4.24513 10.8575 3.50227 12.0008 3.50227C12.4652 3.9664 12.2425 5.18863 12.0655 5.78419C12.5958 6.3842 12.908 7.09595 12.908 7.83247C12.908 9.54486 11.7 10.8065 9.16868 11.0687C9.86528 11.4325 10.3735 12.4547 10.3735 13.2249V14.9608C10.3735 15.0268 10.3589 15.0744 10.3513 15.1309C13.3178 14.0903 15.4489 11.2712 15.4489 7.94675C15.4489 3.7391 12.0401 0.327637 7.83576 0.327637Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-1 gap-3">
              <p className="text-black dark:text-white">Tags:</p>
              <div className="flex flex-wrap items-center gap-2.5 *:inline-block *:border *:border-dashed *:border-greyBlack  *:rounded-md *:text-sm *:py-1.5 *:px-2 *:transition-all">
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  HTML5
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  CSS3
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  WordPress
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  UI Design
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  AI
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  Discussion
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  Tailwind
                </a>
                <a href="#" className="hover:text-theme dark:hover:text-white">
                  Webflow
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsSection;