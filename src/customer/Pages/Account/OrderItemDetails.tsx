import { Button, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import PaymentsSharpIcon from '@mui/icons-material/PaymentsSharp';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { fetchOrderById, fetchOrderItemById } from '../../../Redux/Customer/OrderSlice';

function OrderItemDetails() {

  const dispatch = useAppDispatch();
  const {userOrder} = useAppSelector(store=>store);
   
  const {orderId, orderItemId} = useParams();

  useEffect(()=>{
    dispatch(fetchOrderById({jwt:localStorage.getItem("jwt") || "", orderId:Number(orderId)}));

     dispatch(fetchOrderItemById({jwt:localStorage.getItem("jwt") || "", orderItemId:Number(orderItemId)}));
  },[orderId])


  const navigate = useNavigate();


  return (
    <div className='space-y-5'>
        <section className='p-5 flex flex-col gap-5 justify-center items-center'>
          <div>
            <img className='w-[120px] rounded-md' src={userOrder.orderItem?.product?.images?.[0]} alt="productImg" />
          </div>

          <div className='space-y-1 text-center text-sm'>
            <h1 className='font-semibold  lg:text-lg'>{userOrder.orderItem?.product?.title}</h1>
            <p> {userOrder.orderItem?.product?.description}</p>
            <p className='text-gray-500 mt-3'><strong>Size: </strong> {userOrder.orderItem?.product?.sizes}
              <span className='ml-3 font-semibold'>{userOrder.orderItem?.product?.seller?.businessDetails?.businessName}</span>
            </p>
          </div>

           <Button color='warning'>Write Review</Button>
       </section>

       <section className='border py-5'>
         <OrderStepper orderStep={"SHIPPED"}/>
       </section>

       <section className='border p-5'>
         <h1 className='font-bold pb-3'>Delivery Address</h1>
         <div className='text-sm space-y-2'>
            <div className='flex gap-5 font-medium'>
               <p>{userOrder.currentOrder?.shippingAddress?.name}</p>
               <Divider flexItem orientation='vertical' />
               <p>{userOrder.currentOrder?.shippingAddress?.mobile}</p>
            </div>
            <p>{userOrder.currentOrder?.shippingAddress?.city}, {userOrder.currentOrder?.shippingAddress?.state} - {userOrder.currentOrder?.shippingAddress?.pinCode}  </p>
            <p>{userOrder.currentOrder?.shippingAddress?.address} </p>

         </div>
       </section>

       <section className='border space-y-4 p-5'>
          <div className='flex justify-between'>
             <div>
              <p className='font-bold'>Total Price</p>
             <p>You Saved <span className="text-sm font-semibold text-teal-700"> ₹ {(userOrder.orderItem?.mrpPrice || 0) - (userOrder.orderItem?.sellingPrice || 0)}.00 </span> on this order </p> 
             </div>
             <p className='font-medium'>₹ {userOrder.orderItem?.sellingPrice}.00</p>
          </div>
         
         <div className='bg-teal-100 px-5  py-2 text-sm font-medium flex gap-3 items-center'>
            <PaymentsSharpIcon/>
            <p>Payment Already Done</p>
         </div>
         <Divider/>
         <p className='font-medium text-gray-800'><strong>Sold By :</strong> {userOrder.orderItem?.product?.seller?.businessDetails?.businessName}</p>

         <div className='p-5'>
         
         <Button 
         disabled={!true}
         sx={{py:".7rem"}} 
         variant="outlined"
          color='error'
           fullWidth>
         { true ? "Cancel Order" :  "Order Canceled"}
         </Button> 
         
         </div>
       </section>
       
    </div>
  )
}

export default OrderItemDetails
