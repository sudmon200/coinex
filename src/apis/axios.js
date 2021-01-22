import axios from 'axios';
import BASE_URL from './config';

/** base url to make requests to the coingecko database */
const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
