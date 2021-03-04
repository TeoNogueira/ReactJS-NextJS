import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json'

interface Challange {
/* interface pre editada puxando dados do challange.json */
/* criando uma tipagem para activeChallange */
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

/* 4 - criar interface das consts. functions, etc.... */
interface ChallengesContextData {
    level: number;
    currentExperience: number;
     challengesCompleted: number;
     experienceToNextLevel: number;
       levelUp: () => void;
       startNewChallenge: () => void; /*função sem retorno */
       activeChallenge: Challange;
       resetChallenge: () => void;
    
}

/* 2 - criar a entrada de tipagens para children*/

interface ChallengesProviderProps {
    /* Qd o children também é um componente do react podemos usar o 
    ReactNode na importação do React */ /* ReactNode aceita quaisquer
    elementos filhos no children podendo ser um: component, text, html, etc.
    *//*podemos dizer que o children é a mão e o ReactNode é quando a mão pega
    um código e leva para outro local*/
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);
/* 1  criar children*/
export function ChallengesProvider({children}: ChallengesProviderProps) {
/*estado que armazena a informação do level*/
const [level, setlevel] = useState(1);
const [currentExperience, setCurrentExperience] = useState(20);
const [challengesCompleted, setChallengesCompleted]  = useState(0);

const [activeChallenge, setActiveChallenge] = useState(null)

const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


function levelUp() {
    setlevel(level + 1)
   }

function startNewChallenge() {

const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
const challenge = challenges[randomChallengeIndex];

setActiveChallenge(challenge)
}

function resetChallenge() {

setActiveChallenge(null);

}

return (
/* 3 trazer para o return do component as constantes e funcoes */
    <ChallengesContext.Provider
     value={{
          level,
           currentExperience,
            challengesCompleted,
             levelUp,
              startNewChallenge, /*Usar funçao startNewChallenge lá no countDown.tsx */
              experienceToNextLevel,
              activeChallenge,
              resetChallenge,
               }}>

        {children}

         </ChallengesContext.Provider> 

);

}