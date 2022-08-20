import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../../images/logo.svg';
import './Header.css';

function Header({ modifier = '', modifierMovi = '' }) {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logoHeader} alt="logo" />
      </Link>
      <nav className={`header__movies-block ${modifier}`}>
        <Link to="/movies" className="header__movies">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="header__saved-movies">
          Сохраненные фильмы
        </Link>
      </nav>
      <nav className={`header__nav ${modifierMovi}`}>
        <Link to="/signup" className="header__reg">
          Регистрация
        </Link>
        <Link to="/signin" className="header__log">
          Войти
        </Link>
      </nav>
      <Link to="/profile" className={`header__account ${modifier}`}>
        Аккаунт
      </Link>
    </header>
  );
}

export default Header;
