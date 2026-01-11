import brazilFlag from "../assets/Flag_of_Brazil.png"
import USFlag from "../assets/USflag.jpg"

function Header(props) {
    
    const flagSource = props.languageText.countryCode === "EN" ? USFlag : brazilFlag

    return(
        <header>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"

            }} >
                <h2> {props.languageText.title} </h2>
    
                <img onClick={props.toggleLanguage} src={flagSource} style={{ width: "3rem", height: "3rem" }}/>

            </div>
            <p> {props.languageText.description} </p>
        </header>
    )
}

export default Header


