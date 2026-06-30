import React from 'react'
import './Sliderr.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from '../../../../../assets/images/download.jpeg'
import pic2 from '../../../../../assets/images/download (1).jpeg'
import pic3 from '../../../../../assets/images/download (2).jpeg'
import pic4 from '../../../../../assets/images/vendor-6-CmmiMxIm.jpg'
import pic5 from '../../../../../assets/images/vendor-7-BBAmhwW7 (1).jpg'

function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [pic1, pic2, pic3, pic4, pic5];

  return (
    <div className='container mt-5'>
      <Slider {...settings} className='slid'>
        {images.map((img, index) => (
          <div key={index} className='p-2'>
            <img src={img} alt={`vendor-${index}`} className='img-fluid shadow-sm' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Sliderr