import React from "react";

const About = () => {
  return (
    <div>
      <div className="AboutSection">
        <div className="about_img">
          <img src="/plumber_about.jpg" alt="plombier" />
        </div>
        <div className="about_text">
          <h3>NOTRE EXPÉRIENCE</h3>
          <h2 className="text-4xl md:text-6xl font-bold font-outfit text-white">
            La satisfaction client avant tout
          </h2>
          <p className="text-base font-outfit text-white ">
            Avec plus de 25 ans d'expérience, Patrick Pugeaut sait répondre à
            vos besoins ...
          </p>
          <div className="about_numbers">
            <div className="about_details">
              <p className="number">
                25<span className="span_orange">+</span>
              </p>
              <p className="number_details">Années d'expérience</p>
            </div>
            <div className="about_details">
              <p className="number">
                500<span className="span_blue">+</span>
              </p>
              <p className="number_details">Clients satisfaits</p>
            </div>
            <div className="about_details">
              <p className="number">
                20<span className="span_orange">+</span>
              </p>
              <p className="number_details">Experts qualifiés</p>
            </div>
          </div>
          <button className="bg-bleu-electric text-white mt-6 w-1/3 flex justify-center font-medium font-outfit py-2 px-4 rounded-full transition-all hover:bg-orange active:scale-95">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
