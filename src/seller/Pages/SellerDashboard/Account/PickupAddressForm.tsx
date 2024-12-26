import { Box, Button, Grid2, TextField } from '@mui/material';
import { useFormik } from 'formik'
import React from 'react'

import * as YUP from 'yup';



const validationSchema = YUP.object().shape({
      city: YUP.string().required("City is Required"),
      state: YUP.string().required("State is Required"),
      address: YUP.string().required("Address is Required"),
      mobile: YUP.string().required("Mobile No. is Required").matches(/^[7-9][0-9]{9}$/, "Invalid mobile number"),
      pinCode: YUP.string().required("Pin Code is Required").matches(/^[1-9][0-9]{5}$/, "Invalid PIN code"),

})



function PickupAddressForm() {

  const formik=useFormik({
     initialValues:{
      city:"",
      state:"",
      address:"",
      mobile:"",
      pinCode:""
     },
     enableReinitialize: true, // Ensure form reinitializes when findUser updates
     validationSchema:validationSchema,
     onSubmit:(values)=>{
       console.log(values,"formik details");
     }
  })
  
  return (
    <form onSubmit={formik.handleSubmit} >
    <Grid2 container spacing={1}>

       <Grid2 size={{xs:6}}>
          <TextField
          fullWidth
          label="Mobile"
          name='mobile'
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
          onChange={formik.handleChange}
          helperText={formik.touched.mobile && formik.errors.mobile}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          />
       </Grid2>

       <Grid2 size={{xs:6}}>
          <TextField
          fullWidth
          label="Pin Code"
          name='pinCode'
          onBlur={formik.handleBlur}
          value={formik.values.pinCode}
          onChange={formik.handleChange}
          helperText={formik.touched.pinCode && formik.errors.pinCode}
          error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
          />
       </Grid2>

       <Grid2 size={{xs:12}}>
          <TextField
          fullWidth
          label="Address (House No, Buliding, Street)"
          name='address'
          onBlur={formik.handleBlur}
          value={formik.values.address}
          onChange={formik.handleChange}
          helperText={formik.touched.address && formik.errors.address}
          error={formik.touched.address && Boolean(formik.errors.address)}
          />
       </Grid2>

       <Grid2 size={{xs:6}}>
          <TextField
          fullWidth
          label="City"
          name='city'
          onBlur={formik.handleBlur}
          value={formik.values.city}
          onChange={formik.handleChange}
          helperText={formik.touched.city && formik.errors.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
          />
       </Grid2>

       <Grid2 size={{xs:6}}>
          <TextField
          fullWidth
          label="State"
          name='state'
          onBlur={formik.handleBlur}
          value={formik.values.state}
          onChange={formik.handleChange}
          helperText={formik.touched.state && formik.errors.state}
          error={formik.touched.state && Boolean(formik.errors.state)}
          />
       </Grid2>

      <Grid2 size={{xs:12}}>
        <Button
        type='submit'
         sx={{py:"1rem", bgcolor:"teal",mt:"1rem"}}
          fullWidth variant='contained'>Update Address</Button>
      </Grid2>
      
    </Grid2>
 </form>
  )
}

export default PickupAddressForm
