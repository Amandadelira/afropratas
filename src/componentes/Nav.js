import "./Nav.css";
import {Link} from 'react-router-dom'

function Nav () {
    return(
    <header>
         <Link to="/">
                    <img src="{Logo}" alt="Logotipo"/>
                        </Link>
        <nav>
            <ul className={List}>
                    <li className={item}>
                    <Link to="Home">Home</Link>
                    </li>
                    <li className={item}>
                    <Link to="Sobre">Sobre</Link>
                    </li>
                    <li className={item}>
                    <Link to="Cadastro">Cadastrar-se</Link>
                    </li>
                    <li className={item}>
                    <Link to="Contato">Contato</Link>
                    </li>
            </ul>
        </nav>
    </header>
    );
};

export default Nav;