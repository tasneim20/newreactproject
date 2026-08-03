import axios from "axios";

const api = axios.create({
  baseURL: "https://staging.api.platform.akar-jo.com/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCurrentUser = async () => {
  const { data } = await api.get("/auth/me");
  return data;
};
export default api;
