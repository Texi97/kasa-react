import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Lodging from "./pages/Lodging";
import Base from "../src/components/Base";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Lodging />} />
          {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au-dessus */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/logement/error" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
