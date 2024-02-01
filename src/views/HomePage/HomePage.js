import React, { useState, useEffect } from 'react';
import './HomePage.css';
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard';
import VerticalCard from '../../components/VerticalCard/VerticalCard';
import Card1 from '../../assets/images/exploreplugin.gif';
import Stepper from '../../components/Stepper/Stepper';
import Technologies from '../Technologies/Technologies';
import UdaanSystemDiagram from '../../assets/images/Udaan.svg'
import { Link as ScrollLink, Element } from 'react-scroll';
import Pagination from '../../components/Pagination/Pagination';
const HomePage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgb(24 34 44)', 
};



const [selcted, setSelected] = useState(0);

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

  const [projectItems, setProjectItems] = useState([
    { id: 1, title: 'Audit Management System',bannerImage: require('../../assets/images/test6.svg'), description: `For to take loan Customers have to Keep gold as Collateral and some from recent years it's been observed that some customer use keep some gold collaterals which was less worthy than they claim and lends more money than they were actually eligible.
    For example-  A customer bring 20 gm of gold and claims it's of 24 Carrot and which means it worth $1280 and the eligibile amount as per the lending algorithm let's say is $700.
    But after the quality inspection it eventually came out that it's 22 Carrot gold and the eligible amount is  $550 but the customer took out $700.
    Now to solve this problems we hired outsiders gold inspectors.
    Every time a new disbursal happens, it's assigned as a task to gold quality inspectors.
    Assigning this the quality inspector was done by a central assigner.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'] },
    { id: 2, title: 'Large Scale Ecommerce Distributed Backend',bannerImage: require('../../assets/images/Udaan.svg'),  description: `it was a B2B e-coomerce polatform at scale where big-sellers list their products and Normal Shopkeepers udaan is India’s largest business-to-business e-commerce platform. It has operations across categories including lifestyle, electronics, home & kitchen, staples, fruits and vegetables, FMCG, pharma, toys and general merchandise.udaan has a network of over 3 million registered users and 25,000-30,000 sellers across 900+ cities in the country covering more than 12,000 pin codes. The platform has over 1.7 million retailers, chemists, kirana shops, HoReCa, farmers, etc. doing over 4.5 million transactions per month, making udaan a leader in the b2b eCommerce business.
    `,chips: ['Large Scale Microservices', 'CosmosDb','Kubernetes','Docker','Kotlin','React Native','Canary','Redis','Distributed Systems'] },
  ]);
  const [blogItems, setBlogItems] = useState([
    { id: 1, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },
    { id: 2, title: 'Neural Networks behind the Chat-Gpt',bannerImage: require('../../assets/images/Neural_Networks_Chat_gpt.svg'), description: `The neural network in ChatGPT is a type of machine learning model that relies on small mathematical functions called neurons. These neurons work together to process and understand complex patterns in the input data, enabling ChatGPT to generate coherent and contextually relevant text.`,chips: ['Tag C', 'Tag D'], redirect: 'localhost:3000/wdhd/wdewd/ewded' },
    { id: 3, title: 'Building a NLP model like Transformer from scratch',bannerImage: require('../../assets/images/nlp.svg'), description: ` The transformer architecture comprises an encoder-decoder structure. The encoder processes input sequences, and the decoder generates output sequences. Key components include self-attention mechanisms, feedforward networks, and layer normalization. A crucial innovation in transformers is the self-attention mechanism. It allows the model to weigh different parts of the input sequence differently, enabling effective handling of long-range dependencies.`, chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/wne/efef/efef' },
    { id: 4, title: `Large Scale Distributed Models and it's deployment`,bannerImage: require('../../assets/images/large_scale_model1.svg'), description: `Scaling and deploying large-scale distributed machine learning (ML) models efficiently involves several best practices:`, chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sd/edf/edfdef' },
    { id: 1, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },
    { id: 1, title: 'All about Large Language Models',bannerImage: require('../../assets/images/llm.svg'), description: `Large Language Models (LLMs) are a revolutionary development in artificial intelligence, particularly in the field of natural language processing. Here's a concise overview.`,chips: ['Back-End Web Development', 'Apache Kafka' , 'Python', 'MongoDB', 'Redis', 'Test Driven Development', 'Distributed Systems'], redirect: 'localhost:3000/sedfe/ewded/dwde' },

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
        <Technologies/>
        <Element name="projects" >
        <div className='homepage_list_projects'>
        <div className='homepage_list_projects_cards'>
        <div className='homepage_list_projects_title_text'>Recent Projects</div>
        {projectItems.map((item) => (
            <HorizontalCard
            imageUrl = {item.bannerImage}
            title = {item.title}
            description={item.description}
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
          {blogItems.map((item) => (
              <VerticalCard
              imageUrl = {item.bannerImage}
              title = {item.title}
              description={item.description}
              chips={item.chips}
              />
          ))}
        </div>
        </div>
        </div>
        <Pagination
        pages = {blogItems}
        selcted = {selcted}
        />
        </Element>
      </div>
    </div>
  );
};

export default HomePage;