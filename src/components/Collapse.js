import React from "react";
import { useState } from "react";

function Collapse({ title, content }) {
  // Définir deux props comme arguments de fonction
  const [isOpen, setIsOpen] = useState(false); //Hook pour stocker des informations indiquant si l'élément est actuellement enroulé ou déroulé

  const switchCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse_box">
      <div className="collapse_items">
        <div className="collapse_transition">
          <h2 className="collapse_title">{title}</h2>
          <img
            src="./arrow.png"
            alt="Flèche pour dérouler le contenu"
            className={`arrow ${isOpen ? "rotate" : ""}`}
            onClick={switchCollapse}
          />
        </div>
      </div>
      <div
        className={`collapse_content_div ${isOpen ? "expand" : "collapsed"}`}
      >
        {Array.isArray(content) ? ( // Si le contenu est ouvert et est un tableau, il est mappé et affiché sous forme de liste ("Equipement").
          <ul className="collapse_list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Sinon il est affiché sous forme d'élément unique <p> ("Description").
          <p className="collapse_content">{content}</p>
        )}
      </div>
    </div>
  );
}

export default Collapse;
