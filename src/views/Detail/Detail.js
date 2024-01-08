import React, { useState } from 'react';
import banner from '../../assets/images/Marc.drawio.svg'
import './Detail.css';
const Detail = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupImageSrc, setPopupImageSrc] = useState('');


    const openPopup = (imageSrc) => {
        setPopupImageSrc(imageSrc);
        setPopupOpen(true);
      };
    
      const closePopup = () => {
        setPopupOpen(false);
      };
  return (
    <div className='detail'>
        <div className='detail_page_container'>
        <div className='detail_title'>Audit Management System High Level OverView</div>
      {/* Your contact page content goes here */}
      <div className='detail_banner_image'>
        <img src ={banner} className='detail_banner' onClick={()=>{openPopup(banner)}}/>
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
      <div className='detail_content'>
      <div className='detail_content_para'>
      <div className='detail_content_heading'>
      Where does it come from?
      </div>
      <div className='detail_para'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
      </div>

<div className='detail_content_para'>
<div className='detail_content_heading'>
      Where does it come from?
      </div>
      <div className='detail_para'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
</div>
<div className='detail_content_para'>
<div className='detail_content_heading'>
      Where does it come from?
      </div>
      <div className='detail_para'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
</div>

<div className='detail_content_para'>
<div className='detail_content_heading'>
      Where does it come from?
      </div>
      <div className='detail_para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default Detail;