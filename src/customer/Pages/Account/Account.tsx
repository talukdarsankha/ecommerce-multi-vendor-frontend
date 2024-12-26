import { AccountCircle, LocalMall, Logout } from '@mui/icons-material';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import ClassIcon from '@mui/icons-material/Class';
import { Divider, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Orders from './Orders';
import OrderItemDetails from './OrderItemDetails';
import ProfileSection from './ProfileSection';
import SavedCard from './SavedCard';
import Address from './Address';
import { useAppDispatch, useAppSelector } from '../../../Redux/Store';
import { userLogout } from '../../../Redux/Customer/CustomerSlice';
import Navbar from '../../Component/Navbar';
import CustomTheme from '../../../Theme/CustomTheme';



const menu = [
    {
        name:"Orders",path:"/account/orders",icon:LocalMall
    },
    {
        name:"Profile",path:"/account/",icon:AccountCircle
    },
    {
        name:"Saved Card",path:"/account/saved-card",icon:ClassIcon
    },
    {
        name:"Addresses",path:"/account/addresses",icon:GpsFixedIcon
    },
    {
        name:"Logout",path:"/",icon:Logout
    },
]
  




function Account() {

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("Orders");
    const handleNavigate=(item:any)=>{
       setActiveTab(item.name);
       navigate(item.path);
    }

    const dispatch = useAppDispatch();
    const {customer} = useAppSelector(store=>store);

    const handleLogout=()=>{
       dispatch(userLogout());
     }
    

  return (
   <>
    <ThemeProvider theme={CustomTheme}>
      <Navbar/>
    </ThemeProvider>
    
    <div className='px-5 lg:px-28 mt-10 min-h-screen'>
       <div>
         <h1 className='text-xl font-bold pb-5'>{customer.userProfile?.fullname}</h1>
       </div>
       <Divider/>

       <div className='grid grid-cols-1 lg:grid-cols-3'>
           <section className='col-span-1 lg:border-r lg:pr-5 py-5 lg:h-screen lg:sticky top-20'>
               <div className='space-y-2'>
                { menu.map((item)=>
                 (<div key={item.name} 
                   onClick={()=>{
                      if(item.name==="Logout"){
                        handleLogout()
                      }
                     handleNavigate(item)
                    }}
                    className={` ${activeTab==item.name?"bg-customColor text-white":"text-gray-700"} p-3 rounded-md cursor-pointer  font-semibold hover:bg-customColor hover:text-white`}>
                    <p className='flex items-center space-x-3'> <span> <item.icon/> </span><span>{item.name}</span>   </p>
                 </div>)
                ) }
               </div>
           </section>
           <section className=' lg:col-span-2 lg:pl-5 py-5 h-full'>
             {/* <Orders/> */}
             {/* <OrderItemDetails/> */}
             {/* <ProfileSection/> */}
             {/* <SavedCard/> */}
                <Routes>
                    <Route path='/orders' element={<Orders/>} />
                    <Route path='/' element={<ProfileSection/>} />
                    <Route path='/saved-card' element={<SavedCard/>} />
                    <Route path='/addresses' element={<Address/>} />
                    <Route path='/orders/:orderId/:orderItemId' element={<OrderItemDetails/>} />
                </Routes>
           </section>
       </div>
    </div>
    </>
  )
}

export default Account
