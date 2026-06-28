import React from 'react'
import './Products.css'
import photo1  from'../../../../../assets/images/product-1-Eqx8spQ9.jpg'
import photo2  from'../../../../../assets/images/product-2-BigTxgyV.jpg'
import photo3  from'../../../../../assets/images/product-3-FX0nrhtF.jpg'
import photo4  from'../../../../../assets/images/product-4-7pPiPjA1.jpg'
import photo5  from'../../../../../assets/images/product-5-DGM0St3L.jpg'
import photo6  from'../../../../../assets/images/product-6-BfsqS1n8.jpg'
import photo7  from'../../../../../assets/images/product-7-DCT2dZdR.jpg'
import photo8  from'../../../../../assets/images/product-8-BigTxgyV (1).jpg'
import photo9  from'../../../../../assets/images/product-8-DL-K_xhq.jpg'
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

function Products({addToCart}) {
  return (
    <div className='cat container mt-5 d-flex align-items-center justify-content-center flex-column '>
       <h1 className='mb-5'>Products</h1>
       <div className="row shadow">
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo1} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Camera</h4>
            <div className='price'>
              <p className='text-success'>$100</p>
               <del className='text-danger'>$120</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning text-center justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo2} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>T-Shirt</h4>
            <div className='price'>
              <p className='text-success'>$80</p>
               <del className='text-danger'>$90</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo3} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Chandelier</h4>
            <div className='price'>
              <p className='text-success'>$35</p>
               <del className='text-danger'>$50</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo4} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Shoes</h4>
            <div className='price'>
              <p className='text-success'>$60</p>
               <del className='text-danger'>$70</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
       </div>
       <div className="row shadow">
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo5} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>AirPlane</h4>
            <div className='price'>
              <p className='text-success'>$170</p>
               <del className='text-danger'>$200</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo6} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Clock</h4>
            <div className='price'>
              <p className='text-success'>$40</p>
               <del className='text-danger'>$50</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo7} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Jeans Pants</h4>
            <div className='price'>
              <p className='text-success'>$20</p>
               <del className='text-danger'>$50</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
        <div className="card boxx col-12 col-md-3">
          {/* ---------بداية المحتوي بتاع الكارت------------ */}
          <div className="product">
            <div>
              <img src={photo9} alt="" />
            </div>
            {/* ------دي الصوره----- */}
           <div>
             <h4>Curology</h4>
            <div className='price'>
              <p className='text-success'>$130</p>
               <del className='text-danger'>$120</del>
               {/* -------دي  dev  شايله الاسعار بتاعتي---- */}
            </div>
            <div className='d-flex text-warning justify-content-center'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* ------Star icons------ */}
            <div className='foot'>
              <div className='icoon-bg'><FaHeart className='icoon'/></div>
              <div  onClick={()=>addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
           </div>

            </div>
          </div>
        </div>
       </div>
      </div>
  )
}

export default Products