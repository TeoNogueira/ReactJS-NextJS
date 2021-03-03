//PASSAREMOS A SEMANA CRIANDO: ESTADOS, PROPRIEDADES E COMPONENTES
import { useState } from 'react'; //hook que define estados

interface ButtonProps {

    color: string;
    children: string;

}



export function Button(props: ButtonProps) {

const [counter, setCounter] = useState(1)//useState() me retorna um array com duas posições: 1: variavel o valor dela, 2: uma função para atualizar o valor de counter

function increment() {

setCounter(counter + 1);

}


return (

<button type="button" style={{ backgroundColor: props.color }}

onClick={increment}


>

    {props.children} <strong>{counter}</strong>

</button>



)

}