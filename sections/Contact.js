import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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
export default function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
  const defaultProps = {
    center: {
      lat: 43.1231552,
      lng: 1.5025065,
    },
    zoom: 8,
  };

  return (
    <div id="contact">
      <h2>Contactez nous</h2>
      <div className="grid">
        <div className="maps" style={{ height: "50vh", width: "50%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyA30r-6G2-yxVWohw3sWUtkLBydD3BvkFQ",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin lat={42.876213} lng={1.217206} text="Yes Usinage" />
          </GoogleMapReact>
        </div>
        <motion.div className="card" style={{flexDirection: "column"}}
           ref={ref}
           animate={controls}
           initial="hidden"
           variants={squareVariants}>
        <p><HomeOutlinedIcon/> Yes Industry <br/> Route de Saint Girons <br/> 09140 OUST</p>
        <p> <LocalPhoneOutlinedIcon/>  06 30 65 83 86</p><br/>
        <p><a href="mailto:contact@yesindustry.fr"><EmailOutlinedIcon/>  contact@yesindustry.fr</a></p><br/>
        </motion.div>
      </div>
    </div>
  );
}
