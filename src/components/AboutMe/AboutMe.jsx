import React from 'react';
import './AboutMe.css';
import Foto from '../../images/FotoUser.jpg';

const AboutMe = () => {
  return (
    <section className="aboutMe" id="student">
      <div className="aboutMe__heder">
        <h2 className="aboutMe__description">Обо мне</h2>
      </div>
      <div className="aboutMe__info">
        <div className="aboutMe__text">
          <h2 className="aboutMe__name">Ренат</h2>
          <p className="aboutMe__title">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutMe__subtitle">
            Я родился и живу в Махачкале, имею высшее образование. Женат, есть дети. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. Имею постоянную работу не связанную с програмированием. Обучаюсь веб-разработке, хочу начать
            заниматься фриланс-заказами и уйти с постоянной работы.
          </p>
          <div className="aboutMe__link">
            <a
              href="https://rkn.gov.ru/news/rsoc/news74156.htm?utm_source=google.com&utm_medium=organic&utm_campaign=google.com&utm_referrer=google.com"
              target="_blanc"
              className="aboutMe__link-site"
            >
              Facebook
            </a>
            <a
              href="https://github.com/RenatIbragimov1987"
              target="_blanc"
              className="aboutMe__link-site"
            >
              Github
            </a>
          </div>
        </div>
        <img className="aboutMe__foto" src={Foto} alt="pics" />
      </div>
    </section>
  );
};

export default AboutMe;
