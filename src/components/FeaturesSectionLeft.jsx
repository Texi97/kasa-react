import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Salle de bain.",
    description:
      "Nous avons l'habitude d'intervenir dans le cadre de votre rénovation ou installation de salle de bains, nous vendons et posons vos appareils sanitaires, robinets et raccords.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Fuites et canalisations.",
    description:
      "Nous pouvons dépanner pour la recherche d'une fuite ou bien le bouchage de canalisations ainsi que le remplacement de chaudière.",
    icon: LockClosedIcon,
  },
];

export default function FeaturesSectionLeft({ id }) {
  return (
    <div className="overflow-hidden bg-white pt-14 mb-16">
      <div className="OurServices_text max-w-2xl text-center m-auto mb-32 mt-14">
        <h3 className="text-bleu-electric font-outfit text-[20px] font-bold">
          NOS SERVICES
        </h3>
        <h2 className="text-bleu-dark font-outfit text-[48px] font-bold">
          Une large gamme de services
        </h2>
        {/* <p className="text-gris font-outfit text-[18px] font-normal">
          Nous avons un répertoire d'activité le plus étendu pour répondre à
          tous les besoins de la vie quotidienne
        </p> */}
      </div>
      <div
        id="Plomberie"
        className="features-container mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-bleu-electric font-outfit">
                Plomberie
              </h2>
              <p className="mt-2 text-3xl font-bold font-outfit tracking-tight text-bleu-dark 0 sm:text-4xl">
                Plomberie, maintenance de vos canalisations
              </p>
              <p className="mt-6 text-lg leading-8 text-gris font-outfit">
                Les plombiers chauffagistes de Patrick Pugeaut Dépannage se
                déplacent pour mettre en oeuvre leurs nombreuses années
                d'expérience près de Saint-Rému, dans le département de la
                Saône-et-Loire.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base font-outfit leading-7 text-gris lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold font-outfit text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-bleu-electric"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
                <button className="bg-bleu-electric text-white font-medium font-outfit py-2 px-4 rounded-full transition-all hover:bg-orange active:scale-95">
                  Contactez-nous
                </button>
              </dl>
            </div>
          </div>
          <img
            src="/Plumber-features.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
