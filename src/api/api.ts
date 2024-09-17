import axios from 'axios';

const BASE_URL = 'https://crudbb.netlify.app/.netlify/functions/server';
export const api = axios.create({
  baseURL: BASE_URL,
});
