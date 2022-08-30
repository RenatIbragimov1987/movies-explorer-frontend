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
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import { useContext } from 'react';
import api from '../../utils/MoviesApi';

const Movies = ({isLoggedIn}) => {
	const currentUser = useContext(CurrentUserContext);

	

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm />
      <Preloader />
			<MoviesCardList/>
      <ButtonYet />
      <Footer />
    </>
  );
};

export default Movies;
