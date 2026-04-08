import { createContext, useState } from "react";

export const ProductDataContext = createContext();

const ProductContext=({children})=>{
    const [Product,setProduct]=useState([]);
    return (
        <ProductDataContext.Provider value={{Product,setProduct}}>{children}</ProductDataContext.Provider>
    )
}

export default ProductContext;