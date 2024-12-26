import React from 'react'
import ReviewCard from './ReviewCard'
import { Box, Divider, Grid, LinearProgress, Rating, ThemeProvider } from '@mui/material'
import CustomTheme from '../../../Theme/CustomTheme'
import Navbar from '../../Component/Navbar'
import { useAppSelector } from '../../../Redux/Store'

function Review() {

  const {customerProduct} = useAppSelector(store=>store);
  
  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
      <Navbar/>
     </ThemeProvider>

     <div className='px-5 lg:px-12 py-5 flex flex-col lg:flex-row gap-20'>
        <section className='lg:h-screen lg:sticky top-0 mb-10  w-full md:w-1/2 space-y-2'>
            <img className='rounded-md object-cover object-center' src={customerProduct.product?.images?.[0]} alt="" />
            <div>
              <h1 className='font-bold text-lg text-slate-700'>{customerProduct.product?.seller?.businessDetails?.businessName}</h1>
                <p className='text-slate-500 font-semibold'>{customerProduct.product?.title}</p>
            </div>

            <div className='price flex items-center gap-3 mt-5 text-2xl'>
                  <span className='font-sans text-gray-800'> ₹{customerProduct.product?.sellingPrice}</span>
                  <span className='line-through text-gray-400'> ₹{customerProduct.product?.mrpPrice}</span>
                  <span className='font-semibold text-customColor'> {customerProduct.product?.discountedPercent}% off</span>
            </div>

        </section>

        <section className="w-full space-y-4">

        <h1 className='font-bold text-lg text-slate-700'>Review & Ratings</h1>
        
        <div className='w-full border rounded-md p-6'>
          <div className='flex items-center gap-3 pb-5'>
            <Rating readOnly value={4.5} precision={.5} />
            <span className='text-slate-400'>Ratings</span>
          </div>

          <h1 className="font-semibold text-lg pb-4">Recent Review and Ratings</h1>
            <div className="border p-5">
              <Grid container spacing={7}>             
                <Grid item xs={12} md={12}>
                  <h1 className="text-xl font-semibold pb-2">Product Ratings</h1>
                  <div className='flex items-center space-x-5'>
                    <Rating value={4.6} precision={.5} readOnly />
                    <p className="opacity-50">254 ratings</p>
                  </div>
                  <Box className='mt-5 space-y-3'>
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Excelent</p>
                      </Grid>
                      <Grid item xs={8}>
                        <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={40} color='success'/>
                      </Grid>
                      
                    </Grid>
                    
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Good</p>
                      </Grid>
                      <Grid item xs={8}>
                        <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={25} color='primary'/>
                      </Grid>
                      
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Average</p>
                      </Grid>
                      <Grid item xs={8}>
                        <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={20} color='warning'/>
                      </Grid>
                    
                    </Grid>
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>poor</p>
                      </Grid>
                      <Grid item xs={8}>
                        <LinearProgress sx={{bgcolor:'#d0d0d0',borderRadius:4,height:7}} variant='determinate' value={10} color='error'/>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </div>
          
        </div>

          {[1,1,1,11,,1,11,1,1,1].map((item,i)=>
            <div>
              <ReviewCard key={i}/>
              <Divider/>
            </div>
          )}
        </section>
      </div>
     
    </div>
   
  )
}

export default Review
