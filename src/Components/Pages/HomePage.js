import React from "react";

import MobileMenu from "../Layouts/MobileMenu";
import MobileMenuBar from "../Layouts/MobileMenuBar";
import Navigation from "../Layouts/Navigation";
import Sidebar from "../Layouts/Sidebar";

import Loader from "../Layouts/Loader";

import Hero from "../SingleComponents/Hero";
import About from "../SingleComponents/About";
import Service from "../SingleComponents/Services";
import SkillSection from "../SingleComponents/Skills";
import ResumeSection from "../SingleComponents/Resume";
import PortfolioSection from "../SingleComponents/Portfolio";
import BlogSection from "../SingleComponents/BlogSection";
import ContactSection from "../SingleComponents/Contact";

export default function HomePage() {
  return (
    <>
      <Loader />
      <div
        data-scroll-index="0"
        id="home"
        className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem *:py-5 xl:*:py-3.5 *:max-w-content max-xl:*:mx-auto xl:*:ml-auto xl:max-2xl:*:max-w-50rem"
      >
        <Hero />
        <About />
        <Service />
        <SkillSection />
        <ResumeSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </div>
    </>
  );
}
