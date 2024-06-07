import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const cards = [
  {
    title: "The biggest zero emissions network",
    description:
      "Together with our large network of local partners we enable you to truly reduce emissions and make impact on last-mile delivery",
    points: [
      "Large fleet of cargo bikes and EV’s",
      "Ship from your store or warehouse",
      "Largest zero emission delivery network in Benelux",
    ],
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Optimise your last mile delivery cost",
    description:
      "When we talk about zero emission delivery, you expect an above average price. We offer competitive pricing for your business.",
    points: [
      "Zero emission delivery without paying a premium",
      "Competitive pricing from 1 parcel per day",
    ],
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Boost your customer experience",
    description:
      "We offer sustainable delivery options for your customers, creating a clear, flexible and unique journey from door to door.",
    points: [
      "Accurate delivery promise",
      "Customised track and trace page",
      "Sustainable delivery option in your checkout",
    ],
    image: "https://via.placeholder.com/300",
  },
  {
    title: "The highest delivery quality",
    description:
      "Our delivery model is simple and straightforward. We reduce complexity across your supply chain with smart technology.",
    points: [
      "We reach >99% on-time delivery",
      "We handle all your customer service",
      "No worries about customer complaints",
    ],
    image: "https://via.placeholder.com/300",
  },
];

export const DisappearingFeatures = () => {
  return (
    <div className="relative h-fit bg-indigo-50">
      <Features />
    </div>
  );
};

const Features = () => {
  return (
    <div className="relative flex mx-auto h-full w-full max-w-7xl gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit justify-center w-full flex-col py-12 md:sticky md:top-0 md:h-screen">
      <div className="OurServices">
        <div className="OurServices_text">
          <h3>NOS SERVICES</h3>
          <h2>Une large gamme de services</h2>
          <p>
            Nous avons un répertoire d'activité le plus étendu pour répondre à
            tous les besoins de la vie quotidienne.
          </p>
        </div>
        <div className="OurServices_cards_container">
          <div className="OurServices_card">
            <div className="OurServices_card__content">
              <div className="OurServices_card_content__picto"></div>
              <div className="OurServices_card_content__text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const { scrollYProgress } = useScroll(); // Use global scroll

  return (
    <div className="relative w-full">
      <Gradient />
      <div className="relative z-0 flex flex-col gap-6 md:gap-12 pt-24">
        {" "}
        {/* Add padding-top to create space */}
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={cards.length}
            card={card}
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, card }) => {
  const stepSize = 1 / (numItems + 1);
  const start = stepSize * position;
  const end = stepSize * (position + 1);

  const opacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);
  const y = useTransform(scrollYProgress, [start, end], ["0%", "50%"]);

  return (
    <motion.div
      style={{
        opacity,
        // scale,
        y,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-white shadow-lg p-4"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4">
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="mb-4">{card.description}</p>
          <ul className="list-disc pl-5">
            {card.points.map((point, idx) => (
              <li key={idx} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 p-4">
          <img src={card.image} alt={card.title} className="rounded-lg" />
        </div>
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;
