import { useEffect, useState } from "react";
import { getBuildings } from "../api/buildingApi";

export default function useBuildings() {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBuildings = async () => {
    try {
      const response = await getBuildings();
      setBuildings(response.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBuildings();
  }, []);

  return {
    buildings,
    loading,
    fetchBuildings,
  };
}
