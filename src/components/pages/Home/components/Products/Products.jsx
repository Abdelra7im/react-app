import React from 'react';
import './Products.css';
import { FaStar, FaHeart, FaCartShopping } from "react-icons/fa6";

import photo1 from '../../../../../assets/images/product-1-Eqx8spQ9.jpg';
import photo2 from '../../../../../assets/images/product-2-BigTxgyV.jpg';
import photo3 from '../../../../../assets/images/product-3-FX0nrhtF.jpg';
import photo4 from '../../../../../assets/images/product-4-7pPiPjA1.jpg';
import photo5 from '../../../../../assets/images/product-5-DGM0St3L.jpg';
import photo6 from '../../../../../assets/images/product-6-BfsqS1n8.jpg';
import photo7 from '../../../../../assets/images/product-7-DCT2dZdR.jpg';
import photo9 from '../../../../../assets/images/product-8-DL-K_xhq.jpg';

function Products({ addToCart }) {
  const products = [
    { id: 1, name: 'Camera', price: 100, oldPrice: 120, img: photo1 },
    { id: 2, name: 'T-Shirt', price: 80, oldPrice: 90, img: photo2 },
    { id: 3, name: 'Chandelier', price: 35, oldPrice: 50, img: photo3 },
    { id: 4, name: 'Shoes', price: 60, oldPrice: 70, img: photo4 },
    { id: 5, name: 'AirPlane', price: 170, oldPrice: 200, img: photo5 },
    { id: 6, name: 'Clock', price: 40, oldPrice: 50, img: photo6 },
    { id: 7, name: 'Jeans Pants', price: 20, oldPrice: 50, img: photo7 },
    { id: 8, name: 'Curology', price: 130, oldPrice: 120, img: photo9 },
  ];

  return (
    <div className='cat container mt-5'>
      <h1 className='mb-5 text-center'>Products</h1>
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-md-4 col-lg-3">
            <div className="card shadow h-100 p-2">
              <div className="product">
                <img src={product.img} alt={product.name} className='img-fluid' />
                <div className='text-center mt-2'>
                  <h4>{product.name}</h4>
                  <div className='price d-flex justify-content-center gap-2'>
                    <p className='text-success m-0'>${product.price}</p>
                    <del className='text-danger m-0'>${product.oldPrice}</del>
                  </div>
                  <div className='d-flex text-warning justify-content-center my-2'>
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <div className='foot d-flex justify-content-center gap-3'>
                    <div className='icoon-bg'><FaHeart className='icoon'/></div>
                    <div onClick={() => addToCart()} className='icoon-bg'><FaCartShopping className='icoon'/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;