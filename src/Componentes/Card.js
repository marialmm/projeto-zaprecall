import React from "react";
import Pergunta from "./Pergunta";
import PerguntaEscondida from "./PerguntaEscondida";
import Resposta from "./Resposta";

function Card(props) {
    const {numero, pergunta, resposta, atualizarConcluidas, concluidas, resultados, atualizarResultados} = props;

    const [classe, setClasse] = React.useState('escondida');
    const [resultado, setResultado] = React.useState('nenhum'); 
    
    function escolherResultado(resultado){
        setClasse('escondida');
        setResultado(resultado);
        const concluida = concluidas + 1;
        atualizarConcluidas(concluida);
        const resultadosAtualizados = [...resultados]
        if(resultado==='correto'){
            resultadosAtualizados.push({icone: "checkmark-circle-sharp", classe: 'correto'});
        } else if(resultado === 'quase'){
            resultadosAtualizados.push({icone: "help-circle-sharp", classe: 'quase'});
        } else if(resultado === 'incorreto'){
            resultadosAtualizados.push({icone: "close-circle-sharp", classe: 'incorreto'});
        }
        atualizarResultados(resultadosAtualizados)
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