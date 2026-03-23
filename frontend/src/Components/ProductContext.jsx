import { createContext, useState } from "react";

export const ProductDataContext = createContext();


const ProductContext=({children})=>{
    const [Product,setProduct]=useState([
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:210,
            isbest:true,
            id:1,
            cat:"men"
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:230,
            isbest:false,
            id:2,
            cat:"women"
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:200,
            isbest:true,
            id:3,
            cat:"kids"
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:190,
            isbest:false,
            id:4,
            cat:"women"
        },
        {
            src:"https://images.pexels.com/photos/2697896/pexels-photo-2697896.jpeg",
            dis:"jacket red color",
            price:120,
            isbest:true,
            id:5,
            cat:"men"
        },
        {
            src:"https://images.pexels.com/photos/11855627/pexels-photo-11855627.jpeg",
            dis:"jacket red color",
            price:170,
            isbest:true,
            id:6,
            cat:"kids"
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:160,
            isbest:false,
            id:7,
            cat:"men"
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:190,
            isbest:false,
            id:8,
            cat:"kids"
        },
        {
            src:"https://images.pexels.com/photos/6069085/pexels-photo-6069085.jpeg",
            dis:"jacket red color",
            price:300,
            isbest:true,
            id:9,
            cat:"kids"
        },
  
    
]);
 
    return (
        <ProductDataContext.Provider value={{Product,setProduct}}>{children}</ProductDataContext.Provider>
    )
}
export default ProductContext