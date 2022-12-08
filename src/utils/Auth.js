import BASE_URL from './utils';
class Auth {
  constructor({ address }) {
    this._backendUrl = address;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  //регистрация
  userRegistration = (name, email, password) => {
    return fetch(`${this._backendUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkResponse);
  };

  //авторизация
  userAuthorization(email, password) {
    return fetch(`${this._backendUrl}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }).then(this._checkResponse);
  }

  //выход
  userSignout = () => {
    return fetch(`${this._backendUrl}/signout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._checkResponse);
  };

  //редактирование профиля
  profileEditing = ({ name, email }) => {
    return fetch(`${this._backendUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
      credentials: 'include',
    }).then(this._checkResponse);
  };

	// данные клиента
  getUserInfo = () => {
    return fetch(`${this._backendUrl}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then(this._checkResponse);
  };
}

const auth = new Auth({
  address: BASE_URL,
});

export default auth;
