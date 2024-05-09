import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import data from "../data/data.json";
import { useParams } from "react-router-dom"; // Importez useParams pour extraire les paramètres d'URL

//étoiles svg
import starFilled from "../assets/img/star-filled.svg";
import starEmpty from "../assets/img/star-empty.svg";

const Lodging = () => {
  const { id } = useParams(); // Récupérez l'ID de l'URL
  const pageData = data.find((item) => item.id === id);

  if (!pageData) {
    console.error("Page data not found for ID:", id);
    return null;
  }

  const lodgingTitle = pageData.title;
  const lodgingCity = pageData.location;
  const lodgingHost = pageData.host.name;
  const lodgingHostPicture = pageData.host.picture;

  // Convertissez la chaîne de caractères en nombre pour la comparaison
  const rating = parseInt(pageData.rating);

  // Créez un tableau de 5 étoiles
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const starSrc = i <= rating ? starFilled : starEmpty;
    stars.push(<img key={i} src={starSrc} alt={`Star ${i}`} />);
  }

  return (
    <div>
      <Navigation />
      <div className="slideshow_container">
        <Slideshow data={data} />
      </div>
      <section className="infos_container">
        <div className="lodging_infos">
          <h1>{lodgingTitle}</h1>
          <h2>{lodgingCity}</h2>
          <ul>
            {pageData.tags.map((tag, id) => (
              <li key={id}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="lodging_host">
          <div className="lodging_host__infos">
            <h3>{lodgingHost}</h3>
            <img src={lodgingHostPicture} alt={lodgingHost} />
          </div>
          <div className="lodging_host__rating">{stars}</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lodging;
