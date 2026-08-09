import { useQuery } from "@tanstack/react-query";
import { getBuildingUnitsList } from "../api/buildingApi";

export default function useBuildingUnitsList(buildingId, vacant) {
  const { data, isLoading } = useQuery({
    queryKey: ["buildingUnitsList", buildingId, vacant],
    queryFn: () => getBuildingUnitsList(buildingId, vacant),
    enabled: !!buildingId,
  });

  return {
    units: data || [],
    loading: isLoading,
  };
}
