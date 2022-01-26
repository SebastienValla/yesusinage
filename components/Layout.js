import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../styles/layout.module.css";
import YESUSINAGE from "../public/images/YES USINAGE.svg";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <AppBar className={styles.appBar}>
          <Toolbar>
        <div className={styles.logo}>
          <Image src={YESUSINAGE} alt="yes usinage Logo"/>
        </div>
        <ul className={styles.links}>
          <div >
            <li color="primary">
    
              <a href="#accueil">Accueil</a>
            </li>
            <li>
      
              <a href="#precision">Precision</a>
            </li>
            <li>
              <Link href="#big">Grande dimension</Link>
            </li>
            
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            {/* <li>
              <Link href="/">Blog</Link>
            </li> */}
          </div>
        </ul>
        </Toolbar>
      </AppBar>

      {children}
      <a href="https://codyseum.com" target="_blank" rel="noreferrer" > 
      <p className={styles.footer}>
   
Made with love by {""} Codyseum all rights reserved 
</p>
</a>
        </div> 
    
  );
}
