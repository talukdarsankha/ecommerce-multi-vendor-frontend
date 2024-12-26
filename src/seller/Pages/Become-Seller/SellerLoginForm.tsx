import React, { useEffect, useState } from "react";

import { useFormik } from "formik";

import * as YUP from "yup";
import { Alert, Box, Button, CircularProgress, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../Redux/Store";
import { sellerLogin, sendLoginRegisterOtp } from "../../../Redux/Auth/AuthSlice";

import OtpInput from "./OtpInput";

const validationSchema = YUP.object().shape({
  email: YUP.string().required("email is Required").email("Invalid Email..."),
  // otp: YUP.string().required("otp is Required").min(6,"Otp must be 6 digit")
});





function SellerLoginForm() {



   const dispatch = useAppDispatch();
   const {auth} = useAppSelector(store=>store);



  //------ for otp input  ------

  const [otps, setOtps] = useState(Array(6).fill(""));

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;

    // Only accept numeric input
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otps];
      newOtp[index] = value;
      setOtps(newOtp);

      // Move focus to the next input if valid
      if (value && element.nextElementSibling) {
        (element.nextElementSibling as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDownForOtp = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !otps[index]) {
      // Move focus to the previous input
      if (event.currentTarget.previousElementSibling) {
        (event.currentTarget.previousElementSibling as HTMLInputElement).focus();
      }
    }
  };


  const [timer, setTimer] = useState(30); // Initial countdown in seconds
  const [canResend, setCanResend] = useState(false);

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval); // Clear interval on unmount
    } else {
      setCanResend(true); // Enable the "Resend OTP" button
    }
  }, [timer]);
  

  //------ for otp input  ------



  
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    
      const otp = otps.join("");
      const updatedValues = { ...values, otp:otp };
      dispatch(sellerLogin(updatedValues));
    },
  });


  const handleSendOtp = () => {
    console.log("send otp email ...", formik.values.email);

    setCanResend(false); // Disable the button again
    setTimer(30); // Reset the timer

    const loginEmail = "signin_" + formik.values.email;
    dispatch(sendLoginRegisterOtp({email: loginEmail, role: "ROLE_SELLER"})
    );
  };
  


  return (
    <Box>

      <h1 className="text-center text-2xl text-customColor font-bold pb-9">
        Login as a seller
      </h1>

      <div className="space-y-5">

        { !auth.otpResponse?.otp && <div className="space-y-5">
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />

          <Button
           disabled={auth.loading}
            onClick={handleSendOtp}
            fullWidth
            variant="contained"
            sx={{ py: "11px", bgcolor: "teal" }}
            >
               {auth.loading ? (
                <CircularProgress color="success" size={24} />
              ) : (
                "Send OTP"
              )}
          </Button>
        </div>}
        

        { auth.otpResponse?.otp && (
          <div className="space-y-4">
            <p className="text-start text-sm text-gray-600 font-medium">
              Enter Otp
            </p>

            <OtpInput otps={otps}  handleOtpChange={handleOtpChange} handleKeyDownForOtp={handleKeyDownForOtp} canResend = {canResend} handleResendOtp={handleSendOtp} timer={timer} />

            {/* <TextField
              fullWidth
              label="OTP"
              name="otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.otp && formik.errors.otp}
              error={formik.touched.otp && Boolean(formik.errors.otp)}
            /> */}

            <Button
              onClick={()=>{formik.handleSubmit()}}
              fullWidth
              variant="contained"
              sx={{ py: "11px", bgcolor: "teal" }}
              >
              Enter Otp
            </Button>
          </div>
        )}

      </div>

      {auth.otpResponse && <div className="my-10">
        <Alert severity={auth.otpResponse?.status}>{auth.otpResponse?.message}</Alert>
      </div>}
    </Box>
  );
}

export default SellerLoginForm;
