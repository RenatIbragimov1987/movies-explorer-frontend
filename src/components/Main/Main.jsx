import React from 'react';
import './Main.css';
import NavTab from '../Main/NavTab/NavTab';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

const Main = () => {
  return (
    <div>
			<Promo/>
			<NavTab/>
      <AboutProject/>
    </div>
  );
}

export default Main;