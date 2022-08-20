import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import ButtonSave from '../ButtonSave/ButtonSave';

const MoviesCardList = () => {
  return (
    <ul className="moviesCardList">
      {[...Array(3)].map((card, index) => (
        <MoviesCard ButtonSave={ButtonSave} key={index} />
      ))}
    </ul>
  );
};

export default MoviesCardList;
