import React from "react";

import Inicio from "./Inicio";
import Deck from "./Deck";


function App() {
    const [visibilidade, setVisibilidade] = React.useState(true);
    const [concluidas, setConcluidas] = React.useState(0);
    const [resultados, setResultados] = React.useState([]);

    function reiniciarRecall(){
        setVisibilidade(true);
        setConcluidas(0);
        setResultados([]);
    }

    function mudarVisibilidade(){
        setVisibilidade(false);
    }

   return (
       <>
        {(visibilidade === true) ?  <Inicio visibilidade={visibilidade} mudarVisibilidade={mudarVisibilidade} /> : <Deck concluidas={concluidas} setConcluidas={setConcluidas} resultados={resultados} setResultados={setResultados} reiniciarRecall={reiniciarRecall} />}
       </>
    )
}

// 

export default App;