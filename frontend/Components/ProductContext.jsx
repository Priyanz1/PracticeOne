import { createContext, useState } from "react";

export const ProductDataContext = createContext();


const ProductContext=({children})=>{
    const [Product,setProduct]=useState([
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:true
        },
  
    
]);
 
    return (
        <ProductDataContext.Provider value={{Product,setProduct}}>{children}</ProductDataContext.Provider>
    )
}
export default ProductContext