import festa from "./../midias/party.png";
import triste from "./../midias/sad.png";

function MensagemFinal({tipoMensagem}){
    const mensagens = {
        parabens: {
            titulo: "PARABÉNS!",
            mensagem: "Você não esqueceu de nenhum flashcard!",
            imagem: festa
        },
        putz: {
            titulo: "PUTZS!",
            mensagem: "Ainda faltaram alguns... Mas não desanime!",
            imagem: triste
        }
    }

    const {titulo, mensagem, imagem} = tipoMensagem === "parabens" ? mensagens.parabens : mensagens.putz;

    return(
        <>
            <div className="titulo">
                <img src={imagem} alt={titulo} />
                <h3>{titulo}</h3>
            </div>
            <p className="mensagem">{mensagem}</p>    
        </>
    )
}

export default MensagemFinal;