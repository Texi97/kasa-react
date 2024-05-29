import React, { useEffect } from "react";
import Slideshow from "../components/Slideshow";
import data from "../data/data.json";
import { useParams, useNavigate } from "react-router-dom"; // Importez useParams pour extraire les paramètres d'URL

//étoiles svg
import starFilled from "../assets/img/star-filled.svg";
import starEmpty from "../assets/img/star-empty.svg";
import Collapse from "../components/Collapse";

const Lodging = () => {
  const { id } = useParams(); // Récupérez l'ID de l'URL
  const navigate = useNavigate(); // Pour la redirection
  const pageData = data.find((item) => item.id === id);

  useEffect(() => {
    if (!pageData) {
      console.error("Page data not found for ID:", id);
      navigate("/logement/error");
    }
  }, [id, pageData, navigate]);

  if (!pageData) {
    return null;
  }

  const {
    title: lodgingTitle,
    location: lodgingCity,
    description: lodgingDescription,
    equipments: lodgingEquipment,
  } = pageData;
  const { name: lodgingHost, picture: lodgingHostPicture } = pageData.host;

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
      <div className="container_page">
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
        <div className="collapse_elements_lodging">
          <Collapse
            title="Description"
            content={lodgingDescription}
            className="collapse_lodging"
          />
          <Collapse
            title="Équipements"
            content={lodgingEquipment}
            className="collapse_lodging"
          />
        </div>
      </div>
    </div>
  );
};

export default Lodging;
