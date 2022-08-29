
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurentUserContext'
import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

const Profile = ({onUpdateUser, isLoggedIn, handleExit}) => {
  const currentUser = CurrentUserContext;

  const [isName, setIsName] = useState("");
  const [isEmail, setIsEmail] = useState("");

	
  // useEffect(() => {
  //   setIsName(setData.name);
  //   setIsEmail(setData.email);
  // }, );
	
  function handleChangeName(e) {
    setIsName(e.target.value);
  }
	
  function handleChangeEmail(e) {
    setIsEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: isName,
      email: isEmail,
    });
  }

  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <form className="profile" onSubmit={handleSubmit} >
        <h1 className="profile__title">Привет, виталя {currentUser.name}!</h1>
        <label className="profile__label-name">
          <input
            onChange={handleChangeName}
            value={isName || ""}
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
        <label className="profile__label-email">
          <input
            onChange={handleChangeEmail}
            value={isEmail || ""}
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
        <button className="profile__button profile__button_margin" type="submit">
          Редактировать
        </button>
        <button className="profile__button profile__button_red" type="submit" onClick={handleExit}>
          Выйти из аккаунта
        </button>
      </form>
    </>
  );
};

export default Profile;
