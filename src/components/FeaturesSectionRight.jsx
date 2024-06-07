import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Chaudières.",
    description:
      "Nous avons l'habitude d'intervenir dans la pause et l'entretien de votre chaudière à condensation, basse température ou encore votre chauffe-bain-gaz.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Radiateurs au gaz.",
    description:
      "En tant qu'expert du chauffage au gaz, nous assurons le remplacement de vos vannes de radiateur gaz et l'entretien général de vos radiateurs gaz et du réseau général.",
    icon: LockClosedIcon,
  },
  {
    name: "Chauffage au gaz.",
    description:
      "Nous pouvons nous occuper de votre plancher chauffant, du désembouage de votre réseau (enlever la boue des circuits de chauffage) et réaliser le détartrage d'appareils.",
    icon: LockClosedIcon,
  },
];

export default function FeaturesSectionLeft({ id }) {
  return (
    <div id="Chauffage" className="overflow-hidden bg-white pt-14 mb-32">
      <div className="features-container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto items-center grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            src="/Plancher-chauffant.jpg"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-bleu-electric font-outfit">
                Chauffage
              </h2>
              <p className="mt-2 text-3xl font-bold font-outfit tracking-tight text-bleu-dark 0 sm:text-4xl">
                Entretien de votre chauffage, chaudière à condensation
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
        </div>
      </div>
    </div>
  );
}
