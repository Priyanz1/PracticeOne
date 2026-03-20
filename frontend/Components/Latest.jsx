import React, { useContext, useEffect, useState } from 'react'
import Text from '../Components/Text'
import ProductCom from './ProductCom'
import {ProductDataContext} from './ProductContext'

function Latest() {
    const {Product,setProduct} = useContext(ProductDataContext);
   const [latestCollection,setlatestCollection] = useState([]);

    useEffect(()=>{
        setlatestCollection(Product.slice(0,10));
    },[])
  return (
    <div>
        <Text Head1="LATEST" Head2="COLLECTION"/>

        <div className=' w-[90%] lg:w-[80%] gap-2 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {latestCollection.map((item,index)=>{return (<ProductCom key={index} src={item.src} dis={item.dis} price={item.price}/>)})}
        </div>


    </div>
  )
}

export default Latest