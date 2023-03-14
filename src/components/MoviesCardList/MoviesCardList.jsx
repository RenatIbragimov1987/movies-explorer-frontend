import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import ButtonSaved from '../ButtonSaved/ButtonSaved';

const MoviesCardList = ({
  filterMoviesSaved,
  resMovies,
  buttonSavedActive,
  AddToFavorites,
  savedMovies,
  filteredMovies,
  filterSavedMoviesDisplay,
	DeleteSavedMovies,
	isLoggedIn,
	setFilterSavedMoviesDisplay,

}) => {

  return (
    <ul className="moviesCardList">
      {resMovies.map((card, id) => (
        <MoviesCard
          filterSavedMoviesDisplay={filterSavedMoviesDisplay}
					setFilterSavedMoviesDisplay={setFilterSavedMoviesDisplay}
          buttonSavedActive={buttonSavedActive}
          filteredMovies={filteredMovies}
          AddToFavorites={AddToFavorites}
          savedMovies={savedMovies}
          filterMoviesSaved={filterMoviesSaved}
          resMovies={resMovies}
					card={card}
          key={id}
					DeleteSavedMovies={DeleteSavedMovies}
					isLoggedIn={isLoggedIn}
        />
      ))}
    </ul>
  );
};

export default MoviesCardList;
