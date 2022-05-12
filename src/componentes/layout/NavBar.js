import {Link} from 'react-router-dom'
//import Container from './Container'
import './NavBar.css'
import logo from '../../assets/img/Logo1.png'

function NavBar () {
    return(
        <>
        <div className="barra">
              {/* <nav class="navbar navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand navbar-expand-lg" href="#"> 
        <p>sejnfioubweautg</p>
       <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/> 
    </a> 
  </div>
    </nav> */}

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
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
                    <Link to="/login">Logar</Link>
                    </li>
            </ul>
        </nav>
    </header>
    </>
    );
};

export default NavBar;