import React from 'react'
import '../css/register.css'
import registerside from '../images/Register_side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import { registerSchema } from '../schema'

const initialValues={
  username:"",
  email:"",
  place:"",
  password:"",
};

function Register() {

  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:registerSchema,
    onSubmit:(val̥ues) => {
      console.log("🚀 ~ file: Register.js ~ line 16 ~ Register ~ val̥ues", val̥ues)
      return {
    }
    }
  })

  return (
    <div>

      <img className='wave1' src={wave} />
      <div className='container1'>
        <div className='img1'>
          <img src={registerside} />
        </div>
        <div className='Registercontainer'>
          <form className='form1' onSubmit={handleSubmit}>
            <img src={avatar} className='avatar1' />
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
            <div className='inputdiv1 three focus1'>
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

            <input type='submit' className='button1 Loginbutton1' value='REGISTER' />
            <Link to={'/login'} className='notuser1' >Already a user? Login here</Link>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Register