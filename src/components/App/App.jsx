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
import Preloader from '../Preloader/Preloader';

const App = () => {
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
  const history = useHistory();

  const checkRes = () => {
    if (data) {
      setData({
        name: data.name,
        email: data.email,
      });
    }
  };

  // const location = useLocation();
  // const navigate = useNavigate(); // Предоставляет доступ к useNavigate, был UseHistory в v5 Router
  // const path = location.pathname;

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
    if ({ pathname: '/signin' } || { pathname: '/signup' }) {
      history.push({ replace: true });
    } else {
      history.push({ replace: false });
    }
  };

  // Проверка токена (jwt) в cookies
  useEffect(() => {
    setIsPreloader(true);
    auth
      .getUserInfo()
      .then((data) => {
        if (data) {
          handleLoggedIn();
          setIsPreloader(false);
        }
      })
      .catch((err) => {
        setIsPreloader(false);
      })
      .catch(() => {
        history.replace('/', { replace: true });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //регистрация
  function registration(name, email, password) {
    setIsLoggedIn(true);
    setIsPreloader(true);
    auth
      .userRegistration(name, email, password)
      .then((data) => {
        checkRes(data);
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
        setIsLoggedIn(false);
      })
      .finally(() => {});
  }
  // useEffect(() => {
  // 	if (isLoggedIn) {
  // 		setIsPreloader(true)
  // 	}

  // }, [isLoggedIn]);
  //запрашиваем данные юзера
  useEffect(() => {
    if (isLoggedIn) {
      auth
        .getUserInfo()
        .then((data) => {
          if (data) {
            setIsPreloader(false);
            setIsLoggedIn(true);
            setCurrentUser(data);
            setIsLoading(true);
          }
        })
        .catch((err) => {
          console.error(err);
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn]);

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

  //авторизация
  function authorization(email, password) {
    setIsPreloader(true);
    auth
      .userAuthorization(email, password)
      .then((data) => {
        setIsLoggedIn(data);
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
      })
      .finally(() => {});
  }

  //изменение данных профиля
  function handleUpdateUser(data) {
    setIsPreloader(true);
    auth
      .profileEditing(data)
      .then((item) => {
        setIsLoggedIn(true);
        checkRes(data);
        setIsPreloader(false);
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
        setIsLoggedIn(false);
      })
      .finally(() => {});
  }

  const handleExit = (event) => {
    event.preventDefault();
    setIsPreloader(true);
    auth.userSignout().then((data) => {
      if (data) {
        setIsLoggedIn(false);
        setIsPreloader(false);
      }
    });
    setData({ name: null, email: null });
    history.push('/');
  };

  function closePopup() {
    setPopup(popup);
    setIsInfoToolTip(false);
  }

  // const shortMovies = (a) => a.filter((item) => item.duration <= 40); //фильтр короткометражек

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
            // isLoading={isLoading}
            // shortMovies={shortMovies}
            // moviesAll={moviesAll}
          />
          {/* <ProtectedRoute
          path="/saved-movies"
          component={SavedMovies}
          isLoggedIn={isLoggedIn}
        /> */}
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
