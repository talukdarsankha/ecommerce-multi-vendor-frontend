import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";



const dealsImage = [
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/26676095-6de3-45d9-bb63-fc682f1ade241732356589894-image_png_1816656507.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/QtY7Wt9L_810c40c1f86b4a8ca6cb768ef863c011.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/84HrzsfS_b5a55fbd8307410e9c2ed39d4509d0c3.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/732005a7-9e98-40a3-bc0a-496df14aaeda1732356884902-image_png2103441896.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/37a374d1-e7fe-406b-a512-ea0f78510c431732356628675-image_png1690901537.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/324478a4-b05d-46a4-a1c7-8110591ea2781732356608286-image_png948531044.png",

  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/11/23/86cd48b5-9a6b-4712-9ba0-453eb6bb28a31732351287531-image_png1300315192.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/22/anVDrwGy_75d3887c2e7a471da6a344bf7b065341.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/YpvSPqGw_90c9156536ae44c78bcd66c86274b11c.png",
  "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/NOVEMBER/21/20jtBpFj_edec4a3397d84e6eb971cb2079c3963c.png"
]


function DealsSlickComponent() {
  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 3300, // Devices with a width of 3300px or less
            settings: {
              slidesToShow: 11,
              slidesToScroll: 1,
              infinite: true,
            },
        },
        {
            breakpoint: 2260, // Devices with a width of 2260px or less
            settings: {
              slidesToShow: 9,
              slidesToScroll: 1,
              infinite: true,
            },
        },
        {
            breakpoint: 1800, // Devices with a width of 1800px or less
            settings: {
              slidesToShow: 7,
              slidesToScroll: 1,
              infinite: true,
            },
        },
        {
          breakpoint: 1292, // Devices with a width of 1292px or less
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 856, // Devices with a width of 856px or less
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
            breakpoint: 582, // Devices with a width of 582px or less
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        {
          breakpoint: 480, // Devices with a width of 480px or less
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* {[1,1,11,1,1,11,1,11,1,1,1,1,1,1,1,1,1].map((item,i)=><DealCard key={i} />)} */}
        {dealsImage.map((image,i)=><DealCard key={i} image={image} />)}

      </Slider>
    </div>
  );
}

export default DealsSlickComponent;
