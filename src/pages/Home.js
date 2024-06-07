import React from "react";
import Navigation from "../components/Navigation";

import ScrollingTestimonials from "../components/ScrollingTestimonials";
import FeaturesSectionLeft from "../components/FeaturesSectionLeft";
import FeaturesSectionRight from "../components/FeaturesSectionRight";
import TestHero from "../components/TestHero";
import CardCarousel from "../components/CardCarousel";

const Home = () => {
  return (
    <div>
      <Navigation />
      <TestHero />
      <ScrollingTestimonials />
      <FeaturesSectionLeft id="Plomberie" />
      <FeaturesSectionRight id="Chauffage" />

      <CardCarousel />
    </div>
  );
};

export default Home;
