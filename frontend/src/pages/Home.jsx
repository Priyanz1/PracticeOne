import Navbar from "../Components/Navbar"
import Best from "../Components/Best"
import Latest from "../Components/Latest"
import Hero from '../Components/Hero'
import axios from "axios"
import { useEffect, useContext } from "react"
import { ProductDataContext } from "../Components/ProductContext"


function Home() {
  const {setProduct}=useContext(ProductDataContext);

  useEffect(()=>{
    const fetchProduct=async()=>{
        const response=await axios.get(`http://localhost:3000/products/getAllProducts`);
        console.log(response.data.products);
        setProduct(response.data.products);
    }
    fetchProduct();
},[])
  return (
    <div id="home">
      <Hero/>
      <Latest/>
      <Best/>
    </div>
  )
}

export default Home
