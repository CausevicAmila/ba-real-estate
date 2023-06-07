import Navbar from '../../components/Navbar/Navbar';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import SearchBar from "../../components/SearchBar/SearchBar";
import './PropertyDetail.css';
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import { RiUserLocationLine, RiHotelBedLine, RiSpace, RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBuildingHouse } from "react-icons/bi";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import prop7 from '../../public/prop7.jpg';
import prop8 from '../../public/prop8.jpg';
import prop9 from '../../public/prop9.jpg';
import prop10 from '../../public/prop10.jpg';


function PropertyDetails() {
  const [showSlider, setShowSlider] = useState(false);

  const handleImageClick = () => {
    setShowSlider(true);
  };

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: `${prop7}`,
      caption: 'Slide 1'
    },
    {
      url: `${prop8}`,
      caption: 'Slide 2'
    },
    {
      url: `${prop9}`,
      caption: 'Slide 3'
    },
    {
      url: `${prop10}`,
      caption: 'Slide 3'
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="search-bar" bis_skin_checked="1">
        <SearchBar />
      </div>

      <div className='back bg-lightgray'>
        <div className='mainDiv'>
          <div className='left-side'>
            <div className="slide-container">
              <Slide>
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div className='picture' style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    </div>
                  </div>
                ))}
              </Slide>
            </div>
            <div className='imagesInRow'>
              <img src={prop7} alt="" />
              <img src={prop8} alt="" />
              <img src={prop9} alt="" />
              <img src={prop10} alt="" />
            </div>
          </div>
          <div className='right-side'>
            <div className='info'>
              <div>
                <h1 className='mainTitle text-primary'>FLAT, TWO-BEDROOM SARAJEVO TOWER</h1>
                <p className='titleDesc'>Short Description eg. Top quality apartments with beautifull open view on Sarajevo.</p></div>
              <div className='priceDiv'>
                <div className='location'>
                  <RiUserLocationLine className="icon" />
                  <p>Džavida Haverića</p>

                </div>
                <div className='addInfo'>
                  <div className='bed'>
                    <RiHotelBedLine className='icon' />
                    <p>2</p>
                  </div>

                  <div className='bed'>
                    <RiSpace className='icon' />
                    <p>60m2</p>
                  </div>

                  <div className='bed'>
                    <BiBuildingHouse className='icon' />
                    <p>Type : Flat</p>
                  </div>

                </div>
                <div className='price'>
                  <RiMoneyDollarCircleLine className='icon text-primary' />
                  <h1 className='text-primary'>150 000</h1>
                </div>
              </div>
            </div>
            <div className='description'>
              <div className='leftdesc'>
                <hr></hr>
                <p>Size: 60m2</p>
                <p>Room number: 2</p>
                <p>Bathroom number: 1</p>
                <p>Year construction: 2019</p>
                <p>Floor: 10/26</p>
                <p>Heating: City central heating</p>
                <p>Windows: PVC and wood</p>
                <button >Request a Tour</button>
              </div>
              <div className='rightdesc'>
                <hr></hr>
                <ul>
  <li>Blinded door</li>
  <li>Lift</li>
  <li>Electrical power</li>
  <li>Internet</li>
  <li>Sewage</li>
  <li>Cable TV</li>
  <li>Interphone</li>
  <li>Water</li>
  <li>Pipe</li>
  <li>Public Parking</li>
  <li>Electricity</li>
</ul>


              </div>
            </div>
          </div></div>
        <div className='pd-text mt-6'> </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyDetails;
