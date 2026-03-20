import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx'
import ProductContext from '../Components/ProductContext.jsx';
// import UserContext from '../Components/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UserContext>
    <App />
    </UserContext> */}
    <ProductContext>
    <App />
    </ProductContext>
  </StrictMode>,
)
