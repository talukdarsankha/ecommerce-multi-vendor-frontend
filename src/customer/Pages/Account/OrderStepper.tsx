import { Cancel, CheckCircle, Close, FiberManualRecord } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react'


const steps = [
    {name:"Order Confirmed",description:"on Thu, 11 Jul",value:"CONFIRMED"},
    {name:"Packed",description:"Item Packed in Dispatch Warehouse",value:"PACKED"},
    {name:"Shipped",description:"by Mon 15, Jul",value:"SHIPPED"},
    {name:"Arriving",description:"by 12 Jul - 14 Jul",value:"ARRIVING"},
    {name:"Delivered",description:"by Mon 15, Jul",value:"DELIVERED"}
]


const cancelSteps = [
{name:"Order Confirmed",description:"on Thu, 11 Jul",value:"CONFIRMED"},
{name:"Order Canceled",description:"by Mon 15, Jul",value:"CANCELED"}
]

const currentStep = 2;

function OrderStepper({orderStep}:any) {

    const [step,setStep] = useState(steps);

    useEffect(()=>{
       if(orderStep==="CANCELED"){
        setStep(cancelSteps)
       }else{
        setStep(steps)
       }
    },[orderStep])

  return (
    <Box className="my-10">
      {step.map((item,i)=>
        <div key={item.value} className='flex px-4'>
            <div className='flex flex-col items-center'>
                <Box sx={{zIndex:-1}}
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 
                    ${(orderStep==="CANCELED" && i==1) ? "bg-gray-200 text-red-500" 
                      : (orderStep==="CANCELED" && i<1) ? "bg-gray-300 text-sky-500" 
                      : (orderStep !="CANCELED" && i<=currentStep)?"bg-gray-200 text-sky-500" : "bg-gray-300 text-gray-600"}`}
                 >
                 {(item.value === orderStep && orderStep==="CANCELED") ? (
                      <Cancel />
                  ) : item.value === orderStep ? (
                      <CheckCircle /> // This is your "else-if" condition (use any icon you need here)
                  ) : (
                      <FiberManualRecord /> // This is the "else" condition
                  )}

                </Box>
                {i<step.length-1 && (
                  <div className={`border h-20 w-[3px] ${i<currentStep? "bg-sky-500":"bg-gray-600"} `}></div>
                )}
            </div>

            <div className='ml-2 w-full'>
               <div
               className={`${(orderStep==="CANCELED" && item.value==orderStep) ?"bg-red-600 text-white font-semibold rounded-md p-2 -translate-y-3":""}  
               ${orderStep !="CANCELED" && item.value===orderStep?"text-white bg-sky-500 font-semibold rounded-md p-2 -translate-y-3":""} `}
                >
                 <p>{item.name}</p>
                 <p className={`text-sm ${item.value==orderStep?"text-white":"text-gray-500"}`}>{item.description}</p>
               </div>
            </div>
        </div>
      )}
    </Box>
  )
}

export default OrderStepper
