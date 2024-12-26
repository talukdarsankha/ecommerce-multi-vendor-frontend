import { Delete } from '@mui/icons-material'
import { Avatar, Box, Grid2, IconButton, Rating } from '@mui/material'
import React from 'react'

function ReviewCard() {
  return (
    <div className='flex justify-between'>
        <Grid2 container spacing={8}>
           <Grid2 size={{xs:1}}>
                <Box>
                    <Avatar className='text-white' sx={{height:40, width:40, bgcolor:"purple"}}>Z</Avatar>
                </Box>
           </Grid2>

           <Grid2 size={{xs:9}}>
               <div className='space-y-2 flex justify-between items-start'>
                    <div>
                        <p className='text-lg font-semibold'>Review</p>
                        <p className='opacity-70'>26-03-2011 16:43</p>

                        <Rating readOnly value={4.5} precision={.5} />
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, odit. </p>

                         <div className='my-2'>
                            <img
                             className='w-24 h-24 object-cover rounded-md'
                             src="https://images.meesho.com/images/products/391850798/muobk_512.webp" alt="" />
                         </div>
                    </div>
                     {/* <IconButton> <Delete sx={{color:"red"}}/> </IconButton>                     */}
               </div>
           </Grid2>

           
        </Grid2>
    </div>
  )
}

export default ReviewCard
