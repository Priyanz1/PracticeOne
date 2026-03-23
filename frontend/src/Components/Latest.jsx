import React, { useContext, useEffect, useState } from 'react'
import Text from '../Components/Text'
import ProductCom from './ProductCom'
import { ProductDataContext } from './ProductContext'

function Latest() {
  const { Product, setProduct } = useContext(ProductDataContext);
  const [latestCollection, setlatestCollection] = useState([]);
  const [Category, setCategory] = useState([]);
  const [sortType,setSortType] = useState('relevent');

 const sortProduct = () => {
  let fpCopy = Product.slice(0,10);
  switch (sortType){
  case 'low-high':
    setlatestCollection(fpCopy.sort((a,b)=>(a.price - b.price)));
    break;
  case 'high-low':
    setlatestCollection(fpCopy.sort((a,b)=>(b.price - a.price)));
    break;
  default:
    applyfun();
    break;
  }
 }

 useEffect(()=>{
  sortProduct();
 },[sortType])
 
  const toggle = (e) => {
    const value=e.target.value;
    if (Category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory(prev=> [...prev, value]);
    }
  };

  useEffect(() => {
    setlatestCollection(Product.slice(0, 10));
  }, []);

  const applyfun = () => {
    let Copy = Product.slice(0, 10);
    if (Category.length > 0) {
      Copy = Copy.filter((item) => Category.includes(item.cat));
    }
    setlatestCollection(Copy);
  };
  useEffect(() => {
    applyfun();
  }, [Category, Product])

return (
  <div id="collection" className='pt-10'>
    <Text Head1="LATEST" Head2="COLLECTION" />

    <div className='flex flex-col sm:flex-row'>
      <div>
        <div className='ml-5 sm:px-5 pb-7 '>
        Categories
        <p className='flex gap-2'>
          <input type="checkbox" value="men" onChange={toggle} />
          men
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" value="women" onChange={toggle} />
          women
        </p>
        <p className='flex gap-2'>
          <input type="checkbox" value="kids" onChange={toggle} />
          kids
        </p>
        </div>
        <div>
    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 text-sm mb-5 ml-4' name="" id="">
        <option value="relavent">Sort by:Relavent</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: High to Low</option>
      </select>
    </div>
      </div>
      <div className=' w-[65%] md:w-[65%] lg:w-[65%] gap-2 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {latestCollection.map((item, index) => { return (<ProductCom key={index} id={item.id} src={item.src} dis={item.dis} price={item.price} />) })}
      </div>
    </div>
  </div>
);
}


export default Latest