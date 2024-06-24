// src/components/PriceCard.js

import React from 'react';
import './PriceCard.css';

const PriceCard = ({ title, price, features }) => {
  return (
    <div className="price-card">
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className={feature.isAvailable ? 'available' : 'unavailable'}>
            {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PriceCard;
