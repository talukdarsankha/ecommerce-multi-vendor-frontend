

import React from 'react'
import ShopByCategoryCircle from './ShopByCategory-circle'




const ShopByCategorydata = [
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/26966552/2024/1/17/71277b0b-3fb2-42ce-b99e-786f556219f61705505263427DOCTOREXTRASOFTWomenMaroonPrintedRubberThongFlip-Flops1.jpg",
    name:"Flip Flops"
  },
  {
    image:"https://cdn.pixabay.com/photo/2021/11/08/00/30/kitchen-6778196_1280.jpg",
    name:"Kitchen & Table"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/84HrzsfS_b5a55fbd8307410e9c2ed39d4509d0c3.png",
    name:"Shoes"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/732005a7-9e98-40a3-bc0a-496df14aaeda1732356884902-image_png2103441896.png",
    name:"Body & hair"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/37a374d1-e7fe-406b-a512-ea0f78510c431732356628675-image_png1690901537.png",
    name:"Bottels"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/324478a4-b05d-46a4-a1c7-8110591ea2781732356608286-image_png948531044.png",
    name:"Headphones"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/86cd48b5-9a6b-4712-9ba0-453eb6bb28a31732351287531-image_png1300315192.png",
    name:"Travel"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/22/anVDrwGy_75d3887c2e7a471da6a344bf7b065341.png",
    name:"Event & Pujas"
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/YpvSPqGw_90c9156536ae44c78bcd66c86274b11c.png",
    name:"Women Saree "
  },
  {
    image:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/20jtBpFj_edec4a3397d84e6eb971cb2079c3963c.png",
    name:"Fitness"
  },
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/OCTOBER/16/dCPIdRCD_f33d4ba4f90d417c8be21ac9519a2abf.jpg",
    name:"Trolly"
  },
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30072954/2024/8/7/1d3bcc7c-c7ce-4af2-abb9-559b049e48021723025205339-Safari-Unisex-Backpacks-7551723025204626-1.jpg",
    name:"Backpacks"
  },

  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19037796/2023/11/16/0822df76-8bb0-49ce-bea3-15c990193b6e1700134172296VoyageUnisexBlackGold-TonedLensRoundSunglasseswithUVProtecte1.jpg",
    name:"Sunglass"
  },
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24820688/2023/11/7/c08c778e-b485-4ce6-af6a-791f427f7d4e1699341712054-Spiky-Kids-SOS-Camera-Multifunction-Smart-Watches-MMinotaur_-11.jpg",
    name:"Digaital Products"
  },

  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/18775528/2022/6/18/07fdcf46-d5f4-4dd9-811b-8ddd2c05d9711655535672489GoldPlatedWhiteStoneStuddedPearlNoseRingNath1.jpg",
    name:"Jewellery"
  },
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/13804364/2023/9/19/937de54a-7a48-41e0-b730-5719b392e7e21695113487392-Accessorize-London-Womens-Faux-Leather-Black-Mini-Purse-Slin-1.jpg",
    name:"Hand Bags"
  },
  {
    image:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29468496/2024/5/14/5fd1f709-ae4a-4034-9c43-6c15216a7e7f1715658312951ShoetopiaGirlsColourblockedBallerinasFlats1.jpg",
    name:"Footwear"
  },

  {
    image:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2024/SEPTEMBER/21/GqyS5b0q_92f6bd56d9ad463691c28be0d3d4e69a.jpg",
    name:"Event Dresses"
  },

  {
    image:"https://assets.myntassets.com/h_1136,q_90,w_852/v1/assets/images/25386226/2023/10/6/d865b786-3424-45d3-8dea-50304d627c1d1696595374043MakeupKit1.jpg",
    name:"Make Up Kit"
  },
  
]

 

function ShopByCategory() {
  return (
   <div className='py-10'>
     <h1 className='font-bold text-lg lg:text-4xl pb-5 lg:pb-16 text-center [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-blue-600'>Shop By Category</h1>
     <div className='flex flex-wrap px-5 lg:px-16 justify-evenly space-y-5'>
       {/* { [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,i)=><ShopByCategoryCircle key={i}/>)}  */}
       { ShopByCategorydata.map((data,i)=><ShopByCategoryCircle key={i} data={data}/>)} 

     </div>
   </div>
  )
}

export default ShopByCategory
