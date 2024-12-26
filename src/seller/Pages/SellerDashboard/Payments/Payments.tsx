import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'
import { useNavigate } from 'react-router-dom'

function Payments() {
  const navigate = useNavigate();

  return (
    <div className='space-y-5'>
      <Card className='rounded-md space-y-4 p-5'>
           <h1 className='text-gray-600 font-medium'>Total Earnings</h1>
           <h1 className='text-xl font-bold pb-1'>₹400</h1>
           <Divider/>
           <p className='text-gray-600 font-medium '>Last Payment : <strong>₹400</strong></p>
      </Card>

      <Button onClick={()=>navigate("/seller/transactions")} variant='contained'>Transaction</Button>
       <div className='shadow-xl p-5 rounded-md'>
       <Transaction/>
       </div>
    </div>
  )
}

export default Payments
