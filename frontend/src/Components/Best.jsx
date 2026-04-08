import React, { useContext, useEffect, useState } from 'react'
import ProductCom from './ProductCom';
import Text from './Text';
import { ProductDataContext } from './ProductContext';

function Best() {
    const {Product,setProduct} = useContext(ProductDataContext);
    const [bestCollection,setbestCollection] = useState([]);
 
    useEffect(() => {
      const filtered = Product.filter((item) => item.isbest).slice(0, 20);
      setbestCollection(filtered);
  }, [Product]);
   return (
     <div id="best" className='pt-10'>
         <Text Head1="BEST" Head2="SELLERS"/>
 
         <div className=' w-[90%] lg:w-[80%] gap-2 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
           {bestCollection.map((item,index)=>{return (item.isbest?<ProductCom key={index} ProductId={item._id} ProductImage={item.image} ProductDescription={item.description} ProductPrice={item.price}/>:'')})}
         </div>
    </div>
  );
}

export default Best;