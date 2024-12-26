import React from 'react'
import ElectricCategory from './Electric/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Button, ThemeProvider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import bannerImage from './becomeSeller_banner_image.jpg';
import CustomTheme from '../../../Theme/CustomTheme'
import Navbar from '../../Component/Navbar'

function Home() {
  const navigate = useNavigate();
  return (
    <div className='space-y-5 lg:space-x-8 relative'>
      <ThemeProvider theme={CustomTheme}>
        <Navbar/>
      </ThemeProvider>
      
     <ElectricCategory/>
     <CategoryGrid/>
     <Deal/>
     <ShopByCategory/>

     <section className='mb-5 md:py-11 px-5 lg:px-16 relative h-[200px] md:h-[300px] lg:h-[400px] 2xl:h-[850px] object-cover'>
      <img className='w-full h-full rounded-md' src={bannerImage} alt="" />
      {/* https://res-console.cloudinary.com/doa7jctor/thumbnails/v1/image/upload/v1730875166/RS1Db21tZXJjZV9GYWNlYm9va19BZF93cnVpbHQ=/preview */}

      <div className='absolute top-1/2 left-16 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
          <h1>Sell Your Product</h1>
          <p className='text-lg lg:text-2xl'>in this <span className='logo'>Ecommerce Store</span> </p>
          <div className='pt-6'>
            <Button onClick={()=>navigate("/seller/")} variant='contained' sx={{bgcolor:"#00927c"}}>
            <AddBusinessIcon/> Become Seller
            </Button>

            
          </div>

      </div>
     </section>
     


    </div>
  )
}

export default Home
