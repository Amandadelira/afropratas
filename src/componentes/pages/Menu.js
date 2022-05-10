import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
               <Link to="/home">Home</Link>
               <Link to="/cadastro">Cadastre-se</Link>
               <Link to="/logar">Logar</Link>
    </div>
  )
}

export default Menu