import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import precisionCard from "../public/images/precisionCard.jpg";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const textEntryR = {
  visible: { x: -0, transition: { duration: 1 } },
  hidden: { x: -1000 },
};

const textEntryL = {
  visible: { x: -0, transition: { duration: 1 } },
  hidden: { x: -1000 },
};
export default function Precision() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="precision">
      <h2>Usinage de précision</h2>
      <div className="grid">
        <div className="imageCard">
          <Image responsive src={precisionCard} alt="usinage" />
        </div>

        <div className="card">
          <p>
            <strong>L'usinage de précision</strong> consiste à usiner la pièce
            d'origine en enlevant de la matière. Les pièces finies sont obtenues
            avec une très grande précision. Nous disposons de ressources dédiées
            à l'usinage de pièces de précision, notamment de petites pièces au
            micron près. Ces produits peuvent être réalisés en{" "}
            <strong>moyennes séries</strong>, ainsi qu'en petits lots, voire en
            mode <strong>prototype</strong> dans le cadre d'un co-développement.
            Afin de répondre aux divers besoins des clients en usinage, Yes
            usinage propose un ensemble complet de solutions techniques et de
            services complets sur mesure.
          </p>
        </div>
      </div>
      <h2>Les Capacités Machines</h2>
      <motion.div className="machines" style={{ maxWidth: "100%" }}
      
   
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}>
    
        <ul>
          <li>Centre d'usinage MX330 PC10, 5 axes.</li><br/>
          <li> Centre d'usinage VARIAXIS J – 600/5X.</li><br/>
          <li> Centre d'usinage VTC 800/30SR, 5 axes pendulaires.</li><br/>
          <li>Centre d'usinage MAZAK VTC 300 pendulaire.</li><br/>
          <li>Centre d'usinage 530, 4 axes.</li><br/>
          <li>4 centres d'usinage de 1000 x 500.</li><br/>
          <li>Logiciels de CAO-FAO (SolidWorks et CAMWorks).</li><br/>
         <li> Système de mesure tridimensionnel, TESA.</li>
        </ul>
      </motion.div>
      <motion.hr
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      />
    </div>
  );
}
