import { createContext, useState } from "react";

export const ShopDataContext = createContext();

const ShopContext =({children})=>{
    const [ShopProduct,setShopProduct]=useState([]);
    const [count,setcount] = useState(0);
    const addCart = (singleProduct,size)=>{
        setShopProduct((prev) => {
            const updatedCart = [...prev, { singleProduct, size }];
            console.log(updatedCart);
            setcount(count+1);
            return updatedCart;
        });
    };
    return(
  <ShopDataContext.Provider  value={{ShopProduct,setShopProduct,addCart,setcount,count}}>
    {children}
  </ShopDataContext.Provider>
  )
}



export default ShopContext