
import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../images/product_logo.png'
import Swal from 'sweetalert2'



function Navbar() {

  const navigate=useNavigate()


  const Logout=()=>{
    localStorage.clear();
      navigate('/')
    
    
  }
  

  return (


    <header className="header">
      <img className="logo" src={logo} alt='logoimg'/>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="/" className="link link-theme link-arrow">HOME</a></li>
        <li><a href="/addproduct" className="link link-theme link-arrow">ADD PRODUCTS</a></li>
        <li><a href="/listproduct" className="link link-theme link-arrow">LIST PRODUCTS</a></li>
        <li><a href="/login" className="link link-theme link-arrow loginclass">LOGIN</a></li>
        <li><a href="" className="link link-theme link-arrow" onClick={Logout}>Logout</a></li>
      </ul>
    </header>

    // <div className='nav'>
    //   <nav className='navbar'>
    //     <img src={logo} alt='alternate text' className='productlogo' />
    //     <ul className='list'>
    //       <li className='listitems'><a href='/' >Home</a></li>
    //       <li className='listitems'><a href='/addproduct' >Add Product</a></li>
    //       <li className='listitems'><a href='/listproduct' >List Product</a></li>
    //       <li className='Login'><a href='/login' >Login</a></li>

    //     </ul>
    //     <a href=""><i className="fas fa-user-circle fa-2x"></i> </a>
        
    //   </nav>
    //   </div>
  )
}

export default Navbar



