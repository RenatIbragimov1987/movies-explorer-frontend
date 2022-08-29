const { NODE_ENV } = process.env;
const BASE_URL = NODE_ENV === 'production' ? 'https://movies.api.nomoredomains.xyz' : 'http://localhost:4000';
export default BASE_URL;
