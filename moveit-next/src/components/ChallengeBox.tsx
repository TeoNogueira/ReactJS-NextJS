import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'


export function ChallengeBox() {
    const { activeChallenge,
        resetChallenge,
          completeChallenge } = useContext(ChallengesContext);
const { resetCountdown } = useContext(CountdownContext)
          function handleChallengeSucceeded() {

              completeChallenge();
              resetCountdown();

          }
    
          function handleChallengeFailed() {

            resetChallenge();
            resetCountdown();
          }


return (

    <div className={styles.challengeBoxContainer}>
   { activeChallenge ? (
       <div className={styles.challengeActive}>
           <header>Ganhe {activeChallenge.amount} xp</header>

           <main>
               <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
               <strong>Novo Desafio</strong>
               <p>{activeChallenge.description}</p>
           </main>

           <footer>
               <button
                type="button"
                className={styles.challengeFailedButton}
               onClick={handleChallengeFailed}
               >
                   Falhei
               </button>

               <button
                type="button"
                className={styles.challengeSuccessButton}
                onClick={handleChallengeSucceeded}
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