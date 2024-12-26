import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerDashboard from '../seller/Pages/SellerDashboard/SellerDashboard'
import Products from '../seller/Pages/SellerDashboard/Products/Products'
import AddProducts from '../seller/Pages/SellerDashboard/Products/AddProducts'
import Orders from '../seller/Pages/SellerDashboard/Order/Orders'
import Payments from '../seller/Pages/SellerDashboard/Payments/Payments'
import Transaction from '../seller/Pages/SellerDashboard/Payments/Transaction'
import Profile from '../seller/Pages/SellerDashboard/Account/Profile'
import Dashboard from '../seller/Pages/SellerDashboard/DashBoard/Dashboard'

function SellerRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/add-products' element={<AddProducts/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/payments' element={<Payments/>} />
        <Route path='/transactions' element={<Transaction/>} />
        <Route path='/account' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default SellerRoutes
