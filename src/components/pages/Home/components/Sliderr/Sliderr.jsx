import React from 'react'
import './Sliderr.css'
import pic1 from '../../../../../assets/images/download.jpeg'
import pic2 from '../../../../../assets/images/download (1).jpeg'
import pic3 from '../../../../../assets/images/download (2).jpeg'
import pic4 from '../../../../../assets/images/vendor-6-CmmiMxIm.jpg'
import pic5 from '../../../../../assets/images/vendor-7-BBAmhwW7 (1).jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Sliderr from "react-slick";
function Sliderr() {
  // 
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
  };
  return (
    <Slider {...settings} className='slid container  '>
      <div>
        <img src={pic1} alt="" />
      </div>
      <div>
        <img src={pic2} alt="" />
      </div>
      <div>
        <img src={pic3} alt="" />
      </div>
      <div>
        <img src={pic4} alt="" />
      </div>
      <div>
        <img src={pic5} alt="" />
      </div>
    </Slider  >
  )
}

export default Sliderr