import React from 'react'

function Hero() {
  return (
    <div className=' w-[90%] h-[80vh] mx-auto sm:flex lg:w-[80%] border overflow-hidden z-0 relative top-20 mb-40'>
      <div className='flex flex-col items-center justify-center py-8 sm:py-0 sm:w-1/2'>
      <div className='flex items-center gap-2'> 
        <div className="h-[1.5px] w-10 bg-black mt-3"></div>
        <div className=''>OUR BESTSELLERS</div>
        </div>
        <div className='text-3xl font-bold'>
            Latest Arrivals
        </div>
        <div className='flex items-center gap-4'> 
        <div className='text-xl'>Shop Now</div>
        <div className="h-[1px] w-10 bg-black mt-3"></div>
        </div>
      </div>
        <img className='w-full object-fit sm:w-1/2 lg:object-fit' src="https://images.pexels.com/photos/4100480/pexels-photo-4100480.jpeg" alt="" />
    </div>
  )
}

export default Hero

