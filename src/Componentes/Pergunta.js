function Pergunta(props){
    const {pergunta, mostrarResposta} = props;

    return(
        <article className="pergunta frente">
            <p>{pergunta}</p>
            <img src="./assets/midias/setinha.png" alt="" onClick={mostrarResposta}/>
        </article>
    )
}

// 

export default Pergunta;