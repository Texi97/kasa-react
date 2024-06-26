import React from "react";
import Collapse from "../components/Collapse";
import { collapseText } from "../data/description";
import Banner_about from "../components/Banner_about";

const About = () => {
  return (
    <div>
      <div className="container_page">
        <Banner_about />

        <div className="collapse_elements_about">
          {collapseText.map(
            (
              item,
              index // Mapping de chaque élément du tableau d'objets.
            ) => (
              <Collapse key={index} title={item.title} content={item.content} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
