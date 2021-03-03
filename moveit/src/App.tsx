import { ExperienceBar } from './components/ExperienceBar';
import './styles/global.css'


function App() {
  return (
      <div className="container"> 
<ExperienceBar />
    </div>
  );
}

export default App;


///BEGIN: COMPONENTES SÃO UMA FUNÇÃO QUE RETORNA UM JSX (podemos dizer um html dentro de uma função) 
//--x-----x---
//componente fechando tag Técnica Oculta de Children >> passar algo
// dentro de um componente