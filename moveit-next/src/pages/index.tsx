import { Profile } from "../components/Profile";
//import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompleteChallanges } from "../components/CompleteChallanges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}> 

<Head>
<title>
Início | Moveit
</title>

</Head>

    <ExperienceBar />
<section>
<div>
  <Profile />
  <CompleteChallanges />
  <Countdown />
</div>
<div></div>
</section>
        </div>
  )
}

