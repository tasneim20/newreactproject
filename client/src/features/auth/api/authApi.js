import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const login = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
