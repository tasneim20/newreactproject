import api from "../../../lib/axios";

export const getBuildings = async (page = 1) => {
  const { data } = await api.get(`/buildings/?page=${page}`);

  return data;
};

export const createBuilding = async (buildingData) => {
  const { data } = await api.post("/buildings/", buildingData);

  return data;
};

export async function updateBuilding(id, buildingData) {
  const { data } = await api.patch(`/buildings/${id}`, buildingData);

  return data;
}
export async function getBuildingById(id) {
  const { data } = await api.get(`/buildings/${id}`);

  return data;
}
