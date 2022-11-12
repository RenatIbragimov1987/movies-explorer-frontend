import React, { useState, useEffect, Children } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
// import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import api from '../../utils/MoviesApi';

const Movies = ({ isLoggedIn, isPreloader, isLoading }) => {
  const fullMoviesLoc = JSON.parse(localStorage.getItem('moviesAllLoc')); // парсим все фильмы из ЛС
  const foundMoviesLoc = JSON.parse(localStorage.getItem('foundMoviesLoc')); // парсим найденные фильмы из ЛС
  const requestTextLoc = JSON.parse(localStorage.getItem('textSearch')); // парсим текст инпута из ЛС

  const [isValue, setIsValue] = useState(requestTextLoc); // текст инпута
  const [moviesAll, setMoviesAll] = useState([]); //все 100 фильмов из локалстореджа 'moviesAllLoc'
  const [foundMovies, setFoundMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const [displayCard, setDisplayCard] = useState(false);

  const [textSearch, setTextSearch] = useState('');

  const [valuesErr, setValuesErr] = useState('');
  const [textNoMovies, setTextNoMovies] = useState('');

  const [searchMovies, setSearchMovies] = useState(0);
  const [extraMovies, setExtraMovies] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

const [buttonShowMore, setButtonShowMore] = useState(false); // показать/убрать кнопку ЕЩЁ

  const filteredMovies = fullMoviesLoc.filter((mov) => {
    return mov.nameRU.toLowerCase().includes(isValue.toLowerCase());
  }); //находим фильмы
  const resMovies = filteredMovies.slice(0, searchMovies); //отображаем кол фильмов на разных разрешениях

console.log(fullMoviesLoc);


  const buttonMoreHandle = () => {
		setSearchMovies(searchMovies + extraMovies);
		// if(resMovies.length === filteredMovies.length) {
		// 	setButtonShowMore(false)
		// } else {
		// 	setButtonShowMore(true)
		// }
  };
	



  const searchValue = (event) => {
    setIsValue(event.target.value);
    setDisplayCard(false);
    setButtonShowMore(false);
    // setFoundMovies(foundMovies)
    // setTextSearch(isValue)
  };

	// useEffect(() => {
	// 	if(isLoggedIn) {
	// 		setMoviesAll(JSON.parse(localStorage.getItem('moviesAllLoc')))
	// 	}
		
	// }, [])
	

	useEffect(() => {
		if(resMovies.length === filteredMovies.length) {
			setButtonShowMore(false)
		} else {
			setButtonShowMore(true)
		}
	}, [resMovies, filteredMovies])
	


	console.log(filteredMovies, 'filteredMovies');
console.log(resMovies, 'resMovies');
console.log(isValue, 'isValue');
  // console.log(filteredMovies, 'filteredMovies');
  // console.log(resMovies, 'resMovies');
  // console.log(moviesAll, 'moviesAll');
  // console.log(textSearch, 'textSearch');
  // console.log(requestTextLoc, 'requestTextLoc');
  // console.log(isValue, 'isValue');
  // console.log(foundMoviesLoc, 'foundMoviesLoc');

  //достаем карточки из хранилища переводим строку в обьекты

  const searchButton = (event) => {
    event.preventDefault();
		isPreloader()
    setDisplayCard(true);
    // setMoviesAll(foundMoviesLoc);
    setTextSearch(isValue);
    if (!isValue.length) {
      setDisplayCard(false);
			setButtonShowMore(false);
      setValuesErr('Нужно ввести ключевое слово');
    } else {
      setValuesErr('');
    }
  };

  // useEffect(() => {
  // 	const handleResize = () => setWidth(window.innerWidth);
  // 	window.addEventListener('resize', handleResize);
  // 	if(width >= 1280) {
  // 		moviesAll.length = 12;
  // 	}
  // 	if(width >= 768 && width < 1280) {
  // 		moviesAll.length = 8;
  // 	}
  // 	if(width >= 320 && width < 768) {
  // 		moviesAll.length = 5;
  // 	}
  // 	// if (path === "/saved-movies") {
  // 	// 	setMoviesAll(100)
  // 	// }
  // 	return () => {
  // 	 window.removeEventListener('resize', handleResize);
  // 	}
  //  }, [width]);
  const updateWidth = () => {
    const timer = setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => clearTimeout(timer);
  };

  //заносим карточки в хранилище локалсторидж в виде строки
  

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('foundMoviesLoc', JSON.stringify(resMovies));
      localStorage.setItem('textSearch', JSON.stringify(isValue));
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }
  }, [isLoggedIn, resMovies, isValue, savedMovies]);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    if (width >= 1280) {
      setSearchMovies(12);
      setExtraMovies(3);
      setDisplayCard(true);
			setButtonShowMore(true);
    }
    if (width >= 768 && width < 1280) {
      setSearchMovies(8);
      setExtraMovies(2);
      setDisplayCard(true);
			setButtonShowMore(true);
    }
    if (width >= 320 && width < 768) {
      setSearchMovies(12);
      setExtraMovies(3);
      setDisplayCard(true);
			setButtonShowMore(true);
    }
		if (isValue === '') {
			setButtonShowMore(false);
			setDisplayCard(false)
		}
    // if (path === "/saved-movies") {
    // 	setMoviesAll(100)
    // }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);
  // console.log(moviesAll, 'moviesAll');
  // console.log(filteredMovies.length, 'filteredMovies');
  // console.log(foundMovies, 'foundMovies');
  // console.log(fullMovies, 'fullMovies');
	console.log(buttonShowMore);
	useEffect(() => {
		if (isValue === '') {
			setButtonShowMore(false);
		}
	}, [isValue])
  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />

      <SearchForm
        isLoggedIn={isLoggedIn}
        isValue={isValue}
        valuesErr={valuesErr}
        searchValue={searchValue}
        searchButton={searchButton}
        textNoMovies={textNoMovies}
      />
			
      {displayCard === true ? <MoviesCardList resMovies={resMovies}/> : ''}
      {buttonShowMore === true? <ButtonYet buttonMoreHandle={buttonMoreHandle}/> : ''}
		
      <Footer />
    </>
  );
};

export default Movies;
