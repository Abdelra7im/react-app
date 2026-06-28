import React from 'react'
import './Categorie.css'
import img1 from '../../../../../../src/assets/images/cat-1-Dff_xs0d (1).jpg'
import img2 from '../../../../../../src/assets/images/cat-2-DuslB7R8.jpg'
import img3 from '../../../../../../src/assets/images/cat-3-CeSXsjz-.jpg'
import img4 from '../../../../../../src/assets/images/cat-4-Df4eiVwg (1).jpg'

function Categorie() {
  return (
    <div className='cat container  mt-5 d-flex align-items-center justify-content-center flex-column '>
       <h1 className='mb-5'>Categorie</h1>
       <div className='box row shadow m-b-3 g-1 w-100 justify-content-center '>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img1} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img2} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img3} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img4} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        
       </div>
       {/* --------------------الصف الاولللل---------------- */}
       <div className='box row shadow m-b-3 g-1 w-100 justify-content-center '>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img3} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img4} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img1} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img2} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        
       </div>
       {/* ---------------------------الصف التاااانييي------------------- */}
       <div className='box row shadow m-b-3 g-1 w-100 justify-content-center '>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img4} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img3} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img2} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        <div className='card col-12 col-md-3 '>
           <div className='content p-1 text-darck'>
             <div>
               <img src={img1} alt="" />
             </div>
              <div>
                <b>Category Name</b>
              <p>100 Products</p>
              </div>
          </div>
        </div>
        
       </div>
       </div>
  )
}

export default Categorie