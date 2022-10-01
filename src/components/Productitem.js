import React from 'react'
import '../css/productitem.css'
import productimage from '../images/product/2.png'


function Productitem({ brandname, productname, quantity, price, description }) {
  return (
    <div >
      <a href="" className='productclick'>
        <div className='itemcontainer'>
          <div class="card">
            <div class="left">
              <img src={productimage} className='productlistimage' alt="shoe" />
            </div>
            <div class="right">
              <div class="product-info">
                <div class="product-name">
                  <h1 className='producth1'>{brandname}</h1>
                  <h2 className='producth2'>{productname}</h2>
                </div>
                <div class="details">
                  <div className='productp'>
                    <p className='productprice'>Price:</p>
                    <p className='p1'>{price}</p>
                    </div>
                    <div className='productp1'>
                      <p className='productquantity'>Quantity:</p>
                      <p className='p2'>{quantity}</p>
                    </div>
        
                </div>
                <div className='productbuttons'>
                  <div className='button1'>
                    <button class="button123">
                      <span class="button-content">edit </span>
                    </button>
                  </div>
                  <div className='button2'>
                    <button class="button1234">
                      <span class="button-content">Delete </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Productitem