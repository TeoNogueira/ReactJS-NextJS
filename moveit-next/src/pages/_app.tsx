
// o app.tsx faz exibir em toda a aplicação
import '../styles/global.css'
import { ChallengesProvider } from '../contexts/ChallengeContext'
import React, { useState } from 'react'


function MyApp({ Component, pageProps }) {
 



  return(
    /*Contexto puxado do ChallengeContext.tsx incluindo parametro do array acima + função Level*/
 <ChallengesProvider>
  <Component {...pageProps} />
  </ChallengesProvider>
    )
}

export default MyApp
