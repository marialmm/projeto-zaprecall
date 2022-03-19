import Logo from "./Logo";
import React from "react";

function Inicio({visibilidade, mudarVisibilidade, meta, setMeta}) {
    function handleInputChange(event){
        setMeta(parseInt(event.target.value));
        
    }


    return (
        <div className="inicio">
            <Logo />
            <input className="meta" type="text" value={meta >= 0 ? meta : ''} placeholder="Meta de zaps" onChange={handleInputChange} />
            <button onClick={() => mudarVisibilidade(meta) }>Iniciar Recall!</button>
        </div>)
}

export default Inicio;