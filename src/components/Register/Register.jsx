import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Register = ({registration}) => {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

	 function handleSubmit(evt) {
    evt.preventDefault();
    registration(name, email, password);
  }

	function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }
 
  function handleChangePassword(evt) {
    setPassword(evt.target.value);
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
					value={name}
					name='name'
          autoComplete="off"
          type="text"
          minLength="2"
          maxLength="30"
          required
          className="register__field"
          id="first-name"
					onChange={handleChangeName}
        />
        <span className="form__input-error email-input-error"></span>
        <label htmlFor="first-email" className="register__label">
          E-mail
        </label>
        <input
					value={email}
					name='email'
          autoComplete="off"
          type="email"
          minLength="3"
          maxLength="50"
          required
          className="register__field"
          id="first-email"
					onChange={handleChangeEmail}
        />
        <span className="form__input-error email-input-error"></span>
        <label htmlFor="first-password" className="register__label">
          Пароль
        </label>
        <input
					value={password}
					name='password'
          autoComplete="off"
          type="password"
          minLength="6"
          maxLength="50"
          required
          className="register__field"
          id="first-password"
					onChange={handleChangePassword}
        />
        <span className="form__input-error email-input-error"></span>
      </fieldset>
      <button onSubmit={handleSubmit} className="register__submit-button" type="submit">
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
