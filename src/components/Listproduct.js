import React, { useEffect,} from 'react'
import axios from 'axios';
import Productitem from '../components/Productitem'
import Navbar from './Navbar';
import '../css/listproduct.css';
import {useDispatch,useSelector} from 'react-redux';
import { listProducts } from '../action/productActions';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




function Listproduct() {



  const username = localStorage.getItem('username')

  const productlist=useSelector((state)=> state.allProducts.products)

  const dispatch=useDispatch()



  useEffect(() => {
    AOS.init();
    getproducts()
  }, )



  const getproducts = async () => {
      await axios.get('https://productmanagementapplication.herokuapp.com/listproduct', {
      params: {
        'username': username
      }
    })
      .then((res) => {
        dispatch(listProducts(res.data.products))

      })
      .catch((err) => {
        console.log(err)
      })

      

  }

  const items =productlist && productlist.map((item,i) => {
    return <Productitem brandname={item.brandname} key={i} productname={item.productname} quantity={item.quantity} price={item.price} description={item.description} productid={item._id} index={i} />
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
        <div className='products'  data-aos="slide-up"
                                  data-aos-offset="200"
                                  data-aos-delay="100"
                                  data-aos-duration="1000"
                                  data-aos-easing="ease-in-out">
        {items}
        </div>
            
      </div>
     </div>
  )
}

export default Listproduct