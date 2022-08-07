import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <div className='techs' id='technology'>
      <div className='techs__heder'>
        <h2 className='techs__description'>Технологии</h2>
      </div>
      <h2 className='techs__title'>7 технологий</h2>
      <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className='techs__block'>
        <div className='techs__block-title'>HTML</div>
        <div className='techs__block-title'>CSS</div>
        <div className='techs__block-title'>JS</div>
        <div className='techs__block-title'>React</div>
        <div className='techs__block-title'>Git</div>
        <div className='techs__block-title'>Express.js</div>
        <div className='techs__block-title'>mongoDB</div>
      </div>
    </div>
  );
}

export default Techs;