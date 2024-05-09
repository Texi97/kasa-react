import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import { collapseText } from "../data/description";

const About = () => {
  return (
    <div>
      <Navigation />
      <div className="banner_no_h1">
        <Banner />
      </div>
      <div className="collapse_elements">
        {collapseText.map(
          (
            item,
            index // Mapping de chaque élément du tableau d'objets.
          ) => (
            <Collapse key={index} title={item.title} content={item.content} />
          )
        )}
      </div>
      <Footer />
    </div>
  );
};

export default About;
