import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../Register/Register.css';
import { MdEmail, MdPassword } from 'react-icons/md'; 
import { CgProfile } from 'react-icons/cg';
import TogleButton from './TogleButton';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };
  return (
    <>
      <div className="page-wrapper">
        <Navbar />
        <section className="h-screen">
          <div className="h-containerreg bg-lightgray text-primary">
            <div>
              <p className='text1 text-3xl leading-9 font-extrabold'>Get Started!</p>
              <p className='text2 text-xl leading-7 font-normal'>
                Welcome to our registration page! <br /><br />
                To create your account, please provide us with your email address and choose a secure password.
              </p>
            </div>
            <div className='formr text-xl leading-7 font-normal text-primary'>
              <div className='name'>
                <div>
                  <p>First Name</p>
                  <div className="emailreg bg-lightgray">
                    <CgProfile className="email-icon text-gray" />
                    <input type="text" className="remail-input" placeholder="Enter your first name" />
                  </div>
                </div>
                <div>
                  <p>Last Name</p>
                  <div className="emailreg bg-lightgray">
                    <CgProfile className="email-icon text-gray" />
                    <input type="text" className="remail-input" placeholder="Enter your last name" />
                  </div>
                </div>
              </div>
              <div className='remail'>
                <p>Email</p>
                <div className="reemail bg-lightgray">
                  <MdEmail className="email-icon text-gray" />
                  <input type="text" className="email-input" placeholder="Enter your email" />
                </div>
              </div>
              <div className='rpassword'>
                <p>Password</p>
                <div className="reemail bg-lightgray">
                  <MdPassword className="email-icon text-gray" />
                  <input type="text" className="email-input" placeholder="Enter your password" />
                </div>
              </div>
              <div className='toggle-container mt-6 mb-6'>
                <p className='toggle-label text-sm w-72 h-7 mr-24'>
                  I want to receive email notifications when new properties are added to the platform.
                </p>
                <TogleButton />
              </div>
            </div>
            <div>
              <Link to="/login" className={`register-button bg-accent text-lightgray ${isButtonClicked ? 'clicked' : ''}`}>
                <button onClick={handleClick}>Sign up</button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Register;
