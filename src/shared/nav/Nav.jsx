import React from 'react';
import { Link } from 'react-router-dom';
import './nav.sass';

import instagramNav from './../../assets/img/instagram-nav.svg';
import facebookNav from './../../assets/img/facebook-nav.svg';
import youtubeNav from './../../assets/img/youtube-nav.svg';
import twitterNav from './../../assets/img/twitter-nav.svg';


class Nav extends React.Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){

 }
 

  render (){
    return (
        // <nav>
        //     <div className="options">
        //         <Link to="/" className='links'>Home</Link>
        //         <Link to="/rooms-sultes" className='links'>Rooms & Suites</Link>
        //         <Link to="/services" className='links'>Services</Link>
        //         <Link to="/about-us" className='links'>About US</Link>
        //         <Link to="/booking" className='links'>Booking</Link>
        //     </div>
        //     <div className="social-medias">
        //         <img src={instagramNav} alt="" className='icons-social-media-nav'/>
        //         <img src={facebookNav} alt="" className='icons-social-media-nav' />
        //         <img src={youtubeNav} alt="" className='icons-social-media-nav' />
        //         <img src={twitterNav} alt="" className='icons-social-media-nav' />
        //     </div>
        // </nav>
        <>
        </>
    )
  }
}
export default Nav;
