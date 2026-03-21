import { createContext, useState } from "react";

export const ProductDataContext = createContext();


const ProductContext=({children})=>{
    const [Product,setProduct]=useState([
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true,
            id:1
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false,
            id:2
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true,
            id:3
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false,
            id:4
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true,
            id:5
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true,
            id:6
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false,
            id:7
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false,
            id:8
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true,
            id:9
        },
  
    
]);
 
    return (
        <ProductDataContext.Provider value={{Product,setProduct}}>{children}</ProductDataContext.Provider>
    )
}
export default ProductContext