import React from 'react';
import './ButtonYet.css';

const ButtonYet = ({buttonMoreHandle}) => {
  return (
    <button type="button" className="moviesCardList__button" onClick={buttonMoreHandle}>
      Ещё
    </button>
  );
};

export default ButtonYet;
