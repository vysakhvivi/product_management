import React, { useEffect, useState } from 'react'
import '../css/product.css'
import Navbar from './Navbar'
import productimage from '../images/product/7.png'
import priceimg from '../images/price.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { viewProduct } from '../action/productActions'


function Product() {

  const product=useSelector((state)=>state.products)
  const dispatch=useDispatch();




  const [brandname, getbrandname] = useState('')
  const [productname, getproductname] = useState('')
  const [quantity, getquantity] = useState('')
  const [price, getprice] = useState('')
  const [description, getdescription] = useState('')

  useEffect(() => {
    Postdetails()
  }, [])


  const params = useParams()
  const id = params.id

  const Postdetails = async (req, res) => {

    await axios.get('http://localhost:5000/product', {
      params: {
        'id': id
      }
    })
      .then((res) => {
        console.warn(res)
        dispatch(viewProduct(res.data[0].products[0]))
        console.log(product)
        getbrandname(res.data[0].products[0].brandname)
        getproductname(res.data[0].products[0].productname)
        getprice(res.data[0].products[0].price)
        getquantity(res.data[0].products[0].quantity)
        getdescription(res.data[0].products[0].description)
      })
      .catch((err) => {
        console.log(err)
      })


  }

  return (

    <div>
      <Navbar />
      <div className='productpagecontainer'>
        <div className='pcontainer'>
          <div className='productdetailside'>
            <h1 className='productdh1'>{brandname}</h1>
            <h2 className='productdh2'>{productname}</h2>
            <p className='productdp'><q>{description}</q></p>
            <p className='productdp2'>Quantity : {quantity}</p>


          </div>
          <div className='productprice'>
            <img src={priceimg} alt='price' className='priceimage' />
            <p className='productdp1'>₹{price}</p>

          </div>
          <div className='productimageside'>
            <img src={productimage} className='productimage' alt='Pictu' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product