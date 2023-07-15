import axios from 'axios';

export const randomQuote = axios.create({
  baseURL: 'https://api.quotable.io',
});
