import React from 'react';
import './MoviesCard.css';
// import image from '../../images/img/pic(1).png';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';

const MoviesCard = ({ ButtonSave, card }) => {
  
	//перевод минут в ч.м.
	const time = card.duration;
  function getTimeMovies(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }
	const timeDuration = getTimeMovies(time)

  return (
    <li className="moviesCard">
      <div className="moviesCard__block">
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.nameRU}</h2>
          <p className="moviesCard__time">{timeDuration}</p>
        </div>
        {ButtonSave ? <ButtonSave /> : <DeleteSaveBtn />}
      </div>
      <a href={card.trailerLink} target="_blanc">
        <img
          src={`https://api.nomoreparties.co${card.image.url}`}
          className="moviesCard__image"
          alt={card.nameRU}
        />
      </a>
    </li>
  );
};

export default MoviesCard;
