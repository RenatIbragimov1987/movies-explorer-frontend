import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
			<h3 className='portfolio__title'>Портфолио</h3>
			<ul className='portfolio__links'>
				<li className='portfolio__link'>
					<a href="#$" className='portfolio__link-address'>Статичный сайт</a>
					<span className='portfolio__link-jump'>↗</span>
				</li>
				<li className='portfolio__link'>
					<a href="#$" className='portfolio__link-address'>Адаптивный сайт</a>
					<span className='portfolio__link-jump'>↗</span>
				</li>
				<li className='portfolio__link'>
					<a href="#$" className='portfolio__link-address'>Одностраничное приложение</a>
					<span className='portfolio__link-jump'>↗</span>
				</li>
			</ul>
    </div>
  );
}

export default Portfolio;