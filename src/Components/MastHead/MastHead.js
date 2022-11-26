import React from 'react';
import Name from "../Name/Name"
import Details from "../Details/Details"

class MastHead extends React.Component {
    render() {
      return <div className="masthead"> 
                <Name/>
                <Details/>
            </div>
    }
  }


  export default MastHead;
