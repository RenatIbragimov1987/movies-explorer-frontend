import React, { useState, useEffect } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonYet from '../ButtonYet/ButtonYet';
// import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import api from '../../utils/MoviesApi';
import ourApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurentUserContext';

const Movies = ({ isLoggedIn, isPreloader, isLoading }) => {
	const context = React.useContext(CurrentUserContext); //подписались на контекст 
  // все фильмы из ЛС
  const fullMoviesLoc = JSON.parse(localStorage.getItem('moviesAllLoc'));

  // сохранение найденных фильмов
  const [filteredMovies, setFilteredMovies] = useState(() => {
    const saved = localStorage.getItem('foundMoviesLoc');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // сохранение текста поиска фильмов
  const [textSearch, setTextSearch] = useState(() => {
    const saved = localStorage.getItem('textSearch');
    const initialText = JSON.parse(saved);
    return initialText || '';
  });

  // сохранение положения тумблера короткометражек
  const [switchTumb, setSwitchTumb] = useState(() => {
    const saved = localStorage.getItem('switchTumb');
    const initialTumbler = JSON.parse(saved);
    return initialTumbler || false;
  });
  const [foundSavedMoviesData, setFoundSavedMoviesData] = React.useState([]);
  const [displayCard, setDisplayCard] = useState(true);

  const [valuesErr, setValuesErr] = useState('');

  const [textNoMovies, setTextNoMovies] = useState('');

  const [buttonShowMore, setButtonShowMore] = useState(true); // показать/убрать кнопку ЕЩЁ

  // для отображения карточек на разных разрешениях экрана
  const [searchMovies, setSearchMovies] = useState(0);
  const [extraMovies, setExtraMovies] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const resMovies = filteredMovies.slice(0, searchMovies);
	const [savedMovies, setSavedMovies] = useState(() => {
    const saved = localStorage.getItem('savedMoviesLoc');
    const initialSaved = JSON.parse(saved);
    return initialSaved || [];
  });
  // console.log(searchMovies, 'searchMovies');
  // console.log(extraMovies, 'extraMovies');
 
  const updateWidth = () => {
    const timer = setTimeout(() => {
      setWidth(window.innerWidth);
    }, 500);
    return () => clearTimeout(timer);
  };
	
  // слушатель ввода в строку поиска фильмов
  const searchValue = (event) => {
    event.preventDefault();
    setTextSearch(event.target.value);
  };
	
  // смена состояния тумблера при клике
  const filterTumb = () => {
    setSwitchTumb(!switchTumb);
			setFilteredMovies(fullMoviesLoc.filter((mov) => {
				return mov.nameRU.toLowerCase().includes(textSearch.toLowerCase());
			}))

  };

  // кнопка поиска фильмов
  const searchButton = (event) => {
    event.preventDefault();
		setFilteredMovies(
			fullMoviesLoc.filter((mov) => {
				return mov.nameRU.toLowerCase().includes(textSearch.toLowerCase());
			})
		);
		if (switchTumb === true) {
  		setFilteredMovies(filteredMovies.filter((item) => item.duration < 40))
  	}
		if (width >= 1280) {
      setSearchMovies(12);
    }
    if (width >= 768 && width < 1280) {
      setSearchMovies(8);
    }
    if (width >= 320 && width < 768) {
      setSearchMovies(12);
    }
  };

  const buttonMoreHandle = () => {
    setSearchMovies(searchMovies + extraMovies);
  };

	useEffect(() => {
  if (switchTumb) {
  	setFilteredMovies(filteredMovies.filter((item) => {
			return item.duration < 40}))
  }
	if (!textSearch.length) {
		setFilteredMovies([])
	}
  }, [switchTumb]);


  useEffect(() => {
  	if (!textSearch.length) {
  		setFilteredMovies([])
			setDisplayCard(false)
  		setValuesErr('Нужно ввести ключевое слово');
  } else {
  		setValuesErr('');
  }
  }, [textSearch]);

  useEffect(() => {
    if (resMovies.length === filteredMovies.length) {
      setButtonShowMore(false);
    } else {
			setButtonShowMore(true)
		}
		
  }, [resMovies, filteredMovies]);

  useEffect(() => {
    if (filteredMovies.length) {
      setDisplayCard(true);
    }
  }, [filteredMovies]);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .loadingMovies()
        .then((cards) => {
          localStorage.setItem('moviesAllLoc', JSON.stringify(cards));
        })
        .catch((err) => {
          localStorage.removeItem('moviesAllLoc');
          console.log(`Ошибка загрузки карточек в хранилище ${err}`);
        });
    }
  }, [isLoggedIn]);


