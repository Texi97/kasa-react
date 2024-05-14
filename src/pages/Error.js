import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import "../styles/_error404.scss";

const Error = () => {
  return (
    <div>
      <div className="container_page">
        <Navigation />
        <div className="error_404">
          <h3>404</h3>
          <h4>Oups! La page que vous demandez n'existe pas.</h4>
          <NavLink to="/">
            <p>Retourner sur la page d'accueil</p>
          </NavLink>
        </div>
      </div>
      <div className="container_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Error;
