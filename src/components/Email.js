import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import '../css/email.css'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar'

function Email() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lowvue9",
        "template_atqge43",
        form.current,
        "UiMLDEsm3HxiwP00O"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          Swal.fire({
            icon: 'success',
            title: 'Mail sent successfully'
          })
        },
        (error) => {
          console.log(error.text);
        }
      );
  };





  return (
    <div>

      <Navbar/>
  <div className="content">
    
    <div className="container">
      <div className="row align-items-stretch no-gutters contact-wrap">
        <div className="col-md-12">
          <div className="form h-100">
            <h3>Get Started</h3>
            <form onSubmit={sendEmail} ref={form} className="" name="contactForm">
              <div className="row">
                <div className="">
                  <label for="" className="col-form-label">Name *</label>
                  <input type="text" className="" name="username" placeholder="Your name"/>
                </div>
                <div className="">
                  <label for="" className="col-form-label">Email *</label>
                  <input type="text" className="" name="useremail" placeholder="Your email"/>
                </div>
              </div>

              

              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label for="message" className="col-form-label">Message *</label>
                  <textarea className="" name="usermessage" cols="30" rows="4"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                  
                </div>
              </div>
            </form>

            

          </div>
        </div>
      </div>
    </div>

  </div>
      </div>
  )
}

export default Email