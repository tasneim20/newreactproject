import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/currentUser";

function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
  });
}

export default useCurrentUser;
