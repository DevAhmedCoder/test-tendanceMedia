import axios from "axios";

export const SERVER_API = "http://localhost:5000/";

const api = axios.create({
  baseURL: SERVER_API,
});

export default api;
