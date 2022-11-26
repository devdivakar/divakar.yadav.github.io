import React from 'react';
import './CardTitle.css';


class CardTitle extends React.Component {
    render() {
      return  <div className= "title">
                    <h2 className = "title">{this.props.title}</h2>
            </div>
    }
  }


  export default CardTitle;
