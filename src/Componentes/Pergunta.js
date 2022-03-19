import setinha from "./../midias/setinha.png"

function Pergunta(props){
    const {pergunta, mostrarResposta} = props;

    return(
        <article className="pergunta frente">
            <p>{pergunta}</p>
            <img src={setinha} alt="setinha" onClick={mostrarResposta}/>
        </article>
    )
}

export default Pergunta;