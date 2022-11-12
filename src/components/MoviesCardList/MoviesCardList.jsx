import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonSave from '../ButtonSave/ButtonSave';
import { useLocation } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurentUserContext';
import { useState, useContext, useEffect } from 'react';
import api from '../../utils/MoviesApi';

const MoviesCardList = ({resMovies}) => {

	
  return (
    <ul className="moviesCardList">
			{resMovies.map((card) => (
					<MoviesCard ButtonSave={ButtonSave}
					 key={card.id} card={card}
					/>
			))
			}
    </ul>
  );
};

export default MoviesCardList;

	// const [width, setWidth] = useState(window.innerWidth);
	// const [moviesCount, setMoviesCount] = useState(0);
	// const [extraCount, setExtraCount] = useState(0);

	// const resMovies = movies.slice(0, moviesCount);

	// const location = useLocation();
	// const path = location.pathname;

	// const updateWidth = () => {
	// 		setTimeout(() => {
	// 				setWidth(window.innerWidth);
	// 		}, 500)
	// };

	// useEffect(() => {
	// 		window.addEventListener('resize', updateWidth);
	// 		if(width >= 1280) {
	// 				setMoviesCount(12);
	// 				setExtraCount(3);
	// 		}
	// 		if(width >= 768 && width < 1280) {
	// 				setMoviesCount(8);
	// 				setExtraCount(2);
	// 		}
	// 		if(width >= 320 && width < 768) {
	// 				setMoviesCount(5);
	// 				setExtraCount(2);
	// 		}
	// 		if (path === "/saved-movies") {
	// 				setMoviesCount(100)
	// 		}
	// 		return () => window.removeEventListener('resize', updateWidth)
	// }, [width, path]);




	// const [cards, setCards] = useState([]);
	// useEffect(() => {
	// 	api.loadingMovies()
	//   .then((cards) => {
	// 		setCards(cards);
	// 	})
	// 	.catch((err) =>
	// 	console.log(`Ошибка загрузки карточек ${err}`)
	// 	);
	// }, [setCards])