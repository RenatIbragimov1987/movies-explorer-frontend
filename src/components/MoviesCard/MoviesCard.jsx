import React from 'react';
import './MoviesCard.css';
// import image from '../../images/img/pic(1).png';
import DeleteSaveBtn from '../DeleteSaveBtn/DeleteSaveBtn';


const MoviesCard = ({ ButtonSave, card }) => {

  return (
    <li className="moviesCard">
      <div className="moviesCard__block">
        <div className="moviesCard__container">
          <h2 className="moviesCard__title">{card.nameRU}</h2>
          <p className="moviesCard__time">{card.duration}</p>
        </div>
        {ButtonSave ? <ButtonSave /> : <DeleteSaveBtn />}
      </div>
			<a href={card.trailerLink} target="_blank">
      <img src={card.image.url} className="moviesCard__image" alt={card.nameRU} />
		</a>
    </li>
  );
};

export default MoviesCard;
