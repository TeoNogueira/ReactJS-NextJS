import { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Countdown.module.css'

//pra não demorar 1 segundo mesmo clicado anteriormente, temos uma variável global a NODE.JS.Timeout;
let countdownTimeout: NodeJS.Timeout; 

export function Countdown() {

const { startNewChallenge } = useContext(ChallengesContext);

const [time, setTime] = useState(0.1 * 60);
const [isActive, setIsActive] = useState(false);
const [hasFinished, setHasFinished] = useState(false);

const minutes = Math.floor(time / 60);
const seconds = time % 60;

 const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
 const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

 function startCountdown() {
setIsActive(true);

 }
 
//userEffect hook do react recebe dois params: o primeiro o que eu quero executar, segundo quando eu quero executar.

function resetCountdown() {
clearTimeout(countdownTimeout);
setIsActive(false);
setTime(0.1 * 60);
} 


useEffect(() => {
if(isActive && time > 0) {
  countdownTimeout = setTimeout(() => {
setTime(time - 1);
 
}, 1000) 
 
} else if(isActive && time == 0) {

  setHasFinished(true);
  setIsActive(false);
  startNewChallenge();
}

}, [isActive, time])

    return (
<div>

   <div className={styles.countdownContainer}>
     <div>
      <span>{minuteLeft}</span>
       <span>{minuteRight}</span>
     </div>
     <span>:</span>
     <div>
      <span>{secondLeft}</span>
       <span>{secondRight}</span>
     </div> 
     </div>


    { hasFinished ? (
 
 (<button
 disabled
 className={styles.countdownButton}
 >   
     Ciclo Encerrado!

</button>)

    ) : ( <> { 
     
      isActive ? (
     <button type="button"
       className={styles.countdownButton}
       onClick={resetCountdown}
       >
         Abandonar Ciclo!
     
     </button>
      ) : 
      
           (<button type="button"
           className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
           onClick={startCountdown}
           >   
               Iniciar Ciclo
 
     </button>)  }
     </>
 )  }
    
     


     </div>
    )
}
//nos dois buttons entra o conceito de if ternário {isActive ? (button..) : (button...) } 

//fragments >>>: <> </> Resolve limitações do react (uma forma de criar um codigo javascript dentro de um if ternário puxado num else)