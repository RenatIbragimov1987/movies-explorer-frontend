import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonSaved from '../ButtonSaved/ButtonSaved';

const MoviesCardList = ({resMovies, AddToFavorites, savedMovies}) => {
  return (
    <ul className="moviesCardList">
			{resMovies.map((card, id) => (
				<MoviesCard ButtonSaved={ButtonSaved} AddToFavorites={AddToFavorites} savedMovies={savedMovies}
				 key={id} card={card}
				/>
		))}
    </ul>
  );
};

export default MoviesCardList;
