
import React from 'react'
import DealCard from './DealCard'
import DealsSlickComponent from './DealsSlickComponent'



function Deal() {


  return (
    <div className='py-10 px-5 lg:px-16'>
           <h1 className='font-bold text-lg lg:text-4xl pb-5 lg:pb-16 text-center [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-green-600'>Today's Deal</h1>
      <div>
        <DealsSlickComponent/>
      </div>
    </div>
  )
}

export default Deal
