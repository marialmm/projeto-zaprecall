function Resultados({resultados}){
    return(
        <div className="resultados">
            {resultados.map((resultado, index) => {
                return (
                <div className={resultado.classe} key={index}>
                    <ion-icon name={resultado.icone}></ion-icon>
                </div> 
                )      
            })}
        </div>
    )
}

export default Resultados;