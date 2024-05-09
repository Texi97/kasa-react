import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";

const Lodging = () => {
  return (
    <div>
      <Navigation />
      <div className="lodginPage">
        <Slideshow />
      </div>
      <Footer />
    </div>
  );
};

export default Lodging;
