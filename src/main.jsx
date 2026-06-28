import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApplicationModeContextProvider } from './context/ApplicationMode.jsx'
// import { ApiContextProvider } from './context/ApiContext.jsx'
// import { CartContextProvider } from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(

   <ApplicationModeContextProvider>
      
      <App/>

   </ApplicationModeContextProvider>
)
