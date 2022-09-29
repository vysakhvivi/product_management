import React from 'react'
import '../css/login.css'
import Logoside from '../images/Login_Side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import { loginSchema } from '../schema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const initialValues={
email:"",
password:"",
};



function Login() {

  const navigate=useNavigate();

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:loginSchema,
    onSubmit:(vḁl̥u̥es) => {
      console.log('vḁl̥u̥es: ', vḁl̥u̥es);
     
    }
  })

  const PostData = async(res) => {
    res.preventDefault();

    const {email,password} = values;

    const response = await axios.post("http://localhost:5000/",{
    email, password
   },{ withCredentials: true })
   
   .then((response)=>{
      console.log(response.data);
      window.alert("Login successfull")
      navigate('/homepage')
   })
   .catch((err)=>{
    console.log(err)
    console.log(err.response)
    window.alert("Please Enter the correct details")
   })
  }
  


  return (
    <div>
      <img className='wave' src={wave} alt="img" />
      <div className='container'>
        <div className='img'>
          <img src={Logoside} alt='img' />
        </div>
        <div className='logincontainer'>
          <form onSubmit={handleSubmit} method='POST'>
            <img src={avatar} className='avatar' alt='img'/>
            <h2>LOGIN</h2>
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

           


            <input type='submit' className='button Loginbutton' value='LOGIN' onClick={PostData}/>

            <Link to={'/register'} className='notuser' >Not Current user? Register here</Link>
          </form>
          
        </div>
      </div>
     
      </div>
  )
}

export default Login