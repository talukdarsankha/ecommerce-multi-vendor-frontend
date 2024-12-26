import React, { useEffect } from 'react'
import OrderItem from './OrderItem'
import { useAppDispatch, useAppSelector } from '../../../Redux/Store'
import { fetchUserAllOrder } from '../../../Redux/Customer/OrderSlice';

function Orders() {

   const dispatch = useAppDispatch();
   const {userOrder} = useAppSelector(store=>store);

   useEffect(()=>{
      dispatch(fetchUserAllOrder(localStorage.getItem("jwt") || ""));
   },[])

  return (
    <div className='text-sm'>
       <div className='pb-5'>
          <p className='font-semibold'>All Orders</p>
          <p>From Anytime</p>
       </div>

       <div className='space-y-4'>
          { userOrder.orders?.length>0 && userOrder.orders?.map((order)=> order?.orderItems?.map((orderItem,i)=> <OrderItem key={i} order={order}  orderItem={orderItem} /> ) )}
       </div>
    </div>
  )
}

export default Orders
