import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OutraPagina from './components/OutraPagina';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/outra-pagina" component={OutraPagina} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
