import React from 'react';
import { Link } from 'react-router-dom';
import bed from './../../assets/img/bed.svg';
import arrowRight from './../../assets/img/arrow-right.svg';
import screen from './../../assets/img/screen.svg';
import './card-room.sass';

class CardRoom extends React.Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){

 }

  render (){
    return (
      <div className="container-card-room">
        <div className="image">
          <div className="subtitle">
            <div className="icon-and-text">
              <img src={bed} alt="" />
              <span>4Guest</span>
            </div>
            <div className="icon-and-text">
              <img src={screen} alt="" />
              <span>90ft</span>
            </div>
          </div>
        </div>
        <div className="title-and-price">
          <h1>Family Room</h1>
          <div className="price">
            <span>$799</span>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
        <div className="box-booking">
          <Link to="/booking" className='booking'>
            <span>Booking</span>
            <img src={arrowRight} alt="" />
          </Link>
        </div>
      </div>
    );
  }
}
export default CardRoom;
