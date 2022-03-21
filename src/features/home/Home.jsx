import React from 'react';
import Banner from './components/banner/Banner'
import OurRoom from './components/our-room/OurRoom'


class Home extends React.Component {
  constructor(props){
    super(props);
  }
 componentDidMount(){

 }
 

  render (){
    return (
      <>
      <Banner />
      <OurRoom />
    </>
    )
  }
}
export default Home;
