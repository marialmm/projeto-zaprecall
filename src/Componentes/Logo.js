import logo from "./../midias/logo.svg";

function Logo({className}){
    const classe = `logo ${className}`
    return(
        <div className={classe}>
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </div>
    )
}

export default Logo;