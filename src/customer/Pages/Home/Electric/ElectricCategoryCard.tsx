import React from 'react'

function ElectricCategoryCard({item}:{item:any}) {
  
  return (
    <div className='px-5 flex flex-col items-center'>
      <img className='h-10 object-contain' src={item.image} alt="" />
      <h1 className='font-semibold text-sm text-center' >{item.name}</h1>
    </div>
  )
}

export default ElectricCategoryCard
