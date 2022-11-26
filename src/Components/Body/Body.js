import React from 'react';
import ChestContent from '../ChestContent/ChestContent';
import BellyContent from '../BellyContent/BellyContent';
import './Body.css';


class Body extends React.Component {
    render() {
      return <div className = "body"> 
                <ChestContent/>
                <BellyContent/>
            </div>
    }
  }


  export default Body;
