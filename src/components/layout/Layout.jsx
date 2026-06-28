import React from 'react'
import Navbar from '../common/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer/Footer'

function layout({cartTitles}) {
  return (
    <>
    <Navbar cartTitles={cartTitles}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default layout