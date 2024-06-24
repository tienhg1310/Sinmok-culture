import axios from "axios";

const baseURL = "http://192.168.1.132:4000/";

const ApiServices = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000
});

ApiServices.interceptors.request.use((config) => {
  return config;
});

ApiServices.interceptors.response.use((response) => {
  return response;
});

export default ApiServices;
