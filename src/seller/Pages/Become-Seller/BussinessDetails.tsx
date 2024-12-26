import { Box, TextField } from '@mui/material'
import React from 'react'

function BussinessDetails({formik}:any) {
  return (
    <Box>
    <p className='text-center text-xl font-bold pb-9'>Bussiness Details</p>

    <div className='space-y-5'>
       <TextField
         fullWidth
         label="Business Name"
         name='businessDetails.businessName'
         value={formik.values.businessDetails.businessName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         helperText={formik.touched.businessDetails?.businessName && formik.errors.businessDetails?.businessName}
         error={formik.touched.businessDetails?.businessName && Boolean(formik.errors.businessDetails?.businessName)}
         />

       <TextField
         fullWidth
         label="Seller Name"
         name='sellerName'
         value={formik.values.sellerName}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         helperText={formik.touched.sellerName && formik.errors.sellerName}
         error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
         />

        <TextField
            fullWidth
            label="Email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
         />

        
    </div>
 </Box>
  )
}

export default BussinessDetails
