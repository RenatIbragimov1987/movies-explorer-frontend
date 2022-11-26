import React from 'react';
import './DeleteSaveBtn.css';
import deleteIcon from '../../images/iconDelete.svg';

const DeleteSaveBtn = ({DeleteSavedMovies}) => {
  return (
    <button type="submit" className="moviesCardDelete" onClick={DeleteSavedMovies}>
      <img src={deleteIcon} alt="pic" className="moviesCardDelete__svg" />
    </button>
  );
};

export default DeleteSaveBtn;
