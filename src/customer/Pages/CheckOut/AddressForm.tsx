import { Box, Button, Grid2, Modal, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'

import * as YUP from 'yup';
import { useAppDispatch } from '../../../Redux/Store';
import { addAddress } from '../../../Redux/Customer/CustomerSlice';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 400, // width for small screens (xs)
    sm: 500, // width for screens larger than small (sm and up)
  },
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius:4,
  boxShadow: 24,
  outline:"none",
  p: 4
};


const validationSchema = YUP.object().shape({
  name:YUP.string().required("Name is Required"),
  mobile:YUP.string().required("Mobile No. is Required").matches(/^[7-9][0-9]{9}$/,"Invalid mobile number"),
  pinCode:YUP.string().required("PinCode is Required").matches(/^[1-9][0-9]{6}$/, 'Invalid PIN code'),
  address:YUP.string().required("Address is Required"),
  city:YUP.string().required("City is Required"),
  state:YUP.string().required("State is Required"),
  locality:YUP.string().required("Locality is Required")
})


function AddressForm({open,handleClose}:any) {


  const dispatch = useAppDispatch();

  const formik=useFormik({
    initialValues:{
      name:"",
      mobile:"",
      pinCode:"",
      address:"",
      city:"",
      state:"",
      locality:""

    },
    validationSchema:validationSchema,
    onSubmit:(values)=>{
      console.log(values);

      dispatch(addAddress({jwt:localStorage.getItem("jwt") || "",request:values}))
      formik.resetForm();
      handleClose();
    }
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <p className='text-2xl font-bold text-center pb-5 opacity-60'>Address Details</p>

         <form onSubmit={formik.handleSubmit} >
            <Grid2 container spacing={1}>
               <Grid2 size={{xs:12}}>
                  <TextField
                  fullWidth
                  label="Name"
                  name='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.name && formik.errors.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  />
               </Grid2>

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
                  label="Locality/Town"
                  name='locality'
                  onBlur={formik.handleBlur}
                  value={formik.values.locality}
                  onChange={formik.handleChange}
                  helperText={formik.touched.locality && formik.errors.locality}
                  error={formik.touched.locality && Boolean(formik.errors.locality)}
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

              <Grid2 size={{xs:12}}>
                <Button
                type='submit'
                 sx={{py:"1rem", bgcolor:"teal",mt:"1rem"}}
                  fullWidth variant='contained'>Add Address</Button>
              </Grid2>
              
            </Grid2>
         </form>
        </Box>
      </Modal>
    </div>
  )
}

export default AddressForm
