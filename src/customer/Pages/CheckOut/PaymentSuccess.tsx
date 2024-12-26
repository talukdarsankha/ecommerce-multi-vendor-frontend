import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../Redux/Store";
import { useLocation, useParams } from "react-router-dom";
import { proceedPaymentSuccessOrFailure } from "../../../Redux/Customer/OrderSlice";
import Navbar from "../../Component/Navbar";

function PaymentSuccess() {


    const {orderId} = useParams();
    console.log(orderId)
     
    const dispatch = useAppDispatch();
    const location = useLocation();
    const searchparams = new URLSearchParams(location.search);

    useEffect(()=>{

        const razorpayPaymentId = searchparams.get("razorpay_payment_id");

        dispatch(proceedPaymentSuccessOrFailure({jwt:localStorage.getItem("jwt")|| "",orderId:Number(orderId) , razorpayPaymentId:razorpayPaymentId||""}))
    },[orderId])

  return (
    <div>
      <Navbar/>
      <div className="min-h-[90vh] flex justify-center items-center">
        <div className="bg-teal-500 text-white p-8 w-[90%] lg:w-[40%] border rounded-md h-[45vh] flex flex-col gap-7 items-center justify-center">
          <h1 className="text-3xl font-semibold">Congratulation</h1>
          <h1 className="text-2xl font-semibold">your order get success</h1>
          <div>
            <Button
              color="warning"
              variant="contained"
              onClick={() => (window.location.href = "/")}
            >
              Shopping more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;



// http://localhost:3000/payment-success/954?razorpay_payment_id=pay_PQo4aKYx6Y0KuM&razorpay_payment_link_id=plink_PQo3Z5DK5L72a6&razorpay_payment_link_reference_id=&razorpay_payment_link_status=paid&razorpay_signature=744ca97f7d0359fce535917d970b82cb785ef2a489d09428ed330d0b4c5d8b31
