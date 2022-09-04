import React, { useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import useFormWithValidation from '../ValidatorComponent/ValidatorComponent';

const Profile = ({ onUpdateUser, isLoggedIn, handleExit }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.name || !values.email) {
      return;
    }
    const { name, email } = values;
    onUpdateUser({
      name: name,
      email: email,
    });
  }

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <form className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <label className="profile__label-name">
          <input
            onChange={handleChange}
            value={values.name || ''}
            placeholder="Имя"
            type="text"
            minLength="2"
            maxLength="30"
            name="name"
            autoComplete="off"
            className="profile__input"
          />
          <span className="profile__span">{currentUser.name}</span>
        </label>
        <span className="profile__input-err">{errors.name || ''}</span>
        <label className="profile__label-email">
          <input
            onChange={handleChange}
            value={values.email || ''}
            placeholder="E-mail"
            type="email"
            minLength="3"
            maxLength="50"
            name="email"
            autoComplete="off"
            className="profile__input"
          />
          <span className="profile__span">{currentUser.email}</span>
        </label>
        <span className="profile__input-err">{errors.email || ''}</span>
        {isValid ? (
          <button
            className="profile__button profile__button_margin"
            type="submit"
            onClick={handleSubmit}
          >
            Редактировать
          </button>
        ) : (
          <button
            className="profile__button_disabled profile__button_margin"
            disabled
          >
            Редактировать
          </button>
        )}
        <button
          className="profile__button profile__button_red"
          type="submit"
          onClick={handleExit}
        >
          Выйти из аккаунта
        </button>
      </form>
    </>
  );
};

export default Profile;
