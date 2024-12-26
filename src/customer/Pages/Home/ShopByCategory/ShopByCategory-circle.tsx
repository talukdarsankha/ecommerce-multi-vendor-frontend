import React from "react";

import  './ShopByCategory.css'

function ShopByCategoryCircle({data}:{data:any}) {
  return (
    <div className="flex flex-col  gap-3 justify-center items-center group cursor-pointer">
        <div className="w-[90px] h-[90px]  border-2 lg:w-[160px] lg:h-[160px] rounded-full">
            <img
            className="custom-border rounded-full group-hover:scale-95 transition-transform  object-cover object-top w-full h-full "
            src={data.image} alt="" />
        </div>
        <h1 className="">{data.name}</h1>
    </div>
  );
}

export default ShopByCategoryCircle;
