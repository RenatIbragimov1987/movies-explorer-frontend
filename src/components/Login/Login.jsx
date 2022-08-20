import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Login = () => {
  return (
    <form className="login">
      <header className="login__header">
        <Header
          modifierMovi="header__nav_none"
          modifier="header__account_none"
          modifierNav="novagation_none"
        />
      </header>
      <fieldset className="login__set">
        <h1 className="login__title">Рады видеть!</h1>
        <label htmlFor="first-email" className="login__label">
          E-mail
        </label>
        <input
          autoComplete="off"
          type="email"
          minLength="3"
          maxLength="50"
          required
          className="login__field"
          id="first-email"
        />
        <span className="form__input-error email-input-error"></span>
        <label htmlFor="first-password" className="login__label">
          Пароль
        </label>
        <input
          autoComplete="off"
          type="password"
          minLength="6"
          maxLength="50"
          name="password"
          required
          className="login__field"
          id="first-password"
        />
        <span className="form__input-error email-input-error"></span>
      </fieldset>
      <button className="login__submit-button" type="submit">
        Войти
      </button>
      <p className="login__question">
        Ещё не зарегистрированы? &nbsp;
        <Link to="/signup" className="login__questio-link">
          Регистрация
        </Link>
      </p>
    </form>
  );
};

export default Login;
