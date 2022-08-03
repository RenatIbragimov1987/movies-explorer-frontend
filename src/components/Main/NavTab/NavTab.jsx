import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav_menu">
			<h1 className='nav_header'>Учебный проект студента факультета Веб-разработки.</h1>
      <ul className='nav_content'>
        <li className='nav_btn'>
          <a href="#" className='nav_text'>О проекте</a>
        </li>
        <li className='nav_btn'>
          <a href="#" className='nav_text'>Технологии</a>
        </li>
        <li className='nav_btn'>
          <a href="#" className='nav_text'>Студент</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
