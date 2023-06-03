import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Login.css'; // Import the CSS file for styling

function Login() {
  return (
    <>
      <section className="h-screen bg-white">
        <Navbar />
        <div className="login-container">
          <div className="h-containerlog bg-lightgray text-primary text-3xl leading-9 font-extrabold">
            <h1>Hello</h1>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Login;
