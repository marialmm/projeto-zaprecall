import Botao from "./Botao";

function Resposta(props){
    const{resposta, escolherResultado} = props;

    const botoes = [
        {
            texto: 'Não lembrei',
            classe: 'incorreto'
        },
        {
            texto: 'Quase não lembrei',
            classe: 'quase'
        },
        {
            texto: 'Zap!',
            classe: 'correto'
        }
    ]

    return(
        <article className="pergunta tras">
            <p>{resposta}</p>
            <div className="botoes">
                {botoes.map(({texto, classe}) => <Botao texto={texto} classe={classe} escolherResultado={escolherResultado} key={classe} />)}
            </div>
        </article>
    )
}

export default Resposta;