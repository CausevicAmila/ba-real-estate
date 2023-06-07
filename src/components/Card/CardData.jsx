import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardData(props) {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className='t-card bg-lightgray'>
      <div className='t-image object-cover mt-6 ml-6 mr-6'>
        <img src={props.image} alt='image' />
      </div>
      <p className='text text-2xl leading-8 font-inter text-primary font-semibold uppercase mt-6 text-center'>
        {props.heading}
      </p>
      <p className='text text-xl leading-7 font-inter text-darkgray font-normal mt-6'>
        {props.text}
      </p>
      <div className='mt-6'>
        <div className='card-button-container'>
            <Link to={props.link} className={`card-button bg-accent text-lightgray ${isButtonClicked ? 'clicked' : ''}`}>
                 <button onClick={handleClick}>See Options</button>
             </Link>
        </div>
      </div>
    </div>
  );
}

export default CardData;
