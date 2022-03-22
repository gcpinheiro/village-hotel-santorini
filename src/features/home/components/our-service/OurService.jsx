import React from 'react';
import './our-service.sass';
import CardService from './../../../../shared/card-service/CardService'
import baliVideo from './../../../../assets/video/bali.mp4';


class OurService extends React.Component {
  
  constructor(props){
    super(props);
  }

 componentDidMount(){

 }
 

  render (){
    return (
      <div className="container-our-service">
        <div className="box-title-our-service">
          <div className="title-our-service">
            <h1>Our</h1>
            <h1>Service</h1>
          </div>
          <div className="paragraph-our-service">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
          </div>
        </div>
        <div className="cards-our-service">
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
          <div className="box-card-service">
            <CardService />
          </div>
        </div>
        <div className="text-bottom">
          <div className="box-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
          </div>
        </div>
      </div>
    )
  }
}
export default OurService;
