import React from 'react'
import './Header.css'
import Slider from "react-slick";
import { FaCheck } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";

function Header() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='Header container mt-5'>

      <div className='row g-3'>
        <div className='col-12 col-lg-8'>
          <Slider {...settings} className='slider-slick'>
            <div className='men slider-items'>
              <div>
                <b>Men Fashion</b>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn border text-light'>Shop Now</button>
              </div>
            </div>
            <div className='women slider-items'>
              <div>
                <b>Women Fashion</b>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn border'>Shop Now</button>
              </div>
            </div>
            <div className='kids slider-items'>
              <div>
                <b>Kids Fashion</b>
                <p className='m-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='btn border'>Shop Now</button>
              </div>
            </div>
          </Slider>
        </div>
        
        <div className='col-12 col-lg-4'>
          <div className='offer'>
            <div>
              <p className='m-0'>Save 20%</p>
              <p className='m-0'>Special Offer</p>
              <button className='btn border'>Shop Now</button>
            </div>
            <div>
              <p className='m-0'>Save 20%</p>
              <p className='m-0'>Special Offer</p>
              <button className='btn border'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

    
      <div className='row mt-5 g-3'>
        <div className='col-6 col-md-3'>
          <div className='p-4 bg-light text-dark d-flex justify-content-center'>
            <b> <FaCheck className='icon'/> Quality Product</b>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='p-4 bg-light text-dark d-flex justify-content-center'>
            <b> <FaTruck className='icon'/> Free Shipping</b>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='p-4 bg-light text-dark d-flex justify-content-center'>
            <b> <FaCheck className='icon'/> 14-Day Return</b>
          </div>
        </div>
        <div className='col-6 col-md-3'>
          <div className='box p-4 bg-light d-flex justify-content-center'>
            <b> <FaTruck className='icon'/> 24/7 Support</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header