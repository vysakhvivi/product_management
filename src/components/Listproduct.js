import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Productitem from '../components/Productitem'
import { BrandingWatermarkRounded } from '@mui/icons-material';




function Listproduct() {

  const [products, setProducts] = useState([]);

  const [products2,setProducts2] = useState([])

  const email = localStorage.getItem('email')


  const username = localStorage.getItem('username')



  useEffect(() => {
    getproducts()
  }, [])




  const getproducts = async()=>{
    let result=await axios.get('http://localhost:5000/listproduct',{
      params:{
        'username':username
      }
    })
      .then((res)=>{
        setProducts(res.data)
        setProducts2(res.data.products)
      })
      .catch((err)=>{
          console.log(err)
      })

      
    
  }

  let content=null

  console.log(products)

  console.table(products2)

  const items = products2.map((item)=>{
    return <Productitem brandname={item.brandname} productname={item.productname} quantity={item.quantity} price={item.price} description={item.description}/>
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
      {items}
    </div>
  )
}

export default Listproduct