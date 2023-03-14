import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import useFormWithValidation from '../ValidatorComponent/ValidatorComponent';

const Login = ({ authorization }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.password || !values.email) {
      return;
    }
    const { email, password } = values;
    authorization(email, password);
  }
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  //  function handleSubmit(evt) {
  //   evt.preventDefault();
  //   authorization(email, password);
  // }

  // function handleChangeEmail(evt) {
  //   setEmail(evt.target.value);
  // }

  // function handleChangePassword(evt) {
  //   setPassword(evt.target.value);
  // }
  return (
    <form className="login" type="submit" onSubmit={handleSubmit}>
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
          value={values.email || ''}
          name="email"
          autoComplete="off"
          type="email"
          minLength="3"
          maxLength="50"
          required
          className="login__field"
          id="first-email"
          onChange={handleChange}
        />
        <span className="login__input-err">{errors.email || ''}</span>
        <label htmlFor="first-password" className="login__label">
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
          className="login__field"
          id="first-password"
          onChange={handleChange}
        />
        <span className="login__input-err">{errors.password || ''}</span>
      </fieldset>
      {isValid ? (
        <button
          className="login__submit-button"
          type="submit"
          onSubmit={handleSubmit}
        >
          Войти
        </button>
      ) : (
        <button
					className="login__submit-button_disabled"
					disabled
				>
          Войти
        </button>
      )}
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
