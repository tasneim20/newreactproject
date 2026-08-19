import { useQuery } from "@tanstack/react-query";
import { getMyClient } from "../api/buildingApi";

export default function useMyClient() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-client"],
    queryFn: getMyClient,
  });

  return {
    client: data,
    loading: isLoading,
  };
}
