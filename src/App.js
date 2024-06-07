import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
<<<<<<< Updated upstream
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Lodging from "./pages/Lodging";
=======

import Error from "./pages/Error";
>>>>>>> Stashed changes

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au-dessus */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
