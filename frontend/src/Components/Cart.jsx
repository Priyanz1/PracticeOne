import React, { useContext } from 'react'
import { ShopDataContext } from './ShopContext';

function Cart() {
  const {ShopProduct,setShopProduct,count,setcount}=useContext(ShopDataContext);
  const removehandle = (reitem) => {
  setcount(count-1);
    setShopProduct((prev) => prev.filter((item) => item !== reitem));
  }

  return (
    <div className='py-30 w-full'>
      <div className='text-2xl text-center'>MY CART</div>
    <div className='mt-10 flex flex-col gap-2'>
    {
        ShopProduct.map((item,index)=>{
            return (        
          <div key={index} className='flex justify-between w-full border-1'>
             <div className='flex gap-5'>
                <img className='w-20 h-25' src={item.singleProduct.src} alt={item.singleProduct.dis}></img>
             <div>
             <p>{item.singleProduct.dis}</p>
                <p>{item.singleProduct.price}</p>
                <p>{item.size}</p>
             </div>
            </div>
            <i onClick={()=>{removehandle(item)}} className="ri-delete-bin-6-line text-xl pr-10 pt-5"></i>
          </div>
          )
        }) 
       }
    </div>
    </div>
  )
}

export default Cart