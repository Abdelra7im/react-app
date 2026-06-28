import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import fot from '../../../assets/images/pay.png'
function Footer() {
  return (
    <div className='footerr  row mt-5'>
      <div className='mt-3 ms-3'>
        <div className='sid col-3 text-light'>
        <h3>Get In Touch</h3>
        <div>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laboriosam voluptatem eligendi maxime doloremque velit in neque sunt rerum autem molestias impedit quos, ullam et. </p>
        </div>
      </div>
      <div className='sid col-3 text-light'>
        <h3>Quick Shop</h3>
        <div className='d-flex flex-column g-2'>
          <span className='mt-3'>Shop</span>
          <span className='mt-3'>About</span>
          <span className='mt-3'>Contact</span>
          <span className='mt-3'>Home</span>
          <span className='mt-3'>Cart</span>
        </div>
      </div>
      <div className='sid col-3 text-light'>
        <h3>Shop Madeia</h3>
        <div className='d-flex flex-column align-items-center g-2'>
          <FaFacebook className='mt-3 fs-5'/>
          <FaTwitter className='mt-3 fs-5'/>
          <FaInstagram className='mt-3 fs-5'/>
          <FaLinkedin className='mt-3 fs-5'/>
          <FaGithub className='mt-3 fs-5'/>

        </div>
      </div>
      <div className='sid col-3 text-light'>
        <h3>NEWSLWTTER</h3>
        <div>
          <p>Duo stet tempor ipsum sit amet
             magna ipsum tempor est</p>
        </div>
        <div className='input-group d-flex align-items-center justify-content-center'>
          <input type="email" placeholder='Your Email Adress'/>
          <button >Button</button>
        </div>
      </div>
      </div>
      <hr  className='mt-5 '/>
      <div className='bott mt-3'>
        <p className='text-light ms-3'>@copywrite By Rahimm , All Right Reserved</p>
        <img src={fot} alt=""  className='me-3'/>
      </div>
    </div>
  )
}

export default Footer