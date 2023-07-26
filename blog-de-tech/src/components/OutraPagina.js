import React from 'react'
import { Link } from 'react-router-dom';

const OutraPagina = () => {
  return (
    <div>
        <h2>Bem-vindo à outra página!</h2>
      <p>
        Este é o conteúdo da outra página. Clique no link abaixo para voltar à página inicial:
        <br />
        <Link to="/">Voltar para a Página Inicial</Link>
      </p>
    </div>
  )
}

export default OutraPagina