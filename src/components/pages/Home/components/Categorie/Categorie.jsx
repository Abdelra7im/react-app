import React from 'react'
import './Categorie.css'
import img1 from '../../../../../../src/assets/images/cat-1-Dff_xs0d (1).jpg'
import img2 from '../../../../../../src/assets/images/cat-2-DuslB7R8.jpg'
import img3 from '../../../../../../src/assets/images/cat-3-CeSXsjz-.jpg'
import img4 from '../../../../../../src/assets/images/cat-4-Df4eiVwg (1).jpg'

function Categorie() {
  const categories = [img1, img2, img3, img4, img3, img4, img1, img2, img4, img3, img2, img1];

  return (
    <div className='cat container mt-5'>
      <h1 className='mb-5 text-center'>Categories</h1>
      
      {/* استخدمنا صف واحد (row) عشان يوزع الـ 12 كارت تلقائياً */}
      <div className='row g-3 justify-content-center'>
        {categories.map((img, index) => (
          <div key={index} className='col-6 col-md-4 col-lg-3'>
            <div className='card shadow h-100 p-2'>
              <div className='content text-dark'>
                <img src={img} alt="category" className='img-fluid' />
                <div className='mt-2'>
                  <b>Category Name</b>
                  <p className='m-0'>100 Products</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categorie