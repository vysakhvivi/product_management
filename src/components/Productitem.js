import React,{useEffect} from 'react'
import '../css/productitem.css'
import productimage from '../images/product/2.png'
import axios from 'axios'
import { Link } from 'react-router-dom'




function Productitem({ brandname, productname, quantity, price, description ,productid}) {

  



const deletedata= async (id)=>{
  console.log(id)
 const result =  await axios.delete(`localhost:5000/deleteproduct`,{
params:{
  'id':id
}, 
headers: {
  Accept: 'application/json; charset=utf-8',
  'Content-Type': 'application/json',
},
withCredentials:true
})
  .then((res) => {
  res.status(200).send('successfuully logged in ')
  })
  .catch((err) => {
    console.log(err)
  })


}




  return (
    <div >
      <a href="./product" className='productclick'>
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
                      <h5 className='p2'>{productid}</h5>
                    </div>
        
                </div>
               
                <div className='productbuttons'>
                  
                    <form action="">
                      <div className='editbutton'>
                        <Link id='RouterNavLink' type='button' to={"/editproduct/"+productid} class="editbuttonlink">
                          <span class="editbuttoncontent">edit </span>
                        </Link>
                      </div>
                    </form>
                    <form action="" >
                      <div className='button2'>
                        <button class="button1234" onClick={()=>deletedata({productid})}>
                          <span class="button-content">Delete </span>
                        </button>
                      
                      </div>
                    </form>

                  
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