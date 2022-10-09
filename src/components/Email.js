import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import '../css/email.css'
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar'
import { contactSchema } from '../schema'
import { useFormik } from 'formik';



const initialValues={
  username:"",
  useremail:"",
  usermessage:''
}

function Email() {

  const {values,errors,touched,handleBlur,handleChange} = useFormik({
    initialValues:initialValues,
    validationSchema:contactSchema,
    onSubmit:(vḁl̥u̥es) => {
      console.log('vḁl̥u̥es: ', vḁl̥u̥es);
     
    }
  })



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
    <div className='emaildiv'>
      <Navbar />
      <div className="content">
        <form onSubmit={sendEmail} ref={form} className="formemail" name="contactForm">
          <div className="container123456">
            <div className='emailheading'>
              <h2>CONTACT ME</h2>
            </div>
            <div className='emailcontents'>
              <div class="form__group field">
                <input name='username' autocomplete='off'  value={values.username}
                    onChange={handleChange}
                     onBlur={handleBlur}  required="" placeholder="Name" class="form__field" type="input" />
                     { errors.username && touched.username ? (<p className='form-erroremail'>{errors.username}</p>) :null }
              </div>
              <div class="form__group field">
                <input name='useremail' autocomplete='off'  value={values.useremail}
                    onChange={handleChange}
                     onBlur={handleBlur} required="" placeholder="Email" class="form__field" type="input" />
                     { errors.useremail && touched.useremail ? (<p className='form-erroremail'>{errors.useremail}</p>) :null }
              </div>
              <div class="form__group field">
                <textarea name='usermessage' autocomplete='off'  value={values.usermessage}
                    onChange={handleChange}
                     onBlur={handleBlur} required="" placeholder="Message" rows={4} cols={20} class="form__field" type="input" />
                     { errors.usermessage && touched.usermessage ? (<p className='form-erroremail'>{errors.usermessage}</p>) :null }
              </div>

            </div>
            <div className='emailbutton'>
              <button type='submit' className='emailsubmit'> SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Email