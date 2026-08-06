import { useQuery } from "@tanstack/react-query";
import { getBuildings } from "../api/buildingApi";

export default function useBuildings() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["buildings"],
    queryFn: () => getBuildings(),
    retry: false,
  });

  return {
    buildings: data?.content ?? [],
    loading: isLoading,
    fetchBuildings: refetch,
  };
}
