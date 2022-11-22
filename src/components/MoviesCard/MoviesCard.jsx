import './MoviesCard.css';
import React, { useState, useEffect } from 'react';
// import image from '../../images/img/pic(1).png';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';
import ButtonSaved from '../ButtonSaved/ButtonSaved';

const MoviesCard = ({ ButtonSaved, card, AddToFavorites }) => {
	
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
        {ButtonSaved ? <ButtonSaved card={card} AddToFavorites={AddToFavorites}/> : <DeleteSaveBtn />}
      </div>
			
      <a href={card.trailerLink} target="_blanc">
			<img src={(card.image.url === undefined) ? (`${card.image}`) : `https://api.nomoreparties.co/${card.image.url}`} className="moviesCard__image"
        alt={card.nameRU}
      />
			
			{/* <img src={movi.image} className="moviesCard__image"
        alt={card.nameRU}
      /> */}

        
      </a>
    </li>
  );
};

export default MoviesCard;
