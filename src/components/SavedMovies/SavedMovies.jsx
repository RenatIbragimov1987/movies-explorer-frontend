import React from 'react';
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
	
}) => {
	const [savedMoviesDisplay, setSavedMoviesDisplay] = React.useState([]);
	const [filterSavedMoviesDisplay, setFilterSavedMoviesDisplay] = React.useState([]);
	const [textSearchSaved, setTextSearchSaved] = React.useState('');
	const [valuesErrSaved, setValuesErrSaved] = React.useState(''); // сообщение ошибки при пустом поле поиска
  const [valuesNotMoviesSaved, setValuesNotMoviesSaved] = React.useState('');

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
}

const DeleteSavedMovies = (movie) => {
	const movieId = savedMoviesDisplay.find((item) => item.id === movie.id);
	ourApi
		.deleteSavedForElectedMovies(movieId._id)
		.then((data) => {
				setSavedMoviesDisplay(savedMoviesDisplay.filter((c) => c.movieId !== data.movieId))
		})
		.catch((err) => {
			console.error(err);
		});
};

//запрашиваем сохраненные карточки с сервера
React.useEffect(() => {
	if (isLoggedIn) {
		ourApi.getSavedForElectedMovies()
		.then((data) => {
			setSavedMoviesDisplay(data)
		})
		.catch((err) => {
			console.log(`Во время запроса сохраненных фильмов произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`);
		});
	}
}, [isLoggedIn]);

	// фильтр страницы с сохраненными фильмами
	React.useEffect(() => {
		if (switchTumb) {
      setFilterSavedMoviesDisplay(
				shortFilms(savedMoviesDisplay)
			)
		} else {
			return setFilterSavedMoviesDisplay(savedMoviesDisplay)
		}
  }, [switchTumb, savedMoviesDisplay, shortFilms]);


	React.useEffect(() => {
		if (filterSavedMoviesDisplay.length === 0) {
      setValuesNotMoviesSaved('Ничего не найдено')
		} else {
			setValuesNotMoviesSaved('')
		}
  }, [filterSavedMoviesDisplay, setValuesNotMoviesSaved]);
	
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
				<MoviesCard key={id} card={card} DeleteSavedMovies={DeleteSavedMovies}/>
		))}
			</ul>
      <Footer />
    </>
  );
};

export default SavedMovies;
