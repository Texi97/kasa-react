import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/_error404.scss";
import Error from "../components/Error";

const ErrorPage = () => {
  return (
    <div>
      <div className="container_page">
        <Navigation />
        <Error />
      </div>
      <div className="container_footer">
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
