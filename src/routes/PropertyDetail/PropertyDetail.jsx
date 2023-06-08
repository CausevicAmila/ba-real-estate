import Navbar from '../../components/Navbar/Navbar';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import './PropertyDetail.css';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';

function PropertyDetails() {
  const [showSlider, setShowSlider] = useState(false);

  const handleImageClick = () => {
    setShowSlider(true);
  };

  return (
    <div>
      <Navbar />

      <div className='back bg-lightgray'>
        <div className='pd-text mt-6'>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
