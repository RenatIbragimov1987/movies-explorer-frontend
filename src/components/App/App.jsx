import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';

const App = () => {
  return (
    <div className='app'>
			{/* <Header/>
			<Main/>
			<Footer/> */}
			<Movies/>
    </div>

  );
}

export default App;
