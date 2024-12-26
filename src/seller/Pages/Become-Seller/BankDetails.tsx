import { Box, TextField } from '@mui/material'
import React from 'react'

function BankDetails({formik}:any) {
  return (
    <Box>
    <p className='text-center text-xl font-bold pb-9'>Bank Details</p>

    <div className='space-y-5'>
       <TextField
         fullWidth
         label="Account Number"
         name='bankDetails.accountNumber'
         value={formik.values.bankDetails.accountNumber}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         helperText={ formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
         error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
        />

       <TextField
         fullWidth
         label="IFSC Code"
         name='bankDetails.ifscCode'
         value={formik.values.bankDetails.ifscCode}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         helperText={ formik.touched.bankDetails?.ifscCode && formik.errors.bankDetails?.ifscCode}
         error={formik.touched.bankDetails?.ifscCode && Boolean(formik.errors.bankDetails?.ifscCode)}
        />

       <TextField
         fullWidth
         label="Account Holder Name"
         name='bankDetails.accountHolderName'
         value={formik.values.bankDetails.accountHolderName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         helperText={formik.touched.bankDetails?.accountHolderName && formik.errors.bankDetails?.accountHolderName}
         error={formik.touched.bankDetails?.accountHolderName && Boolean(formik.errors.bankDetails?.accountHolderName)}
         />

    </div>
 </Box>
  )
}

export default BankDetails
