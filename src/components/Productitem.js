import React, {  } from 'react'
import '../css/productitem.css'
import productimage from '../images/product/2.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { deleteProduct } from '../action/productActions'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'


function Productitem({ brandname, productname, quantity, price, description, productid ,index}) {

    useSelector((state)=> state.product)
    const dispatch=useDispatch()


  const deletedata = async (id) => {
  console.log("delete component:",id.productid)
    await axios.delete('https://productmanagementapplication.herokuapp.com/deleteproduct', {
      params: {
        'id': id.productid
      }
    })
    Swal.fire(
      'Delete Successfull',
    )
      .then((res) => {
        
        dispatch(deleteProduct(id.productid))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div >

      <div className='itemcontainer'>
        <div className="card">
          <a href={"/product/" + productid} className='productclick'>
            <div className="left">
              <img src={productimage} className='productlistimage' alt="shoe" />
            </div>
          </a>
          <div className="right">
            <div className="product-info">
              <div className="product-name">
                <h1 className='producth12'>{index+1}</h1>
                <h1 className='producth1'>{brandname}</h1>
                <h2 className='producth2'>{productname}</h2>
              </div>
              <div className="details">
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
                  
                  <Link id='RouterNavLink' type='button' to={"/editproduct/" + productid} className="editbut">
                      <p className="editbuttoncontent">EDIT</p>
                    </Link>
                  </div>
                  
                  <div className='button234'>
                    <button className="button1234" onClick={() => deletedata({ productid })}>
                      <span className="button-content">DELETE</span>
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