import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ourApi from '../../utils/MainApi';

const SavedMovies = ({
  isLoggedIn,
  searchButton,
  filterTumb,
  switchTumb,
  resMovies,
  shortFilms,
  filterSavedMoviesDisplay,
  textSearchSaved,
  valuesErrSaved,
  valuesNotMoviesSaved,
  DeleteSavedMovies,
  searchButtonSaved,
  searchValueSaved,
  setFilterSaved,
  setFilterSavedMoviesDisplay,
}) => {



  // фильтр страницы с сохраненными фильмами
  useEffect(() => {
    if (switchTumb) {
      setFilterSavedMoviesDisplay(shortFilms(filterSavedMoviesDisplay));
    } else {
      ourApi.getSavedForElectedMovies().then((card) => {
        setFilterSavedMoviesDisplay(card);
      });
    }
  }, [switchTumb]);



  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm
        isLoggedIn={isLoggedIn}
        searchButton={searchButton}
        filterTumb={filterTumb}
        switchTumb={switchTumb}
        textSearchSaved={textSearchSaved}
        searchValueSaved={searchValueSaved}
        searchButtonSaved={searchButtonSaved}
        resMovies={resMovies}
        valuesErrSaved={valuesErrSaved}
        valuesNotMoviesSaved={valuesNotMoviesSaved}
        filterSavedMoviesDisplay={filterSavedMoviesDisplay}
      />
      <ul className="moviesCardList">
        {filterSavedMoviesDisplay.map((card, id) => (
          <MoviesCard
            card={card}
            key={id}
            DeleteSavedMovies={DeleteSavedMovies}
						
          />
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default SavedMovies;
