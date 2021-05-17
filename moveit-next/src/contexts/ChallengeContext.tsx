import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json'

interface Challenge {
/* interface pre editada puxando dados do challanges.json */
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
       activeChallenge: Challenge;
       resetChallenge: () => void;
       completeChallenge: () => void;
}

/* 2 - criar a entrada de tipagens para children*/

interface ChallengesProviderProps {
    /* Qd o children também é um componente do react podemos usar o 
    ReactNode na importação do React */ /* ReactNode aceita quaisquer
    elementos filhos no children podendo ser um: component, text, html, etc.
    *//*podemos dizer que o children é a mão e o ReactNode é quando a mão pega
    um código numa TIPAGEM e leva para outro local*/
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

useEffect(() => {

Notification.requestPermission();

}, [])



function levelUp() {
    setlevel(level + 1)
   }

function startNewChallenge() {

const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
const challenge = challenges[randomChallengeIndex];

setActiveChallenge(challenge)

new Audio('/notification.mp3').play();

if(Notification.permission === 'granted') {

    new Notification('Novo Desafio!', {

        body: `Valendo ${challenge.amount}xp`
    })
}
}

function resetChallenge() {

setActiveChallenge(null);

}


function completeChallenge() {
if(!activeChallenge) {

return;

} 

//

const { amount } = activeChallenge

let finalExperience = currentExperience + amount

if(finalExperience >= experienceToNextLevel) {

    finalExperience =  finalExperience - experienceToNextLevel;
    levelUp();
}

setCurrentExperience(finalExperience);
setActiveChallenge(null);
setChallengesCompleted(challengesCompleted + 1);
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
              completeChallenge,
               }}>

        {children}

         </ChallengesContext.Provider> 

);

}


