import { createContext, useState, ReactNode } from 'react';

interface ChallengesContextData {
    level: number;
    currentExperience: number;
     challengesCompleted: number;
      levelUp: () => void;
       startNewChallenge: () => void; /*função sem retorno */

}


interface ChallengesProviderProps {
    /* Qd o children também é um componente do react podemos usar o 
    ReactNode na importação do React */ /* ReactNode aceita quaisquer
    elementos filhos no children podendo ser um: component, text, html, etc.
    *//*podemos dizer que o children é a mão e o ReactNode é quando a mão pega
    um código e leva para outro local*/
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}: ChallengesProviderProps) {
/*estado que armazena a informação do level*/
const [level, setlevel] = useState(1);
const [currentExperience, setCurrentExperience] = useState(0);
const [challengesCompleted, setChallengesCompleted]  = useState(0);



function levelUp() {
    setlevel(level + 1)
   }

function startNewChallenge() {

    console.log('New Challenge')
}

return (

    <ChallengesContext.Provider
     value={{
          level,
           currentExperience,
            challengesCompleted,
             levelUp,
              startNewChallenge, /*Usar funçao startNewChallenge lá no countDown.tsx */
               }}>

        {children}

         </ChallengesContext.Provider> 

);

}