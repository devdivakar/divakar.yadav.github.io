import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './VerticalCard.css';

const VerticalCard = ({ imageUrl, title, description, chips, redirect }) => {
  console.log("----redirect----",redirect)

  return (
    // <div className='vertical_card_wrapper'>
    <div className="vertical_card">
    <div class="vertical-image-container">
      <img src={imageUrl.default} alt="Card Image" className="vertical_card_img" />
      <div class="image-overlay">View</div>
      </div>
      <Link to={redirect} style={{ textDecoration: 'none', outline: 'none' }}>
                    <div className="vertical_card-content">
        <h2 className="vertical_card-title">{title}</h2>
        <p className="vertical_card-description">{description}</p>
        <div className="vertical_card_chips">
              {chips.map((chip, index) => (
                <span key={index} className="chip">{chip}</span>
              ))}
            </div>
      </div>
    </Link>
    </div>
    // </div>
  );
};

export default VerticalCard;