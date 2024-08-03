import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TranslationProvider } from "../src/Components/Contexts/TranslationContext"; // TranslationProvider'ı içe aktarın

import MobileMenu from "../src/Components/Layouts/MobileMenu";
import MobileMenuBar from "../src/Components/Layouts/MobileMenuBar";
import Navigation from "../src/Components/Layouts/Navigation";
import Sidebar from "../src/Components/Layouts/Sidebar";
import Lines from "../src/Components/Layouts/Lines";
import ThemeSwitcher from "../src/Components/Layouts/ThemeSwitcher";
import Footer from "./Components/Layouts/Footer";
import Loader from "../src/Components/Layouts/Loader";
import TrackUser from "./Components/Layouts/TrackUser";

// Sayfaların tembelliğe yüklenmesi (lazy loading)
const HomePage = lazy(() => import("../src/Components/Pages/HomePage"));
const PortfolioPage = lazy(() =>
  import("../src/Components/Pages/PortfolioPage")
);
const ProjectDetail = lazy(() =>
  import("../src/Components/Pages/ProjectDetailPage")
);
const BlogsPage = lazy(() => import("../src/Components/Pages/BlogsPage"));
const BlogDetailPage = lazy(() =>
  import("../src/Components/Pages/BlogDetailPage")
);
const Aylin = lazy(() => import("../src/Components/Pages/Aylin"));
const RentACar = lazy(() => import("../src/Components/Pages/RentACar"));
const LawOffice = lazy(() => import("../src/Components/Pages/LawOffice"));
const Cryptocurrency = lazy(() =>
  import("../src/Components/Pages/Cryptocurrency")
);

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <TranslationProvider>
      <Router>
        <ScrollToTop />
        <MobileMenu />
        <MobileMenuBar />
        <Navigation />
        <ThemeSwitcher />
        <Sidebar />
        <TrackUser />
        <div className="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/projects" element={<ProjectDetail />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/law-office" element={<LawOffice />} />
              <Route path="/cryptocurrency" element={<Cryptocurrency />} />
              <Route path="/rent-a-car" element={<RentACar />} />
              <Route path="/aylin-toy" element={<Aylin />} />
            </Routes>
          </Suspense>
        </div>
        <Lines />
        <Footer />
      </Router>
    </TranslationProvider>
  );
}

export default App;
