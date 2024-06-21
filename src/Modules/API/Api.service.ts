import axios from "axios";

const baseURL = "http://localhost:4000/";

const ApiServices = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiServices.interceptors.request.use((config) => {
  return config;
});

ApiServices.interceptors.response.use((response) => {
  return response;
});

export default ApiServices;
