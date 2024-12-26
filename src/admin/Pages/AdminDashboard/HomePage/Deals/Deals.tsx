import React, { useState } from 'react'
import HomeCategoryTable from '../HomeCategoryTable'
import { Button } from '@mui/material';
import DealsTable from './DealsTable';
import DealsCategoryTable from './DealsCategoryTable';
import CreateDealForm from './CreateDealForm';


const dealsTabs = [
  "Deals",
  "Category",
  "Create Deal"
];



function Deals() {

  const [activeDealsTab, setActiveDealsTab] = useState("Deals");

  return (
    <div>
      <div className='flex gap-4 pb-10'>
         {dealsTabs.map((item)=>
         <Button
          onClick={()=>{setActiveDealsTab(item)}}
          variant={activeDealsTab==item?'contained':"outlined"}
          key={item}>{item}</Button>)}
      </div>
      
      <div className='flex justify-center'>
        {activeDealsTab === "Deals" ?
          <DealsTable/> 
          : activeDealsTab === "Category" ? <DealsCategoryTable/>
          : <CreateDealForm/>
        }
      </div>
    </div>
  )
}

export default Deals
