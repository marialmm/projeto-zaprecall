import React from "react";

import Inicio from "./Inicio";
import Deck from "./Deck";
import {decks} from "./../decks";



function App() {
    const [visibilidade, setVisibilidade] = React.useState(true);
    const [concluidas, setConcluidas] = React.useState(0);
    const [resultados, setResultados] = React.useState([]);
    const [meta, setMeta] = React.useState('');
    const [deck, setDeck] = React.useState('JSX');

    function reiniciarRecall(){
        setVisibilidade(true);
        setConcluidas(0);
        setResultados([]);
        setMeta('');
        setDeck('JSX');
    }
    const perguntas = decks[deck]

    function mudarVisibilidade(){
        if((meta > 0 && meta <= perguntas.length)|| meta === 0){
            setVisibilidade(false);
            perguntas.sort(comparador);
        }
    }
    
    function comparador(){
        return Math.random() -0.5;
    }

   return (
       <>
        {(visibilidade === true) ?  
        <Inicio visibilidade={visibilidade} mudarVisibilidade={mudarVisibilidade} meta={meta} setMeta={setMeta} deck={deck} setDeck={setDeck} /> : 
        <Deck perguntas={perguntas} meta={meta} concluidas={concluidas} setConcluidas={setConcluidas} resultados={resultados} setResultados={setResultados} reiniciarRecall={reiniciarRecall} />}
       </>
    )
}


export default App;