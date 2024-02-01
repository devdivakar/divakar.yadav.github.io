import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink, Element } from 'react-scroll';
import './Header.css';

const Header = () => {

  const [menuStatus, setMenuStatus] = useState({
    style:"menu",
    menuStatus:"open"
  });


  const handleClick = ()=> {
    switch(menuStatus.menuStatus)
    {
      case "open":
        setMenuStatus({
          menuStatus:"close",
          style:"menu active"
        });
        break;
      case "close":
        setMenuStatus({
          menuStatus:"open",
          style:"menu"
        });
        break;
    }        
  }

  const toggleMenu = () => {
    setMenuStatus((prevStatus) => ({
      menuStatus: prevStatus.menuStatus === "open" ? "close" : "open",
      style: prevStatus.menuStatus === "open" ? "menu active" : "menu"
    }));
  };

  const closeMenu = () => {
    setMenuStatus({
      menuStatus: "open",
      style: "menu"
    });
  };

  const navLinks = [
    { url: 'about-me', name: 'About Me' },
    { url: 'projects', name: 'Projects' },
    { url: 'blogs', name: 'Blogs' },
    { url: 'contact-me', name: 'Contact Me' },
  ];
  return (
    <div className='header_wrapper_outer'>
    <div className='header_wrapper'>
    <div className='name'>Divakar Yadav {'</>'}</div>
    {/* <div className='header_menu_icon' onClick={handleClick}>Menu</div> */}
    {/* <div className='header_menu_icon' onClick={toggleMenu}>
          {menuStatus.menuStatus === "open" ? "Menu" : "Close"}
        </div> */}
        <div className="header_menu_icon" onClick={toggleMenu}>
          {menuStatus.menuStatus === 'open' ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </div>
    <div className='symlinks'>
      {navLinks.map(({ url, name }) => (
                  <li>
                    <ScrollLink to={url} smooth={true} duration={500} onClick={closeMenu}>
                    {name}
          </ScrollLink>
                  </li>
                ))}
    </div>
</div>
    <div>
          <div className={menuStatus.style}>
          <button className="close_button" onClick={closeMenu}>
            &times;
          </button>               
            <ul>
              {navLinks.map(({ url, name }) => (
                <li>
                  <ScrollLink to={url} smooth={true} duration={500} onClick={closeMenu}>
                  {name}
        </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
    </div>
    <hr className='header_divider'/>
    </div>
  );
};

export default Header;