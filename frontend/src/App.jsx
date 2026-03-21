import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './Components/Navbar'



function App() {
  return (
   <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
    </Routes>
   </div>
  )
}

export default App