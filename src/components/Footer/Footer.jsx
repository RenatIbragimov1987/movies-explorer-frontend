import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <h2 className="footer__header">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__content">
        <p className="footer__copyright">&copy;{year}</p>
        <div className="footer__block">
          <a
            href="https://practicum.yandex.ru/"
            target="_blanc"
            className="footer__link"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/RenatIbragimov1987"
            target="_blanc"
            className="footer__link"
          >
            Github
          </a>
          <a href="#$" className="footer__link">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
