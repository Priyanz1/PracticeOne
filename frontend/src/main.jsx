import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx'
import ProductContext from './Components/ProductContext.jsx';
import { BrowserRouter } from 'react-router-dom';
// import UserContext from '../Components/UserContext.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <UserContext>
    <App />
    </UserContext> */}
    <ProductContext>
    <App />
    </ProductContext>
  </BrowserRouter>
)
