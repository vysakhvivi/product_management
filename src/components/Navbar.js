

import React from 'react'
import '../css/navbar.css';
import logo from '../images/product_logo.png'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <img src={logo} alt='alternate text' className='productlogo' />
        <ul className='list'>
          <li className='listitems'><a href='' >Home</a></li>
          <li className='listitems'><a href='' >Add Product</a></li>
          <li className='listitems'><a href='' >List Product</a></li>

        </ul>
        <a href=""><i className='userlogo' class="fas fa-user-circle fa-2x"></i> </a>
        
      </nav>
      </div>
  )
}

export default Navbar



