import axios from "axios";

const baseURL = "http://localhost:4000/";

const ApiServices = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

ApiServices.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return console.log(error);
  }
);

ApiServices.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return console.log(error);
  }
);

export default ApiServices;
