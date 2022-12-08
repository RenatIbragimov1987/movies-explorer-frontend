import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import './App.css';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import SavedMovies from '../SavedMovies/SavedMovies';
import auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MoviesApi';
import ourApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

const App = () => {
  // const currentUser = React.useContext(CurrentUserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTip, setIsInfoToolTip] = useState(false);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
  });
  const adressMov = window.location.pathname === '/movies';
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
  // const [switchSavedIcon, setSwitchSavedIcon] = useState(false)

  const [savedMoviesDisplay, setSavedMoviesDisplay] = useState([]);

  // сохранение фильмов
  const [savedMovies, setSavedMovies] = useState([]);
  const [displayCard, setDisplayCard] = useState(true); // состояние отображения карточек
  const [valuesErr, setValuesErr] = useState(''); // сообщение ошибки при пустом поле поиска
  const [valuesNotMovies, setValuesNotMovies] = useState('');
  // для отображения карточек на разных разрешениях экрана
  const [searchMovies, setSearchMovies] = useState(0);
  const [extraMovies, setExtraMovies] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const resMovies = filteredMovies.slice(0, searchMovies);
  // функция фильтрации короткометражек
  const shortFilms = (card) => card.filter((item) => item.duration <= 40);
  const history = useHistory();

  const addressURL = history.location.pathname === '/movies';
  
  //функция отслеживания разрешения экрана
  const updateWidth = () => {
    const timer = setTimeout(() => {
      setWidth(window.innerWidth);
    }, 300);
    return () => clearTimeout(timer);
  };
  //функция отображения и добавления карточек на разных разрешениях
  const displayDifferentWidth = (width) => {
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
  };

  // слушатель ввода в строку поиска фильмов
  const searchValue = (e) => {
    setTextSearch(e.target.value);
  };

  // смена состояния тумблера при клике
  const filterTumb = () => {
    setSwitchTumb(!switchTumb);
    if (filteredMovies.length) {
      setFilteredMovies(
        fullMoviesLoc.filter((mov) => {
          return mov.nameRU.toLowerCase().includes(textSearch.toLowerCase());
        })
      );
    }
  };

  // кнопка поиска фильмов
  const searchButton = (event) => {
    event.preventDefault();
    setDisplayCard(true);
    displayDifferentWidth(width);
    setFilteredMovies(
      fullMoviesLoc.filter((mov) => {
        return mov.nameRU.toLowerCase().includes(textSearch.toLowerCase());
      })
    );
    if (textSearch.length === 0) {
      setValuesErr('Нужно ввести ключевое слово');
      setFilteredMovies('');
      setDisplayCard(false);
    }
    if (switchTumb === true) {
      setFilteredMovies(shortFilms(filteredMovies));
    }
  };

  useEffect(() => {
    if (filteredMovies.length) {
      setValuesErr('');
      setValuesNotMovies('');
    }
    if (!filteredMovies.length) {
      setValuesNotMovies('Ничего не найдено');
    }

    if (valuesErr === 'Нужно ввести ключевое слово') {
      setValuesNotMovies('');
    }
  }, [filteredMovies.length, textSearch.length, valuesErr]);

  // useEffect(() => {
  //   if (textSearch.length === 0) {
  //     setFilteredMovies([]);
  //     setDisplayCard(false);
  //   } else {
  //     setValuesErr('');
  //   }
  // }, [textSearch]);

  //добавляем карточки по кнопке ЕЩЁ
  const buttonMoreHandle = () => {
    setSearchMovies(searchMovies + extraMovies);
  };

  const AddToFavorites = (card) => {
    ourApi
      .postSavedForElectedMovies(card)
      .then((data) => {
        setSavedMovies([...savedMovies, { ...data }]); // добавляем в сохраненные новый фильм data
      })
      .catch((err) => {
        console.log(`ошибка добавления в избранное ${err}`);
      });
  };

  const checkRes = () => {
    if (data) {
      setData({
        name: data.name,
        email: data.email,
      });
    }
  };



  //регистрация
  function registration(name, email, password) {
    setIsPreloader(true);
    auth
      .userRegistration(name, email, password)
      .then((data) => {
        checkRes(data);
				setIsLoggedIn(true)
        history.replace({ pathname: '/movies' });
        setIsPreloader(false);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoToolTip({
          open: true,
          status: false,
        });
        if (err.status >= 400) {
          console.log(`Ошибка: ${err}`);
        } else {
          console.log(`Что-то пошло не так. Попробуйте еще раз: ${err}`);
        }
      })
      .finally(() => {});
  }

  // //запрашиваем данные юзера
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     auth
  //       .getUserInfo()
  //       .then((data) => {

  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         setIsLoggedIn(false);
  //       });
  //   }
  // }, [isLoggedIn]);

  //авторизация
  function authorization(email, password) {
    setIsPreloader(true);
    auth
      .userAuthorization(email, password)
      .then((data) => {
				checkRes(data);
				setIsLoggedIn(true);
				setIsPreloader(false);
				history.push('/movies');
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoToolTip({
          open: true,
          status: false,
        });
        if (err.status >= 400) {
          console.log(`Неправильные почта или пароль: ${err}`);
        } else {
          console.log(`Что-то пошло не так. Попробуйте еще раз: ${err}`);
        }
				setIsLoggedIn(false);
      });
  }

  //изменение данных профиля
  function handleUpdateUser(data) {
    setIsPreloader(true);
    auth
      .profileEditing(data)
      .then((item) => {
        setIsPreloader(false);
        setIsLoggedIn(true);
        checkRes(item);
      })
      .then(() => {
        history.replace({ pathname: '/signin' });
      })
      .catch((err) => {
        if (err.status >= 400) {
          console.log(`Ошибка изменения данных профиля: ${err}`);
        } else {
          console.log(`Что-то пошло не так. Попробуйте еще раз: ${err}`);
        }
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

	function closePopup() {
    setPopup(popup);
    setIsInfoToolTip(false);
  }

  //очищаем локалсторедж при выходе
  const handleExit = (event) => {
    event.preventDefault();
    auth.userSignout().then((data) => {
      if (data) {
        setIsLoggedIn(false);
        localStorage.clear();
      }
    });
    setData({ name: null, email: null });
    history.push('/');
  };

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
    if ({ pathname: '/signin' } || { pathname: '/signup' }) {
      history.push({ replace: true });
    } else {
      history.push({ replace: false });
    }
  };

	const checkAuth = () => {
		auth.getUserInfo()
		.then((data) => {
				if (data) {
				handleLoggedIn();
				}
		})
		.catch(() => {
			history.replace("/", { replace: true });
		});	
	}
	
	useEffect(() => {
		checkAuth();
	}, []);
	
	//запрашиваем данные юзера
	useEffect(() => {
		if(isLoggedIn) {
			auth
				.getUserInfo()
				.then((data) => {
					if(data) {
						setCurrentUser(data);
						// handleLoggedIn();
						// setIsLoggedIn(true);
						// setIsPreloader(false);
						// setIsLoading(true);
					}
				})
				.catch((err) => {
					console.error(err);
					setIsLoggedIn(false);
				});
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoggedIn]);

  // записываем все фильмы со стороннего сервера в localStorage
  useEffect(() => {
		if (isLoggedIn) {
    api
      .loadingMovies()
      .then((cards) => {
        localStorage.setItem('moviesAllLoc', JSON.stringify(cards));
      })
      .catch((err) => {
        localStorage.removeItem('moviesAllLoc');
        console.log(
          `Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз. ${err}`
        );
      });
		}
  }, [isLoggedIn]);

  // Добавление/Удаление в массив сохраненные/избранные (кнопка лайк/сохранить)
  // const handleAddedMoviesToSaved = (movie, isMovieAddedToSave) =>(isMovieAddedToSave ? addMoviesToSaved(movie) : deleteMoviesToSaved(movie));

  // // Проверяем есть ли уже фильм в массиве сохраненные/избранные
  // const isMovieAddedToSave = (movie) => savedMovies.some(item => item.id === movie.id);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('foundMoviesLoc', JSON.stringify(filteredMovies));
      localStorage.setItem('textSearch', JSON.stringify(textSearch));
      localStorage.setItem('switchTumb', JSON.stringify(switchTumb));
    }
  }, [isLoggedIn, filteredMovies, textSearch, switchTumb]);

  //отображение карточек на разной ширине и ориентации экрана
  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    displayDifferentWidth(width);
    return () => window.removeEventListener('resize', updateWidth);
  }, [width]);

  //основная страница с фильмами
  useEffect(() => {
    if (switchTumb && adressMov) {
      setFilteredMovies(shortFilms(filteredMovies));
    }
  }, [switchTumb, adressMov]);


  // Проверка токена (jwt) в cookies
  // useEffect(() => {
  //     auth
  //       .getUserInfo()
  //       .then((data) => {
  //         if (data) {
	// 					handleLoggedIn();
	// 					setIsPreloader(false);
	// 				}
  //       })
  //       .catch(() => {
  //         history.replace('/', { replace: true });
  //       });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
