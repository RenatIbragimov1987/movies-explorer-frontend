import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const SavedMovies = ({isLoggedIn}) => {
  return (
    <div>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm />
      <div className="savedMovies">
        {[...Array(3)].map((card, index) => (
          <MoviesCard key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default SavedMovies;
