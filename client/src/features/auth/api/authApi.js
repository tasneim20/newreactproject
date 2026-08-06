import api from "@/lib/axios";

export const login = async (data) => {
  const response = await api.post("/authentications/login", data);

  return response.data;
};
