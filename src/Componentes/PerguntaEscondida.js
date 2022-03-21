function PerguntaEscondida(props){
    const {numero, resultado, virarCarta} = props;

    const classe = `pergunta escondida ${resultado}`;
    let botao = ''
    
    if(resultado === 'nenhum'){
        botao = <ion-icon name="play-outline" onClick={virarCarta}></ion-icon>
    } else if(resultado === 'correto') {
        botao = <ion-icon name="checkmark-circle-sharp"></ion-icon>
    } else if(resultado === 'quase'){ 
        botao = <ion-icon name="help-circle-sharp"></ion-icon>
    } else if(resultado === 'incorreto'){
        botao = <ion-icon name="close-circle-sharp"></ion-icon>
    }
            

    return(
        <article className={classe}> 
            <p>Pergunta {numero}</p>
            {botao}
        </article>
    )
}

export default PerguntaEscondida;