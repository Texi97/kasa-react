import React from "react";
import "../styles/_error404.scss";
import Error from "../components/Error";

const ErrorPage = () => {
  return (
    <div>
      <div className="container_page">
        <Error />
      </div>
    </div>
  );
};

export default ErrorPage;
