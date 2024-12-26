import React, { useEffect, useState } from 'react'


import "./ProductCard.css"
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../../Types/ProductType';





// const images = [
 
//   "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/23876776/2023/12/11/3be84e05-af57-4067-8b78-200e79f957771702278090558-Park-Avenue-Men-Shirts-5631702278090186-5.jpg"
//   ,
//   "https://images.meesho.com/images/products/217167246/qdxda_512.webp"
//   ,
//   "https://images.meesho.com/images/products/391850798/muobk_512.webp"
// ]



function ProductCard({productItem}:{productItem:Product}) {

 const [currentImage, setCurrentImage] = useState(0);
 const [isHovered, setIsHovered] = useState(false);

 useEffect(()=>{
  let interval:any
  if (isHovered) {
    interval=setInterval(()=>{
     setCurrentImage((prevImage)=>(prevImage+1) % productItem.images?.length)
    },1000)
  }else if(interval){
    clearInterval(interval);
    interval=null;
  }

  return ()=>clearInterval(interval);

 },[isHovered])


 const navigate = useNavigate();

  return (
    <div className='group relative px-4' 
     onClick={() =>{   {/* encode the productItem.id: */}
       productItem?.id && navigate(`/productDetails/${btoa(productItem?.id.toString())}`)}
     }>    
      <div className='productCard'
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      >
         {productItem?.images?.map((item,i)=>
           <img
             style={{transform: `translateX(${(i-currentImage)*100}%)`}}
            className='card-media object-cover object-top rounded-md'
             src={item} 
             alt="" />
         )}

        { isHovered && 
          <div className='indicator flex flex-col  items-center space-y-2'>

            <div className='flex gap-2 justify-center'>
               {productItem?.images?.map((item,i)=>
                  <div key={i} className={`h-2 w-2 indicator-button ${i===currentImage?"active":""}`}></div>
                )}
            </div>

           <div className='flex gap-3 '>
             <Button variant='contained' sx={{bgcolor:"white"}} >
                <FavoriteBorderIcon className='text-customColor'/>
             </Button>

             <Button variant='contained' sx={{bgcolor:"white"}}  >
                <MarkUnreadChatAltIcon className='text-customColor'/>
             </Button>
           </div>
         </div>}
      </div>

      <div className='w-[220px] details pt-3 space-y-1 group-hover-effect cursor-pointer rounded-md'>
         <div className='name'>
            <h1 className='font-semibold'>{productItem?.seller?.businessDetails?.businessName}</h1>
            <p>{productItem?.color}</p>
            
         </div>
         <div className='flex items-center gap-3'>
            <span className='font-sans text-gray-800'>₹ {productItem?.sellingPrice}</span>
            <span className='thin-line-through text-gray-400'>₹ {productItem?.mrpPrice}</span>
            <span className='text-customColor font-semibold'>{productItem?.discountedPercent}%</span>
         </div>
      </div>
      
    </div>
  )
}

export default ProductCard
