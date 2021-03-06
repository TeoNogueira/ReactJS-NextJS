import { useState, useEffect, useContext } from 'react'

import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css'

//pra não demorar 1 segundo mesmo clicado anteriormente, temos uma variável global a NODE.JS.Timeout;


export function Countdown() {

const { minutes,
   seconds,
    hasFinished,
     isActive,
      startCountdown,
       resetCountdown
       } = useContext(CountdownContext)

 const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
 const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

 

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