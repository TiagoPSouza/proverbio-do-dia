import { BrowserRouter as Routes, Link, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import OutraPagina from './components/OutraPagina';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
      <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/outra-pagina" component={OutraPagina} />
      </Routes>
    </div>
  );
}

export default App;
