import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './HorizontalCard.css';
import banner from '../../assets/images/test1.svg'

const HorizontalCard = (props) => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState('');


    const openPopup = (imageSrc) => {
        setPopupImageSrc(imageSrc);
        setPopupOpen(true);
      };

      const closePopup = () => {
        setPopupOpen(false);
      };
      console.log(props.redirect,"redirect")
  return (
    <div className="card">
    <div class="image-container" onClick={()=>{openPopup(props.imageUrl)}}>
      <img src={props.imageUrl.default} alt="Card Image" className="card-img" />
      <div class="image-overlay">View</div>
      </div>
      {popupOpen && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              maxWidth: '80%',
              maxHeight: '80%',
              overflow: 'auto',
              position: 'relative',
            }}
          >
            <span
              onClick={closePopup}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '20px',
              }}
            >
              &times;
            </span>
            <img
              src={popupImageSrc}
              alt="Large Image"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      )}

        <Link to= '/detail' state={ {detail: JSON.stringify(props.detail) }}  style={{ textDecoration: 'none', outline: 'none' }}>
              <div className="card-content">
              <h2 className="card-title">{props.title}</h2>
              <p className="card-description">{props.description}</p>
              <div className="horizontal_card_chips">
                    {props.chips.map((chip, index) => (
                      <span key={index} className="chip">{chip}</span>
                    ))}
              </div>
              </div>
        </Link>
    </div>
  );
};

export default HorizontalCard;