import { React } from 'react';
import './footer.sass'
import logo from './../../assets/img/logo.svg'
import instagramFooter from './../../assets/img/instagram-footer.svg'
import facebookFooter from './../../assets/img/facebook-footer.svg'
import youtubeFooter from './../../assets/img/youtube-footer.svg'
import twitterFooter from './../../assets/img/twitter-footer.svg'
import { Link } from 'react-router-dom';


function Footer(){
    return(
        <footer className='footer'>
            <div className="container">
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
                        <h1>Usefull link</h1>
                        <Link to="/about-us">Gallery</Link>
                        <Link to="/about-us">Blogs</Link>
                        <Link to="/about-us">About</Link>
                        <Link to="/about-us">Image</Link>
                        <Link to="/about-us">Rooms</Link>
                    </div>
                </div>
                <div className="box-services-reach-us">

                </div>
            </div>
        </footer>
    );
}

export default Footer;