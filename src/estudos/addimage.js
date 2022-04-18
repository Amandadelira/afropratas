import "./addimage.css"
//importar imagens npg, png, gifs, svg, jpeg, webp
import moutain from "../src/assets/img/moutain.webp"
import logo from "../assets/img/react-logo.svg"
//importar imagens svg como componentes
import { ReactComponent as Logo } from "../assets.img/react-logo.svg"

const AddImage = () => {
    return (
        <div className="bgImagens">
        { /*usando imagens svg como componentes */ }
        <Logo alt= "Logo React" width="400" height="400"/>
        { /*usando imagens importadas com tag tmg */ }
        <img src={logo} alt="Logo-React" widt="200" height="200"/>
        <imhg src={mountain} alt="Mountains" width="300" height="200"/>
        </div>
    );
}