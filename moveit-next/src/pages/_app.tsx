
// o app.tsx faz exibir em toda a aplicação
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
