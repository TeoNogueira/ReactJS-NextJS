import { Profile } from "../components/Profile";
//import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from '../components/ExperienceBar';
import { CompleteChallenges } from "../components/CompleteChallenges";
import { Countdown } from "../components/Countdown";
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}> 

<Head>
<title>
Início | Moveit
</title>

</Head>

    <ExperienceBar />
    <CountdownProvider>
<section>
<div>
  <Profile />
  <CompleteChallenges />
  <Countdown />

</div>
<div>
<ChallengeBox />

</div>
</section>
</CountdownProvider>
        </div>
  )
}

