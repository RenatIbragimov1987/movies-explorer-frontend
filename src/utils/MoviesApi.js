// import BASE_URL from './utils';

class MoviesApi {
  constructor({ address }) {
    this._address = address;
  }

  //возвращаем результат работы метода
  _checkStatus = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };


  // постановка лайка
  addLike = (id) => {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => this._checkStatus(res));
  };

  // удаление лайка
  removeLike = (id) => {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => this._checkStatus(res));
  };

  // загрузка фильмов с сервера
  loadingMovies() {
    return fetch(this._address, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => this._checkStatus(res));
  }



  // удаление карточки
  deleteCard = (id) => {
    return fetch(`${this._address}/cards/${id}/delete-card`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => this._checkStatus(res));
  };



}

const api = new MoviesApi({
  address: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;
