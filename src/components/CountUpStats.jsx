import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
  return (
    <div className="mx-auto px-4 pt-20 md:pt-24 bg-bleu-dark">
      <h3 className="text-white font-outfit text-[20px] font-bold text-center">
        CHOISIR NOTRE ENTREPRISE,{" "}
        <span className="text-orange"> C'EST LEUR FAIRE CONFIANCE</span>
      </h3>
    </div>
  );
};
