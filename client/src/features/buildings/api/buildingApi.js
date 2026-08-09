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
export async function getMyClient() {
  const { data } = await api.get("/me/client");
  return data;
}
export const getUnits = async (page = 1) => {
  const { data } = await api.get(`/units/?page=${page}`);
  return data;
};
export const createUnit = async (unitData) => {
  const { data } = await api.post("/units/", unitData);
  return data;
};
export const getUnitTypes = async () => {
  const { data } = await api.get("/unit-types/");
  return data;
};

export const getBuildingUnitsList = async (buildingId, vacant) => {
  const params = new URLSearchParams();

  params.append("buildingId", buildingId);

  if (vacant !== undefined) {
    params.append("vacant", vacant);
  }

  const { data } = await api.get(`/units/list?${params.toString()}`);

  return data;
};
