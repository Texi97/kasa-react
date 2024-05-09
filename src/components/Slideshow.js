import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams pour extraire les paramètres d'URL
import "../styles/components/_slideshow.scss";

const Slideshow = ({ data }) => {
  const { id } = useParams(); // Récupérez l'ID de l'URL
  const [currentSlide, setCurrentSlide] = useState(0); // État local pour suivre l'index de la photo actuelle

  // Trouvez les données correspondant à l'ID de l'URL
  const pageData = data.find((item) => item.id === id);

  if (!pageData) {
    console.error("Page data not found for ID:", id);
    return null;
  }

  const totalSlides = pageData.pictures.length;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src="/arrow_left.png"
        className="arrow_left"
        onClick={goToPrevSlide}
      />
      <img
        src={pageData.pictures[currentSlide]}
        alt={pageData.title}
        className="slide"
      />
      <img
        src="/arrow_right.png"
        className="arrow_right"
        onClick={goToNextSlide}
      />
      <span className="indicators">
        {currentSlide + 1}/{totalSlides}
      </span>
    </div>
  );
};

export default Slideshow;
