import React, { useContext, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../Components/ProductContext'
import { FaStar } from "react-icons/fa";
import { ShopDataContext } from '../Components/ShopContext';
// import axios from 'axios';
function Product() {
    const { id } = useParams()
    const { Product } = useContext(ProductDataContext);
    const [size, setsize] = useState('');
    const { addCart } = useContext(ShopDataContext);
    // const singleProduct = Product.find((item) => item.id === Number(id));
    const singleProduct = Product.find((item) => item._id === id);

    if(!singleProduct){
        return <div>Product not found</div>
    }

    const handleAddToCart = () => {
        if (!size) {
            alert("Please select a size first");
            return;
        }
        addCart(singleProduct, size);
        setsize('');
    };

    return (
        <div className='w-full'>
            <div className='w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row gap-10 pt-24 md:pt-28 items-center md:items-start'>

                {/* left image */}
                <div className='w-full md:w-1/3'>
                    <img
                        className='w-full h-[400px] md:h-[500px] object-cover rounded'
                        src={singleProduct.image}
                        alt={singleProduct.description}
                    />
                </div>

                {/* right content */}
                <div className='w-full md:w-1/2 flex flex-col'>

                    <h1 className='text-2xl md:text-3xl font-semibold text-black leading-tight'>
                        {singleProduct.description}
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
                        {["S", "M", "L", "XL", "XXL"].map((itemSize) => (
                            <button
                                onClick={() => setsize(itemSize)}
                                key={itemSize}
                                className={`px-4 py-2 border transition ${size === itemSize
                                        ? "bg-black text-white"
                                        : "bg-gray-100 text-black hover:bg-black hover:text-white"
                                    }`}
                            >
                                {itemSize}
                            </button>
                        ))}
                    </div>

                    {/* add to cart */}
                    <button onClick={handleAddToCart} className='mt-8 w-fit bg-black text-white px-8 py-3 hover:opacity-90 transition'>
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