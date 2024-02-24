import React, { useState } from 'react';
import './Footer.css'
import github from '../../assets/images/github_square_icon.svg'
import linkedin from '../../assets/images/icons8-linkedin.svg'
import facebook from '../../assets/images/icons8-facebook.svg'
import instagram from '../../assets/images/icons8-instagram.svg'
const Footer = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1' },
    { id: 2, name: 'Item 2', description: 'Description 2' },
    { id: 3, name: 'Item 3', description: 'Description 3' },
  ]);

  return (
    <div className='footer'>
        <div className='contact_me_email'>
          <div className='contact_me_text'>Say hi! Drop your message </div>
        </div>
        <div className='footer_social_links_wrapper'>
        <div className='footer_social_links'>
            <a href='https://github.com/divakar-yadav'><img src = {github} className='footer_github'/></a>
            <a href='https://www.linkedin.com/in/divakar-yadav-816358137'><img src = {linkedin} className='footer_linkedin'/></a>
            <a href='https://www.facebook.com/divakar.yadav.143'><img src = {facebook} className='footer_facebook'/></a>
            {/* <a href=''><img src = {instagram} className='footer_instagram'/></a> */}
        </div>
        </div>
        <div className='footer_copy_rights'>
        Divakar Yadav © 2023 All Rights Reserved.
        </div>
    </div>
  );
};

export default Footer;
