import React from 'react'
import '../css/login.css'
import Logoside from '../images/Login_Side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'


function Login() {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:registerSchema,
    onSubmit:(val̥u̥es) => {
     
    }
  })



  return (
    <div>
      <img className='wave' src={wave} />
      <div className='container'>
        <div className='img'>
          <img src={Logoside} />
        </div>
        <div className='logincontainer'>
          <form>
            <img src={avatar} className='avatar'/>
            <h2>Welcome</h2>
            <div className='inputdiv one focus'>
              <div className='i'>
              <i class="fas fa-at"></i>
              </div>
              <div>
                <h5>Email</h5>
                <input className='input' type='email' name='Loginemail' id='email'  />
              </div>
            </div>
            <div className='inputdiv two focus'>
              <div className='i'>
              <i class="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <input className='input' type='password' name='loginpassword' id='password'/>
              </div>
              
            </div>

           


            <input type='submit' className='button Loginbutton' value='LOGIN'/>

            <Link to={'/register'} className='notuser' >Not Current user? Register here</Link>
          </form>
          
        </div>
      </div>
      </div>
  )
}

export default Login