import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../routes/Home';
import Sobre from '../routes/Sobre';
import Contato from '../routes/Contato';
import NotFound from '../routes/NotFound';

const Rotas = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Sobre" component={Sobre} />
        <Route path="/Contato" component={Contato} />
        <Route component={NotFound} />
    </Switch>
  )
}

export default Rotas;