import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import './Header.css';

function Header({ modifier = '', modifierMovi = '', isLoggedIn }) {

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logoHeader} alt="logo" />
      </Link>
			{isLoggedIn && 
      <nav className='header__movies-block'>
        <Link to="/movies" className="header__movies">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__saved-movies">
          Сохраненные фильмы
        </Link>
      </nav>
			}
			{!isLoggedIn &&
      <nav className={`header__nav ${modifierMovi}`}>
        <Link to="/signup" className="header__reg">
          Регистрация
        </Link>
        <Link to="/signin" className="header__log">
          Войти
        </Link>
      </nav>
			}
			{isLoggedIn &&
      <Link to="/profile" className='header__account'>
        Аккаунт
      </Link>
			}
    </header>
  );
}

export default Header;
