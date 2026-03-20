import React from 'react'

function ProductCom({src,dis,price}) {
  return (
    <div>
        <img className='w-full object-fit' src={src} alt="image" />
        <div className='pt-1'>{dis}</div>
        <div className='pb-4'>${price}</div>
    </div>
  )
}

export default ProductCom