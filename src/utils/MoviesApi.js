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

  // загрузка фильмов с сервера
  loadingMovies() {
    return fetch(`${this._address}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
			
    }).then((res) => this._checkStatus(res));
		
  }
	
}

const api = new MoviesApi({
  address: 'https://api.nomoreparties.co',
});

export default api;

