// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { ProductDataContext } from '../Components/ProductContext'
// import { FaStar } from "react-icons/fa";

// function Product() {
//     const { id } = useParams()
//     const { Product } = useContext(ProductDataContext)

//     const singleProduct = Product.find((item) => item.id === Number(id))

//     if (!singleProduct) {
//         return <div>Product not found</div>
//     }

//     return (
//         <div className='w-full'>
//             <div className='w-[90%] lg:w-[80%] mx-auto justify-center flex flex-col md:flex-row gap-8 pt-20 md:pt-24 lg:pt-28'>
                
//                 {/* left image */}
//                 <div className='w-full md:w-1/3'>
//                     <img
//                         className='w-full h-auto object-cover'
//                         src={singleProduct.src}
//                         alt={singleProduct.dis}
//                     />
//                 </div>

//                 {/* right content */}
//                 <div className='w-full md:w-1/2 flex flex-col justify-start'>
//                     <h1 className='text-2xl md:text-3xl font-semibold text-black'>
//                         {singleProduct.dis}
//                     </h1>

//                     <div className='flex items-center gap-1 text-orange-500 mt-3'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar className='text-gray-300' />
//                         <span className='text-black ml-2 text-sm md:text-base'>(122)</span>
//                     </div>

//                     <p className='mt-4 text-2xl font-medium text-black'>
//                         ${singleProduct.price}
//                     </p>

//                     <p className='mt-4 text-gray-500 leading-7 text-sm md:text-base'>
//                         A lightweight, usually knitted, pullover shirt, close-fitting and
//                         with a round neckline and short sleeves, worn as an undershirt or
//                         outer garment.
//                     </p>

//                     <div className='mt-6 flex flex-wrap gap-3'>
//                         <button className='px-4 py-2 bg-gray-100 border'>S</button>
//                         <button className='px-4 py-2 bg-gray-100 border'>M</button>
//                         <button className='px-4 py-2 bg-gray-100 border'>L</button>
//                         <button className='px-4 py-2 bg-gray-100 border'>XL</button>
//                         <button className='px-4 py-2 bg-gray-100 border'>XXL</button>
//                     </div>

//                     <button className='mt-6 w-fit bg-black text-white px-6 py-3'>
//                         ADD TO CART
//                     </button>

//                     <div className='mt-6 border-t pt-5 text-sm text-gray-500 space-y-2'>
//                         <p>100% Original product.</p>
//                         <p>Cash on delivery is available on this product.</p>
//                         <p>Easy return and exchange policy within 7 days.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Product




import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../Components/ProductContext'
import { FaStar } from "react-icons/fa";

function Product() {
    const { id } = useParams()
    const { Product } = useContext(ProductDataContext)

    const singleProduct = Product.find((item) => item.id === Number(id))

    if (!singleProduct) {
        return <div>Product not found</div>
    }

    return (
        <div className='w-full'>
            <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-10 pt-24 md:pt-28 items-center md:items-start'>
                
                {/* left image */}
                <div className='w-full md:w-1/3'>
                    <img
                        className='w-full h-[400px] md:h-[500px] object-cover rounded'
                        src={singleProduct.src}
                        alt={singleProduct.dis}
                    />
                </div>

                {/* right content */}
                <div className='w-full md:w-1/2 flex flex-col'>
                    
                    <h1 className='text-2xl md:text-3xl font-semibold text-black leading-tight'>
                        {singleProduct.dis}
                    </h1>

                    {/* ⭐ rating */}
                    <div className='flex items-center gap-1 text-orange-500 mt-3'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className='text-gray-300' />
                        <span className='text-black ml-2 text-sm md:text-base'>(122)</span>
                    </div>

                    {/* price */}
                    <p className='mt-4 text-3xl font-medium text-black'>
                        ${singleProduct.price}
                    </p>

                    {/* description */}
                    <p className='mt-4 text-gray-500 leading-7 text-sm md:text-base'>
                        A lightweight, usually knitted, pullover shirt, close-fitting and
                        with a round neckline and short sleeves, worn as an undershirt or
                        outer garment.
                    </p>

                    {/* sizes */}
                    <div className='mt-6 flex flex-wrap gap-3'>
                        {["S","M","L","XL","XXL"].map((size)=>(
                            <button 
                              key={size}
                              className='px-4 py-2 bg-gray-100 border hover:bg-black hover:text-white transition'
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* add to cart */}
                    <button className='mt-8 w-fit bg-black text-white px-8 py-3 hover:opacity-90 transition'>
                        ADD TO CART
                    </button>

                    {/* extra info */}
                    <div className='mt-8 border-t pt-5 text-sm text-gray-500 space-y-2'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product