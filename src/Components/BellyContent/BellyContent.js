import React from 'react';
import './BellyContent.css';
import Card from '../Card/Card'

class BellyContent extends React.Component {
    render() {
      const experties = ["BackEnd Technologies","FrontEnd Technologies","Data Structures","Algorithms"]

      return    <div className = "belly_content_border">
                  <div className = "belly_wrapper">
                  <div className= "belly_content">
                  {experties.map((data, i)=>{
                    return <Card title = {data}/>
                  })}

                      </div>
                  </div>

      </div>


    }
  }


  export default BellyContent;
