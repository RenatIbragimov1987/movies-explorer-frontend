import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useFormWithValidation from '../ValidatorComponent/ValidatorComponent';

const Register = ({ registration }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.password || !values.email || !values.name) {
      return;
    }
    const { name, email, password } = values;
    registration(name, email, password);
  }

  return (
    <form onSubmit={handleSubmit} className="register">
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
          value={values.name || ''}
          name="name"
          autoComplete="off"
          type="text"
          minLength="2"
          maxLength="30"
          required
          className="register__field"
          id="first-name"
          onChange={handleChange}
        />
        <span className="register__input-err">{errors.name || ''}</span>
        <label htmlFor="first-email" className="register__label">
          E-mail
        </label>
        <input
          value={values.email || ''}
          name="email"
          autoComplete="off"
          type="email"
          minLength="3"
          maxLength="50"
          required
          className="register__field"
          id="first-email"
          onChange={handleChange}
        />
        <span className="register__input-err">{errors.email || ''}</span>
        <label htmlFor="first-password" className="register__label">
          Пароль
        </label>
        <input
          value={values.password || ''}
          name="password"
          autoComplete="off"
          type="password"
          minLength="6"
          maxLength="50"
          required
          className="register__field"
          id="first-password"
          onChange={handleChange}
        />
        <span className="register__input-err">{errors.password || ''}</span>
      </fieldset>
      {!isValid ? (
        <button className="register__submit-button_disabled" disabled>
          Зарегистрироваться
        </button>
      ) : (
        <button
          onSubmit={handleSubmit}
          className="register__submit-button"
          type="submit"
        >
          Зарегистрироваться
        </button>
      )}
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
