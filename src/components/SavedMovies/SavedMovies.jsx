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
  valuesErr,
	searchButton,
	filterTumb,
	switchTumb,
	resMovies,
	shortFilms,
	savedMoviesDisplay,
}) => {
	
	const [filterSavedMoviesDisplay, setFilterSavedMoviesDisplay] = useState([]);
	const [textSearchSaved, setTextSearchSaved] = useState('');
	const [valuesErrSaved, setValuesErrSaved] = useState(''); // сообщение ошибки при пустом поле поиска
  const [valuesNotMoviesSaved, setValuesNotMoviesSaved] = useState('');
	// const pagge = window.location.pathname === '/saved-movies';
  // console.log(pagge, 'pagge');
const searchValueSaved = (e) => {
	setTextSearchSaved(e.target.value);
};

	// кнопка поиска сохраненных фильмов
const searchButtonSaved = (event) => {
	event.preventDefault();
	setFilterSavedMoviesDisplay(
			savedMoviesDisplay.filter((mov) => {
				return mov.nameRU.toLowerCase().includes(textSearchSaved.toLowerCase());
			})
		);
		if(textSearchSaved.length === 0) {
			setValuesErrSaved('Нужно ввести ключевое слово')
		} else {
			setValuesErrSaved('')
		}
		if (filterSavedMoviesDisplay.length === 0) {
      setValuesNotMoviesSaved('Ничего не найдено')
		} else {
			setValuesNotMoviesSaved('')
		}
}



function DeleteSavedMovies(card){
	// const movi = filterSavedMoviesDisplay.find((item) => item.movieId);
	ourApi
		.deleteSavedForElectedMovies(card._id)
		.then(() => {
			setFilterSavedMoviesDisplay(filterSavedMoviesDisplay.filter((c) => c._id !== card._id))
		})
		.catch((err) => {
			console.error(err);
		});
};

// useEffect(() => {
// 	if (isLoggedIn && DeleteSavedMovies) {
// 		setFilterSavedMoviesDisplay(filterSavedMoviesDisplay)
// 	}

	
// }, [isLoggedIn, filterSavedMoviesDisplay, DeleteSavedMovies]);


	// фильтр страницы с сохраненными фильмами
	useEffect(() => {
		if (switchTumb) {
      setFilterSavedMoviesDisplay(
				shortFilms(filterSavedMoviesDisplay)
			)
		}	else {
      ourApi
			.getSavedForElectedMovies()
			.then((card) => {
				setFilterSavedMoviesDisplay(card);
			})
		}
  }, [shortFilms, switchTumb]);

	// useEffect(() => {
	// 	if (isLoggedIn){
	// 		ourApi
	// 		.getSavedForElectedMovies()
	// 		.then((card) => {
	// 			setFilterSavedMoviesDisplay(card);
	// 		})
	// 		.catch((err) => {
	// 			console.log(`ошибка отображения избранных фильмов ${err}`);
	// 		});
	// 	}
	// }, [isLoggedIn])
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
				<MoviesCard card={card} key={id} DeleteSavedMovies={DeleteSavedMovies}/>
		))}
			</ul>
      <Footer />
    </>
  );
};

export default SavedMovies;
