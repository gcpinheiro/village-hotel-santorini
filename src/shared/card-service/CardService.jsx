import React from 'react';
import { Link } from 'react-router-dom';

import iconRestaurant from './../../assets/img/icon-restaurant.svg';
import './card-service.sass';

class CardRoom extends React.Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){

 }

  render (){
    return (
      <div className="container-card-service">
        <img src={iconRestaurant} alt="" />
        <h1>Restaurant</h1>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
      </div>
    );
  }
}
export default CardRoom;
