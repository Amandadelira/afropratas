import {Link} from 'react-router-dom'
//import Container from './Container'
import './NavBar.css'
import logo from '../../assets/img/Logo1.png'

function NavBar () {
    return(
    <header className="header">
        <Link to="/">
                    <img src={logo} className="logo" alt="Logotipo"/>
        </Link>
        <nav>
            <ul className="list">
                    <li className="item">
                    <Link to="/home">Home</Link>
                    </li>
                    <li className="item">
                    <Link to="/cadastro">Cadastre-se</Link>
                    </li>
                    <li className="item">
                    <Link to="/logar">Logar</Link>
                    </li>
            </ul>
        </nav>
    </header>
    );
};

export default NavBar;