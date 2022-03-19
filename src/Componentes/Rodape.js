import MensagemFinal from "./MensagemFinal";
import Resultados from "./Resultados";

function Rodape(props){
    const {concluidas, resultados, quantidade, reiniciarRecall} = props;

    if(concluidas < quantidade){
        return(
            <footer>
                <p className="concluidos">{concluidas}/{quantidade} CONCLUIDOS</p>
                <Resultados resultados={resultados} />
            </footer>
        )
    } else{
        const final = [];
        resultados.forEach((resultado) => final.push(resultado.classe));
        const mensagem = !final.includes('incorreto') ? "parabens" : "putz";
        
        return(
            <footer className="final">
                <MensagemFinal tipoMensagem={mensagem} />
                <Resultados resultados={resultados} />
                <button className="reiniciar" onClick={reiniciarRecall}>REINICIAR RECALL</button>
            </footer>
        )
    }
}

export default Rodape;