import React from 'react';
import Body from '../Components/Body/Body';
import MastHead from '../Components/MastHead/MastHead';
import Footer from '../Components/Footer/Footer';

class HomePage extends React.Component {
    render() {
      return <div> 
                <MastHead/>
                <Body/>
                <Footer/>
            </div>
    }
  }


  export default HomePage;
