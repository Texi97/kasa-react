import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className="bg-bleu-dark py-[80px]">
      <div className="p-4 overflow-x-hidden relative">
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
      </div>
    </div>
  );
};

const TestimonialList = ({ list, reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-44 object-cover" />
            <div className="bg-white text-bleu-dark p-4">
              <span className="block font-semibold text-lg mb-1 font-outfit">
                {t.name}
              </span>
              <span className="block text-sm text-gris font-outfit">
                {t.info}
              </span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-slate-700 font-outfit">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Valentine",
      title: "Founder of XYZ",
      info: "Entreprise à l'écoute et avec des qualités humaines comme on en fait plus. Patrick Pugeaut et sa secrétaire ont su se rendre arrangeant pour que tout soit fait dans un délais court et travail très professionnel !",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Saban,",
      title: "Founder of XYZ",
      info: "Rien à dire ils sont au top ! Ils sont intervenu dans les heure qui suivent et le problème a été réglé vraiment rapidement pour un prix vraiment raisonnable",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Marie-Claude",
      title: "Founder of XYZ",
      info: "Cliente depuis longtemps et toujours aussi contente de cette entreprise. Très à l' écoute de ses clients. Très réactif. Personnel très agréable et sympathique de l' accueil téléphonique a l' intervention sur site.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Adèle",
      title: "Founder of XYZ",
      info: "Super entreprise, réactive et professionnelle !",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Jean-Paul",
      title: "Founder of XYZ",
      info: "Extrêmement professionnel avec du personnel sympathique. Intervention de très haute qualité sur une très ancienne installation. très satisfait",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Cédric",
      title: "Founder of XYZ",
      info: "Professionnel de qualité. Intervention rapide et efficace.",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Théo",
      title: "Founder of XYZ",
      info: "Personnel compétent, je conseille vivement 👍",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Antoine",
      title: "Founder of XYZ",
      info: "Entreprise très réactive. Travail professionnel et propre. Je recommande.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Pascal",
      title: "Founder of XYZ",
      info: "J'ai fait appel à l'entreprise pour installation chaudière. Personnel qualifié et à l'écoute. Accueil téléhonique chaleureux et réponse rapide.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff R.",
      title: "Founder of XYZ",
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Cyril",
      title: "Founder of XYZ",
      info: "Très professionnel. Je recommande vivement.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Anne",
      title: "Founder of XYZ",
      info: "Super contente Ets réactif et très professionnel De plus accueil très sympathique Je conseille vivement",
    },
  ],
  //   bottom: [
  //     {
  //       id: 1,
  //       img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //       name: "Martin",
  //       title: "Founder of XYZ",
  //       info: "Professionnel hors pair, qualités relationnelles exceptionnelles",
  //     },
  //     {
  //       id: 2,
  //       img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
  //       name: "Ian D.",
  //       title: "Founder of XYZ",
  //       info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere.",
  //     },
  //     {
  //       id: 3,
  //       img: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
  //       name: "Ben S.",
  //       title: "Founder of XYZ",
  //       info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  //     },
  //     {
  //       id: 4,
  //       img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //       name: "Matthew I.",
  //       title: "Founder of XYZ",
  //       info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse corporis!",
  //     },
  //     {
  //       id: 5,
  //       img: "https://images.unsplash.com/photo-1597346908500-28cda8acfe4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //       name: "Garrett P.",
  //       title: "Founder of XYZ",
  //       info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia.",
  //     },
  //     {
  //       id: 6,
  //       img: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
  //       name: "Xavier C.",
  //       title: "Founder of XYZ",
  //       info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur.",
  //     },
  //   ],
};

export default ScrollingTestimonials;
