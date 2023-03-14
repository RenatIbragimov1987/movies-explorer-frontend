import React from 'react';
import { Link, NavLink  } from 'react-router-dom';
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
        <NavLink activeClassName="header__navigation-active" to="/movies" className="header__movies">
          Фильмы
        </NavLink>
        <NavLink activeClassName="header__navigation-active" to="/saved-movies" className="header__saved-movies">
          Сохраненные фильмы
        </NavLink>
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
