import React from 'react'
import registerside from '../images/Register_side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import {Link} from 'react-router-dom'
import '../css/register.css'

function Register() {
  return (
    <div>
      <img className='wave' src={wave} />
      <div className='container'>
        <div className='img'>
          <img src={registerside} />
        </div>
        <div className='Registercontainer'>
          <form>
            <img src={avatar} className='avatar'/>
            <h2>Registration</h2>
            <div className='inputdiv one focus'>
              <div className='i'>
              <i class="fas fa-user"></i>
              </div>
              <div>
                <h5>Username</h5>
                <input className='input' type='text'  />
              </div>
            </div>
            <div className='inputdiv two focus'>
              <div className='i'>
              <i class="fas fa-at"></i>
              </div>
              <div>
                <h5>Email</h5>
                <input className='input' type='email'  />
              </div>
            </div>
            <div className='inputdiv three focus'>
              <div className='i'>
              <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h5>Place</h5>
                <input className='input' type='text'  />
              </div>
            </div>
            <div className='inputdiv four focus'>
              <div className='i'>
              <i class="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <input className='input' type='password'/>
              </div>
              
            </div>

           


            <input type='submit' className='button Loginbutton' value='REGISTER'/>

            <Link to={'/login'} className='notuser' >Already a user? Login here</Link>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Register