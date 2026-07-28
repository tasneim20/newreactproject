import api from "../../../lib/axios";

export const getBuildings = async (page = 1) => {
  const { data } = await api.get(`/buildings/?page=${page}`, {
    headers: {
      "Accept-Language": "EN",
    },
  });

  return data;
};

export const createBuilding = async (buildingData) => {
  const { data } = await api.post("/buildings", buildingData, {
    headers: {
      "Accept-Language": "EN",
    },
  });

  return data;
};
