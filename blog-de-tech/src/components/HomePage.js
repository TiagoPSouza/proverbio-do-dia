import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
        <h2>Bem-vindo à página inicial!</h2>
      <p>
        Este é o conteúdo da página inicial. Clique no link abaixo para ir para outra página:
        <br />
        <Link to="/outra-pagina">Ir para Outra Página</Link>
      </p>
    </div>
  )
}

export default HomePage