import { useQuery } from "@tanstack/react-query";
import { getBuildingById } from "../api/buildingApi";

export default function useBuilding(id) {
  const { data, isLoading } = useQuery({
    queryKey: ["building", id],
    queryFn: () => getBuildingById(id),
    enabled: !!id,
  });

  return {
    building: data,
    loading: isLoading,
  };
}
