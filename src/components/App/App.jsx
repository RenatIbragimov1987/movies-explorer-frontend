import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Main />} />

        <Route path="/movies" render={() => <Movies />} />

        <Route path="/saved-movies" render={() => <SavedMovies />} />

        <Route path="/profile" render={() => <Profile />} />

        <Route path="/signup" render={() => <Register />} />

        <Route path="/signin" render={() => <Login />} />

        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
};

export default App;
