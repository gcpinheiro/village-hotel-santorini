import { React } from 'react';
import { Link } from 'react-router-dom';

import './footer.sass'

import logo from './../../assets/img/logo.svg'
import instagramFooter from './../../assets/img/instagram-footer.svg'
import facebookFooter from './../../assets/img/facebook-footer.svg'
import youtubeFooter from './../../assets/img/youtube-footer.svg'
import twitterFooter from './../../assets/img/twitter-footer.svg'
import message from './../../assets/img/message.svg'
import mobile from './../../assets/img/mobile.svg'
import location from './../../assets/img/location.svg'



function Footer(){
    return(
        <footer className='footer'>
            <div className="box-footer">
                <div className="box-hotel-userfull-link">
                    <div className="hotel">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur </p>
                        <div className="social-medias">
                            <img src={instagramFooter} alt="" />
                            <img src={facebookFooter} alt="" />
                            <img src={youtubeFooter} alt="" />
                            <img src={twitterFooter} alt="" />
                        </div>
                        <input type="email" placeholder='Your email address'/>
                    </div>
                    <div className="usefull-link">
                        <h4>Usefull link</h4>
                        <Link to="/gallery" className='links'>Gallery</Link>
                        <Link to='' className='links'>Blogs</Link>
                        <Link to="/about-us" className='links'>About</Link>
                        <Link to="/services" className='links'>Services</Link>
                        <Link to="/rooms-sultes" className='links'>Rooms & Sultes</Link>
                    </div>
                </div>
                <div className="box-services-reach-us">
                    <div className="services">
                        <h4>Services</h4>
                        <span>Restaurant</span>
                        <span>Coffe Shop</span>
                        <span>Car Wash</span>
                        <span>Cycle Rent</span>
                        <span>Car Rent</span>
                    </div>
                    <div className="reach-us">
                        <h4>Reach Us</h4> 
                        <div className="icon-and-text">
                          <img src={message} alt="" />
                          <span>6391 Elgin St.</span>
                        </div>  

                        <div className="icon-and-text">
                          <img src={mobile} alt="" />
                          <span>(99) 99999-9999</span>
                        </div>  

                        <div className="icon-and-text">
                          <img src={location} alt="" />
                          <span>6391 Elgin.St Celina Delaware 10299</span>
                        </div>                 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;