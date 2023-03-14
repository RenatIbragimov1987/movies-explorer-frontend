import React from 'react';
import './ButtonSaved.css';
import imageColor from '../../images/imageColor.svg';
import { useEffect } from 'react';
import ourApi from '../../utils/MainApi';
import imageNotColor from '../../images/imageNotColor.svg';

const ButtonSaved = ({
	filterSavedMoviesDisplay,
	setFilterSavedMoviesDisplay,
	resMovies,
	AddToFavorites,
	card,
	isLoggedIn,
	favor,
	favoritesLogoState,
	setFavoritesLogoState,
	DeleteSavedMovies,
}) => {


	const favoritesLogo = () => {
		if (favoritesLogoState === false) {
			// Добавление фильма в избранное
			AddToFavorites(card);
		} else {
			// Удаление фильма из избранного
			const savedMovie = filterSavedMoviesDisplay.find((movie) => movie.movieId === card.id);
			if (savedMovie) {
				DeleteSavedMovies(savedMovie);
			}
		}
		setFavoritesLogoState(!favoritesLogoState);
	};

  // const favoritesLogo = () => {
	// 	setFavoritesLogoState(!favoritesLogoState);
	// 	if (favoritesLogoState === false) {
	// 		setFavoritesLogoState(favoritesLogoState === true);
  //     AddToFavorites(card);
  //   } else {
	// 		setFavoritesLogoState(favoritesLogoState === false);
	// 		DeleteSavedMovies(card);
	// 	}
  // };
	

  return (
		<button type='button' className="moviesCard__checkbox" onClick={favoritesLogo}>
			{favoritesLogoState ?
			<img src={imageColor} alt="pic" className='moviesCard__svg' />
			:
			<img src={imageNotColor} alt="pic" className='moviesCard__svg' />
			}
		</button>
  );
};

export default ButtonSaved;
