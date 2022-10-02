import React from 'react'
import '../css/register.css'
import registerside from '../images/Register_side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerSchema } from '../schema'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const initialValues={
  username:"",
  email:"",
  place:"",
  password:"",
};

function Register() {

  const navigate=useNavigate();

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:registerSchema,
    onSubmit:(val̥ues) => {
      console.log("🚀 ~ file: Register.js ~ line 16 ~ Register ~ val̥ues", val̥ues)
      return {
    }
    }
  })


  const PostData = async(res) => {
    res.preventDefault();

    const {username,email,place,password} = values;

    await axios.post("http://localhost:5000/register",{
    username, email, place, password
   })
   
   .then((response)=>{
      console.log(response.data);
      window.alert("Registration Successfull.. Please Log in now")
      navigate('/login')
   })
   .catch((err)=>{
    console.log(err)
    console.log(err.response)
    window.alert("Registration unsuccessfull. Please Check you details.")
   })


    // const res = await fetch('/register', {
    //     method : "POST" ,
    //     headers: {
    //         "Content-Type" : "application/json"
    //     } ,
    //     body : JSON.stringify ( {
    //     username,email,place,password
    //     } )
    //   })

    //   const data= await res.json();
    //   if(res.status === 422 || !data )
    //   {
    //   alert("invalid registration")
    //   }
    //   else{
    //     alert("Registration successfull")

    //     History.pushState('/')
    //   }
    }
  return (
    <div>

      <img className='wave1' src={wave} alt="pic" />
      <div className='container1'>
        <div className='img1'>
          <img src={registerside} alt="pic"/>
        </div>
        <div className='Registercontainer'>
          <form method='POST' className='form1' onSubmit={handleSubmit}>
            <img src={avatar} className='avatar1' alt='pic' />
            <h2>Registration</h2>
            <div className='inputdiv1 one focus1'>
              <div className='i1'>
                <i class="fas fa-user"></i>
              </div>
              <div>
                <h5>Username</h5>
                <input className='inp2' type='text' autoComplete='off' name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} />
                { errors.username && touched.username ? (<p className='form-error'>{errors.username}</p>) :null }
              </div>
            </div>
            <div className='inputdiv1 two focus1'>
              <div className='i1'>
                <i class="fas fa-at"></i>
              </div>
              <div>
                <h5>Email</h5>
                <input className='inp2' type='email' autoComplete='off' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                { errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) :null }

              </div>
            </div>
            <div className='inputdiv1 focus1'>
              <div className='i1'>
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h5>Place</h5>
                <input className='inp2' type='text' autoComplete='off' name='place' value={values.place} onChange={handleChange} onBlur={handleBlur} />
                { errors.place && touched.place ? (<p className='form-error'>{errors.place}</p>) :null }
              </div>
            </div>
            <div className='inputdiv1 four focus1'>
              <div className='i1'>
                <i class="fas fa-lock"></i>
              </div>
              <div>
                <h5 className='pass1'>Password</h5>
                <input className='inp2' type='password' autoComplete='off' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                { errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) :null }
              </div>

            </div>

            <input type='submit' className='button1 Loginbutton1' value='REGISTER' onClick={PostData} />
            <Link to={'/login'} className='notuser1' >Already a user? Login here</Link>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Register