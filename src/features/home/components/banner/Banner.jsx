import { React } from 'react';
import { Link } from 'react-router-dom';
import './banner.sass';
import instagramNav from './../../../../assets/img/instagram-nav.svg';
import facebookNav from './../../../../assets/img/facebook-nav.svg';
import youtubeNav from './../../../../assets/img/youtube-nav.svg';
import twitterNav from './../../../../assets/img/twitter-nav.svg';

function Banner(){
    return(
        <div className="banner-container">
            <nav>
                <div className="options">
                    <Link to="/" className='links'>Home</Link>
                    <Link to="/rooms-sultes" className='links'>Rooms & Suites</Link>
                    <Link to="/services" className='links'>Services</Link>
                    <Link to="/about-us" className='links'>About US</Link>
                    <Link to="/booking" className='links'>Booking</Link>
                </div>
                <div className="social-medias">
                    <img src={instagramNav} alt="" className='icons-social-media-nav'/>
                    <img src={facebookNav} alt="" className='icons-social-media-nav' />
                    <img src={youtubeNav} alt="" className='icons-social-media-nav' />
                    <img src={twitterNav} alt="" className='icons-social-media-nav' />
                </div>
            </nav>
            <div className="texts">
                <h1>HOTEL VILLAGE SANTORINI</h1>
                <h1>Up to 60% OFF</h1>
                <h3>On Hotel Booking Online</h3>
                <button type='button'> 
                    <Link to="/booking" className='link-booking-now'>Booking Now</Link>
                </button>
            </div>
        </div>
    );
}

export default Banner;