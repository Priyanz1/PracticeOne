import React from 'react'
import { Link } from 'react-router-dom'

function ProductCom({ProductImage,ProductDescription,ProductPrice,ProductId}) {
  return (
    <div>
       <Link to={`/product/${ProductId}`}>
       <img className='w-full object-fit' src={ProductImage} alt={ProductDescription} />
        <div className='pt-1'>{ProductDescription}</div>
        <div className='pb-4'>${ProductPrice}</div>
       </Link>
    </div>
  )
}

export default ProductCom