import React from 'react';
import './MoviesCard.css';
// import '../ButtonSaved/ButtonSaved.css';
// import '../DeleteSaveBtn/DeleteSaveBtn.css';
// import imageColor from '../../images/imageColor.svg';
// import imageNotColor from '../../images/imageNotColor.svg';
// import deleteIcon from '../../images/iconDelete.svg';
// import { useEffect, useState } from 'react';
import ButtonSaved from '../ButtonSaved/ButtonSaved';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';


const MoviesCard = ({
  filterSavedMoviesDisplay,
	setFilterSavedMoviesDisplay,
  filterMoviesSaved,
  resMovies,
  buttonSavedActive,
  card,
  AddToFavorites,
  savedMovies,
  DeleteSavedMovies,
	filteredMovies,
	isLoggedIn,
}) => {
	const [favoritesLogoState, setFavoritesLogoState] = React.useState(false);
  const time = card.duration;

  function getTimeMovies(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }
  const timeDuration = getTimeMovies(time);
  const adressMov = window.location.pathname === '/movies';
	
	const uniqueNumbers = React.useMemo(() => new Array(card), [card]);
	
	
	React.useEffect(() => {
		if (isLoggedIn) {
			const filteredMovies = filterSavedMoviesDisplay.filter(movie => uniqueNumbers.some(cart => movie.movieId === cart.id));
			setFavoritesLogoState(filteredMovies.length > 0);
		}
	}, [filterSavedMoviesDisplay, isLoggedIn, uniqueNumbers]);
	

  return (
    <li className="moviesCard">
      <div className="moviesCard__block">
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.nameRU}</h2>
          <p className="moviesCard__time">{timeDuration}</p>
        </div>
        {adressMov === true ?
            <ButtonSaved
              filterSavedMoviesDisplay={filterSavedMoviesDisplay}
							setFilterSavedMoviesDisplay={setFilterSavedMoviesDisplay}
              resMovies={resMovies}
              card={card}
              AddToFavorites={AddToFavorites}
            	DeleteSavedMovies={DeleteSavedMovies}
							setFavoritesLogoState={setFavoritesLogoState}
							favoritesLogoState={favoritesLogoState}
							isLoggedIn={isLoggedIn}
        	/>
						:
          <DeleteSaveBtn card={card} DeleteSavedMovies={DeleteSavedMovies} />
        }
      </div>
      <a href={card.trailerLink} target="_blanc">
        <img
          src={
            card.image.url === undefined
              ? `${card.image}`
              : `https://api.nomoreparties.co/${card.image.url}`
          }
          className="moviesCard__image"
          alt={card.nameRU}
        />
      </a>
    </li>
  );
};

export default MoviesCard;
