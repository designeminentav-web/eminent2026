import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import Industries from "../components/Industries";
import Clients from "../components/Clients";
import Blogs from "../components/Blogs";
// import Social from "../components/Social";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Products />
      <Industries />
      <Clients />
      <Blogs />
      {/* <Social /> */}
    </>
  );
};

export default Home;
