import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Meu Site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/outra-pagina">Outra Página</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header