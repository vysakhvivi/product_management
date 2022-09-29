import React,{useEffect,useState} from 'react'
import axios from 'axios';




function Listproduct() {

  const [products,setProducts]=useState([]);

  const email= localStorage.getItem('email')

  const getproducts=async()=>{
    let result = axios.get('http://localhost5000/listproduct',{
        params:{
          email:email
        }
    })
    result= await result.json()
    setProducts(result)
 
  }
  


  return (


    <div>
        
    </div>
  )
}

export default Listproduct