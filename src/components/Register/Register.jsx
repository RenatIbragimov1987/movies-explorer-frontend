import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Register = () => {
  return (
    <form className="register">
      <header className="register__header">
        <Header
          modifierMovi="header__nav_none"
          modifier="header__account_none"
        />
      </header>
      <fieldset className="register__set">
        <h1 className="register__title">Добро пожаловать!</h1>
        <label htmlFor="first-name" className="register__label">
          Имя
        </label>
        <input
          autoComplete="off"
          type="text"
          minLength="2"
          maxLength="30"
          required
          className="register__field"
          id="first-name"
        />
        <span className="form__input-error email-input-error"></span>
        <label htmlFor="first-email" className="register__label">
          E-mail
        </label>
        <input
          autoComplete="off"
          type="email"
          minLength="3"
          maxLength="50"
          required
          className="register__field"
          id="first-email"
        />
        <span className="form__input-error email-input-error"></span>
        <label htmlFor="first-password" className="register__label">
          Пароль
        </label>
        <input
          autoComplete="off"
          type="password"
          minLength="6"
          maxLength="50"
          name="password"
          required
          className="register__field"
          id="first-password"
        />
        <span className="form__input-error email-input-error"></span>
      </fieldset>
      <button className="register__submit-button" type="submit">
        Зарегистрироваться
      </button>
      <p className="register__question">
        Уже зарегистрированы? &nbsp;
        <Link to="/signin" className="register__questio-link">
          Войти
        </Link>
      </p>
    </form>
  );
};

export default Register;
