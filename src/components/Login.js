import React from 'react'
import '../css/login.css'
import Logoside from '../images/Login_Side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import { loginSchema } from '../schema'
import { useDispatch } from 'react-redux'
import {login} from '../redux/userSlice'

const initialValues={
email:"",
password:"",
};



function Login() {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(vḁl̥u̥es) => {
      console.log('vḁl̥u̥es: ', vḁl̥u̥es);
     
    }
  })
  const dispatch=useDispatch();

  dispatch(login({
    email:values.email,
    password:values.password,
    loggedIn:true,
  }))




  return (
    <div>
      <img className='wave' src={wave} />
      <div className='container'>
        <div className='img'>
          <img src={Logoside} />
        </div>
        <div className='logincontainer'>
          <form onSubmit={handleSubmit}>
            <img src={avatar} className='avatar'/>
            <h2>Welcome</h2>
            <div className='inputdiv one focus'>
              <div className='i'>
              <i class="fas fa-at"></i>
              </div>
              <div>
                <h5>Email</h5>
                <input className='input' autoComplete='off' type='email' name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                { errors.email && touched.email ? (<p className='form-error1'>{errors.email}</p>) :null }
              </div>
            </div>
            <div className='inputdiv two focus'>
              <div className='i'>
              <i class="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <input className='input' autoComplete='off' type='password' name='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                { errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) :null }
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