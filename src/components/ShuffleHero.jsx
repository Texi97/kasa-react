const ShuffleHero = () => {
  return (
    <div className="HeroSection mt-14">
      <section className="w-full items-center flex justify-center px-8 gap-8 max-w-6xl mx-auto">
        <div className="hero-text-container">
          <span className="block mb-4 text-xs md:text-sm text-bleu-electric font-medium font-outfit">
            Le plombier qu'il vous faut !
          </span>
          <h3 className="text-4xl md:text-6xl font-bold font-outfit">
            Votre expert plomberie chauffagiste
          </h3>
          <p className="text-base md:text-lg text-gris my-4 md:my-6 font-outfit">
            Spécialisé en rénovation de salle de bains, réparation <br />
            des fuites et canalisations, entretien et remplacement <br />
            de chaudière à condensation ou à basse température.
          </p>
          <button className="bg-bleu-electric text-white font-medium font-outfit py-2 px-4 rounded-full transition-all hover:bg-orange active:scale-95">
            Contactez-nous
          </button>
        </div>
        <img
          className="HoverButton max-w-430"
          src="/plumber-container.png"
          alt="Plombier"
        />
        {/* <img
          className="absolute right-152 bottom-0 max-w-430"
          src="/Plumber.webp"
          alt="Plombier"
        /> */}
      </section>
    </div>
  );
};

export default ShuffleHero;
