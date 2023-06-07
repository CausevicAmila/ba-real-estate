import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import './AboutUsPage.css';
import Footer from '../../components/Footer/Footer';
function AboutUs() {
    return(
        <>
        <section className="h-screen">
        <Navbar />
        <div className='h-container'>
            <div className='aheader text-primary font-semibold font-inter text-2xl leading-8 uppercase'>
                ABOUT BA REAL ESTATE
             </div>
             <div className='text font-normal text-darkgray text-xl leading-7 '>
             BA Real Estate is a company driven by a shared vision to establish a secure, streamlined, and professional real estate market 
             environment in Bosnia and Herzegovina. <br></br>

             <br></br>Since our establishment in 2007, BA Real Estate has emerged as the unrivaled leader in Bosnia and Herzegovina. 
             We boast a widespread presence with five branches in Sarajevo, a team of over 15 active agents, and an impressive track record 
             of over 1,000 successful transactions in the past three years. <br></br> <br></br> 
             
             
             When you choose BA Real Estate as your real estate services partner, you opt for unwavering QUALITY, utmost PROFESSIONALISM, enhanced SAFETY, and exceptional EFFICIENCY at every level.
             
             <br></br><br></br>Don't hesitate to contact us today and discover how we can help you!<br></br><br></br>
             
             The BA Real Estate Team
             </div>

            <div className="image-container">
                <img className="about-image object-cover" src="../src/public/about1.png" alt="Image 1" />
                <img className="about-image object-cover" src="../src/public/about2.png" alt="Image 2" />
                <img className="about-image object-cover" src="../src/public/about3.png" alt="Image 3" />
                <img className="about-image object-cover" src="../src/public/about4.png" alt="Image 4" />
            </div>
        </div>
        <Footer />

        
        </section>
        </>
    );
  

}


export default AboutUs;