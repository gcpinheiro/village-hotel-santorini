import { React } from 'react';
import { Link } from 'react-router-dom';
import './banner.sass';
import Nav from './../../../../shared/nav/Nav'



function Banner(){
    return(
        <div className="banner-container">
            <Nav isHome/>
            <div className="texts">
                <h1>HOTEL VILLAGE SANTORINI</h1>
                <h1>Up to 60% OFF</h1>
                <h3>On Hotel Booking Online</h3>
                <Link to="/booking" className='link-booking-now'>Booking Now</Link>
            </div>
        </div>
    );
}

export default Banner;