import api from "@/lib/axios";

export async function getCurrentUser() {
  const { data } = await api.get("/me/");
  return data;
}
