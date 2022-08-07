import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav_menu">
      <ul className='nav_content'>
        <li className='nav_btn'>
          <a href="#project" className='nav_text'>О проекте</a>
        </li>
        <li className='nav_btn'>
          <a href="#technology" className='nav_text'>Технологии</a>
        </li>
        <li className='nav_btn'>
          <a href="#student" className='nav_text'>Студент</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
