function PerguntaEscondida(props){
    const {numero, resultado, virarCarta} = props;

    const classe = `pergunta escondida ${resultado}`

    return(
        <article className={classe}> 
            <p>Pergunta {numero}</p>
            <ion-icon name="play-outline" onClick={virarCarta}></ion-icon>
        </article>
    )
}

export default PerguntaEscondida;