import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        Menu: <Link to="../img/Logo.png" alt="Logotipo"></Link> 
              <Link to="./Home">Home</Link> 
              <Link to="./Sobre">Sobre</Link>
              <Link to="./Cadastro">Cadastre-se</Link>
    </div>

  )
}

export default Menu