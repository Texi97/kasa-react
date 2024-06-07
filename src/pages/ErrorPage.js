import React from "react";
import Footer from "../components/Footer";
<<<<<<< Updated upstream:src/pages/ErrorPage.js
import "../styles/_error404.scss";
import Error from "../components/Error";
=======

import "../styles/index.css";
import { DisappearingFeatures } from "../components/DisappearingFeatures";
import ShuffleHero from "../components/ShuffleHero";
import { CountUpStats } from "../components/CountUpStats";
>>>>>>> Stashed changes:src/pages/Error.js

const ErrorPage = () => {
  return (
    <div>
      <div className="container_page">
<<<<<<< Updated upstream:src/pages/ErrorPage.js
        <Navigation />
        <Error />
=======
        <ShuffleHero />

        <DisappearingFeatures />
        <CountUpStats />
>>>>>>> Stashed changes:src/pages/Error.js
      </div>
      <div className="container_footer">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
