import './App.css'

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='app'>
      <p>NavBar</p>
      <h1>Hello Word</h1>
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
