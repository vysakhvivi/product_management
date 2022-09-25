import React from 'react'
import '../css/home/home.css'
import footerimage from '../images/home/footer-bg.png'
import sliderbg from '../images/home/slider-left.png'
import Navbar from './Navbar'
import additem from '../images/homeicons/additem.svg'
import edititem from '../images/homeicons/setting-3.svg'
import listitem from '../images/homeicons/shopping-cart.svg'

function Home() {
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
            <a href="" className='itemservice'>
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
            <a href="" className='itemservice'>
              <div class="itemcard">
                <div class="service-item second-service">
                  <div class="icon">
                    <img src={edititem} alt="edit item logo" className='servicelogo' />
                  </div>
                  <h4>Update Products</h4>
                  <p>Click here to update the product details of the user such as Brand name, Product name, Product image, Product quanitity, Product Description etc.</p>

                </div>
              </div>
            </a>
            <a href="" className='itemservice'>
              <div class="itemcard">
                <div class="service-item third-service">
                  <div class="icon">
                    <img src={listitem} alt="List item image" className='servicelogo' />
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
