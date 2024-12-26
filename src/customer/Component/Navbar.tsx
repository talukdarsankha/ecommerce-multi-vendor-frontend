import { Avatar, Badge, Box, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import NavbarSheet from './NavbarSheet';
import { mainCategory } from '../../Data/Category/mainCategoty';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../Redux/Store';
import { deepPurple } from '@mui/material/colors';


function Navbar() {

  const theme = useTheme();
  const islarge = useMediaQuery(theme.breakpoints.up("lg"));


  const [showNavbarSheet, setShowNavbarSheet] = useState(false);
  const [selectedcategory, setSelectedcategory] = useState("men");


  const navigate = useNavigate();

  const {auth, customer, cart, wishList} = useAppSelector((store) => store);

  return (

      <Box className="sticky top-0 left-0 right-0 bg-white z-20">

         <div className='flex items-center justify-between px-2 lg:px-5 md:px-14 h-[70px] border-b'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-1'>
                    { !islarge && <IconButton>
                        <MenuIcon/>
                    </IconButton>}
                    <h1 onClick={()=>navigate("/")} className='logo text-lg md:text-2xl cursor-pointer'>
                        Ecommerce-Store
                    </h1>
                </div>

                { islarge && <ul className='flex gap-2 items-center text-sm font-medium '>
                 { mainCategory.map((item,i)=>
                 <li
                 onMouseLeave={()=>{
                    setShowNavbarSheet(false);
                 }}

                 onMouseEnter={()=>{
                    setShowNavbarSheet(true);
                    setSelectedcategory(item.categoryId)
                 }}
                 key={i} className='maincategory cursor-pointer text-gray-500 hover:text-customColor hover:border-b-2 border-customColor h-[70px] flex items-center px-2 py-1'>
                    {item.name}
                 </li>
                )}
                </ul> }
            </div>

           <div className='flex lg:gap-5'>
            <IconButton><SearchIcon/></IconButton>

                { (customer.userProfile?.email) ? <Button onClick={()=>navigate("/account/orders")} className='flex items-center gap-2'>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>
                     {customer.userProfile?.fullname?.[0].toUpperCase()}
                  </Avatar>
                </Button> :
                <Button onClick={()=>navigate("/auth")} variant='outlined'>Login</Button>
                }

               <IconButton onClick={()=>navigate("/wishlist")}>
                   <Badge badgeContent={wishList.userWishList?.products?.length} color="primary">
                   <FavoriteBorderIcon/>
                   </Badge>
               </IconButton> 

               <IconButton onClick={()=>navigate("/cart")}>
                   <Badge badgeContent={cart.userCart?.cartItems?.length} color="primary">
                    <AddShoppingCartIcon className='text-green-600'/>
                   </Badge>
               </IconButton>


              { islarge && <Button onClick={()=>navigate("/seller/")} variant='outlined'  >
                <AddBusinessIcon/>
                Become Seller
               </Button>}
               
           </div>
         </div>

        { showNavbarSheet && selectedcategory &&
         <div className='absolute top-[4.41rem] left-20 right-20'
         onMouseLeave={()=>{setShowNavbarSheet(false)}}
         onMouseEnter={()=>{setShowNavbarSheet(true)}}
         >
         <NavbarSheet selectedCategory={selectedcategory}/>
         </div>
        }

      </Box>

  )
}

export default Navbar
