import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a
            href="https://github.com/RenatIbragimov1987/react-mesto-api-full"
            className="portfolio__link-address"
            target="_blanc"
          >
            Статичный сайт<span className="portfolio__link-jump">↗</span>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            href="https://renatibragimov1987.github.io/russian-travel/index.html"
            className="portfolio__link-address"
            target="_blanc"
          >
            Адаптивный сайт<span className="portfolio__link-jump">↗</span>
          </a>
        </li>
        <li className="portfolio__link">
          <a
            href="https://github.com/RenatIbragimov1987/how-to-learn"
            className="portfolio__link-address"
            target="_blanc"
          >
            Одностраничное приложение
            <span className="portfolio__link-jump">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
