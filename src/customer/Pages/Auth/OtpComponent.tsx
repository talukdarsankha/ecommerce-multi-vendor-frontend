

import React, { useState } from "react";

function OtpComponent({otps,handleOtpChange,handleKeyDownForOtp, canResend, handleResendOtp, timer}:{otps:any, handleOtpChange:any ,handleKeyDownForOtp:any , canResend:any, handleResendOtp:any, timer:any}) {
  
 // const [otp, setOtp] = useState(Array(6).fill(""));

  // const handleChange = (element: HTMLInputElement, index: number) => {
  //   const value = element.value;

  //   // Only accept numeric input
  //   if (/^[0-9]$/.test(value) || value === "") {
  //     const newOtp = [...otp];
  //     newOtp[index] = value;
  //     setOtp(newOtp);

  //     // Move focus to the next input if valid
  //     if (value && element.nextElementSibling) {
  //       (element.nextElementSibling as HTMLInputElement).focus();
  //     }
  //   }
  // };

  // const handleKeyDown = (
  //   event: React.KeyboardEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   if (event.key === "Backspace" && !otp[index]) {
  //     // Move focus to the previous input
  //     if (event.currentTarget.previousElementSibling) {
  //       (event.currentTarget.previousElementSibling as HTMLInputElement).focus();
  //     }
  //   }
  // }; 
  

    return (
        <div>
        <div className="flex gap-2 justify-center mt-4">
          {otps.map((value:any, index:number) => (
            <input
              className="border-2 border-gray-300 rounded-lg p-2 text-center text-xl focus:outline-none focus:border-blue-500 w-11 h-11 md:w-13 md:h-13"
              key={index}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleOtpChange(e.target, index)}
              onKeyDown={(e) => handleKeyDownForOtp(e, index)}
            />
          ))}
        </div>
  
        <div className="text-left mt-4">
          {canResend ? (
            <button
              className="text-blue-500 font-medium"
              onClick={handleResendOtp}
            >
              Resend OTP
            </button>
          ) : (
            <p className="text-gray-500">Resend OTP in {timer} seconds</p>
          )}
        </div>
      </div>
  )
}

export default OtpComponent


