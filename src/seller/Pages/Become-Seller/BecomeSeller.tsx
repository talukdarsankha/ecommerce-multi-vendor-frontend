import React, { useState } from 'react'
import SellerAccountForm from './SellerAccount-form';
import SellerLoginForm from './SellerLoginForm';
import { Button, ThemeProvider } from '@mui/material';



import becomeSellerAuthbg from './become-seller-auth-bg.png';
import CustomTheme from '../../../Theme/CustomTheme';
import Navbar from '../../../customer/Component/Navbar';




function BecomeSeller() {

    const [islogin,setIslogin] = useState(true);

    const handleShowLogin = ()=>{
        setIslogin(!islogin);
    }



  return (
    <div>
      <ThemeProvider theme={CustomTheme}>
        <Navbar/>
       </ThemeProvider>

      <div className='grid md:gap-10 grid-cols-3'>
        <section className='col-span-3 md:col-span-2 lg:col-span-1 p-10 shadow-2xl rounded-b-md'>
            { !islogin? <SellerAccountForm/> : <SellerLoginForm/>}

            <div className='mt-10 space-y-2'>
              <h1 className='text-center text-sm font-medium'>
              {islogin?"don't have an account ?":"have account ?"}
              </h1>
              <Button 
              onClick={handleShowLogin}
              fullWidth 
              variant='outlined'  
              sx={{py:"11px"}}>
                  {islogin?"Register":"Login"}
              </Button>
              <img className=' md:hidden h-full w-full' src={becomeSellerAuthbg} alt="" />
            </div>
          </section>     

          <section className='hidden md:block gap-3 md:col-span-1 lg:col-span-2 py-7'>
                <div className='space-y-3 text-center pb-2'>
                  <h1 className='text-3xl font-bold text-gray-600'>Join the Marketplace</h1>
                  <p className='font-bold text-customColor'>Boost Your Selling</p>
                </div>
                <div className='w-full px-5 object-cover origin-center'>
                    <img className='h-full w-full' src={becomeSellerAuthbg} alt="" />
                </div>
          </section> 
      </div>
    </div>
   
  )
}

export default BecomeSeller
