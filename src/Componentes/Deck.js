import React from "react";
import Logo from "./Logo";
import Card from "./Card";
import Rodape from "./Rodape";
import {decks} from "./../decks";


function Deck(props){
    const {deck, meta, concluidas, setConcluidas, resultados, setResultados, reiniciarRecall} = props;
    
    const perguntas = decks[deck];

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
            <Rodape quantidade={qtdPerguntas} meta={meta} concluidas={concluidas} resultados={resultados} reiniciarRecall={reiniciarRecall} />
        </section>
    )
}

export default Deck;