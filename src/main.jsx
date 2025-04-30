import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import Root from './LayOut/Root/Root.jsx'
import { router } from './Router/Router.js'
import AuthProvider from './Contex/AuthProvider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
