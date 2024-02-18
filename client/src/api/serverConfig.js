import axios from "axios";

// token
const token = localStorage.getItem("token");

// headers
export const HEADERS = {
  common: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    // Common headers for all requests
  },
  form: {
    "Content-Type": "multipart/form-data",
  },
  custom: {
    "X-Custom-Header": "custom-value",
  },
};

// Create an instance of Axios with static headers
const api = axios.create({
  baseURL: "http://192.168.43.67:4001/",
});

export default api;
