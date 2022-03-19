import React from "react";
import Logo from "./Logo";
import Card from "./Card";
import Rodape from "./Rodape";


function Deck(props){
    const {concluidas, setConcluidas, resultados, setResultados, reiniciarRecall} = props;
    
    const perguntas = [
        {
            pergunta: 'O que é JSX?',
            resposta: 'Uma extensão de linguagem do JavaScript'
        }, 
        {
            pergunta: 'O React é __',
            resposta: 'uma biblioteca JavaScript para construção de interfaces'
        },
        {
            pergunta: 'Componentes devem iniciar com __',
            resposta: 'letra maiúscula'
        },
        {
            pergunta: 'Podemos colocar __ dentro do JSX',
            resposta: 'expressões'
        },
        {
            pergunta: 'O ReactDOM nos ajuda __',
            resposta: 'interagindo com a DOM para colocar componentes React na mesma'
        },
        {
            pergunta: 'Usamos o npm para __',
            resposta: 'gerenciar os pacotes necessários e suas dependências'
        },
        {
            pergunta: 'Usamos props para __',
            resposta: 'passar diferentes informações para componentes'
        },
        {
            pergunta: 'Usamos estado (state) para __',
            resposta: 'dizer para o React quais informações quando atualizadas devem'
        }
    ]

    perguntas.sort(comparador);
    function comparador(){
        return Math.random() -0.5;
    }

    const qtdPerguntas = perguntas.length;
    
    return(
        <section className="deck">
            <Logo />
            <div className="flashcards">
                {perguntas.map(({pergunta, resposta}, index) => <Card pergunta={pergunta} numero={index+1} resposta={resposta} key={index} concluidas={concluidas} atualizarConcluidas={setConcluidas} resultados={resultados} atualizarResultados={setResultados} />)}
            </div>
            <Rodape quantidade={qtdPerguntas} concluidas={concluidas} resultados={resultados} reiniciarRecall={reiniciarRecall} />
        </section>
    )
}

export default Deck;