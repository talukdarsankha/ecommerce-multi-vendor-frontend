import React from 'react'
import DrawerList from '../../Component/DrawerList'
import { AccountCircle, AccountCircleOutlined, AddCircle, AddCircleOutline, Category, Dashboard, Discount, DiscountOutlined, ElectricBolt, ElectricBoltOutlined, LocalOffer, LocalOfferOutlined, Logout, LogoutOutlined, SpaceDashboard, ViewQuilt, ViewQuiltOutlined } from '@mui/icons-material'



const menu1 = [
  {
    name:"Dashboard",
    path:"/admin",
    icon: <Dashboard className='text-sky-600'/>,
    activeIcon:<SpaceDashboard className='text-white'/>
  },
  {
    name:"Coupons",
    path:"/admin/coupons",
    icon: <Discount className='text-sky-600'/>,
    activeIcon:<DiscountOutlined className='text-white'/>
  },
  {
    name:"Add Coupon",
    path:"/admin/add-coupon",
    icon: <AddCircle className='text-sky-600'/>,
    activeIcon:<AddCircleOutline className='text-white'/>
  },
  {
    name:"Home Page Grid",
    path:"/admin/home-page-grid",
    icon: <ViewQuilt className='text-sky-600'/>,
    activeIcon:<ViewQuiltOutlined className='text-white'/>
  },
  {
    name:"Electric Category",
    path:"/admin/electric-category",
    icon: <ElectricBolt className='text-sky-600'/>,
    activeIcon:<ElectricBoltOutlined className='text-white'/>
  },
  {
    name:"Shop By Category",
    path:"/admin/shop-by-category",
    icon: <Category className='text-sky-600'/>,
    activeIcon:<Category className='text-white'/>
  },
  {
    name:"Deals",
    path:"/admin/deals",
    icon: <LocalOffer className='text-sky-600'/>,
    activeIcon:<LocalOfferOutlined className='text-white'/>
  }
]

const menu2 = [

  {
    name:"Logout",
    path:"/",
    icon: <Logout className='text-sky-600'/>,
    activeIcon:<LogoutOutlined className='text-white'/>
  },
]






function AdminDrawerList({toggleDrawer}:any) {
  return (
    <div className='h-screen'>
        <DrawerList menu1={menu1} menu2={menu2}  toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default AdminDrawerList
