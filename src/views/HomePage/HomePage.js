import React, { useState, useEffect } from 'react';
import './HomePage.css';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import Card1 from '../../assets/images/exploreplugin.gif';
import Stepper from '../../components/Stepper/Stepper';
import { Link as ScrollLink, Element } from 'react-scroll';

const HomePage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(24 34 44)', 
};

// const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//   // Function to handle the scroll event
//   const handleScroll = () => {
//     // Set isScrolled to true when the user has scrolled down
//     setIsScrolled(window.scrollY > 0);
//   };

//   // Attach the event listener when the component mounts
//   window.addEventListener('scroll', handleScroll);

//   // Detach the event listener when the component unmounts
//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, [isScrolled]);

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', description: 'Description 1',chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'] },
    { id: 2, name: 'Item 2', description: 'Description 2',chips: ['Tag C', 'Tag D'] },
    { id: 3, name: 'Item 3', description: 'Description 3', chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'] },
  ]);

  return (
    <div style={pageStyle}>
      <div className='homepage'>
        <div className='homepage_content'>
          <div className="crowsel_wrapper">
          <p className='homepage_crowsel_text_static_text'> Hi there 👋</p>
            <div className='homepage_title_text' style={{ color: 'white' }}>
                <b>
                        <span1>
                            I'm a Experienced Software Engineer<br /> 
                            A System Design Geek<br />
                            I've Managed and Developed High Scale Web systems<br />
                            Built Distributed System<br />
                            A Product Thinker <br />
                        </span1>
                </b>
        </div>
          </div>
            <div className='homepage_intro_text'>I am a Upcomming MSCS graduate from University of Wisconsin-Milwaukee, Passionate Software Engineer with 4 years of experience in developing web applications and backend systems. Experienced in working with both small and large teams across multiple succesful products based companies.</div>
            <div className='homepage_symlinks'></div>
        </div>
        <div className='homepage_banner_img'>
            <img/>
        </div>
        <hr/>
        <div className='homepage_list_projects_title_text'>Work Experience</div>
        <Stepper/>
        <hr/>
        <Element name="projects" >
        <div className='homepage_list_projects'>
        <div className='homepage_list_projects_cards'>
        <div className='homepage_list_projects_title_text'>Recent Projects</div>
        {items.map((item) => (
            <HorizontalCard
            imageUrl = {Card1}
            title = {'Audit Management System'}
            description={'Passionate Software Engineer with 4 years of experience in developing web applications and backend systems. Experienced in working with both small and large teams across multiple succesful products based companies.'}
            chips={item.chips}
            />
        ))}
        </div>
        </div>
        </Element>
        <hr/>
        <Element name="blogs">
        <div className='homepage_list_blogs'>
        <div className='homepage_list_blogs_cards'>
        <div className='homepage_list_blogs_title_text'>Recent Blogs</div>
        <div className='homepage_list_blogs_innner_wrapper'>
          {items.map((item) => (
              <VerticalCard
              imageUrl = {Card1}
              title = {'Audit Management System'}
              description={'Passionate Software Engineer with 4 years of experience in developing web applications and backend systems. Experienced in working with both small and large teams across multiple succesful products based companies.'}
              chips={item.chips}
              />
          ))}
        </div>

        </div>
        </div>
        </Element>
      </div>
    </div>
  );
};

export default HomePage;