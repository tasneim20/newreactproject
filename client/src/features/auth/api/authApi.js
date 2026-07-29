import api from "@/lib/axios";

export const login = async (data) => {
  const response = await api.post("/authentications/login", data, {
    headers: {
      "Accept-Language": "EN",
    },
  });

  return response.data;
};
