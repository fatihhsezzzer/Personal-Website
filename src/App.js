import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import MobileMenu from "../src/Components/Layouts/MobileMenu";
import MobileMenuBar from "../src/Components/Layouts/MobileMenuBar";
import Navigation from "../src/Components/Layouts/Navigation";
import Sidebar from "../src/Components/Layouts/Sidebar";
import Lines from "../src/Components/Layouts/Lines";
import ThemeSwitcher from "../src/Components/Layouts/ThemeSwitcher";

import TrackUser from "./Components/Layouts/TrackUser";

import HomePage from "../src/Components/Pages/HomePage";
import PortfolioPage from "../src/Components/Pages/PortfolioPage";
import ProjectDetail from "../src/Components/Pages/ProjectDetailPage";
import BlogsPage from "../src/Components/Pages/BlogsPage";
import BlogDetailPage from "../src/Components/Pages/BlogDetailPage";

import LawOffice from "../src/Components/Pages/LawOffice";
import Cryptocurrency from "../src/Components/Pages/Cryptocurrency";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MobileMenu />
      <MobileMenuBar />
      <Navigation />
      <ThemeSwitcher />
      <Sidebar />
      <TrackUser />
      <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/projects" element={<ProjectDetail />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/law-office" element={<LawOffice />} />
          <Route path="/cryptocurrency" element={<Cryptocurrency />} />
        </Routes>
      </div>
      <Lines />
    </Router>
  );
}

export default App;
