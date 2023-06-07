import React from 'react';
import PropertyData from './PropertyData';
import { CardItems } from './cardItems';
import './Property.css';
function PropertyCard() {
  return (
    <div className='pcard'>
      {CardItems.map((card, index) => (
        <PropertyData
          key={index}
          pimage={card.pimage}
          header={card.header}
          desc={card.desc}
          address={card.address}
          bed = {card.bed}
          area = {card.area}
          price ={card.price}
          link={card.plink}
        />
      ))}
    </div>
  );
}

export default PropertyCard;