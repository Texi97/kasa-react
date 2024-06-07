import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col bg-blue-50 font-interFont py-20 px-8 mx-auto my-10">
      <div className="flex flex-row gap-20 items-top justify-left ml-36">
        <div className="image_about">
          <img src="./robinet.jpg" alt="robinet" />
        </div>
        <div>
          <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium font-interFont">
            A propos de nous
          </span>
          <h2 className="text-4xl text-left font-bold text-black w-96">
            Une gamme de services reconnus
          </h2>
          <p className="w-96 text-base md:text-lg text-slate-700 my-4 md:my-6 font-interFont pt-4">
            Avec plus de 25 années d'expériences, <br />
            nous intervenons chez les particuliers
            <br /> mais aussi chez beaucoup de professionnels, notamment en
            matière d'entretien avec les agences immobilières
            <br /> et les syndics de copropriété. <br />{" "}
          </p>
          <button className="bg-bleu-electric text-white font-medium font-outfit py-2 px-4 rounded-full transition-all hover:bg-orange active:scale-95">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
