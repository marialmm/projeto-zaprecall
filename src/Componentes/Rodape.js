function Rodape(props){
    const {concluidas, resultados} = props;
    const divResultados = 
    <div className="resultados">
        {resultados.map((resultado, index) => {
            return (
            <div className={resultado.classe} key={index}>
                <ion-icon name={resultado.icone}></ion-icon>
            </div> 
            )      
        })}
    </div>
    if(concluidas < 8){
        return(
            <footer>
                <p className="concluidos">{concluidas}/8 CONCLUIDOS</p>
                {divResultados}
            </footer>
        )
    } else{
        const final = [];
        resultados.forEach((resultado) => final.push(resultado.classe));
        if(!final.includes('incorreto')){
            return(
                <footer className="final">
                    <div className="titulo">
                        <img src="./assets/midias/party.png" alt="party" />
                        <h3>PARABÉNS!</h3>
                    </div>
                    <p className="mensagem">Você não esqueceu de nenhum flashcard</p>
                    {divResultados}
                </footer>
            )
        } else{
            return(
                <footer className="final">
                    <div className="titulo">
                        <img src="./assets/midias/sad.png" alt="sad" />
                        <h3>PUTZS!</h3>
                    </div>
                    <p className="mensagem">Ainda faltaram alguns... Mas não desanime!</p>
                    {divResultados}
                </footer>
            )
        }
    }
}

export default Rodape;