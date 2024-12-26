import React from 'react'
import SellerDrawerList from '../../Component/SellerDrawerList'
import SellerRoutes from '../../../Routes/SellerRoutes';

function SellerDashboard() {

  const toggleDrawer = ()=>{
    console.log("toggleDrawer");
  }

  

  return (
    <div className='lg:flex lg:h-[100vh] pt-2'>
       <div className='hidden lg:block h-full'>
         <SellerDrawerList toggleDrawer={toggleDrawer}/>
       </div>

       <div className='p-5 w-full lg:w-[80%]  h-full overflow-y-auto'>
         <SellerRoutes/>
       </div>
    </div> 
  )
}
 
export default SellerDashboard
