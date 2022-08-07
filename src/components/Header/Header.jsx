import React from 'react';
import logoHeader from '../../images/logo.svg'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
			<a href="#$" className='header__logo'>
				<img src={logoHeader} alt="logo"/>
			</a>
			<div className='header__nav'>
				<a href='#$' className='header__reg'>Регистрация</a>
				<button href='#$' className='header__log'>Войти</button>
			</div>
			
    </header>
  );
}

export default Header;
