import './App.css';

import NavBar from './components/NavBar';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <h1>Hello Word</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
