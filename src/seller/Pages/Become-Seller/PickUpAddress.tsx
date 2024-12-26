import { Box, Grid2, TextField } from '@mui/material'
import React from 'react'

function PickUpAddress({formik}:any) {
  return (
    <Box>
         <p className='text-2xl font-bold text-center pb-5 opacity-60'>Address Details</p>

            <Grid2 container spacing={1}>
               <Grid2 size={{xs:12}}>
                  <TextField
                  fullWidth
                  label="Name"
                  name='pickUpAddress.name'
                  value={formik.values.pickUpAddress.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.pickUpAddress?.name && formik.errors.pickUpAddress?.name}
                  error={formik.touched.pickUpAddress?.name && Boolean(formik.errors.pickUpAddress?.name)}
                  />
               </Grid2>

               <Grid2 size={{xs:6}}>
                 <TextField
                  fullWidth
                  label="Mobile"
                  name="pickUpAddress.mobile" // For address mobile
                  value={formik.values.pickUpAddress.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={ formik.touched.pickUpAddress?.mobile && formik.errors.pickUpAddress?.mobile}
                  error={formik.touched.pickUpAddress?.mobile && Boolean(formik.errors.pickUpAddress?.mobile)}
                  />
               </Grid2>

               <Grid2 size={{xs:6}}>
                  <TextField
                  fullWidth
                  label="Pin Code"
                  name='pickUpAddress.pinCode'
                  onBlur={formik.handleBlur}
                  value={formik.values.pickUpAddress.pinCode}
                  onChange={formik.handleChange}
                  helperText={ formik.touched.pickUpAddress?.pinCode && formik.errors.pickUpAddress?.pinCode}
                  error={formik.touched.pickUpAddress?.pinCode && Boolean(formik.errors.pickUpAddress?.pinCode)}
                  />
               </Grid2>

               <Grid2 size={{xs:12}}>
                  <TextField
                  fullWidth
                  label="Locality/Town"
                  name='pickUpAddress.locality'
                  value={formik.values.pickUpAddress.locality}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  helperText={ formik.touched.pickUpAddress?.locality && formik.errors.pickUpAddress?.locality}
                  error={formik.touched.pickUpAddress?.locality && Boolean(formik.errors.pickUpAddress?.locality)}
                  />
               </Grid2>

               <Grid2 size={{xs:6}}>
                  <TextField
                  fullWidth
                  label="City"
                  name='pickUpAddress.city'
                  onBlur={formik.handleBlur}
                  value={formik.values.pickUpAddress.city}
                  onChange={formik.handleChange}
                  helperText={ formik.touched.pickUpAddress?.city && formik.errors.pickUpAddress?.city}
                  error={formik.touched.pickUpAddress?.city && Boolean(formik.errors.pickUpAddress?.city)}
                  />
               </Grid2>

               <Grid2 size={{xs:6}}>
                  <TextField
                  fullWidth
                  label="State"
                  name='pickUpAddress.state'
                  onBlur={formik.handleBlur}
                  value={formik.values.pickUpAddress.state}
                  onChange={formik.handleChange}
                  helperText={ formik.touched.pickUpAddress?.state && formik.errors.pickUpAddress?.state}
                  error={formik.touched.pickUpAddress?.state && Boolean(formik.errors.pickUpAddress?.state)}
                  />
               </Grid2>

               <Grid2 size={{xs:12}}>
                  <TextField
                  fullWidth
                  label="Address (House No, Buliding, Street)"
                  name='pickUpAddress.address'
                  onBlur={formik.handleBlur}
                  value={formik.values.pickUpAddress.address}
                  onChange={formik.handleChange}
                  helperText={ formik.touched.pickUpAddress?.address && formik.errors.pickUpAddress?.address}
                  error={formik.touched.pickUpAddress?.address && Boolean(formik.errors.pickUpAddress?.address)}
                  />
               </Grid2>

            </Grid2>
        </Box>
  )
}

export default PickUpAddress
