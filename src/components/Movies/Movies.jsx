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
  const [isValue, setIsValue] = useState('');
  const [moviesAll, setMoviesAll] = useState([]);
  const [textSearch, setTextSearch] = useState('');
  const [width, setWidth] = useState(window.innerWidth);
  const [buttonForCard, setButtonForCard] = useState(false);
	const raw = localStorage.getItem('moviesAll');
	const movie = JSON.parse(raw);
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

  // const updateWidth = () => {
  // 		setTimeout(() => {
  // 				setWidth(window.innerWidth);
  // 		}, 200)
  // };

  //достаем карточки из хранилища пареводим строку в обьекты
  const getAllCard = (e) => {
    e.preventDefault();
		if (isValue) {
			setButtonForCard(true);
    	setMoviesAll(movie);
		} else {
			console.log(isValue);
		}
  };

  function movieValue(evt) {
		setButtonForCard(false);
    setIsValue(evt.target.value);
  };

  const filteredMovies = moviesAll.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(isValue.toLowerCase());
  });

  // 	useEffect(() => {
  // 		window.addEventListener('resize', updateWidth);
  // 		if(width >= 1280) {
  // 				setMoviesAll(12);
  // 				// setExtraCount(3);
  // 		}
  // 		// if(width >= 768 && width < 1280) {
  // 		// 	setMoviesAll(8);
  // 		// 		// setExtraCount(2);
  // 		// }
  // 		// if(width >= 320 && width < 768) {
  // 		// 	setMoviesAll(5);
  // 		// 		// setExtraCount(2);
  // 		// }
  // 		// // if (path === "/saved-movies") {
  // 		// // 	setMoviesAll(100)
  // 		// // }
  // 		// return () => window.removeEventListener('resize', updateWidth)
  // }, [width]);

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm movieValue={movieValue}  getAllCard={getAllCard} />
      <Preloader />
      {buttonForCard ? <MoviesCardList filteredMovies={filteredMovies} /> : ''}
      {buttonForCard ? <ButtonYet /> : ''}
      <Footer />
    </>
  );
};

export default Movies;
