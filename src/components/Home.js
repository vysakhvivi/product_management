import React from 'react'
import '../css/home/home.css'

import Navbar from './Navbar'
import additem from '../images/homeicons/additem.svg'
import edititem from '../images/homeicons/setting-3.svg'
import listitem from '../images/homeicons/shopping-cart.svg'


function Home() {



  // const callHomePage= async(req,res) =>{
  //     try{
  //         await axios.get('http://localhost:5000/homepage',{
  //         Headers:{
  //           "Accept":"application/json",
  //           "Content-Type":"application/json"
  //         }
  //        },{ withCredentials: true })

  //        const data = await res.json();
  //        console.log(data);

  //        if(!res.status === 200){
  //         const error = new Error(res.error)
  //         throw error;
  //        }
  //     }
      
      
  //     catch(err){
  //         navigate('/')
  //     }
  // }

  // useEffect(() => {
   
  //   callHomePage();
  // }, [])
  
  return (
    <div>

      <Navbar />

      {/* Main Starts */}

      <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6 align-self-center">
                  <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div class="row">
                      <div class="col-lg-12">
                        <h2>Product Management Application</h2>
                        <p>With this application you can keep an inventory of all the products in the warehouse. You can add products, delete products and list all the products under the user. </p>
                      </div>


                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="right-image wow fadeInRight">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="services" class="services section">
        <div className='cont1'>
          <h1 className='serviceheading'>
            Features we Provide
          </h1>
          <p className='servicepara'>
            The services provided by the Product Management Application are as Follow.
          </p>
        </div>
        <div class="servicecontainer">
          <div class="cont2">
            <a href="/addproduct" className='itemservice'>
              <div class="itemcard">
                <div class="service-item first-service">
                  <div class="icon">
                    <img src={additem} alt="Add item logo" className='servicelogo' />
                  </div>
                  <h4>Add Products</h4>
                  <p>Click here to Add products to the User database. You can add Brand Name, Product name, Product Image, Product Quantity, Product description etc.</p>

                </div>
              </div>
            </a>
            
            <a href="/listproduct" className='itemservice'>
              <div class="itemcard">
                <div class="service-item third-service">
                  <div class="icon">
                    <img src={listitem} alt="List item logo" className='servicelogo' />
                  </div>
                  <h4>List Products</h4>
                  <p>Click here to list the details of all the products that are registered under the loggedin user.</p>

                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footercontentdiv'>
          <div className='infoheading'>
            <h2>For any information regarding the application, Contact me</h2>
          </div>


          <div className='contactdiv'>
            <a href="/" className='contactme'>
              <button class="bn54">
                <form method='GET'>
                  
                </form>
                <span class="bn54span">Contact Me</span>
              </button>
            </a>
          </div>


        </div>
        <div className='myinfo'>
        <h6>Developed by Vysakh M Nair. Sayone React Intern</h6>
        </div>
      </footer>

    </div>
  )
}

export default Home
