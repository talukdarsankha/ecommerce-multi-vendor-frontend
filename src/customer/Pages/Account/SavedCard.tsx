import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React from 'react'

function SavedCard() {
  return (
    <div className=' px-5 lg:px-10 pt-6 pb-16 flex flex-col justify-center items-center'>
      <CreditScoreIcon sx={{fontSize:"10rem",color:"green"}}/>
      <div className='flex flex-col items-center space-y-3 md:px-5 text-center'>
         <p className='text-2xl font-bold'>Save Your Creadit Card/Debit Cards During Payment</p>
         <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque sit animi maiores corporis? Molestiae ullam obcaecati cum, reiciendis veritatis minus.</p>
      </div>
    </div>
  )
}

export default SavedCard
