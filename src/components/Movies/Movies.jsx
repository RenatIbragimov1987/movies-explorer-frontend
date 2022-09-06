import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import api from '../../utils/MoviesApi';

const Movies = ({ isLoggedIn }) => {
  const [value, setValue] = useState('');
  const [moviesAll, setMoviesAll] = useState([]);
	const [textSearch, setTextSearch] = useState('');

  const [buttonForCard, setButtonForCard] = useState(false);

	//заносим карточки в хранилище локалсторидж в виде строки
  useEffect(() => {
    if (isLoggedIn) {
      api
        .loadingMovies()
        .then((cards) => {
          localStorage.setItem('moviesAll', JSON.stringify(cards));
        })
        .catch((err) => {
          localStorage.removeItem('moviesAll');
          console.log(`Ошибка загрузки карточек в хранилище ${err}`);
        });
    }
  }, [isLoggedIn]);

	//достаем карточки из хранилища пареводим строку в обьекты
  const getAllCard = () => {
    if (isLoggedIn) {
				const raw = localStorage.getItem('moviesAll')
				const movie = JSON.parse(raw)
        setMoviesAll(movie);
        setButtonForCard(true);
    }
  };

  const movieValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const filteredMovies = moviesAll.filter((movie) => {
		
    return movie.nameRU.toLowerCase().includes(value.toLowerCase());
  });



  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm movieValue={movieValue} getAllCard={getAllCard} />
      <Preloader />
			{buttonForCard ? 
      <MoviesCardList filteredMovies={filteredMovies} /> : ''}
      {buttonForCard ? <ButtonYet /> : ''}
      <Footer />
    </>
  );
};

export default Movies;
