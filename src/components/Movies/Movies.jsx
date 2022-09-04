import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { useState, useEffect } from 'react';

const Movies = ({isLoggedIn, movies}) => {
  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm />
      <Preloader />
			<MoviesCardList movies={movies}/>
      <ButtonYet />
      <Footer />
    </>
  );
};

export default Movies;
