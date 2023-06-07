import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer bg-lightgray text-primary font-semibold font-inter text-2xl leading-8 uppercase">
      <div className="footer-left">
        <div className="contact-info">
          <p>Contact</p>
          <p className='mail text-xl font-normal font-inter leading-7 lowercase'>info@barealestate.com</p>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
