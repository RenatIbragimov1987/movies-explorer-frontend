import React from 'react';
import './MoviesCard.css';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';

const MoviesCard = ({ ButtonSaved, card, AddToFavorites, savedMovies, DeleteSavedMovies, switchSavedIcon}) => {
	//перевод минут в ч.м.
	const time = card.duration;
  function getTimeMovies(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }
	const timeDuration = getTimeMovies(time)
	const adressMov = window.location.pathname === '/movies';

  return (
    <li className="moviesCard">
      <div className="moviesCard__block">
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.nameRU}</h2>
          <p className="moviesCard__time">{timeDuration}</p>
        </div>
        {adressMov ? <ButtonSaved switchSavedIcon={switchSavedIcon} savedMovies={savedMovies}  card={card} AddToFavorites={AddToFavorites}/> : <DeleteSaveBtn card={card} DeleteSavedMovies={DeleteSavedMovies}/>}
      </div>
      <a href={card.trailerLink} target="_blanc">
			<img src={(card.image.url === undefined) ? (`${card.image}`) : `https://api.nomoreparties.co/${card.image.url}`} className="moviesCard__image"
        alt={card.nameRU}
      /> 
      </a>
    </li>
  );
};

export default MoviesCard;
