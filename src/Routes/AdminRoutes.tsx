import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewCouponForm from '../admin/Pages/AdminDashboard/Coupon/AddNewCouponForm'
import Coupon from '../admin/Pages/AdminDashboard/Coupon/Coupon'
import ShopByCategory from '../admin/Pages/AdminDashboard/HomePage/ShopByCategory/ShopByCategory'
import Deals from '../admin/Pages/AdminDashboard/HomePage/Deals/Deals'
import Dashboard from '../admin/Pages/AdminDashboard/Dashboard/Dashboard'
import HomePageGrid from '../admin/Pages/AdminDashboard/HomePage/HomePageGrid/HomePageGrid'
import Electronics from '../admin/Pages/AdminDashboard/HomePage/Electronics/Electronics'


function AdminRoutes() {
  return (
    <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/coupons' element={<Coupon/>} />
    <Route path='/add-coupon' element={<AddNewCouponForm/>} />
    <Route path='/home-page-grid' element={<HomePageGrid/>} />
    <Route path='/electric-category' element={<Electronics/>} />
    <Route path='/shop-by-category' element={<ShopByCategory/>} />
    <Route path='/deals' element={<Deals/>} />
  </Routes>
  )
}

export default AdminRoutes
