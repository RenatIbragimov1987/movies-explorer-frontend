// import React, { useState, useEffect } from 'react';
// import './SavedMovies.css';
// import SearchForm from '../SearchForm/SearchForm';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Navigation from '../Navigation/Navigation';
// import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import ButtonYet from '../ButtonYet/ButtonYet';

// const SavedMovies = ({isLoggedIn}) => {
// 	const [buttonForCard, setButtonForCard] = useState(false);
// 	const [searchMovies, setSearchMovies] = useState([]);
// 	const [isValue, setIsValue] = useState('');
//   const [moviesAll, setMoviesAll] = useState([]);
// 	const raw = localStorage.getItem('moviesAllLoc');
// 	const movie = JSON.parse(raw);
	
//   const searchCard = (e) => {
// 		e.preventDefault();
// 		setButtonForCard(true);
// 		setSearchMovies(searchMovies);
//   };

//   function movieValue(evt) {
// 		setButtonForCard(false);
//     setIsValue(evt.target.value);
// 		setMoviesAll(movie)
//   };

//   return (
//     <>
//       <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
//       <Navigation />
//       <SearchForm movieValue={movieValue}  searchCard={searchCard} />
//       <div className="savedMovies">
// 			{buttonForCard ? <MoviesCardList/> : ''}
//       {buttonForCard ? <ButtonYet /> : ''}
//         {/* {[...Array(3)].map((card, index) => (
//           <MoviesCard key={index} />
//         ))} */}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default SavedMovies;
