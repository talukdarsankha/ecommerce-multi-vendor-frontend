import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Order, orderItem } from '../../../Types/Order'


function OrderItem({order, orderItem}:{ order:Order, orderItem:orderItem}) {

  const navigate = useNavigate();

  const deliveryDate = new Date(order?.deliveryDate);

  const formattedDate = deliveryDate.toLocaleDateString('en-IN', {
    weekday: 'short', // Mon
    day: 'numeric',   // 6
    month: 'short',   // Jun
  });

  
  return (
    <div onClick={()=>navigate(`/account/orders/${order?.id}/${orderItem?.id}`)} className='text-sm bg-white p-5 space-y-5 border rounded-md cursor-pointer'>
        <div className='flex items-center gap-5'>
             <div>
                <Avatar sizes='small' sx={{bgcolor:orange[300]}}> <ElectricBolt/> </Avatar>
             </div>

             <div>
              {order?.orderStatus && (
                <h1 className='font-bold text-customColor'>{String(order.orderStatus)}</h1>
              )}
              <p>
                Arriving By <span className='font-bold opacity-60'>{formattedDate}</span>
              </p>
            </div>

        </div>

        <div className='p-5 flex gap-3 bg-teal-50'>
          <div>
            <img className='w-[60px] rounded-md' src={orderItem?.product?.images?.[0]} alt="" />
          </div>

          <div className='space-y-1'>
            <h1 className='font-semibold  lg:text-lg'>{orderItem?.product?.seller?.businessDetails?.businessName}</h1>
            <p>{orderItem?.product?.title}</p>
            <p className='text-gray-500 text-sm'><strong>Size: </strong> {orderItem?.product?.sizes}</p>
          </div>
       </div>
    </div>
  )
}

export default OrderItem