// console.log(savedMovies, 'savedMovies');

// console.log(filteredMovies, 'filteredMovies');

//////////////////////////////////////////////////////////
const AddToFavorites = (card) => {
	ourApi.postSavedForElectedMovies(card)
	.then((data) => {
		// const trailerLink = data.trailerLink ? data.trailerLink : "https://www.youtube.com";
    setSavedMovies([...savedMovies, { ...data }]); // добавляем в сохраненные новый фильм data
		
	})
	.catch((err) => {
		console.log(`ошибка добавления в избранное ${err}`);
	});
	
}
//////////////////////////////////////////////////////////
useEffect(() => {
	ourApi.getSavedForElectedMovies()
	.then((data) => {
		localStorage.setItem('savedMoviesLoc', JSON.stringify(data));
})
	
},[savedMovies])

useEffect(() => {
	if (filteredMovies.length) {
		setDisplayCard(true);
	}
}, [filteredMovies]);

// Добавление/Удаление в массив сохраненные/избранные (кнопка лайк/сохранить)
// const handleAddedMoviesToSaved = (movie, isMovieAddedToSave) =>(isMovieAddedToSave ? addMoviesToSaved(movie) : deleteMoviesToSaved(movie));

// // Проверяем есть ли уже фильм в массиве сохраненные/избранные
// const isMovieAddedToSave = (movie) => savedMovies.some(item => item.id === movie.id);

// // фильтр для короткометражек
// const shortMovies= (a) => a.filter((item) => item.duration <= SHORT_MOVIE);

// console.log(filteredMovies);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('foundMoviesLoc', JSON.stringify(filteredMovies));
      localStorage.setItem('textSearch', JSON.stringify(textSearch));
      localStorage.setItem('switchTumb', JSON.stringify(switchTumb));
    }
  }, [isLoggedIn, filteredMovies, textSearch, switchTumb]);


  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    if (width >= 1280) {
      setSearchMovies(12);
      setExtraMovies(3);
    }
    if (width >= 768 && width < 1280) {
      setSearchMovies(8);
      setExtraMovies(2);
    }
    if (width >= 320 && width < 768) {
      setSearchMovies(12);
      setExtraMovies(3);
    }
    // if ({path: "/saved-movies"}) {
    // 	setSearchMovies(100)
    // }
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  // console.log(buttonShowMore, 'buttonShowMore');
  // console.log(searchMovies, 'searchMovies');
  // console.log(extraMovies, 'extraMovies');
  // console.log(filteredMovies, 'filteredMovies');
  // console.log(resMovies, 'resMovies');
	// console.log(switchTumb, 'switchTumb');
  return (
    <>
      <Header modifierMovi="header__nav_none" isLoggedIn={isLoggedIn} />
      <Navigation />
      <SearchForm
        isLoggedIn={isLoggedIn}
        textSearch={textSearch}
        valuesErr={valuesErr}
        searchValue={searchValue}
        searchButton={searchButton}
        textNoMovies={textNoMovies}
        filterTumb={filterTumb}
        switchTumb={switchTumb}
      />

      {displayCard === true ? <MoviesCardList savedMovies={savedMovies} resMovies={resMovies} AddToFavorites={AddToFavorites}/> : ''}
      {buttonShowMore === true ? (
        <ButtonYet buttonMoreHandle={buttonMoreHandle} />
      ) : (
        ''
      )}

      <Footer />
    </>
  );
};

export default Movies;
