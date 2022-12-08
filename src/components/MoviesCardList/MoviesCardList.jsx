import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonSaved from '../ButtonSaved/ButtonSaved';

const MoviesCardList = ({resMovies, AddToFavorites, savedMovies, favoritesLogoState, filteredMovies, filterSavedMoviesDisplay}) => {
  return (
    <ul className="moviesCardList">
			{resMovies.map((card, id) => (
				<MoviesCard filteredMovies={filteredMovies} ButtonSaved={ButtonSaved} AddToFavorites={AddToFavorites} savedMovies={savedMovies} favoritesLogoState={favoritesLogoState}
				 key={id} card={card}
				/>
		))}
    </ul>
  );
};

export default MoviesCardList;
