import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <a href="#$" className="portfolio__link-address">
            Статичный сайт<span className="portfolio__link-jump">↗</span>
          </a>
        </li>
        <li className="portfolio__link">
          <a href="#$" className="portfolio__link-address">
            Адаптивный сайт<span className="portfolio__link-jump">↗</span>
          </a>
        </li>
        <li className="portfolio__link">
          <a href="#$" className="portfolio__link-address">
            Одностраничное приложение
            <span className="portfolio__link-jump">↗</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
