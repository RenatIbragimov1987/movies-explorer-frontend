import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation({ modifierNav = '' }) {
  return (
    <div className={`novigation ${modifierNav}`}>
      <input type="checkbox" id="nav-toggle" hidden></input>
      <nav className="novigation__nav">
        <label htmlFor="nav-toggle" className="nav-toggle"></label>
        <ul>
          <li>
            <Link to="/" className="navigation__text">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/movies" className="navigation__text">
              Фильмы
            </Link>
          </li>
          <li>
            <Link to="/saved-movies" className="navigation__text">
              Сохраненные фильмы
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="navigation__text navigation__text_footer"
            >
              Аккаунт
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mask-content"></div>
    </div>
  );
}

export default Navigation;
