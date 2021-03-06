import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from './ChallengeContext'


interface CountdownContextData {

    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;

}

interface CountDownProviderProps{

children: ReactNode;

}


export const CountdownContext = createContext({} as CountdownContextData)


let countdownTimeout: NodeJS.Timeout; 

export function CountdownProvider({children}: CountDownProviderProps) {


    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    //
    function startCountdown() {
        setIsActive(true);
        
         }
         
        //userEffect hook do react recebe dois params: o primeiro o que eu quero executar, segundo quando eu quero executar.
        
        function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);
        } 
        
        
        useEffect(() => {
        if(isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
        setTime(time - 1);
         
        }, 1000) 
         
        }
             /*qd o countdown chega em zero disparamos um evento la no 
             ExperienceBar*/ 
        else if(isActive && time == 0) {
        
          setHasFinished(true);
          setIsActive(false);
          startNewChallenge();
        }
        
        }, [isActive, time])



return (

   <CountdownContext.Provider value={{

   minutes,
   seconds,
   hasFinished,
   isActive,
   startCountdown,
   resetCountdown,
   
   }}>

       {children}

   </CountdownContext.Provider>
    

)

}