import { Radio } from '@mui/material'
import React from 'react'

function AddressCard({item}:any) {



  return (
    <div className='flex p-5'>

      <div className='space-y-3 pt-3'>
        <h1>{item?.name}</h1>
        <p className='xs:w-[290px]  md:w-[320px]'>
          {item?.address}
        </p>
        <div className='flex gap-3'>
          <p> <strong>Mobile : </strong> {item?.mobile}</p>
          <p> <strong>Pin : </strong> {item?.pinCode}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
