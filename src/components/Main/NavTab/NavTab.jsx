import React from 'react';
import './NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav_menu">
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
