
import { Divider } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../../Redux/Store";

function PriceCard() {

   const {cart} = useAppSelector(store=>store);

  return (
    <div className="space-y-3 p-5">
       <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>₹{cart.userCart?.totalMrpPrice}</span>
       </div>

       <div className="flex justify-between items-center">
          <span>Discounted Price</span>
          <span>₹{cart.userCart?.totalSellingPrice}</span>
       </div>

       <div className="flex justify-between items-center text-green-700 font-medium">
          <span>Discount</span>
          <span>{cart.userCart?.totalDiscount}%</span>
       </div>

       <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>₹40</span>
       </div>

       <div className="flex justify-between items-center">
          <span>Platform Fee</span>
          <span className="text-customColor">Free</span>
       </div>

       <Divider/>

       <div className="flex justify-between items-center font-semibold pt-2">
          <span>Total</span>
          <span>₹{cart.userCart?.totalSellingPrice && cart.userCart?.totalSellingPrice+40}</span>
       </div>

    </div>
  );
}

export default PriceCard;
