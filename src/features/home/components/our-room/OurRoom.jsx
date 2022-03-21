import React from 'react';
import './our-room.sass';
import CardRoom from './../../../../shared/card-room/CardRoom'


class OurRoom extends React.Component {
  
  constructor(props){
    super(props);
  }

 componentDidMount(){

 }
 

  render (){
    return (
      <div className="container">
        <div className="box-title">
          <div className="title">
            <h1>Our</h1>
            <h1>Room</h1>
          </div>
          <div className="paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
          </div>
        </div>
        <div className="cards">
          <CardRoom />
          <CardRoom />
          <CardRoom />
        </div>
        <div className="slide">
          slide
        </div>
      </div>
    )
  }
}
export default OurRoom;
