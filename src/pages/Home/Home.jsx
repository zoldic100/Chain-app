import React from "react";
import { About, Hero, NavBar, Pricing, Reviews, Services } from "../../components";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className=" home-container ">
        <Hero />
        <Services />
        <About />
        <Reviews />
        <Pricing />
      </div>
      <Footer />
    </>
  );
};

export default Home;
