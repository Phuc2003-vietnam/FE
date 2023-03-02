import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("BASE_URL", BASE_URL);

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});

export default instance;

export * as cartService from './carts';