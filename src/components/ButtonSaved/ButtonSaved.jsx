import React from 'react';
import './ButtonSaved.css';
import img from '../../images/iconSave.svg';

const ButtonSaved = ({AddToFavorites, card}) => {
  return (
    <label className="moviesCard__checkbox">
      <div>
        <input type="checkbox" className="moviesCard__button" onClick={() => AddToFavorites(card)}/>
        <span className="moviesCard__save">
          <img src={img} alt="pic" className="moviesCard__svg" />
        </span>
      </div>
    </label>
  );
};

export default ButtonSaved;
