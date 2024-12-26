import { Add, Close, Remove } from '@mui/icons-material'
import { Button, Divider, IconButton } from '@mui/material'
import React from 'react'
import { cartItem } from '../../../Types/Cart'
import { useAppDispatch } from '../../../Redux/Store'
import { deleteCartItemFromCart, updateCartItem } from '../../../Redux/Customer/CartSlice'

function CartItem({item}:{item:cartItem}) {


   const dispatch = useAppDispatch();

   const handelUpdateQunatity = (val:number)=>{
    dispatch(updateCartItem({jwt:localStorage.getItem("jwt") || "",cartItemId:item?.id, cartItem:{quantity:item?.quantity + (val)}}))
   }

   const deleteCartItem = ()=>{
     dispatch(deleteCartItemFromCart({jwt:localStorage.getItem("jwt") || "",cartItemId:item?.id}))
   }

  return (
    <div className='border rounded-md relative'>
       <div className='p-5 flex gap-3'>
          <div>
            <img className='w-[120px] rounded-md' src={item?.product?.images[0]} alt="" />
          </div>

          <div className='space-y-2'>
            <h1 className='font-semibold text-lg'>{item?.product?.seller?.businessDetails?.businessName}</h1>
            <p>{item?.product?.title}</p>
            <p className='text-gray-500 text-sm'><strong>Sold By: </strong>{item?.product?.seller?.sellerName}</p>
            <p className='text-sm'>7 Days replacement available</p>
            <p className='text-sm'><strong>quantity : </strong>{item?.quantity}</p>
          </div>
       </div>

       <Divider/>
        <div className="px-5 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2 w-[140px] justify-between">
                <Button
                    onClick={() => handelUpdateQunatity(-1)}
                    variant="outlined"
                    disabled={item?.quantity <= 1}
                >   
                  <Remove /> 
                </Button>
                <span> {item?.quantity} </span>
                <Button
                   onClick={() => handelUpdateQunatity(1)} 
                variant="outlined">
                     <Add />
                </Button>
            </div>

            <p className='font-semibold'>₹{item?.sellingPrice}</p>
       </div>

       <div onClick={deleteCartItem} className='absolute top-1 right-1'>
         <IconButton> <Close/> </IconButton>
       </div>

    </div>
  )
}

export default CartItem
