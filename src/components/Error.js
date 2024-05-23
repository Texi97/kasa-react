import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error_404">
      <h3>404</h3>
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <NavLink to="/">
        <p>Retourner sur la page d'accueil</p>
      </NavLink>
    </div>
  );
};

export default Error;
