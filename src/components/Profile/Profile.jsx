import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Profile = () => {
  return (
    <>
      <Header modifierMovi="header__nav_none" />
      <Navigation />
      <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <label className="profile__label-name">
          <input
            placeholder="Имя"
            type="text"
            minLength="2"
            maxLength="30"
            name="name"
            autocomplete="off"
            className="profile__input"
          />
          <span className="profile__span">Виталий</span>
        </label>
        <label className="profile__label-email">
          <input
            placeholder="E-mail"
            type="email"
            minLength="3"
            maxLength="50"
            name="email"
            autocomplete="off"
            className="profile__input"
          />
          <span className="profile__span">pochta@yandex.ru</span>
        </label>
        <button className="profile__button profile__button_margin">
          Редактировать
        </button>
        <button className="profile__button profile__button_red">
          Выйти из аккаунта
        </button>
      </div>
    </>
  );
};

export default Profile;
