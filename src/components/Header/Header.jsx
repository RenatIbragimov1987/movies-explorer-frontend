import React from 'react';
import logoHeader from '../../images/logo.svg'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
			<img src={logoHeader} alt="logo"/>
			<div className='header_nav'>
				<button className='header_reg'>Регистрация</button>
				<button className='header_log'>Войти</button>
			</div>
			
    </header>
  );
}

export default Header;
