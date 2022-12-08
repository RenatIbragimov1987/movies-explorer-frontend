import React from 'react';
import './ButtonSaved.css';
import img from '../../images/iconSave.svg';

const ButtonSaved = ({AddToFavorites, card, savedMovies, filteredMovies }) => {

	const [favoritesLogoState, setFavoritesLogoState] = React.useState(false);

	function favoritesLogo(){
		setFavoritesLogoState(!favoritesLogoState);
	}

  return (
    <label className="moviesCard__checkbox" onChange={() => AddToFavorites(card)}>
      <div>
        <input type="checkbox" className="moviesCard__button" defaultChecked={favoritesLogoState} onChange={() => favoritesLogo(card)}/>
        <span className="moviesCard__save">
          <img src={img} alt="pic" className="moviesCard__svg" />
        </span>
      </div>
    </label>
  );
};

export default ButtonSaved;
