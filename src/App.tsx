import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';

import CustomTheme from './Theme/CustomTheme';
import Home from './customer/Pages/Home/Home';
import Product from './customer/Pages/Product/Products';
import ProductDetails from './customer/Pages/Product/ProductDetails';
import Review from './customer/Pages/Review/Review';
import Cart from './customer/Pages/Cart/Cart';
import Checkout from './customer/Pages/CheckOut/Checkout';
import Account from './customer/Pages/Account/Account';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BecomeSeller from './seller/Pages/Become-Seller/BecomeSeller';
import SellerDashboard from './seller/Pages/SellerDashboard/SellerDashboard';
import AdminDashboard from './admin/Pages/AdminDashboard/AdminDashboard';
import Navbar from './customer/Component/Navbar';
import { useAppDispatch, useAppSelector } from './Redux/Store';
import { fetchSellerProfile } from './Redux/Seller/SellerSlice';
import Auth from './customer/Pages/Auth/Auth';
import { fetchCustomerProfile } from './Redux/Customer/CustomerSlice';
import { fetchUserCart } from './Redux/Customer/CartSlice';
import PaymentSuccess from './customer/Pages/CheckOut/PaymentSuccess';
import { fetchUserWishList } from './Redux/Customer/WishList';
import WishList from './customer/Pages/WishList/WishList';

function App() {


  const dispatch = useAppDispatch();
  const {auth,customer,seller} = useAppSelector(store=>store);

  const navigate = useNavigate();

  useEffect(()=>{
    const jwt = localStorage.getItem("jwt");
    if(jwt){
      dispatch(fetchSellerProfile(jwt || ""));

      dispatch(fetchCustomerProfile(jwt || ""));
    }
  },[auth.jwt])


    
  useEffect(()=>{
    dispatch(fetchUserCart(localStorage.getItem("jwt") || ""))
    dispatch(fetchUserWishList(localStorage.getItem("jwt") || ""))
  },[customer.userProfile?.email])


  return (
    <div>
 

      {/* <Home/> */}
      {/* <Product/>       */}
      {/* <ProductDetails/> */}
      {/* <Review/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Account/> */}

      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/product/:category' element={<Product/>} />
         <Route path='/review/:productId' element={<Review/>} />
         <Route path='/productDetails/:productId' element={<ProductDetails/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/wishlist' element={<WishList/>} />
         <Route path='/checkout' element={<Checkout/>} />
         <Route path='/payment-success/:orderId' element={<PaymentSuccess/>} />
         <Route path='/account/*' element={<Account/>} />
         <Route path='/auth' element={<Auth/>} />

         <Route path='/seller/*' element={seller.sellerprofile?.email ? <SellerDashboard/> : <BecomeSeller/>} />
         <Route path='/admin/*' element={<AdminDashboard/>} />
      </Routes>
      
    </div>
  );
}

export default App;
