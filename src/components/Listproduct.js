import React, { useEffect, useState } from 'react'
import axios from 'axios';




function Listproduct() {

  const [products, setProducts] = useState([]);

  const email = localStorage.getItem()


  const username = localStorage.getItem('username')


  useEffect(() => {
    
  }, [])

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
      <h2>hello .. this is list product page.</h2>
    </div>
  )
}

export default Listproduct