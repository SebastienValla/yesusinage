import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bigCard from "../public/images/bigCard.jpg";
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

// const horizontalLine = {
//   visible: { x: 0,opacity: 1, transition: { duration: 1 } },
//   hidden: { opacity : 0, x: 2000 },
// };

const textEntry = {
  visible: { x: -0, transition: { duration: 1 } },
  hidden: { x: -1000 },
};
export default function Big() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="big">
      <h2>Usinage de Grandes Dimensions</h2>
      <div className="grid">
        <div className="card">
          <p>
            <strong>L'usinage de grandes dimensions</strong> présente plusieurs
            défis par rapport à la fabrication de composants plus petits et plus
            légers, c'est donc un métier a part entière et cela ne s'improvise
            pas. Des pièces de lourdes ou de grandes tailles necessitent un{" "}
            <strong>équipement spécialisé</strong>, pour la manutention et
            l'usinage de lourde et grande dimension. Comme ces pièces ont une
            plus grande surface, des{" "}
            <strong>contrôles de qualité supplémentaires</strong> peuvent être
            nécessaires pour garantir que les pièces sont fabriquées avec une
            répétabilité fiable. Effectuer des passes de semi-finition et
            réserver le temps de mesurer entre elles avant d'effectuer une ou
            plusieurs passes de finition peut être la clé pour atteindre des
            tolérances strictes. Vous l'aurez compris, l'usinage de grande
            dimension est un métier d'expert a l'équipement spécialisé qui
            necessite un partenaire expérimenté.
          </p>
        </div>
        <div className="imageCard">
          <Image responsive src={bigCard} alt="image Yes usinage" />
        </div>
      </div>
      <h2>Les Capacités Machines</h2>
      <motion.div className="machines" style={{ maxWidth: "100%" }}
       ref={ref}
       animate={controls}
       initial="hidden"
       variants={squareVariants}>
        <ul>
          <li>
            <strong>Tours horizontaux</strong> diamètre sur banc jusqu'a 2200mm, diamètre sur
            chariot jusqu'a 1835mm, longeur max 12000mm, 50t max
          </li>
          <br />
          <li> <strong>Tours verticaux</strong> diamètre 6600mm max, hauteur 3100mm max, 60t max</li>
          <br/>
          <li>
          <strong>Aléseuses</strong> d’une capacité d’usinage de 13 mètres à l’horizontale et
            de 5 mètres à la verticale
          </li>
          <br />
          <li>
          <strong>Rectifieuses circulaires</strong> jusqu’à un diamètre de 1040 mm, une
            longueur de 8000 mm et un poids de 10000 kg entre pointe ou 22000 kg
            avec lunettes.
          </li>
          <br />
          <li>

           <strong>Soudure</strong> : TIG, MIG avec électrode enrobée et arc submergé, et four à
            air pour distension et préchauffage de 8000 x 4000 x 1000 mm
            (extensibles à 2000 mm)
          </li>
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
