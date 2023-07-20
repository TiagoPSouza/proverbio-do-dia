import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Contato from './routes/Contato.jsx';
import NotFound from './routes/NotFound.jsx';

const router = createBrowserRouter([
  {
    path:"/", 
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {path: "/", element: <Home />},
      {path: "Sobre", element: <Sobre />},
      {path: "Contato", element: <Contato />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
