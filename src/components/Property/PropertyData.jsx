import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Property.css';
import { IoLocationOutline } from 'react-icons/io5';
import {FaBed} from 'react-icons/fa';
import {MdSpaceBar} from 'react-icons/md';
import {MdOutlineEuro} from 'react-icons/md';

function PropertyData(props) {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };
 
  return (
    <div className='p-card bg-lightgray'>
      <div className='p-image object-cover mt-6 ml-6 mr-6'>
        <img src={props.pimage} alt='image' />
      </div>
      <p className='header text-2xl leading-8 font-inter text-primary font-semibold uppercase mt-6 text-center'>
        {props.header}
      </p>
      <p className='desc text-xl leading-7 font-inter text-darkgray font-normal mt-6'>
        {props.desc}
      </p>
      <div className='location mt-6'>
        <IoLocationOutline className='location-icon text-darkgray ' />
        <p className='address text-darkgray text-xl leading-7 font-inter'>{props.address}</p>
      </div>
  
      <div className='rooms-area mt-4 ml-6'>
        <div className='room-container'>
          <FaBed className='icon bed-icon text-darkgray' />
          <p className='roomnumber text-darkgray text-xl leading-7 font-inter'>{props.bed}</p>
        </div>
        <div className='room-container'>
          <MdSpaceBar className='icon area-icon text-darkgray' />
          <p className='areanumber text-darkgray text-xl leading-7 font-inter'>{props.area}</p>
        </div>
      </div>
      <div className='price-container ml-6 mt-3'>
          <MdOutlineEuro className='icon text-primary font-bold' />
          <p className='price text-primary text-xl leading-7 font-inter  font-bold'>{props.price}</p>
        </div>
  
      <div className='mb-6'>
        <div className='propcard-button-container'>
          <Link
            to={props.link}

            className={`propcard-button bg-accent text-lightgray ${
              isButtonClicked ? 'clicked' : ''
            }`}
          >
            <button onClick={handleClick} >See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyData;
