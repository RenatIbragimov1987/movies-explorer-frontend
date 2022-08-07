import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

const Movies = () => {
  return (
    <div>
			<Header />
			<SearchForm />
    </div>
  );
}

export default Movies;