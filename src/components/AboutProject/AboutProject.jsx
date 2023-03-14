import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="aboutProject" id="project">
      <div className="aboutProject__heder">
        <h2 className="aboutProject__description">О проекте</h2>
      </div>
      <div className="aboutProject__block">
        <div className="boutProject__container">
          <p className="aboutProject__title">
            Проект включал 5 этапов
          </p>
          <p className="aboutProject__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="boutProject__container">
          <p className="aboutProject__title">
            На выполнение диплома ушло 7 недель
          </p>
          <p className="aboutProject__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__term">
        <div className="aboutProject__term-blockOne">
          <p className="aboutProject__term-title">1 неделя</p>
        </div>
        <div className="aboutProject__term-blockFour">
          <p className="aboutProject__term-title">4 недели</p>
        </div>
      </div>
      <div className="aboutProject__subtitle">
        <p className="aboutProject__subtitle-back">Back-end</p>
        <p className="aboutProject__subtitle-four">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
