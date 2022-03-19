import React from "react";

import Inicio from "./Inicio";
import Deck from "./Deck";


function App() {
    const [visibilidade, setVisibilidade] = React.useState(true);
    const [concluidas, setConcluidas] = React.useState(0);
    const [resultados, setResultados] = React.useState([]);
    const [meta, setMeta] = React.useState('');

    function reiniciarRecall(){
        setVisibilidade(true);
        setConcluidas(0);
        setResultados([]);
        setMeta('');
    }

    function mudarVisibilidade(){
        if(meta > 0 || meta === 0){
            setVisibilidade(false);
        }
    }

   return (
       <>
        {(visibilidade === true) ?  <Inicio visibilidade={visibilidade} mudarVisibilidade={mudarVisibilidade} meta={meta} setMeta={setMeta} /> : <Deck meta={meta} concluidas={concluidas} setConcluidas={setConcluidas} resultados={resultados} setResultados={setResultados} reiniciarRecall={reiniciarRecall} />}
       </>
    )
}


export default App;