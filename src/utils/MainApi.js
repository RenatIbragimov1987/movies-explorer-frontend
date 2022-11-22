import BASE_URL from './utils';
class MainApi {
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

	postSavedForElectedMovies = (data) => {
	return fetch(`${this._address}/movies`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json', 
		},
		credentials: 'include',
		body: JSON.stringify({
			country: data.country ? data.country : "Нет данных о стране",
			description: data.description ? data.description : "Нет данных об описании",
			director: data.director ? data.director : "Нет данных о режиссёре",
			duration: data.duration ? data.duration : "Нет данных о длительности",
			image: `https://api.nomoreparties.co${data.image.url}` ? `https://api.nomoreparties.co${data.image.url}` : "Нет данных об изображении",
			movieId: data.id,
			nameEN: data.nameEN ? data.nameEN : "Нет названия на английском языке",
			nameRU: data.nameRU ? data.nameRU : "Нет названия на русском языке",
			thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}` ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}` : "Нет данных",
			trailerLink: data.trailerLink ? data.trailerLink : "Нет данных о трейлере",
			year: data.year ? data.year : "Нет данных о годе выхода",
	}),
	}).then((res) => this._checkStatus(res));
};

deleteSavedForElectedMovies = (_id) => {
	return fetch(`${this._address}/${_id}/movies`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json', 
		},
		credentials: 'include',
	// 	body: JSON.stringify({
	// 		country: data.country ? data.country : "Нет данных о стране",
	// 		description: data.description ? data.description : "Нет данных об описании",
	// 		director: data.director ? data.director : "Нет данных о режиссёре",
	// 		duration: data.duration ? data.duration : "Нет данных о длительности",
	// 		image: `https://api.nomoreparties.co/beatfilm-movies${data.image.url}` ? `https://api.nomoreparties.co/beatfilm-movies${data.image.url}` : "Нет данных об изображении",

	// 		movieId: data.id,
	// 		nameEN: data.nameEN ? data.nameEN : "Нет названия на английском языке",
	// 		nameRU: data.nameRU ? data.nameRU : "Нет названия на русском языке",
	// 		thumbnail: `https://api.nomoreparties.co/beatfilm-movies${data.image.formats.thumbnail.url}` ? `https://api.nomoreparties.co/beatfilm-movies${data.image.formats.thumbnail.url}` : "Нет данных",
	// 		trailerLink: data.trailerLink ? data.trailerLink : "Нет данных о трейлере",
	// 		year: data.year ? data.year : "Нет данных о годе выхода",
	// }),
	}).then((res) => this._checkStatus(res));
};

getSavedForElectedMovies = () => {
	return fetch(`${this._address}/movies`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		credentials: 'include',
	// 	body: JSON.stringify({
	// 		country: data.country	? data.country : "Нет данных о стране",
	// 		director: data.director ? data.director : "Нет данных о режиссёре",
	// 		duration: data.duration ? data.duration : "Нет данных о длительности",
	// 		year: data.year ? data.year : "Нет данных о годе выхода",
	// 		description: data.description ? data.description : "Нет данных об описании",
	// 		image: data.image ? data.image : "Нет данных об изображении",
	// 		trailerLink: data.trailerLink ? data.trailerLink : "Нет данных о трейлере",
	// 		thumbnail: data.thumbnail ? data.thumbnail : "Нет данных",
	// 		movieId: data.id,
	// 		nameRU: data.nameRU ? data.nameRU : "Нет названия на русском языке",
	// 		nameEN: data.nameEN ? data.nameEN : "Нет названия на английском языке",
	// }),
	}).then((res) => this._checkStatus(res));
};

// постановка лайка
// addLike = (id) => {
// 	return fetch(`${this._address}/${id}/likes`, {
// 		method: 'PUT',
// 		headers: {
// 			Accept: 'application/json',
// 			'Content-Type': 'application/json',
// 		},
// 		credentials: 'include',
// 	}).then((res) => this._checkStatus(res));
	
// };

}

const ourApi = new MainApi({
  address: BASE_URL,
});

export default ourApi;
	
	