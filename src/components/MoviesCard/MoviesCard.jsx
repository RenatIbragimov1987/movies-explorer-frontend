import React from 'react';
import './MoviesCard.css';
import image from '../../images/img/pic(1).png';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';


const MoviesCard = ({ ButtonSave }) => {

  return (
    <li className="moviesCard">
      <div className="moviesCard__block">
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">33 слова о дизайне</h2>
          <p className="moviesCard__time">1ч 47м</p>
        </div>
        {ButtonSave ? <ButtonSave /> : <DeleteSaveBtn />}
      </div>
      <img src={image} className="moviesCard__image" alt="pic" />
    </li>
  );
};

export default MoviesCard;
