import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'



function App() {
  return (
   <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
   </div>
  )
}

export default App