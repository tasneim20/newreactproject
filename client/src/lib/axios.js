import axios from "axios";

const api = axios.create({
  baseURL: "https://staging.api.platform.akar-jo.com/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
