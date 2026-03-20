import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Latest from '../Components/Latest'
import Best from '../Components/Best'

// import Practice from './pages/Practice'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Latest/>
      <Best/>
      {/* <Practice/> */}
    </div>
  )
}

export default App
