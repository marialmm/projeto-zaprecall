import Logo from "./Logo";
import React from "react";

function Inicio({ visibilidade, mudarVisibilidade }) {
    return (
        <div className="inicio">
            <Logo />
            <button onClick={mudarVisibilidade}>Iniciar Recall!</button>
        </div>)
}

export default Inicio;