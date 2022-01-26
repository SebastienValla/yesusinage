import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Big from "../sections/Big";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Precision from "../sections/Precision";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
        <title>Yes usinage</title>
<meta name="Content-Type" content="UTF-8"/>
<meta name="Content-Language" content="fr"/>
<meta name="Description" content="Yes usinage fournit des usinages de précision et de grandes dimensions"/>
<meta name="Keywords" content="usinage,
usinage plastique,
usinage cnc,
usinage aluminium,
usinage 5 axes,
usinage mécanique,
usinage fraiseuse,
usinage toulouse,
usinage fraisage,
usinage lyon,
usinage tournage,
usinage metal,
usinage mécanique de précision,
usinage grande dimension,
usinage nantes,
usinage inox,
usinage acier
"/>
<meta name="Identifier-Url" content="https://yesusinage.com"/>
<meta name="Revisit-After" content="15 days"/>
<meta name="Category" content="engineering"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Intro />
        <Precision />
        <Big />
        <Contact />
      </div>
    </Layout>
  );
}
