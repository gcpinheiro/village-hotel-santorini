import React from 'react';
import {
  Route, Routes, BrowserRouter as Router, 
} from 'react-router-dom';

import './main.sass';
import'./App.sass';

import  Footer  from './shared/footer/Footer'
import  Home  from './features/home/Home'
import  RoomsSultes  from './features/rooms-sultes/RoomsSultes'
import  AboutUs  from './features/about-us/AboutUs'
import  Services  from './features/services/Services'
import  Booking  from './features/booking/Booking'



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rooms-sultes" element={<RoomsSultes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
