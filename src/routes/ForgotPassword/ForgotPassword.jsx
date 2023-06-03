import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import '../Login/Login.css'; // Import the CSS file for styling
function ForgotPassword() {
    return(
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
              </div>
          </section>
          <Footer /> 
        </div>
        </>
    );
  

}


export default ForgotPassword;