import React from 'react'
import './Home.css'
import Header from './components/Header/Header'
import Categorie from './components/Categorie/Categorie'
import Products from './components/Products/Products'
import Sliderr from './components/Sliderr/Sliderr'
import Footer from '../../common/Footer/Footer'




function Home({addToCart , cartTitles}) {
  
  return (
    <>
   <Header />
   <Categorie />
   <Products />
   <Sliderr />
   {/* <Footer /> */}
    </>
  )
}

export default Home