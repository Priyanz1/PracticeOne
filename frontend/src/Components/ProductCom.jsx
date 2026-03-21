import React from 'react'
import { Link } from 'react-router-dom'

function ProductCom({src,dis,price,id}) {
  return (
    <div>
       <Link to={`/product/${id}`}>
       <img className='w-full object-fit' src={src} alt="image" />
        <div className='pt-1'>{dis}</div>
        <div className='pb-4'>${price}</div>
       </Link>
    </div>
  )
}

export default ProductCom