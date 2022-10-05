import React, {  } from 'react'
import '../css/productitem.css'
import productimage from '../images/product/2.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../action/productActions'
import { useDispatch, useSelector } from 'react-redux'





function Productitem({ brandname, productname, quantity, price, description, productid }) {

  const product=useSelector((state)=> state.product)
    const dispatch=useDispatch()


  const deletedata = async (id) => {
  console.log("delete component:",id.productid)
    await axios.delete('http://localhost:5000/deleteproduct', {
      params: {
        'id': id.productid
      }
    })
      .then((res) => {
        window.alert('Product successfully deleted')
        dispatch(deleteProduct(id.productid))

        
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div >

      <div className='itemcontainer'>
        <div class="card">
          <a href={"/product/" + productid} className='productclick'>
            <div class="left">
              <img src={productimage} className='productlistimage' alt="shoe" />
            </div>
          </a>
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

                <div className='editanddelete'>
                  <div className='editproductdiv'>
                  
                  <Link id='RouterNavLink' type='button' to={"/editproduct/" + productid} class="editbut">
                      <p class="editbuttoncontent">EDIT</p>
                    </Link>
                  </div>
                  
                  <div className='button234'>
                    <button class="button1234" onClick={() => deletedata({ productid })}>
                      <span class="button-content">DELETE</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Productitem