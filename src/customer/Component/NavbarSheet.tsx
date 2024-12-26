import React from 'react'
import { menLevelTwo } from '../../Data/Category/levelTwo/menLevelTwo'
import { womenLevelTwo } from '../../Data/Category/levelTwo/womenLevelTwo'
import { furnitureLevelTwo } from '../../Data/Category/levelTwo/furnitureLevelTwo'
import { electricLevelTwo } from '../../Data/Category/levelTwo/electronicsLevelTwo'
import { menLevelThree } from '../../Data/Category/levelThree/menLevelThree'
import { womenLevelThree } from '../../Data/Category/levelThree/womenLevelThree'
import { furnitureLevelThree } from '../../Data/Category/levelThree/furnitureLevelThree'
import { electricLevelThree } from '../../Data/Category/levelThree/electronicsLevelThree'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const categoryLevelTwo:{[key:string]:any[]} = {
  men:menLevelTwo,
  women:womenLevelTwo,
  home_furniture:furnitureLevelTwo,
  electronics:electricLevelTwo

}

const categoryLevelThree:{[key:string]:any[]} = {
  men:menLevelThree,
  women:womenLevelThree,
  home_furniture:furnitureLevelThree,
  electronics:electricLevelThree

}

function NavbarSheet({selectedCategory}:any) {

  const filterchidCategories = (category:any,parentcategoryId:any)=>{
       return category.filter((item:any)=>item.parentcategoryId==parentcategoryId)
  }

  const navigate = useNavigate();

  return (
    <Box className="bg-white shadow-2xl lg:h-[400px] overflow-y-auto">
       <div className='flex text-sm flex-wrap'>
           {categoryLevelTwo[selectedCategory]?.map((item,i)=>
             <div key={i} className={`p-8 lg:w-[20%] ${i%2!=0?'bg-slate-100' : 'bg-white'}`}>
             <p className='text-customColor mb-5 font-semibold'>{item.name}</p>
             <ul className='space-y-3'>
               {
                filterchidCategories(categoryLevelThree[selectedCategory],item.categoryId).map((item:any)=>
                 <li onClick={()=>navigate(`/product/${item.categoryId}`)} className='hover:text-customColor cursor-pointer'>
                  {item.name}
                 </li> 
                )
               }
             </ul>
           </div>
           )}
       </div>
    </Box>
  )
}

export default NavbarSheet
