import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_GIPHY_API_URL
})

export default api;