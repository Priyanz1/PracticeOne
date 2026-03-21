import Navbar from "../Components/Navbar"
import Best from "../Components/Best"
import Latest from "../Components/Latest"
import Hero from '../Components/Hero'


function Home() {
  return (
    <div id="home">
      <Hero/>
      <Latest/>
      <Best/>
    </div>
  )
}

export default Home
