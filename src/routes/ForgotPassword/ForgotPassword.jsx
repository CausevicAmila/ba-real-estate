import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../ForgotPassword/ForgotPassword.css';
import { MdEmail, MdPassword } from 'react-icons/md'; 
import { Link } from 'react-router-dom';
function ForgotPassword() {
    return(
      <div className="page-wrapper">
      <Navbar />
      <section className="h-screen">
          <div className="h-containerf bg-lightgray text-primary">
            <div>
              <p className='text1  text-3xl leading-9 font-extrabold'>Forgot password?</p>
              <p className='text2 text-xl leading-7 font-normal' >If you don't remember your password, please enter the email address. <br></br><br></br>

              Subsequently, an email will be sent to your provided address containing a link to initiate the process of resetting your access code. </p>
            </div>
            <div className='formf text-xl leading-7 font-normal text-primary'>
              <div className='femail mt-16'>
                <p >Email</p>
                  <div className="email bg-lightgray">
                    <MdEmail className="email-icon text-gray" />
                    <input type="text" className="email-input" placeholder="Enter your email " />
                  </div>
              </div>

            </div>
            <div>
              <button className="login-button bg-accent text-lightgray">Send</button>
            </div>
          </div>
      </section>
      <Footer /> 
    </div>
    );
  

}


export default ForgotPassword;