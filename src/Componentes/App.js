import Inicio from "./Inicio";
import React from "react";
import Deck from "./Deck";


function App() {
    const [visibilidade, setVisibilidade] = React.useState(true)
    function mudarVisibilidade(){
        setVisibilidade(false);
    }

    const inicio = <Inicio visibilidade={visibilidade} mudarVisibilidade={mudarVisibilidade} />;
    const deck = <Deck />

   return (
       <>
        {(visibilidade === true) ?  inicio : deck}
       </>
        
    )
}

export default App;