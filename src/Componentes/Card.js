import React from "react";
import Pergunta from "./Pergunta";
import PerguntaEscondida from "./PerguntaEscondida";
import Resposta from "./Resposta";

function Card(props) {
    const {numero, pergunta, resposta} = props;

    const [classe, setClasse] = React.useState('escondida');
    const [resultado, setResultado] = React.useState(''); 
    
    function escolherResultado(resultado){
        setClasse('escondida');
        setResultado(resultado);
        console.log(resultado);
    }

    if (classe === 'escondida') {
        return <PerguntaEscondida resultado={resultado} numero={numero} virarCarta={()=> setClasse('frente')} />
    } else if(classe === 'frente'){
        return <Pergunta pergunta={pergunta} mostrarResposta={()=>setClasse('trás')} />
    } else if(classe==='trás'){
        return <Resposta resposta={resposta} escolherResultado={escolherResultado} />
    }
    

}

export default Card;