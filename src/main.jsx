import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './hooks/AuthProvider'
import './index.css'
import routes from './routes/Routes';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)