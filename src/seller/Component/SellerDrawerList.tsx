import { AccountCircle, AccountCircleOutlined, Add, AddCircle, CurrencyRupeeSharp, Dashboard, Inventory, Inventory2Outlined, LocalMall, Logout, LogoutOutlined, Payment, PaymentOutlined, Receipt, ReceiptLong, ShoppingBag, ShoppingBagOutlined, SpaceDashboard } from '@mui/icons-material'
import React from 'react'
import DrawerList from '../../Component/DrawerList'

const menu1 = [
  {
    name:"Dashboard",
    path:"/seller",
    icon: <Dashboard className='text-sky-600'/>,
    activeIcon:<SpaceDashboard className='text-white'/>
  },
  {
    name:"Orders",
    path:"/seller/orders",
    icon: <ShoppingBag className='text-sky-600'/>,
    activeIcon:<ShoppingBagOutlined className='text-white'/>
  },
  {
    name:"Products",
    path:"/seller/products",
    icon: <Inventory className='text-sky-600'/>,
    activeIcon:<Inventory2Outlined className='text-white'/>
  },
  {
    name:"Add Products",
    path:"/seller/add-products",
    icon: <Add className='text-sky-600'/>,
    activeIcon:<AddCircle className='text-white'/>
  },
  {
    name:"Payments",
    path:"/seller/payments",
    icon: <CurrencyRupeeSharp className='text-sky-600'/>,
    activeIcon:<CurrencyRupeeSharp className='text-white'/>
  },
  {
    name:"Transactions",
    path:"/seller/transactions",
    icon: <ReceiptLong className='text-sky-600'/>,
    activeIcon:<Receipt className='text-white'/>
  },
]

const menu2 = [
  {
    name:"Account",
    path:"/seller/account",
    icon: <AccountCircle className='text-sky-600'/>,
    activeIcon:<AccountCircleOutlined className='text-white'/>
  },
  {
    name:"Logout",
    path:"/",
    icon: <Logout className='text-sky-600'/>,
    activeIcon:<LogoutOutlined className='text-white'/>
  },
]



function SellerDrawerList({toggleDrawer}:any) {
  return (
    <div className='h-full' >
      <DrawerList menu1={menu1} menu2={menu2} toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default SellerDrawerList
