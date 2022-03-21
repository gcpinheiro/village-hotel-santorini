import React from 'react';

import Nav from './../../shared/nav/Nav'
import CardRoom from './../../shared/card-room/CardRoom'
import './rooms-sultes.sass'



class RoomsSultes extends React.Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){

 }
 

  render (){
    return (
      <>
        <Nav />
        <div className="container-room-sults">
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
          <div className="box-cards-room-sults">
            <CardRoom />
          </div>
        </div>
    </>
    )
  }
}
export default RoomsSultes;
