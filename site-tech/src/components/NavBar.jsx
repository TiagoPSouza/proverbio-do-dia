import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        <Link to="/Contato">Contato</Link>
    </nav>
  )
}

export default NavBar;