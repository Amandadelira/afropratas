import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import { useAuth } from "../../provides/authProvider"

const Menu = () => {
  const {isLogged, userLogged, setIsLogged, setUserLogged} = useAuth();

  const logout = () => {
    setIsLogged(false)
    setUserLogged({})
    localStorage.removeItem('userLogged') 
  }
  return (
    <>
      <div className='menu'>
        Menu: <NavLink to="/">Home</NavLink> 
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
          </ul>
        </nav>
      </header>
        { isLogged 
          ? (
              <>
                <span>Logado como: {userLogged.email}</span> 
                <button onClick={logout}>Sair</button>
              </>
          )
          : (<span><Link to="admin/login">Login Admin</Link></span>)
        }
      </div>
    </>
  )
}

export default Menu