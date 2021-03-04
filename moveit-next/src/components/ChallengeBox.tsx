import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox() {
    const contextData = useContext(ChallengesContext);
    console.log(contextData);
    
const hasActiveChallenge = true;
return (

    <div className={styles.challengeBoxContainer}>
   { hasActiveChallenge ? (
       <div className={styles.challengeActive}>
           <header>Ganhe 400 xp</header>

           <main>
               <img src="icons/body.svg" alt=""/>
               <strong>Novo Desafio</strong>
               <p>Levante e faça uma caminha de 3 minutos.</p>
           </main>

           <footer>
               <button
                type="button"
                className={styles.challengeFailedButton}
               
               >
                   Falhei
               </button>

               <button
                type="button"
                className={styles.challengeSuccessButton}
                >
                    Completei
                </button>
           </footer>

                 
       </div>
   ) : (
         <div className={styles.challengeNotActive}>
        <strong>Finalize um clico para receber desafios a serem completados</strong>
        <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Avance de Level completando desafios.
        </p>
    </div>
   ) }
    </div>
)



} 