// eslint-disable-next-line react-hooks/exhaustive-deps


  

	

  console.log(isLoggedIn, 'isLoggedIn');
  return (
    <div className="page">
      {isPreloader ? <Preloader /> : ''}
      <CurrentUserContext.Provider value={currentUser}>
        <Switch setIsPreloader={false}>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            isPreloader={setIsPreloader}
            currentUser={currentUser}
            valuesErr={valuesErr}
            buttonMoreHandle={buttonMoreHandle}
            resMovies={resMovies}
            AddToFavorites={AddToFavorites}
            displayCard={displayCard}
            searchValue={searchValue}
            filterTumb={filterTumb}
            searchButton={searchButton}
            fullMoviesLoc={fullMoviesLoc}
            textSearch={textSearch}
            switchTumb={switchTumb}
            isLoading={isLoading}
            valuesNotMovies={valuesNotMovies}
            filteredMovies={filteredMovies}
            savedMovies={savedMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            setDisplayCard={true}
            // DeleteSavedMovies={DeleteSavedMovies}
            // filteredMovies={filteredMovies}

            valuesErr={valuesErr}
            shortFilms={shortFilms}
            searchButton={searchButton}
            filterTumb={filterTumb}
            switchTumb={switchTumb}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onUpdateUser={handleUpdateUser}
            handleExit={handleExit}
          />

          <Route
            exact
            onChange={isPreloader}
            path="/"
            render={() => <Main isLoggedIn={isLoggedIn} />}
          />

          <Route
            path="/signup"
            render={() => <Register registration={registration} />}
          />
          <Route
            path="/signin"
            render={() => <Login authorization={authorization} />}
          />
          <Route path="*" render={() => <PageNotFound />} />
        </Switch>

        <InfoTooltip
          onClose={closePopup}
          isSuccess={isSuccess}
          isInfoToolTip={isInfoToolTip}
        />
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
