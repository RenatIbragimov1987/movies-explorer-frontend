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
// import api from '../../utils/MoviesApi';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoToolTip, setIsInfoToolTip] = useState(false);
  const [popup, setPopup] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  // const [searchMovies, setSearchMovies] = useState([]);
  // const [moviesOnSearchPage, setMoviesOnSearchPage] = useState([]);
  // const [moviesAll, setMoviesAll] = useState([]);

  const checkRes = () => {
    if (data) {
      setData({
        name: data.name,
        email: data.email,
      });
    }
  };

  const history = useHistory();

  //регистрация
  function registration(name, email, password) {
    setIsLoggedIn(true);
    auth
      .userRegistration(name, email, password)
      .then((data) => {
        checkRes(data);
        history.replace({ pathname: '/movies' });
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

  //запрашиваем данные юзера
  useEffect(() => {
    if (isLoggedIn) {
      auth
        .getUserInfo()
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser(data);
          }
        })
        .catch((err) => {
          console.error(err);
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn]);

  //авторизация
  function authorization(email, password) {
    auth
      .userAuthorization(email, password)
      .then((data) => {
        setIsLoggedIn(data);
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
    auth
      .profileEditing(data)
      .then((item) => {
        setIsLoggedIn(true);
        checkRes(data);
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

  const handleExit = (e) => {
    e.preventDefault();
    auth.userSignout();
    setIsLoggedIn(false);
    setData({
      name: null,
      email: null,
    });
    history.push('/');
  };

  function closePopup() {
    setPopup(popup);
    setIsInfoToolTip(false);
  }



  // const shortMovies = (a) => a.filter((item) => item.duration <= 40); //фильтр короткометражек
  
	return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <ProtectedRoute
          path="/movies"
          component={Movies}
          isLoggedIn={isLoggedIn}
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
        <Route exact path="/" render={() => <Main isLoggedIn={isLoggedIn} />} />
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
  );
};

export default App;
