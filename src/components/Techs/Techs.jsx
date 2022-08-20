import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <div className="techs" id="technology">
      <div className="techs__heder">
        <h2 className="techs__description">Технологии</h2>
      </div>
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__block">
        <li className="techs__block-title">HTML</li>
        <li className="techs__block-title">CSS</li>
        <li className="techs__block-title">JS</li>
        <li className="techs__block-title">React</li>
        <li className="techs__block-title">Git</li>
        <li className="techs__block-title">Express.js</li>
        <li className="techs__block-title">mongoDB</li>
      </ul>
    </div>
  );
};

export default Techs;
