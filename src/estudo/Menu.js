import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        Menu: <Link to="/">Home</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="images">Images</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="props">Props</Link> 
        <Link style={{margin: '0 0 0 10px'}} to="children">Children</Link> 
        <NavLink style={{margin: '0 0 0 10px'}} to="images/icon">Icon</NavLink>
        <NavLink style={{margin: '0 0 0 10px'}} to="admin">Admin</NavLink>  
    </div>

  )
}

export default Menu