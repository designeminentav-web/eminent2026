import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Brands = lazy(() => import("./pages/Brands"));
const CaseStudy = lazy(() => import("./pages/Casestudy"));
const Solution = lazy(() => import("./pages/Solution"));
const SolutionDetails = lazy(() => import("./pages/Solutiondetails"));
const CaseStudyDetails = lazy(() => import("./pages/CaseStudydetails"));
const BrandProducts = lazy(() => import("./pages/BrandsDetails"));
const Auditorius = lazy(() => import("./components/solutions/Auditorium"));
const Conference = lazy(() => import("./components/solutions/ConferenceRoom"));
const Gym = lazy(() => import("./components/solutions/GymFitness"));
const Homehifi = lazy(() => import("./components/solutions/HomeHifi"));
const Live = lazy(() => import("./components/solutions/LiveEvents"));
const Night = lazy(() => import("./components/solutions/Nightclub"));
const Resturant = lazy(() => import("./components/solutions/Restaurants"));
const Retail = lazy(() => import("./components/solutions/RetailOutlet"));
const Smart = lazy(() => import("./components/solutions/SmartClassroom"));
const DesignRequest = lazy(() => import("./pages/DesignRequest"));
const Corporate = lazy(() => import("./pages/Corporate"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
// import DesignRequest from "./pages/DesignRequest";  
// import Government from "./pages/Government";
// import Hospitality from "./pages/Hospitality";
// import Education from "./pages/Education";
// import EventsLiveShows from "./pages/EventsLiveShows";
// import Homehifi from "./pages/HomeHifi";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#050B18] text-white text-sm md:text-base">
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/solutions" element={<Solution />} />
          <Route path="/solutions/auditoriums" element={<Auditorius />} />
          <Route path="/solutions/conference-room" element={<Conference />} />
          <Route path="/solutions/gym-fitness" element={<Gym />} />
          <Route path="/solutions/home-hifi" element={<Homehifi />} />
          <Route path="/solutions/live-events" element={<Live />} />
          <Route path="/solutions/night-clubs" element={<Night />} />
          <Route path="/solutions/restaurants-cafes" element={<Resturant />} />
          <Route path="/solutions/retail-outlet" element={<Retail />} />
          <Route path="/solutions/smart-classroom" element={<Smart />} />
          <Route path="/solutions/:id" element={<SolutionDetails />} />
          <Route path="/case-study/:id" element={<CaseStudyDetails />} />
          <Route path="/brands/:id" element={<BrandProducts />} />
          {/* <Route path="/solutions/auditoriums" element={<Auditorius />} /> */}
          <Route path="/design-request" element={<DesignRequest />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
