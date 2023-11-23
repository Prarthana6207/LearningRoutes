import logo from './logo.svg';
import './App.css';
// import NavBar from './Component/NavBar';
import NavTop from './Component/NavTop';
import Body from './Component/Body';
import React from 'react';
// import Carousel from './Component/AutoplayCarousel';
import ImgMediaCard from './Component/ImageMediaCard';
import Footer from './Component/Footer';
import ActionAreaCard from './Component/cards';
import ActionAreaCard2 from './Component/cards2';
import ActionAreaCard3 from './Component/cards3';
import { Hamburger } from './Component/Hamburger';
import MenuStatus from './Component/MenuStatus'

function App() {
  return (
    <div className="App">
    <NavTop label ="info@learningroutes.in" mailto ="mailto:info@learningroutes.in" />
      <MenuStatus />
      <Body text="Personal Development" delay = {100}/>
      <div className='card'>
      <ActionAreaCard></ActionAreaCard>
      <ActionAreaCard2></ActionAreaCard2>
      <ActionAreaCard3></ActionAreaCard3>
      {/* <Hamburger /> */}
      </div>
      {/* <Carousel /> */}
      {/* <ImgMediaCard /> */}
      <Footer />
    </div>
  );
}

export default App;
