import logo from "./../midias/logo.svg";

function Logo(){
    return(
        <div className="logo">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </div>
    )
}

export default Logo;