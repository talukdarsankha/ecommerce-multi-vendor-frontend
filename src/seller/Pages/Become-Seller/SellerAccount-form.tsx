import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React, { act } from 'react'
import TaxDetailsForm from './TaxDetailsForm';
import { useFormik } from 'formik';


import * as YUP from 'yup';
import PickUpAddress from './PickUpAddress';
import BankDetails from './BankDetails';
import BussinessDetails from './BussinessDetails';
import { useAppDispatch } from '../../../Redux/Store';
import { sellerSignup } from '../../../Redux/Auth/AuthSlice';


const steps = [
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Bussiness Details"

]


const validationSchema = YUP.object().shape({

  sellerName: YUP.string().required("Seller Name is Required"),
  email: YUP.string().required("Email is Required").email("Invalid Email Address"),
  mobile: YUP.string().required("Mobile No. is Required").matches(/^[7-9][0-9]{9}$/, "Invalid mobile number"),
  gstin: YUP.string().required("GSTIN is Required").matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GSTIN"),

  pickUpAddress: YUP.object().shape({
    name: YUP.string().required("Pickup Name is Required"),
    city: YUP.string().required("City is Required"),
    state: YUP.string().required("State is Required"),
    locality: YUP.string().required("Locality is Required"),
    address: YUP.string().required("Address is Required"),
    mobile: YUP.string().required("Mobile No. is Required").matches(/^[7-9][0-9]{9}$/, "Invalid mobile number"),
    pinCode: YUP.string().required("Pin Code is Required").matches(/^[1-9][0-9]{5}$/, "Invalid PIN code"),
  }),
  bankDetails: YUP.object().shape({
    accountNumber: YUP.string().required("Account Number is Required").matches(/^\d{9,18}$/, "Invalid Account Number"),
    ifscCode: YUP.string().required("IFSC Code is Required").matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code (e.g., SBIN0123456)" ),
    accountHolderName: YUP.string().required("Account Holder Name is Required"),
  }),

  businessDetails: YUP.object().shape({
    businessName: YUP.string().required("Business Name is Required")
  }),
});


  


function SellerAccountForm() {

    const [activeStep, setActiveStep] = React.useState(0);

    const handleStep=(val:number)=>()=>{
        if(activeStep===steps.length-1){
            setActiveStep(activeStep+val);
           formik.handleSubmit();
        }else{
            setActiveStep(activeStep+val);
        }
        
    }

    const dispatch = useAppDispatch();

    const formik=useFormik({
        initialValues:{
          sellerName:"",
          email:"",
          mobile:"",
          gstin:"",
          pickUpAddress:{
            name:"",
            city:"",
            state:"",
            locality:"",
            address:"",
            mobile:"",
            pinCode:""
          },
          bankDetails:{
            accountNumber:"",
            ifscCode:"",
            accountHolderName:""
          },
          businessDetails:{
            businessName:"",
            businessEmail:"",
            businessMobile:"",
            businessAddress:"",
            logo:"",
            banner:""
          }
         
    
        },
        validationSchema:validationSchema, 
        onSubmit:(values)=>{
          console.log("formik values", values);        
          dispatch(sellerSignup(values))   
        }
      })
    
    return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
         {steps.map((label,index)=>(
            <Step key={index}>
               <StepLabel>{label}</StepLabel>
            </Step>
         ))}
      </Stepper>

      <section className='py-2'>
        {activeStep===0?
         <TaxDetailsForm formik={formik}/>
         : activeStep==1?
           <PickUpAddress formik={formik} />
          :activeStep==2? <BankDetails formik={formik} />
          : <BussinessDetails formik={formik} />
         }
      </section>

      <section className='flex justify-between items-center pt-3'>
         <Button onClick={handleStep(-1)} variant='contained' disabled={activeStep===0}>Back</Button>
         <Button onClick={handleStep(1)} variant='contained' disabled={activeStep>=steps.length}> {activeStep===steps.length-1?"Create Account":"Continue"} </Button>
      </section>
    </div>
  )
}

export default SellerAccountForm





// 27ABCDE1234F1Z5 GSTIN
// HDFC0005678 – For HDFC Bank
// 123456789 – A 9-digit account number.
