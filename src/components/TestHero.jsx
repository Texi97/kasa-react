const TestHero = () => {
  return (
    <div className="HeroSection mt-14">
      <section className="w-full items-center flex flex-col justify-center px-8 gap-8 max-w-6xl mx-auto">
        <div className="hero-text-container text-center">
          <h3 className="text-[70px]  font-bold font-outfit text-bleu-dark">
            Votre expert plomberie chauffagiste
          </h3>
          <p className="text-base md:text-lg text-gris my-4 md:my-6 font-outfit">
            Spécialisé en rénovation de salle de bains, réparation des fuites et
            canalisations, entretien et remplacement <br />
            de chaudière à condensation ou à basse température.
          </p>
          <button className="bg-bleu-electric text-white font-medium font-outfit py-2 px-4 rounded-full transition-all hover:bg-orange active:scale-95">
            Contactez-nous
          </button>
        </div>

        <img
          className="hero-image max-w-[1280px] max-h-[480px] rounded-t-xl"
          src="/fuite-eau.jpg"
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

export default TestHero;
