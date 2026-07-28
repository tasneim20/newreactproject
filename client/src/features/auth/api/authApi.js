import api from "@/lib/axios";

export const login = async (data) => {
  const response = await api.post("/authentications/login", data, {
    headers: {
      "Accept-Language": "EN",
    },
  });

  console.log(response); // كامل رد Axios
  console.log(response.data); // البيانات فقط
  return response.data;
};
