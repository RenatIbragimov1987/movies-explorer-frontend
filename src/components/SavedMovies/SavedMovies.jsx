import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

import ButtonYet from '../ButtonYet/ButtonYet';

const SavedMovies = ({isLoggedIn}) => {
	// const [buttonForCard, setButtonForCard] = useState(false);
	// const [searchMovies, setSearchMovies] = useState([]);
	// const [isValue, setIsValue] = useState('');
  const [savedMoviesAll, setSavedMoviesAll] = useState(() => {
		const raw = localStorage.getItem('savedMoviesLoc');
		const movie = JSON.parse(raw);
		return movie || [];
	});

console.log(savedMoviesAll);

  // слушатель ввода в строку поиска фильмов
  // const searchValue = (event) => {
  //   event.preventDefault();
  //   setTextSearch(event.target.value);
  // };

	// const filterMoviesOfSaved = (event) => {
	// 	event.preventDefault();
	// 	setSavedMoviesAll(
	// 		savedMoviesAll.filter((mov) => {
	// 			return mov.nameRU.toLowerCase().includes(textSearch.toLowerCase());
	// 		})
	// 	);
	// }

  // const searchCard = (e) => {
	// 	e.preventDefault();
	// 	setButtonForCard(true);
	// 	setSearchMovies(searchMovies);
  // };

  // function movieValue(evt) {
	// 	setButtonForCard(false);
  //   setIsValue(evt.target.value);
	// 	setMoviesAll(movie)
  // };

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm />
			<ul className="moviesCardList">
			{savedMoviesAll.map((card, id) => (
				<MoviesCard key={id} card={card}/>
		))}
			</ul>
      <Footer />
    </>
  );
};

export default SavedMovies;
