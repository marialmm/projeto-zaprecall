import MensagemFinal from "./MensagemFinal";
import Resultados from "./Resultados";

function Rodape(props){
    const {meta, concluidas, resultados, quantidade, reiniciarRecall} = props;
    let mensagem = '';

    if(concluidas < quantidade){
        return(
            <footer>
                <p className="concluidos">{concluidas}/{quantidade} CONCLUIDOS</p>
                <Resultados resultados={resultados} />
            </footer>
        )
    } else{
        if(meta === 0){
            const final = [];
            resultados.forEach((resultado) => final.push(resultado.classe));
            mensagem = !final.includes('incorreto') ? "parabens" : "putz";
        } else{
            const zaps = resultados.filter(({classe}) => classe==='correto');
            mensagem = zaps.length >= meta ? "parabens" : "putz";
        }
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