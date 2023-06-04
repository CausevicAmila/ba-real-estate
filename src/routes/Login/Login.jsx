import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Login.css'; // Import the CSS file for styling
import { MdEmail, MdPassword } from 'react-icons/md'; 
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    <div className="page-wrapper">
      <Navbar />
      <section className="h-screen">
          <div className="h-containerlog bg-lightgray text-primary">
            <div>
              <p className='text1  text-3xl leading-9 font-extrabold'>Lets’s sign you in!</p>
              <p className='text2 text-xl leading-7 font-normal' >Welcome back! <br></br><br></br>

              Please enter your email address and password to access your account. </p>
            </div>
            <div className='forml text-xl leading-7 font-normal text-primary'>
              <div className='femail'>
                <p >Email</p>
                  <div className="email bg-lightgray">
                    <MdEmail className="email-icon text-gray" />
                    <input type="text" className="email-input" placeholder="Enter your email " />
                  </div>
              </div>
              <div className='fpassword'>
                <p >Password</p>
                  <div className="email bg-lightgray">
                    <MdPassword className="email-icon text-gray" />
                    <input type="text" className="email-input" placeholder="Enter your password " />
                  </div>
              </div>
              <div className='flinks'>
                 <Link to="/forgot">
                    <button>Forgot Password?</button>
                </Link>
                <p >
                  Don’t have an account?  
                  <Link to="/register">
                    <button className="ml-2 font-bold">Register Now!</button>
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <button className="login-button bg-accent text-lightgray">Log in</button>
            </div>
          </div>
      </section>
      <Footer /> 
    </div>
    </>
    
  );
}

export default Login;
