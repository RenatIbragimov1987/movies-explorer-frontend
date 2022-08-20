import React from 'react';
import './DeleteSaveBtn.css';
import deleteIcon from '../../images/iconDelete.svg';

const DeleteSaveBtn = () => {
  return (
    <button type="submit" className="moviesCardDelete">
      <img src={deleteIcon} alt="pic" className="moviesCardDelete__svg" />
    </button>
  );
};

export default DeleteSaveBtn;
