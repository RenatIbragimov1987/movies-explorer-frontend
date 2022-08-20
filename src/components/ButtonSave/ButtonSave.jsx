import React from 'react';
import './ButtonSave.css';
import img from '../../images/iconSave.svg';

const ButtonSave = () => {
  return (
    <label className="moviesCard__checkbox">
      <div>
        <input type="checkbox" className="moviesCard__button" />
        <span className="moviesCard__save">
          <img src={img} alt="pic" className="moviesCard__svg" />
        </span>
      </div>
    </label>
  );
};

export default ButtonSave;
