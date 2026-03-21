import React from 'react'

function Text({ Head1, Head2 }) {
  return (
    <div className=' w-full py-10 flex flex-col items-center justify-center '>
        <div className='flex gap-5'>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
            <div className='text-3xl sm:px-2 py-1'>{Head1}</div>
            <div className='text-3xl'>{Head2}</div>
         </div>
         <div className="h-[1.5px] w-12 bg-black mt-8 sm:mt-5"></div>
        </div>
        <div className='w-[70%] py-5 text-[0.6rem] text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque perferendis cum est nostrum si!</div>
    </div>
  )
}

export default Text