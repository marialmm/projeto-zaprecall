function Botao(props){
    const{texto, classe, escolherResultado} = props;

    return(
        <button className={classe} onClick={()=>escolherResultado(classe)}>{texto}</button>
    )
}

export default Botao;