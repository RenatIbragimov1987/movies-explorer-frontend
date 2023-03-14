import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ourApi from '../../utils/MainApi';


const Movies = ({
	adress,
  isLoggedIn,
	textSearch,
  valuesErr,
	searchValue,
	searchButton,
	filterTumb,
	switchTumb,
  buttonMoreHandle,
  AddToFavorites,
  displayCard,
  savedMovies,
	valuesNotMovies,
	filteredMovies,
	buttonSavedActive,
	resMovies,
	filterMoviesSaved,
	filterSavedMoviesDisplay,
	setFilterSavedMoviesDisplay,
	DeleteSavedMovies,
}) => {

	
	
  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm
        isLoggedIn={isLoggedIn}
        textSearch={textSearch}
        valuesErr={valuesErr}
        searchValue={searchValue}
        searchButton={searchButton}
        filterTumb={filterTumb}
        switchTumb={switchTumb}
				valuesNotMovies={valuesNotMovies}
				filteredMovies={filteredMovies}
      />

      {displayCard === true ? (
        <MoviesCardList
					adress={adress}
          savedMovies={savedMovies}
					filteredMovies={filteredMovies}
          filterSavedMoviesDisplay={filterSavedMoviesDisplay}
          AddToFavorites={AddToFavorites}
					buttonSavedActive={buttonSavedActive}
					resMovies={resMovies}
					filterMoviesSaved={filterMoviesSaved}
					setFilterSavedMoviesDisplay={setFilterSavedMoviesDisplay}
					DeleteSavedMovies={DeleteSavedMovies}
					isLoggedIn={isLoggedIn}
        />
      ) : (
        ''
      )}
      {(filteredMovies.length !== resMovies.length) ?  <ButtonYet buttonMoreHandle={buttonMoreHandle}/> : '' }

      <Footer />
    </>
  );
};

export default Movies;
