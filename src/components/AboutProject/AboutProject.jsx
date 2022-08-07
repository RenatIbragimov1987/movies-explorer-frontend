import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <div className='aboutProject' id='project'>
      <div className='aboutProject__heder'>
        <h2 className='aboutProject__description'>О проекте</h2>
      </div>
      <div className='aboutProject__block'>
        <div>
        	<p className='aboutProject__title'>Дипломный проект включал 5 этапов</p>
        	<p className='aboutProject__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div>
        	<p className='aboutProject__title'>На выполнение диплома ушло 5 недель</p>
        	<p className='aboutProject__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
			<div className='aboutProject__term'>
				<div className='aboutProject__term-blockOne'>
					<p className='aboutProject__term-one'>1 неделя</p>
				</div>
				<div className='aboutProject__term-blockFour'>
					<p className='aboutProject__term-four'>4 недели</p>
				</div>	
			</div>
			<div className='aboutProject__subtitle'>
				<p className='aboutProject__subtitle-one'>Back-end</p>
				<p className='aboutProject__subtitle-four'>Front-end</p>
			</div>
    </div>
  );
}

export default AboutProject;