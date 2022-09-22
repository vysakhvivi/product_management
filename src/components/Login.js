import React from 'react'
import Logoside from '../images/Login_Side.png'
import wave from '../images/wave.png'
import avatar from '../images/avatar.png'
import '../css/login.css'
import {Link} from 'react-router-dom'


function Login() {
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
              <i class="fas fa-user"></i>
              </div>
              <div>
                <h5>Username</h5>
                <input className='input' type='text'  />
              </div>
            </div>
            <div className='inputdiv two focus'>
              <div className='i'>
              <i class="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <input className='input' type='password'/>
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