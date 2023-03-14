import React from 'react';
import './DeleteSaveBtn.css';
import deleteIcon from '../../images/iconDelete.svg';

const DeleteSaveBtn = ({card, DeleteSavedMovies}) => {
	
	function handleCardDelete() {
		DeleteSavedMovies(card)
	}

  return (
    <button className="moviesCardDelete" onClick={handleCardDelete}>
      <img src={deleteIcon} alt="pic" className="moviesCardDelete__svg" />
    </button>
  );
};

export default DeleteSaveBtn;
