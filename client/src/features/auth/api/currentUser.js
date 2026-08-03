import api from "@/lib/axios";

export async function getCurrentUser() {
  try {
    const { data } = await api.get("/me/");
    console.log("AUTH ME SUCCESS:", data);
    return data;
  } catch (error) {
    console.log("AUTH ME ERROR:", error.response);
    throw error;
  }
}
