import React from 'react';
import './AboutMe.css';
import Foto from '../../images/FotoUser.jpg'

const AboutMe = () => {
  return (
    <div className='aboutMe' id='student'>
      <div className='aboutMe__heder'>
        <h2 className='aboutMe__description'>Студент</h2>
      </div>
      <div className='aboutMe__info'>
        <div className="aboutMe__text">
          <h2 className='aboutMe__name'>Ренат</h2>
          <p className='aboutMe__title'>Фронтенд-разработчик, 35 лет</p>
          <p className='aboutMe__subtitle'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="aboutMe__link">
            <a href="#&" className="aboutMe__link-site">Facebook</a>
            <a href="https://github.com/RenatIbragimov1987"  target='_blanc' className="aboutMe__link-site">Github</a> 
          </div>
        </div>
        <img className="aboutMe__foto" src={Foto} alt="pics" />
      </div>
    </div>
  );
}

export default AboutMe;
