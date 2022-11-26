import React from 'react';
import './Card.css';
import CardTitle from '../CardTitle/CardTitle'

class Card extends React.Component {
    render() {
      return <div className = "card"> 
                <CardTitle title = {this.props.title}/>
            </div>
    }
  }


  export default Card;
