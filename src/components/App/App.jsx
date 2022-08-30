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
import SavedMovies from '../SavedMovies/SavedMovies';
import auth from '../../utils/Auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import api from '../../utils/MoviesApi';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [errorLogin, setErrorLogin] = useState('');
	
	const history = useHistory();
	
	
 
  

  const [data, setData] = useState({
		name: '',
    email: '',
  });
	

  const checkRes = (data) => {
    if (data) {
      setData({
				name: data.name,
        email: data.email,
      });
    }
  };

	// useEffect(() => {
	// 	localStorage.setItem(api.loadingMovies())
			
	// })
	
  //регистрация
  function registration(name, email, password) {
    auth.userRegistration(name, email, password).then(() => {
      checkRes(data);
      history.replace({ pathname: '/signin' });
    });
  }

  //авторизация
  function authorization(email, password) {
    auth
      .userAuthorization(email, password)
      .then((data) => {
        if (data) {
          setIsLoggedIn(true);
					// setCurrentUser(data);
          checkRes(data);
					console.log(currentUser);
          history.push('/');
        }
      })
      .catch((err) => {
        if (err.status >= 400) {
          console.log(`Неправильные почта или пароль: ${err}`);
        } else {
          console.log(`Что-то пошло не так. Попробуйте еще раз: ${err}`);
        }
        setIsLoggedIn(false);
      })
      .finally(() => {
				
			});
  }

	//изменение данных профиля
  function handleUpdateUser(data) {
    // setIsRequestLoading(true);
    auth
      .profileEditing(data)
      .then((item) => {
				setIsLoggedIn(false);
        checkRes(data);
        setCurrentUser(item);
      })
      .catch((err) => {
				if (err.status >= 400) {
          console.log(`Ошибка изменения данных профиля: ${err}`);
        } else {
          console.log(`Что-то пошло не так. Попробуйте еще раз: ${err}`);
        }
        // setIsLoggedIn(false);
      })
      .finally(() => {
        
      });
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

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
				
        <Switch>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
						// cards={cards}
						// setCards={setCards}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onUpdateUser={handleUpdateUser}
            handleExit={handleExit}
						setData={setData}
						
          />
          <Route
            exact
            path="/"
            render={() => <Main isLoggedIn={isLoggedIn} />}
          />
          <Route
            path="/signup"
            render={() => <Register registration={registration}/>}
          />
          <Route
            path="/signin"
            render={() => <Login authorization={authorization} />}
          />
          <Route path="*" render={() => <PageNotFound />} />
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
