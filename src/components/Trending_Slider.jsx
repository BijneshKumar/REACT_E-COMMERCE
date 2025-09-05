import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { trendingProducts } from '../context/Data';

const Trending_Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 100,
    cssEase: "linear",
    arrows:false
  };

  return (
    <>
    <div className="slider-container my-5">
      <Slider {...settings}>
         {
          trendingProducts.map((product,index)=>(
          <div key={index} className='slide'>
            <img src={product.image} className='slide-image' style={{width:'180px',height:'180px',border:'1px solid blue'}}/>
          </div>
          ))
         }
      </Slider>
    </div>
    </>
  )
}

export default Trending_Slider