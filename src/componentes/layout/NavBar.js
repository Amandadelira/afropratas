import { Link } from 'react-router-dom'
//import Container from './Container'
import './NavBar.css'
import logo from '../../assets/img/Logo2.png'
import inauguração from '../../assets/img/surpresa.png'
import veja from '../../assets/img/novo-produto.png'
import mapa from '../../assets/img/mapa.png'
import home from '../../assets/img/home.svg'
import login from '../../assets/img/login.svg'
import cadastro from '../../assets/img/cadastro.svg'
function NavBar() {
  return (
    <>
      <div className="barra">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="row justify-content-start">
        <div className="coluna_b">
          <div class="col-4 ">
          <Link to="/">
          <img src={inauguração} className="inauguração" alt="surpresa" />
          <span>Inauguração em breve</span>
        </Link>
          </div>
          <div class="col-4">
          <Link to="/">
          <img src={veja} className="veja" alt="veja" />
          <span>Veja os produtos que serão lançados</span>
        </Link>
          </div>
          <div class="col-4">
          <Link to="/">
          <img src={mapa} className="mapa" alt="mapa" />
          <span>Visualize nossa loja em sua cidade</span>
        </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
      </div>
      <header className="header">
          <div className="logoname">
            <Link to="/">
              <img src={logo} className="logo" alt="Logotipo" />
            </Link>
            <h1>Afropratas.</h1>
          </div>
        <nav>
          <ul className="list">
            <li className="item">
              <Link to="/home">
              <img src={home} className="iconhome" alt="icon" />Afro-Joias</Link>
            </li>
            <li className="item">
              <Link to="/cadastro">
               <img src={cadastro} className="iconcadastro" alt="icon" />Cadastre-se
              </Link>
            </li>
            <li className="item">
              <Link to="/login">
                 <img src={login} className="iconlogin" alt="icon" />Logar</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;