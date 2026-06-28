import React, { useContext } from 'react'
import './FakeApi.css'
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { apiContext } from '../../../../../context/ApiContext';
// import { cartContext } from '../../../../../context/CartContext';

function FakeApi({products ,addToCart , cartTitles}){

  // const {products} = useContext(apiContext)
  // const {addToCart} = useContext(cartContext)

  return (
    <div className='container my-5 d-flex flex-column align-center justify-content-center'>
      <h1 className='api-name my-5 text-center '>Fake Api Products</h1>
      {/* <p className='fw-bold w-50 text-center opacity-75 '>Lorem ipsum dolor sit amet consectetur a esse?</p> */}
      <div className='row w-100 g-2'>
        {Array.isArray(products) && products.map((val)=>{
          return(
            <div className='col-lg-3 col-md-6 col-sm-12' key={val.id}>
              <div className='card tex-decoration-non'>
                <Link to={`products/${val.id}`} className='p-5'>
                <img className='card-img' style={{height:'150px'}} src={val.image} alt="" />
                </Link>
                <div className='card-body'>
                  <b className='text-center d-block my-3'>{val.title.split(' ').slice(0,3).join(' ')}</b>
                  <p className='m-0 text-center'>You Can Add Just 
                     <span className='text-primary fs-5 fw-bold'>({ val.rating.count ?? 0 })</span>
                  items</p>
                  <div className='procces d-flex justify-content-between w-100 '>
                    <div>
                      <FaHeart className='icon'/>
                    </div>
                    <div onClick={()=> addToCart(val.title)}>
                      <FaShoppingCart className='icon'/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default FakeApi