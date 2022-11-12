import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import './PageNotFound.css';


function PageNotFound() {
	const currentUser = useContext(CurrentUserContext);

	const hist = useHistory();

	// function goBack(evt) {
	// 	evt.preventDefault();
	// 	if (currentUser) {
	// 		history.goBack();
	// 	}
		
	// }

  return (
    <div className="not-found">
      <p className="not-found__num">404</p>
      <h3 className="not-found__title">Страница не найдена</h3>
      <button className="button button_type_to-main" onClick={() => hist.goBack()}>
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
