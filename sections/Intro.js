import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import banniere from "../public/images/banniere2.jpg";
import styles from "../styles/intro.module.css";
import introCard from "../public/images/introCard.jpg";
import ReactPlayer from "react-player/lazy";

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

export default function Intro() {
  const handleClick = () => {
    window.location = "#contact";
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={styles.main} id="accueil">
      <div className={styles.banniere}>
        <Image
          layout="responsive"
          objectFit="cover"
          src={banniere}
          alt="image banniere"
        />

      </div>
      <div className={styles.onBanniere}>
        <div className={styles.textBanniere}>
          <h1 style={{ color: "#ffffff" }}>
            Yes Usinage votre partenaire de choix pour vos pièces usinées
          </h1>
        </div>

        {/* <Button
          className={styles.buttonBanniere}
          variant="contained"
          onClick={handleClick}
        >
          Demander un Devis
        </Button> */}
      </div>

      <Button
        className={styles.buttonBanniere2}
        variant="contained"
        onClick={handleClick}
        style={{
          display: "block",
          marginBottom: 20,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Demander un Devis
      </Button>
      <motion.hr
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      />

      <h2>Qui sommes nous ?</h2>
      <div className="grid">
        {/* <h2><Image src={logo} responsive/></h2> */}
        <div className="card">
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={textEntry}
          >
            <strong>Yes Usinage</strong> fournit des pieces usinées toutes
            matières, nous mettons a disposition une capacité d'usinage pour
            petites et moyennes series, allant de{" "}
            <strong>l'usinage de précision</strong> jusqu'a{" "}
            <strong>l'usinage de grande dimension</strong>. Nous fournissons des
            pieces de tournage, de fraisage, ainsi que des engrenages jusqu'au
            module 32. Yes Usinage est votre partenaire de choix pour l'usinage
            de pieces destinées à l'aéronautique, l'hydroélectricité,
            l'automobile, l'impression, la pharmacie, le nucléaire, les
            batteries, les moteurs diesel, les industries alimentaires et bien
            d'autre. Notre expérience et notre force technique garantissent une
            approche méthodique mature pour surmonter les obstacles et résoudre
            les problèmes chaque fois qu'ils surviennent.
          </motion.p>
        </div>
        <div>
          <div
            // ref={ref}
            // animate={controls}
            // initial="hidden"
            // variants={squareVariants}
             className="imageCard"
          >
                   <ReactPlayer url="https://player.vimeo.com/video/579568169" muted="true" playing="true" loop="true" style={{maxWidth:375}}/>

            {/* <Image responsive src={introCard} alt="usinage" /> */}
          </div>
        </div>
      </div>
      <motion.hr
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      />
    </div>
  );
}
