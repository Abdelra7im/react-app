import React, { useContext, useEffect } from 'react'
import './Cart.css'
import img from '../../../assets/images/product-1-Eqx8spQ9.jpg'
// import { cartContext } from '../../../context/CartContext'

function Cart({allData ,deleteProduct , cartTitles , decreaseProduct , inccreaseProduct }) {
// console.log(cartTitles);

// const {cartTitles , allData , deleteProduct} = useContext(cartContext)

const handleShowData = ()=>{
  const productsFullInfo = cartTitles.map((opjTitle)=>{
    // console.log(Object.keys(opjTitle)[0]);
    const findedObj = allData.find(el => el.title === Object.keys(opjTitle)[0] )

    return {...findedObj , amount:Object.values(opjTitle)[0]  }
  })
  return productsFullInfo
}

let cart = handleShowData()
console.log(cart);


const totallCart = cart.reduce((a,b)=>{
  return a + (b.price * b.amount)
} , 0)


useEffect(()=>{
  handleShowData()
} , [])
  
  return (
    <div className='cart container my-5'>
       <p className='my-5 text-uppercase fs-2 text-center fw-bold'>Your <span style={{color:'var(--main-color)'}}>Cart</span> </p>
       { cart.length ?
       <>
       {cart.map((el , index)=>(

       <div className='col-12 mb-2' key={index}>
        <div className='pro border px-4 rounded shadow  py-3 flex justify-content-between'>
          <img src={el.image} style={{width:'100px' , height:'100px'}} alt="" />
          <b>{el.title?.split(' ').slice(0 , 2).join(' ')}</b>
          <div>
            <p className='m-0 '>${el.price}</p>
            <p className='m-0 '>${el.price * el.amount}</p>
          </div>
          <div>
            <button onClick={()=>{inccreaseProduct(el.title)}} className='btn btn-dark btn-sm rounded'>+</button>
            <samp className='mx-2'>{el.amount}</samp>
            <button onClick={()=>{decreaseProduct(el.title)}} className='btn btn-dark btn-sm rounded'>-</button>
          </div>
          <button onClick={()=>{deleteProduct(el.title)}} className='btn btn-danger'>Remove Product</button>
        </div>
       </div>
       ))}
       <div className='col-8 mt-5 offset-2 '>
        <div className='border border-dark shadow py-4 rounded flex justify-content-around bg-white'>
          <b className='fs-4'>Totall :</b>
          <b className='fs-4'>${totallCart.toFixed(3)}</b>
        </div>
       </div>

       </>
       :
       <div className='fs-1 text-danger text-center p-5'>There Is No Products...</div>
        }
       </div>
  )
}

export default Cart