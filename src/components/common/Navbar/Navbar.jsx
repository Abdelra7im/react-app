import React, { useContext } from 'react'
import './Navbar.css'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { applicationModeContext } from '../../../context/ApplicationMode';

function Navbar({cartTitles}) {

  const {handlAplicationMode} = useContext(applicationModeContext)

  return (
<nav className="navbar navbar-expand-lg px-4">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Rahim <span>Shop</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 flex flex-col md:flex-row items-center">
        <li className="nav-item">
          <Link to={''} className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'shop'} className="nav-link active" aria-current="page" href="#">Shop</Link>
        </li>
        <li className="nav-item">
          <Link to={'about'} className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to={'fakeStoreApi'} className="dropdown-item" href="#">Fake Api</Link></li>
            <li><a className="dropdown-item" href="#">Dammy Api</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'contact'} className="nav-link" href="#">Contact</Link>
        </li>
        <li className='ms-lg-3 mt-2 mt-lg-0'>
          <select onChange={(e)=>handlAplicationMode(e)} className="form-select py-1">
            <option value="Light Mode"> Light Mode </option>
            <option value="Dark Mode"> Dark Mode </option>
          </select>
        </li>
      </ul>

      <div className='flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0'>
        <div className='auth-process flex gap-3'>
          <Link to={'register'}>Register</Link>
          <Link to={'login'}>Login</Link>
        </div>

        <div className='proccess flex gap-3'>
          <div className='fs-5'>
            <FaHeart className='icon'/>
            <sub>(0)</sub>
          </div>
          <Link to={'cart'} className='text-decoration-none fs-5'>
            <FaShoppingCart className='icon'/>
            <sub className='text-light fs-6'>({cartTitles.length})</sub>
          </Link>
        </div>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar