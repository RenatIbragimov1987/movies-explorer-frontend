import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonSave from '../ButtonSave/ButtonSave';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import { useContext, useState, useEffect } from 'react';
import api from '../../utils/MoviesApi';

const MoviesCardList = () => {
	// const currentUser = useContext(CurrentUserContext);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.loadingMovies()
	  .then(cards => {
			setCards(cards)
		})
		.catch((err) =>
		console.log(`Ошибка загрузки карточек ${err}`)
		);
	}, [])

  return (
    <ul className="moviesCardList">
			{Array.from(cards).map((card, id) => (
					<MoviesCard ButtonSave={ButtonSave} key={id} card={card} />
			))
			}
    </ul>
  );
};

export default MoviesCardList;