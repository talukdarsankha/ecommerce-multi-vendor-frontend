import { Box, TextField } from '@mui/material'
import React from 'react'

function TaxDetailsForm({formik}:any) {
  return (
    <Box>
       <p className='text-center text-xl font-bold pb-9'>Cantact Details</p>

       <div className='space-y-5'>
          <TextField
            fullWidth
            label="Mobile"
            name='mobile'
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.mobile && formik.errors.mobile}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            />

          <TextField
            fullWidth
            label="GSTIN"
            name='gstin'
            value={formik.values.gstin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            helperText={formik.touched.gstin && formik.errors.gstin}
            error={formik.touched.gstin && Boolean(formik.errors.gstin)}
            />
       </div>
    </Box>
  )
}

export default TaxDetailsForm
