import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Productitem from '../components/Productitem'
import Navbar from './Navbar';
import '../css/listproduct.css';
import {useDispatch,useSelector} from 'react-redux';
import { listProducts } from '../action/productActions';




function Listproduct() {

  const [products, setProducts] = useState([]);

  const [products2, setProducts2] = useState([])

  const username = localStorage.getItem('username')

  const productlist=useSelector((state)=> state.allProducts.products)

  const dispatch=useDispatch()



  useEffect(() => {
    getproducts()
  }, [])




  const getproducts = async () => {
      await axios.get('http://localhost:5000/listproduct', {
      params: {
        'username': username
      }
    })
      .then((res) => {
        setProducts(res.data)
        setProducts2(res.data.products)

        dispatch(listProducts(res.data.products))

        console.log("LIST OF PRODUCTS IS",productlist)
      })
      .catch((err) => {
        console.log(err)
      })



  }

  const items =productlist && productlist.map((item,i) => {
    return <Productitem brandname={item.brandname} key={i} productname={item.productname} quantity={item.quantity} price={item.price} description={item.description} productid={item._id} />
  })




  // const getproductdata = async (req, res) => {
  //   await axios.get('http://localhost5000/listproduct', {
  //     params: {
  //       'username': username
  //     }
  //   })
  //     .then(res => {
  //       const result = res.data
  //       setProducts(result)
  //     })
  //     .catch(err => {

  //     })
  // }


  return (
    <div>
      <Navbar />
      <div className='listcontainer'>
        <div className='listheading'>
      <h1>LIST PRODUCTS</h1>
      <p>Here you can view all the products added in your inventory</p>
        </div>
        <div className='products'>
        {items}
        </div>
            
      </div>
     </div>
  )
}

export default Listproduct