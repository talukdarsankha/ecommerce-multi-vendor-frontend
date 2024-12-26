
import React from 'react'

function DealCard({image}:{image:string}) {
  return (
    <div className='w-[8rem] md:w-[10rem] cursor-pointer'>
      <img className='border-x-[5px] border-t-[5px] border-pink-500 w-full h-[8rem] md:h-[10rem] object-cover object-top rounded-md' src={image} alt="" />
      <div className='bg-black text-white p-2 text-center'>
        <p className=' text-sm font-semibold'>Smart Watch</p>
        <p className=' font-bold'>20% OFF</p>
        <p className='text-sm text-balance'>shop now</p>
      </div>
    </div>
  )
}

export default DealCard
